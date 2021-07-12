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

  <explorer-navigation-nodes-trash
    v-else-if="isTrashBin()"
    :node="node"/>

</template>

<script lang="ts">
import Vue from 'vue' 
import TreeNode from '~/services/notefs/node' 
import {Component, Prop} from 'nuxt-property-decorator'
import {isNote, isFolder, isTag, isTrashBin} from '~/services/notefs/guards'

@Component
export default class Node extends Vue {

  @Prop({type: Object, required: true})
  private  node!: TreeNode;


  isTrashBin(): boolean {
    return isTrashBin(this.node);
  }

  isFolder(): boolean {
    return isFolder(this.node);
  }

  isNote(): boolean {
    return isNote(this.node);
  }

  isTag(): boolean {
    return isTag(this.node);
  }
}
</script>