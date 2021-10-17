import  Mongoose  from "mongoose";


Mongoose
.connect('mongodb+srv://admin:1234@cluster0.u1fwz.mongodb.net/Extra?retryWrites=true&w=majority')
.then((db)=>console.log("Ya en linea XD"))
.catch((err)=>console.log("No se conecta :("));


export default Mongoose

//'mongodb+srv://admin:1234@cluster0.u1fwz.mongodb.net/EmprendeApp?retryWrites=true&w=majority';
