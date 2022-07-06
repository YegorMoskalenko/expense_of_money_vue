export const expensesManagement = {
    state: () => ({
        costs: [

            // Example

            // { date: '2022-07-03', data: [
            //         { amountOfMoney:  1100, currency: 'USD', spentTo: 'Iphone 13 pro max'},
            //         { amountOfMoney:  777, currency: 'EUR', spentTo: 'Iphone 13 pro max'}
            //     ]
            // },
            // { date: '2022-07-04', data: [
            //         { amountOfMoney:  1100, currency: 'USD', spentTo: 'Iphone 13 pro max'},
            //         { amountOfMoney:  666, currency: 'EUR', spentTo: 'Iphone 13 pro max'}
            //     ]
            // }
        ],
        totalAmount: 0,
        totalAmountZero: 0,

        costIndex: null,
        costDataIndex: null,

        dateFromInput: '',
        totalOfMoneyFromInput: 0,
        currencyFromInput: '',
        spentToFromInput: '',

        cost: null
    }),
    mutations: {
        setTotalAmount(state, summingTotalAmount){
            state.totalAmount += summingTotalAmount
        },
        setTotalAmountZero(state, totalAmountZero){
            state.totalAmount = totalAmountZero
        },

        // Data from the form for adding items in costs array

        setDateFromInput(state, dateFromInput){
            state.dateFromInput = dateFromInput
        },
        setTotalOfMoneyFromInput(state, totalOfMoneyFromInput){
            state.totalOfMoneyFromInput = totalOfMoneyFromInput
        },
        setCurrencyFromInput(state, currencyFromInput){
            state.currencyFromInput = currencyFromInput
        },
        setSpentToFromInput(state, spentToFromInput){
            state.spentToFromInput = spentToFromInput
        },

        // =====================================

        // remove costData Object from costs.data array

        setCostIndex(state, costIndex){
            state.costIndex = costIndex
        },
        setCostDataIndex(state, costDataIndex){
            state.costDataIndex = costDataIndex
        },

        removeItemVuex(state){
            state.costs[state.costIndex].data.splice(state.costDataIndex, 1)

            state.costIndex = null
            state.costDataIndex = null
        },

        //======================================

        // remove Date from costs array

        removeDateVuex(state, costIndexFromComponent){
            state.costs.splice(costIndexFromComponent, 1)
        },

        //======================================

        addCost(state){
            state.cost = {}
            state.cost.date = state.dateFromInput
            state.cost.data = []
            state.cost.data[0] = {
                amountOfMoney: state.totalOfMoneyFromInput,
                currency: state.currencyFromInput,
                spentTo: state.spentToFromInput
            }

            if(state.costs.length > 0){
                state.costs.forEach((costFromForEach, index) => {
                    if(costFromForEach.date === state.dateFromInput){
                        costFromForEach.data.push(state.cost.data[0])
                        state.cost = null
                    }else if(index === state.costs.length - 1 && state.cost !== null){
                        state.costs.push(state.cost)
                    }
                })
            } else if(state.costs.length === 0){
                state.costs.push(state.cost)
            }

            state.cost = {}
            state.costs = state.costs.sort((a, b) => new Date(b.date) - new Date(a.date))
        }
    },
    actions: {
        fetchFixerData({state, commit}){
            commit("setTotalAmountZero", 0)

            let myHeaders = new Headers();
            myHeaders.append("apikey", "IvoI4X242Uzg1J3k8K7ST4JC9BgBZ4n1");

            let requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders
            };

            state.costs.forEach(cost => {
                cost.data.forEach(async costData => {
                    try {
                        const responseJson = await fetch(`https://api.apilayer.com/fixer/convert?to=PLN&from=${costData.currency}&amount=${costData.amountOfMoney}`, requestOptions)
                        const response = await responseJson.json()
                        commit("setTotalAmount", response.result)
                    }
                    catch (e){
                        console.error('Error!!!: ', e)
                    }
                })
            })
        }
    },
    namespaced: true
}