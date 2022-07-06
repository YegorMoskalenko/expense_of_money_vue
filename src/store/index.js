import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import {expensesManagement} from '@/store/expensesManagement'
const vuexLocalStorage = new VuexPersistence({
    key: 'vuex',
    storage: window.localStorage
})

export default createStore({
    modules: {
        expensesManagement: expensesManagement
    },
    plugins: [vuexLocalStorage.plugin]
})