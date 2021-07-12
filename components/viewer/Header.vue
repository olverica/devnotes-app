<template>
  <div class="viewer__controls">
    <viewer-header-path/>

    <div class="viewer__controls_right">
      <viewer-header-button-create/>
      <viewer-header-button-clear/>
      <viewer-header-button-view/>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue' 
import TreeNode from '~/services/notefs/node'
import {isNote, isFolder, isRoot} from '~/services/notefs/guards'
import {Component, InjectReactive, Prop} from 'nuxt-property-decorator'


type NodeInfo = any;

@Component
export default class Explorer extends Vue {

  @Prop({type: Object, required: true}) node!: TreeNode;

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