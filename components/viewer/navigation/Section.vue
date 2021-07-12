<template>
  <div class="viewer__section">
    <h2 
      class="viewer__title viewer__title--tag"
      v-if="titleShown">
      {{ title }}
    </h2>

    <slot/>
  </div>
</template>


<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'
 

@Component
export default class Section extends Vue {
  
  @Prop({type: String}) title!: string;


  get titleShown() {
    return this.title;
  }
}
</script>