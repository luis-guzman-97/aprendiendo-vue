<template>
  <main class="container">
    <h1>Formularios</h1>
    <h3>{{ fecha }}</h3>
    <form class="row" @submit.prevent="submitSave()">
      <div class="col-md">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Email address</label
          >

          <div :class="{ error: v$.email.$errors.length }">
            <input
              v-model="state.email"
              class="form-control"
              placeholder="name@example.com"
            />
            <div
              class="input-errors"
              v-for="error of v$.email.$errors"
              :key="error.$uid"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Example textarea</label
          >
          <textarea
            v-model="text"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3">
          <input type="submit" class="btn btn-success" value="Enviar" />
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { reactive } from "@vue/reactivity";
import Global from "../global";
import PeliculaModel from "../models/PeliculaModel";
import swal from "sweetalert";
export default {
  name: "FormulariosPage",
  props: {},
  mounted() {
    console.log(Global.url);
    swal ( "Oops" ,  "Something went wrong!" ,  "error" )
  },
  setup() {
    const formulario = reactive({
      email: "",
      text: "",
    });
    const rules = {
      email: {
        required: helpers.withMessage("Campo requerido", required),
        email: helpers.withMessage("Email no valido", email),
      }, // Matches state.firstName
      text: { required, minLength: minLength(20) }, // Matches state.lastName
    };

    const v$ = useVuelidate(rules, formulario);

    return { state: formulario, v$ };
  },
  data() {
    return {
      fecha: "1/1/2023",
      peliculaModel: new PeliculaModel("", ""),
    };
  },

  methods: {
    submitSave() {
      this.v$.email.$touch();
      this.v$.text.$touch();
      console.log(this.state);
    },
  },
};
</script>

<style>
</style>