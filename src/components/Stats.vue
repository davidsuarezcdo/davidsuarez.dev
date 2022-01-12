<template>
  <div id="stats">
    <h3>
      <font-awesome-icon icon="chart-line" />
      {{ $t("title.stats") }} - {{ $t("title.last_month") }}
    </h3>
    <b-card>
      <b-skeleton-wrapper :loading="isLoandingStats">
        <template #loading>
          <Skeleton :max_items="3" />
        </template>

        <b-list-group>
          <b-list-group-item>
            <font-awesome-icon icon="laptop-code" />
            {{ $t("stats.main_code", { language: topLanguage }) }}
            <SkillIcon :icon="topLanguage" />
          </b-list-group-item>
          <b-list-group-item>
            <font-awesome-icon icon="hourglass-start" />
            {{ $t("stats.time_coding", { hours: score_time.hoursCoding }) }}
          </b-list-group-item>
          <b-list-group-item>
            <font-awesome-icon icon="fire" />
            {{ $t("stats.top_day_coding", { day: score_time.main_day.top_day, hours: score_time.main_day.hours }) }}
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
import Skeleton from "./Skeleton.vue";
import { DateTime } from "luxon";
import { Component, Vue } from "vue-property-decorator";

interface iScoreLanguageItem {
  name: string;
  color: string;
  percent: number;
}

interface iScoreTime {
  hoursCoding: number;
  main_day: {
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
    SkillIcon,
    Skeleton
  }
})
export default class Stats extends Vue {
  isLoandingStats = true;
  hoursCoding = 0;
  score_time: iScoreTime = {
    hoursCoding: 0,
    main_day: {
      top_day: "",
      hours: 0,
      hints: 0
    }
  };
  topLanguage: string = "";

  async created() {
    this.score_time = await this.getScoreTime();
    this.topLanguage = await this.getTopLanguage();
    this.isLoandingStats = false;
  }

  getMainDay(score_time: iScoreTimeItem[]) {
    const days = score_time.reduce(function(days: any, time: any) {
      const value = time.grand_total.total_seconds;

      if (value > 0) {
        const date = DateTime.fromSQL(time.range.date)
          .setLocale("es-MX")
          .setZone("America/Mexico_City")
          .toFormat("cccc");

        if (!(date in days)) {
          days[date] = { value: 0, hints: 0 };
        }
        days[date].hints++;
        days[date].value += value;
      }

      return days;
    }, {});

    let [top_day] = Object.keys(days).sort((a, b) => days[b].value - days[a].value);

    return {
      top_day,
      hours: Math.round(days[top_day].value / 60 / 60 / days[top_day].hints),
      hints: days[top_day].hints
    };
  }

  async getTopLanguage(): Promise<string> {
    return this.fetchFromWakatime(
      "f1b6ea31-b7a3-4b2d-9078-ea8eee2adf4b",
      (items: iScoreLanguageItem[]) =>
        items.filter(i => i.name != "Other").sort((a, b) => b.percent - a.percent)[0].name
    );
  }

  getScoreTime() {
    return this.fetchFromWakatime("9e6c1cf9-113f-4d94-b664-2b0e075ca2bc", (score_time: iScoreTimeItem[]) => ({
      hoursCoding: Math.round(score_time.reduce((i, j) => i + j.grand_total.total_seconds, 0) / 60 / 60),
      main_day: this.getMainDay(score_time)
    }));
  }

  fetchFromWakatime(url_id: string, parser?: CallableFunction) {
    const url_path = `https://wakatime.com/share/@davidsrz/${url_id}.json`;
    return Store(`wakatime_url:${url_path}`, 120, async () => {
      let response = await fetchJsonp(url_path);
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
