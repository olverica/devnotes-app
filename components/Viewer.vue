<template>
  <client-only>
    <div class="viewer">
      <component 
        :is="header"
        :node="selected"/>

      <componet 
        :is="scene"
        :node="selected"/>
    </div>
  </client-only>
</template>

<script lang="ts">
import {Component, InjectReactive} from 'nuxt-property-decorator'
import {isFolder, isRoot, isNote} from '~/services/notefs/guards'
import FolderScene from '~/components/viewer/navigation/scenes/Folder.vue'
import TreeCursor from '~/services/cursor'
import NoteScene from '~/components/viewer/navigation/scenes/Note.vue'
import RootScene from '~/components/viewer/navigation/scenes/Root.vue'
import Controlls from '~/components/viewer/Header.vue'
import Vue from 'vue' 


@Component
export default class Viewer extends Vue {

  @InjectReactive() cursor!: TreeCursor;

  
  get header() {
    return Controlls;
  }

  get scene() {
    if (this.isFolder)
      return FolderScene;
    
    if (this.isNote)
      return NoteScene;

    if (this.isRoot)
      return RootScene;
  }

  get isFolder()  {
    return isFolder(this.selected);
  }

  get isRoot()  {
    return isRoot(this.selected);
  }

  get isNote()  {
    return isNote(this.selected);
  }

  get selected() {
    return this.cursor.selected();
  }
}
</script>