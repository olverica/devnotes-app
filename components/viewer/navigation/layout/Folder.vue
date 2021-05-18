<template>
  <div class="viewer__area">
    <viewer-navigation-section
      :nodes="notes"/>

    <viewer-navigation-section
      v-for="tag in tags"
      :key="tag.id"
      :title="tag.title"
      :nodes="tag.children"/>
  </div>
</template>


<script lang="ts">
import TreeNode from '~/services/notefs/nodes/node'
import FolderNode from '~/services/notefs/nodes/folder'
import {isNote, isTag} from '~/services/notefs/guards'
import TreeNodeSplitter from '~/mixins/tree-node-splitter'
import {Component, Prop, mixins} from 'nuxt-property-decorator'


@Component
export default class FolderNavigation extends mixins(TreeNodeSplitter) {
  
  @Prop({type: Object, required: true}) node!: FolderNode

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