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
    deleteOrder({commit} ,id){
        axios.patch(`${url}orders/delete/${id}`)
        .then()
        .catch((error) => commit("setError", error.response.data.msg))
    },
    searchByDate({commit}, date){
        axios.get(`${url}orders/date/${date}`)
        .then((response) => commit("setOrders", response.data.orders))
        .catch((error) => commit("setError", error.response.data.msg))
    },
    setToDelivered({commit}, id){
        axios.patch(`${url}orders/delivered/${id}`)
        .then()
        .catch(({response})=> {alert(response.data.msg); commit("setError", response.data.msg)})
    },
    setToPaid({commit}, id){
        axios.patch(`${url}orders/paid/${id}`)
        .then()
        .catch(({response})=> {alert(response.data.msg); commit("setError", response.data.msg)})
    },
    filterStatus({commit}, status){
        axios.get(`${url}orders/status/${status.payment}/${status.order}`)
        .then((response) => commit ("setOrders", response.data.orders))
        .catch((error) => commit("setError", error.response.data.msg))
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