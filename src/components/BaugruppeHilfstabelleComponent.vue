<template>
  <div class="container">
    <hr>
    <h3 class="schrift"> Baugruppe | Unter Element | Anzahl</h3>
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div class="post"
      v-for="(post, index) in baugruppenH"
      v-bind:item="post"
      v-bind:index="index"
      v-bind:key="post._id"
      v-on:dblclick="delBaugruppeHilfstabelle(post._id)"
      >
        <p class="text"> {{ post.baugruppe }}</p>
        <p class="text"> {{ post.unterElement }}</p>
        <p class="text"> {{ post.anzahl }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import BaugruppenHilfstabelleService from '../BaugruppenHilfstabelleService';


export default {
  name: 'BaugruppenHilfstabelleComponent',
  data() {
    return {
      baugruppenH: [],
      error: '',
      text: ''
    }
  },

  async created() {
    try {
       this.baugruppenH = await BaugruppenHilfstabelleService.getBaugruppeHilfstabelle();
    } catch(err) {
      this.error = err.message;
    }
  },

  methods: {
    async delBaugruppeHilfstabelle(id) {
      await BaugruppenHilfstabelleService.deleteBaugruppeHilfstabelle(id);
      this.baugruppenH = await BaugruppenHilfstabelleService.getBaugruppeHilfstabelle();
    }
  }
};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  /* position: relative; */
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 1px 10px;
  margin-bottom: 5px;
  
}

p.text {
  font-size: 22px;
  display:inline-block;
  margin-right: 2rem;
  font-weight: bold;
  color: #2c3e50;
}

.schrift{
  padding: 10px 10px 10px 10px;
  font-weight: bold;
  color: #2c3e50;
}

.hidden{
  color: #2c3e50;
  visibility: visible;
}

.button-id{
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 3px;
  padding: 0 15px;
  border-radius: 4px;
  color: #57b955;
  background: transparent;
  line-height: 1.15;
  font-size: 14px;
  height: 36px;
  word-spacing: 0px;
  letter-spacing: .0892857143em;
  text-decoration: none;
  text-transform: uppercase;
  min-width: 64px;
  border: 1px solid #58f550;
  text-align: center;
  transition: background 280ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.button-id:hover {
  background: #f4f4f4;
}
</style>
