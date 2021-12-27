<template>
  <div class="profile" id="aboutme">
    <b-card
      title="David Suárez"
      img-src="https://avatars.githubusercontent.com/u/6282017"
      img-alt="profile"
      img-top
    >
      <b-card-text>
        Web fullstack developer
      </b-card-text>

      <b-list-group>
        <b-list-group-item v-for="{ title, url, icon } in links" :key="icon">
          <b-link :href="url" target="_blank">
            <b-icon :icon="icon"></b-icon> {{ title }}
          </b-link>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Profile extends Vue {
  links = [
    {
      icon: "mailbox",
      url: "mailto:contact@davidsuarez.dev",
      title: "Email",
    },
    {
      icon: "github",
      url: "https://github.com/dav1dsrz",
      title: "Github",
    },
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/davidsuarezcdo/",
      title: "Linkedin",
    },
  ];
}
</script>

<style scoped>
.list-group-item a {
  text-decoration: none;
  color: inherit;
}
.list-group-item svg {
  margin-right: 10px;
}
</style>
