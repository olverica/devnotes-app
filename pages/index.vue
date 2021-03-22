<template>

  <aside class="navbar navbar--minimize">

  <div class="navbar__profile">
    <button class="navbar__profile_image"></button>
    <h6 class="navbar__profile_name">Cody Fisher</h6>
    <p class="navbar__profile_type">developer</p>
  </div>

  <nav class="navbar__nav">

    <div class="navbar__links">

      <button class="navbar__link navbar__link--active">
        <i class="ol-icons">home</i>
        <span>home</span>
      </button>

      <button class="navbar__link">
        <i class="ol-icons">github</i>
        <span>github projects</span>
      </button>

      <button class="navbar__link">
        <i class="ol-icons">notebook</i>
        <span>other projects</span>
      </button>

      <button class="navbar__link">
        <i class="ol-icons">stack</i>
        <span>knowledge base</span>
      </button>

    </div>

    <hr class="navbar__separator">

    <div class="navbar__links navbar__links--pinned">

      <button class="navbar__link navbar__link--pinned">
        <i class="ol-icons">github</i>
        <span>ol.forms</span>
      </button>

    </div>

  </nav>

  <div class="navbar__logo">
    <img class="navbar__logo_img" src="img/svg/olverica_logo.svg" alt="logo">
    <h6 class="navbar__logo_title">Dev Notes</h6>
  </div>


  </aside>
  
</template>


