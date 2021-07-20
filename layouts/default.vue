<template>
  <div class="app">
    <nuxt/>
    <popups ref="popups"/>
  </div>
</template>


<script lang="ts">
import Vue from 'vue' 
import Popups from '~/components/Popups.vue'
import {PopupRequest, HintRequest} from '~/services/popup'
import {Provide, Component, Ref} from 'nuxt-property-decorator'


@Component
export default class DefaultLayout extends Vue {

  @Ref('popups') popups!: Popups;


  @Provide() 
  $modal(request: PopupRequest) {
    this.popups.showModal(request);
  }

  @Provide() 
  $alert(request: PopupRequest) {
    this.popups.showAlert(request);
  }

  @Provide() 
  $hint(request: HintRequest) {
    this.popups.showHint(request);
  }
}
</script>