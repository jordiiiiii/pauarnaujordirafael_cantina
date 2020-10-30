
/*====================================================
=            Section Functions                       =
====================================================*/
/*=============================================
=            Calculate Total Price            =
=============================================*/
function totalPrice(){

    /* Calcular Preu Plat 1 */
    let element1 = document.getElementById('primer-plat-price').innerHTML;
    let preus = element1.split("€");
    let preuPlat1;

    if (element1 != '') {
        preuPlat1 = preus[0];
    } else {
        preuPlat1 = '0.00';
    }

    console.log('Preu Plat 1: ' + preuPlat1);

    /* Calcular Preu Plat 2 */
    let element2= document.getElementById('segon-plat-price').innerHTML;
    preus = element2.split("€");
    let preuPlat2;

    if (element2 != '') {
        preuPlat2 = preus[0];
    } else {
        preuPlat2 = '0.00';
    }

    console.log('Preu Plat 2: ' + preuPlat2);

    /* Calcular Preu Postre */
    let element3= document.getElementById('postre-price').innerHTML;
    preus = element3.split("€");
    let preuPostre = preus[0];

    if (element3 != '') {
        preuPostre = preus[0];
    } else {
        preuPostre = '0.00';
    }

    console.log('Preu Postre: ' + preuPostre);

    /* Calcular Preu Final */
    let preuFinal = parseFloat(preuPlat1) + parseFloat(preuPlat2) + parseFloat(preuPostre);
    console.log('Preu Total: ' + preuFinal);
    document.getElementById('send-order').innerHTML = `PREU ${preuFinal.toFixed(2)} €`;
}
/*=====  End of Calculate Total Price  ======*/

/*=============================================
=            Add To Menu                      =
=============================================*/
function addToMenu(element){

    let id = element.id;

    if (element.style.backgroundColor != 'transparent') {
        if(id == 'menu_a1' || id == 'menu_a2' || id == 'menu_a3' || id == 'menu_a4'){
            let nom = element.getElementsByTagName("p")[0].innerText;
            document.getElementById('primer-plat-name').innerHTML = nom;
        
            let preu = element.getElementsByTagName("p")[1].innerText;
            document.getElementById('primer-plat-price').innerHTML = preu;
        }
        else if(id == 'menu_b1' || id == 'menu_b2' || id == 'menu_b3' || id == 'menu_b4'){
            let nom = element.getElementsByTagName("p")[0].innerText;
            document.getElementById('segon-plat-name').innerHTML = nom;
        
            let preu = element.getElementsByTagName("p")[1].innerText;
            document.getElementById('segon-plat-price').innerHTML = preu;
        }
        else{
            let nom = element.getElementsByTagName("p")[0].innerText;
            document.getElementById('postre-name').innerHTML = nom;
        
            let preu = element.getElementsByTagName("p")[1].innerText;
            document.getElementById('postre-price').innerHTML = preu;
        }
    }

}
/*=====  End of Add To Menu  ======*/


/*=============================================
=            Change Menu                      =
=============================================*/
function canviElementMenu(element){
    let nomPlat = element.getElementsByTagName("p")[0].innerHTML;
    console.log('Plat: ' + nomPlat);

    let id = element.id;
    console.log('El id és: ' + id);

    let primerPlat = document.getElementById('primer-plat-name').innerHTML;
    let segonPlat = document.getElementById('segon-plat-name').innerHTML;
    let postre = document.getElementById('postre-name').innerHTML;
    
    console.log('Plat1: ' + primerPlat);
    console.log('Plat2: ' + segonPlat);
    console.log('Plat3: ' + postre);

    if (nomPlat == primerPlat) {
        console.log('salome');
        element.style.backgroundColor = 'transparent';
        document.getElementById('primer-plat-name').innerHTML = ''
        document.getElementById('primer-plat-price').innerHTML = '';
    }
    else if (nomPlat == segonPlat) {
        console.log('pinki');
        element.style.backgroundColor = 'transparent';
        document.getElementById('segon-plat-name').innerHTML = '';
        document.getElementById('segon-plat-price').innerHTML = '';
    }
    else if (nomPlat == postre) {
        console.log('Jordi');
        element.style.backgroundColor = 'transparent';
        document.getElementById('postre-name').innerHTML = '';
        document.getElementById('postre-price').innerHTML = '';
    }
    else {
        console.log('pollo');
        if(id == 'menu_a1' || id == 'menu_a2' || id == 'menu_a3' || id == 'menu_a4'){
            document.getElementById("menu_a1").style.backgroundColor = 'transparent';
            document.getElementById("menu_a2").style.backgroundColor = 'transparent';
            document.getElementById("menu_a3").style.backgroundColor = 'transparent';
            document.getElementById("menu_a4").style.backgroundColor = 'transparent';
            console.log('He entrat a menu A');
            element.style.backgroundColor = '#009FD6';
        }
        else if(id == 'menu_b1' || id == 'menu_b2' || id == 'menu_b3' || id == 'menu_b4'){
            document.getElementById("menu_b1").style.backgroundColor = 'transparent';
            document.getElementById("menu_b2").style.backgroundColor = 'transparent';
            document.getElementById("menu_b3").style.backgroundColor = 'transparent';
            document.getElementById("menu_b4").style.backgroundColor = 'transparent';
            console.log('He entrat a menu B');
            element.style.backgroundColor = '#009FD6';
        }
        else{
            document.getElementById("menu_c1").style.backgroundColor = 'transparent';
            document.getElementById("menu_c2").style.backgroundColor = 'transparent';
            document.getElementById("menu_c3").style.backgroundColor = 'transparent';
            document.getElementById("menu_c4").style.backgroundColor = 'transparent';
            console.log('He entrat a menu C');
            element.style.backgroundColor = '#009FD6';
        }
    }

}
/*=====  End of Change Menu  =============*/
/*=====  End of Section Functions  =================*/


/*===================================================
=            Section Add Event Listeners            =
===================================================*/
/*=============================================
=            MENU 1r PLAT                     =
=============================================*/
document.getElementById("menu_a1").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
})

document.getElementById("menu_a2").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
})

document.getElementById("menu_a3").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
})

document.getElementById("menu_a4").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
})
/*=====  End of MENU 1r PLAT  ======*/

/*=============================================
=            MENU 2n PLAT                     =
=============================================*/
document.getElementById("menu_b1").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
})

document.getElementById("menu_b2").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
})

document.getElementById("menu_b3").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
})

document.getElementById("menu_b4").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
})
/*=====  End of MENU 2n PLAT  ======*/

/*=============================================
=            MENU POSTRES                     =
=============================================*/
document.getElementById("menu_c1").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
})

document.getElementById("menu_c2").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
})

document.getElementById("menu_c3").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
})

document.getElementById("menu_c4").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
})
/*=====  End of MENU POSTRES  ======*/
/*=====  End of Section Add Event Listeners  ======*/