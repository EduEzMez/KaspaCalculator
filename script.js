const API_KASPA = "https://api.kaspa.org/info/price?stringOnly=true";
let dato;

const VALOR_KASPA = async() => {
    const RESULTADO = await fetch(API_KASPA);
    dato = await RESULTADO.json()
    //console.log(dato)
    let valorKaspa = document.getElementById("vkaspa")
    valorKaspa.innerHTML = dato;
};

VALOR_KASPA()
setInterval(VALOR_KASPA, 3000)

const bton = document.getElementById('btn')
bton.addEventListener('click', ejecutar)

function ejecutar(evento){
    evento.preventDefault();
    let cantidadKaspa = document.getElementById("ckaspa").value
    let resultado = document.getElementById("resultado")
    let cuenta = dato * cantidadKaspa;
    resultado.innerHTML = `<p>$${Math.trunc(cuenta)}.-</p>`
}

