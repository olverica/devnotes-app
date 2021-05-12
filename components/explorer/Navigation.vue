<template>
  <div class="navigation">

    <explorer-navigation-node
      v-for="node in root.children"
      :key="node.id"
      :node="node"/>

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

  @Prop({type: Object, required: true}) project!: ProjectContainer;

  get root(): RootNode {
    return this.project
        .selectRoot()
        .get();
  }
}
</script>