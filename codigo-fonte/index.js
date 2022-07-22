// Importando o express para o projeto
const Express = require("express");

// Inicializando o Express no projeto Nodejs
const Aplicativo= new Express();

// Disponibilizando meu recurso(EndPoint) via Http
Aplicativo.get ('/',(RequisicaoCliente,RespostaServidor)  => RespostaServidor.send("Hello World"));
// Configurei a porte de acesso aos recursos do Express via Httpcle
Aplicativo.listen(1234, () => console.log("Servidor OK"));