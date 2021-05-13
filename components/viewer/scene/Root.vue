<template>
  <div class="viewer__area">
    <viewer-scene-section-root-folders
      :folders="folders"/>

    <viewer-scene-section-notes
      :notes="notes"/>
  </div>
</template>


<script lang="ts">
import TreeNode from '~/services/notefs/nodes/node'
import FolderNode from '~/services/notefs/nodes/folder'
import TreeNodeSplitter from '~/mixins/tree-node-splitter'
import {isNote, isFolder} from '~/services/notefs/guards'
import {Component, Prop, mixins} from 'nuxt-property-decorator'
  

@Component
export default class RootScene extends mixins(TreeNodeSplitter) {

  @Prop({type: Object}) node!: FolderNode;


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