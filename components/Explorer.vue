<template>
  <aside class="explorer">

    <explorer-controls/>

    <client-only>
      <explorer-navigation
        v-if="loaded"
        :project="project"/>
    </client-only>

  </aside>
</template>

<script lang="ts">
import Vue from 'vue' 
import Project from '~/services/notefs/nodes/project'
import {Component, Prop} from 'nuxt-property-decorator'
  
@Component
export default class Explorer extends Vue {

  @Prop({type: Object}) 
  private project!: Project|null;
 

  get loaded(): boolean {
    return Boolean(this.project);
  }
}
</script>