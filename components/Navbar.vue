<template>
  <aside
    class="navbar"
    :class="{'navbar--minimized': shrinked}">

    <nav class="navbar__scrollable">

      <div class="navbar__profile">
        <button class="navbar__profile_image"></button>
        <h6 class="navbar__profile_name">Cody Fisher</h6>
        <p class="navbar__profile_type">developer</p>
      </div>

      <div class="navbar__links">

        <button class="navbar__link navbar__link--active">
          <i class="navbar__link_icon ol-icons">home</i>
          <span class="navbar__link_name">home</span>
        </button>

        <button class="navbar__link">
          <i class="navbar__link_icon ol-icons">github</i>
          <span class="navbar__link_name">github projects</span>
        </button>

        <button class="navbar__link">
          <i class="navbar__link_icon ol-icons">notebook</i>
          <span class="navbar__link_name">other projects</span>
        </button>

        <button class="navbar__link">
          <i class="navbar__link_icon ol-icons">stack</i>
          <span class="navbar__link_name">knowledge base</span>
        </button>

      </div>

      <hr class="navbar__separator">

      <div class="navbar__links navbar__links--pinned">

        <button class="navbar__link">
          <i class="navbar__link_icon ol-icons">github</i>
          <span class="navbar__link_name">pinned project</span>
        </button>

      </div>

    </nav>

    <div
      class="navbar__logo"
      @click="toggle">

      <img class="navbar__logo_img" src="img/svg/olverica_logo.svg" alt="logo">
      <h6 class="navbar__logo_title">Dev Notes</h6>
    </div>

  </aside>
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component} from 'nuxt-property-decorator'

@Component
export default class Navbar extends Vue {
  
  private shrinked = false;
  
  toggle() {
    this.shrinked = !!!this.shrinked;
  }
}
</script>