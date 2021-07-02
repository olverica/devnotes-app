<template>
  <viewer-controls-layout>

    <template #left>
      <viewer-controls-button-undo/>
      <viewer-controls-dropdown-project/>
      <viewer-controls-dropdown-folder/>
      <viewer-controls-tags/>
    </template>

    <template #right>
      <viewer-controls-button-create/>
      <viewer-controls-button-clear/>
      <viewer-controls-button-view/>
    </template>

  </viewer-controls-layout>
</template>