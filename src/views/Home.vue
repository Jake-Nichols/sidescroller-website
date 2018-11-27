<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <gameInfo msg="Welcome to the Apocalypse"/>
  </div>
</template>

<script>
// @ is an alias to /src
import gameInfo from "@/components/gameInfo.vue";

export default {
  name: "home",
  components: {
    gameInfo
  }
};
</script>
