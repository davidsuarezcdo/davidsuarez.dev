<template> </template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SkillIcon from "./SkillIcon.vue";

interface iSKill {
  name: string;
  experience: string;
  years: number;
}

@Component({})
export default class Skills extends Vue {
  skills = [
    {
      title: "HTML5",
      experience: ""
    },
    {
      title: "CSS3",
      experience: "GRID, Flexbox, CSS Variables, CSS Modules"
    },
    {
      title: "JavaScript",
      experience: ""
    }
  ];

  percent() {}
}
</script>

<style scoped></style>
