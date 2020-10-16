let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let ejwt = require('express-jwt');
const secret = require("./secret");
const secretkey = require("./secret").secret;

//usuario se loguea
router.post('/', (req,res)=> {
    const user = {id: 1,
                nombre: "Juan",
                email: "Juan@gmail.com"
    }
// al loguearse jwt crea un token y lo envia al cliente
jwt.sign({user}, secretkey, {expiresIn: '1h'}, (err, token)=>{
    
    res.json({
        token
    })

});
});

// segun la verificacion que se realiza el servidor devuelve la informacion del usuario o el codigo 403
router.get('/posts', ejwt(secret), (req, res)=>{

     res.send(req.user);
})


module.exports = router;