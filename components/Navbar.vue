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

    <client-only>
      <navbar-logo 
        @click.native="toggle"/>
    </client-only>
    
  </aside>
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component} from 'nuxt-property-decorator'
  
@Component
export default class Navbar extends Vue {
  
  private shrinked = false;
  
  private links = [
    {icon: 'home',     label: 'home',            to: '/home', exact: true},
    {icon: 'github',   label: 'github projects', to: '/home#git'},
    {icon: 'notebook', label: 'other projects',  to: '/home#other'},
    {icon: 'stack',    label: 'knowledge base',  to: '/home#knowledge', disabled: true},
  ]

  private pinned = [
    {icon: 'home', label: 'И', to: '/notes/owo'},
    {icon: 'home', label: 'С', to: '/notes/owo'},
    {icon: 'home', label: 'Л', to: '/notes/owo'},
    {icon: 'home', label: 'А', to: '/notes/owo'},
    {icon: 'home', label: 'М', to: '/notes/owo'},
  ]

  toggle() {
    this.shrinked = !!!this.shrinked;
  }
}
</script>