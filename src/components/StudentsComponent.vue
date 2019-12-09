<template>
  <div class="container text-center">
    <h1>INGRESO DE NUEVO ESTUDIANTE</h1>
    <form id="form" style="margin-top:50px">
      <b-form-group label-cols="4" label-cols-lg="2" label="Name" label-for="input-default">
        <b-form-input type="text" v-model="model.name" placeholder="Ingrese Nombre"></b-form-input>
      </b-form-group>
      <b-form-group label-cols="4" label-cols-lg="2" label="Code" label-for="input-default">
        <b-form-input type="text" v-model="model.code" placeholder="Ingrese Codigo"></b-form-input>
      </b-form-group>

      <b-button @click="POST_STUDENTS(model)" variant="success" style="margin:20px">Agregar</b-button>
    </form>

    <b-table :items="STUDENTS" :fields="hola" striped responsive="sm">
      <template v-slot:cell(prueba)="row">
        <b-button
          type="submit"
          class="btn btn-danger pull-right"
          data-toggle="modal"
          @click="DELETED_STUDENTS(row.item.id)"
        >Delete</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
//Importar los types que se van a utilizar
import { TypesStore } from "./../store/types/store.types";
//mapgetter la variable que ecesito para obtener el estado
//map actions la action GET_students
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      model: {
        code: "",
        name: ""
      },
      hola: ["id", "code", "name", "Prueba"]
    };
  },
  methods: {
    ...mapActions({
      GET_STUDENTS: TypesStore.actions.GET_STUDENTS,
      POST_STUDENTS: TypesStore.actions.POST_STUDENTS,
      DELETED_STUDENTS: TypesStore.actions.DELETED_STUDENTS
    })
  },

  computed: {
    ...mapGetters({
      STUDENTS: TypesStore.state.STUDENTS,
      PSTUDENTS: TypesStore.state.PSTUDENTS,
      DSTUDENTS: TypesStore.state.DSTUDENTS
    })
  },
  mounted() {
    this.GET_STUDENTS();
    //this.POST_STUDENTS(this.model);
    this.DELETED_STUDENTS();
  }
};
</script>

<style scoped>
</style>