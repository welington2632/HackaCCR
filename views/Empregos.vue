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
      <SharedAsideItem text="Aprenda" to="/aprenda" :active="false">
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
              fill="#444"
            /></svg
        ></template>
      </SharedAsideItem>

      <SharedAsideItem
        text="Oportunidades de Emprego"
        to="/empregos"
        :active="true"
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
              fill="#4F56E9"
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
      <SharedSection sectionName="Categorias" class="default-margin">
        <SharedCategoryCard categoryName="Transporte">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
            />
          </svg>
        </SharedCategoryCard>
        <SharedCategoryCard categoryName="Tecnologia"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
            /></svg
        ></SharedCategoryCard>
      </SharedSection>
      <SharedSection sectionName="Vagas">
        <div class="vaga">
          <div class="informacao-empresa">
            <h4>GRUPO CCR</h4>
            <span class="dataCriada">10 dias atrás</span>
            <img src="../assets/ccr.png" alt="" />
          </div>
          <span class="descricao-vaga"
            >Para para jovens aprendizes que estão em busca de ingressar no
            mercado de logística.</span
          >
          <SharedButton
            rote="/aprenda_aula"
            text="Ver mais"
            class="learn-card__button"
          />
        </div>
      </SharedSection>
    </div>
  </div>
</template>

<script>
import SharedHeaderApp from "../components/SharedHeaderApp.vue";
import SharedAsideMenu from "../components/SharedAsideMenu.vue";
import SharedMyProfile from "../components/SharedMyProfile.vue";
import SharedAsideItem from "../components/SharedAsideItem.vue";
import SharedSection from "../components/SharedSection.vue";
import SharedCategoryCard from "../components/SharedCategoryCard.vue";
import SharedButton from "../components/SharedButton.vue";

export default {
  name: "Empregos",
  components: {
    SharedHeaderApp,
    SharedAsideMenu,
    SharedMyProfile,
    SharedAsideItem,
    SharedSection,
    SharedCategoryCard,
    SharedButton,
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
