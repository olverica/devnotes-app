<template>
  <aside
    class="navbar"
    :class="{'navbar--minimized': shrinked}">

    <div class="navbar__scrollable">
      <navbar-profile/>

      <navbar-links :links="links"/>

      <hr class="navbar__separator">

      <navbar-pinned :links="pinned"/>
    </div>

    <navbar-logo
      @click.native="toggle"/>

  </aside>
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component} from 'nuxt-property-decorator'

@Component
export default class Navbar extends Vue {
  
  private shrinked = false;
  
  private links = [
    { icon: 'home',     label: 'home',            to: ''},
    { icon: 'github',   label: 'github projects', to: ''},
    { icon: 'notebook', label: 'other projects',  to: ''},
    { icon: 'stack',    label: 'knowledge base',  to: ''},
  ]

  private pinned = [
    { icon: 'home',     label: 'И',            to: ''},
    { icon: 'home',     label: 'С',            to: ''},
    { icon: 'home',     label: 'Л',            to: ''},
    { icon: 'home',     label: 'А',            to: ''},
    { icon: 'home',     label: 'М',            to: ''},
  ]

  toggle() {
    this.shrinked = !!!this.shrinked;
  }
}
</script>