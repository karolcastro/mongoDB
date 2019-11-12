db.alunas.insertMany([
        {
        "_id" : 1,
        "nome" : "Mirela",
        "dateOfBirth" : "10/08/1954",
        "nasceuEmSp" : "true",
        "idade" : 18,
        "livros" : [
                {
                        "titulo" : "HTML",
                        "leu" : "true"
                },
                {
                        "titulo" : "CSS",
                        "leu" : "true"
                },
                {
                        "titulo" : "JavaScript",
                        "leu" : "true"
                },
                {
                        "titulo" : "MongoDB",
                        "leu" : "false"
                }

            ]
        },
        {
                "_id" : 2,
                "nome" : "Manuela",
                "dateOfBirth" : "10/08/1954",
                "nasceuEmSp" : "true",
                "idade" : 35,
                "livros" : [
                        {
                                "titulo" : "HTML",
                                "leu" : "true"
                        },
                        {
                                "titulo" : "MongoDB",
                                "leu" : "true"
                        },
                        {
                                "titulo" : "Clean Code",
                                "leu" : "true"
                        },
                        {
                                "titulo" : "C#",
                                "leu" : "false"
                        }]
                        },
        
                {
                        "_id" : 3,
                        "nome" : "Bela",
                        "dateOfBirth" : "10/08/1954",
                        "nasceuEmSp" : "true",
                        "idade" : 32,
                        "livros" : [
                                {
                                        "titulo" : "JavaScript",
                                        "leu" : "true"
                                },
                                {
                                        "titulo" : "C#",
                                        "leu" : "true"
                                },
                                {
                                        "titulo" : "HTML",
                                        "leu" : "true"
                                },
                                {
                                        "titulo" : "MongoDB",
                                        "leu" : "false"
                                }
                
                        ]
                        },
                        {
                                "_id" : 4,
                                "nome" : "Moana",
                                "dateOfBirth" : "10/08/1954",
                                "nasceuEmSp" : "false",
                                "idade" : 38,
                                "livros" : [
                                        {
                                                "titulo" : "JavaScript",
                                                "leu" : "true"
                                        },
                                        {
                                                "titulo" : "HTML",
                                                "leu" : "true"
                                        },
                                        {
                                                "titulo" : "C#",
                                                "leu" : "true"
                                        },
                                        {
                                                "titulo" : "Cangaceiro Java",
                                                "leu" : "false"
                                        }
                                
                                ]
                        },
                        {
                                "_id" : 5,
                                "nome" : "Lola",
                                "dateOfBirth" : "10/08/1954",
                                "nasceuEmSp" : "false",
                                "idade" : 28,
                                "livros" : [
                                        {
                                                "titulo" : "JavaScript",
                                                "leu" : "true"
                                        },
                                        {
                                                "titulo" : "C#",
                                                "leu" : "true"
                                        },
                                        {
                                                "titulo" : "Clean Code",
                                                "leu" : "true"
                                        },
                                        {
                                                "titulo" : "Cangaceiro Java",
                                                "leu" : "false"
                                        }
                        
                                    ]
                                }
                        
                
        
 ])

 db.alunas.update({"nome":"Moana"},{$set:{"nasceuEmSp":"true"}})// alteracao especifica

 db.alunas.update({"nome":"Kelly"},{$push:{"livros":{"titulo":"Harry Potter", "leu": "true"}}})//acresenta a informacao do id que deseja a alatercao

 db.alunas.remove({"idade":28})// nao pode pq remove tudo que tiver idade

 db.alunas.update({"nome":"Maria Eduarda"},{$unset:{"nasceuEmSp":"false"}})// altera
 