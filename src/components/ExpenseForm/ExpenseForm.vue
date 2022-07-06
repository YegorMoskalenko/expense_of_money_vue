<template>
  <div class="form">
    <div class="form__content">
      <form id="form">
        <div id="form__content">
          <div class="part1 parts">
            <ThemeInput v-model="spentToInput" placeholder="Spent to" class="part1__content" @change="setSpentToFromInput(this.spentToInput)"/>
            <ThemeInput v-model.number="amountOfMoneyInput" placeholder="Write an amount" class="part1__content" @change="setTotalOfMoneyFromInput(this.amountOfMoneyInput)"/>
          </div>
          <div class="part2 parts">
            <Calendar class="part2__content" @emitDate="addDate" :date="this.dateFromInput"/>
            <div class="select part2__content">
              <select v-model="optionCurrency" class="select__currency" @change="setCurrencyFromInput(this.optionCurrency)">
                <option disabled value="" >Choose currency</option>
                <option
                    v-for="currency in currencies"
                    :key="currency"
                    :value="currency"
                >
                  {{ currency }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="btn__content">
          <ThemeButton v-if="typeof this.amountOfMoneyInput === 'number' && this.amountOfMoneyInput > 0 && this.spentToInput.length > 0 && this.optionCurrency !== '' && this.dateFromInput !== ''" @click.prevent="pushCost">Submit</ThemeButton>
          <ThemeButton v-else @click.prevent="getError">Submit</ThemeButton>
        </div>
      </form>
    </div>
    <div class="error__dialog">
      <DialogWindow v-model:showDialog="errorVisible">
        <div class="error__content">
          You must fill in all fields !!!
        </div>
      </DialogWindow>
    </div>
    <div class="success__dialog">
      <DialogWindow v-model:showDialog="successVisible">
        <div class="success__content">
          You have successfully added a new expense! Congratulations!
          <ThemeButton class="btn__success__dialog" @click="goToList">Go to your list</ThemeButton>
        </div>
      </DialogWindow>
    </div>
  </div>
</template>

<script>
import Calendar from "@/components/ExpenseForm/Calendar";
import ThemeInput from "@/components/UI/ThemeInput";
import {mapState, mapMutations} from 'vuex'
export default {
  components: {
    ThemeInput,
    Calendar
  },
  data(){
    return {
      optionCurrency: '',
      currencies: ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYN", "BYR", "BZD", "CAD", "CDF", "CHF", "CLF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMK", "ZMW", "ZWL"],
      amountOfMoneyInput: null,
      spentToInput: '',
      errorVisible: false,
      successVisible: false
    }
  },
  methods: {
    ...mapMutations({
      setDateFromInput: 'expensesManagement/setDateFromInput',
      setTotalOfMoneyFromInput: 'expensesManagement/setTotalOfMoneyFromInput',
      setSpentToFromInput: 'expensesManagement/setSpentToFromInput',
      setCurrencyFromInput: 'expensesManagement/setCurrencyFromInput',
      addCost: 'expensesManagement/addCost'
    }),
    addDate(date){
      this.setDateFromInput(date)
    },
    pushCost(){
      this.addCost()
      this.optionCurrency = ''
      this.amountOfMoneyInput = null
      this.spentToInput = ''


      this.setDateFromInput('')
      this.setTotalOfMoneyFromInput(0)
      this.setSpentToFromInput('')
      this.setCurrencyFromInput('')

      this.successVisible = true
    },
    getError(){
      this.errorVisible = true
    },
    goToList(){
      this.$router.push('/list')
      this.successVisible = false
    }
  },
  computed: {
    ...mapState({
      dateFromInput: state => state.expensesManagement.dateFromInput,
      totalOfMoneyFromInput: state => state.expensesManagement.totalOfMoneyFromInput,
      currencyFromInput: state => state.expensesManagement.currencyFromInput,
      spentToFromInput: state => state.expensesManagement.spentToFromInput
    })
  }
}
</script>

<style lang="less">
@import "src/assets/styles/variables";
.form{
  display: flex;
  justify-content: center;

  .error__dialog{
    .dialog__window{
      .dialog__content{
        margin: 150px auto auto auto;
        color: @red;
        font-size: 20px;
        font-weight: 700;
        border: 3px solid @red;
        box-shadow: 0 0 100px @red;

        .error__content{
          text-align: center;
        }
      }
    }
  }
  .success__dialog{
    .dialog__window{
      .dialog__content{
        margin: 150px auto auto auto;
        color: @green;
        font-size: 20px;
        font-weight: 700;
        border: 3px solid @green;
        box-shadow: 0 0 100px @green;

        .success__content{
          text-align: center;

          .btn__success__dialog{
            font-size: 14px;
            padding: 10px;
            margin-left: 10px;
          }
        }
      }
    }
  }

  .form__content{
    width: 600px;
    height: 300px;
    margin-bottom: 100px;
    background: rgba(255,255,255, 0.65);
    border: 4px solid @theme-color;
    border-radius: 15px;
    box-shadow: 7px 7px 12px @theme-color;

    #form{
      .btn__content{
        display: flex;
        justify-content: flex-end;
      }

      padding: 20px;
      #form__content{
        display: flex;
        justify-content: space-around;
        height: 200px;

        .parts{
          justify-content: center;
          display: flex;
          flex-direction: column;
        }

        .part2{
          .part2__content{
            margin-top: 20px;
            display: flex;
            justify-content: flex-end;
          }
          .select{
            .select__currency{
              cursor: pointer;
              border: 2px solid @theme-color-2;
              border-radius: 10px;
              padding: 5px 8px;
            }
          }
        }
        .part1{
          .part1__content{
            margin-top: 20px;
          }
        }
      }
    }

    &:hover{
      filter: brightness(1.2);
      transition-duration: 0.5s;
      -webkit-transform: scale(1.05);
      -ms-transform: scale(1.05);
      transform: scale(1.05);

      background: rgba(0 , 0, 0, 0.65);
      border: 4px solid @theme-color-2;
      box-shadow: 7px 7px 12px @theme-color-2;
    }
  }
}
@media (max-width: 1024px) {
  .form{
    .form__content{
      width: 600px;
    }
  }
}
@media (max-width: 767px) {
  .form{
    .success__dialog{
      .dialog__window{
        .dialog__content{
          min-width: 250px;
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
    .form__content{
      width: 300px;
      height: 325px;

      #form{
        .btn__content{
          margin-top: 25px;
        }
        #form__content{
          flex-direction: column;
          .part2 {
            .part2__content{
              justify-content: flex-start;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 425px) {
  .form {
    .error__dialog {
      .dialog__window {
        .dialog__content {
          font-size: 17px;
          min-width: 250px;
        }
      }
    }
  }
}
@media (max-width: 375px) {
  .form{
    .form__content{
      width: 245px;

      #form{
        #form__content{
          input{
            width: 200px;
          }
        }
      }
    }
  }
}
</style>