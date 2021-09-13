/*
Author @joice
*/

//variável para pegar a hora (tem que ser Date)
var agora = new Date()

var hora = agora.getHours();
var minute = agora.getMinutes();
var second = agora.getSeconds();
var dayOfMonth = agora.getDate();
var monthOfYear = agora.getMonth();
var yearOfEra = agora.getFullYear();

//para usar o ${variavel} precisa estar em aspa simples
console.log(`Agora são exatamente ${hora} horas, ${minute} minutos e ${second} segundos, no dia ${dayOfMonth} do mês ${monthOfYear} do ano de ${yearOfEra}.`);
//console.log("Agora são exatamente " +  hora + " horas.");

//condição aninhada, pode ter quantos else if quiser, valores dinâmicos e aplicável para todo tipo de situação
if(hora >= 6 && hora <= 12)
{
    console.log("Bom dia")
}
else if(hora > 12 && hora <= 18)
{
    console.log("Boa tarde")
}
else if(hora > 18 && hora < 23 && minute <= 59 && second <= 59)
{
    console.log("Boa noite")
}
else
{
    console.log("Boa madrugada")
}