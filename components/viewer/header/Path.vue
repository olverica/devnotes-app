<template>
  <div class="viewer__controls_left">
    <viewer-header-button-undo
      :cursor="cursor"/>

    <viewer-header-path-node
      v-for="{node, siblings} in path"
      :key="node.id"
      :node="node"
      :siblings="siblings"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TreeNode, {ParentNode} from '~/services/notefs/node'
import TreeCursor from '~/services/cursor'
import {Component, InjectReactive} from 'nuxt-property-decorator'


interface PathStep {
  node: TreeNode;
  siblings: TreeNode[]|null
}

type Path = PathStep[];

@Component
export default class NodePath extends Vue {

  @InjectReactive() cursor!: TreeCursor<TreeNode>;


  get history() {
    return this.cursor.history();
  }

  get path(): Path {
    let parent: ParentNode|null = null,
        path: Path = [];

    for (let node of this.history) {
      let part = this.makePart(node, parent);
      path.push(part);
    }

    return path;
  }

  makePart(node: TreeNode, parent: ParentNode|null): PathStep {
    let siblings = this.makeSiblings(parent);
    let part = {siblings, node};

    parent = this.makeParent(node);

    return part;
  }

  makeParent(node: TreeNode): ParentNode|null {
    let hasChildren = 'children' in node;

    return hasChildren ? node as ParentNode : null 
  }

  makeSiblings(parent: ParentNode|null): TreeNode[]|null {
    return parent ? parent.children : null; 
  }
}
</script>