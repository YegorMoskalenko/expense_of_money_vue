<template>
  <div class="header">
    <div class="header__content">
      <ThemeButton class="header__btns" @click="$router.push('/add')">Add expense entry</ThemeButton>
      <ThemeButton class="header__btns" @click="$router.push('/list')">Check List</ThemeButton>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ThemeHeader'
}
</script>

<style lang="less" scoped>
@import "src/assets/styles/variables";
.header{
  background: rgba(140, 263, 230, 0.75);
  height: 150px;
  box-shadow: 0 2px 5px @theme-color-2;
  display: flex;
  align-items: center;
  justify-content: center;

  .header__content{
    width: 600px;
    justify-content: space-around;
    display: flex;

    .header__btns{

    }
  }
}
@media (max-width: 425px) {
  .header{
    height: 100px;
    .header__content{
      .header__btns{
        font-size: 14px;
        padding: 8px 10px;
      }
    }
  }
}
</style>