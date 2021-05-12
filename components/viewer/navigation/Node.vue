<template>

  <viewer-navigation-nodes-note
    v-if="isNote()"
    :node="node"/>
  
  <viewer-navigation-nodes-folder
    v-else-if="isFolder()"
    :node="node"/>

</template>

<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'
import FolderNode from '~/services/notefs/nodes/folder' 
import TreeNode from '~/services/notefs/nodes/node' 
import NoteNode from '~/services/notefs/nodes/note' 

  
@Component
export default class Node extends Vue {

  @Prop({type: Object, required: true}) node!: TreeNode;

  
  isNote(): boolean {
    return this.node instanceof NoteNode
  }

  isFolder(): boolean {
    return this.node instanceof FolderNode
  }
}
</script>