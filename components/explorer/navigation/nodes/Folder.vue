<template>
  <div class="navigation__folder_outer">

    <explorer-navigation-title
      type="folder"
      :name="name"/>

    <div class="navigation__folder_inner">

      <explorer-navigation-node
        v-for="(node, index) of children"
        :key="index"
        :node="node"/>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'
import FolderNode from '~/services/notefs/nodes/folder'


@Component
export default class Tag extends Vue {

  @Prop({type: Object, required: true }) node!: FolderNode;


  get name(): string  {
    return this.node.name
  }

  get children(): any[]  {
    return this.node.children
  }
}
</script>