<template>
  <div class="home">
    <SharedHeaderApp />
    <SharedAsideMenu>
      <template v-slot:profile>
        <SharedMyProfile
          name="Marie Magali"
          job="Designer UI/UX em Tesla"
          status="Online"
        >
        </SharedMyProfile>
      </template>
      <SharedAsideItem text="Inicio" :active="false">
        <template v-slot:icon
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 0 24 24"
            width="40"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#444" /></svg
        ></template>
      </SharedAsideItem>
      <SharedAsideItem text="Aprenda" to="/aprenda" :active="true">
        <template v-slot:icon
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 0 24 24"
            width="40"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
              fill="#4F56E9"
            /></svg
        ></template>
      </SharedAsideItem>
      <SharedAsideItem
        text="Oportunidades de Emprego"
        to="/empregos"
        :active="false"
      >
        <template v-slot:icon
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 0 24 24"
            width="40"
          >
            <path d="M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z" fill="none" />
            <path
              d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"
            />
          </svg>
        </template>
      </SharedAsideItem>
      <SharedAsideItem text="LGPD" :active="false">
        <template v-slot:icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 0 24 24"
            width="40"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
            />
          </svg>
        </template>
      </SharedAsideItem>
    </SharedAsideMenu>
    <div class="content">
      <SharedStudy
        :aulas="[
          'Indústria, Inovação e infraestrutura',
          'Processos gerenciais',
          'Tecnologias nas rodovias',
        ]"
        empresa="Grupo CCR"
        curso="Conheça nosso programa de jovens funcionários"
        titulo="Indústria, Inovação e infraestrutura"
        descricao="Entenda como funciona a indústria, a inovação, e a infraestrutura do novo mundo, digitalize-se agora, viva a revolução industrial 4.0"
      />
    </div>
  </div>
</template>

<script>
import SharedHeaderApp from "../components/SharedHeaderApp.vue";
import SharedAsideMenu from "../components/SharedAsideMenu.vue";
import SharedMyProfile from "../components/SharedMyProfile.vue";
import SharedAsideItem from "../components/SharedAsideItem.vue";
import SharedStudy from "../components/SharedStudy.vue";

export default {
  name: "Aprenda_aula",
  components: {
    SharedHeaderApp,
    SharedAsideMenu,
    SharedMyProfile,
    SharedAsideItem,
    SharedStudy,
  },
  data() {
    return {
      displayNone: false,
      modalDisplay: false,
    };
  },
  methods: {
    filtrar() {
      this.displayNone = !this.displayNone;
    },
    fecharModal() {
      this.modalDisplay = false;
    },
  },
};
</script>

<style lang="scss">
.content {
  width: 70%;
  margin: 15vh 0% 0 25%;
  padding: 15px;
  &__post {
    width: 100%;
  }
}

.post__text-area {
  width: 95%;
  margin: auto;
  height: 150px;
  border: none;
  background: #f4f4f4;
  border-radius: 5px;
}

.post__text-input {
  width: 95%;
  height: 50px;
  margin: auto;
  border: none;
  background: #f4f4f4;
  border-radius: 5px;
}

.modal__publicar {
  height: 80px;
  background-color: #4f56e9;
  color: white;
  width: 95%;
  margin: 50px auto 25px auto;
  font-size: 1.5rem;
  border: none;
  display: block;
  border-radius: 5px;
}

.displayNone {
  display: none !important;
}

.default-margin {
  margin: 50px 0;
}
</style>
