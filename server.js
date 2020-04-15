
//usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()


const ideias = [
  {
    img: "https://image.flaticon.com/icons/svg/1995/1995485.svg",
    title: "Cursos de Programação",
    category:"Estudo",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veniam eos itaque repellendus obcaecati nobis. Pariatur deleniti dicta amet? Adipisci, ipsum ipsa. Animi itaque aliquam, nisi quia obcaecati sit nesciunt?",
    url:"https://github.com/LucianoAlvesTeles"    
  },
  {
    img: "https://image.flaticon.com/icons/svg/2741/2741162.svg",
    title: "Exercício",
    category:"Saúde",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veniam eos itaque repellendus obcaecati nobis. Pariatur deleniti dicta amet? Adipisci, ipsum ipsa. Animi itaque aliquam, nisi quia obcaecati sit nesciunt?",
    url:"https://github.com/LucianoAlvesTeles"    
  },
  {
    img: "https://image.flaticon.com/icons/svg/1830/1830796.svg",
    title: "Meditação",
    category:"Mentalidade",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veniam eos itaque repellendus obcaecati nobis. Pariatur deleniti dicta amet? Adipisci, ipsum ipsa. Animi itaque aliquam, nisi quia obcaecati sit nesciunt?",
    url:"https://github.com/LucianoAlvesTeles"    
  },
  {
    img: "https://image.flaticon.com/icons/svg/2784/2784609.svg",
    title: "Karaokê",
    category:"Diversão em Família",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veniam eos itaque repellendus obcaecati nobis. Pariatur deleniti dicta amet? Adipisci, ipsum ipsa. Animi itaque aliquam, nisi quia obcaecati sit nesciunt?",
    url:"https://github.com/LucianoAlvesTeles"    
  }

]

//configurar arquivos estaticos (css, scripts, imagens)
server.use(express.static("public"))

//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
  express: server,
  noCache: true, //boolean
})


//criei uma rota /
//e capturo o pedido do cliente para responder
server.get("/", function(req, res){

  const reversedideias = [...ideias].reverse()
 
  let lastideias = []
  for (ideia of reversedideias){
    if (lastideias.length < 2){
      lastideias.push(ideia)
    }
  }

  return res.render("index.html", {ideias: lastideias})
})

server.get("/ideias", function(req, res){

  const reversedideias = [...ideias].reverse()

  return res.render("ideias.html", {ideias: reversedideias})
})

//liguei meu servidor em localhos:3000
server.listen(3000)

