<template>
  
  <section class="modal create">
    <div class="modal__body">

      <div class="modal__header">
        <h3 class="modal__title">Create new <i class="ol-icons">pen</i></h3>
        <button class="modal__close">close</button>
      </div>

      <div class="switch switch--dark">
        <button class="switch__item switch__item--note">note</button>
        <button class="switch__item switch__item--folder switch__item--active">folder</button>
        <button class="switch__item switch__item--tag">tag</button>
      </div>

      <div class="modal__content">
        <div class="modal__field">
          <label class="modal__label">Folder name</label>
          <input class="modal__input" type="text" placeholder="placeholder">
        </div>

        <div class="modal__field">
          <label class="modal__label">tag colors</label>
          <div class="create__colors">
            <div class="create__color create__color--active"></div>
            <div class="create__color"></div>
          </div>
        </div>

        <div class="modal__field">

          <label class="modal__label">Note path</label>
          
          <div class="create__path">
            <div class="create__path_item create__path_item--root">root</div>
            <div class="create__path_separator">/</div>
            <div class="create__path_item create__path_item--folder">folder</div>
            <div class="create__path_separator">/</div>
            <div class="create__path_item create__path_item--tag">tag</div>
          </div>
  
          <div class="create__explorer">
            <button class="create__explorer_item create__explorer_item--active create__explorer_item--folder">
              <span>folder</span>
            </button>
            <button class="create__explorer_item create__explorer_item create__explorer_item--folder">
              <span>folder</span>
            </button>
          </div>

        </div>
      </div>

      <button class="modal__confirm">Confirm</button>
    </div>
  </section>

</template>