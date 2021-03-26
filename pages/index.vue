<template>

  <div class="grid-tmp">

    <aside
      class="navbar"
      :class="{'navbar--minimized': shrinked}">

      <div class="navbar__scrollable">

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

          <button class="navbar__link navbar__link--pinned">
            <i class="navbar__link_icon ol-icons">github</i>
            <span class="navbar__link_name">ol.forms</span>
          </button>

          <button class="navbar__link navbar__link--pinned">
            <i class="navbar__link_icon ol-icons">github</i>
            <span class="navbar__link_name">ol.forms</span>
          </button>

          <button class="navbar__link navbar__link--pinned">
            <i class="navbar__link_icon ol-icons">github</i>
            <span class="navbar__link_name">ol.forms</span>
          </button>

          <button class="navbar__link navbar__link--pinned">
            <i class="navbar__link_icon ol-icons">github</i>
            <span class="navbar__link_name">ol.forms</span>
          </button>

          <button class="navbar__link navbar__link--pinned">
            <i class="navbar__link_icon ol-icons">github</i>
            <span class="navbar__link_name">ol.forms</span>
          </button>

          <button class="navbar__link navbar__link--pinned">
            <i class="navbar__link_icon ol-icons">github</i>
            <span class="navbar__link_name">ol.forms</span>
          </button>

          <button class="navbar__link navbar__link--pinned">
            <i class="navbar__link_icon ol-icons">github</i>
            <span class="navbar__link_name">ol.forms</span>
          </button>

          <button class="navbar__link navbar__link--pinned">
            <i class="navbar__link_icon ol-icons">github</i>
            <span class="navbar__link_name">ol.forms</span>
          </button>

          <button class="navbar__link navbar__link--pinned">
            <i class="navbar__link_icon ol-icons">github</i>
            <span class="navbar__link_name">ol.forms</span>
          </button>

          <button class="navbar__link navbar__link--pinned">
            <i class="navbar__link_icon ol-icons">github</i>
            <span class="navbar__link_name">ol.forms</span>
          </button>

        </div>

      </div>

      <div
        class="navbar__logo"
        @click="toggle">

        <img class="navbar__logo_img" src="img/svg/olverica_logo.svg" alt="logo">
        <h6 class="navbar__logo_title">Dev Notes</h6>
      </div>

    </aside>

    <aside class="explorer">

      <div class="explorer__controls">

        <button class="explorer__project">
          <i class="explorer__project_icon ol-icons">github</i>
          <h6 class="explorer__project_title">ol.forms</h6>
          <i class="explorer__project_chevron ol-icons">chevron</i>
        </button>

        <button class="explorer__control">
          back
          <i class="ol-icons">go_back</i>
        </button>
        <button class="explorer__control">
          clear all
          <i class="ol-icons">stars</i>
        </button>
        <button class="explorer__control">
          create
          <i class="ol-icons">pen</i>
        </button>
        <button class="explorer__control">
          close all
          <i class="ol-icons">close_all</i>
        </button>

      </div>

      <div class="navigation">
        
        <button class="navigation__item navigation__item--file">
          <h6 class="navigation__item_name">file name</h6>
          <i class="navigation__item_sticker navigation__item_sticker--updated ol-icons">updated</i>
        </button>

        <div class="navigation__folder_outer">

          <button class="navigation__item navigation__item--folder">
            <h6 class="navigation__item_name">folder name</h6>
            <i class="navigation__item_sticker navigation__item_sticker--created ol-icons">created</i>
          </button>

          <div class="navigation__folder_inner">

            <button class="navigation__item navigation__item--file">
              <h6 class="navigation__item_name">file name</h6>
              <i class="navigation__item_sticker navigation__item_sticker--updated ol-icons">updated</i>
            </button>

            <button class="navigation__item navigation__item--file">
              <h6 class="navigation__item_name">file name</h6>
              <i class="navigation__item_sticker navigation__item_sticker--updated ol-icons">updated</i>
            </button>

            <div class="navigation__tag_outer">

              <button class="navigation__item navigation__item--tag">
                <h6 class="navigation__item_name">tag name</h6>
              </button>
              
              <div class="navigation__tag_inner">

                <button class="navigation__item navigation__item--file">
                  <h6 class="navigation__item_name">file name</h6>
                  <i class="navigation__item_sticker navigation__item_sticker--updated ol-icons">updated</i>
                </button>

                <button class="navigation__item navigation__item--file">
                  <h6 class="navigation__item_name">file name</h6>
                  <i class="navigation__item_sticker navigation__item_sticker--updated ol-icons">updated</i>
                </button>

              </div>

            </div>

          </div>

        </div>


      </div>

    </aside>

    <div class="tmp"></div>

  </div>
  
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component} from 'nuxt-property-decorator'

@Component
export default class LoginPage extends Vue {
  
  private shrinked = false;
  
  toggle() {
    this.shrinked = !!!this.shrinked;
  }
}
</script>