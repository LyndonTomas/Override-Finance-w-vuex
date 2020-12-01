const axios = require('axios')
const express = require("express");
const mongodb = require("mongodb");
require("dotenv/config");
const router = express.Router();
const url = 'http://syntax-api-server.herokuapp.com/api/orders/';


// TODO
// Get Date
// Done
router.get("/date/:date", async (req, res) => {
  const queryDate = new Date(req.params.date);
  const year = queryDate.getFullYear();
  const month = queryDate.getMonth() + 1;
  const day = queryDate.getDate(); 
  // Syntax-API
  axios.get(`${url}/${year}/${month}/${day}`)
  .then((response) => 
    res.status(response.status)
    .json(response.data))
  .catch(({response}) => 
    res.status(response.status)
    .json(response.data))
});


// TODO
// Get All orders
// DONE
router.get("/", async (req, res) => {
  axios
    .get(url)
    .then((response) => res.status(response.status).json(response.data))
    .catch(({ response }) => res.status(response.status).json(response.data));
});

// TODO
// Get Specific Order using order_id
// Done
router.get("/order/:id", async(req, res) =>{
  axios
  .get(`${url}order?id=${req.params.id}`)
  .then((response) => res.status(response.status).json(response.data))
    .catch(({ response }) => res.status(response.status).json(response.data));
});

// TODO
// Admin Delete(last resort)
router.patch("/admin/delete/:id", async(req, res) =>{
  axios.patch(`${url}admin/delete?id=${req.params.id}`)
  .then((response) => {
    res.status(response.status).json(response.data);
    alert(response.data.msg)})
  .catch(({ response }) => res.status(response.status).json(response.data));
})

// TODO
// Cancel the entire order
router.patch("/order/cancel/:id", async(req, res) =>{
  axios
    .patch(`${url}cancel?id=${req.params.id}`)
    .then((response) => res.status(response.status).json(response.data))
    .catch(({ response }) => res.status(response.status).json(response.data));
})


// TODO
// Delete an Order
// Done 
router.patch("/delete/:id", async (req, res) => {
  axios.patch(`${url}delete?id=${req.params.id}`)
  .then((response) => {
    res.status(response.status).json(response.data);
    alert(response.data.msg)})
  .catch(({ response }) => res.status(response.status).json(response.data));
});



// Updating a Payment Status
// Done
router.patch("/status/:id/:value", async (req, res) => {
  axios.patch(`${url}payment/${req.params.value}?id=${req.params.id}`)
  .then((response) => res.status(response.status).json(response.data))
  .catch(({ response }) => res.status(response.status).json(response.data));
});

// TODO
// Getting Orders thru order_status and payment_status
// Done
router.get("/status/:payStatus/:ordStatus", async (req, res) =>{
  axios.get(`${url}${req.params.payStatus}/${req.params.ordStatus}`)
  .then((response) => res.status(response.status).json(response.data))
  .catch(({ response }) => res.status(response.status).json(response.data));
})

// TODO
// Updating Order status
// Done
router.patch("/delivered/:id", async (req, res) =>{
  axios.patch(`${url}delivered?id=${req.params.id}`)
  .then((response) => res.status(response.status).json(response.data))
  .catch(({ response }) => res.status(response.status).json(response.data));
})

// TODO
// Updating Payment status
router.patch("/paid/:id", async (req, res) =>{
  axios.patch(`${url}paid?id=${req.params.id}`)
  .then((response) => res.status(response.status).json(response.data))
  .catch(({ response }) => res.status(response.status).json(response.data));
})



module.exports = router;
