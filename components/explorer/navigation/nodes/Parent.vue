<template>
  <div class="navigation__folder_outer">

    <explorer-navigation-title
      :class="{'navigation__item--opened': !!!shrinked}"
      :type="type"
      :name="name"
      @click.native="toggle"/>

    <transition-shrink 
      class="navigation__folder_inner"
      :shrinked.sync="shrinked">

      <explorer-navigation-node
        v-for="(node, index) of children"
        :key="index"
        :node="node"/>

    </transition-shrink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue' 
import ParentNode from '~/services/notefs/nodes/parent'
import {Component, Prop} from 'nuxt-property-decorator'


@Component
export default class Parent extends Vue {

  private shrinked = true;

  @Prop({type: String}) type!: string;

  @Prop({type: String}) color!: string;

  @Prop({type: Object, required: true}) node!: ParentNode;


  get name(): string  {
    return this.node.name
  }

  get children(): any[]  {
    return this.node.children
  }

  toggle() {
    this.shrinked = !!!this.shrinked
  }
}
</script>