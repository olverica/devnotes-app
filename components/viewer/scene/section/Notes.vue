<template>
  <viewer-scene-section
    :nodes="notes"/>
</template>


<script lang="ts">
import Vue from 'vue' 
import TreeNote from '~/services/notefs/nodes/note'
import {Component, Prop} from 'nuxt-property-decorator'
 

@Component
export default class FolderSection extends Vue {
  
  @Prop({type: Array}) notes!: TreeNote[];
}
</script>