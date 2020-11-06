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
if (checkLunchTime()) {
    document.getElementById("send-order").onclick = function () { 
                
        let comandamenu = new Map();
    
        let nomPlat1 = document.getElementById('primer-plat-name').innerHTML;
        let nomPlat2 = document.getElementById('segon-plat-name').innerHTML;
        let nomPostre = document.getElementById('postre-name').innerHTML;


        if (nomPlat1 != '') {
            comandamenu[nomPlat1] = 1;
        }
        if (nomPlat2 != '') {
            comandamenu[nomPlat2] = 1;
        }
        if (nomPostre != '') {
            comandamenu[nomPostre] = 1;
        }
    
        console.log(comandamenu);
        console.log(JSON.stringify(comandamenu));
    
        if (nomPlat1 == '' && nomPlat2 == '' && nomPostre == '') {  
            alert('Selecciona algun producte, carallot!');
        }
        else if (nomPlat1 == '' &&  nomPlat2 == '' || nomPlat1 == '' &&  nomPostre == '' || nomPlat2 == '' &&  nomPostre == '') {
            alert(`Ok Boomer, però agafa un producte més. De bon rollo t'ho dic`);
        }
        else {
            console.log(JSON.stringify(comandamenu));
            localStorage.setItem('comanda', JSON.stringify(comandamenu));
            location.href = "formulari.php"; ////////////////////////////////////////////// Comenta si no vols passar de pàgina
        }
    };

} else {
    document.getElementById("send-order").onclick = function () { 
                
        let comandamati = new Map();
    
        let stored = document.getElementById('zona1').getElementsByTagName('div');

        if (stored) {
            let preus;
            for (let i = 0; i < stored.length; i++) {
                const element = stored[i];
                let producte = element.childNodes[0].innerHTML;
                producte = producte.split(" x");
                comandamati[producte[0]] = element.childNodes[1].innerHTML;
            }
        }

        stored = document.getElementById('zona2').getElementsByTagName('div');

        if (stored) {
            let preus;
            for (let i = 0; i < stored.length; i++) {
                const element = stored[i];
                let producte = element.childNodes[0].innerHTML;
                producte = producte.split(" x");
                comandamati[producte[0]] = element.childNodes[1].innerHTML;
            }
        }

        stored = document.getElementById('zona3').getElementsByTagName('div');

        if (stored) {
            let preus;
            for (let i = 0; i < stored.length; i++) {
                const element = stored[i];
                let producte = element.childNodes[0].innerHTML;
                producte = producte.split(" x");
                comandamati[producte[0]] = element.childNodes[1].innerHTML;
            }
        }

        // Check if string is empty
        let map = JSON.stringify(comandamati);
        
        if (map[1] === '}') {
            console.log(JSON.stringify(comandamati));
            alert('Selecciona algun producte, carallot!');
        }
        else {
            console.log(JSON.stringify(comandamati));
            localStorage.setItem('comanda', JSON.stringify(comandamati));
            location.href = "formulari.php"; ////////////////////////////////////////////// Comenta si no vols passar de pàgina
        }
    
    };

}
/*=====  End of Next Button  ==========*/
/*=====  End of Section Onclick Button  ============*/


