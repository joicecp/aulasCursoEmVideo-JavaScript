function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var cumprimento = window.document.getElementById('cumprimento')
    var data = new Date()
    var dia = data.getDate()
    var mes = data.getMonth() + 1 //adicionado mais 1 por causa do início do mês ser em 0
    var ano = data.getFullYear()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos e ${segundos} segundos do dia ${dia}/${mes}/${ano}`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
        cumprimento.innerHTML = 'BOM DIA'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
        cumprimento.innerHTML = 'BOA TARDE'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
        cumprimento.innerHTML = 'BOA NOITE'
    } 
}