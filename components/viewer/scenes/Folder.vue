<template>
  <div class="viewer__area">
    
  </div>
</template>


<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'
 
 
type Section = any;

type FolderModel = any;


interface FolderScene {
  sections: Section[];
  node
} 





@Component
export default class ViewerNavigation extends Vue {
  
  @Prop({ type: Object}) folder: FolderModel

  get sections() {
    
  }

  mounted() {
    
  }
}
</script>