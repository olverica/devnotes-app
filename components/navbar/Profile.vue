<template>
  <div class="navbar__profile">
    <button class="navbar__profile_image"></button>

    <h6 class="navbar__profile_name">{{ name }}</h6>

    <p class="navbar__profile_type">{{ role }}</p>
  </div>
</template>


<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'

@Component
export default class NavbarLink extends Vue {
  
  // TO DO
  @Prop({type: String, default: '' }) avatar!: string;

  @Prop({type: String, default: 'Richard Roe' }) name!: string;

  @Prop({type: String, default: 'role' }) role!: string;

}
</script>