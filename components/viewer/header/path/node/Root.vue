<template>
  <div class="viewer__controls_dropdown" @click="onClick">root</div>
</template>


<script lang="ts">
import Vue from 'vue' 
import  Navbar from '~/components/Navbar.vue'
import {ShowHint} from '~/services/popup'
import {Component, Inject} from 'nuxt-property-decorator'

@Component
export default class Explorer extends Vue {

  @Inject() $hint!: ShowHint;  

  get options() {
    return [
      {label: 'raz', icon: 'git'},
      {label: 'dva', icon: 'git'},
      {label: 'tri', icon: 'git'},
      {label: 'cheturi', icon: 'git'},
    ]
  }

  onClick() {
    this.$hint({
      component: Navbar,
      target: this.$el
    });
  }
}
</script>