/* creiamo una sezione di immagini carosello, dove cliccando sulle freccette esse facciano sorrere le varie immagini */



/* creiamo le stringhe per implementarle all'interno dei div che creeremo */

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


/* andiamo a definire le variabili che ci occorrono */

let itemsContainer = document.querySelector(".items");

let thumbsContainer = document.querySelector(".thumbs");

/* creiamo delle stringhe vuote che andranno riempite successivamente mediante i cicli */

let itemElement = "";

let thumbElement = "";

/* creiamo un ciclo per andare a creare i div all'interno dell'html con le classi associate */

for (let i = 0; i < items.length; i++){

    itemElement +=`
    <div class="item">

        <img src="${items[i]}" alt="">

        <div class="text">

            <h3>${title[i]}</h3>

            <p>${text[i]}</p>

        </div>

    </div>`;

    thumbElement += `
    <div class="thumb">

        <img src="${items[i]}" alt="">

    </div>`;

}

/* creaiamo delle variabili per stampare il tutto su html */

itemsContainer.innerHTML = itemElement;

document.getElementsByClassName("item")[0].classList.add("active");

thumbsContainer.innerHTML += thumbElement;

document.getElementsByClassName("thumb")[0].classList.add("active");

let posizioneClick = 0;

/* creiamo un'azione di click per fare in modo che andando alla successiva immagine essa si presenti sullo schermo */

document.querySelector(".avanti").addEventListener("click",

    function(){

        if (posizioneClick < items.length -1){

            ++posizioneClick;

        } else {

            posizioneClick = 0;

        }

        document.querySelector(".item.active").classList.remove("active");

        document.getElementsByClassName("item")[posizioneClick].classList.add("active");

        document.querySelector(".thumb.active").classList.remove("active");

        document.getElementsByClassName("thumb")[posizioneClick].classList.add("active");

    }

)

/* facciamo la stessa identica cosa ma per andare all'immagine precedente */

document.querySelector(".indietro").addEventListener("click",

    function(){

        if (posizioneClick === 0){

            posizioneClick = items.length -1;

        } else {

            --posizioneClick;

        }

        document.querySelector(".thumb.active").classList.remove("active");

        document.querySelector(".item.active").classList.remove("active");

        document.getElementsByClassName("item")[posizioneClick].classList.add("active");

        document.getElementsByClassName("thumb")[posizioneClick].classList.add("active");

    }

)
