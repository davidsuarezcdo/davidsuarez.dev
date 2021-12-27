<template>
  <b-navbar align="center">
    <b-navbar-nav fill>
      <b-nav-item href="#aboutme">{{ $t("title.about") }}</b-nav-item>
      <b-nav-item href="#profile">{{ $t("title.profile") }}</b-nav-item>
      <b-nav-item href="#skills">{{ $t("title.skills") }}</b-nav-item>
      <b-nav-item href="#courses">{{ $t("title.courses") }}</b-nav-item>
      <b-nav-item href="#projects">{{ $t("title.projects") }}</b-nav-item>
      <b-nav-item href="#contact">{{ $t("title.contact") }}</b-nav-item>
      <b-nav-item-dropdown text="Lang" right>
        <template v-for="language of languages">
          <b-dropdown-item :key="language">{{ language }}</b-dropdown-item>
        </template>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Navbar extends Vue {
  languages: string[] = ["EN", "ES"];

  isActive(language: string): boolean {
    console.log(language);
    return false;
    // return this.$i18n.locale === language;
  }
}
</script>
