/*
Author @joice
*/

var idade = 15

if(idade < 16)
{
    //usado o console.log para mostrar no servido (o node.js)
    console.log("Não vota")
}
else
{
    if(idade >= 16 && idade < 18)
    {
        console.log("Voto facultativo")
    }
    else
    {
        console.log("Vota!!")
    }
    
}