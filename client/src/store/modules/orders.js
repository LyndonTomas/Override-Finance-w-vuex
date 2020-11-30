import axios from 'axios'

// initial state
const state = () => ({
    orders:[],
    error:"",
    length:0,
    specificOrder:[]
});

// Getters
const getters ={};

// Actions
const actions ={
    fetchOrders({commit}){
        axios
        .get(`/api/orders/`)
        .then((response) => commit ("setOrders", response.data))
        .catch((error) => commit("setError", error.response.data.msg))
    },
    deleteOrder({commit} ,id){
        axios.patch(`/api/orders/delete/${id}`)
        .then(response => {alert(response.data.msg);window.location.reload();})
        .catch((error) => {commit("setError", error.response.data.msg); alert(error.response.data.msg)})
    },
    searchByDate({commit}, date){
        axios.get(`/api/orders/date/${date}`)
        .then((response) => commit("setOrders", response.data))
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
        .then((response) => commit ("setOrders", response.data))
        .catch((error) => commit("setError", error.response.data.msg))
    },
    cancelOrder({commit}, id){
        axios.patch(`/api/orders/order/cancel/${id}`)
        .then(response => {alert(response.data.msg);window.location.reload();})
        .catch((error) => commit("setError", error.response.data.msg))
    },
    getSpecificOrder({commit}, id){
        axios.get(`/api/orders/order/${id}`)
        .then((response) => commit("setOrder", response.data))
        .catch((error) => commit("setError", error.response.data.msg))
    }
}

// Mutations
const mutations = {
    setOrders: (state, data) => {
        state.orders = data.orders
        state.length = data.results
    },
    setError:(state, error) => {
        state.error = error
    },
    setOrder: (state, data) => {
        state.specificOrder = data.order;
    }
}

export default{
    state, 
    getters,
    actions,
    mutations
}