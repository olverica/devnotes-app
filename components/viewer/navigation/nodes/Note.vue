<template>
  <viewer-navigation-card
    type="note"
    :name="name"
    @click.native="select"/>
</template>

<script lang="ts">
import Vue from 'vue'
import NoteNode from '~/services/notefs/nodes/note'
import TreeCursor from '~/services/cursor'
import {Component, Prop, InjectReactive} from 'nuxt-property-decorator'


@Component
export default class Note extends Vue {

  @InjectReactive() cursor!: TreeCursor;

  @Prop({type: Object, required: true }) node!: NoteNode;


  get name(): string  {
    return String(this.node.name);
  }


  select() {
    this.cursor.select(this.node);
  }
}
</script>