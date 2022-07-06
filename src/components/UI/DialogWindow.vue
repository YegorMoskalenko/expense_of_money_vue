<template>
  <div class="dialog__window" v-if="showDialog === true" @click="hideDialog">
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogWindow',
  props: {
    showDialog: {
      type: Boolean
    }
  },
  methods: {
    hideDialog(){
      this.$emit('update:showDialog', false)
    }
  }
}
</script>

<style lang="less">
@import "src/assets/styles/variables";
.dialog__window{
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .75);
  position: fixed;
  display: flex;

  .dialog__content{
    margin: auto;
    background: @white;
    border: 3px solid @theme-color-2;
    border-radius: 12px;
    min-height: 50px;
    min-width: 400px;
    padding: 15px 20px;
    box-shadow: 0 0 100px @theme-color;
  }
}
</style>