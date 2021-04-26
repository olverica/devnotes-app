<template>
  <div class="navigation">
    
    <explorer-navigation-node
      v-for="node in root.children"
      :key="node.id"
      :node="node"/>


    <explorer-navigation-private/>

    <explorer-navigation-public/>

    <explorer-navigation-archive/>

    <explorer-navigation-trash/>

  </div>
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component} from 'nuxt-property-decorator'
import TreeNode from '~/services/notefs/node' 
import TreeContainer from '~/services/notefs/container'
 
  
@Component
export default class Navigation extends Vue {
  
  private container!: TreeContainer;

  private root!: TreeNode;
  
  beforeCreate() {
    let root = {
      id: 123,
      name: 123,
      type: 'root',
      children: [
        {id: 123, type: 'file', name: 'asd'}
      ]
    }

    this.root = root;
    console.log(123);
  }
}
</script>