// Puerto
process.env.PORT = process.env.PORT || 3000;


//Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Base de Datos

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URL;
}

process.env.URLDB = urlDB;


//Fecha de Expiracion token
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//Seed (semilla) de autenticacion
process.env.SEED = process.env.SEED || 'seed-desarrollo';

//Google Client ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '760573435410-dp6j66lk65rs2gsfdv5f47pofu0562h6.apps.googleusercontent.com';