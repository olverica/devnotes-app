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
import Vue from 'vue' 
import TagNode from '~/services/notefs/nodes/tag'
import TreeNode from '~/services/notefs/nodes/node'
import NoteNode from '~/services/notefs/nodes/note'
import FolderNode from '~/services/notefs/nodes/folder'
import {Component, Prop} from 'nuxt-property-decorator'
 

@Component
export default class FolderScene extends Vue {
  
  @Prop({type: Object}) node!: FolderNode

  get tags(): TreeNode[] {
    let validator = this.isTag;
    let nodes = this.sliceNodes(validator)

    return nodes;
  }

  get notes(): TreeNode[]  {
    let validator = this.isNote;
    let nodes = this.sliceNodes(validator);

    return nodes;
  }


  isNote(node: TreeNode) {
    return node instanceof NoteNode;
  }

  isTag(node: TreeNode) {
    return node instanceof TagNode;
  }
  
  sliceNodes(validator: (node: TreeNode) => boolean) {
    let nodes: TreeNode[] = [];
    let children = this.node.children;

      for (let node of children) {
        if (validator(node))
          nodes.push(node);
      }

    return nodes;
  }
}
</script>