console.log('JS ok');
// chiedi all'utente il numero di chilometri che desidera percorrere
// chiedi l'età del passeggiero
// moltiplica il numero di chilometri per il prezzo al chilometro
// se età è inferiore a 18 sottrai il prezzo e moltiplica per 0.2 
// se età e superiore a 65 sottrai il prezzo e moltiplica per 0.4
const kilometriUtente =parseInt( prompt ('numero di chilometri'));

const etaUtente =parseInt( prompt ('quanti anni hai?'));

const prezzoKilometro = 0.21;

const discountOver = 0.4;

const discountUnder = 0.2;

let result = kilometriUtente * prezzoKilometro;

if (etaUtente < 18){
    result = result - (result * 0.2);
}else if(etaUtente > 65){
    result = result - (result * 0.4);
}
document.getElementById('price'); price.innerHTML = result;

