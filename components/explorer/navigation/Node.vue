<template>

  <explorer-navigation-nodes-note
    v-if="isNote()"
    :node="node"/>
  
  <explorer-navigation-nodes-tag
    v-else-if="isTag()"
    :node="node"/>

  <explorer-navigation-nodes-folder
    v-else-if="isFolder()"
    :node="node"/>

  
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'
import FolderNode from '~/services/notefs/nodes/folder' 
import TreeNode from '~/services/notefs/nodes/node' 
import NoteNode from '~/services/notefs/nodes/note' 
import TagNode from '~/services/notefs/nodes/tag' 

  
@Component
export default class Node extends Vue {

  @Prop({type: Object, required: true}) node!: TreeNode;


  isTag(): boolean {
    return this.node instanceof TagNode
  }
  
  isNote(): boolean {
    return this.node instanceof NoteNode
  }

  isFolder(): boolean {
    return this.node instanceof FolderNode
  }
}
</script>