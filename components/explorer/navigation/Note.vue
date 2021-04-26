<template>
  <explorer-navigation-title
    type="file"
    :name="name"/>
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'
import {NoteModel} from '~/services/model/Note'


@Component
export default class Note extends Vue {

  @Prop({type: Object, required: true }) node!: NoteModel;

  get name(): string  {
    return this.node.name;
  }
}
</script>