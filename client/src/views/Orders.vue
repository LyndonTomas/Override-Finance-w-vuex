<template>
    <div class="container">
      <h2 class="pageTitle">Override-Orders</h2>
      <!-- Refresh Button -->
      <span><button class="btn btn-info" @click="Refresh">Refresh</button></span>
      <span class="entries">Entries:{{orders.length}}</span>
      <!-- Date -->
      <span class="labelDate" >Date: &nbsp;</span> <input v-model="date" @change="dateClicked" type="date">
      <!-- Payment Status -->
      <span class="payementFilter">Payment: &nbsp;&nbsp;<select @change="filterThruStatus"  v-model="paymentStatus">
          <option value="processing">Processing</option>
          <option value="paid">Paid</option>
        </select></span>
      <!-- Order Status -->
      <span class="payementFilter">Order: &nbsp;&nbsp;<select @change="filterThruStatus" v-model="orderStatus">
          <option value="processing">Processing</option>
          <option value="delivered">Delivered</option>
        </select></span>
      <!-- LogOut -->
      <span class="logOut"><button class="btn btn-warning" @click="logOut">Log Out</button></span>

      <!-- Table of Orders -->
      <table id="orderTable" class="table">
        <thead class="thead-dark">
          <th><h4>Order_ID</h4></th>
          <th><h4>Date</h4></th>
          <th><h4>User Name</h4></th>
          <th><h4>Item Name</h4></th>
          <th><h4>Quantity</h4></th>
          <th><h4>Payment Method</h4></th>
          <th><h4>Payment Status</h4></th>
          <th><h4>Order Status</h4></th>
          <th><h4>Total Amount</h4></th>
          <th><h4>Option</h4></th>
        </thead>
        <tbody>
          <tr
            v-for="order in orders"
            v-bind:item="order"
            v-bind:key="order._id">

          <td scope="row"><strong><a href="#">{{ order._id }}</a></strong></td>
          <td>{{ formatDate(order.created_at) }}</td>
          <td>
            <strong> {{ order.user.fullname.firstname }}&nbsp;
              {{order.user.fullname.lastname}}</strong>
          </td>
          <td>
            <a :href="'https://override-syntax.herokuapp.com/item/' + order.item.id">
            {{ order.item.name }}</a>
          </td>
          <td>{{ order.item.quantity }}</td>
          <td>{{ order.payment_method }}</td>
          <td>
            <button class="btn btn-dark" @click="finishPayment(order._id)">Paid</button>
          </td>
          <td>
            <button class="btn btn-light" @click="finishDelivery(order._id)">Delivered</button>
          </td>
          <td>
            &#8369; &nbsp;
            <strong>{{order.item.quantity * order.item.price + order.fee}}</strong>
          </td>
          <td class="options">
            <button @click="showReceipt(order._id, order.created_at, order.user.fullname.firstname, order.user.fullname.lastname, order.item.name, order.item.price, order.item.quantity, order.payment_method, order.payment_status, order.fee, 
     order.user.full_address.house_number, order.user.full_address.street_name, order.user.full_address.province, order.user.full_address.city, order.user.full_address.district, order.user.full_address.barangay)" class="btn btn-success">
              <i class="far fa-edit"></i>
            </button>
            <button @click="startDelete(order._id)"
              class="btn btn-danger">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
</template>

<script>
import jsPDF from 'jspdf';
import {mapActions, mapState} from "vuex";
export default {
  name: 'Orders',
  data(){
    return{
      date:"",
      paymentStatus:"",
      orderStatus:""
    }
  },
  computed:{
    ...mapState({ orders:(state) => state.orders.orders})
  },
  methods:{
    ...mapActions(["fetchOrders","filterStatus", "deleteOrder", "searchByDate", "setToDelivered", "setToPaid"]),
    formatDate(date){
      return new Date(date).toLocaleDateString();
    },
    startDelete(id){
      this.deleteOrder(id);
      window.location.reload()
    },
    Refresh(){
      window.location.reload()
    },
    async dateClicked(){
      this.searchByDate(this.date)
    },
    finishDelivery(id){
      this.setToDelivered(id);
      alert("Updating order. Please wait...")
    },
    finishPayment(id){
      this.setToPaid(id);
      alert("Updating payment. Please wait...")
    },
    filterThruStatus(){
      const object = {payment:this.paymentStatus, order:this.orderStatus}
      this.filterStatus(object)
    },
    logOut() {
      var choice = confirm("Are you sure you want to log out?");
      if (choice == true) {
        this.$router.push({ name: "Login" });
        }
      },
      showReceipt(id, date, fname, lname, itemName, price, quantity, payment_method, payment_status, fee, 
     houseNumber, streetName, province, city, district, barangay){
       var pdf = new jsPDF();
      //  Order Id
       pdf.text("OrderId : ", 5, 10);
       pdf.text(id, 30, 10);
     // Date 
      pdf.text("Date: ", 5, 20);
      pdf.text(date, 30, 20);
     // Name
      pdf.text("Customer Name: ", 5, 30);
      pdf.text(fname+" "+lname, 50, 30);

    // Item
      pdf.text("Item Name: ", 5, 40);
      pdf.text(itemName, 40, 40);
    // Price
      pdf.text("Price: ", 5, 50);
      pdf.text(price.toString(), 30, 50);
      // Quantity
      pdf.text("Quantity: ", 5, 60);
      pdf.text(quantity.toString(), 30, 60);
      // Payment Method
      pdf.text("Payment Method: ", 5, 70);
      pdf.text(payment_method, 50, 70); 
      // Payment Status
      pdf.text("Payment Status: ", 5, 80);
      pdf.text(payment_status, 50, 80);
      // Fee
      pdf.text("Fee: ", 5, 90);
      pdf.text(fee.toString(), 30, 90);
      // Shipping Address
      pdf.text("Shipping Address: ", 5, 100);
      pdf.text(houseNumber.toString()+" "+
      streetName.toString()+" "+ 
      barangay.toString()+" "+
      district.toString()+" "+
      city.toString()+" "+
      province.toString(), 30, 110);

      // Total
      var total = (price*quantity)+fee;
      pdf.text("Total: ", 5, 120);
      pdf.text(total.toString(), 30, 120);

       // Saving PDF 
       pdf.save('report.pdf');
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
  
  background: #76CCA6;
  padding-bottom:20rem;
  .filterButton{
    margin-left:30px;
  }
  .logOut{
    margin-left:30px;
  }
  .payementFilter{
    margin-left:30px;
    font-size:1.2rem;
    font-weight: bold;
  }
  .labelDate {
    margin-left:30px;
    font-size:1.2rem;
    font-weight: bold;
  }
  .entries{
    color:#2C3F3C;
    margin-left:30px;
    font-size:1.2rem;
    font-weight: bold;
  }
  a{
    color: #EAE8D5;
  }
  .pageTitle{
    padding:1em;
    font-family: Kumbh Sans, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: grid;
    place-items:center;
    color: #EAE8D5;
    font-weight: bold;
  }
  #orderTable {
    margin-top:2rem;
    width: 100%;
    thead {
      th {
        h4 {
          width: auto;
          text-align: center;
          &:hover {
            transition: 0.4s all ease-in-out;
            text-decoration: underline;
          }
        }
      }
    }
    tbody {
      tr {
        &:hover {
          background-color: #82d682;
          transition: 0.4s all ease-in-out;
        }
      }
    }
  }
}
</style>
