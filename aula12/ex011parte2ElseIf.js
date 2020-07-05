/*
Author @joice
*/

var idade = 16

console.log("Você tem " + idade +  " anos")

//até 15 anos não vota
if(idade < 16)
{
    //usado o console.log para mostrar no servido (o node.js)
    console.log("Não vota")
}
//acima de 16
else if (idade < 18 || idade > 65)
{
    console.log("Voto facultativo")
}
else
{
    console.log("Vota!!")
}