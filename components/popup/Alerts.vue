<template>
  <div>
    <component
      v-for="(alert, index) in alerts"
      v-bind="alert.props"
      :is="alert.component"
      :key="index"
      @close="close(index)"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue' 
import {PopupRequest} from '~/services/popup'
import {Component, PropSync} from 'nuxt-property-decorator'


@Component
export default class Alerts extends Vue {

  @PropSync('alerts', {type: Array, default: null}) 
  private syncedAlerts!: PopupRequest[];

  close(index: number) {
    this.syncedAlerts.splice(index, 1);
  }
}
</script>