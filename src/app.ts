import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/ruta1/:id', (req, res) => {
    console.log(req.headers);
    console.log(req.params);
    //console.log(req.query);
    console.log(req.body);
    res.send('Prueba del servidor');
});

app.listen(port, () => {
    return console.log(`servidor corriendo sobre el puerto ${port}`)
});