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
              fill="#444"
              d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"
            />
          </svg>
        </template>
      </SharedAsideItem>
      <SharedAsideItem text="LGPD" to="/lgpd" :active="true">
        <template v-slot:icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 0 24 24"
            width="40"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="#4F56E9"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
            />
          </svg>
        </template>
      </SharedAsideItem>
    </SharedAsideMenu>
    <div class="content">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="120"
        viewBox="0 0 24 24"
        width="120"
      >
        <g>
          <rect fill="none" height="24" width="24" />
          <path
            fill="#4F56E9"
            d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1L12,1z M11,7h2v2h-2V7z M11,11h2v6h-2V11z"
          />
        </g>
      </svg>
      <h4 class="lgpd-titulo">Informações sobre a LGPD</h4>
      <span class="lgpd-info"
        >A Lei Geral de Proteção de Dados Pessoais (LGPD) é uma legislação que
        tem o objetivo de proteger a liberdade e a privacidade de consumidores e
        cidadãos. Criada em 2018 e prevista para entrar em vigor em maio de
        2021, ela demanda que empresas e órgãos públicos mudem a forma de
        coletar, armazenar e usar os dados das pessoas. Ou seja, terá impactos
        significativo nas áreas jurídica, administrativa e de segurança da
        informação das companhias.
      </span>
      <img src="../assets/vetorial.png" alt="vetorial.png" />
      <span class="lgpd-info"
        >Quando o assunto é a regulamentação das políticas de uso de dados, o
        panorama atual evidencia o surgimento de novas tendências globais, com
        mudanças significativas em sistemas jurídicos de inúmeros países, cujo
        foco está em traçar diretrizes claras rumo à privacidade e segurança. No
        Brasil, essa tendência também ganhou espaço. Após oito anos de debates e
        redações, em 14 de agosto de 2018, o presidente Michel Temer sancionou a
        Lei Geral de Proteção de Dados do Brasil (LGPD), Lei 13.709/2018. A lei
        entra em vigor em setembro de 2020, possibilitando às empresas e
        organizações um período de 18 meses para se adaptarem.</span
      >
    </div>
  </div>
</template>

<script>
import SharedHeaderApp from "../components/SharedHeaderApp.vue";
import SharedAsideMenu from "../components/SharedAsideMenu.vue";
import SharedMyProfile from "../components/SharedMyProfile.vue";
import SharedAsideItem from "../components/SharedAsideItem.vue";

export default {
  name: "LGPD",
  components: {
    SharedHeaderApp,
    SharedAsideMenu,
    SharedMyProfile,
    SharedAsideItem,
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
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  &__post {
    width: 100%;
  }
}

.lgpd-titulo {
  font-weight: bold;
  font-size: 2.5rem;
  color: #444;
  margin: 25px auto;
}

.lgpd-info {
  font-size: 1.2rem;
  color: #444;
  opacity: 0.6;
  margin: 25px auto;
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
.vaga {
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
}
.informacao-empresa {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.nome-empresa {
  font-size: 1.5rem;
  font-weight: bold;
}
.descricao-vaga {
  font-size: 1.5rem;
  color: #444;
  opacity: 0.6;
}
.emprego__buton {
  position: absolute;
  right: 100px;
  bottom: 25px;
  width: 15%;
}
</style>
