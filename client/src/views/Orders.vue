<template>
    <div class="container">
      <h2 class="pageTitle">Override-Orders</h2>
      <!-- Refresh Button -->
      <span><button class="btn btn-info" @click="Refresh">Refresh</button></span>
      <!-- Entries -->
      <span class="entries">Entries:{{length}}</span>
      <!-- Help -->
      <span id="getHelp" class="btn btn-outline-danger" @click="getSomeHelp">Help</span>
      <!-- Date -->
      <span class="labelDate" >Date: &nbsp;</span> <input v-model="date" @change="dateClicked" type="date">

      <!-- Filter Status -->
      <span class="filter-statuts">
        <span class="payementFilter">Payment: &nbsp;&nbsp;<select @change="filterThruStatus"  v-model="paymentStatus">
          <option value="processing">Processing</option>
          <option value="paid">Paid</option>
          <option value="cancelled">Cancelled</option>
        </select></span>
      <!-- Order Status -->
      <span class="payementFilter">Order: &nbsp;&nbsp;<select @change="filterThruStatus" v-model="orderStatus">
          <option value="processing">Processing</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select></span>
      </span>
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
            v-bind:class="{'is-cancelled': order.order_status == 'Cancelled'}"
            v-bind:key="order._id">
            <!-- OrderId -->
          <td scope="row"><span data-toggle="modal" data-target="#ItemDescription"><b id="ID" >{{ order._id }}</b></span></td>
          <!-- Modal Start -->
              <!-- Modal -->
                <div class="modal fade" id="ItemDescription" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Order Details</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <h5><b>Order ID: </b></h5>{{order._id}}
                        <h5><b>Payment Method: </b></h5>{{order.payment_method}}
                        <h5><b>Payment Status: </b></h5>{{order.payment_status}}
                        <h5><b>Paid On: </b></h5>{{order.paid_on}}
                        <h5><b>Delivered On: </b></h5>{{order.delivered_on}}
                        <h5><b>Order Status: </b></h5>{{order.order_status}}
                        <h5><b>Fee: </b></h5>{{order.fee}}

                        <center><h4><b>Customer Details</b></h4></center>
                        <h5><b>Customer Name: </b></h5>{{order.user.fullname.firstname}} {{order.user.fullname.lastname}}
                        <h5><b>Full Address: </b></h5>{{order.user.full_address.house_number}} {{order.user.full_address.street_name}} {{order.user.full_address.barangay}} {{order.user.full_address.district}} {{order.user.full_address.city}} {{order.user.full_address.province}}   
                        <h5><b>Email: </b></h5>{{order.email}}
                        <h5><b>Mobile Number: </b></h5>{{order.mobile_number}}

                        <center><h4><b>Item Details</b></h4></center>
                        <h5><b>Item ID: </b></h5>{{order.item.id}}
                        <h5><b>Item Name: </b></h5>{{order.item.name}}   
                        <h5><b>Price per Item: </b></h5>{{order.item.price}}
                        <h5><b>Quantity: </b></h5>{{order.item.quantity}}

                        <center><h4><b>Shipping Address</b></h4></center>
                        <h5><b>Full Address</b></h5>{{order.shipping_address.house_number}} {{order.shipping_address.street_name}} {{order.shipping_address.barangay}} {{order.shipping_address.district}} {{order.shipping_address.city}} {{order.shipping_address.province}}
                        <h5><b>Item Name: </b></h5>{{order.item.name}}   
                        <h5><b>Price per Item: </b></h5>{{order.item.price}}
                        <h5><b>Quantity: </b></h5>{{order.item.quantity}}
                        <br>
                        <h5><b>Ordered At: </b></h5> {{order.created_at}}
                      </div>

                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger" v-if="this.isAdmin == 'true'" @click="AdminDelete(order._id)">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
          <!-- Modal End -->
          <td>{{ formatDate(order.created_at)}}</td>

          <td>
            <strong> {{ order.user.fullname.firstname }}&nbsp;
              {{order.user.fullname.lastname}}</strong>
          </td>
          <td>
            <a target="_blank" :href="'https://override-syntax.herokuapp.com/item/' + order.item.id">
            {{ order.item.name }}</a>
          </td>
          <td>{{ order.item.quantity }}</td>
          <td>{{ order.payment_method }}</td>
          <td>
            <button v-if="order.payment_status == 'Processing'" class="btn btn-dark" @click="finishPayment(order._id)">Paid</button>
            <span  v-else><p>{{order.payment_status}}</p></span>
          </td>
          <td>
            <button v-if="order.order_status =='Processing'" class="btn btn-light" @click="finishDelivery(order._id)">Delivered</button>
            <span  v-else><p>{{order.order_status}}</p></span>
          </td>
          <td>
            &#8369; &nbsp;
            <strong>{{order.item.quantity * order.item.price + order.fee}}</strong>
          </td>
          <td class="options">
            <button @click="showReceipt(order._id, order.created_at, order.user.fullname.firstname, order.user.fullname.lastname, order.item.name, order.item.price, order.item.quantity, order.payment_method, order.payment_status, order.fee, 
     order.user.full_address.house_number, order.user.full_address.street_name, order.user.full_address.province, order.user.full_address.city, order.user.full_address.district, order.user.full_address.barangay, order.order_status)" class="btn btn-success">
              <i class="far fa-edit"></i>
            </button>
            <button @click="startDelete(order._id)"
              class="btn btn-danger">
              <i class="fas fa-trash"></i>
            </button>
            <button @click="cancel(order._id)" class="btn btn-warning">
              <i class="far fa-times-circle"></i>
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
      isAdmin: sessionStorage.getItem('isAdmin'),
      date:"",
      paymentStatus:"",
      orderStatus:""
    }
  },
  computed:{
    ...mapState({ orders:(state) => state.orders.orders, length:(state) => state.orders.length})
  },
  methods:{
    ...mapActions(["adminDelete","fetchOrders","filterStatus", "deleteOrder", "searchByDate", "setToDelivered", "setToPaid", "cancelOrder", "getSpecificOrder"]),
    formatDate(date){
      return new Date(date).toLocaleDateString();
    },
    startDelete(id){
      this.deleteOrder(id);
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
    cancel(id){
      this.cancelOrder(id);
    },
    logOut() {
      var choice = confirm("Are you sure you want to log out?");
      if (choice == true) {
        sessionStorage.clear();
        this.$router.push({ name: "Login" });
        }
      },
      getSomeHelp(){
        this.$router.push({ name: "Help" });
      },
      showReceipt(id, date, fname, lname, itemName, price, quantity, payment_method, payment_status, fee, 
     houseNumber, streetName, province, city, district, barangay, order_status){
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
      var currency =	"Php " ;
      var price_Print = currency + price;
      pdf.text("Price: ", 5, 50);
      pdf.text(price_Print.toString(), 30, 50);
      // Quantity
      pdf.text("Quantity: ", 5, 60);
      pdf.text(quantity.toString(), 30, 60);
      // Payment Method
      pdf.text("Payment Method: ", 5, 70);
      pdf.text(payment_method, 50, 70); 
      // Payment Status
      pdf.text("Payment Status: ", 5, 80);
      pdf.text(payment_status, 50, 80);
      // Order Status
      pdf.text("Payment Status: ", 5, 90);
      pdf.text(order_status, 50, 90);
      // Fee
      pdf.text("Fee: ", 5, 100);
      pdf.text(fee.toString(), 30, 100);
      // Shipping Address
      pdf.text("Shipping Address: ", 5, 110);
      pdf.text(houseNumber.toString()+" "+
      streetName.toString()+" "+ 
      barangay.toString()+" "+
      district.toString()+" "+
      city.toString()+" "+
      province.toString(), 30, 120);

      // Total
      var total = (price*quantity)+fee;
      var total_price = currency +" "+ total;
      pdf.text("Total: ", 5, 140);
      pdf.text(total_price.toString(), 30, 140);

      // Date fo Print
      var DATE = new Date().toLocaleString();
      pdf.text("Date of Print: ", 5, 150);
      pdf.text(DATE.toString(), 38, 150);

       // Saving PDF 
       pdf.save('report.pdf');
    },
    AdminDelete(id){
      var choice = confirm("Are you sure you want to Admin delete the order?");
      if (choice == true) {
        this.adminDelete(id);
        }
    }
  },
  created(){
    if(sessionStorage.getItem('isLoggedIn') != "true"){
      alert("Please log in first!");
      this.$router.push({ name: "Login" });
    }
    this.fetchOrders();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container{
  #ItemDescription{
    color: black;
  }
  background: #76CCA6;
  padding: 0px;
  margin-left: 10%;
  font-family: Kumbh Sans, Helvetica, Arial, sans-serif;
  width: 100%;
  font-family: Kumbh Sans, Helvetica, Arial, sans-serif;
  // background: rgb(59, 50, 50);

  .logOut{
    margin-left:15px;
  }
  #getHelp{
    margin-left:30px;
  }
  .filter-statuts{
    margin-left:13px;
    border-radius:12px;
    padding: 8px;
    margin-right: 8px;
    background: #2B2445;
    color: white;
  }
  .is-cancelled{
    background: #2B2445;
    color:white;
  }
  
  .payementFilter{
    margin-left:15px;
    font-size:1.2rem;
    font-weight: bold;
  }
  .labelDate {
    margin-left:15px;
    font-size:1.2rem;
    font-weight: bold;
  }
  .entries{
    color:#2C3F3C;
    margin-left:15px;
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
    // width: 100%;
    // margin-left:auto;
    // margin-right:auto;
    thead {
      th {
        h4 {
          text-align: center;
          &:hover {
            transition: 0.4s all ease-in-out;
          }
        }
      }
    }
    tbody {
      tr {
        td{
          .modal-body{
            color: black;
          }
          #ID{
            cursor: pointer;
          }
        }
        &:hover {
          background-color: #82d682;
          transition: 0.4s all ease-in-out;
        }
      }
    }
  }
}
</style>
