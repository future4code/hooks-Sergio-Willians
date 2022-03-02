//1 exercicio  interpretaçao de codigo

//(a) O codigo da como verdadeiro todo numero dividido por 2 ou = a 0
//(b) Todo numero par ou 0
//(c) Todo numero impa

//exercicio 2 
//(a) para retor ao usuario o preço da fruta desejada
//(b) 2.25
//(c) 5

// exercicio 3
//(a) afirmando verdade se o numero for maior q 0

// (b) o codigo esta errado

//(c) const codigo abaixo correto

/*  const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0 ) {
  console.log("Esse número passou no teste") }
 else {
	console.log("Essa mensagem é secreta!!!")
}*/

// 1 exercicico de iscrita de codigo

const idadeUsuario = prompt('digite sua idade')
const numero = Number(idadeUsuario)

 if (numero >= 18){
         console.log("você pode dirigir")}
                 else {
                    console.log("você nao pode dirigir")
     
 }

 // 2
 const horarioEstudo = prompt("digite horario do curso, M para (matutino),V para (vespertino) e N para (notuno) ")
 
 
 if (horarioEstudo.toUpperCase() ==='M'){
          console.log("bom dia !")
 }
                  else if (horarioEstudo.toUpperCase() ==='V'){
                                 console.log("boa tarde !")  
}
                                  else if (horarioEstudo.toUpperCase() ==='B') {
                                                console.log("boa noite !")
} 


//exercicico 3

const estudoHorario = prompt("digite horario do seu curso matutino,vespertino ou noturno")
switch (estudoHorario) {
    case  'matutino':
          console.log("bom dia !")
             break;
               case 'vespertino':
                      console.log("boa tarde!")
                        break;
                          case 'noturno':
                              console.log("boa noite!")
                                 break;
                                   default:
                                        console.log("você nao estuda?")
                                          break;
}


const generoFilme = prompt("o genero do fime e fantansia? sim ou nao?")
const precoIngresso= prompt("a entrada e mesno de 15 reais? sim ou nao? ")
 
function procuraFilme(genero, preco ) {
                 if(genero.toUpperCase()==='SIM' && 
                          preco.toUpperCase()==='SIM') {
                                    console.log("bom filme!")  
  }                                    else{ 
                                           console.log('escolha outro filme!')
  }
}
procuraFilme(generoFilme, precoIngresso)