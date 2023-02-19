<template>
  <div class="card mt-2">
    <img :src="inputData.imagen" class="card-img-top" :alt="inputData.titulo" />
    <div class="card-body">
      <h5 class="card-title">{{ inputData.titulo }}</h5>
      <p :class="'text-success bg-light p-2'">Año: {{ inputData.anio }}</p>
      <p>{{ inputData.anioTitulo }}</p>
      <p
        class="card-text p-2"
        :class="{
          'text-success': inputData.anio > 2000,
          'text-success bg-light': inputData.anio < 2000,
        }"
      >
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <input type="button" class="btn btn-success" value="Seleccionar Pelicula" @click="pasarSeleccionaPadre(inputData)">
    </div>
  </div>
</template>

<script>
export default {
  name: "PeliculaComponent",
  props: ['inputData'],
  mounted() {
    console.log(this.inputData);
  },
  data() {
    return {};
  },
  methods:{
    pasarSeleccionaPadre(pelicula){
        //console.log('Boton pulsado', pelicula);
        this.$emit('seleccionado', pelicula);
    }
  }
};
</script>

<style>
</style>