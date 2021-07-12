<template>
  <div class="viewer__area">
    <viewer-navigation-section>
      <viewer-navigation-nodes-note
        v-for="note in notes"
        :key="note.id"
        :node="note"/>
    </viewer-navigation-section>

    <viewer-navigation-tag
      v-for="tag in tags"
      :key="tag.id"
      :node="tag"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'
import TreeNode from '~/services/notefs/node'
import FolderNode from '~/services/notefs/nodes/folder'
import TreeSplitter from '~/services/notefs/tree-splitter'


@Component
export default class Folder extends Vue {

  @Prop({required: true, type: Object}) node!: FolderNode;

  get tags(): TreeNode[] {
    return this.splitted.get('tags');
  }

  get notes(): TreeNode[]  {
    return this.splitted.get('notes');
  }

  get splitted() {
    let splitter = new TreeSplitter(),
        splitted = splitter.split(this.node);
  
    return splitted;
  }
}
</script>