<template>
  <div class="register">
    <img src="../assets/register.png" alt="imagem" class="register__banner" />
    <div class="register__content">
      <img src="../assets/logo.png" alt="logo.png" class="register__logo" />
      <p class="register__subtitle">Crie sua conta</p>
      <form action="" class="register__form">
        <label for="#" class="register__data-nasc">Data de nascimento</label>
        <SharedInput type="date" placeholder="Data de Nascimento" />
        <SharedInputDivider>
          <SharedInput type="text" placeholder="Pais" />
          <SharedInput type="text" placeholder="Estado" />
        </SharedInputDivider>
        <SharedInput type="text" placeholder="Interesses" />
        <SharedInput type="text" placeholder="Cargo" />
        <SharedInput type="text" placeholder="Empresa" />
        <SharedButton
          text="Concluir cadastro"
          rote="/finish"
          class="register__finish"
        />
      </form>
      <span class="register__cadastrar"
        >Você já tem uma conta?
        <router-link to="/">Entre aqui</router-link></span
      >
      <router-link to="/register">
        <img
          src="../assets/second-pass.png"
          alt="first-pass.png"
          class="register__pass"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>


<style lang="scss" scoped>
$main-color: #4f56e9;
.register {
  display: flex;
  flex-direction: row-reverse;
  &__banner {
    height: 100vh;
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
  &__finish {
    width: 60%;
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
    display: bock;
    margin-top: 25px;
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