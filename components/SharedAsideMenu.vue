<template>
  <aside class="asideMenu">
    <slot name="profile" class="asideMenu__profiel"> </slot>
    <ul class="asideMenu__items">
      <slot> </slot>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "SharedAsideMenu",
};
</script>

<style lang="scss">
.asideMenu {
  width: 20%;
  height: 100vh;
  background: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  .my-profile {
    border-bottom: 2px solid rgba(0, 0, 0, 0.03);
  }
}
</style>