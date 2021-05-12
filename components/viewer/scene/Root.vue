<template>
  <div class="viewer__area">
    <viewer-scene-section-root-folders
      :folders="folders"/>

    <viewer-scene-section-notes
      :notes="notes"/>
  </div>
</template>


<script lang="ts">
import Vue from 'vue' 
import TreeNode from '~/services/notefs/nodes/node'
import NoteNode from '~/services/notefs/nodes/note'
import FolderNode from '~/services/notefs/nodes/folder'
import {Component, Prop} from 'nuxt-property-decorator'
  

@Component
export default class RootScene extends Vue {

  @Prop({type: Object}) node!: FolderNode;


  get folders(): TreeNode[] {
    let validator = this.isFolder;
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

  isFolder(node: TreeNode) {
    return node instanceof FolderNode;
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