<template>
  <div class="container">
    <h1>Bauelemente</h1>
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div class="post"
      v-for="(post, index) in bauelements"
      v-bind:item="post"
      v-bind:index="index"
      v-bind:key="post._id"
      v-on:dblclick="delBauelement(post._id)"
      >
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
import BauelementService from '../BauelementService';


export default {
  name: 'BauelementComponent',
  data() {
    return {
      bauelements: [],
      error: '',
      text: ''
    }
  },

  async created() {
    try {
       this.bauelements = await BauelementService.getBauelement();
    } catch(err) {
      this.error = err.message;
    }
  },

  methods: {
    // async createBauelement() {
    //   await BauelementService.insertBauelement(this.name, this.gewicht, this.laenge, this.breite, this.hoehe);
    //   this.bauelements = await BauelementService.getBauelement();
    //   },

    async delBauelement(id) {
      await BauelementService.deleteBauelement(id);
      this.bauelements = await BauelementService.getBauelement();
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
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
  
}

p.text {
  font-size: 22px;
  font-weight: 700;
  display:inline-block;
  margin-right: 30px;
}
</style>
