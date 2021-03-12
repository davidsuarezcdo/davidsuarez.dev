<template>
  <div class="courses">
    Cursos
    <hr />
    <table>
      <thead>
        <tr>
          <th>#!</th>
          <th>Carrera</th>
          <th>Título</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in items">
          <tr v-if="validCourse(item)" :key="item.id">
            <td><img :src="item.badge" alt="badge" /></td>
            <td>{{ item.career }}</td>
            <td>{{ item.title }}</td>
            <td>
              <a :href="item.diploma_link | diplomaLink" target="_blank">
                Ver diploma
              </a>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
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
  private items: iCourse[] = [];
  // id's de cursos a ignorar xd

  private ignore: Number[] = [
    1859, // curso para lavarse las manos
  ];

  async mounted() {
    let courses: iCourse[] = [];
    let key_stored: string = "platzi_courses";
    let data_stored: any = localStorage.getItem(key_stored);
    if (!data_stored) {
      let { data: response } = await axios.get(
        "https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@david.suarez"
      );

      data_stored = response;
      courses = data_stored?.userData?.courses || [];

      courses.sort((a, b) => {
        if (a.career < b.career) return -1;
        if (a.career > b.career) return 1;
        return 0;
      });

      localStorage.setItem(key_stored, JSON.stringify(courses));
    } else {
      courses = JSON.parse(data_stored);
    }
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
body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
}

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

table {
  
}

table th,
table td {
  /* padding: .625em; */
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}
</style>
