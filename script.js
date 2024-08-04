const pkaspa = "https://api.kaspa.org/info/price?stringOnly=true";
let dato;

//valor agregado
const valorObjetivo = 0.1715; 
const botToken = '7025151223:AAEpZ-ga8wmCd5tsCGgh_zhiMmoyIuOKUIs'; // Tu token de bot de Telegram
const chatId = '1346927197'; // Tu chat ID

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

async function enviarMensajeTelegram() {
    const message = `El valor de Kaspa ha alcanzado el objetivo de ${valorObjetivo}.`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log('Mensaje enviado:', result);
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
    }
}

