<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <NuxtLink class="navbar-brand" to="/">
      <img
        :src="require('@/assets/images/logo-explora.png')"
        alt="Logo Explora"
        class="logo-img"
      />
    </NuxtLink>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <NuxtLink to="/" class="nav-link"
            >Inicio <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
        <li class="nav-item active">
          <NuxtLink to="/en-casa" class="nav-link"
            >En Casa <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
        <li class="nav-item active">
          <NuxtLink to="/conocenos" class="nav-link"
            >Conócenos <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  padding: 0.7rem;
  background-color: #2e2e2e;
}
.nav-item {
  margin: 0 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}
.nav-link {
  color: #eee !important;
}
.nav-link:hover {
  text-decoration: underline;
}
.logo-img {
  height: 4rem;
}
</style>
