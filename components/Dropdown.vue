<template>
  <div 
    class="dropdown"
    :class="{
      'dropdown--light': !!!darkColored,
      'dropdown--dark': darkColored}">

    <button class="dropdown__item dropdown__item--settings">
      <i class="dropdown__item_icon">settings</i>
      <span class="dropdown__item_name">settings</span>
    </button>

    <div class="dropdown__scrollable">
      <button 
        class="dropdown__item"
        v-for="(option, index) in options"
        :key="index">

        <i class="dropdown__item_icon">{{ option.icon }}</i>
        <span class="dropdown__item_name">{{ option.label }}</span>
      </button>
    </div>
  </div>

</template>


<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'


interface Option {
  label: string
  icon: string
}


@Component
export default class Explorer extends Vue {

  @Prop({type: Boolean, default: false}) darkColored!: boolean;

  @Prop({type: Array, default: () => []}) options!: Option[];

}
</script>