const express = require("express");
const app = express();
const rutas = require('./app/routes');
const cors = require('cors')

const port = 3000;
app.use(cors());
app.use(express.json());

app.listen(port, () =>{
  console.log("puerto activao " + port);
});

rutas(app);



