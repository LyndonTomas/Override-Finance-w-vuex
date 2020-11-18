<template>
    <div class="container">
      <table id="ordersTable">
        <thead>
          <th>Order_ID</th>
          <th>Date</th>
          <th>Customer Name</th>
          <th>Payment_Status</th>
          <th>Order Status</th>
          <th>Total</th>
          <th>Options</th>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order._id">
              <td><strong>{{order._id}}</strong></td>
              <td>{{formatDate(order.created_at)}}</td>
              <td>{{ order.user.fullname.firstname }}&nbsp;{{order.user.fullname.lastname}}</td>
              <td><input type="radio">Paid</td>
              <td><input type="radio">Delivered</td>
              <td><strong>&#8369; &nbsp;{{order.item.price * order.item.quantity + order.fee}}</strong></td>
              <td>
                <button @click="startDelete(order._id)">Delete</button>&nbsp;
                <button>Receipt</button></td> 
            </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
export default {
  name: 'Orders',
  computed:{
    ...mapState({ orders:(state) => state.orders.orders})
  },
  methods:{
    ...mapActions(["fetchOrders", "deleteOrder"]),
    formatDate(date){
      return new Date(date).toLocaleDateString();
    },
    startDelete(id){
      this.deleteOrder(id+"");
      this.fetchOrders();
    }
  },
  created(){
    this.fetchOrders();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container{
  #ordersTable{
    display:grid;
    place-items: center;
  }
}
</style>
