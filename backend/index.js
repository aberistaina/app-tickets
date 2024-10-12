import { app } from "./src/app.js";
import { sequelize } from "./src/database/database.js"
import logger from './src/logger.js'

//MODELS
import "./src/models/asociaciones.js"

//Levantar servidor y conectarse a la base de datos
const PORT = 3000;

const main = async () => {
    try {
        await sequelize.authenticate();
        logger.info('Conexión a la base de datos establecida correctamente.');
        await sequelize.sync({ force: false, alter: false });
        logger.info('Modelos sincronizados correctamente.');
        app.listen(PORT,'0.0.0.0', () => {
            console.log(`Servidor escuchando en http://0.0.0.0: ${PORT}`);
            logger.info(`Servidor escuchando en el puerto: ${PORT}`);;
        })
    } catch (error) {
        console.log("Ha ocurrido un error", error);
        logger.error("Ha ocurrido un error", error);
    }
};

main();