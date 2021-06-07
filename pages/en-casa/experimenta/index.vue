<template>
  <main class="container posts-container">
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :image="post.feature_image"
      :excerpt="post.excerpt"
      :slug="post.slug"
    />
  </main>
</template>

<script>
import { getPostsByTag } from "~/api/posts";
export default {
  async asyncData() {
    const posts = await getPostsByTag("experimenta");
    return { posts: posts };
  },
};
</script>

<style scoped>
.posts-container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
</style>