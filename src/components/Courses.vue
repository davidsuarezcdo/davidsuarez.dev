<template>
  <div id="courses">
    <h3>
      <font-awesome-icon icon="graduation-cap" />
      {{ $t("title.courses") }}
    </h3>
    <b-card>
      <b-skeleton-wrapper :loading="isLoandingCourses">
        <template #loading><Skeleton :random_items="true"/></template>
        <b-table small no-border-collapse :items="items" :fields="fields.filter(field => !field.hide)">
          <template #cell(badge)="item">
            <img :src="item.value" alt="badge" />
          </template>

          <template #cell(title)="item">
            {{ item.value }}
          </template>

          <template #cell(diploma_link)="item">
            <b-link :href="item.value | diplomaLink" target="_blank">
              <font-awesome-icon icon="eye" />
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
      if (link.startsWith("http")) return link;
      return `https://platzi.com${link}`;
    }
  }
})
export default class Courses extends Vue {
  isLoandingCourses = true;

  fields: iField[] = [
    {
      key: "badge",
      label: ""
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
      let courses: iCourse[] = await require("../data/courses.json");
      return courses
        .sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
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
}
</style>
