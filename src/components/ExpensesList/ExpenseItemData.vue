<template>
  <div class="expense__item__data">
    <div class="cost__to">
      {{this.costData.spentTo}}
    </div>
    <div class="amount__money">
      <div class="price">
        {{this.costData.amountOfMoney}}
      </div>
      <div class="currency">
        {{this.costData.currency}}
      </div>
    </div>
    <ThemeButton v-if="this.costs[costIndex].data.length === 1" class="btn__remove__item" @click="removeItemAndDate">Remove</ThemeButton>
    <ThemeButton v-else class="btn__remove__item" @click="removeItem">Remove</ThemeButton>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  props: {
    costData: Object,
    costDataIndex: Number,
    costIndex: Number
  },
  computed: {
    ...mapState({
      costs: state => state.expensesManagement.costs
    })
  },
  methods: {
    removeItem(){
      this.$emit('removeItem', this.costDataIndex)
    },
    removeItemAndDate(){
      this.$emit('removeItemAndDate')
    }
  }
}
</script>

<style lang="less">
.expense__item__data{
  .btn__remove__item{
    font-size: 14px;
    padding: 5px;
  }
}
@media (max-width: 425px) {
  .expense__item__data{
    .btn__remove__item{
      margin-left: 9px;
    }
  }
}
</style>