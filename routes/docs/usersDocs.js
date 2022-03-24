/**
 * Post track
 * @openapi
 * /users:
 *  post:
 *      tags:
 *          - User
 *      summary: "Create a new User"
 *      description: Create a new user in the Data Base
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: "object"
 *                      $ref: "#/components/schemas/user"
 *      responses:
 *          "200":
 *              description: new product created.!
 * */

/**
 * Get tracks
 * @openapi
 * /users:
 *  get:
 *      tags:
 *          - User
 *      summary: "Return all users"
 *      description: Return the all users in the Data Base
 *      responses:
 *          200:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: "#/components/schemas/user"
 *      security:
 *          - beareAuth: []
 * */
