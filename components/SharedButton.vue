<template>
  <router-link
    :to="rote"
    :class="primary ? 'button--primary' : 'button--outline'"
  >
    {{ text }}
  </router-link>
</template>

<script>
export default {
  name: "SharedButton",
  props: {
    text: String,
    rote: String,
    primary: {
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: #4f56e9;

.button--primary {
  $main-color: #4f56e9;
  background-color: $main-color;
  color: white;
  padding: 10px;
  border: none;
  height: 50px;
  margin: 30px auto 10px auto;
  cursor: pointer;
  font-weight: normal;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
}
.button--outline {
  $main-color: #4f56e9;
  background-color: transparent;
  color: $main-color;
  padding: 10px;
  border: none;
  height: 50px;
  margin: 0;
  cursor: pointer;
  font-weight: normal;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: none;
  }
}
</style>