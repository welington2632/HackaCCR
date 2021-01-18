<template>
  <div class="finish">
    <div class="finish__content">
      <img src="../assets/logo.png" alt="logo.png" class="finish__logo" />
      <p class="finish__subtitle">Confirme seus dados</p>
      <SharedProfilePicture class="finish__picture" />
      <form action="" class="finish__form">
        <SharedInputDivider>
          <SharedInput type="text" placeholder="Nome" />
          <SharedInput type="text" placeholder="Sobrenome" />
        </SharedInputDivider>
        <SharedInput type="email" placeholder="E-mail" />
        <SharedInput type="text" placeholder="Telefone" />
        <SharedInput type="password" placeholder="Senha" />

        <label for="#" class="finish__data-nasc">Data de nascimento</label>
        <SharedInput type="date" placeholder="Data de Nascimento" />
        <SharedInputDivider>
          <SharedInput type="text" placeholder="Pais" />
          <SharedInput type="text" placeholder="Estado" />
        </SharedInputDivider>
        <SharedInput type="text" placeholder="Interesses" />
        <SharedInput type="text" placeholder="Cargo" />
        <SharedInput type="text" placeholder="Empresa" />
        <SharedButton text="Concluir cadastro" rote="/home" />
        <SharedButton text="Voltar" rote="/register2" :primary="false" />
      </form>
    </div>
  </div>
</template>

<script>
import SharedProfilePicture from "../components/SharedProfilePicture.vue";
export default {
  name: "FinishRegister",
  components: {
    SharedProfilePicture: SharedProfilePicture,
  },
};
</script>


<style lang="scss" scoped>
$main-color: #4f56e9;
.finish {
  display: flex;
  flex-direction: row-reverse;
  margin: 50px 0;
  &__picture {
    max-width: 120px;
    margin: 10px auto;
  }
  &__data-nasc {
    color: #444;
    opacity: 0.4;
    font-size: 0.8rem;
    text-align: left;
  }
  &__logo {
    margin-top: 50px;
    max-width: 150px;
  }
  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  &__subtitle {
    color: $main-color;
    font-size: 1.5rem;
  }
  &__form {
    display: flex;
    flex-direction: column;
    width: 30%;
  }
  &__forgetpassword {
    text-align: right;
    color: #444;
    opacity: 0.6;
    cursor: pointer;
  }
  &__cadastrar {
    color: #444;
    opacity: 0.6;
    a {
      color: $main-color;
      opacity: 1;
      font-weight: bold;
    }
  }
  &__pass {
    margin-top: 30px;
    max-width: 40px;
  }
}
</style>