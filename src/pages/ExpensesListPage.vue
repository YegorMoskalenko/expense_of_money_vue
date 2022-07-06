<template>
  <ThemeHeader />
  <div class="btn__back__content">
    <ThemeButton id="btn__back" @click="$router.push('/')">Back to home</ThemeButton>
  </div>
  <ExpensesListContent />
</template>

<script>
import ExpensesListContent from "@/components/ExpensesList/ExpensesListContent";
export default {
  components: {
    ExpensesListContent
  }
}
</script>

<style lang="less">
.btn__back__content{
  display: flex;
  justify-content: center;
  margin: 30px 0 35px 0;
}
</style>