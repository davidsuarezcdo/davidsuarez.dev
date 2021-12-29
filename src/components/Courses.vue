<template>
  <div>
    <h3 id="courses">{{ $t("title.courses") }}</h3>
    <b-card>
      <template v-if="isLoandingCourses">
        <div :v-show="isLoandingCourses" class="text-center">
          <b-spinner variant="success" type="grow"></b-spinner>
        </div>
      </template>
      <template v-else>
        <b-table
          small
          no-border-collapse
          striped
          hover
          :items="items"
          :fields="fields"
        >
          <template #cell(badge)="item">
            <img :src="item.value" alt="badge" />
          </template>

          <template #cell(diploma_link)="item">
            <b-link :href="item.value | diplomaLink" target="_blank">
              <b-icon icon="eye"></b-icon>
            </b-link>
          </template> </b-table
      ></template>
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
    },
  },
})
export default class Courses extends Vue {
  isLoandingCourses = true;

  fields: iField[] = [
    {
      key: "badge",
      label: "",
    },
    {
      key: "career",
      label: this.$t("coursesTable.career"),
    },
    {
      key: "title",
      label: this.$t("coursesTable.course"),
    },
    {
      key: "diploma_link",
      label: this.$t("coursesTable.diploma"),
    },
  ];

  items: iCourse[] = [];

  // id's de cursos a ignorar xd
  private ignore: Number[] = [
    1859, // curso para lavarse las manos
  ];

  async mounted() {
    let key_stored: string = "platzi_courses";
    let courses: iCourse[] = JSON.parse(
      localStorage.getItem(key_stored) as string
    );
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
        .filter((course) => this.validCourse(course));
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
