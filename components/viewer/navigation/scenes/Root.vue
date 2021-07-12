<template>
  <div class="viewer__area">
    <viewer-navigation-section>
      <viewer-navigation-nodes-folder
        v-for="folder in folders"
        :key="folder.id"
        :node="folder"/>

      <viewer-navigation-nodes-trash
        :key="trashBin.id"
        :node="trashBin"/>
    </viewer-navigation-section>

    <viewer-navigation-section>
      <viewer-navigation-nodes-note
        v-for="note in notes"
        :key="note.id"
        :node="note"/>
    </viewer-navigation-section>
  </div>
</template>


<script lang="ts">
import TreeNode from '~/services/notefs/node'
import RootNode from '~/services/notefs/nodes/folder'
import TreeSplitter from '~/services/notefs/tree-splitter'
import {Component, Prop, Vue} from 'nuxt-property-decorator'
  

@Component
export default class RootNavigation extends Vue {

  @Prop({type: Object, required: true}) node!: RootNode;


  get notes(): TreeNode[]  {
    return this.splitted.get('notes');
  }

  get folders(): TreeNode[] {
    return this.splitted.get('folders');
  }

  get trashBin() {
    return this.splitted.first('trashBins')
  }

  get splitted() {
    let splitter = new TreeSplitter(),
        splitted = splitter.split(this.node);
    
    return splitted;
  }
}
</script>