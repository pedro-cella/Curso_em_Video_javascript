function tabuada(){
    let numero = document.getElementById('numeroid')
    let tab = document.getElementById('seltab')
    let n = Number(numero.value)

    if(numero.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}