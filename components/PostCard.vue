<template>
  <article>
    <b-card
      :title="title"
      :img-src="image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2 shadow"
    >
      <b-card-text>
        {{ excerpt }}
      </b-card-text>

      <b-button class="button" variant="primary">
        <NuxtLink :to="link" class="button-link"> Leer más </NuxtLink>
      </b-button>
    </b-card>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    excerpt: {
      type: String,
    },
    slug: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>

<style scoped>
.button {
  background-color: #2e2e2e;
  border: none;
}
.button-link {
  color: #eee;
}
</style>