const express = require ('express');
const app = express();
require('dotenv/config')
const bodyParser = require('body-parser');
const cors = require('cors');

//Middleware
app.use(bodyParser.json());
app.use(cors());

// Login-Regiester Authentication
const users = require('./routes/api/users');
app.use('/api/users', users);

// Orders
const orders = require('./routes/api/orders');
app.use('/api/orders', orders);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + "/public/"));
    app.get("*", (req, res) => {
      res.sendFile(__dirname + "/public/index.html");
    });
  }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));