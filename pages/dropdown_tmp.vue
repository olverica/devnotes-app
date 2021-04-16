<template>

  <div>

    <fieldset class="explorer__dropdown dropdown">
      <button class="dropdown__item">
        <i class="dropdown__item_icon">github</i>
        <span class="dropdown__item_name">englishnerd</span>
      </button>
      <div class="dropdown__body">
        <button class="dropdown__settings">settings</button>
        <div class="dropdown__body_scrollable">
          <button class="dropdown__item">
            <i class="dropdown__item_icon">github</i>
            <span class="dropdown__item_name">project name</span>
          </button>                    
        </div>
      </div>
    </fieldset>

    <fieldset class="viewer__dropdown dropdown">
      <button class="dropdown__item">
        <i class="dropdown__item_icon">github</i>
        <span class="dropdown__item_name">englishnerd</span>
      </button>
      <div class="dropdown__body">
        <button class="dropdown__settings">settings</button>
        <div class="dropdown__body_scrollable">
          <button class="dropdown__item">
            <i class="dropdown__item_icon">github</i>
            <span class="dropdown__item_name">project name</span>
          </button>                    
        </div>
      </div>
    </fieldset>
    
    <fieldset class="viewer__dropdown viewer__dropdown--folder dropdown">
      <button class="dropdown__item">
        <i class="dropdown__item_icon">folder</i>
        <span class="dropdown__item_name">englishnerd</span>
      </button>
      <div class="dropdown__body">
        <button class="dropdown__settings">settings</button>
        <div class="dropdown__body_scrollable">
          <button class="dropdown__item">
            <i class="dropdown__item_icon">folder</i>
            <span class="dropdown__item_name">project name</span>
          </button>                    
        </div>
      </div>
    </fieldset>

  </div>
    
</template>

<style lang="sass">


body
  background: black
  padding: 100px

div
  display: flex

.dropdown
  width: max-content
  margin: 10px
</style>