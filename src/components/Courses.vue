<template>
  <div id="courses">
    <h3>
      <font-awesome-icon icon="graduation-cap"></font-awesome-icon>
      {{ $t("title.courses") }}
    </h3>
    <b-card>
      <b-skeleton-wrapper :loading="isLoandingCourses">
        <template #loading>
          <div class="text-center">
            <b-skeleton-table :rows="5" :columns="fields.length"></b-skeleton-table>
          </div>
        </template>

        <b-table small no-border-collapse striped hover :items="items" :fields="fields">
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
}

import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
@Component({
  filters: {
    diplomaLink(link: string): string {
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
      key: "career",
      label: this.$i18n.t("coursesTable.career")
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
    let key_stored: string = "platzi_courses";
    let courses: iCourse[] = JSON.parse(localStorage.getItem(key_stored) as string);
    if (courses === null || courses?.length === 0) {
      let { data: response } = await axios.get(
        "https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@david.suarez"
      );

      courses = ((response?.userData?.courses || []) as iCourse[])
        .sort((a, b) => {
          if (a.career < b.career) return -1;
          if (a.career > b.career) return 1;
          return 0;
        })
        .filter(course => this.validCourse(course));
    }

    localStorage.setItem(key_stored, JSON.stringify(courses));
    this.isLoandingCourses = false;
    this.items = courses;
  }

  validCourse(course: iCourse): boolean {
    return !this.ignore.includes(course.id);
  }
}
</script>

<style scoped>
table img {
  width: 20px;
  max-height: 20px;
}
table {
  text-align: center;
}
</style>
