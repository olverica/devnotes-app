<template>
  <div 
    class="navbar__links"
    :class="{'navbar__links--pinned': pinned}">

    <navbar-link
      v-for="({disabled, label, icon, to}, index) in links"
      :key="index"

      :disabled="disabled"
      :label="label"
      :icon="icon"
      :to="to"/>

  </div>
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'

interface Link {
  disabled?: boolean
  label: string;
  icon: string;
  to: string;
}

@Component
export default class Links extends Vue {
  
  @Prop({type: Array, default: () => [] }) links!: Link[];

  @Prop({type: Boolean, default: false }) pinned!: boolean;
}
</script>