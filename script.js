const express = require('express');
const server = express()


server.get('/soma', (req,res) => {
    resultado = soma(req.query.a, req.query.b)
    res.send(`O resultado da soma é: ${resultado}`)
})

server.get('/subtracao', (req,res) => {
    resultado = subtracao(req.query.a, req.query.b)
    res.send(`O resultado da subtracao é: ${resultado}`)
})

server.get('/divisao', (req,res) => {
    resultado = divisao(req.query.a, req.query.b)
    res.send(`O resultado da divisao é: ${resultado}`)
})

server.get('/multiplicacao', (req,res) => {
    resultado = multiplicacao(req.query.a, req.query.b)
    res.send(`O resultado da multiplicacao é: ${resultado}`)
})



const {soma, subtracao, divisao, multiplicacao} = require('./teste')
const path = require('path')


const PORT = 8000

   

server.listen(PORT, () => {
    console.log(` o servidor foi inicializado na porta ${PORT}`)
})