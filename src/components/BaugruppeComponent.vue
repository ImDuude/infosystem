<template>
  <div class="container">
    <hr>
    <h3 class="schrift"> Name | Gewicht | Länge | Breite | Höhe</h3>
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div class="post"
      v-for="(post, index) in baugruppen"
      v-bind:item="post"
      v-bind:index="index"
      v-bind:key="post._id"
      v-on:dblclick="delBaugruppe(post._id)"
      >
      <div>
        <p class="hidden" id="id_hidden"> {{ post._id }}</p>
      </div>
        <p class="text"> {{ post.name }}</p>
        <p class="text"> {{ post.gewicht }}</p>
        <p class="text"> {{ post.laenge }}</p>
        <p class="text"> {{ post.breite }}</p>
        <p class="text"> {{ post.hoehe }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import BaugruppenService from '../BaugruppenService';


export default {
  name: 'BaugruppenComponent',
  data() {
    return {
      baugruppen: [],
      error: '',
      text: ''
    }
  },

  async created() {
    try {
       this.baugruppen = await BaugruppenService.getBaugruppe();
    } catch(err) {
      this.error = err.message;
    }
  },

  methods: {
    async delBaugruppe(id) {
      await BaugruppenService.deleteBaugruppe(id);
      this.baugruppen = await BaugruppenService.getBaugruppe();
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
