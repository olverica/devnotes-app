<template>
  <div class="navigation">

    <explorer-navigation-node
      v-for="node in root.children"
      :key="node.id"
      :node="node"/>


    <explorer-navigation-nodes-private/>

    <explorer-navigation-nodes-public/>

    <explorer-navigation-nodes-archive/>

    <explorer-navigation-nodes-trash/>

  </div>
</template>

<script lang="ts">
import Vue from 'vue' 
import RootNode from '~/services/notefs/nodes/root'
import ProjectContainer from '~/services/notefs/project'
import {Component, Prop} from 'nuxt-property-decorator'
  
@Component
export default class Navigation extends Vue {

  private root!: RootNode;

  @Prop({type: Object, required: true}) container!: ProjectContainer;


  beforeMount() {
    this.root = this.getRoot();
  }

  getRoot(): RootNode {
    return this.container
      .selectRoot()
      .get();
  }
}
</script>