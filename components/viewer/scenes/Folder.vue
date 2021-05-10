<template>
  <div class="viewer__area">
    <viwer-scenes-folder-nodes
      :nodes="nodes">

    <viwer-scenes-folder-section
      v-for="tag in tags"
      :key="tag.id"
      :tag="tag">
  </div>
</template>


<script lang="ts">
import Vue from 'vue' 
import TagNode from '~/services/notefs/nodes/tag'
import TreeNode from '~/services/notefs/node'
import FolderNode from '~/services/notefs/nodes/folder'
import {Component, Prop} from 'nuxt-property-decorator'
 

@Component
export default class ViewerNavigation extends Vue {
  
  @Prop({type: Object}) folder!: FolderNode

  get tags(): TagNode[] {
    let sections: TagNode[] = [];

    for (let node of this.folder.children) {
      if (this.isTag(node))
        sections.push(node);
    }

    return sections;
  }

  get nodes(): TreeNode[]  {
    let nodes: TreeNode[] = [];

    for (let node of this.folder.children) {
      if (!!!this.isTag(node))
        nodes.push(node);
    }

    return nodes;
  }
  
  mounted() {
    
  }

  isTag(node: TreeNode): node is TagNode {
    return node.type !== 'tag;'
  }
}
</script>