<template>
  <client-only>
    <viewer-layout-folder
      v-if="folderSelected"
      :node="selected"/>

    <viewer-layout-root
      v-else-if="rootSelected"
      :node="selected"/>

    <viewer-layout-note
      v-else-if="noteSelected"
      :node="selected"/>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue' 
import RootNode from '~/services/notefs/nodes/root'
import NoteNode from '~/services/notefs/nodes/note'
import TreeCursor from '~/services/cursor'
import FolderNode from '~/services/notefs/nodes/folder'
import ProjectContainer from '~/services/notefs/project'
import {Component, InjectReactive} from 'nuxt-property-decorator'
  
@Component
export default class Viewer extends Vue {

  @InjectReactive() project?: ProjectContainer|null;
 
  @InjectReactive() cursor!: TreeCursor;


  get loaded(): boolean {
    return this.projectLoaded && this.cursorLoaded
  }

  get projectLoaded() {
    return Boolean(this.project);
  }

  get cursorLoaded() {
    return Boolean(this.cursor)
  }

  get selected() {
    return this.cursor.selected();
  }

  get folderSelected(): boolean {
    return this.loaded && this.selected instanceof FolderNode;  
  }

  get rootSelected(): boolean {
    return this.loaded && this.selected instanceof RootNode;  
  }

  get noteSelected(): boolean {
    return this.loaded && this.selected instanceof NoteNode;  
  }
}
</script>