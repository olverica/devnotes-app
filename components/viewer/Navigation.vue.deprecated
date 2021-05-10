<template>
  <viewer-scenes-root
    v-if="rootSelected"
    :node="selected"/>

  <viewer-scenes-folder
    v-else-if="folderSelected"
    :node="selected"
    @select="select">
</template>


<script lang="ts">
import Vue from 'vue' 
import TreeNode from '~/services/notefs/node'
import {Component} from 'nuxt-property-decorator'

  
@Component
export default class ViewerNavigation extends Vue {
  
  root = {
    id: 0,
    type: 'root',
    children: [
      {id: 1, type: 'note' },
      {id: 2, type: 'folder', children: [
        {id: 3, type: 'tag', children: [
          {id: 4, type: 'note'}
        ]}
      ]}
    ]
  }

  selected!: TreeNode;


  get rootSelected(): boolean {
    return this.selected.type === 'root';
  }

  get folderSelected(): boolean {
    return this.selected.type === 'folder';
  }

  mounted() {
    this.selected = this.root;
  }
}
</script>