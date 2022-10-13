let res = document.getElementById("res")
let btnadd = document.getElementById("btnadd")
let btnreset = document.getElementById("btnreset")
let numero = 0

function Adicionar(){
    numero = numero + 1
    Mostrar()
    
}
function Resetar(){
    numero = numero = 0
    Mostrar()
}
function Mostrar(){
    const p = document.getElementById("res")
    p.innerHTML = `O contador esta em ${numero} cliques`
}

Mostrar()