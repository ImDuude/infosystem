<template>

  <BaugruppeHilfstabelleComponent />

  <button class="button-modal" id="show-modal" @click="showModal = true">Baugruppe hinzufügen</button>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </Teleport> 

</template>

<script>
import BaugruppeHilfstabelleComponent from '../components/BaugruppeHilfstabelleComponent.vue';
import Modal from '../components/ModalBaugruppe.vue';

export default {
  components: {
    BaugruppeHilfstabelleComponent,
    Modal
  },
  data() {
    return {
      showModal: false
    }
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