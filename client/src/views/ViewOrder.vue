<template>
  <div class="container">
      <br>
    <center><h1><b>Order Details</b></h1></center>
    <button class="btn btn-secondary" @click="goBackToOrders">Back to Orders</button>
    <!-- Id -->
    <span><h4><b>ID:</b></h4>{{order._id}}</span>
    <!-- Payment Method -->
    <h3><b>Payment Method:</b></h3>{{order.payment_method}}
    <!-- Payment Status -->
    <h3><b>Payment Status:</b></h3>{{order.payment_status}}
    <!-- Paid On -->
    <h3><b>Paid On:</b></h3>{{order.paid_on}}
    <!-- Delivered On -->
    <h3><b>Payment Status:</b></h3>{{order.payment_status}}
    <!-- Order Status -->
    <h3><b>Order Status:</b></h3>{{order.order_status}}
    <!-- Fee -->
    <h3><b>Fee:</b></h3>{{order.fee}}
    <!-- USER SIDE -->
    <center><h2><b>Customer Details</b></h2></center>
    <!-- Customer Name -->
    <h3><b>Customer Name:</b></h3>{{order.user.fullname.firstname}} &nbsp; {{order.user.fullname.lastname}}

  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
export default {
name:"ViewOrder",
props:["id"],
computed:{
    ...mapState({ order:(state) => state.orders.specificOrder})
},
methods:{
    ...mapActions(["getSpecificOrder"]),
    goBackToOrders (){
        this.$router.push({ name: "Orders" });
    }
},
created (){
    this.getSpecificOrder(this.id)
}

}
</script>

<style>

</style>