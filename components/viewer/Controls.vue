<template>
  <viewer-controls-layout>
    <template #left>
      <viewer-controls-button-undo/>
      <viewer-controls-dropdown-project/>

      <viewer-controls-dropdown-folder
        v-if="hasFolderParent"
        :folder="info.parentFolder"/>
    </template>

    <template #middle>
      <viewer-controls-tags/>
    </template>

    <template #right>
      <viewer-controls-button-create/>
      <viewer-controls-button-clear/>
      <viewer-controls-button-view/>
    </template>
  </viewer-controls-layout>
</template>


<script lang="ts">
import Vue from 'vue' 
import TreeNode from '~/services/notefs/nodes/node'
import ProjectContainer from '~/services/notefs/project'
import {isNote, isFolder, isRoot} from '~/services/notefs/guards'
import {Component, InjectReactive, Prop} from 'nuxt-property-decorator'


type NodeInfo = any;

@Component
export default class Explorer extends Vue {

  @Prop({type: Object, required: true}) node!: TreeNode;

  @InjectReactive() project?: ProjectContainer|null;

  @InjectReactive() cursor?: ProjectContainer|null;



  get hasFolderParent(): boolean {
    return Boolean(this.info.parentFolder);
  }

  get hasTags(): boolean {
    return Boolean(this.info.tags);
  }

  get parentFolder() {
    return this.info.parentFolder
  }

  get tags() {
    return this.info.tags
  }

  get info(): NodeInfo {
    if (isNote(this.node))
      return 1;

    if (isFolder(this.node))
      return 2;

    if (isRoot(this.node))
      return 3;

    return 4;
  }
}
</script>