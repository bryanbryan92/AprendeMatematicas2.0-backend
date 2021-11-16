import express from 'express';
import usuariosRoutes from './routes/usuarios';
import config from './config/config';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

usuariosRoutes(app);

app.listen(config.PORT, () => {
    return console.log(`servidor corriendo sobre el puerto ${config.PORT}`)
});