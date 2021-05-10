<template>
  <explorer-navigation-title
    type="file"
    :name="name"/>
</template>

<script lang="ts">
import Vue from 'vue' 
import NoteNode from '~/services/notefs/nodes/note'
import {Component, Prop} from 'nuxt-property-decorator'


@Component
export default class Note extends Vue {

  @Prop({type: Object, required: true }) node!: NoteNode;

  get name(): string  {
    return String(this.node.name);
  }
}
</script>