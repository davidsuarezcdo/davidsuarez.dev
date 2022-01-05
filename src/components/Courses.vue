<template>
  <div id="courses">
    <h3>
      <font-awesome-icon icon="graduation-cap"></font-awesome-icon>
      {{ $t("title.courses") }}
    </h3>
    <b-card>
      <b-skeleton-wrapper :loading="isLoandingCourses">
        <template #loading><Skeleton :random_items="true"/></template>
        <b-table small no-border-collapse striped hover :items="items" :fields="fields.filter(field => !field.hide)">
          <template #cell(badge)="item">
            <img :src="item.value" alt="badge" />
          </template>

          <template #cell(diploma_link)="item">
            <b-link :href="item.value | diplomaLink" target="_blank">
              <b-icon icon="eye"></b-icon>
            </b-link>
          </template>
        </b-table>
      </b-skeleton-wrapper>
    </b-card>
  </div>
</template>

<script lang="ts">
import Skeleton from "./Skeleton.vue";

interface iCourse {
  id: Number;
  title: String;
  badge: String;
  url: String;
  career: String;
  diploma_link: String;
}

interface iField {
  key: keyof iCourse;
  label: any;
  hide?: Boolean;
}

import Store from "../helpers/Store";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    Skeleton
  },
  filters: {
    diplomaLink(link: string): string {
      return `https://platzi.com${link}`;
    }
  }
})
export default class Courses extends Vue {
  hideMobile = window.matchMedia("(max-width: 700px)").matches;
  isLoandingCourses = true;

  fields: iField[] = [
    {
      key: "badge",
      label: ""
    },
    {
      key: "career",
      label: this.$i18n.t("coursesTable.career"),
      hide: this.hideMobile
    },
    {
      key: "title",
      label: this.$i18n.t("coursesTable.course")
    },
    {
      key: "diploma_link",
      label: this.$i18n.t("coursesTable.diploma")
    }
  ];

  items: iCourse[] = [];

  // id's de cursos a ignorar xd
  private ignore: Number[] = [
    1859 // curso para lavarse las manos
  ];

  async mounted() {
    this.items = await Store("platzi_courses", 0, async () => {
      let response = await require("../data/courses.json");
      return ((response?.userData?.courses || []) as iCourse[])
        .sort((a, b) => {
          if (a.career < b.career) return -1;
          if (a.career > b.career) return 1;
          return 0;
        })
        .filter(course => !this.ignore.includes(course.id));
    });

    this.isLoandingCourses = false;
  }
}
</script>

<style lang="scss" scoped>
#courses {
  table img {
    width: 20px;
    max-height: 20px;
  }
  table {
    text-align: center;
  }
}
</style>
