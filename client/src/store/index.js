import { createStore } from 'vuex'
import orders from './modules/orders'

export default createStore({
  modules: {
    orders
  }
})
