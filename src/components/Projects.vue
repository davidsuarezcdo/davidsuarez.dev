<template>
  <div id="projects">
    <h3>
      <font-awesome-icon icon="briefcase" />
      {{ $t("title.projects") }}
    </h3>
    <b-card-group deck>
      <b-card v-for="item of items" :key="item.name">
        <img class="project-logo" :src="getImgUrl(item.logo)" :alt="item.name" />

        <div class="d-flex justify-content-between">
          <div>
            <h1 class="card-title">{{ item.name }}</h1>
            <h2 class="card-subtitle mb-2 text-muted">{{ item.role }}</h2>
          </div>
          <small class="time-period">{{ timePeriod(item.years) }}</small>
        </div>

        <p>
          {{ item.description }}
        </p>

        <div class="d-flex justify-content-between">
          <div>
            <template v-for="link of item.links">
              <b-link :href="link.url" target="_blank" :key="link.url">
                <font-awesome-icon :icon="link.icon" />
                {{ link.title }}
              </b-link>
            </template>
          </div>
          <div class="project-technologies">
            <template v-for="tech of item.technologies">
              <SkillIcon :icon="tech" :key="tech" :title="tech" />
            </template>
          </div>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script lang="ts">
import SkillIcon from "./SkillIcon.vue";
import { Component, Vue } from "vue-property-decorator";
import { DateTime } from "luxon";

interface iProject {
  logo: string;
  name: string;
  role: string;
  description: string;
  years: string[];
  technologies: string[];
  links: {
    url: string;
    icon: string;
    title: string;
  }[];
}

@Component({
  components: {
    SkillIcon
  }
})
export default class Projects extends Vue {
  public items: iProject[] = [];

  async mounted() {
    this.items = await require("../data/projects.json");
  }

  getImgUrl(image: string): string {
    const images = require.context("../assets/images/projects", false, /\.(png|jpe?g)$/);
    return images(`./${image}`);
  }

  timePeriod(times: string[]): string {
    const format = "MMM yyyy";
    let [from, until = DateTime.now()] = times.map(i => DateTime.fromFormat(i, format));

    let months = Math.trunc(until.diff(from, "months").get("months"));
    let years = Math.trunc(until.diff(from, "years").get("years"));

    function formatDate(date: DateTime): string {
      return date
        .setLocale("es")
        .setZone("America/Mexico_City")
        .toFormat(format)
        .capitalize();
    }

    let period = `${formatDate(from)} - ${formatDate(until)}`;
    if (until.toISODate() == DateTime.now().toISODate()) {
      period = `${formatDate(from)} - ${this.$i18n.t("now")}`;
    }
    if (years > 0) {
      return `${period} (${years} ${this.$i18n.tc("years", years)})`;
    } else if (months > 0) {
      return `${period} (${months} ${this.$i18n.tc("months", months)})`;
    }
    return period;
  }
}
</script>

<style lang="scss">
#projects {
  .card-deck {
    .card {
      border-radius: 0px;
      &:not(:first-child) {
        border-top: none;
      }
    }
    .card-body {
      h1 {
        font-size: 1.2rem;
        margin-bottom: 0.25rem;
      }
      h2 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        opacity: 0.9;
      }
      .project-logo {
        width: 100px;
        object-fit: contain;
        float: left;
        padding: 0px 10px;
        margin-right: 10px;
        border-radius: 2px;
      }
      .project-technologies {
        img {
          cursor: help;
          opacity: 0.5;
          margin: 0px 2px;
          &:hover {
            opacity: 1;
          }
        }
      }
      a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.5);
        padding-right: 10px;
        &:hover {
          color: rgba(0, 0, 0, 1);
        }
      }
      @media screen and (max-width: 768px) {
        .project-logo {
          width: 80px;
        }
        .project-technologies {
          display: none;
        }
        .time-period {
          display: none;
        }
      }
    }
  }
}
</style>
