
const obtenerUsuarios = (req, res) => {
    res.send('obtenerUsuarios desde el controlador')
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
