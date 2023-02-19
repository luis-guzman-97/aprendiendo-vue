<template>
  <main id="miCompo" class="container">
    <h3>Mi Componente</h3>
    <h4>{{ subtitulo }}</h4>
    <hr>
    <h2>Reactividad</h2>
  </main>
</template>

<script>
export default {
  name: "MiComponente",
  props: {},
  data() {
    return {
      subtitulo: "Otro componente subtitulo",
    };
  },
};
</script>

<style>
</style>