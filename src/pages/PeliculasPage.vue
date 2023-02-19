<template>
  <main class="container">
    <h1>Peliculas Page (Sam2001#)</h1>
    <h4>{{ $filters.UppercasePipe(tituloPagina)}}</h4>

    <div class="row">
      <div class="col-md-4" v-for="p in peliculaMayuscula" :key="p">
        <PeliculaComponent
          :inputData="p"
          @seleccionado="seleccionada"
        ></PeliculaComponent>
      </div>
    </div>
  </main>
</template>

<script>
import PeliculaComponent from "../components/PeliculaComponent.vue";
export default {
  name: "PeliculasPage",
  props: {},
  components: {
    PeliculaComponent,
  },
  /**
   * Son los modificadores de data pero no son pipes
   */
  computed: {
    peliculaMayuscula() {
      for (let d of this.peliculas) {
        var str = d.titulo.toUpperCase();
        d.titulo = str;
        d.anioTitulo = d.anio + "|" + str;
      }
      return this.peliculas;
    },
  },
  filters:{
    mayusculas(value){
     return value.toUpperCase();
    }
  },
  data() {
    return {
      tituloPagina:'Para pipes',
      peliculas: [
        {
          titulo: "Destino final 1",
          anio: 2001,
          imagen:
            "https://hbomax-images.warnermediacdn.com/images/GXd7gCQH2RLPDfgEAAAV4/tileburnedin?size=1280x720&partner=hbomaxcom&v=ffa0c01d831c1117391090fd6bacbd37&host=art-gallery.api.hbo.com&language=es-419&w=1280",
        },
        {
          titulo: "Rapido y furioso",
          anio: 2002,
          imagen:
            "https://depor.com/resizer/J2QipfoaqsP39x9FuUaCs_tQi50=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/S753673BWFDKZGZHDEHHJRGNBI.jpg",
        },
        {
          titulo: "Titanic",
          anio: 1997,
          imagen: "https://i.ytimg.com/vi/1EMkCJWQIDY/maxresdefault.jpg",
        },
      ],
    };
  },
  methods: {
    seleccionada(evt) {
      console.log("informacion recibida", evt);
    },
  },
};
</script>

<style>
</style>