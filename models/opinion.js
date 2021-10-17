import  Mongoose  from "mongoose";


const opinionSchema=Mongoose.Schema({

    comentario: {type:String, require:true},
    valoracion: {type:Number, },
},
{
    timestamps: true,
    versionKey: false
  }
)

export default Mongoose.model('opinion',opinionSchema)