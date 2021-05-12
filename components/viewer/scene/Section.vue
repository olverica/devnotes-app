<template>
  <div class="viewer__section">
    <h2 
      class="viewer__title viewer__title--tag"
      v-if="titleShown">
      {{ title }}
    </h2>

    <viewer-navigation-node
      v-for='node in nodes'
      :key="node.id"
      :node="node"/> 

    <slot/>
  </div>
</template>


<script lang="ts">
import Vue from 'vue' 
import TreeNode from '~/services/notefs/nodes/node'
import {Component, Prop} from 'nuxt-property-decorator'
 

@Component
export default class FolderSection extends Vue {
  
  @Prop({type: Array}) nodes!: TreeNode[];

  @Prop({type: String}) title!: string;


  get titleShown() {
    return this.title;
  }
}
</script>