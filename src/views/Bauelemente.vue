<template>

  <BauelementComponent />

  <button class="button-modal" id="show-modal" @click="showModal = true">Bauelement hinzufügen</button>

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
import BauelementComponent from '../components/BauelementComponent.vue'
import Modal from '../components/ModalBauelement.vue'

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

.button-modal{
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

.button-modal:hover {
  background: #f4f4f4;
}

a{
  font-weight: bold;
  color: #2c3e50;

}
                    
                

</style>
