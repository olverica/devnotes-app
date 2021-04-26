<template>

  <div class="root">

    <navbar/>

    <main class="project">

      <explorer/>

     <section class="viewer">

        <div class="viewer__controls">

          <div class="viewer__controls_left">
            <button class="viewer__button">
              <i class="ol-icons">go_back</i>
            </button>

            <div class="viewer__dropdown dropdown"></div>

            <div class="viewer__dropdown viewer__dropdown--folder dropdown"></div>
          </div>

          <!-- <div class="viewer__controls_tags">
            <button class="viewer__tag">viewer tag</button>
          </div> -->

          <div class="viewer__controls_right">
            <button class="viewer__button">
              <i class="ol-icons">pen</i>
            </button>

            <button class="viewer__button">
              <i class="ol-icons">stars</i>
            </button>

            <fieldset class="switch viewer__switch">
              <button class="switch__item ol-icons">grid_less</button>
              <button class="switch__item switch__item--active ol-icons">grid_more</button>
            </fieldset>
          </div>

        </div>

        <div class="viewer__area">

          <div class="viewer__section">
            <div class="viewer__card viewer__card--developers">
              <div class="viewer__card_inner">

                <div class="viewer__card_header">
                  <i class="viewer__card_icon ol-icons">developers</i>
                  <button class="viewer__card_button ol-icons">more</button>
                </div>

                <div class="viewer__card_title">
                  <h5>developers</h5>
                  <!-- <i class="sticker sticker--created">created</i> -->
                </div>

                <div class="viewer__card_footer">
                  <span class="viewer__card_details">0 files</span>
                  <time class="viewer__card_date">may 0 2021</time>
                </div>

              </div>
            </div>

            <div class="viewer__card viewer__card--customer">
              <div class="viewer__card_inner">

                <div class="viewer__card_header">
                  <i class="viewer__card_icon ol-icons">customer</i>
                  <button class="viewer__card_button ol-icons">more</button>
                </div>

                <div class="viewer__card_title">
                  <h5>customer</h5>
                  <!-- <i class="sticker sticker--created">created</i> -->
                </div>

                <div class="viewer__card_footer">
                  <span class="viewer__card_details">0 files</span>
                  <time class="viewer__card_date">may 0 2021</time>
                </div>

              </div>
            </div>

            <div class="viewer__card viewer__card--archive">
              <div class="viewer__card_inner">

                <div class="viewer__card_header">
                  <i class="viewer__card_icon ol-icons">archive</i>
                  <button class="viewer__card_button ol-icons">more</button>
                </div>

                <div class="viewer__card_title">
                  <h5>archive</h5>
                  <i class="sticker sticker--counted">7</i>
                </div>

                <div class="viewer__card_footer">
                  <span class="viewer__card_details">0 files</span>
                  <time class="viewer__card_date">may 0 2021</time>
                </div>

              </div>
            </div>

            <div class="viewer__card viewer__card--trash">
              <div class="viewer__card_inner">

                <div class="viewer__card_header">
                  <i class="viewer__card_icon ol-icons">trash</i>
                  <button class="viewer__card_button ol-icons">more</button>
                </div>

                <div class="viewer__card_title">
                  <h5>trash</h5>
                  <i class="sticker sticker--counted">3</i>
                </div>

                <div class="viewer__card_footer">
                  <span class="viewer__card_details">0 files</span>
                  <time class="viewer__card_date">may 0 2021</time>
                </div>

              </div>
            </div>
          </div>


          <div class="viewer__section">
            <h2 class="viewer__title viewer__title--tag">Title</h2>

            <div class="viewer__card viewer__card--folder">
              <div class="viewer__card_inner">

                <div class="viewer__card_header">
                  <i class="viewer__card_icon ol-icons">folder</i>
                  <button class="viewer__card_button ol-icons">more</button>
                </div>

                <div class="viewer__card_title">
                  <h5>folder</h5>
                  <i class="sticker sticker--updated">updated</i>
                </div>

                <div class="viewer__card_footer">
                  <span class="viewer__card_details">0 files</span>
                  <time class="viewer__card_date">may 0 2021</time>
                </div>

              </div>
            </div>

            <div class="viewer__card viewer__card--file">
              <div class="viewer__card_inner">

                <div class="viewer__card_header">
                  <i class="viewer__card_icon ol-icons">file</i>
                  <button class="viewer__card_button ol-icons">more</button>
                </div>

                <div class="viewer__card_title">
                  <h5>file</h5>
                  <i class="sticker sticker--created">created</i>
                </div>

                <div class="viewer__card_footer">
                  <span class="viewer__card_details">0 files</span>
                  <time class="viewer__card_date">may 0 2021</time>
                </div>

              </div>
            </div>

            <div class="viewer__card viewer__card--folder">
              <div class="viewer__card_inner">

                <div class="viewer__card_header">
                  <i class="viewer__card_icon ol-icons">folder</i>
                  <button class="viewer__card_button ol-icons">more</button>
                </div>

                <div class="viewer__card_title">
                  <h5>folder</h5>
                  <i class="sticker sticker--updated">updated</i>
                </div>

                <div class="viewer__card_footer">
                  <span class="viewer__card_details">0 files</span>
                  <time class="viewer__card_date">may 0 2021</time>
                </div>

              </div>
            </div>
          </div>
          
        </div>
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