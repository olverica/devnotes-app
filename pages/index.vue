<template>
  <div class="root">

    <navbar/>

    <main class="project">
      <explorer/>
    </main>

  </div>
</template>


<script lang="ts">
import Vue from 'vue' 
import {Context} from '@nuxt/types'
import {Component } from 'nuxt-property-decorator'

@Component
export default class IndexPage extends Vue {
  
  fetch ({ redirect }: Context) {
    // redirect(301, '/home')
  }
}
</script>