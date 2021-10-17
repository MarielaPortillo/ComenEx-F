import Router from "express"
import opinionController from "../controllers/opinionController.js"
const ruta = Router();




/**
 * @swagger
 * tags:
 *  name: Opinion
 *  description: Opinion en comentarios
 */



/**
 * @swagger
 * /listadoOpinion:
 *  get:
 *      summary: Obtener Opiniones
 *      tags: [Opiniones]
 *      description: Obteniendo todos
 *      produces: 
 *          - application/json
 *      responses:
 *          200:
 *              description: Todos las Opiniones
 *              schema:
 *              type: json
 * 
 */

//listar todos
ruta.get("/listadoOpinion",opinionController.listado)



/**
   * @swagger
   * /uno/{id}:
   *  get:
   *      summary: Obtener una opinion
   *      tags: [Opiniones]
   *      description: Obteniendo Uno
   *      produces: 
   *             - application/json
   *      parameters:
   *             - in: path
   *               name: id
   *               description: Id de la opinion
   *      responses:
   *          200:
   *              description: Una opinion
   *              schema:
   *              type: json
   * 
   */

//listaruno
ruta.get("/comentario",opinionController.comentario)


ruta.get("/valoracion",opinionController.valoracion)
export default ruta 