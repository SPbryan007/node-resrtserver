


//******************************
//Puerto
//******************************
process.env.PORT = process.env.PORT || 3000;

//******************************
//Entorno
//******************************
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//******************************
//Base de datos
//******************************
let urlDB;
if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = process.env.MONGO_URI;
   // urlDB = 'mongodb://cafe-user1:cafe-user1@ds127878.mlab.com:27878/cafe'
}

process.env.URLDB = urlDB;

//******************************
//Vencimiento del token
//******************************
//60 seconds
//60 minutes
// 24 hours
//60 days
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//******************************
//SEED(SEMILLA) de autenticacion
//******************************
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';






//Environmental Variables with Node js
//https://gist.github.com/romelgomez/3c1776fab4192c7687883c1a2b972c8c
//https://github.com/Microsoft/TypeScript-Node-Starter/tree/master/src
//https://blog.sourcerer.io/a-crash-course-on-typescript-with-node-js-2c376285afe1
//https://blog.risingstack.com/building-a-node-js-app-with-typescript-tutorial/
//https://github.com/jamg44/NodeTyped/tree/master/src
//https://github.com/inversify/InversifyJS
//https://github.com/inversify/inversify-express-utils
//https://github.com/inversify/inversify-express-utils/tree/master/src
//https://brianflove.com/2016/03/29/typescript-express-node-js/
//https://malcoded.com/posts/angular-backend-express
