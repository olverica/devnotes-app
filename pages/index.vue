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
import TreeNode from '~/services/notefs/nodes/node'
import TreeParser from '~/services/notefs/parser'
import ProjectContainer from '~/services/notefs/project'
import {Component, ProvideReactive} from 'nuxt-property-decorator'
import {ref} from '@nuxtjs/composition-api'


@Component
export default class IndexPage extends Vue {
  
  @ProvideReactive() project!: ProjectContainer;


  beforeMount() {
    this.project = this.createContainer();

    (window as any).set = () => {
      this.$set((this.project as any).tree.children[0], 'name', 123);
    }
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
/* import Vue from 'vue' 
import TreeNode from '~/services/notefs/nodes/node'
import TreeParser from '~/services/notefs/parser'
import ProjectContainer from '~/services/notefs/project'



export default Vue.extend({
  provide(): any {
    return {
      $project: this.project
    }
  },

  data() {
    return {
      project: {} as ProjectContainer
    }
  },

  beforeMount() {
    this.project = this.createContainer();
  },

  methods: {
    createContainer() {
      let tree = this.createTree();
      let root = this.parseTree(tree);
      let container = new ProjectContainer(root);

      return container;
    },
    
    parseTree(tree: TreeNode) {
      let parser = new TreeParser();
      let root = parser.generate(tree);

      return root;
    },

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
}); */
</script>