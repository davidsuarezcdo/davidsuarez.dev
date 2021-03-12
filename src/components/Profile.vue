<template>
  <div class="profile">
    Perfil
    <hr>
    <div class="picture">
      <img
        src="https://avatars.githubusercontent.com/u/6282017?s=460&u=beb8ec447ce57f1b5036b2c22c232bde793a705e&v=4"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Profile extends Vue {}
</script>

<style scoped>
.profile {
  max-width: 100%;
}
.profile .picture img {
  width: 100%;
}
.profile img {
  object-fit: cover;
}
</style>
