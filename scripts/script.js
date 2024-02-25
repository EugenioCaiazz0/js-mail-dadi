const mailControl = document.getElementById(`mailInput`);

const btnConferma = document.querySelector(`.btnConferma`);

const mailValide = [".ugodeughi", ".boolean"];

console.log(`Lunghezza array ${mailValide.length}`);

btnConferma.addEventListener('click',function() 
{ 
    console.log(mailControl.value);

    let mailConfirmed = false;

    for (i = 0; i < mailValide.length; i++) {
        if (mailControl.value.includes(mailValide[i])) {
            alert("E-mail confermata");
            mailConfirmed = true;
        } 
    }

    if (mailConfirmed == false) {
        alert("Errore, dati inseriti non validi");
    }
    /* 
    let i = 0;
    while (i < mailValideLength) {
        if (mailControl.value.includes(mailValideLength[i])) {
            alert("E-mail confermata");
        } else {
            i++
            alert("Errore, dati inseriti non validi");
        }
    } 
    */

})


/*DICE ROLL SNACK*/

const btnDice = document.querySelector(`.btnDice`);

btnDice.addEventListener('click',function()
{
    let playerRoll;
    let houseRoll;

    playerRoll = Math.ceil(Math.random() * 6);
    houseRoll = Math.ceil(Math.random() * 6);

   
    console.log("Il giocatore ottiene " + playerRoll);
    console.log("La casa ottiene " + houseRoll);

    document.getElementById('diceResult').innerHTML = 
    ` <p>Il giocatore ottiene ${playerRoll} </p> `;
    
    document.getElementById('diceResult').innerHTML = 
    ` <p>La casa ottiene ${houseRoll} </p> `;

    if ( playerRoll > houseRoll) {
        document.getElementById('diceResult').innerHTML = 
    ` <p>Hai vinto, complimenti! </p> `;
    } else if (playerRoll < houseRoll) {
        document.getElementById('diceResult').innerHTML = 
        ` <p>Hai perso, ritenta! </p> `;
    } else if (playerRoll == houseRoll) {
        document.getElementById('diceResult').innerHTML = 
        ` <p>Hai pareggiato, ritira i dadi! </p> `;
    }

})