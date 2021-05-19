<template>
  <viewer-layout>
    <viewer-controls-layout-root/>

    <viewer-navigation-layout-root
      :node="node"/>
  </viewer-layout>
</template>


<script lang="ts">
import Vue from 'vue' 
import RootNode from '~/services/notefs/nodes/root'
import {Component, Prop} from 'nuxt-property-decorator'


@Component
export default class RootViewer extends Vue {
  
  @Prop({type: Object, required: true}) node!: RootNode
}
</script>