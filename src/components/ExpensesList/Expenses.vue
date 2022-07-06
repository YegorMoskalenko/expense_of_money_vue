<template>
  <div class="expenses__items">
    <ThemeButton style="margin: 10px 10px 0 10px" @click="getTotalAmount">Get the total amount of expenses in PLN</ThemeButton>
    <ExpenseItem
      v-for="(cost, index) in costs"
      :cost="cost"
      :costIndex="index"
      :key="index"
    />
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import ExpenseItem from "@/components/ExpensesList/ExpenseItem";
export default {
  components: {
    ExpenseItem
  },
  computed: {
    ...mapState({
      costs: state => state.expensesManagement.costs
    })
  },
  methods: {
    ...mapActions({
      fetchFixerData: 'expensesManagement/fetchFixerData'
    }),
    getTotalAmount(){
      this.fetchFixerData()
      this.$emit('openTotalAmountDialogWindow')
    }
  }
}
</script>

<style lang="less">
@import "src/assets/styles/variables";
.expenses__items{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .expense_item{
    .expense_item__content{
      border: 2px solid @theme-color-2;
      border-radius: 15px;
      box-shadow: 0 0 10px @theme-color-2;
      padding: 0 20px 10px 20px;
      background: rgba(255, 255, 255, 0.5);

      .expense__item__data{
        margin-top: 15px;
        display: flex;
        justify-content: space-between;

        .amount__money{
          display: flex;
          align-items: center;
          margin-right: 10px;

          .price{
            margin-right: 8px;
          }
        }
      }
    }
  }
}
</style>