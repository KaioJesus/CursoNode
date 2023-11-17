const express = require("express");

const app = express();

app.get("/", (requisicao, resposta) => {
    resposta.send("Hello world")
});

app.get("/user", (requisicao, resposta) => {
    resposta.send({nome: "Kaio"})
});

app.delete("/user", (requisicao, resposta) => {
    resposta.send({nome: "Kaio Deletado"})
});

app.listen(8080, ()=>{ //porta 8080
    console.log('servidor rodando')
})