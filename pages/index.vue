<template>
  <div class="root">

    <navbar/>

    <main class="project">
      <explorer/>

      <viewer/>
    </main>

  </div>
</template>


<script lang="ts">
import Vue from 'vue' 
import {ref} from '@nuxtjs/composition-api'
import TreeNode from '~/services/notefs/nodes/node'
import TreeParser from '~/services/notefs/parser'
import TreeCursor from '~/services/cursor'
import ProjectContainer from '~/services/notefs/project'
import {Component, ProvideReactive} from 'nuxt-property-decorator'


@Component
export default class IndexPage extends Vue {
  
  @ProvideReactive() project!: ProjectContainer;

  @ProvideReactive() cursor!: TreeCursor;


  beforeMount() {
    this.project = this.createContainer();
    this.cursor = this.creteCursor();
  }


  creteCursor() {
    let cursor = new TreeCursor();
    let root = this.project
      .selectRoot()
      .get()

    cursor.select(root);
    ref(cursor);

    return cursor;
  }

  createContainer() {
    let tree = this.createTree();
    let root = this.parseTree(tree);
    let container = new ProjectContainer(root);

    ref(container);

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
};
</script>