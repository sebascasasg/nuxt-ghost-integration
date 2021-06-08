<template>
  <div class="container">
    <h1 class="title">Parque Explora En Casa</h1>
    <p class="snippet">
      Esta es la landing page de Explora en Casa. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Sapiente, ad blanditiis illo ex obcaecati
      eveniet. Corrupti mollitia temporibus vel quo natus qui, laudantium
      provident optio nisi sint voluptas cum blanditiis.
    </p>
    <NuxtLink to="/en-casa/descubre">
      <h2 class="link">> Ir a la sección Descubre</h2>
    </NuxtLink>
    <NuxtLink to="/en-casa/experimenta">
      <h2 class="link">> Ir a la sección Experimenta</h2>
    </NuxtLink>
  </div>
</template>

<style scoped>
.title {
  margin: 2rem 0;
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
}
.snippet {
  margin: 0 auto 4rem;
  width: 70%;
}
.link {
  width: 70%;
  margin: auto;
}
</style>
