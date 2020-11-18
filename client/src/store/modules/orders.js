import axios from 'axios'

const url = "http://localhost:5000/api/";

// initial state
const state = () => ({
    orders:[],
    error:""
});

// Getters
const getters ={};

// Actions
const actions ={
    fetchOrders({commit}){
        axios
        .get(`${url}orders/`)
        .then((response) => commit ("setOrders", response.data.orders))
        .catch((error) => commit("setError", error.response.data.msg))
    },
    deleteOrder(id){
        console.log(id.toString())
        axios.patch(`${url}orders/delete/${id}`)
    }
}

// Mutations
const mutations = {
    setOrders: (state, orders) => {
        state.orders = orders
    },
    setError:(state, error) => {
        state.error = error
    }
}

export default{
    state, 
    getters,
    actions,
    mutations
}