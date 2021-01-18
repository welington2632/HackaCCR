<template>
  <div class="learn-card">
    <img
      :src="require(`@/assets/${Empresa.logo}`)"
      alt="Empresa logo"
      class="learn-card__logo"
    />
    <h3 class="learn-card__nome-empresa">{{ Empresa.nome }}</h3>
    <span class="learn-card__createdDate">{{ Post.createdDate }}</span>
    <div class="learn-card__info">
      <h4 class="learn-card__title">
        {{ Post.title }}
      </h4>
      <p class="learn-card__subtitle">
        {{ Post.subtitle }}
      </p>
    </div>
    <SharedButton
      rote="/aprenda_aula"
      text="Ver mais"
      class="learn-card__button"
    />
    <SharedPostReact class="card-reacts" />
  </div>
</template>

<script>
import SharedPostReact from "../components/SharedPostReact.vue";
import SharedButton from "../components/SharedButton.vue";
export default {
  name: "SharedLearnCard",
  components: {
    SharedPostReact,
    SharedButton,
  },
  props: {
    Empresa: Object,
    Post: Object,
  },
};
</script>

<style style="scss" scoped>
.learn-card {
  width: 30%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  height: 500px;
  margin: 10px;
}
.learn-card__logo {
  border-radius: 50%;
  max-height: 80px;
}
.learn-card__nome-empresa {
  font-size: 1.5rem;
}
.learn-card__createdDate {
  opacity: 0.5;
}
.learn-card__info {
  margin: 15px auto 10px auto;
}
.learn-card__subtitle {
  max-width: 80%;
  margin: auto;
  opacity: 0.5;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-y: scroll;
}
.card-reacts {
  width: 90%;
}
.learn-card__button {
  width: 60%;
  margin: 15px auto !important;
}
</style>