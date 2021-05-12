<template>
  <section class="viewer">

    <viewer-controls/>
    
    <client-only>
      <viewer-navigation
        v-if="loaded"
        :project="project"/>
    </client-only>

  </section>
</template>

<script lang="ts">
import Vue from 'vue' 
import ProjectContainer from '~/services/notefs/project'
import {Component, InjectReactive} from 'nuxt-property-decorator'
  
@Component
export default class Viewer extends Vue {

  @InjectReactive() project?: ProjectContainer|null;
 
  get loaded(): boolean {
    return Boolean(this.project);
  }
}
</script>