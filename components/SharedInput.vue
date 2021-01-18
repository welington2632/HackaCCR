<template>
  <input :type="type" :placeholder="placeholder" class="input" />
</template>

<script>
export default {
  name: "SharedInput",
  props: {
    type: String,
    placeholder: String,
  },
};
</script>

<style lang="scss" scoped>
.input {
  margin: 10px 0;
  color: #444;
  opacity: 0.7;
  border: none;
  outline: none;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  height: 50px;
  text-indent: 10px;
}
</style>