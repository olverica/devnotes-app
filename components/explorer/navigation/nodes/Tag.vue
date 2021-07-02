<template>
  <explorer-navigation-group
    type="tag"
    :name="name"
    :nodes="nodes"/>
</template>


<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'
import TagNode, {TagChild} from '~/services/notefs/nodes/tag'


@Component
export default class Tag extends Vue {

  @Prop({type: Object, required: true}) 
  private node!: TagNode;


  get name(): string {
    return this.node.name
  }

  get nodes(): TagChild[] {
    return this.node.children
  }
}
</script>