<template>
  <div 
    ref="wrapper"
    class="shrinkable_wrapper"
    :style="{
      'height': parsedHeight,
      'transition-duration': parsedDuration}">

    <div 
      ref="inner"
      class="shrinkable_content">

      <slot/>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue' 
import {Component, PropSync, Prop, Watch, Ref} from 'nuxt-property-decorator'

@Component
export default class Shrinkable extends Vue {
  
  @Ref() inner !: HTMLElement;

  @Prop({type: Number, default: 400})
  private duration!: number;

  @PropSync('shrinked', {type: Boolean}) 
  private synckedShrinked!: boolean;

  private height: number = -1;

  private timeout: NodeJS.Timeout|null = null;


  get parsedHeight(): string {
    return this.height === -1 ? 'auto': this.height + 'px';
  }

  get parsedDuration(): string {
    return  this.duration + 'ms';
  }

  get slotShown(): boolean {
    return !!!this.synckedShrinked;
  }


  @Watch('synckedShrinked') 
  onShrinkedChange(shrinked: boolean) {
    this.toggle(shrinked);
  }

  mounted() {
    if (this.synckedShrinked)
      this.hideContent();
  }

  toggle(shrinked: boolean) {
    if (this.timeout)
      clearTimeout(this.timeout);

    if (shrinked) 
      this.close();
    else 
      this.open();
  }

  open() {
    this.wrappContent();
    this.setTimeout(this.setAutoHeight, this.duration);
  }

  close() {
    this.wrappContent()
    this.setTimeout(this.hideContent, 50);
  }

  setTimeout(callback: () => void, duration: number) {
    let wrapped = () => {
      this.timeout = null;
      callback();
    };

    this.timeout = setTimeout(wrapped, duration);
  }

  wrappContent() {
    this.height = this.getContentHeight();
  }

  hideContent() {
    this.height = 0;
  }

  setAutoHeight() {
    this.height = -1;
  }

  getContentHeight() {
    return this.inner.offsetHeight;
  }
}
</script>

<style lang="sass" scoped>

.shrinkable_wrapper
  overflow: hidden
  transition-property: height

</style>