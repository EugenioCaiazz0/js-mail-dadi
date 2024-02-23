const mailControl = document.getElementById(`mailInput`);

const btnConferma = document.querySelector(`.btnConferma`);

const mailValide = [".ugodeughi", ".boolean"];
const mailValideLength = mailValide.length;

btnConferma.addEventListener('click',function() 
{ 
    console.log(mailControl.value);

    let mailConfirmed = false;

    for (i = 0; i < mailValideLength; i++) {
        if (mailControl.value.includes(mailValideLength[i])) {
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