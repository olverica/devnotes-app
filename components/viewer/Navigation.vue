<template>
  <viewer-scene-root
    v-if="rootSelected"
    :node="selected"/>

  <viewer-scene-folder
    v-else-if="folderSelected"
    :node="selected"/>
</template>

<script lang="ts">
import Vue from 'vue' 
import RootNode from '~/services/notefs/nodes/root'
import TreeCursor from '~/services/cursor'
import FolderNode from '~/services/notefs/nodes/folder'
import ProjectContainer from '~/services/notefs/project'
import {Component, Prop, InjectReactive} from 'nuxt-property-decorator'
  
@Component
export default class Navigation extends Vue {

  @InjectReactive() cursor!: TreeCursor;

  @Prop({type: Object, required: true}) project!: ProjectContainer;


  get selected() {
    return this.cursor.selected();
  }

  get folderSelected(): boolean {
    return this.selected instanceof FolderNode;  
  }

  get rootSelected(): boolean {
    return this.selected instanceof RootNode;  
  }
}
</script>