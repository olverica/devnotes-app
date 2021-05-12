<template>
  <viewer-scene-section
    :nodes="folders">

      <viewer-navigation-nodes-trash/>
      <viewer-navigation-nodes-archive/>

  </viewer-scene-section>
</template>


<script lang="ts">
import Vue from 'vue' 
import FolderNode from '~/services/notefs/nodes/folder'
import {Component, Prop} from 'nuxt-property-decorator'
 

@Component
export default class FolderSection extends Vue {
  
  @Prop({type: Array}) folders!: FolderNode[];
}
</script>