<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
@font-face {
  font-family: "Gotham";
  src: url("assets/fonts/gothammedium-webfont.woff2") format("woff2"),
    url("assets/fonts/gothammedium-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Gotham";
  src: url("assets/fonts/gotham-bold-webfont.woff2") format("woff2"),
    url("assets/fonts/gotham-bold-webfont.woff") format("woff");
  font-weight: bold;
  font-style: normal;
}

body,
html {
  margin: 0;
  background: #f4f4f4;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

* {
  font-family: "Gotham";
  box-sizing: border-box;
}
</style>
