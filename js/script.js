// >Creo una costante per richiamare la griglia dall'html

const gridEL = document.querySelector('section.grid');

// >Creo un ciclo per creare gli articoli-quadrati all'interno della griglia
//     >All'interno del ciclo, ogni elemento creato va poi appeso al contenitore
// >Aggiungo un ascoltatore che aggiunga una classe che dà background azzurro ogni volta che una cella viene cliccata e
//     un console.log che stampi il numero indice corrispondente

for (let i = 0; i < 100; i++){
    const squareEl = document.createElement('article');
    squareEl.classList.add('square');
    squareEl.append(i + 1);
    squareEl.addEventListener('click', function(){
        squareEl.classList.add('active');
    });

    gridEL.appendChild(squareEl);

}



