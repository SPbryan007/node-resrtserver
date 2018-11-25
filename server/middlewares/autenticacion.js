const jwt = require('jsonwebtoken');
//=============================
//Verificar Token
//============================
//module.exports.verificaToken = (req, res, next ) => {
let verificaToken = (req, res, next ) => {
    let token = req.get('token'); //req.headers.token
    jwt.verify( token, process.env.SEED, (err, decoded) =>{

        if( err ) {
             return res.status(401).json({//401 no autorizado decoded(paylod toda la informacion del usuario)
                    ok:false,
                    err:{
                        message:'Token no valido'
                    }
             });
        }

        req.usuario = decoded.usuario; ///???????????????????????????
        next();
    });

};

// =====================
// Verifica AdminRole
// =====================
let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {

        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }
};
module.exports = {
    verificaToken,
    verificaAdmin_Role
}