<template>
  <aside class="explorer">

    <explorer-controls/>

    <client-only>
      <explorer-navigation
        v-if="loaded"
        :container="container"/>
    </client-only>

  </aside>

</template>

<script lang="ts">
import Vue from 'vue' 
import TreeNode from '~/services/notefs/nodes/node'
import TreeParser from '~/services/notefs/parser'
import ProjectContainer from '~/services/notefs/project'
import {Component, Prop} from 'nuxt-property-decorator'
  
@Component
export default class Navigation extends Vue {

  private container?: ProjectContainer;

  
  get loaded(): boolean {
    return Boolean(this.container);
  }


  beforeMount() {
    this.container = this.createContainer();
  }

  createContainer() {
    let tree = this.createTree();
    let root = this.parseTree(tree);
    let container = new ProjectContainer(root);

    return container;
  }
  
  parseTree(tree: TreeNode) {
    let parser = new TreeParser();
    let root = parser.generate(tree);

    return root;
  }

  createTree() {
    return {
      id: 0, type: 'root', name: 'some',
      children: [
        {
          id: 1, type: 'folder', name: 'some', permission: 'protected',
          children: [
            {
              id: 2, color: 'asdas', type: 'tag', name: 'some',
              children: [
                {id: 3, type: 'note', name: 'some'},
                {id: 4, type: 'note', name: 'some'}
              ]
            },
            {id: 5, type: 'note', name: 'some'}
          ]
        },
        {id: 6, type: 'folder', name: 'some', permission: 'private', children: []},
        {id: 7, type: 'folder', name: 'some', permission: 'public', children: []},
        {id: 8, type: 'note', name: 'some'}
      ]
    }
  }
}
</script>