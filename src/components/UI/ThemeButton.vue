<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ThemeButton'
}
</script>

<style lang="less">
@import "src/assets/styles/variables";
.btn{
  color: @theme-color-2;
  font-weight: 900;
  font-size: 20px;
  cursor: pointer;
  padding: 12px 18px;
  border: 2px solid @theme-color-2;
  border-radius: 8px;

  &:hover{
    background: @theme-color-2;
    color: @white;
    border: 2px solid @white;
  }
}
</style>