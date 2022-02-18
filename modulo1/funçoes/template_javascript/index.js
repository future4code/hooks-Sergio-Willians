
//exercicios funçoes

function minhaFuncao(variavel) {
  return variavel * 5  
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

// a R:(2) = 10  / (10) = 50

// b R: nao imprimi nada no console

// 2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


//resposta  i = true o texto contem cenoura
//resposta ii =  true adicionou para aparer tanto minusculo quanto maisculo
// resposta iii = function nao adicionou para imprimir plural

// exercioc de escrita de codigo

// (1)

function sobreMim() {
    console.log("eu sou sergio, tenho 44 anos, moro em janauba e sou estudante")
}

sobreMim()

// (b)

function paraMim( nome, idade, cidade, profissao ) {

  const sergio = nome
  const 45  = idade
   const janauba = cidade
  const tecnico = profissao
  console.log("eu sou ${nome} tenho ,${idade} anos, moro em ${cidade} e sou ${profissao}" )

}
 paraMim()
