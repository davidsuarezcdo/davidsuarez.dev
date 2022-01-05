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
            <h1>{{ item.name }}</h1>
            <h2>{{ item.role }}</h2>
          </div>
          <small class="time-period">{{ timePeriod(item.years) }}</small>
        </div>

        <p>
          {{ item.description }}
        </p>

        <div class="d-flex justify-content-between">
          <div>
            <template v-for="link of item.links">
              <a :href="link.url" target="_blank" :key="link.url">
                <font-awesome-icon :icon="link.icon" />
                {{ link.title }}
              </a>
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

@Component({
  components: {
    SkillIcon
  }
})
export default class Projects extends Vue {
  public items = [
    {
      logo: "comparaonline.png",
      name: "Compara Online",
      role: "Backend software engineer",
      description: `ComparaOnline is a technology company passionate about developing solutions to empower consumers by offering them a comprehensive and independent comparison tool for insurance and financial products.`,
      years: ["Jan 2022"],
      technologies: ["Typescript", "Nest.JS"],
      links: [
        {
          url: "https://www.comparaonline.com/",
          icon: "globe",
          title: "Website"
        },
        {
          url: "https://www.linkedin.com/company/compara/",
          icon: ["fab", "linkedin-in"],
          title: "LinkedIn"
        },
        {
          url: "https://www.facebook.com/comparamexico",
          icon: ["fab", "facebook"],
          title: "Facebook"
        }
      ]
    },
    {
      logo: "referencecheck.png",
      name: "REFERENCECHECK MX",
      role: "Web fullstack developer",
      description: `The company offers to check the background of your possible clients, etc. My role help to developed a web system from scratch, it helped to replacement bunch of excel spreadsheets, automating tasks and implementing new workflows.`,
      years: ["Jul 2016", "Jan 2022"],
      technologies: [
        "PHP",
        "typescript",
        "javascript",
        "jquery",
        "express",
        "socket.io",
        "node.js",
        "mysql",
        "redis",
        "git",
        "docker",
        "composer",
        "centos"
      ],
      links: [
        {
          url: "https://referencecheck.mx/",
          icon: "globe",
          title: "Website"
        },
        {
          url: "https://www.linkedin.com/company/reference-check-mx/",
          icon: ["fab", "linkedin-in"],
          title: "LinkedIn"
        },
        {
          url: "https://www.facebook.com/referencecheckmx",
          icon: ["fab", "facebook"],
          title: "Facebook"
        }
      ]
    },
    {
      logo: "americasectorcoop.jpg",
      name: "America Sector Coop",
      role: "Software engineer",
      description: `I created a comunnity for L4D2 players to play together in a custom server with a bunch of plugins from sourcemod and some writed for me.`,
      years: ["Aug 2014", "Oct 2019"],
      technologies: ["debian", "php", "mysql", "git", "docker", "composer", "wordpress"],
      links: [
        {
          url: "https://americasectorcoop.com",
          icon: "globe",
          title: "Website"
        },
        {
          url: "https://www.facebook.com/groups/americasectorcoop",
          icon: ["fab", "facebook"],
          title: "Facebook"
        },
        {
          url: "https://github.com/americasectorcoop",
          icon: ["fab", "github"],
          title: "Github"
        },
        {
          url: "https://steamcommunity.com/groups/americasectorcoop",
          icon: ["fab", "steam"],
          title: "Steam"
        }
      ]
    },
    {
      logo: "tecred.png",
      name: "TECRED",
      role: "Web developer",
      description: `Outsourcing company contracted by Kodak and The Government of Nuevo León. My Experience in Tecred: Developed a system module to visualize PDFs papers (notarias, oficialías). Coded with jQuery, php, bootstrap, Technical support, Database administration`,
      years: ["Jun 2014", "Jul 2016"],
      technologies: ["debian", "php", "mysql", "git", "wordpress", "bootstrap", "jquery"],

      links: [
        {
          url: "https://www.tecred.com.mx/",
          icon: "globe",
          title: "Website"
        },
        {
          url: "https://www.facebook.com/tecred.monterrey",
          icon: ["fab", "facebook"],
          title: "Facebook"
        }
      ]
    }
  ];

  getImgUrl(image: string): string {
    const images = require.context("../assets/images/projects", false, /\.(png|jpe?g)$/);
    return images(`./${image}`);
  }

  timePeriod(times: string[]): string {
    const format = "MMM yyyy";
    let [from, until = DateTime.now()] = times.map(i => DateTime.fromFormat(i, format));

    let months = Math.trunc(until.diff(from, "months").get("months"));
    let years = Math.trunc(until.diff(from, "years").get("years"));

    let period = `${from.toFormat(format)} - ${until.toFormat(format)}`;
    if (until.toISODate() == DateTime.now().toISODate()) {
      period = `${from.toFormat(format)} - ${this.$i18n.t("now")}`;
    }
    if (years > 0) {
      return `${period} (${years} ${years > 1 ? "years" : "year"})`;
    } else if (months > 0) {
      return `${period} (${months} ${months > 1 ? "months" : "month"})`;
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
      }
      .project-logo {
        width: 100px;
        object-fit: contain;
        float: left;
        padding: 0px 10px;
        margin-right: 10px;
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
