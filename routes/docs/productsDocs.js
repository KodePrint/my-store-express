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
 *             $ref: '#/components/schemas/product'
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
 *                 $ref: '#/components/schemas/product'
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
 *               $ref: '#/components/schemas/product'
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
 *             $ref: '#/components/schemas/product'
 *     responses:
 *       200:
 *         description: Return all products.!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/product'
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
 *               $ref: '#/components/schemas/product'
 *       404:
 *         description: Product with id {id} not exits..!
 * */
