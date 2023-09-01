// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((request, response) => {
//     const html = fs.readFileSync('index.html');
//     response.writeHeader(200, {"content-Type":"text/html"});
//     response.write(html);
//     response.end();
// });

// server.listen(8080, () => {
//     console.log('servidor escuchando en http://localhost:' + 8080);
// });

function boton(){
    //alert("Me hiciste click")
    msj()
}

async function msj(){
    const resp = await fetch("/mensaje")
    const mensaje = await resp.json(); 
    console.log(mensaje)
    const elemento = document.getElementById("mensaje")
    console.log(elemento)
    elemento.innerHTML = mensaje.mensaje;
    elemento.style.color = "green"
}

//msj()