<template>
  <div class="navigation">
    <explorer-navigation-node
      v-for="node in sorted"
      :key="node.id"
      :node="node"/>
  </div>
</template>

<script lang="ts">
import Project from '~/models/project'
import TreeNode from '~/services/notefs/node'
import TreeNodeSorter from '~/services/notefs/tree-sorter'
import RootNode, {RootChild} from '~/services/notefs/nodes/root'
import {Component, Prop, Vue} from 'nuxt-property-decorator'


@Component
export default class Navigation extends Vue {

  @Prop({type: Object, required: true}) 
  private project!: Project;


  get sorted(): TreeNode[] {
    let sorter = new TreeNodeSorter(),
        sorted = sorter.sort(this.nodes)

    return sorted;
  }

  get nodes(): RootChild[] {
    return this.root.children;
  }

  get root(): RootNode {
    return this.project.root;
  }
}
</script>