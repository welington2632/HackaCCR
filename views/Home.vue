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
      <SharedAsideItem text="Inicio" to="/home" :active="true">
        <template v-slot:icon
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 0 24 24"
            width="40"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#4F56E9" /></svg
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
      <SharedAsideItem text="LGPD" to="/lgpd" :active="false">
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
      <SharedNewPost
        class="content__post"
        @newpostclick="modalDisplay = true"
      />
      <SharedSection sectionName="Categorias" class="default-margin">
        <SharedCategoryCard
          categoryName="Procurando parceiros"
          v-on:filtroCategoria="filtrar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </svg>
        </SharedCategoryCard>
        <SharedCategoryCard categoryName="Compartilhamento de experiência">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
            />
          </svg>
        </SharedCategoryCard>
        <SharedCategoryCard categoryName="Novas idéias"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <g><rect fill="none" height="24" width="24" /></g>
            <g>
              <g />
              <path
                d="M12,3c-0.46,0-0.93,0.04-1.4,0.14C7.84,3.67,5.64,5.9,5.12,8.66c-0.48,2.61,0.48,5.01,2.22,6.56C7.77,15.6,8,16.13,8,16.69 V19c0,1.1,0.9,2,2,2h0.28c0.35,0.6,0.98,1,1.72,1s1.38-0.4,1.72-1H14c1.1,0,2-0.9,2-2v-2.31c0-0.55,0.22-1.09,0.64-1.46 C18.09,13.95,19,12.08,19,10C19,6.13,15.87,3,12,3z M14,19h-4v-1h4V19z M14,17h-4v-1h4V17z M12.5,11.41V14h-1v-2.59L9.67,9.59 l0.71-0.71L12,10.5l1.62-1.62l0.71,0.71L12.5,11.41z"
              />
            </g>
          </svg>
        </SharedCategoryCard>
        <SharedCategoryCard categoryName="Programa de inclusão no trabalho"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z" fill="none" />
            <path
              d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"
            />
          </svg>
        </SharedCategoryCard>
      </SharedSection>
      <SharedPost
        :User="{
          picture: 'profile-picture.png',
          name: 'Paula Rocas',
          job: 'Jovem empreendedora',
        }"
        :Post="{
          createdDate: '1 dia atrás',
          image: 'moda.jpg',
          description:
            'Olá, me chamo Paula Rocas e estou fundando minha primeira startup no ramo de moda. Gostaria de parceiros, e mentores para essa nova jornada, alguém quer embarcar comigo nesse novo desafio?',
          button: 'Candidatar-se',
          type: 'Procurando parceiros',
        }"
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          /></svg
      ></SharedPost>
      <SharedPost
        :class="displayNone ? 'displayNone' : ''"
        :User="{
          picture: 'cozinha.jpeg',
          name: 'João P. Batista',
          job: 'CEO em Master Café',
        }"
        :Post="{
          createdDate: '30 minutos atrás',
          image: 'cozinha.jpeg',
          description:
            'Olá amigos do Businow, vamos falar de mercado financeiro?',
          button: 'Ir para o post',
          type: 'Compartilhamento de experiência',
        }"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
          /></svg
      ></SharedPost>
    </div>
    <SharedModalPost
      @fecharModal="fecharModal"
      :class="!modalDisplay ? 'displayNone' : ''"
    >
      <SharedSection sectionName="Categorias">
        <SharedCategoryCard categoryName="Procurando parceiros">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </svg>
        </SharedCategoryCard>
        <SharedCategoryCard categoryName="Compartilhamento de experiência">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
            />
          </svg>
        </SharedCategoryCard>
        <SharedCategoryCard categoryName="Novas idéias"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <g><rect fill="none" height="24" width="24" /></g>
            <g>
              <g />
              <path
                d="M12,3c-0.46,0-0.93,0.04-1.4,0.14C7.84,3.67,5.64,5.9,5.12,8.66c-0.48,2.61,0.48,5.01,2.22,6.56C7.77,15.6,8,16.13,8,16.69 V19c0,1.1,0.9,2,2,2h0.28c0.35,0.6,0.98,1,1.72,1s1.38-0.4,1.72-1H14c1.1,0,2-0.9,2-2v-2.31c0-0.55,0.22-1.09,0.64-1.46 C18.09,13.95,19,12.08,19,10C19,6.13,15.87,3,12,3z M14,19h-4v-1h4V19z M14,17h-4v-1h4V17z M12.5,11.41V14h-1v-2.59L9.67,9.59 l0.71-0.71L12,10.5l1.62-1.62l0.71,0.71L12.5,11.41z"
              />
            </g>
          </svg>
        </SharedCategoryCard>
        <SharedCategoryCard categoryName="Programa de inclusão no trabalho"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z" fill="none" />
            <path
              d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"
            />
          </svg>
        </SharedCategoryCard>
      </SharedSection>
      <SharedSection sectionName="Publicação">
        <textarea class="post__text-area" />
      </SharedSection>
      <SharedSection sectionName="Tags">
        <input class="post__text-input" />
      </SharedSection>

      <button @click="fecharModal" class="modal__publicar">
        Publicar Agora
      </button>
    </SharedModalPost>
  </div>
</template>

<script>
import SharedHeaderApp from "../components/SharedHeaderApp.vue";
import SharedAsideMenu from "../components/SharedAsideMenu.vue";
import SharedMyProfile from "../components/SharedMyProfile.vue";
import SharedAsideItem from "../components/SharedAsideItem.vue";
import SharedNewPost from "../components/SharedNewPost.vue";
import SharedSection from "../components/SharedSection.vue";
import SharedCategoryCard from "../components/SharedCategoryCard";
import SharedPost from "../components/SharedPost";
import SharedModalPost from "../components/SharedModalPost";

export default {
  name: "Home",
  components: {
    SharedHeaderApp,
    SharedAsideMenu,
    SharedMyProfile,
    SharedAsideItem,
    SharedNewPost,
    SharedSection,
    SharedCategoryCard,
    SharedPost,
    SharedModalPost,
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
