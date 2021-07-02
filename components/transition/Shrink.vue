<template>
  <div 
    ref="wrapper"
    class="shrinkable_wrapper"
    :style="{height: parsedHeight}">

    <div 
      ref="inner"
      class="shrinkable_content">

      <slot/>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue' 
import {Component, PropSync, Watch, Ref} from 'nuxt-property-decorator'


@Component
export default class Shrink extends Vue {

  private height: number = -1;
  
  private toggling: boolean = false;
  
  @Ref() inner !: HTMLElement;

  @Ref() wrapper !: HTMLElement;

  @PropSync('shrinked', {type: Boolean }) synckedShrinked!: boolean;


  @Watch('synckedShrinked') 
  onShrinkedChange(shrinked: boolean) {
    this.toggle(shrinked);
  }
  
  get parsedHeight(): string {
    return this.height === -1 ? 'auto': this.height + 'px';
  }

  get slotShown(): boolean {
    return this.toggling || !!!this.synckedShrinked;
  }

  mounted() {
    if (this.synckedShrinked)
      this.close();
  }

  async toggle(shrinked: boolean) {
    if (shrinked) 
      await this.close();
    else 
      await this.open();
  }

  async open() {
    await this.wrappContent();
    await this.waitForTransition();

    this.setAutoHeight();
  }

  async close() {
    await this.wrappContent();
    this.height = 0;
  }

  async waitForTransition(): Promise<void> {
    let callback = (resolve: () => void) =>
      this.appendEvent(resolve);

    return new Promise<void>(callback);
  }

  async wrappContent() {
    this.height = this.getContentHeight();
    await this.$nextTick();
  }

  appendEvent(callback: () => unknown, timeout= 500) {
    this.wrapper.addEventListener('transitionend', callback, {
      once: true
    })

    setTimeout(callback, timeout);
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
  transition: height .4s

</style>