<template>
  <div class="study">
    <div class="study__history">
      <h4 class="study__aulas-title">Aulas</h4>
      <ul class="study__history-items">
        <li class="study__history-item--active">
          1 - Indústria, inovação e infraestrutura
        </li>
        <li class="study__history-item">2 - Tecnologias nas rodovias</li>
        <li class="study__history-item">3 - Infra no modelo CCR</li>
      </ul>
    </div>
    <div class="study__video-info">
      <h4 class="study__empresa">{{ empresa }}</h4>
      <span class="study__curso">{{ curso }}</span>
      <video src="../assets/ccr-video.mp4" type="video/mp4" controls></video>
      <h4 class="titulo-video">{{ titulo }}</h4>
      <span class="study__video-subtitle">{{ descricao }}</span>
      <button class="avaliacao" @click="modalAberto = true">Avaliação</button>
    </div>
    <SharedModalPost @fecharModal="fecharModal" :modalAberto="modalAberto">
      <h3 class="teste-titulo">Teste</h3>
      <span class="curso-descrica">Indústria, Inovação e Infraestrutura</span>
      <div>
        <h4 class="pergunta">
          Qual é o meio de transporte mais utilizado para transporte de cargas?
        </h4>
        <input type="radio" id="A" name="1" value="Alternativa A" />
        <label for="1">Ferroviário</label>
        <br />
        <input type="radio" id="A" name="1" value="Alternativa B" />
        <label for="1">Aéreo</label>
        <br />
        <input type="radio" id="A" name="1" value="Alternativa C" />
        <label for="1">Rodoviário</label>
      </div>
      <button class="avaliacao" @click="formularioPreenchido">
        Publicar agora
      </button>
    </SharedModalPost>
  </div>
</template>

<script>
import SharedModalPost from "../components/SharedModalPost.vue";
export default {
  name: "SharedStudy",
  props: {
    empresa: String,
    titulo: String,
    descricao: String,
    curso: String,
  },
  methods: {
    fecharModal() {
      this.modalAberto = false;
    },
    formularioPreenchido() {
      alert("Avaliação preenchida com sucesso! Aguarde seu resultado.");
      this.fecharModal();
    },
  },
  data() {
    return {
      modalAberto: false,
    };
  },
  components: {
    SharedModalPost,
  },
};
</script>

<style lang="scss" scoped>
.study {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px auto 50px auto;
  align-items: flex-start;
  &__history-items {
    text-align: left;
  }
  &__aulas-title {
    font-size: 2rem;
    color: #4f56e9;
  }
  &__history {
    width: 30%;
  }
  &__video-info {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__empresa {
    font-size: 2.5rem;
    margin: 10px 0;
    font-weight: bold;
    text-align: center;
  }
  &__curso {
    font-size: 1.5rem;
    color: #444;
    opacity: 0.6;
    margin: 25px 0;
  }
  &__history-item {
    font-size: 1.5rem;
    color: #444;
    margin: 10px 0;
    &--active {
      font-weight: bold;
      font-size: 1.5rem;
      color: #444;
      margin: 10px 0;
    }
  }
}
.titulo-video {
  font-size: 1.5rem;
}

.study__video-subtitle {
  font-size: 1.2rem;
  color: #444;
  opacity: 0.6;
}
.avaliacao {
  height: 80px;
  cursor: pointer;
  width: 40%;
  background-color: #4f56e9;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 25px auto;
  border: none;
  border-radius: 5px;
}

.teste-titulo {
  font-size: 2rem;
  margin: 25px auto;
  text-align: center;
}

.curso-descrica {
  position: absolute;
  left: 10px;
  top: 10px;
  color: #444;
  opacity: 0.4;
}

.pergunta {
  color: #444;
  font-size: 1.4rem;
  font-weight: bold;
  opacity: 0.8;
}
input {
  margin: 10px 5px;
  width: 15px;
  height: 15px;
}

label {
  color: #444;
  font-size: 1.2rem;
}
</style>