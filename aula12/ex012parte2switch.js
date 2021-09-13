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

//condição múltipla, ideal para valores fixos (quando vai seguir somente um caminho e o valor é fixo)
/*switch(expressao)
{
    case valor 1:
        execucao dos comandos
        break;

    case valor 2: 
        execucao dos comandos
        break;

    case valor 3:
        execucao dos comandos
        break;

    default(é como se fosse o else):
        execucao dos comandos
        break;
}*/