<template>
  <NuxtLink 
    class="navbar__link" 
    :class="{'navabar__link--pinned': pinned}"
    :to="to">

    <i class="navbar__link_icon ol-icons">
      {{ icon }}
    </i>

    <span class="navbar__link_name">
      {{ label }}
    </span>

  </NuxtLink>
</template>


<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'

@Component
export default class NavbarLink extends Vue {
  
  @Prop({type: String, default: '' }) icon!: string;

  @Prop({type: String, default: '' }) label!: string;

  @Prop({type: String, default: '' }) to!: string;

  @Prop({type: String, default: '' }) pinned!: string;
}
</script>