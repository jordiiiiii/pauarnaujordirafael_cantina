/*====================================================
=            Section Onclick Button                  =
====================================================*/
/*=============================================
=            Previous Button                  =
=============================================*/
document.getElementById("back-to-index").onclick = function () { location.href = "index.php"; };
/*=====  End of Previous Button  ======*/

/*=============================================
=            Next Button                      =
=============================================*/
document.getElementById("send-order").onclick = function () { 
            
    let comanda = new Map();

    let nomPlat1 = document.getElementById('primer-plat-name').innerHTML;
    let nomPlat2 = document.getElementById('segon-plat-name').innerHTML;
    let nomPostre = document.getElementById('postre-name').innerHTML;

    if (nomPlat1 != '') {
        comanda['PrimerPlat'] = nomPlat1 + '_' + document.getElementById('primer-plat-price').innerHTML + '_1';
    }
    if (nomPlat2 != '') {
        comanda['SegonPlat'] = nomPlat2 + '_' + document.getElementById('segon-plat-price').innerHTML + '_1';
    }
    if (nomPostre != '') {
        comanda['Postre'] = nomPostre + '_' + document.getElementById('postre-price').innerHTML + '_1';
    }

    console.log(comanda);
    console.log(JSON.stringify(comanda));

    if (nomPlat1 != '' || nomPlat2 != '' || nomPostre != '') {  
        localStorage.setItem('comandaMenu', JSON.stringify(comanda));
        location.href = "formulari.php";
    }
    else {
        alert('Selecciona algun producte, carallot!');
    }

};
/*=====  End of Next Button  ==========*/
/*=====  End of Section Onclick Button  ============*/


/*====================================================
=            Section Functions                       =
====================================================*/
/*=============================================
=            Calculate Total Price            =
=============================================*/
function totalPrice() {

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
function addToMenu(element) {

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
=            Add To Carta            =
=============================================*/
function addToCarta(element) {

    let id = element.id;
    
    let unitats = element.innerHTML;
    console.log(unitats);

    // Select parent of parent
    let parentOfparent = element.parentElement.parentElement;
    console.log(parentOfparent);
    
    // Select First Child p
    let nom = parentOfparent.firstChild.nextSibling.innerHTML;

    // Select Second Child p
    let preu = (parseFloat(parentOfparent.childNodes[3].innerHTML) * parseFloat(element.innerHTML)).toFixed(2) + ' €';

    if (1) {
        if(id == 'num1' || id == 'num2' || id == 'num3' || id == 'num4'){
            document.getElementById('primer-plat-name').innerHTML = nom;
        
            document.getElementById('primer-plat-price').innerHTML = preu;
        }
        else if(id == 'num5' || id == 'num6' || id == 'num7' || id == 'num8'){
            document.getElementById('segon-plat-name').innerHTML = nom;
        
            document.getElementById('segon-plat-price').innerHTML = preu;
        }
        else{
            document.getElementById('postre-name').innerHTML = nom;
        
            document.getElementById('postre-price').innerHTML = preu;
        }
    }
}
/*=====  End of Add To Carta  ======*/


/*=============================================
=            Change Menu                      =
=============================================*/
function canviElementMenu(element) {
    let nomPlat = element.getElementsByTagName("p")[0].innerHTML;
    console.log('Plat: ' + nomPlat);

    let id = element.id;
    console.log('El id és: ' + id);

    let primerPlat = document.getElementById('primer-plat-name');
    let segonPlat = document.getElementById('segon-plat-name');
    let postre = document.getElementById('postre-name');
    
    console.log('Plat1: ' + primerPlat.innerHTML);
    console.log('Plat2: ' + segonPlat.innerHTML);
    console.log('Plat3: ' + postre.innerHTML);

    if (nomPlat == primerPlat.innerHTML) {
        console.log('deseleccionar primer plat');
        element.style.backgroundColor = 'transparent';
        primerPlat.innerHTML = ''
        document.getElementById('primer-plat-price').innerHTML = '';
        elementInnerHTMLIsEmpty(primerPlat);
    }
    else if (nomPlat == segonPlat.innerHTML) {
        console.log('deseleccionar segon plat');
        element.style.backgroundColor = 'transparent';
        segonPlat.innerHTML = '';
        document.getElementById('segon-plat-price').innerHTML = '';
        elementInnerHTMLIsEmpty(segonPlat);
    }
    else if (nomPlat == postre.innerHTML) {
        console.log('deseleccionar postre');
        element.style.backgroundColor = 'transparent';
        postre.innerHTML = '';
        document.getElementById('postre-price').innerHTML = '';
        elementInnerHTMLIsEmpty(postre);
    }
    else {
        // Canvi a element seleccionat
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

/*=============================================
=            Name Right Side Is Not Empty     =
=============================================*/
function elementInnerHTMLIsNotEmpty(element){
    if (element.innerHTML != '') {
        // Select parent of parent
        let parentOfparent = element.parentElement.parentElement;

        // Change color of first child "h4"
        parentOfparent.firstChild.nextSibling.style.color = 'var(--main-graphic-color)';

        // Change border bottom color of the Div
        parentOfparent.style.borderBottom = '2px solid var(--main-graphic-color)';
    }
}
/*=====  End of Name Right Side Is Empty  ======*/

/*=============================================
=            Name Right Side Is Empty         =
=============================================*/
function elementInnerHTMLIsEmpty(element){
    if (element.innerHTML == '') {
        // Select parent of parent
        let parentOfparent = element.parentElement.parentElement;

        // Change color of first child "h4"
        parentOfparent.firstChild.nextSibling.style.color = 'var(--main-color)';

        // Change border bottom color of the Div
        parentOfparent.style.borderBottom = '1px solid var(--main-color)';
    }
}
/*=====  End of Name Right Side Is Empty  ======*/
/*=====  End of Section Functions  =================*/



/*===================================================
=            Section Add Event Listeners Menu       =
===================================================*/
/*=============================================
=            MENU 1r PLAT                     =
=============================================*/
document.getElementById("menu_a1").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
    let element = document.getElementById('primer-plat-name');
    elementInnerHTMLIsNotEmpty(element);
})

document.getElementById("menu_a2").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
    let element = document.getElementById('primer-plat-name');
    elementInnerHTMLIsNotEmpty(element);
})

