//db.alunas.find().sort({"nome":-1}).limit(5).pretty() tras os registros de tras para frente com limite de 5


//1.	Atualize os registros criados no exercício anterior, com os filtros abaixo (não se esqueça de buscar pelo _id):

//Deixe todos os registros criados acima que estiverem como true para false, e vice-versa.
db.alunas.updateMany({"nome":{$in:["Natalia","Moana","Mirela"]}},{$set:{"nasceuEmSp":"true"}})// determina quem vc quer que seja trocado 


//Atualize a data de nascimento de 2 alunas.
db.alunas.updateMany({"nome":{$in:["Moana","Mirela"]}},{$set:{"dateOfBirth":"11/07/1999"}})

//Inclua pelo menos 3 livros que elas tenham lido.//
db.alunas.updateMany({"nome":{$in:["Natalya","Natalia","Moana","Mirela","Sonia"]}},
{$push:{"livros":{$each:[{"titulo": "Alunas Inteligentes", "leu":"true"},{"titulo": "Mestre Inteligentes", "leu":"true"},{"titulo": "Prefessoras Inteligentes", "leu":"true"}]}}})

//2. Exclua 5 itens dada uma determinada condição:

//Por ordenação de inserção, os dois primeiros que foram inseridos.
db.alunas.updateMany({"nome":{$in:["Moana","Mirela"]}},{$unset:{"dateOfBirth":"11/07/1999"}})

//Por ordem alfabética, os dois primeiros.
db.alunas.find().sort({"nome":1}).pretty()
db.alunas.remove({"id":4},{"id":3})
db.alunas.deleteMany({"id":{$in:[15,6]}})
//Por ordem de data de nascimento decrescente, a primeira data.0
db.alunas.find().sort({"dateOfBirth":-1}).pretty()
db.alunas.deleteOne({"id":10})