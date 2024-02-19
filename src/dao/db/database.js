//conoxion con MONGODB

import mongoose from "mongoose";

const connectMongoose = mongoose.connect("mongodb+srv://backend:01081990@cluster0.li1apvw.mongodb.net/ecommerce?retryWrites=true&w=majority")
.then(() => console.log("Conexion exitosa"))
.catch((error) => console.log(error))

export default connectMongoose;