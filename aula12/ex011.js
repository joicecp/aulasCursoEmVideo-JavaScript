/*
Author @joice
*/

var idade = 72

if(idade < 18 && idade >= 16)
{
    //usado o console.log para mostrar no servidor (o node.js)
    console.log("Menor de idade")
}
else if(idade >= 60)
{
    console.log("Idoso")
}
else if(idade < 60 && idade >= 18)
{
    console.log("Adulto")
}
else
{
    console.log("Criança/adolescente")
}
