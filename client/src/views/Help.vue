<template>
  <div class="container">
      <h1 class="pageTitle">Help Page</h1>
      <button id="backToHome" class="btn btn-link" @click="backToOrders()"> >> Back to Home</button>
      <span><h4>Here are some helpful tips in using the Finance-Order System...</h4></span>
    
        
      
      <br>
      <b><p>The puprose of the Override-Orders</p></b>
      <ol>
          <li>To monitor incoming orders.</li>
          <li>To delete orders (for specific reasons only which will be discussed later on).</li>
          <li>To know that stauts of the orders, mainly the payment and the delivery status.</li>
          <li>To know the number of orders per day.</li>
      </ol>
      <p>In this page, the developer will discuss every feature that any user might encounter, within this system.</p>
      <h3>I. Login Page</h3>
      <b>In this page, there are only 2 errors that a user might encounter. Here are the possible solutions.</b>
      <br>
      <br>
        <img id="login-error-1" src="./help/loginError1.jpg" alt="">
        <center><p><b>Image 1. Incomplete fields</b></p></center>
        <center><p>To address the situation, make sure that both fields (email and password) are provided with the necessary info.</p></center>
        <br>
        <img id="login-error-2" src="./help/loginError2.jpg" alt="">
        <center><p><b>Image 2. Unknown credentials</b></p></center>
        <center><p>To address the situation, kindly contact the developers to add a new credential and its corresponding user type. This would prbably occur when the 
            email and password provided aren't registered in the user's database. Also, make sure the spelling and the proper cases are used since this is <i>case-sensitive</i>.</p></center>
      <h3>II. Order Page</h3>
      <img class="img1" src="./help/reset.jpg" alt="Order Page">
      <center><b>Image 3. Order Page Sample</b></center>
      <br>
      <!-- Refresh -->
      <b><p>A. Refresh</p></b>
        <p>This button refreshes the page to: </p>
        <ol>
            <li>Display new orders, if there are any.</li>
            <li>Make sure that the status of the payment and order displaying real time information.</li>
        </ol>
      <b><p>B. Entries</p></b>
        <p>Displays the number of orders. This will change when the user tries to place information on the date filter (part D) and the status filter (part L)</p>
      <b><p>C. Got to Help Page</p></b>
        <p>Goes to the help page where a detailed explanation regarding the use of the system will be displayed.</p>
      <b><p>D. Date Filter</p></b>
        <p>A filter designed to help the user lok for orders made on a specific date. </p>
      <b><p>E. LogOut</p></b>
        <p>Delivers the user back to the LogIn page</p>
      <b><p>F. Generate Receipt</p></b>
        <p>Generates a receipt containing information about the buyer and the product. This receipt will be automatically downloaded as a pdf file.</p>
      <b><p>G. Delete</p></b>
        <p>Deletes any non-processing order, but this will only function if the order is only cancelled first.</p>
      <b><p>H. Cancel</p></b>
        <p>Changes the status of the order and the payment as cancelled.</p>
        <center><p><b>Notice:</b>The color of the row will change once the order is cancelled, and will reflect in the payment and orders area.</p></center>
            <img class="cancel-sample" src="./help/order-sample.jpg" alt="">
            <center><b>Order sample: Not cancelled</b></center>
            <br>
            <img class="cancel-sample" src="./help/cancel-order-result.jpg" alt="">
            <center><b>Order sample: Cancelled</b></center>
      <b><p>K. Item Reference</p></b>
        <p>Once clicked, you will be directed to the online store wherein the item is displayed along with with images and descriptions.</p>
      <b><p>L. Stauts Filter</p></b>
        <p>This filter is used ony to check the status of the payment and the delivery of the order. This will only funtion when both fileds have values in them (processing, paid, and cancelled for payemnt while processing, delivered, and cancelled are for order).</p>
  </div>
</template>

<script>
export default {
name: "Help",
methods:{
    backToOrders(){
        this.$router.push({ name: "Orders" });
    }
},
created(){
  if(sessionStorage.getItem('isLoggedIn') != "true"){
      alert("Please log in first!");
      this.$router.push({ name: "Login" });
    }
}

}
</script>

<style lang="scss" scoped>
.container{
background: #76CCA6;
padding: 0px;
margin-left: 14%;
font-family: Kumbh Sans, Helvetica, Arial, sans-serif;
width: 100%;
font-family: Kumbh Sans, Helvetica, Arial, sans-serif;
padding-bottom: 6em;
.img1{
    width: 800px;
    margin-left: auto;
    margin-right: auto;
    display:grid;
}

.cancel-sample{
    width:600px;
    margin-left: auto;
    margin-right: auto;
    display:grid;
}

#login-error-1, #login-error-2{
    width: 350px;
    display: grid;
    margin-left: auto;
    margin-right: auto;
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

#backToHome{
    color: white;
    margin-left: 80%;
}

}
</style>