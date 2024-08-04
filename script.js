const pkaspa = "https://api.kaspa.org/info/price?stringOnly=true";
let dato;

//valor agregado
const valorObjetivo = 0.18; 

const ppkaspa = async() => {
    const res = await fetch(pkaspa);
    dato = await res.json()

    let valorKaspa = document.getElementById("vkaspa")
    valorKaspa.innerHTML = dato;

    if (dato == valorObjetivo) {
        enviarMensajeWhatsApp();
    }
};
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

function enviarMensajeWhatsApp() {
    const phoneNumber = '1133505823'; // Número de teléfono con código de país
    const message = `El valor de Kaspa ha alcanzado el objetivo de ${valorObjetivo}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

