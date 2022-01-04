<template>
  <div id="aboutme">
    <b-card img-src="../assets/images/profile.png" img-alt="profile" img-top>
      <b-card-title>
        David Suárez
      </b-card-title>
      <b-card-sub-title class="mb-2">
        <font-awesome-icon icon="code" />
        Web fullstack developer
      </b-card-sub-title>

      <b-list-group flush>
        <b-link v-for="{ title, url, icon } in links" :key="title" :href="url" target="_blank">
          <b-list-group-item>
            <font-awesome-icon :icon="icon" />
            {{ title }}
          </b-list-group-item>
        </b-link>
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
      icon: "envelope",
      url: "mailto:contact@davidsuarez.dev",
      title: "Email"
    },
    {
      icon: ["fab", "github-alt"],
      url: "https://github.com/dav1dsrz",
      title: "Github"
    },
    {
      icon: ["fab", "linkedin-in"],
      url: "https://www.linkedin.com/in/davidsuarezcdo/",
      title: "Linkedin"
    },
    {
      icon: ["fab", "steam"],
      url: "https://steamcommunity.com/id/david_srz/",
      title: "Steam"
    },
    {
      icon: ["fab", "spotify"],
      url: "https://open.spotify.com/user/12151888949",
      title: "Spotify"
    }
  ];
}
</script>

<style scoped lang="scss">
#aboutme {
  .list-group {
    a {
      text-decoration: none;
      color: inherit;
    }
    svg {
      margin-right: 10px;
    }
  }
}
</style>
