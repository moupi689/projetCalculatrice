//on recupere les elemnts des touches sous forme d'un tableau
const touches= [...document.getElementsByClassName('button')]; 

//avec la methode .map on crée un tableau qui récupère les keycodes des touches grace à l'attribut "data-"
//dans l'élément HTML.  
const keyCodes= touches.map (elt => elt.dataset.key);
const screen= document.getElementById('screen');

//au click, retourne la target (keycode) de l'élément cliqué et la place dans la variable valeur
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key; 
    calculer(valeur); //appelle la fonction "calculer" et on lui passe "valeur" en argument 
});

//fonction de calcul


const calculer = (valeur) => {
    const indexKeycode = keyCodes.indexOf(valeur); 
    const touche = touches[indexKeycode];

    switch (valeur) {
        //cas ou l'on appuie sur C -> reset
        case '12':                       
            screen.textContent = "";
            break;
        //cas ou l'on appuie sur = -> résultat
        case '13':  
            //la fct intégrée eval récupère la string affichée à l'ecran et calcule le résultat                    //cas où l'on appuie sur = -> résultat       
            const calcul = eval(screen.textContent); 
            screen.textContent = calcul;
            break;
        case '189':
            screen.textContent += "-";
            break;
        default:
            screen.textContent += touche.innerHTML;
    }
};

//en cas d'erreur qui s'affcihe dans la console on la récupère et l'affiche sur l'écran
window.addEventListener('error', (e)=> {
    screen.textContent = "err";
});



    

