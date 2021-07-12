<template>
  <div class="navigation__folder_outer">

    <explorer-navigation-title
      :class="{'navigation__item--opened': !!!shrinked}"
      :type="type"
      :name="name"
      @click.native="toggle">
    </explorer-navigation-title>

    <transition-shrink 
      class="navigation__folder_inner"
      :shrinked.sync="shrinked">

      <explorer-navigation-node
        v-for="node in nodes"
        :key="node.id"
        :node="node"/>

    </transition-shrink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue' 
import TreeNode from '~/services/notefs/node'
import {Component, Prop} from 'nuxt-property-decorator'


@Component
export default class Group extends Vue {

  @Prop({type: String}) 
  private type!: string;

  @Prop({type: String}) 
  private color!: string;

  @Prop({type: String}) 
  private name!: string;

  @Prop({type: Array, default: () => []}) 
  private nodes!: TreeNode;

  private shrinked: boolean = true;


  toggle() {
    this.shrinked = !!!this.shrinked;
  }
}
</script>