/*====================================================
=            Section Functions                       =
====================================================*/
/*=============================================
=            Check Hour Now                   =
=============================================*/
function checkLunchTime() {
    let now = new Date();

    let hour = now.getHours();
    let minutes = now.getMinutes();

    console.log(hour + ':' + minutes);

    // Check hour between 11:30 and 15:30
    let hora1 = 11;
    let minut1 = 30;
    let hora2 = 15;
    let minut2 = 30;

    if ((hour > (hora1 - 1) && hour < (hora2 + 1))) {
        if ((hour > hora1 && hour < hora2)) {
            return true;
        }
        else if (hour == hora1) {
            if (minutes > (minut1 - 1)) {
                return true;
            }
            else {
                return false;
            }
        }
        else if (hour == hora2) {
            if (minutes < minut2) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }

}
/*=====  End of Check Hour Now  ======*/

/*=============================================
=            Calculate Total Price Menu       =
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
/*=====  End of Calculate Total Price Menu  ======*/

/*=============================================
=            Calculate Total Price Carta      =
=============================================*/
function totalPriceCarta() {

    /* Calcular Preu 1 */
    let stored = document.getElementById('zona1').getElementsByTagName('div');
    
    let preu1 = 0;

    if (stored) {
        let preus;
        for (let i = 0; i < stored.length; i++) {
            const element = stored[i];
            let text1 = element.childNodes[2].innerHTML;
            text1 = text1.split("€");
            preu1 += parseFloat(text1[0]);
        }
    }

    /* Calcular Preu 2 */
    stored = document.getElementById('zona2').getElementsByTagName('div');

    let preu2 = 0;

    if (stored) {
        let preus;
        for (let i = 0; i < stored.length; i++) {
            const element = stored[i];
            let text1 = element.childNodes[2].innerHTML;
            text1 = text1.split("€");
            preu1 += parseFloat(text1[0]);
        }
    }

    /* Calcular Preu 3 */
    stored = document.getElementById('zona3').getElementsByTagName('div');

    let preu3 = 0;

    if (stored) {
        let preus;
        for (let i = 0; i < stored.length; i++) {
            const element = stored[i];
            let text1 = element.childNodes[2].innerHTML;
            text1 = text1.split("€");
            preu1 += parseFloat(text1[0]);
        }
    }

    /* Calcular Preu Final */
    let preuFinal = parseFloat(preu1) + parseFloat(preu2) + parseFloat(preu3);
    console.log('Preu Total: ' + preuFinal);
    document.getElementById('send-order').innerHTML = `PREU ${preuFinal.toFixed(2)} €`;

}
/*=====  End of Calculate Total Price Carta  ======*/

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
=            Add To Carta                     =
=============================================*/
function addToCarta(element) {

    let id = element.id + 'b';
    
    let unitats = element.innerHTML;
    console.log(unitats);

    // Select parent of parent
    let parentOfparent = element.parentElement.parentElement;

    // console.log(parentOfparent);
    
    // Select First Child p
    let nom = parentOfparent.childNodes[0].innerHTML + ' x ' + unitats;

    // Select Second Child p
    let preu = (parseFloat(parentOfparent.childNodes[1].innerHTML) * parseFloat(element.innerHTML)).toFixed(2) + ' €';

    function addRemove(id, unitats, nom, preu, area) {

        let ifExist = document.getElementById(`${id}`);

        if (ifExist) {
            if (unitats == 0) {
                console.log(ifExist.id);
                ifExist.remove();
            } else {
                ifExist.remove();
                area.insertAdjacentHTML('beforeend', `<div id="${id}" class="row-price"><p>${nom}</p><p style="display: none">${unitats}</p><p>${preu}</p></div>`);
            }
        } else {
            area.insertAdjacentHTML('beforeend', `<div id="${id}" class="row-price"><p>${nom}</p><p style="display: none">${unitats}</p><p>${preu}</p></div>`);
        }
    }

    if(id == 'num1b' || id == 'num2b' || id == 'num3b' || id == 'num4b'){
        let area = document.getElementById('zona1');
        addRemove(id, unitats, nom, preu, area);
    }
    else if(id == 'num5b' || id == 'num6b' || id == 'num7b' || id == 'num8b'){
        let area = document.getElementById('zona2');
        addRemove(id, unitats, nom, preu, area);
    }
    else{
        let area = document.getElementById('zona3');
        addRemove(id, unitats, nom, preu, area);
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
            element.style.backgroundColor = 'var(--main-color-transparent)';
        }
        else if(id == 'menu_b1' || id == 'menu_b2' || id == 'menu_b3' || id == 'menu_b4'){
            document.getElementById("menu_b1").style.backgroundColor = 'transparent';
            document.getElementById("menu_b2").style.backgroundColor = 'transparent';
            document.getElementById("menu_b3").style.backgroundColor = 'transparent';
            document.getElementById("menu_b4").style.backgroundColor = 'transparent';
            console.log('He entrat a menu B');
            element.style.backgroundColor = 'var(--main-color-transparent)';
        }
        else{
            document.getElementById("menu_c1").style.backgroundColor = 'transparent';
            document.getElementById("menu_c2").style.backgroundColor = 'transparent';
            document.getElementById("menu_c3").style.backgroundColor = 'transparent';
            document.getElementById("menu_c4").style.backgroundColor = 'transparent';
            console.log('He entrat a menu C');
            element.style.backgroundColor = 'var(--main-color-transparent)';
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
=            Section Event Listeners                =
===================================================*/
if (checkLunchTime()) {
    const now = new Date();
    console.log(now.getHours() + ':' + now.getMinutes());
    /*===================================================
    =            Section Add Event Listeners Menu       =
    ===================================================*/
    /*=============================================
    =            MENU 1r PLAT                     =
    =============================================*/
    let addRemovePlat1 = document.querySelector('.listener1');
    addRemovePlat1.addEventListener('click', e => {
        
        if(e.target.classList.contains('box-plat')){
            
            let name = e.target.id;
            let element = document.getElementById(name);
            canviElementMenu(element);
            addToMenu(element);
            totalPrice();
            
            let element2 = document.getElementById('primer-plat-name');
            elementInnerHTMLIsNotEmpty(element2);
        }
    });
    /*=====  End of MENU 1r PLAT  ======*/

    /*=============================================
    =            MENU 2n PLAT                     =
    =============================================*/
    let addRemovePlat2 = document.querySelector('.listener2');
    addRemovePlat2.addEventListener('click', e => {
        
        if(e.target.classList.contains('box-plat')){
            
            let name = e.target.id;
            let element = document.getElementById(name);
            canviElementMenu(element);
            addToMenu(element);
            totalPrice();
            
            let element2 = document.getElementById('segon-plat-name');
            elementInnerHTMLIsNotEmpty(element2);
        }
    });
    /*=====  End of MENU 2n PLAT  ======*/

    /*=============================================
    =            MENU POSTRES                     =
    =============================================*/
    let addRemovePostre = document.querySelector('.listener3');
    addRemovePostre.addEventListener('click', e => {
        
        if(e.target.classList.contains('box-plat')){
            
            let name = e.target.id;
            let element = document.getElementById(name);
            canviElementMenu(element);
            addToMenu(element);
            totalPrice();
            
            let element2 = document.getElementById('postre-name');
            elementInnerHTMLIsNotEmpty(element2);
        }
    });
    /*=====  End of MENU POSTRES  ======*/
    /*=====  End of Section Add Event Listeners Menu ======*/
} else {
    /*===================================================
    =            Section Add Event Listeners Carta      =
    ===================================================*/
    let addRemoveBox = document.querySelector('.col-menu');
    addRemoveBox.addEventListener('click', e => {
        if(e.target.classList.contains('remove')){

            let name = e.target.nextElementSibling.id;
            let element = document.getElementById(name);
            let num = element.innerHTML;

            if (num == 0) {
                element.innerHTML = 0;
            } else {
                element.innerHTML = parseInt(num) - 1;
            }
    
            addToCarta(element);
            totalPriceCarta();

        }

        if(e.target.classList.contains('add')){

            let name = e.target.previousElementSibling.id;
            let element = document.getElementById(name);
            let num = element.innerHTML;
            element.innerHTML = parseInt(num) + 1;
        
            addToCarta(element);
            totalPriceCarta();
        }
    });
    /*=====  End of Section Add Event Listeners Carta ======*/
}