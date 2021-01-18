<template>
  <div class="post">
    <div class="post__top-info">
      <img
        :src="require(`@/assets/${User.picture}`)"
        class="post__user-picture"
      />
      <div class="post__user-info">
        <h4 class="post__user-name">{{ User.name }}</h4>
        <span class="post__user-job">{{ User.job }}</span>
        <span class="post__createdDate">{{ Post.createdDate }}</span>
      </div>
    </div>
    <div class="post__content">
      <img class="post__image" :src="require(`@/assets/${Post.image}`)" />
      <div class="post__details">
        <div>
          <div class="post__type">
            <slot> </slot>
            <span>{{ Post.type }}</span>
          </div>
          <span class="post__description">{{ Post.description }}</span>
        </div>
        <button class="post__button">{{ Post.button }}</button>
      </div>
    </div>
    <SharedPostReact />
  </div>
</template>

<script>
import SharedPostReact from "../components/SharedPostReact.vue";
export default {
  name: "SharedPost",
  components: {
    SharedPostReact,
  },
  props: {
    User: Object,
    Post: Object,
  },
};
</script>

<style lang="scss" scoped>
.post {
  width: 70%;
  background: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 25px 25px 5px 25px;
  margin: 50px auto;
  &__top-info {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
  }
  &__image {
    border-radius: 10px;
    max-height: 100%;
    width: 40%;
  }
  &__user-picture {
    width: 20%;
    max-width: 100px;
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  &__user-info {
    flex: 60%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    * {
      margin: 5px 0;
    }
  }
  &__user-job {
    color: #4f56e9;
  }
  &__createdDate {
    color: #444;
    opacity: 0.4;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 25px auto;
    height: 400px;
  }
  &__details {
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    div {
      width: 100%;
    }
  }
  &__type {
    display: flex;
    align-items: center;
    span {
      font-size: 1.5rem;
      color: #4f56e9;
      font-weight: bold;
    }
    svg {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      :last-child {
        fill: #4f56e9;
      }
    }
  }
  &__description {
    margin-top: 25px;
    display: block;
    color: #444;
    opacity: 0.6;
  }
  &__button {
    width: 50%;
    height: 50px;
    padding: 15px;
    background: #4f56e9;
    color: white;
    font-weight: bold;
    margin: 0 auto;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
}
</style>