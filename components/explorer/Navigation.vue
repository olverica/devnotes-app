<template>
  <div class="navigation">

    <explorer-navigation-node
      v-for="node in sorted"
      :key="node.id"
      :node="node"/>

    <explorer-navigation-nodes-archive/>

    <explorer-navigation-nodes-trash/>


    <explorer-navigation-node
        v-for="node in []"
        :key="node.id"
        :node="node"/>

  </div>
</template>

<script lang="ts">
import Project from '~/models/project'
import RootNode, {RootChild} from '~/services/notefs/nodes/root'
import TreeNodeSorter from '~/mixins/tree-node-sorter'
import {Component, Prop, mixins} from 'nuxt-property-decorator'


@Component
export default class Navigation extends mixins(TreeNodeSorter) {

  @Prop({type: Object, required: true}) 
  private project!: Project;


  get sorted(): RootChild[] {
    let nodes = this.root.children;

    return this.sort(nodes)
  }

  get root(): RootNode {
    return this.project.root;
  }
}
</script>