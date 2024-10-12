import Sequelize from "sequelize";
import dotenv from "dotenv"
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({path: path.resolve(__dirname, "../.env")});
import logger from '../logger.js';

//Conexión a la Base de Datos

let database = process.env.DB_DATABASE
let usuario = process.env.DB_USER;
let password = process.env.DB_PASSWORD;
let host = process.env.DB_HOST;
export const sequelize = new Sequelize(database, usuario, password, {
    host: host,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 3000,
    },
    logging: (msg) => logger.info(msg),
});
