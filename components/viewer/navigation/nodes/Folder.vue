<template>
  <viewer-navigation-card
    :type="type"
    :name="name"
    @click.native="select"/>
</template>



<script lang="ts">
import Vue from 'vue' 
import TreeCursor from '~/services/cursor'
import {Component, Prop, InjectReactive} from 'nuxt-property-decorator'
import FolderNode, {FolderPermission as Permission}  from '~/services/notefs/nodes/folder'


@Component
export default class Folder extends Vue {

  @InjectReactive() cursor!: TreeCursor;

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
          return 'private';

      case Permission.Public:
          return 'public';
    }
  }
  
  select() {
    this.cursor.select(this.node);
  }
}
</script>