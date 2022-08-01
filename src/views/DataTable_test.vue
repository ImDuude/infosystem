<template>
    <div class="container text-center  mt-5 mb-5">
     <div class="table-responsive my-5">
      
      <!-- The table component -->
       <Table :fields='fields' :studentData ="studentData"></Table>
     </div>
 
</div>
</template>
<script>

import Table from '../components/Table.vue'
import BauelementService from '../BauelementService';

export default {
  name: 'BauelementComponent',
  components: {
    Table,
  bauelements: [],
  },

  // async created() {
  //   try {
  //      this.bauelements = await BauelementService.getBauelement();

  //   } catch(err) {
  //     this.error = err.message;
  //   }

  //     const studentData = this.bauelements;

  //     const fields = [
  //     'ID','Name','Gewicht','Länge','Breite', 'Hoehe'
  //     ]


  //     return{studentData,fields}
  // },

  setup(){
    //An array of values for the data
    // const studentData = BauelementService.getBauelement();

    const studentData = BauelementService.getBauelement()

    const fields = [
      '_id','name','gewicht','laenge','breite', 'hoehe'
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
</style>