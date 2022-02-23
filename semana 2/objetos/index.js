

//a
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//a R: Mathesus Nachetergaele
// virginia cavendish
// {canal , globo, horaio 14hrs}


const cachorro ={
    nome:"juca",
    idade: 3,
    raca:"SRD"
}
const gato = {...cachorro, nome:"juba"}
const tartaruga = {...gato, nome:gato.nome.replaceAll("a","o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//(a) R: cahorro = nome juca, idade 3, raca: 'SRD'
// gato = nome: juba , idade: 3 , raca :'SRD'
// taratura = nome: jubo, iadade 3, raca 'SRD'

//(b)R: copia todas as informaçoes do objeto

// Exercicio de ecrita 
// 1 // Exemplo de entrada

const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 


 console.log(`Eu sou ${pessoa.nome}, mas pode mim chamar de ${pessoa.apelidos[0]},${pessoa.apelidos[1]},ou ${pessoa.apelidos[2]}`)

 //(b)

 const novaPessoa = {
     ...pessoa 

    
     
 }

 pessoa.apelidos[0] = "dinha"
     pessoa.apelidos[1] = 'dindinha'
     pessoa.apelidos[2] = 'inha'

console.log(novaPessoa.apelidos)

 
//(2) a

const aluno = {
nome:"paulo",
idade: 25,
profissao: "cantor"
}

const aluno2 = {
    nome:"sergio",
    idade:45,
    profisao:"supervisor"
}
function alunos(aluno){
    
    return[ 'sergio','45','supervisor']

}
alunos(aluno2)
 console.log(alunos)
// 3 

const carrinho = []

const fruta1 = {
    nome:'uva' ,
    disponibildae: true
}

const fruta2 = {
    nome: 'melancia' ,
    disponibilidade: true
}

const fruta3 = {
    nome: 'laranja',
    disponibilidade: true
}
 function adicionarCarrinho(frutas){
    carrinho.push(frutas)
 }


 adicionarCarrinho(fruta1)
 adicionarCarrinho(fruta2)
 adicionarCarrinho(fruta3)
 console.log(carrinho)