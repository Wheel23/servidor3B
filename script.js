const http = require('http')
const {soma} = require('./teste')

const PORT = 8000

const server = http.createServer((req, res) => {
    const urlCapturada = url.parse(req.url,true)
    const {query} = urlCapturada
    console.log(query)
   let valores = req.url.replace('/', '').replace('?','').split('&') 
   let parametros = {}
   for(item in valores){
    let chaveValor = valores[item].split('=')
   parametros[chaveValor[0]] = Number(chaveValor[1])

   }
   
    let resultado = soma(parametros.a, parametros.b)
    res.end(`O valor final e ${resultado}`)

})
  

server.listen(PORT, () => {
    console.log(` o servidor foi inicializado na porta ${PORT}`)
})