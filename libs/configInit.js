
import Valo from "../models/valoracion.js";
import fetch from 'node-fetch';
import Opinion from "../models/opinion.js"


export const createValoracion = async () => {

  try {
    // Contando datos de la valoracion

    const count = await Valo.estimatedDocumentCount();


    // Verificando si hay valoracion
    if (count > 0) return;

    // Creando valoracion por defecto
    const values = await Promise.all([
      new Valo({ valoracion: "1E" }).save(),
      new Valo({ valoracion: "2E" }).save(),
      new Valo({ valoracion: "3E" }).save(),
      new Valo({ valoracion: "4E" }).save(),
      new Valo({ valoracion: "5E" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};
