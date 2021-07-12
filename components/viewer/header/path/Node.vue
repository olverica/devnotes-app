<template>
  <viewer-header-path-node-folder
    v-if="isFolder()"
    :node="node"/>

  <viewer-header-path-node-root
    v-else-if="isRoot()"
    :node="node"/>
</template>

<script lang="ts">
import Vue from 'vue' 
import TreeNode from '~/services/notefs/node' 
import {Component, Prop} from 'nuxt-property-decorator'
import {isFolder, isRoot} from '~/services/notefs/guards'

@Component
export default class Node extends Vue {

  @Prop({type: Object, required: true})
  private  node!: TreeNode;


  isRoot(): boolean {
    return isRoot(this.node);
  }

  isFolder(): boolean {
    return isFolder(this.node);
  }
}
</script>