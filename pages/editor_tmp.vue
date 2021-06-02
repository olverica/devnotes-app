<template>
  <div class="root">

    <navbar/>

    <main class="project">
      <explorer/>

      <section class="editor">
        
        <div class="editor__header">
          <h1 class="editor__header_title">Note title</h1>
          <h2 class="editor__header_subtitle">Note subtitle</h2>
          <div class="editor__statuses">
            <div class="status">
              <i class="sticker sticker--created">created</i>
              <span class="status__text">by <u class="status__name">Cody Fisher</u> on Mar 30 2021</span>
            </div>
            <div class="status">
              <i class="sticker sticker--updated">updated</i>
              <span class="status__text">by <u class="status__name">Cody Fisher</u> on Mar 30 2021</span>
            </div>
          </div>
        </div>

        <div class="editor__message">
          <div class="message">
            <div class="message__body">
              
            </div>
            <div class="message__footer">
              <div class="message__controls">
                <button class="message__type">
                  <i class="ol-icons">text</i>
                  plain text
                </button>
                <button class="message__attach">
                  <i class="ol-icons">plus</i>
                  add attachments
                </button>
              </div>
              <div class="message__statuses">
                <div class="status">
                  <i class="sticker sticker--created">created</i>
                  <span class="status__text">by <u class="status__name">Cody Fisher</u> on Mar 30 2021</span>
                </div>
                <div class="status">
                  <i class="sticker sticker--updated">updated</i>
                  <span class="status__text">by <u class="status__name">Cody Fisher</u> on Mar 30 2021</span>
                </div>
              </div>
            </div>
          </div>
          <div class="editor__message_author"></div>
        </div>

      </section>
    </main>

  </div>
</template>