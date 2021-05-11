<template>
  <div class="navigation__folder_outer">

    <explorer-navigation-title
      :type="type"
      :name="name"/>

    <div class="navigation__folder_inner">

      <explorer-navigation-node
        v-for="(node, index) of children"
        :key="index"
        :node="node"/>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'
import FolderNode, {FolderPermission as Permission}  from '~/services/notefs/nodes/folder'


@Component
export default class Tag extends Vue {

  @Prop({type: Object, required: true }) node!: FolderNode;


  get name(): string  {
    return this.node.name
  }

  get children(): any[]  {
    return this.node.children
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