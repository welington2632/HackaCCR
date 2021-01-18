<template>
  <div class="my-profile">
    <SharedProfilePicture class="my-profile__picture" />
    <div class="my-profile__infos">
      <h4 class="my-profile__name">{{ name }}</h4>
      <span class="my-profile__job">{{ job }}</span>
      <span class="my-profile__status--online">{{ status }}</span>
    </div>
  </div>
</template>

<script>
import SharedProfilePicture from "../components/SharedProfilePicture.vue";
export default {
  name: "SharedMyProfile",
  props: {
    name: String,
    job: String,
    status: String,
  },
  components: {
    SharedProfilePicture,
  },
};
</script>

<style lang="scss" scoped>
.my-profile {
  $main-color: #4f56e9;
  min-height: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #444;
  font-weight: bold;
  &__infos {
    display: flex;
    flex-direction: column;
    width: 65%;
    * {
      margin: 5px 0;
    }
  }
  &__picture {
    width: 25%;
    max-width: 80px;
  }
  &__name {
    font-size: 1.5rem;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &__job {
    color: $main-color;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &__status--online {
    display: flex;
    align-items: center;
    &:before {
      content: "";
      width: 10px;
      height: 10px;
      background: #78c02f;
      display: block;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
}
</style>