<template>
  <div>
    <component
      v-for="(hint, index) in hints"
      v-bind="hint.props"
      :is="hint.component"
      :key="index"
      @close="close(index)"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue' 
import {HintRequest} from '~/services/popup'
import {Component, PropSync} from 'nuxt-property-decorator'


@Component
export default class Hints extends Vue {

  @PropSync('hints', {type: Array, default: null}) 
  private syncedHints!: HintRequest[];

  close(index: number) {
    this.syncedHints.splice(index, 1);
  }
}
</script>