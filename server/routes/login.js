const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const app = express();





app.post('/login', (req, res) =>{

    let body = req.body;

    Usuario.findOne({email : body.email}, (err , usuarioBD) => {
        
        if( err ){
            return res.status(500).json({//error internal server error
                ok: false,
                err
            });
        }

        if( !usuarioBD ){
            return res.status(400).json({
                ok: false,
                err:{
                    message: '{Usuario} o contrasenia incorrectos'//no en produccion
                }
            });
        }

        if( !bcrypt.compareSync(body.password, usuarioBD.password) ){
            return res.status(400).json({
                ok: false,
                err:{
                    message: 'Usuario o {contrasenia} incorrectos'//no en produccion
                }
            });
        }
        
        let token = jwt.sign({
            usuario: usuarioBD
        },process.env.SEED,{ expiresIn: process.env.CADUCIDAD_TOKEN});

        res.json({
                ok:true,
                usuario:usuarioBD,
                token
        });

    });//regresa solo 1

});



module.exports = app;