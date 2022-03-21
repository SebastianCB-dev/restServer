const {  response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.status(200).json({
        msg: "get API - controlador",
        q,
        nombre,
        apikey,
        page,
        limit
    });

}

const usuariosPost = (req = request, res = response)=> {
    
    const { name, age} = req.body;

    res.json({
        msg: "post API",
        name,
        age
    });
}

const usuariosPut = (req = request, res = response)=> {
    const { id } = req.params;
    res.json({
        msg: "put API",
        id
    });
}

const usuariosPatch = (req, res = response)=> {
    res.json({
        msg: "patch API"
    });
}

const usuariosDelete = (req, res = response)=> {
    res.json({
        msg: "delete API"
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
