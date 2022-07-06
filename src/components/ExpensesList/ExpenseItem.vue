<template>
  <div class="expense_item">
    <div class="date">
      {{this.cost.date}}
    </div>
    <div class="expense_item__content">
      <ExpenseItemData
        v-for="(costData, costDataIndex) in this.cost.data"
        :costData="costData"
        :costDataIndex="costDataIndex"
        :costIndex="costIndex"
        :key="costDataIndex"
        @removeItem="removeItemFn"
        @removeItemAndDate="removeItemAndDateFn"
      />
    </div>
    <div class="btn__remove__date__content">
      <ThemeButton class="btn__remove__date" @click="removeDateFn">Remove All</ThemeButton>
    </div>
  </div>
</template>

<script>
import ExpenseItemData from '@/components/ExpensesList/ExpenseItemData'
import {mapMutations} from "vuex";
export default {
  components: {
    ExpenseItemData
  },
  props: {
    cost: Object,
    costIndex: Number
  },
  methods: {
    ...mapMutations({
      setCostIndex: 'expensesManagement/setCostIndex',
      setCostDataIndex: 'expensesManagement/setCostDataIndex',
      removeItemVuex: 'expensesManagement/removeItemVuex',
      removeDateVuex: 'expensesManagement/removeDateVuex'
    }),
    removeItemFn(constDataIndex){
      this.setCostIndex(this.costIndex)
      this.setCostDataIndex(constDataIndex)
      this.removeItemVuex()
    },
    removeDateFn(){
      this.removeDateVuex(this.costIndex)
    },
    removeItemAndDateFn(){
      this.removeDateVuex(this.costIndex)
    }
  },
}
</script>

<style lang="less">
@import "src/assets/styles/variables";
.expense_item{
  margin: 25px 10px;
  width: 1000px;

  .btn__remove__date__content{
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  .date{
    color: @theme-color-2;
    font-size: 35px;
    font-weight: 700;
    text-align: center;
  }

  .expense_item__content{
    .expense__item__data{
      .cost__to{
        display: flex;
        align-items: center;
        width: 700px;
        word-wrap: break-word;
        font-size: 20px;
      }

      .amount__money{
        font-size: 20px;
      }
    }
  }
}
@media (max-width: 1440px) {
  .expense_item{
    width: 700px;
  }
}
@media (max-width: 1024px) {
  .expense_item{
    width: 400px;

    .expense_item__content{
      .expense__item__data{
        .cost__to{
          width: 200px;
          word-wrap: break-word;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .expense_item{
    width: auto;

    .expense_item__content{
      .expense__item__data{
        .cost__to{
          width: 60px;

          .amount__money{
            margin-left: 20px;
          }
        }
      }
    }
  }
}
</style>