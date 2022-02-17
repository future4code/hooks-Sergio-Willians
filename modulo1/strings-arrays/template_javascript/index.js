// 1 indique todas as mensagens impresssas no console

let array
console.log('a.  ', array)
// R: a.undefined

array = null
console.log('b. ',array)
 //R: b. null

 array = [3,4,5,6,7,8,9,10,11,12,13]
 console.log('c.',array.length)
 //R : c, = 11

 let i = 0
 console.log('d. ',array[i])
 //R: d. = 3

 array[i+1] = 19
 console.log('e. ',array)
 //R: e. = (11) [3,19,5,6,7,8,9,10,12,13]

 const valor = array[i+6]
 console.log('f.',valor)
 //R: f = 9

 // 2

 const frase = prompt('digite uma frase')
 console.log(frase.toUpperCase().replaceAll("A","I"),frase.length)

//R: SUBI NUM ONIBUS EM MIRROCOS trocando a palavra A por I


// exercio de escrita de codigo
/* 1 Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida,
 Imprima no console a seguinte mensagem:
  e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!*/ 

const nome = prompt ('qual o seu nome')
const email = prompt('qual o seu email')
console.log( " o email " + email +  " usuario  cadastrado com sucesso "+"seja bem vindo " + nome)


/*  2 Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.
 Em seguida, siga os passos: */

 const comidaPredileta = ["feijoada", "macarronada", "carne assada" , "lasanha" , "buchada" ,]
console.log(comidaPredileta)

/* (a) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ",
 (b) seguida por cada uma das comidas, uma embaixo da outra.
 */
console.log("essas sao minhas comidas preferidas")
console.log("feijoada")
console.log("macarronada")
console.log("carne assada")
console.log("lasanha")
console.log("buchada")

/* Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário.
 Imprima no consolea nova lista */

const comidaPreferida = prompt ("qual sua comida preferida")
console.log(comidaPreferida)
 comidaPredileta . splice(1,1)
 console.log(comidaPredileta)
 
 comidaPredileta . push(comidaPreferida)
 console.log(comidaPredileta)

 //)3 (a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas

 const listaDeTarefas = [ "almoçar" , "trabalhar" , "estudar" ]


 /* ) Pergunte ao usuário 3 tarefas que ele precise realizar no dia 
 e armazene-as, uma por uma, no array */

 const tarefas = prompt ("digite 3 tarefas realizadas no dia")

 // (c)  Imprima o array no console
 
 console.log(listaDeTarefas)


 /*(d) Peça ao usuário que digite o índice de uma tarefa
  que ele já realizou: 0, 1 ou 2  */
  const tarefaRealizada = Number(prompt("indiqui uma tarefa ja realizada "))// 1

  //(e)Remova da lista o item de índice que o usuário escolheu

   listaDeTarefas.splice(tarefaRealizada ,1)
   console.log(listaDeTarefas)



  