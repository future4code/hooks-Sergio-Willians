// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

 // EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = 3
  const largura = 5
  const area = altura * largura

  console.log(area) 
 
}




// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento ) {
  // implemente sua lógica aqui
   anoAtual = 2021
   anoNascimento = 1990
  const idade = anoAtual - anoNascimento

  console.log(idade)
  
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
   peso = 85
   altura = 1.8
  const IMC = (peso / (altura * altura))

  return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade,email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
   nome = "Alice"
   idade = 28
   email = "alice@gmail.com" 

  const minhaMensagem =( `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`)

  console.log(minhaMensagem)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("digite uam cor")  // azul
  const cor2 = prompt("digite a segunda cor") // amarelo
  const cor3 = prompt("digite uma terceira cor") // verde
  const listaDeCores = [cor1, cor2, cor3 ]

  console.log(listaDeCores)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula() {
  // implemente sua lógica aqui
    const frase = 'ola mundo' 
    const fraseMaiscula = frase.toUpperCase()
    console.log(fraseMaiscula)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
     custo = 3000
     valorIngresso = 100
    const quantidadeIngresso = custo / valorIngresso

    console.log(quantidadeIngresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
    string1 = 'tamanho'
    string2 = 'sublime'

   console.log(string1.length)
   console.log(string2.length)

   console.log(string1, string2)

}


// EXERCÍCIO 09
const elemento1 = ["ola","abc"]
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiro = array[0]
  return array
}


// EXERCÍCIO 10
const elemento2 = ["ola","abc"]
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
 const ultimo = array [array,length -1] 

 return array
}





// EXERCÍCIO 11

 const elemento3 = [1,2,3,4,5]
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiro1 = array[0]
  const ultimo5 = array[array.length -1]
  array[0] = ultimo5
  array[array.length -1] = primeiro1
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = "ola"
  string2 = "OLA"
  const string1 == string2
  


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}