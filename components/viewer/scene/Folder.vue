<template>
  <div class="viewer__area">
    <viewer-scene-section-notes
      :notes="notes"/>

    <viewer-scene-section-tag
      v-for="tag in tags"
      :key="tag.id"
      :tag="tag"/>
  </div>
</template>


<script lang="ts">
import TreeNode from '~/services/notefs/nodes/node'
import FolderNode from '~/services/notefs/nodes/folder'
import {isNote, isTag} from '~/services/notefs/guards'
import TreeNodeSplitter from '~/mixins/tree-node-splitter'
import {Component, Prop, mixins} from 'nuxt-property-decorator'

@Component
export default class FolderScene extends mixins(TreeNodeSplitter) {
  
  @Prop({type: Object}) node!: FolderNode

  get tags(): TreeNode[] {
    let nodes = this.node.children;
    let validator = isTag;

    return this.sliceNodes(nodes, validator)
  }

  get notes(): TreeNode[]  {
    let nodes = this.node.children;
    let validator = isNote;

    return this.sliceNodes(nodes, validator);
  }
}
</script>