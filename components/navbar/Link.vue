<template>
  <nuxtLink 
    class="navbar__link" 
    :class="{'navabar__link--pinned': pinned}"

    :exact-active-class="exactClass"
    :active-class="activeClass"
    :disabled="disabled"
    :to="to">

    <i class="navbar__link_icon ol-icons">
      {{ icon }}
    </i>

    <span class="navbar__link_name">
      {{ label }}
    </span>

  </nuxtLink>
</template>


<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'

@Component
export default class Link extends Vue {
  
  @Prop({type: String, default: '' }) icon!: string;

  @Prop({type: String, default: '' }) label!: string;

  @Prop({type: String, default: '' }) to!: string;

  @Prop({type: String, default: '' }) pinned!: string;

  @Prop({type: Boolean, default: false }) disabled!: boolean;

  @Prop({type: Boolean, default: false}) exact!: boolean;


  get activeClass(): string {
    return this.exact ?  '' : 'navbar__link--active';
  }

  get exactClass(): string {
    return this.exact ? 'navbar__link--active': '';
  }
}
</script>