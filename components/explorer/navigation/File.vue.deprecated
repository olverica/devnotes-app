<template>
  <explorer-navigation-title
    type="file"
    :name="name"/>
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'
import NavigationFile from '~/services/navigation/Folder'


@Component
export default class File extends Vue {

  @Prop({type: Object, required: true }) node!: NavigationFile;

  get name(): string  {
    return this.node.getName();
  }
}
</script>