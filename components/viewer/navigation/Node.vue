<template>
  <viewer-navigation-nodes-note
    v-if="isNote"
    :node="node"/>
  
  <viewer-navigation-nodes-folder
    v-else-if="isFolder"
    :node="node"/>
</template>

<script lang="ts">
import Vue from 'vue' 
import TreeNode from '~/services/notefs/nodes/node' 
import {isNote, isFolder} from '~/services/notefs/guards'
import {Component, Prop } from 'nuxt-property-decorator'

  
@Component
export default class Node extends Vue {

  @Prop({type: Object, required: true}) node!: TreeNode;

  
  get isNote(): boolean {
    return isNote(this.node);
  }

  get isFolder(): boolean {
    return isFolder(this.node);
  }
}
</script>