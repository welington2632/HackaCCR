<template>
  <section class="section">
    <h3 class="section__title">{{ sectionName }}</h3>
    <div class="section__content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "SharedSection",
  props: {
    sectionName: String,
  },
};
</script>

<style lang="scss" scoped>
.section {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  &__content {
    display: flex;
    width: 100%;
    margin: 50px auto;
    align-items: flex-start;
    flex-wrap: wrap;
    * {
      cursor: pointer;
    }
  }
  &__title {
    font-size: 2rem;
    color: #444;
  }
}
</style>