import Opinion from "../models/opinion.js";
import valo from '../models/valoracion.js';
import 'swagger-ui-express';
import 'swagger-jsdoc';
import fetch from 'node-fetch';

const controlador = {}

controlador.listado = async (req, res) => {
    console.log("Ejecutando el FIND")
    const opiniones = await Opinion.find().populate({ path: 'valoracion', Model: 'Valoracion' })
    res.json(opiniones)
    console.log(opiniones)
}
controlador.valoracion = async (req, res) => {
    await fetch("https://api-comercios.herokuapp.com/puntuacion")
        .then((resp) => {
            return resp.json()
        }).then((res) => {
            console.log(res)
        }).then((entidad) => res.status(200).send(entidad))
        .catch((err) => res.status(400).send(
            {
                "error": "No hay datos de valoraciones",
            }

        ));
}

controlador.comentario = async (req, response) => {

    await fetch("https://api-comercios.herokuapp.com/puntuacion")
        .then((resp) => {
            return resp.json()
        }).then((res) => {
            console.log(JSON.stringify(res))
            let menor = res.menor;
            let mayor = res.mayor;
            let promedio = res.promedio;
            console.log(menor)
            console.log(mayor)
            console.log(promedio)
            if ((menor < mayor) && (promedio <= mayor) && (promedio >= menor)) {
                new Opinion({
                    comentario: "Los productos son buenos, recomiendo el comercio",
                    valoracion: mayor
                }).save()
                

            } else {
                if ((menor < mayor) && (promedio >= mayor)) {
                    new Opinion({
                        comentario: "Los productos del comercio son buenos",
                        valoracion: promedio
                    }).save()
                    
                }
                else {
                    if ((menor < mayor) && (promedio === menor)) {
                        new Opinion({
                            comentario: "Malisimo, mal servicio no lo recomiendo para nada",
                            valoracion: menor
                        }).save()
                        


                    }
                }
            }
        })

        const opinion = await Opinion.find().sort({ $natural:-1 }).limit(1)
        response.send(opinion)


}



export default controlador