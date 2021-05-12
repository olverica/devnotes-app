<template>
  <viewer-scene-section
    :title="title"
    :nodes="nodes"/>
</template>


<script lang="ts">
import Vue from 'vue' 
import TagNode from '~/services/notefs/nodes/tag'
import {Component, Prop} from 'nuxt-property-decorator'
 

@Component
export default class FolderSection extends Vue {
  
  @Prop({type: Object}) tag!: TagNode;


  get nodes() {
    return this.tag.children;
  }

  get title() {
    return this.tag.name;
  }
}
</script>