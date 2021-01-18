<template>
  <div class="login">
    <img src="../assets/login.png" alt="imagem" class="login__banner" />
    <div class="login__content">
      <img src="../assets/logo.png" alt="logo.png" class="login__logo" />
      <p class="login__subtitle">Aprenda, Inove e empreenda</p>
      <form action="" class="login__form">
        <SharedInput type="text" placeholder="E-mail" />
        <SharedInput type="password" placeholder="Senha" />
        <span class="login__forgetpassword">Esqueci minha senha</span>
        <SharedButton text="Entrar" rote="/home" class="login__enter" />
      </form>
      <span class="login__cadastrar"
        >Não tenho uma conta
        <router-link to="/register">Cadastre-se</router-link> agora.</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="scss" scoped>
$main-color: #4f56e9;
.login {
  display: flex;
  &__banner {
    height: 100vh;
  }
  &__logo {
    margin-top: 250px;
    max-width: 150px;
  }
  &__enter {
    width: 40%;
    margin: auto;
    display: block;
  }
  &__content {
    flex: 1;
    text-align: center;
  }
  &__subtitle {
    color: $main-color;
  }
  &__form {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: auto;
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
    margin-top: 50px;
    display: block;
    a {
      color: $main-color;
      opacity: 1;
      font-weight: bold;
    }
  }
}
</style>