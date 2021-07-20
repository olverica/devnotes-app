<template>
  <div class="popups">

    <client-only>
      <popup-modal 
        :modal.sync="modal"/>
    </client-only>

    <popup-alerts 
      :alerts.sync="alerts"/>

    <popup-hints
      :hints.sync="hints"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component} from 'nuxt-property-decorator'
import {PopupRequest, HintRequest} from '~/services/popup'


@Component
export default class Popups extends Vue {

  private modal: PopupRequest|null = null;
  
  private hints: HintRequest[] = [];

  private alerts: PopupRequest[] = [];
  

  showModal(request: PopupRequest) {
    this.modal = request;
  }

  showAlert(request: PopupRequest) {
    this.alerts.push(request);
  }

  showHint(request: HintRequest) {
    this.hints.push(request);
  }
}
</script>

<style lang="sass" scoped>

.popups
  position: absolute
  top: 0
  
</style>