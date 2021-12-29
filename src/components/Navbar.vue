<template>
  <b-navbar align="center" variant="success" type="dark" sticky fixed>
    <b-navbar-brand href="#">DS</b-navbar-brand>
    <b-navbar-nav class="ml-auto" align="right" fill>
      <b-nav-item href="#skills">{{ $t("title.skills") }}</b-nav-item>
      <b-nav-item href="#courses">{{ $t("title.courses") }}</b-nav-item>
      <b-nav-item href="#projects">{{ $t("title.projects") }}</b-nav-item>
      <b-nav-item href="#contact">{{ $t("title.contact") }}</b-nav-item>
      <b-nav-item-dropdown :text="$t('language')">
        <template v-for="{ title, value } of languages">
          <b-dropdown-item
            :key="value"
            :active="isActive(value)"
            @click="changeLanguage"
            :data-value="value"
          >
            {{ title }}
          </b-dropdown-item>
        </template>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Navbar extends Vue {
  languages = [
    { title: "English", value: "en" },
    { title: "Español", value: "es" },
  ];

  isActive(language: string): boolean {
    let [current] = this.$i18n.locale.split("-");
    return language == current;
  }

  changeLanguage(event: any) {
    let value = event.target.dataset.value;
    this.$i18n.locale = value;
  }
}
</script>

<style scoped lang="scss">
.navbar {
  color: white !important;
  padding: 5px 25px;
  border-radius: 0px 0px 5px 5px;
  .navbar-nav {
    margin-left: auto;
  }
  .navbar-brand {
    font-family: "True Lies", Courier, "Lucida Console", monospace;
    src: url("../assets/fonts/truelies.ttf");
  }
}
</style>
