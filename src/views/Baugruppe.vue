<template>

  <BaugruppeComponent />

  <button class="button-modal" id="show-modal" @click="showModal = true">Baugruppe hinzufügen</button>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </Teleport>

  <!-- <div class="container text-center  mt-5 mb-5">
     <div class="table-responsive my-5">
      
       <Table :fields='fields' :studentData ="studentData"></Table>
     </div>
 
  </div> -->

  

</template>

<script>
import BaugruppeComponent from '../components/BaugruppeComponent.vue';
import Modal from '../components/ModalBaugruppe.vue';
import Table from '../components/Table.vue';

export default {
  components: {
    BaugruppeComponent,
    Modal,
    Table
  },
  data() {
    return {
      showModal: false
    }
  },

  setup(){

    const studentData = [
      {ID:"01", Name: "Abiola Esther", Gewicht:"Computer Science", Länge:"Female", Breite:"17", Hoehe:"19"},
     {ID:"02", Name: "Robert V. Kratz", Course:"Philosophy", Gender:"Male", Age:'19'},
      {ID:"03", Name: "Kristen Anderson", Course:"Economics", Gender:"Female", Age:'20'},
     {ID:"04", Name: "Adam Simon", Course:"Food science", Gender:"Male", Age:'21'},
      {ID:"05", Name: "Daisy Katherine", Course:"Business studies", Gender:"Female", Age:'22'}, 
    ]

    const fields = [
      'ID','Name','Gewicht','Länge','Breite', 'Hoehe'
    ]
    return{studentData,fields}
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

</style>