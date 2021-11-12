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
    res.send('obtenerUsuario desde el controlador')
}
const agregarUsuario = (req, res) => {
    res.send('agregarUsuario desde el controlador')
}
const actualizarUsuario = (req, res) => {
    res.send('actualizarUsuario desde el controlador')
}
const eliminarUsuario = (req, res) => {
    res.send('eliminarUsuario desde el controlador')
}

export {obtenerUsuarios, obtenerUsuario, agregarUsuario, actualizarUsuario, eliminarUsuario}
