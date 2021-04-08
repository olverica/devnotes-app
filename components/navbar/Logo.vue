<template>
  <div class="navbar__logo">
    <img class="navbar__logo_img" :src="getSrc()" alt="logo">
    
    <h6 class="navbar__logo_title">Dev Notes</h6>
  </div>
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component} from 'nuxt-property-decorator'

@Component
export default class Profile extends Vue {

  private path = '/img/svg/olverica_logo.svg';

  get src(): string {
    return /* window.origin + */ this.path;
  } 

  getSrc() {
    return window.origin + this.path;
  }
}
</script>