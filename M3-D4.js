/*///////// Funzione conteggio Offerte del giorno ////////////*/

let card = document.getElementsByClassName("card")
let title = document.getElementById("title")

if (card.length > 0) {
    const newTitle = `Le offerte della settimana sono: ${card.length}`;/*${card.length} viene utilizzato per inserire all'interno della stringa Le offerte della settimana: ".."" il valore della proprietà length*/
    title.innerText = newTitle;
  } else {
    console.log('Nessuna offerta trovata.');
  }

/*/////////////////////////////////////////////////////////////*/