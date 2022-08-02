<script>
import BaugruppenService from '../BaugruppenService';

export default {
  props: {
    show: Boolean
  },
  name: 'BaugruppenComponent',
  data() {
    return {
      baugruppen: [],
      error: '',
      text: ''
    }
  },

  methods: {
    async createBaugruppe() {
      await BaugruppenService.insertBaugruppe(this.name, this.gewicht, this.laenge, this.breite, this.hoehe);
      this.baugruppen = await BaugruppenService.getBaugruppe();
      }
  }
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <label name="header">Baugruppe hinzufügen</label>
          </div>

          <div class="modal-body">
            <input type="text" id="create-baugruppe" v-model="name" placeholder="Name" required>
            <input type="text" id="create-baugruppe" v-model="gewicht" placeholder="Gewicht in g">
            <input type="text" id="create-baugruppe" v-model="laenge" placeholder="Länge in cm">
            <input type="text" id="create-baugruppe" v-model="breite" placeholder="Breite in cm">
            <input type="text" id="create-baugruppe" v-model="hoehe" placeholder="Hoehe in cm">
          </div>

          <div class="modal-footer">
            <slot name="footer">
                <button type="submit" v-on:click="createBaugruppe" @click="$emit('close')">add</button>
              <button
                class="modal-default-button"
                @click="$emit('close')"
              >Exit</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>