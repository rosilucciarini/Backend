//conoxion con MONGODB

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://backend:01081990@cluster0.li1apvw.mongodb.net/ecommerce?retryWrites=true&w=majority")
.then(() => console.log("Conexion exitosa"))
.catch(() => console.log("Tenemos un error"))

export default mongoose;