document.getElementById("menu_a3").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
    let element = document.getElementById('primer-plat-name');
    elementInnerHTMLIsNotEmpty(element);
})

document.getElementById("menu_a4").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
    let element = document.getElementById('primer-plat-name');
    elementInnerHTMLIsNotEmpty(element);
})
/*=====  End of MENU 1r PLAT  ======*/

/*=============================================
=            MENU 2n PLAT                     =
=============================================*/
document.getElementById("menu_b1").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
    let element = document.getElementById('segon-plat-name');
    elementInnerHTMLIsNotEmpty(element);
})

document.getElementById("menu_b2").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
    let element = document.getElementById('segon-plat-name');
    elementInnerHTMLIsNotEmpty(element);
})

document.getElementById("menu_b3").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
    let element = document.getElementById('segon-plat-name');
    elementInnerHTMLIsNotEmpty(element);
})

document.getElementById("menu_b4").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
    let element = document.getElementById('segon-plat-name');
    elementInnerHTMLIsNotEmpty(element);
})
/*=====  End of MENU 2n PLAT  ======*/

/*=============================================
=            MENU POSTRES                     =
=============================================*/
document.getElementById("menu_c1").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
    let element = document.getElementById('postre-name');
    elementInnerHTMLIsNotEmpty(element);
})

document.getElementById("menu_c2").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
    let element = document.getElementById('postre-name');
    elementInnerHTMLIsNotEmpty(element);
})

document.getElementById("menu_c3").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
    let element = document.getElementById('postre-name');
    elementInnerHTMLIsNotEmpty(element);
})

document.getElementById("menu_c4").addEventListener('click', function(){
    canviElementMenu(this);
    addToMenu(this);
    totalPrice();
    let element = document.getElementById('postre-name');
    elementInnerHTMLIsNotEmpty(element);
})
/*=====  End of MENU POSTRES  ======*/
/*=====  End of Section Add Event Listeners Menu ======*/


/*===================================================
=            Section Add Event Listeners Carta      =
===================================================*/
// document.getElementById('remove1').addEventListener('click', function(){
//     let element = document.getElementById('num1');
//     let num = element.innerHTML;
//     if (num == 0) {
//         element.innerHTML = 0;
//     } else {
//         element.innerHTML = parseInt(num) - 1;
//     }

//     addToCarta(element);
// })

// document.getElementById('add1').addEventListener('click', function(){
//     let element = document.getElementById('num1');
//     let num = element.innerHTML;
//     element.innerHTML = parseInt(num) + 1;

//     addToCarta(element);
// })

// document.getElementById('remove2').addEventListener('click', function(){
//     let element = document.getElementById('num2');
//     let num = element.innerHTML;
//     if (num == 0) {
//         element.innerHTML = 0;
//     } else {
//         element.innerHTML = parseInt(num) - 1;
//     }

//     addToCarta(element);
// })

// document.getElementById('add2').addEventListener('click', function(){
//     let element = document.getElementById('num2');
//     let num = element.innerHTML;
//     element.innerHTML = parseInt(num) + 1;

//     addToCarta(element);
// })

// document.getElementById('remove3').addEventListener('click', function(){
//     let element = document.getElementById('num3');
//     let num = element.innerHTML;
//     if (num == 0) {
//         element.innerHTML = 0;
//     } else {
//         element.innerHTML = parseInt(num) - 1;
//     }
//     addToCarta(element);
// })

// document.getElementById('add3').addEventListener('click', function(){
//     let element = document.getElementById('num3');
//     let num = element.innerHTML;
//     element.innerHTML = parseInt(num) + 1;

