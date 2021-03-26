<template>
  <div>
    
    <transition name="fade">
      <img v-if="shown"/>
    </transition>

    <button @click="toggle">
      BUTTON
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component} from 'nuxt-property-decorator'
import Model from '~/services/Model'

@Component
export default class Page extends Vue {
  public shown = true;

  toggle() {
    this.shown = !!!this.shown;
  }
}
</script>

<style lang="sass" scoped>

  img
    height: 50px
    width: 50px
    background: blue
    display: block

  button
    padding: 20px
    border: 2px solid
    margin: 50px

  .fade-enter
    opacity: 0

  .fade-to 
    opacity: 1

  .fade-enter-active
    transition: opacity 1s

  .fade-leave
    opacity: 1 

  .fade-leave-to
    opacity: 0
  
  .fade-leave-active
    transition: opacity 1s

</style>