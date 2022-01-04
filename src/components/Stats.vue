<template>
  <div id="stats">
    <h3>
      <font-awesome-icon icon="chart-line" />
      {{ $t("title.stats") }} - {{ $t("title.last_month") }}
    </h3>
    <b-card>
      <b-list-group>
        <b-list-group-item>
          <font-awesome-icon icon="rocket" />
          {{ $t("stats.main_code") }}:
          <SkillIcon :icon="topLanguage" />
          {{ topLanguage }}
        </b-list-group-item>
        <b-list-group-item>
          <font-awesome-icon icon="code" />
          {{ $t("stats.time_coding") }}: {{ hoursCoding }} {{ hoursCoding === 1 ? "hour" : "hours" }}
        </b-list-group-item>
        <b-list-group-item>
          <font-awesome-icon icon="fire" />
          {{ $t("stats.top_day_coding") }}: {{ mainDay.top_day }}, {{ mainDay.hours }}
          {{ mainDay.hours === 1 ? "hour" : "hours" }} avg
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script lang="ts">
import SkillIcon from "./SkillIcon.vue";
import fetchJsonp from "fetch-jsonp";
import { DateTime } from "luxon";
import { Component, Vue } from "vue-property-decorator";

interface iScoreLanguage {
  name: string;
  color: string;
  percent: number;
}

interface iScoreTime {
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
  hoursCoding = 0;
  topLanguage = "";
  mainDay = {};

  constructor() {
    super();
  }

  async mounted() {
    let score_languages = await this.getScoreLanguages();

    let score_time = await this.getScoreTime();

    this.hoursCoding = Math.round(score_time.reduce((i, j) => i + j.grand_total.total_seconds, 0) / 60 / 60);
    this.topLanguage = score_languages.sort((a, b) => b.percent - a.percent)[0].name;

    this.mainDay = this.getMainDay(score_time);
  }

  getMainDay(score_time: iScoreTime[]) {
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

  async getScoreLanguages() {
    let response = await fetchJsonp("https://wakatime.com/share/@davidsrz/f1b6ea31-b7a3-4b2d-9078-ea8eee2adf4b.json");
    let data: iScoreLanguage[] = (await response.json()).data || [];
    return data;
  }

  async getScoreTime() {
    let response = await fetchJsonp("https://wakatime.com/share/@davidsrz/9e6c1cf9-113f-4d94-b664-2b0e075ca2bc.json");
    let data: iScoreTime[] = (await response.json()).data || [];
    return data;
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
