mongoimport --db reprograma -c herois --jsonArray --file desafioHerois.json

mongoimport --db reprograma -c alunas --jsonArray --file alunas.json

//Você receberá um arquivo com o formato JSON contendo alguns personagens de quadrinhos e/ou desenhos animados e você deverá realizar as alterações que foram solicitadas abaixo pelo cliente.

//1.	Selecione todos os registro;
db.herois.find().pretty()

//2.	Selecione apenas o primeiro registro;
db.herois.findOne() 

//3.	Selecione todos os registros em que o nome seja igual a ‘Carla’ ou a quantidade de gatos seja igual a 2;
db.herois.find({ $or: [{"nome" :"Carla"}, {"quantidadeGatos": 2}] }).pretty()
//4.	Selecione todos os registros em que o local de nascimento seja igual a Nova York e necessariamente que a quantidade de cachorros seja igual a 1;
db.herois.find({ $and: [{"local": "Nova York"}, {"quantidadeCachorros": 1}] }).pretty()
//5.	Selecione todos os registros em que a quantidade de gatos seja igual a 4 ou a quantidade de cachorros seja igual a 2;
db.herois.find({ $or: [{"quantidadeGatos": 4}, {"quantidadeCachorros": 2}] }).pretty()
//6.	Selecione todos os registros em que o nome comece com C;
db.herois.find({"nome":/^C/i }).pretty() 
//7.	Selecione todos os registros em que o nome comece com H;

//8.	Selecione todos os registros em que o nome termine com a;

//9.	Selecione todos os registros em que o nome contenha s;

//10.	Selecione todos os registros em que o nome contenha ‘e’ ou ‘o’;

//11.	Insira 3 novos super-heróis;

//12.	Delete 1 super-herói em que o nome seja igual a Capitão América;

//13.	Atualize a quantidade de gatos em que o usuário com o registro de nome ‘Thor’ possui. Atualize a quantidade de gatos de ‘5’ para ‘7’;

//14. Atualize o registro da Mulher Maravilha para capa = true;

//15.	Selecione todos os registros que foram trabalhados e exporte para um arquivo JSON.