const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function(){
  //criar a tabela
  db.run(`
          CREATE TABLE IF NOT EXISTS ideias(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
  `)
// //inserir dados na tabela
//   const query = `
//   INSERT INTO ideias (
//    image,
//    title,
//    category,
//    description,
//    link
//  ) VALUES(?,?,?,?,?);
//   `

//  const values=[
//    "https://image.flaticon.com/icons/svg/1995/1995485.svg",
//    "Cursos de Programação",
//    "Estudo",
//    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veniam eos itaque repellendus obcaecati nobis. Pariatur deleniti dicta amet? Adipisci, ipsum ipsa. Animi itaque aliquam, nisi quia obcaecati sit nesciunt?",
//    "https://github.com/LucianoAlvesTeles"    
//  ]
  
//  db.run(query, values, function(err){
//      if(err) return console.log(err)

//      console.log(this)
//  })


 //deletar um dado na tabela
  //db.run(`DELETE FROM ideias WHERE id = ?`, [1], function(err){
  //  if(err) return console.log(err)

   // console.log("Deletei", this)
  //})

  //consultar dados da tabela
 // db.all(`SELECT * FROM ideias`, function(err, rows){
   //   if (err) return console.log(err)

   //   console.log(rows)
 // })

})

module.exports = db

//utiliza-se //node db.js// para rodar o sql escrito neste documento.