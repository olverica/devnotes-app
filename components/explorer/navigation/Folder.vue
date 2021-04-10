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
import NavigationNode from '~/services/navigation/Node' 
import NavigationFolder from '~/services/navigation/Folder'
import {Component, Prop} from 'nuxt-property-decorator'


@Component
export default class Folder extends Vue {

  @Prop({type: Object, required: true }) node!: NavigationFolder;


  get name(): string  {
    return this.node.getName();
  }

  get children(): NavigationNode[]  {
    return this.node.getChildren();
  }
}
</script>