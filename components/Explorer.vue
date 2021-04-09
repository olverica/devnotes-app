<template>
  <aside class="explorer">

    <div class="explorer__controls">

      <button class="explorer__project">
        <i class="explorer__project_icon ol-icons">github</i>
        <h6 class="explorer__project_title">ol.forms</h6>
        <i class="explorer__project_chevron ol-icons">chevron</i>
      </button>

      <button class="explorer__control">
        back
        <i class="ol-icons">go_back</i>
      </button>
      <button class="explorer__control">
        clear all
        <i class="ol-icons">stars</i>
      </button>
      <button class="explorer__control">
        create
        <i class="ol-icons">pen</i>
      </button>
      <button class="explorer__control">
        close all
        <i class="ol-icons">close_all</i>
      </button>

    </div>

    <div class="navigation">
      
      <button class="navigation__item navigation__item--file">
        <i class="navigation__item_icon"></i>
        <h6 class="navigation__item_name">file name</h6>
        <i class="sticker sticker--updated">updated</i>
      </button>

      <div class="navigation__folder_outer">

        <button class="navigation__item navigation__item--folder">
          <i class="navigation__item_icon"></i>
          <h6 class="navigation__item_name">folder name</h6>
          <i class="sticker sticker--created">created</i>
        </button>

        <div class="navigation__folder_inner">

          <button class="navigation__item navigation__item--file">
            <i class="navigation__item_icon"></i>
            <h6 class="navigation__item_name">file name</h6>
            <i class="sticker sticker--counted">7</i>
          </button>

          <button class="navigation__item navigation__item--file">
            <i class="navigation__item_icon"></i>
            <h6 class="navigation__item_name">file name</h6>
            <i class="sticker sticker--opened">opened</i>
          </button>

          <div class="navigation__tag_outer">

            <button class="navigation__item navigation__item--tag">
              <i class="navigation__item_icon"></i>
              <h6 class="navigation__item_name">tag name</h6>
            </button>
            
            <div class="navigation__tag_inner">

              <button class="navigation__item navigation__item--file">
                <i class="navigation__item_icon"></i>
                <h6 class="navigation__item_name">file name</h6>
              </button>

              <button class="navigation__item navigation__item--file">
                <i class="navigation__item_icon"></i>
                <h6 class="navigation__item_name">file name</h6>
              </button>

            </div>

          </div>

        </div>

      </div>

      <button class="navigation__item navigation__item--developers">
        <i class="navigation__item_icon"></i>
        <h6 class="navigation__item_name">developers</h6>
      </button>

      <button class="navigation__item navigation__item--customer">
        <i class="navigation__item_icon"></i>
        <h6 class="navigation__item_name">customer</h6>
      </button>

      <button class="navigation__item navigation__item--archive">
        <i class="navigation__item_icon"></i>
        <h6 class="navigation__item_name">archive</h6>
      </button>

      <button class="navigation__item navigation__item--trash">
        <i class="navigation__item_icon"></i>
        <h6 class="navigation__item_name">trash</h6>
      </button>

    </div>

  </aside>

</template>