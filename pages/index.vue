<template>
  <div class="root">
    <navbar/>
    
    <main class="project">
      <explorer :project="project"/>
      <viewer :project="project"/>
    </main>
  </div>
</template>


<script lang="ts">
import Vue from 'vue' 
import {ref} from '@nuxtjs/composition-api'
import Cursor from '~/services/cursor'
import Project from '~/models/project'
import ProjectParser from '~/services/project/parser'
import {Component, ProvideReactive} from 'nuxt-property-decorator'


@Component
export default class IndexPage extends Vue {
  
  @ProvideReactive() 
  public cursor!: Cursor;

  public project: Project|null = null;


  get root() {
    return this.project?.root;
  }


  created() {
    this.cursor = this.creteCursor();
    this.project = this.createProject();

    this.selectRoot();
  }

  selectRoot() {
    let root = this.project?.root;
    
    this.cursor.select(root);
  }

  creteCursor() {
    let cursor = new Cursor();
    ref(cursor);

    return cursor;
  }

  createProject() {
    let tree = this.createTree();
    let project = this.parseProject(tree);

    ref(project);

    return project;
  }
    
  parseProject(tree: object) {
    let parser = new ProjectParser();
    let project = parser.eat(tree);

    return project;
  }

  createTree() {
    return {
      id: 'project',
      name: 'project',

      root: {
        id: 'root', type: 'root', name: 'some',
        children: [
          {
            id: 'folder 0', type: 'folder', name: 'some', permission: 'protected',
            children: [
              {
                id: 'tag', color: 'asdas', type: 'tag', name: 'some',
                children: [
                  {id: 'note 0', type: 'note', name: 'some'},
                  {id: 'note 1', type: 'note', name: 'some'}
                ]
              },
              {id: 'note 2', type: 'note', name: 'some'}
            ]
          },
          {id: 'folder 1', type: 'folder', name: 'some', permission: 'private', children: []},
          {id: 'folder 2', type: 'folder', name: 'some', permission: 'public', children: []},
          {id: 'note 3', type: 'note', name: 'some'},

          {
            id: 'trash', type: 'trashBin',
            children: [{
              id: 'garbage',
              type: 'garbage',
              deletedAt: 'asd',
              node: {id: 'note 10', type: 'note', name: 'some'}
            }]
          },  
        ]
      }
    }
  }
};
</script>