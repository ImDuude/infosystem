<template>
  <button id="show-modal" @click="showModal = true">Bauelement hinzufügen</button>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </Teleport>
  <BauelementComponent />
</template>

<script>
import BauelementComponent from '../components/BauelementComponent.vue'
import Modal from '../components/Form.vue'

export default {
  name: 'App',
  components: {
    BauelementComponent,
    Modal
},
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
