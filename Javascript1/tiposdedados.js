/* 
1. String -> Textos
"Textos com aspas duplas"
'Textos com Aspas Simples'
`Texto com a Crase`

2. Numbers -> Numeros
numeros fracionados é . não pode ter ,

3. Boolean -> Boleano
0010000100010100
true 1 
false 0

4. Object -> Objeto


*/
const name = "Nuno"
const age = 24
const adress = "Rua dos Bobos, n° 0"

const nuno = {
    name: "Nuno"
    
}

const texto1 = "Textos com aspas duplas"
const texto2 = 'Textos com aspas simples'
const texto3 = `Textos com crase`
 /*
 Template Literals / Template String

com crase pode pular linha avontade.
 pra por uma variavel dentro de uma variavel entre crase
 é ${nomeDaVariavel}
 ou ${10 + 20}
  */

const myAge = 24
const myString = `Minha idade é ${myAge}`
const number1 = 30 / 3
const fakeNumber = "30 / 3"

console.log(texto1)
console.log(texto2)
console.log(texto3)
console.log(myString)
console.log(number1)
console.log(fakeNumber)
