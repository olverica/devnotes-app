<template>
  <viewer-layout>
    <viewer-controls-layout-folder/>

    <viewer-navigation-layout-folder
      :node="node"/>
  </viewer-layout>
</template>

<script lang="ts">
import Vue from 'vue' 
import FolderNode from '~/services/notefs/nodes/folder'
import {Component, Prop} from 'nuxt-property-decorator'


@Component
export default class FolderViewer extends Vue {
  
  @Prop({type: Object, required: true}) node!: FolderNode
}
</script>