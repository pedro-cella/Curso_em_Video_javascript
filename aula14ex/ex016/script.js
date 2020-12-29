function contar(){
    let numero_inicio = document.getElementById('numero_inicio_id')
    let numero_fim = document.getElementById('numero_fim_id')
    let pular = document.getElementById('passo_id')
    let res = document.getElementById('res')

    if(numero_inicio.value.lenght == 0 || numero_fim.value.lenght == 0 || pular.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO] Faltam dados')
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(numero_inicio.value)
        let f = Number(numero_fim.value)
        let p = Number(pular.value)
        if(p <= 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }else{
            //Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
       
        res.innerHTML += `\u{1F3C1}`
    }
}