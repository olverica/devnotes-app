<template>

  <explorer-navigation-file
    v-if="isNote()"
    :node="node"/>
  
  <explorer-navigation-tag
    v-else-if="isTag()"
    :node="node"/>

  <explorer-navigation-folder
    v-else-if="isFolder()"
    :node="node"/>

  
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'
import TreeNode from '~/services/notefs/node' 

  
@Component
export default class Node extends Vue {

  @Prop({type: Object, required: true}) node!: TreeNode;


  isTag(): boolean {
    return this.node['type'] === 'tag'
  }
  
  isNote(): boolean {
    return this.node['type'] === 'note'
  }

  isFolder(): boolean {
    return this.node['type'] === 'folder'
  }
}
</script>