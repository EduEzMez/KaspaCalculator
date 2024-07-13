const pkaspa = "https://api.kaspa.org/info/price?stringOnly=true";
let dato;
const ppkaspa = async() => {
    const res = await fetch(pkaspa);
    dato = await res.json()

    let valorKaspa = document.getElementById("vkaspa")
    valorKaspa.innerHTML = dato

}
ppkaspa()
setInterval(ppkaspa, 3000)

const bton = document.getElementById('btn')
bton.addEventListener('click', ejecutar)

function ejecutar(evento){
    evento.preventDefault();
    let cantidadKaspa = document.getElementById("ckaspa").value
    let resultado = document.getElementById("resultado")
    let cuenta = dato * cantidadKaspa;
    resultado.innerHTML = `<p>$${Math.trunc(cuenta)}</p>`
}



