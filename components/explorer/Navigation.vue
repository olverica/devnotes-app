<template>
  <div class="navigation">
    
    <!-- <explorer-navigation-node
      :node="root"/> -->


    <explorer-navigation-private/>

    <explorer-navigation-public/>

    <explorer-navigation-archive/>

    <explorer-navigation-trash/>

  </div>
</template>

<script lang="ts">
import Vue from 'vue' 
//import Tag from '~/services/navigation/Tag'
//import File from '~/services/navigation/File' 
//import Node from '~/services/navigation/Node' 
//import Folder from '~/services/navigation/Folder'
import {Component} from 'nuxt-property-decorator'

  
@Component
export default class Navigation extends Vue {
  
  
  beforeMount() {
  }
}
</script>