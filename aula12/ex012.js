/*
Author @joice
*/

//variável para pegar a hora (tem que ser Date)
var agora = new Date()

var hora = agora.getHours()

console.log("Agora são exatamente " + hora + " horas")

//condição aninhada, pode ter quantos else if quiser
if(hora < 12)
{
    console.log("Bom dia")
}
else if(hora <= 18)
{
    console.log("Boa tarde")
}
else if(hora < 00)
{
    console.log("Boa noite")
}
else
{
    console.log("Boa madrugada")
}