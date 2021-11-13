import executeQuery from "../services/mysql.service"

const obtenerUsuarios = async(req, res) => {
    try{
        const response = await executeQuery('SELECT * FROM usuarios');
        console.log(response);
        const data = {
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response: null
        }
        res.json(data);
    }catch(error){
        res.status(500).send(error);
    }
}
const obtenerUsuario = (req, res) => {
    const {id} = req.params;
    executeQuery(`SELECT * FROM usuarios WHERE id = ${id}`).then((response) => {
        const data = {
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response[0]: null
        }
        res.json(data);
    }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
    });
   
}
const agregarUsuario = async(req, res) => {
    const {nombre, apellido, edad, email, contrasena, grado} = req.body;
    try{
        const response = await executeQuery(`INSERT INTO usuarios (nombre, apellido, edad, email, contrasena, grado) VALUES ('${nombre}', '${apellido}', '${edad}', '${email}', '${contrasena}', '${grado}')`);
        res.status(201).json({message: 'created', id: response.insertId});
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}
const actualizarUsuario = async(req, res) => {
    const {nombre, apellido, edad, email, contrasena, grado} = req.body;
    try{
        const response = await executeQuery(`UPDATE usuarios SET nombre = '${nombre}', apellido = '${apellido}', edad = '${edad}', email = '${email}', contrasena = '${contrasena}', grado = '${grado}' WHERE id = ${req.params.id}`);
        console.log(response);
        if(response.affectedRows > 0){
            res.json({message: 'updated'});
        }else{
            res.status(404).json({message: `No existe registro con id: ${req.params.id}`})
        }
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}
const eliminarUsuario = async(req, res) => {
    try{
        const response = await executeQuery(`DELETE FROM usuarios WHERE id = ${req.params.id}`);
        console.log(response);
        if(response.affectedRows > 0){
            res.json({message: 'deleted'});
        }else{
            res.status(404).json({message: `No existe registro con id: ${req.params.id}`})
        }
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

export {obtenerUsuarios, obtenerUsuario, agregarUsuario, actualizarUsuario, eliminarUsuario}
