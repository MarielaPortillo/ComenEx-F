
import Mongoose from 'mongoose';

export const Valoraciones = ["1E", "2E", "3E","4E","5E"]

const valoracionSchema = Mongoose.Schema(
    {
        valoracion: String
 
    }
);

export default Mongoose.model("Valoracion", valoracionSchema );