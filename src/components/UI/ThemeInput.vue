<template>
  <input v-model="modelValue" @input="updateInput" type="text">
</template>

<script>
export default {
  name: 'ThemeInput',
  props: {
    modelValue: String
  },
  methods: {
    updateInput(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="less">
@import "src/assets/styles/variables";
input{
  width: 250px;
  border: 2px solid @theme-color-2;
  border-radius: 100px;
  padding: 8px 10px;
}
</style>