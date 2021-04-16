<template>
  <div class="grid-tmp">


  </div>
</template>


<script lang="ts">
import Vue from 'vue' 
import {Component} from 'nuxt-property-decorator'
import TreeComponent from '~/services/notefs/component'
import TreeContainer from '~/services/notefs/container'
import TreeQueryBuilder from '~/services/notefs/query/builder'
import ModelRepository from '~/services/model/ModelRepository'
import DummyAPI from '~/services/api/DummyAPI'


interface Update {
  name: string
  parent?: string|number
}

interface Create {
  parent: string|number
  name: string,
}

interface Model {
  id: string|number
  name: string
  parent: string|number
  [index: string]: unknown
}

type DummyComponent = TreeComponent<Model, Create, Update>;


class DummyRepo extends ModelRepository<Model, Create, Update> {
    
    protected readonly path = 'path';

}


@Component
export default class IndexPage extends Vue {
  
  private component!: DummyComponent;

  mounted() {
    let container = new TreeContainer({
      id: 'some',
      children: [
        {id: 213, parent: 'some'}
      ]
    });
    
     
    let api = new DummyAPI();
    let query = new TreeQueryBuilder(container);
    let repo = new DummyRepo(api);

    this.component = new TreeComponent<Model, Create, Update>(query, repo);

    try {
      (window as any).component = this.component;
    }
    catch {
      //
    }

  }
}
</script>