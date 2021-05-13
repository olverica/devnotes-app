<template>
  <div class="navigation">

    <explorer-navigation-node
      v-for="node in folders"
      :key="node.id"
      :node="node"/>

    <explorer-navigation-nodes-archive/>

    <explorer-navigation-nodes-trash/>


    <explorer-navigation-node
        v-for="node in notes"
        :key="node.id"
        :node="node"/>

  </div>
</template>

<script lang="ts">
import RootNode from '~/services/notefs/nodes/root'
import TreeNode from '~/services/notefs/nodes/node'
import ProjectContainer from '~/services/notefs/project'
import TreeNodeSplitter from '~/mixins/tree-node-splitter'
import {isNote, isFolder} from '~/services/notefs/guards'
import {Component, Prop, mixins} from 'nuxt-property-decorator'

  
@Component
export default class Navigation extends mixins(TreeNodeSplitter) {

  @Prop({type: Object, required: true}) project!: ProjectContainer;


  get folders(): TreeNode[] {
    let validator = isFolder;
    let nodes = this.root.children;

    return this.sliceNodes(nodes, validator);
  }

  get notes(): TreeNode[]  {
    let validator = isNote;
    let nodes = this.root.children;

    return this.sliceNodes(nodes, validator);;
  }

  get root(): RootNode {
    return this.project
        .selectRoot()
        .get();
  }
}
</script>