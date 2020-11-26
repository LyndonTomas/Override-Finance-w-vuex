import axios from 'axios'


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
        .get(`/api/orders/`)
        .then((response) => commit ("setOrders", response.data.orders))
        .catch((error) => commit("setError", error.response.data.msg))
    },
    deleteOrder({commit} ,id){
        axios.patch(`/api/orders/delete/${id}`)
        .then()
        .catch((error) => commit("setError", error.response.data.msg))
    },
    searchByDate({commit}, date){
        axios.get(`/api/orders/date/${date}`)
        .then((response) => commit("setOrders", response.data.orders))
        .catch((error) => commit("setError", error.response.data.msg))
    },
    setToDelivered({commit}, id){
        axios.patch(`/api/orders/delivered/${id}`)
        .then(response => {alert(response.data.msg);window.location.reload();})
        .catch(({response})=> {alert(response.data.msg); commit("setError", response.data.msg)})
    },
    setToPaid({commit}, id){
        axios.patch(`/api/orders/paid/${id}`)
        .then(response => {alert(response.data.msg);window.location.reload();})
        .catch(({response})=> {alert(response.data.msg); commit("setError", response.data.msg)})
    },
    filterStatus({commit}, status){
        axios.get(`/api/orders/status/${status.payment}/${status.order}`)
        .then((response) => commit ("setOrders", response.data.orders))
        .catch((error) => commit("setError", error.response.data.msg))
    },
    cancelOrder({commit}, id){
        axios.patch(`/api/orders/order/cancel/${id}`)

        .then(response => {alert(response.data.msg);window.location.reload();})
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