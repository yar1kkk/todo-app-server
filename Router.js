import Router from "express";
import PostController from "./PostController.js";

const router = new Router();

/**
 * @swagger
 * definitions:
 *  Post:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: Name of user
 *     example: 'John'
 *    surname:
 *     type: string
 *     description: Name of user
 *     example: 'Cavannah'
 *    email:
 *     type: string
 *     description: Name of user
 *     example: 'jc@gmail.com'
 *  UpdatePost:
 *   type: object
 *   properties:
 *    _id:
 *     type: string
 *     description: Id of user
 *     example: '620100f22e59aac65a591a88'
 *    name:
 *     type: string
 *     description: Name of user
 *     example: 'John'
 *    surname:
 *     type: string
 *     description: Name of user
 *     example: 'Cavannah'
 *    email:
 *     type: string
 *     description: Name of user
 *     example: 'jc@gmail.com'
 *    __v:
 *     type: integer
 *     description: The versionKey
 *     example: 0
 */

/**
 * @swagger
 * /api/posts:
 *  post:
 *   summary: Use to create user
 *   description: Add user to database
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#definitions/Post'
 *   responses:
 *    200:
 *     description: Creation is succesfull!
 *    500:
 *     description: Creation is denied!
 */

router.post('/posts', PostController.create);

/**
 * @swagger
 * /api/posts:
 *  get:
 *   summary: Use to get all users
 *   description: Get all users here
 *   responses:
 *    200:
 *     description: Getting succesfull!
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#definitions/Post'
 *    500:
 *     description: Getting denied!
 */
router.get('/posts', PostController.getAll);

/**
 * @swagger
 * /api/posts/{id}:
 *  get:
 *   summary: Use to get the post by id
 *   description: Get by id
 *   parameters:
 *   - in: path
 *     name: id
 *     schema:
 *      type: string
 *     required: 'true'
 *     description: The post id
 *     example: '620100f22e59aac65a591a88'
 *   responses:
 *    200:
 *     description: The post description by id
 *     contens:
 *      application/json:
 *       schema:
 *        $ref: '#definitions/UpdatePost'
 *     404:
 *      description: The post was not found
 */
router.get('/posts/:id', PostController.getOne);
/**
 * @swagger
 * /api/posts:
 *  put:
 *   summary: Use to update user
 *   description: Update user to database
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#definitions/UpdatePost'
 *   responses:
 *    200:
 *     description: Updating is succesfull!
 *    500:
 *     description: Updating is denied!
 */
router.put('/posts/:id', PostController.update);
/**
 * @swagger
 * /api/posts/{id}:
 *  delete:
 *    summary: Remove the post by id
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: 'true'
 *      description: The post id
 *      example: '620100f22e59aac65a591a88'
 *    responses:
 *     200:
 *      description: Deleted succesfully!
 *      contens:
 *       application/json:
 *        schema:
 *         $ref: '#definitions/UpdatePost'
 *      404:
 *       description: The post was not found
 */
router.delete('/posts/:id', PostController.delete);


export default router;
