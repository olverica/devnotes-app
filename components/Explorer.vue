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
        <h6 class="navigation__item_name">file name</h6>
        <i class="navigation__item_sticker navigation__item_sticker--updated ol-icons">updated</i>
      </button>

      <div class="navigation__folder_outer">

        <button class="navigation__item navigation__item--folder">
          <h6 class="navigation__item_name">folder name</h6>
          <i class="navigation__item_sticker navigation__item_sticker--created ol-icons">created</i>
        </button>

        <div class="navigation__folder_inner">

          <button class="navigation__item navigation__item--file">
            <h6 class="navigation__item_name">file name</h6>
            <i class="navigation__item_sticker navigation__item_sticker--updated ol-icons">updated</i>
          </button>

          <button class="navigation__item navigation__item--file">
            <h6 class="navigation__item_name">file name</h6>
            <i class="navigation__item_sticker navigation__item_sticker--updated ol-icons">updated</i>
          </button>

          <div class="navigation__tag_outer">

            <button class="navigation__item navigation__item--tag">
              <h6 class="navigation__item_name">tag name</h6>
            </button>
            
            <div class="navigation__tag_inner">

              <button class="navigation__item navigation__item--file">
                <h6 class="navigation__item_name">file name</h6>
                <i class="navigation__item_sticker navigation__item_sticker--updated ol-icons">updated</i>
              </button>

              <button class="navigation__item navigation__item--file">
                <h6 class="navigation__item_name">file name</h6>
                <i class="navigation__item_sticker navigation__item_sticker--updated ol-icons">updated</i>
              </button>

            </div>

          </div>

        </div>

      </div>


    </div>

  </aside>

</template>