<template>
  <div class="viewer__controls">
    <viewer-header-path/>
    
    <div class="viewer__controls_right">
      <viewer-header-button-create/>
      <viewer-header-button-clear/>
      <viewer-header-button-view/>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue' 
import TreeNode from '~/services/notefs/node'
import {Component, Prop} from 'nuxt-property-decorator'


@Component
export default class Explorer extends Vue {

  @Prop({type: Object, required: true}) node!: TreeNode;

}
</script>