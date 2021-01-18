<template>
  <div :class="modalAberto ? 'modal' : 'modal-fechado'">
    <div class="modal__content">
      <button class="modal__close" @click="fecharModal">X</button>
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SharedModalPost",
  methods: {
    fecharModal() {
      console.log("clicou em fechar modal");
      this.$emit("fecharModal");
      if (this.modalAberto) this.modalAberto == false;
    },
  },
  props: {
    modalAberto: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.modal:before {
  content: "";
  width: 100%;
  height: 100vh;
  display: block;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  z-index: 4;
}
.modal-fechado {
  display: none;
}
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  &__content {
    width: 50%;
    background-color: white;
    z-index: 6;
    margin-top: 100px;
    position: relative;
    padding: 5px 50px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    .modal__close {
      position: absolute;
      top: -25px;
      right: -25px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: none;
      color: white;
      font-size: 1.8rem;
      font-weight: bold;
      background: #4f56e9;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>