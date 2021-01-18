<template>
  <div
    @click="acionarCategoria"
    class="category"
    :class="ativo ? 'active' : ''"
  >
    <slot> </slot>
    <h3 class="category__name">{{ categoryName }}</h3>
  </div>
</template>

<script>
export default {
  name: "SharedCategoryCard",
  props: {
    categoryName: String,
  },
  data() {
    return {
      ativo: false,
    };
  },
  methods: {
    acionarCategoria() {
      this.ativo = !this.ativo;
      this.$emit("filtroCategoria", this.categoryName);
    },
  },
};
</script>

<style lang="scss" scoped>
.category {
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 10px;

  &__icon {
    padding: 25px;
    background: white;
    border-radius: 50%;
  }
  &__name {
    color: #4f56e9;
    text-align: center;
    font-size: 1.3rem;
    width: 80%;
    font-weight: normal;
  }
  svg {
    background: white;
    padding: 35px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    path:last-child {
      fill: #4f56e9;
    }
  }
}
.category.active {
  svg {
    background: #4f56e9;
    padding: 35px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    path:last-child {
      fill: white;
    }
  }
}
</style>