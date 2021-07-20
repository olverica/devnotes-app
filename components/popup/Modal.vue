<template>
  <div 
    v-if="shown"
    class="modal-blur"
    @click="close">

    <component 
      :is="modal.component"
      v-bind="modal.props"
      @close="close"/>

  </div>
</template>

<script lang="ts">
import Vue from 'vue' 
import {PopupRequest} from '~/services/popup'
import {Component, PropSync} from 'nuxt-property-decorator'


@Component
export default class Modal extends Vue {

  @PropSync('modal', {type: Object, default: null}) 
  private syncedModal!: PopupRequest|null;

  
  get shown() {
    return Boolean(this.syncedModal);
  }

  close() {
    this.syncedModal = null;
  }
}
</script>

<style lang="sass" scoped>

.modal-blur
  position: absolute
  height: 100vh
  width: 100vw
  backdrop-filter: blur(10px) brightness(0.5)
  opacity: 0.5

</style>