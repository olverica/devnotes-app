<template>
  <button 
    class="navigation__item"
    :class="modifier">

    <i class="navigation__item_icon"></i>

    <h6 class="navigation__item_name">{{ name }}</h6>

    <i class="sticker"></i>
  </button>
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'


@Component
export default class Folder extends Vue {

  @Prop({type: String, default:'' }) name!: string;

  @Prop({type: String, default:'' }) type!: string;

  get modifier(): string  {
    return this.type ? 'navigation__item--' + this.type : ''
  }
}
</script>