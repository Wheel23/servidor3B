const http = require('http')
const url = require('url')
const {soma, subtracao} = require('./teste')
const path = require('path')


const PORT = 8000

const server = http.createServer((req, res) => {
    const urlCapturada = url.parse(req.url,true)
    const {query, pathname} = urlCapturada
    let resultado = 0
    if(pathname == '/soma'){
        resultado = soma(Number(query.a), Number(query.b))
        
      
    }else if(pathname == '/subtracao'){
        resultado = subtracao(Number(query.a), Number(query.b))
    }
    res.end(`O valor final e ${resultado}`)
   }
   )
   

server.listen(PORT, () => {
    console.log(` o servidor foi inicializado na porta ${PORT}`)
})