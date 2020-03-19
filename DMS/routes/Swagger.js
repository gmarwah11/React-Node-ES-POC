const express = require('express');
const app = express();

/**
 * @swagger
 * definitions:
 *   Documents:
 *     properties:
 *       id:
 *         type: integer
 *       title:
 *         type: string
 *       description:
 *         type: string
 *       path:
 *         type: string
 *       country:
 *         type: string
 *       uploadedBy: 
 *         type: integer
 *       created:
 *         type: string
 */

    
/**
 * @swagger
 * /documents/upload:
 *   post:
 *     tags:
 *       - Documents
 *     description: Creates a new Documents
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Documents
 *         description: Documents object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Documents'
 *     responses:
 *       200:
 *         description: Successfully created
 */


/**
 * @swagger
 * /documents/fetch/{fn}:
 *   get:
 *     tags:
 *       - Documents
 *     description: Returns a single USer
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: fn
 *         description: USer's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single Users
 */

/**
 * @swagger
 * /documents/list:
 *   get:
 *     tags:
 *       - Documents
 *     description: Returns a single Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A single Users
 */




