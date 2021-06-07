<template>
  <article>
    <b-card
      :title="title"
      :img-src="image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ excerpt }}
      </b-card-text>

      <b-button href="#" variant="primary">
        <NuxtLink :to="`/en-casa/experimenta/${slug}`"> Leer más </NuxtLink>
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
  },
};
</script>

<style scoped>
</style>