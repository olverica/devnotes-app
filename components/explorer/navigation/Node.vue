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
import TreeNode from '~/services/notefs/nodes/node' 
import {Component, Prop} from 'nuxt-property-decorator'
import {isNote, isFolder, isTag} from '~/services/notefs/guards'
  

@Component
export default class Node extends Vue {

  @Prop({type: Object, required: true}) node!: TreeNode;


  isTag(): boolean {
    return isTag(this.node);
  }
  
  isNote(): boolean {
    return isNote(this.node);
  }

  isFolder(): boolean {
    return isFolder(this.node);
  }
}
</script>