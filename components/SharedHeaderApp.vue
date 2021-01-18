<template>
  <div class="header">
    <router-link to="/home" class="header__logo">
      <img src="../assets/logo.png" alt="Logo" />
    </router-link>
    <div class="header__icons">
      <img src="../assets/icons/bell.svg" alt="bell" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="36"
        viewBox="0 0 24 24"
        width="36"
        class="new-post__left-icon"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
          fill="#4F56E9"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "SharedHeaderApp",
  components: {},
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  right: 0;
  top: 0;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  padding: 5px 25px;
  height: 12vh;
  z-index: 1;
  align-items: center;
  background: white;
  &__logo {
    grid-column: 2;
    justify-self: center;
    img {
      max-height: 12vh;
    }
  }
  &__icons {
    grid-column: 3;
    justify-self: center;
    img {
      margin: 0 10px;
      cursor: pointer;
    }
  }
}
</style>