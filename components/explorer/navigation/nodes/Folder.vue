<template>
  <explorer-navigation-group
    :name="name"
    :nodes="nodes"
    :type="type"/>
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'
import FolderNode, {FolderChild, FolderPermission as Permission}  from '~/services/notefs/nodes/folder'


@Component
export default class Folder extends Vue {

  @Prop({type: Object, required: true }) node!: FolderNode;


  get name(): string {
    return this.node.name
  }

  get nodes(): FolderChild[] {
    return this.node.children
  }

  get type(): string {
    let {permission} = this.node;

    switch (permission) {
      case Permission.Protected: return 'folder';
      case Permission.Private: return 'private';
      case Permission.Public: return 'public';
    }
  }
}
</script>