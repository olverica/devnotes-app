<template>
  <div class="viewer__area">
    <viewer-navigation-section
      :nodes="folders"/>

    <viewer-navigation-section
      :nodes="notes"/>
  </div>
</template>


<script lang="ts">
import TreeNode from '~/services/notefs/nodes/node'
import FolderNode from '~/services/notefs/nodes/folder'
import TreeNodeSplitter from '~/mixins/tree-node-splitter'
import {isNote, isFolder} from '~/services/notefs/guards'
import {Component, Prop, mixins} from 'nuxt-property-decorator'
  

@Component
export default class RootNavigation extends mixins(TreeNodeSplitter) {

  @Prop({type: Object, required: true}) node!: FolderNode;


  get folders(): TreeNode[] {
    let validator = isFolder;
    let nodes = this.node.children;

    return this.sliceNodes(nodes, validator);
  }

  get notes(): TreeNode[]  {
    let validator = isNote;
    let nodes = this.node.children;

    return this.sliceNodes(nodes, validator);;
  }

}
</script>