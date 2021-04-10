<template>
  <div class="navigation__tag_outer">
    
   <explorer-navigation-title
      type="tag"
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
import NavigationTag from '~/services/navigation/Tag'
import NavigationNode from '~/services/navigation/Node' 
import {Component, Prop} from 'nuxt-property-decorator'


@Component
export default class Folder extends Vue {

  @Prop({type: Object, required: true }) node!: NavigationTag;


  get name(): string  {
    return this.node.getName();
  }

  get children(): NavigationNode[]  {
    return this.node.getChildren();
  }
}
</script>