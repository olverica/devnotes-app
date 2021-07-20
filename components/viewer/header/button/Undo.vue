<template>
  <button 
    class="viewer__controls_button"
    :disabled="disabled"
    @click="onClick">

    go_back
  </button>
</template>


<script lang="ts">
import Vue from 'vue'
import Cursor from '~/services/cursor'
import TreeNode from '~/services/notefs/node'
import {Component, Prop} from 'nuxt-property-decorator'


@Component
export default class UndoButton extends Vue {

  @Prop({type: Object, required: true})
  private  cursor!: Cursor<TreeNode>;


  get disabled() {
    let history = this.cursor.history();
    let length = history.length;

    return length === 1;
  }

  onClick() {
    this.cursor.goBack();
  }
}
</script>