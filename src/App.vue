<template>
  <div id="app">
    <aside>
      <Profile />
    </aside>
    <main>
      <Courses />
    </main>
  </div>
</template>

<script>
import Courses from "./components/Courses.vue";
import Profile from "./components/Profile.vue";

export default {
  name: "App",
  components: {
    Courses,
    Profile
  },
};
</script>

<style>
#app {
  padding: 0px 50px;
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-column-gap: 30px;
  margin: 20px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}
</style>
