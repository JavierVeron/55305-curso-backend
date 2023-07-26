import multer from "multer";
const __dirname = "C:/xampp/htdocs/coderhouse/55305/curso/Clase8";

// Definir como se va almacenar con multer
const storage = multer.diskStorage({
    destination:function(req, file, cb) { //Definir la ruta de destino
        cb(null, __dirname + "/public/images")
    },
    filename:function(req, file, cb) { //Definir el nombre del archivo que se va a almacenar
        cb(null, file.originalname)
    }
});

export const uploader = multer({storage});
export default __dirname;