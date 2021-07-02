<template>
  <div 
    class="card"
    :class="modifier">

    <div class="card__content">

      <div class="card__header">
        <i class="card__icon">{{ type }}</i>
        <button class="card__button">more</button>
      </div>

      <div class="card__title">
        <h5 class="card__title_text">{{ name }}</h5>
        <i class="sticker sticker--updated">updated</i>
      </div>

      <div class="card__footer">
        <span class="card__details">0 files</span>
        <time class="card__date">may 0 2021</time>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue' 
import {Component, Prop} from 'nuxt-property-decorator'


@Component
export default class Card extends Vue {

  @Prop({type: String, default:'' }) name!: string;

  @Prop({type: String, default:'' }) type!: string;


  get modifier(): string  {
    return this.type ? 'card--' + this.type : ''
  }
}
</script>