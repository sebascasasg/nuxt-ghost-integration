<template>
  <div class="container">
    <h1>{{ post.title }}</h1>
    <div v-html="post.html" />
  </div>
</template>

<script>
import { getSinglePost } from "~/api/posts";
export default {
  async asyncData(context) {
    const post = await getSinglePost(context.params.slug);
    return { post };
  }
};
</script>

<style scoped></style>
