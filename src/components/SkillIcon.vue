<template>
  <img :src="getIcon()" :alt="icon" style="width: 20px !important;" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SkillIcon extends Vue {
  @Prop({ type: String, required: true })
  public icon!: string;

  getIcon(): string {
    const svg = this.icon.replace(/\./g, "").toLowerCase();
    let type = "original";
    let plain = ["kubernetes"];
    if (plain.includes(svg)) type = "plain";
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${svg}/${svg}-${type}.svg`;
  }
}
</script>
