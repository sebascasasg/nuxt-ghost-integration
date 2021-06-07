<template>
  <main class="container">
    <h1 class="title">Descubre</h1>
    <p class="snippet">
      El ocio es creativo, por definición. Hemos dedicado buena parte de nuestro
      ingenio a la difícil tarea del disfrute. Detrás de cada forma de
      entretenernos hay una buena cantidad de ciencia y conocimiento: el libro,
      la televisión, el internet… el computador, la cámara, la guitarra. En esta
      sección, queremos compartir pretextos para el ocio, el goce y la
      inspiración.
    </p>
    <div class="posts-container">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :image="post.feature_image"
        :excerpt="post.excerpt"
        :link="`/en-casa/descubre/${post.slug}`"
      />
    </div>
  </main>
</template>

<script>
import { getPostsByTag } from "~/api/posts";
export default {
  async asyncData() {
    const posts = await getPostsByTag("descubre");
    return { posts: posts };
  },
};
</script>

<style scoped>
.posts-container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
.title {
  margin: 2rem 0;
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
}
.snippet {
  width: 70%;
  margin: 0 auto 4rem;
}
</style>