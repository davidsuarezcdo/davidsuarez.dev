<template>
  <div>
    <b-skeleton v-for="index in max_items" :key="index" :animation="animation" :width="width()" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Skeleton extends Vue {
  @Prop({ type: String, default: "wave" })
  public animation!: string;

  @Prop({ type: Number, default: 3 })
  public max_items!: number;

  @Prop({ type: Boolean, default: false })
  public random_items!: boolean;

  mounted() {
    if (this.random_items) {
      this.max_items = this.random(this.max_items, this.max_items * 2);
    }
  }

  random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  width() {
    return `${this.random(60, 90)}%`;
  }
}
</script>
