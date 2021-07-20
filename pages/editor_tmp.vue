<template>
  
  <section class="editor">

    <div class="editor__header">
      <h2 class="editor__title" contenteditable>Editor Title</h2>
      <h3 class="editor__subtitle" contenteditable>Editor Subtitle</h3>
      <div class="editor__statuses">

        <div class="status">
          <span class="sticker sticker--created">created</span>
          <span class="status__text">by <u>Cody Fisher</u> on <time>Mar 30 2021</time></span>
        </div>

        <div class="status">
          <span class="sticker sticker--updated">updated</span>
          <span class="status__text">by <u>Cody Fisher</u> on <time>Mar 30 2021</time></span>
        </div>

      </div>
    </div>

    <div class="message">
      <div class="message__body">
        <div class="message__content"></div>
        <div class="message__attachments">
          <div class="message__attachment"></div>
        </div>
        <div class="message__controls">

          <div class="message__buttons">

            <button class="message__button">
              <i class="ol-icons">checklist</i>
              checklist
            </button>

            <button class="message__button">
              <i class="ol-icons">plus</i>
              add attachments
            </button>

          </div>

          <div class="message__statuses">

            <div class="status">
              <span class="sticker sticker--created">created</span>
              <span class="status__text">by <u>Cody Fisher</u> on <time>Mar 30 2021</time></span>
            </div>

            <div class="status">
              <span class="sticker sticker--updated">updated</span>
              <span class="status__text">by <u>Cody Fisher</u> on <time>Mar 30 2021</time></span>
            </div>
            
          </div>

        </div>
      </div>
      <div class="message__author"></div>
    </div>

  </section>

</template>