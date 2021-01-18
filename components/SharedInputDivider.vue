<template>
  <div class="divider">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "SharedInputDivider",
};
</script>
<style lang="scss" scoped>
.divider {
  display: flex;
  justify-content: space-between;
  * {
    width: 48%;
  }
}
</style>