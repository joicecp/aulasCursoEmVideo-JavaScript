/*
Author @joice
*/

var agora = new Date()

var diaSem = agora.getDay()
/*
O javascript lê os dias da semana da seguinte forma:
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sexta
*/

console.log("Dia número: " + diaSem)

switch (diaSem) 
{
    case 0:
        console.log("Hoje é Domingo")
        break

    case 1:
        console.log("Hoje é Segunda")
        break

    case 2:
        console.log("Hoje é Terça")
        break

    case 3:
        console.log("Hoje é Quarta")
        break

    case 4:
        console.log("Hoje é Quinta")
        break

    case 5:
        console.log("Hoje é Sexta")
        break

    case 6:
        console.log("Hoje é sábado")
        break
    default:
        console.log("[ERRO] Dia inválido")
        break

    //tem que colocar o break, porque senão ele imprime no console, tudo o que for a partir do dia em que é executado o código

}