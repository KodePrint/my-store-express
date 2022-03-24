/**
 * Post track
 * @openapi
 * /users:
 *  post:
 *      tags:
 *          - User
 *      sumary: "Create a new User"
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