// Import Express And resizingRoute Module
import express from 'express';
import mainAPI from './../appFunction/app';

// Using Express Router
const routes = express.Router();

routes.use('/api', mainAPI);

export default routes;
