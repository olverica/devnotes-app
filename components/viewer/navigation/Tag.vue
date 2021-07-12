<template>
  <viewer-navigation-section>
    <h2 class="viewer__title viewer__title--tag">
      {{ title }}
    </h2>

    <viewer-navigation-nodes-note
      v-for="note in notes"
      :key="note.id"
      :node="node"/>    
  </viewer-navigation-section>
</template>


<script lang="ts">
import Vue from 'vue' 
import TagNode from '~/services/notefs/nodes/tag'
import {Component, Prop} from 'nuxt-property-decorator'

@Component
export default class Section extends Vue {
  
  @Prop({type: Object}) node!: TagNode;


  get title() {
    return this.node.name;
  }

  get notes() {
    return this.node.children;
  }
}
</script>