<template>
  <img :src="getIcon()" :alt="icon" style="width: 20px !important;" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    icon: String
  }
})
export default class SkillIcon extends Vue {
  getIcon(): string {
    const svg = this.$props.icon.replace(/\./g, "").toLowerCase();
    let type = "original";
    let plain = ["nestjs"];
    if (plain.includes(svg)) {
      type = "plain";
    }
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${svg}/${svg}-${type}.svg`;
  }
}
</script>
