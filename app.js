const express = require("express");

const app = express();

app.get("/", (requisicao, resposta) => {
    resposta.send("Hello world")
});

app.get("/user/:nome/sobrenome/:sobrenome", (requisicao, resposta) => {
    resposta.send({
        nome: requisicao.params.nome, //passando parametros pela url
        sobrenome: requisicao.params.sobrenome 
    }) 
});

app.delete("/user", (requisicao, resposta) => {
    resposta.send({nome: "Kaio Deletado"})
});

app.listen(8080, ()=>{ //porta 8080
    console.log('servidor rodando')
})