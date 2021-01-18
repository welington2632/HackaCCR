<template>
  <li class="aside-item" :class="active ? 'active' : ''">
    <slot name="icon" class="aside-item__icon"> </slot>
    <router-link :to="to" tag="p" class="aside-item__text">{{
      text
    }}</router-link>
  </li>
</template>

<script>
export default {
  name: "SharedAsideItem",
  props: {
    icon: String,
    alt: String,
    active: Boolean,
    text: String,
    to: {
      type: String,
      default: "/home",
    },
  },
};
</script>

<style lang="scss" scoped>
.aside-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-left: auto;
  font-size: 1.3rem;
  color: #444;
  cursor: pointer;
  &.active {
    color: #4f56e9;
  }
  &__icon {
    width: 35px;
    display: block;
  }
  &__text {
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
}
</style>