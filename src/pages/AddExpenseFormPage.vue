<template>
  <ThemeHeader />
  <div class="btn__back__content">
    <ThemeButton id="btn__back" @click="$router.push('/')">Back to home</ThemeButton>
  </div>
  <ExpenseForm />
</template>

<script>
import ExpenseForm from '@/components/ExpenseForm/ExpenseForm'
export default {
  components: {
    ExpenseForm
  }
}
</script>

<style lang="less">

</style>