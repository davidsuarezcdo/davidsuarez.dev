<template>
  <div id="app">
    <Navbar />
    <Profile />
    <div class="content">
      <AboutMe />
      <Stats />
      <Projects />
      <Courses />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import AboutMe from "./components/About.vue";
import Stats from "./components/Stats.vue";
import Courses from "./components/Courses.vue";
import Profile from "./components/Profile.vue";
import Projects from "./components/Projects.vue";

export default {
  name: "App",
  components: {
    Navbar,
    AboutMe,
    Stats,
    Courses,
    Profile,
    Projects
  }
};
</script>

<style lang="scss">
#app {
  display: grid;
  margin: auto;
  padding-bottom: 20px;
  grid-gap: 30px;
  grid-template-columns: 240px 1fr;
  grid-template-areas: "navbar navbar" "profile content";
  max-width: 1200px;
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
}
@media (max-width: 1200px) {
  #app {
    .navbar {
      border-radius: 0px;
    }
  }
}
@media (max-width: 700px) {
  #app {
    margin: 0px;
    grid-template-columns: 1fr;
    grid-template-areas: "navbar" "profile" "content";
    max-width: 100%;
    .navbar {
      .nav-item:not(.dropdown) {
        display: none;
      }
    }
    .content {
      margin: 0px 10px;
    }
  }
}
.table > :not(:first-child) {
  border-top: none !important;
}
</style>
