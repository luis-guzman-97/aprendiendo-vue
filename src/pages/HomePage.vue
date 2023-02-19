<template>
  <main class="container">
    <h1>Home Page</h1>
    <hr />
    <h2>Reactividad</h2>
    <input type="text" class="form-control" v-model="nombre" />
    <p class="text-center">{{ nombre ? "Mi nombre es: " + nombre : "" }}</p>
    <h3>Directivas condicionales</h3>
    <input type="number" class="form-control" v-model="edad" />
    <p class="text-center">{{ edad ? "Mi edad es: " + edad : "" }}</p>
    <div class="alert alert-success" role="alert" v-if="edad && edad >= 18 && edad <65 ">
      Eres mayor de edad
    </div>
    <div class="alert alert-warning" role="alert" v-if="edad && edad>= 65">
      Eres un adulto mayor
    </div>
    <div class="alert alert-info" role="alert" v-if="edad && edad< 18 && edad >= 0">Eres menor de edad</div>
    <div class="alert alert-danger" role="alert" v-if="edad && edad < 0">Edad no es valida</div>

    <h3>Ciclo for</h3>

    <ol>
      <li v-for="num in numerosMagicos" :key="num">{{ num }}</li>
    </ol>


  </main>
</template>

<script>
export default {
  name: "HomePage",
  props: {},
  data() {
    return {
      nombre: "",
      edad: 18,
      numerosMagicos:[1,2,3,4,5,6,7,8,9,0]
    };
  },
  methods: {},
};
</script>

<style>
</style>