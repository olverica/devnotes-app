<template>
  <viewer-navigation-card
    type="folder"
    :name="name"/>
</template>



<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'
import FolderNode, {FolderPermission as Permission}  from '~/services/notefs/nodes/folder'


@Component
export default class Folder extends Vue {

  @Prop({type: Object, required: true }) node!: FolderNode;


  get name(): string  {
    return this.node.name
  }

  get type():string {
    let {permission} = this.node;

    switch (permission) {
      case Permission.Protected:
          return 'folder';

      case Permission.Private:
          return 'developers';

      case Permission.Public:
          return 'customer';
    }
  }
}
</script>