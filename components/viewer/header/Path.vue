<template>
  <div class="viewer__controls_left">
    <viewer-header-button-undo/>

    <viewer-header-path-node
      v-for="node in path"
      :key="node.id"
      :node="node"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TreeCursor from '~/services/cursor'
import {Component, InjectReactive} from 'nuxt-property-decorator'

@Component
export default class NodePath extends Vue {

  @InjectReactive() cursor!: TreeCursor;

  get path() {
    return this.cursor.path();
  }
}
</script>