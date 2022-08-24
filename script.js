
const screen= document.getElementById('screen');

document.addEventListener('click', (e) => {
    const value = e.target.getAttribute('id'); 
    console.log(value);
      
        switch (value) {
            //cas ou l'on appuie sur C -> reset
            case 'c':                       
                screen.textContent = "";
                break;
            //cas ou l'on appuie sur = -> résultat
            case 'sum':  
                //la fct intégrée eval récupère la string affichée à l'ecran et calcule le résultat                    //cas où l'on appuie sur = -> résultat       
                const calcul = eval(screen.textContent); 
                screen.textContent = calcul;
                break;
            case 'min':
                screen.textContent += "-";
                break;
            default:
                screen.textContent += value;
        }
});

//en cas d'erreur qui s'affcihe dans la console on la récupère et l'affiche sur l'écran
window.addEventListener('error', (e)=> {
    screen.textContent = "err";
});



    

