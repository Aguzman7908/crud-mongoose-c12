// CREANDO MI MIDDLEWARE
const jwt= require('jsonwebtoken')

module.exports = (req, response, next) => {
    const token = req.header('x-auth-token')
    
    if (!token){// caso falso o en caso de ser negativo es recomendable
        return res.status(401).json({message:'Permiso no valido o inexistente'})
    }

    try {
        const  verifiedToken = jwt.verify(token, process.env.SECRET)    
        req.user = verifiedToken.user
        next()
    }catch (err) {
        res.json({message: 'Hubo un error', descripcion: err})
    }
} 