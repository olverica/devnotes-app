<template>
  <div 
    class="viewer__card"
    :class="modifier">

    <div class="viewer__card_inner">

      <div class="viewer__card_header">
        <i class="viewer__card_icon ol-icons">{{ type }}</i>
        <button class="viewer__card_button ol-icons">more</button>
      </div>

      <div class="viewer__card_title">
        <h5>{{ name }}</h5>
        <i class="sticker sticker--updated">updated</i>
      </div>

      <div class="viewer__card_footer">
        <span class="viewer__card_details">0 files</span>
        <time class="viewer__card_date">may 0 2021</time>
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
    return this.type ? 'viewer__card--' + this.type : ''
  }
}
</script>