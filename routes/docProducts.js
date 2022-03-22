/**
 * @swagger
 * components:
 *   schemas:
 *     Products:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Is the name of product
 *         description:
 *           type: string
 *           description: Describe the more info of the product
 *         image:
 *           type: string
 *           description: Image with view the product
 *         price:
 *           type: number
 *           description: The public price of the product
 *         state:
 *           type: boolean
 *           description: Describe of the product is aviable
 *       required:
 *         - name
 *         - description
 *         - image
 *         - price
 *       example:
 *         name: Kingston Data Travel 3.0 64GB
 *         description: Flashdrive USB 3.0 64GB Kingston white/red model rtx95-64
 *         image: https://static.kemikcdn.com/2017/06/image_39_.png
 *         price: 85.00
 */

// Endpoints
/** 
 * @swagger
 * /api/v1/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Products'
 *     responses:
 *       200:
 *         description: new product created.!
 * */

/** 
 * @swagger
 * /api/v1/products:
 *   get:
 *     summary: Return al products
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: Return all products.!
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Products'
 * */


/** 
 * @swagger
 * /api/v1/products/{id}:
 *   get:
 *     summary: Return a specific Product
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: This number is the product id
 *     responses:
 *       200:
 *         description: Return all products.!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Products'
 *       404:
 *         description: Product with id {id} not exits..!
 * */

/** @swagger
 * /api/v1/products/{id}:
 *   put:
 *     summary: Update a specific Product
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: This number is the product id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Products'
 *     responses:
 *       200:
 *         description: Return all products.!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Products'
 *       404:
 *         description: Product with id {id} not exits..!
 * */


/**
 * @swagger
 * /api/v1/products/{id}:
 *   delete:
 *     sumary: Delete a specific Product..!
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: This number is the product id
 *     responses:
 *       200:
 *         description: Product with id {id} has been deleted successfull.!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Products'
 *       404:
 *         description: Product with id {id} not exits..!
 * */
