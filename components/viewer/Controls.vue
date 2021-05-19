<template>
  <div class="viewer__controls">

    <div class="viewer__controls_left">
      <button class="viewer__button">
        <i class="ol-icons">go_back</i>
      </button>

      <div class="viewer__dropdown">
        <i class="viewer__dropdown_icon">github</i>
        <span class="viewer__dropdown_header">some_dir</span>
        <div class="dropdown dropdown--light">
          <button class="dropdown__settings">settings</button>
          <div class="dropdown__scrollable">
            <button class="dropdown__item">
              <i class="dropdown__item_icon">github</i>
              <span class="dropdown__item_name">project-name</span>
            </button>
            <button class="dropdown__item">
              <i class="dropdown__item_icon">github</i>
              <span class="dropdown__item_name">project-name</span>
            </button>
            <button class="dropdown__item">
              <i class="dropdown__item_icon">github</i>
              <span class="dropdown__item_name">project-name</span>
            </button>
            <button class="dropdown__item">
              <i class="dropdown__item_icon">github</i>
              <span class="dropdown__item_name">project-name</span>
            </button>
            <button class="dropdown__item">
              <i class="dropdown__item_icon">github</i>
              <span class="dropdown__item_name">project-name</span>
            </button>
          </div>
        </div>
      </div>

      <div class="viewer__dropdown viewer__dropdown--folder">
        <i class="viewer__dropdown_icon">folder</i>
        <span class="viewer__dropdown_header">root</span>
        <div class="dropdown dropdown--light">
          <div class="dropdown__scrollable">
            <button class="dropdown__item">
              <i class="dropdown__item_icon">github</i>
              <span class="dropdown__item_name">project-name</span>
            </button>
            <button class="dropdown__item">
              <i class="dropdown__item_icon">github</i>
              <span class="dropdown__item_name">project-name</span>
            </button>
            <button class="dropdown__item">
              <i class="dropdown__item_icon">github</i>
              <span class="dropdown__item_name">project-name</span>
            </button>
            <button class="dropdown__item">
              <i class="dropdown__item_icon">github</i>
              <span class="dropdown__item_name">project-name</span>
            </button>
            <button class="dropdown__item">
              <i class="dropdown__item_icon">github</i>
              <span class="dropdown__item_name">project-name</span>
            </button>
            <button class="dropdown__item">
              <i class="dropdown__item_icon">github</i>
              <span class="dropdown__item_name">project-name</span>
            </button>
          </div>
        </div>
      </div>

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

      <fieldset class="switch switch--light">
        <button class="switch__item ol-icons">grid_less</button>
        <button class="switch__item switch__item--active ol-icons">grid_more</button>
      </fieldset>
    </div>

  </div>
</template>