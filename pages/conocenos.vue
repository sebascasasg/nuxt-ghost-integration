<template>
  <main class="container">
    <h1 class="title">{{ page.title }}</h1>
    <article v-html="page.html" />
  </main>
</template>

<script>
import { getSinglePage } from "~/api/pages";
export default {
  async asyncData() {
    const page = await getSinglePage("conocenos");
    return { page: page };
  },
};
</script>

<style scoped>
.title {
  margin: 2rem 0;
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
}
</style>