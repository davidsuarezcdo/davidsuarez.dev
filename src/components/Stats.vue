<template>
  <div id="stats">
    <h3>
      <font-awesome-icon icon="chart-line" />
      {{ $t("title.stats") }} - {{ $t("title.last_month") }}
    </h3>
    <b-card>
      <b-skeleton-wrapper :loading="isLoandingStats">
        <template #loading>
          <div class="text-center">
            <b-skeleton-img></b-skeleton-img>
          </div>
        </template>

        <b-list-group>
          <b-list-group-item>
            <font-awesome-icon icon="rocket" />
            {{ $t("stats.main_code") }}:
            <SkillIcon :icon="topLanguage" />
            {{ topLanguage }}
          </b-list-group-item>
          <b-list-group-item>
            <font-awesome-icon icon="code" />
            {{ $t("stats.time_coding") }}: {{ score_time.hoursCoding }}
            {{ score_time.hoursCoding === 1 ? "hour" : "hours" }}
          </b-list-group-item>
          <b-list-group-item>
            <font-awesome-icon icon="fire" />
            {{ $t("stats.top_day_coding") }}: {{ score_time.mainDay.top_day }}, {{ score_time.mainDay.hours }}
            {{ score_time.mainDay.hours === 1 ? "hour" : "hours" }} avg
          </b-list-group-item>
        </b-list-group>
      </b-skeleton-wrapper>
    </b-card>
  </div>
</template>

<script lang="ts">
import Store from "../helpers/Store";
import SkillIcon from "./SkillIcon.vue";
import fetchJsonp from "fetch-jsonp";
import { DateTime } from "luxon";
import { Component, Vue } from "vue-property-decorator";

interface iScoreLanguageItem {
  name: string;
  color: string;
  percent: number;
}

interface iScoreTime {
  hoursCoding: number;
  mainDay: {
    top_day: string;
    hours: number;
    hints: number;
  };
}

interface iScoreTimeItem {
  grand_total: {
    decimal: string;
    digital: string;
    hours: number;
    minutes: number;
    text: string;
    total_seconds: number;
  };
  range: {
    date: string;
    end: string;
    start: string;
    text: string;
    timezone: string;
  };
}

@Component({
  components: {
    SkillIcon
  }
})
export default class Stats extends Vue {
  isLoandingStats = true;
  hoursCoding = 0;
  score_time: iScoreTime = {} as iScoreTime;
  topLanguage: string = "";

  async mounted() {
    this.score_time = await this.getScoreTime();
    this.topLanguage = await this.getTopLanguage();
    this.isLoandingStats = false;
  }

  getMainDay(score_time: iScoreTimeItem[]) {
    const days = score_time.reduce(function(time1: any, time2: any) {
      const value = time2.grand_total.total_seconds;

      if (value > 0) {
        const date = DateTime.fromSQL(time2.range.date).toFormat("cccc");

        if (!(date in time1)) {
          time1[date] = { value: 0, hints: 0 };
        }
        time1[date].hints++;
        time1[date].value += value;
      }

      return time1;
    }, {});

    let [top_day] = Object.keys(days).sort((a, b) => days[b].value - days[a].value);

    return {
      top_day,
      hours: Math.round(days[top_day].value / 60 / 60 / days[top_day].hints),
      hints: days[top_day].hints
    };
  }

  async getTopLanguage(): Promise<string> {
    const url = "https://wakatime.com/share/@davidsrz/f1b6ea31-b7a3-4b2d-9078-ea8eee2adf4b.json";
    return this.fetchFromWakatime(
      url,
      (score_languages: iScoreLanguageItem[]) => score_languages.sort((a, b) => b.percent - a.percent)[0].name
    );
  }

  getScoreTime() {
    const url = "https://wakatime.com/share/@davidsrz/9e6c1cf9-113f-4d94-b664-2b0e075ca2bc.json";
    return this.fetchFromWakatime(url, (score_time: iScoreTimeItem[]) => {
      return {
        hoursCoding: Math.round(score_time.reduce((i, j) => i + j.grand_total.total_seconds, 0) / 60 / 60),
        mainDay: this.getMainDay(score_time)
      };
    });
  }

  fetchFromWakatime(url: string, parser?: CallableFunction) {
    return Store(`wakatime_url:${url}`, 120, async () => {
      let response = await fetchJsonp(url);
      let { data } = await response.json();
      if (typeof parser == "function") {
        return parser(data);
      }
      return data;
    });
  }
}
</script>

<style scoped lang="scss">
#stats {
  .card {
    svg {
      margin-right: 10px;
    }
  }
}
</style>
