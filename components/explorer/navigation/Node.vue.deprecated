<template>

  <explorer-navigation-file
    v-if="isFile()"
    :node="node"/>

  <explorer-navigation-folder
    v-else-if="isFolder()"
    :node="node"/>

  <explorer-navigation-tag
    v-else-if="isTag()"
    :node="node"/>
  
</template>

<script lang="ts">
import Vue from 'vue' 
import NavigationTag from '~/services/navigation/Tag'
import NavigationFile from '~/services/navigation/File' 
import NavigationNode from '~/services/navigation/Node' 
import NavigationFolder from '~/services/navigation/Folder'
import {Component, Prop} from 'nuxt-property-decorator'

  
@Component
export default class Node extends Vue {

  @Prop({type: Object, required: true}) node!: NavigationNode;


  isTag(): boolean {
    return this.node instanceof NavigationTag
  }
  
  isFile(): boolean {
    return this.node instanceof NavigationFile
  }

  isFolder(): boolean {
    return this.node instanceof NavigationFolder
  }
}
</script>