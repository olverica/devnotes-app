<template>
  
  <section class="modal">

    <div class="gallery">
      <div class="gallery__viewer">
        <div class="gallery__selected">
          <div class="gallery__toolbar">
            <div class="gallery__zoom">
              <button class="gallery__zoom_button">minus</button>
              <button class="gallery__zoom_button">plus</button>
              <hr class="gallery__zoom_separator">
              <button class="gallery__zoom_button">refresh</button>
            </div>
            <button class="gallery__close">close</button>
          </div>
        </div>
        <div class="gallery__controls">
          <div class="gallery__statuses">
            <div class="status">
              <span class="sticker sticker--created">created</span>
              <span class="status__text">by <u>Cody Fisher</u> on <time>Mar 30 2021</time></span>
            </div>
            <div class="status">
              <span class="sticker sticker--updated">updated</span>
              <span class="status__text">by <u>Cody Fisher</u> on <time>Mar 30 2021</time></span>
            </div>
          </div>
          <div class="gallery__buttons">
            <button class="gallery__button gallery__button--change">change</button>
            <button class="gallery__button gallery__button--delete">delete</button>
          </div>
        </div>
      </div>

      <div class="gallery__collection">
      </div>

    </div>

  </section>

</template>