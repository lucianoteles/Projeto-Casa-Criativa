
//usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()

//configurar arquivos estaticos (css, scripts, imagens)
server.use(express.static("public"))

//configuração do nunjucks



//criei uma rota /
//e capturo o pedido do cliente para responder
server.get("/", function(req, res){
  return res.sendFile(__dirname + "/index.html")
})

server.get("/ideias", function(req, res){
  return res.sendFile(__dirname + "/ideias.html")
})

//liguei meu servidor em localhos:3000
server.listen(3000)

