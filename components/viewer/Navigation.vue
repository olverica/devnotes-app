<template>
  <viewer-scene-root
    v-if="rootSelected"
    :node="selected"
    @select="select"/>

  <viewer-scene-folder
    v-else-if="folderSelected"
    :node="selected"
    @select="select"/>
</template>

<script lang="ts">
import Vue from 'vue' 
import RootNode from '~/services/notefs/nodes/root'
import TreeNode from '~/services/notefs/nodes/node'
import FolderNode from '~/services/notefs/nodes/folder'
import ProjectContainer from '~/services/notefs/project'
import {Component, Prop} from 'nuxt-property-decorator'
  
@Component
export default class Navigation extends Vue {

  private selected!: TreeNode;

  @Prop({type: Object, required: true}) project!: ProjectContainer;


  get folderSelected(): boolean {
    return this.selected instanceof FolderNode;  
  }

  get rootSelected(): boolean {
    return this.selected instanceof RootNode;  
  }

  get root(): RootNode {
    return this.project
        .selectRoot()
        .get();
  }


  beforeMount() {
    this.select(this.root);
  }

  select(node: TreeNode) {
    this.selected = node;
  }
}
</script>