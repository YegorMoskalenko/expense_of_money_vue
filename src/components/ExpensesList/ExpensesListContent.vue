<template>
  <div v-if="this.costs.length === 0" class="main__list">
    <div class="main__list__content">
      <p id="list__text">You need to add Expense! Go to the header!</p>
    </div>
  </div>
  <div v-else class="list">
    <div class="list__content">
      <Expenses @openTotalAmountDialogWindow="openTotalAmountDialogWindowFn"/>
    </div>
  </div>
  <div class="create__note__dialog">
    <DialogWindow v-model:showDialog="dialogVisible">
      <div class="total__amount">
        Your total amount of expenses - {{this.totalAmount}} PLN
      </div>
    </DialogWindow>
  </div>
</template>

<script>
import Expenses from "@/components/ExpensesList/Expenses";
import {mapState} from "vuex";
export default {
  components: {
    Expenses
  },
  data(){
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapState({
      costs: state => state.expensesManagement.costs,
      totalAmount: state => state.expensesManagement.totalAmount
    })
  },
  methods: {
    openTotalAmountDialogWindowFn(){
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="less">
@import "src/assets/styles/variables";
.create__note__dialog{
  .dialog__window{
    .dialog__content{
      margin: 200px auto auto auto;
      min-width: 305px;
      font-size: 20px;
      font-weight: 700;
      color: @theme-color-2;

      .total__amount{
        text-align: center;
      }
    }
  }
}
.main__list{
  margin-top: 100px;
  display: flex;
  justify-content: center;

  .main__list__content{
    width: 800px;
    #list__text{
      background: rgba(0, 0, 0, 0.35);
      color: #ffffff;
      font-size: 60px;
      padding: 20px 20px;
      text-align: center;
      border-radius: 50px;
      border: 2px solid #ffffff;
      box-shadow: 0 0 100px #ffffff;
    }
  }
}
.list{
  display: flex;
  justify-content: center;

  .list__content{
    width: 1200px;
    height: auto;
    margin-bottom: 100px;
    background: rgba(255,255,255, 0.65);
    border: 4px solid @theme-color;
    border-radius: 15px;
    box-shadow: 7px 7px 12px @theme-color;

    &:hover{
      filter: brightness(1.2);
      transition-duration: 0.5s;
      -webkit-transform: scale(1.05);
      -ms-transform: scale(1.05);
      transform: scale(1.05);

      background: rgba(0 , 0, 0, 0.65);
      border: 4px solid @theme-color-2;
      box-shadow: 7px 7px 12px @theme-color-2;

      .expense__item__data{
        color: #ffffff;
        transition-timing-function: ease;
        transition-duration: 0.8s;
      }
      .expense_item__content{
        transition-timing-function: ease;
        transition-duration: 0.8s;
        box-shadow: 0 0 10px @theme-color;
        background: rgba(0 , 0, 0, 0.25);
      }
    }
  }
}
@media (max-width: 1440px) {
  .list{
    .list__content{
      width: 1000px;
    }
  }
}
@media (max-width: 1280px) {
  .list{
    .list__content{
      width: 800px;
    }
  }
}
@media (max-width: 1024px) {
  .list{
    .list__content{
      width: 600px;
    }
  }
}
@media (max-width: 767px) {
  .list{
    .list__content{
      width: 300px;
    }
  }
  .expenses__items{
    .expense_item{
      .expense_item__content{
        .expense__item__data{
          .amount__money{
            font-size: 11px;
          }
          .cost__to{
            font-size: 11px;
          }
        }
      }
    }
  }
}
@media (max-width: 425px) {
  .create__note__dialog{
    .dialog__window{
      .dialog__content{
        min-width: 225px;
        font-size: 14px;
        font-weight: 700;
        color: @theme-color-2;
      }
    }
  }
}
</style>