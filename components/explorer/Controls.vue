<template>
  <div class="explorer__controls">

    <div class="explorer__dropdown">
      <i class="explorer__dropdown_icon">github</i>
      <span class="explorer__dropdown_header">some_dir</span>

        <div class="dropdown dropdown--dark">
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
</template>