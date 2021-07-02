<template>
  <div class="navbar__profile">
    <button class="navbar__profile_image"></button>

    <span class="navbar__profile_name">{{ name }}</span>

    <span class="navbar__profile_role">{{ role }}</span>
  </div>
</template>


<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'

@Component
export default class Profile extends Vue {
  
  // TO DO
  @Prop({type: String, default: '' }) avatar!: string;

  @Prop({type: String, default: 'Cody Fisher' }) name!: string;

  @Prop({type: String, default: 'role' }) role!: string;

}
</script>