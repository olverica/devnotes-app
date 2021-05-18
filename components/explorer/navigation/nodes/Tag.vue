<template>
    <explorer-navigation-nodes-parent
    :node="node"
    type="tag"/>
</template>


<script lang="ts">
import Vue from 'vue' 
import TagNode from '~/services/notefs/nodes/tag'
import {Component, Prop} from 'nuxt-property-decorator'


@Component
export default class Tag extends Vue {

  @Prop({type: Object, required: true}) node!: TagNode;
}
</script>