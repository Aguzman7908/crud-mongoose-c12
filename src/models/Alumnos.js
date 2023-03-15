const mongoose = require('mongoose');

const AlumnosSchema = mongoose.Schema ({

    matricula:{
        type:Number,
        required:true
    }
    nombre: {
        type: String,
        required:true,
    },

    curso:{
        type:String,
        required:True
    }

} 
)

const Alumnos = mongoose.model('Alumnos', AlumnosSchema)

// 4. EXPORTACIÓN
module.exports = Alumnos;