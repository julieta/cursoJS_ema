import express from "express";

const server = express();

server.use(express.static('html')) //esto hace que se le diga a express usa tal plugins //archivo static son los html, css
// server.get("/personas", function(req, resp){
//     const mensaje = {msj: "Hola soy resp"}; 
//     console.log("El resp es: ", mensaje);
//     //resp.send(mensaje);   //send es una funcion del objeto resp que permite enviar la respuesta que quiero // ACA devuelve texto plano
//     resp.json(mensaje);
// });

server.get("/mensaje", function(req, res){
    const mensaje = {mensaje: "Bienvenido a este nuevo mundo"};
    res.json(mensaje);
});

server.listen(3000, function(){
    console.log("El server está activo en el puerto 3000")
}); //puerto que escucha el server // el error de consola EADDRINUSE significa que ya está ocupado el puerto //ctrol+c para parar el server
