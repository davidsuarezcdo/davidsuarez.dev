<template>
  <div id="app">
    <Navbar />
    <Profile />
    <div class="content">
      <AboutMe />
      <Courses />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import AboutMe from "./components/About.vue";
import Courses from "./components/Courses.vue";
import Profile from "./components/Profile.vue";

export default {
  name: "App",
  components: {
    Navbar,
    AboutMe,
    Courses,
    Profile,
  },
};
</script>

<style>
* {
  scroll-behavior: smooth;
}

#app {
  display: grid;
  margin: auto;
  grid-gap: 30px;
  grid-template-columns: 240px 1fr;
  grid-template-areas: "navbar navbar" "profile content";
  max-width: 1200px;
}

.content {
  display: grid;
  grid-gap: inherit;
}

.navbar {
  grid-area: navbar;
}
.profile {
  grid-area: profile;
}
.content {
  grid-area: content;
}
</style>
