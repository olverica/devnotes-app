<template>
  
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component} from 'nuxt-property-decorator'
import {Model} from '~/services/Model'

export function Propety(target: Model, name: string) {
  
  function getter(this: Model) {
    return this.get(name);
  };
 
  function setter(this: Model, value: unknown) {
    return this.set(name, value)
  };


  Object.defineProperty(target, name, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

class TestModel extends ProxyModel { 

  @Propety name !: string;

  @Propety avatar !: string;

  @Propety id !: string ;

  constructor() {
    super();
  }
}

@Component
export default class LoginPage extends Vue {
  async mounted() {
    // let test = await TestModel.find();

    // test.delete();

    console.log(new TestModel());
  }
}
</script>