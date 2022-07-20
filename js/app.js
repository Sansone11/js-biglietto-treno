console.log('JS ok');
// chiedi all'utente il numero di chilometri che desidera percorrere
// chiedi l'età del passeggiero
// moltiplica il numero di chilometri per il prezzo al chilometro
// se età è inferiore a 18 moltiplica  per 0.2
// se età e superiore a 65 moltiplica per 0.4
const kilometriUtente =parseInt( prompt ('numero di chilometri'));
console.log ("kilometri: ", kilometriUtente)
const etaUtente =parseInt( prompt ('quanti anni hai?'));
console.log ("eta utente: ",etaUtente)
const prezzoKilometro = 0.21;
const discountOver = 0.4;
const discountUnder = 0.2;
const result = (kilometriUtente * prezzoKilometro);
