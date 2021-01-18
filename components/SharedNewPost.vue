<template>
  <div class="new-post" @click="abrirModal">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30"
      viewBox="0 0 24 24"
      width="30"
      class="new-post__left-icon"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
        fill="#444444"
      />
    </svg>
    <input
      type="text"
      placeholder="No que você está pensando?"
      class="new-post__message"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="32"
      viewBox="0 0 24 24"
      width="32"
      class="new-post__right-icon"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="#4f56e9" />
    </svg>
  </div>
</template>

<script >
export default {
  name: "SharedNewPost",
  methods: {
    abrirModal() {
      this.$emit("newpostclick");
    },
  },
};
</script>

<style lang="scss" scoped>
.new-post {
  position: relative;
  &__left-icon {
    opacity: 0.4;
    position: absolute;
    top: 30px;
    left: 15px;
  }
  &__right-icon {
    opacity: 1;
    position: absolute;
    top: 25px;
    right: 30px;
  }
  &__message {
    opacity: 0.4;
    width: 100%;
    height: 80px;
    background: white;
    border: none;
    text-indent: 80px;
    border-radius: 10px;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
  }
}
</style>