//     addToCarta(element);
// })

// document.getElementById('remove4').addEventListener('click', function(){
//     let element = document.getElementById('num4');
//     let num = element.innerHTML;
//     if (num == 0) {
//         element.innerHTML = 0;
//     } else {
//         element.innerHTML = parseInt(num) - 1;
//     }

//     addToCarta(element);
// })

// document.getElementById('add4').addEventListener('click', function(){
//     let element = document.getElementById('num4');
//     let num = element.innerHTML;
//     element.innerHTML = parseInt(num) + 1;

//     addToCarta(element);
// })

// document.getElementById('remove5').addEventListener('click', function(){
//     let element = document.getElementById('num5');
//     let num = element.innerHTML;
//     if (num == 0) {
//         element.innerHTML = 0;
//     } else {
//         element.innerHTML = parseInt(num) - 1;
//     }

//     addToCarta(element);
// })

// document.getElementById('add5').addEventListener('click', function(){
//     let element = document.getElementById('num5');
//     let num = element.innerHTML;
//     element.innerHTML = parseInt(num) + 1;

//     addToCarta(element);
// })

// document.getElementById('remove6').addEventListener('click', function(){
//     let element = document.getElementById('num6');
//     let num = element.innerHTML;
//     if (num == 0) {
//         element.innerHTML = 0;
//     } else {
//         element.innerHTML = parseInt(num) - 1;
//     }

//     addToCarta(element);
// })

// document.getElementById('add6').addEventListener('click', function(){
//     let element = document.getElementById('num6');
//     let num = element.innerHTML;
//     element.innerHTML = parseInt(num) + 1;

//     addToCarta(element);
// })

// document.getElementById('remove7').addEventListener('click', function(){
//     let element = document.getElementById('num7');
//     let num = element.innerHTML;
//     if (num == 0) {
//         element.innerHTML = 0;
//     } else {
//         element.innerHTML = parseInt(num) - 1;
//     }

//     addToCarta(element);
// })

// document.getElementById('add7').addEventListener('click', function(){
//     let element = document.getElementById('num7');
//     let num = element.innerHTML;
//     element.innerHTML = parseInt(num) + 1;

//     addToCarta(element);
// })

// document.getElementById('remove8').addEventListener('click', function(){
//     let element = document.getElementById('num8');
//     let num = element.innerHTML;
//     if (num == 0) {
//         element.innerHTML = 0;
//     } else {
//         element.innerHTML = parseInt(num) - 1;
//     }

//     addToCarta(element);
// })

// document.getElementById('add8').addEventListener('click', function(){
//     let element = document.getElementById('num8');
//     let num = element.innerHTML;
//     element.innerHTML = parseInt(num) + 1;

//     addToCarta(element);
// })

// document.getElementById('remove9').addEventListener('click', function(){
//     let element = document.getElementById('num9');
//     let num = element.innerHTML;
//     if (num == 0) {
//         element.innerHTML = 0;
//     } else {
//         element.innerHTML = parseInt(num) - 1;
//     }

//     addToCarta(element);
// })

// document.getElementById('add9').addEventListener('click', function(){
//     let element = document.getElementById('num9');
//     let num = element.innerHTML;
//     element.innerHTML = parseInt(num) + 1;

//     addToCarta(element);
// })

// document.getElementById('remove10').addEventListener('click', function(){
//     let element = document.getElementById('num10');
//     let num = element.innerHTML;
//     if (num == 0) {
//         element.innerHTML = 0;
//     } else {
//         element.innerHTML = parseInt(num) - 1;
//     }

//     addToCarta(element);
// })

// document.getElementById('add10').addEventListener('click', function(){
//     let element = document.getElementById('num10');
//     let num = element.innerHTML;
//     element.innerHTML = parseInt(num) + 1;

//     addToCarta(element);
// })

// document.getElementById('remove11').addEventListener('click', function(){
//     let element = document.getElementById('num11');
//     let num = element.innerHTML;
//     if (num == 0) {
//         element.innerHTML = 0;
//     } else {
//         element.innerHTML = parseInt(num) - 1;
//     }

//     addToCarta(element);
// })

// document.getElementById('add11').addEventListener('click', function(){
//     let element = document.getElementById('num11');
//     let num = element.innerHTML;
//     element.innerHTML = parseInt(num) + 1;

//     addToCarta(element);
// })

// document.getElementById('remove12').addEventListener('click', function(){
//     let element = document.getElementById('num12');
//     let num = element.innerHTML;
//     if (num == 0) {
//         element.innerHTML = 0;
//     } else {
//         element.innerHTML = parseInt(num) - 1;
//     }

//     addToCarta(element);
// })

// document.getElementById('add12').addEventListener('click', function(){
//     let element = document.getElementById('num12');
//     let num = element.innerHTML;
//     element.innerHTML = parseInt(num) + 1;

//     addToCarta(element);
// })
/*=====  End of Section Add Event Listeners Carta ======*/