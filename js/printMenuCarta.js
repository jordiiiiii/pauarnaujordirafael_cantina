/*=============================================
=            Check Hour Now                   =
=============================================*/
function checkLunchTime() {
    let now = new Date();

    let hour = now.getHours();
    let minutes = now.getMinutes();

    console.log(hour + ':' + minutes);

    // Check hour between 11:30 and 21:30
    if ((hour > 10 && hour < 22)) {
        if ((hour > 11 && hour < 21)) {
            return true;
        }
        else if (hour == 11) {
            if (minutes > 29) {
                return true;
            }
            else {
                return false;
            }
        }
        else if (hour == 21) {
            if (minutes < 30) {
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
=            List Menu Migdia                 =
=============================================*/
let menuMigdia = {"Mongeta Verda i Patata": "3.5€", "Cigrons Estofats": "3€", "Patates Duquessa": "2€", "Amanida Catalana": "2.5€"
, "Pollastre al Forn amb Verduretes": "3.5€", "Truita de Carbassó i amanida": "2.5€", "Hamburgueses amb Patates Xips": "3.5€", "Pizza Casolana de Pernil i Formatge": "3.5€"
, "Pastís de Formatge": "2.5€", "Iogurt": "1.5€", "Flam": "1.5€", "Fruita de Temporada": "1€"};
/*=====  End of List Menu Migdia  ======*/


/*=============================================
=            List Carta Mati | Tarda          =
=============================================*/
let cartaMatiTarda = {"Cafè": "1€", "Cafè amb Llet": "1.2€", "Té": "1.5€", "Coca-Cola": "2€"
, "Dònut": "1.5€", "Croissant": "1.5€", "Pastís de Formatge": "2.5€", "Poma": "1€"
, "Entrepa de Fuet": "2.5€", "Bikini": "2.5€", "Pizza 4 Estacions": "3.5€", "Frankfurt": "3€"};
/*=====  End of List Carta Mati | Tarda  ======*/


/*=============================================
=            Print Web Page Menu              =
=============================================*/
if (checkLunchTime()) {
    // Print Menu Left
    let htmlLeftSideContentMenu = '                        <!-- ========== Row Title ======== -->';
    htmlLeftSideContentMenu += '                        <div class="title-left"><h3>Menu del Migdia</h3></div>';
    htmlLeftSideContentMenu += '                        <!-- ========== Row Menu ========== -->';

    let i = 0;
    let j = 1;
    let lletra = 'a';
    for (var key in menuMigdia) {
        // check if the property/key is defined in the object itself, not in parent
        if (menuMigdia.hasOwnProperty(key)) {
            i++;
            if (i == 1) {
                htmlLeftSideContentMenu += `<div class="col-menu listener${j}">`;
            }
            htmlLeftSideContentMenu += `<div id="menu_${lletra}${i}" class="box-plat">`;
            htmlLeftSideContentMenu += `<p>${key}</p>`;
            htmlLeftSideContentMenu += `<p>${menuMigdia[key]}</p>`;
            htmlLeftSideContentMenu += '</div>';

            if (i == 4) {
                htmlLeftSideContentMenu += '</div>';
                j++;
                if (lletra == 'b') { lletra = 'c' }
                if (lletra == 'a') { lletra = 'b' }
                i = 0;
            }
        }
    }
    htmlLeftSideContentMenu += '                        </div>';

    // Print Menu Right
    let htmlRightSideContentMenu = '                            <!-- ========== Row Title ======== -->';
    htmlRightSideContentMenu += '                        <div class="title-right"><h3>Carretó de la Compra</h3></div>';
    htmlRightSideContentMenu += '                        <!-- ========== Row Price ========== -->';
    htmlRightSideContentMenu += '                        <div class="col-price">';
    htmlRightSideContentMenu += '                            <h4>Primer Plat</h4>';
    htmlRightSideContentMenu += '                            <div class="row-price">';
    htmlRightSideContentMenu += '                                <p id="primer-plat-name"></p>';
    htmlRightSideContentMenu += '                                <p id="primer-plat-price"></p>';
    htmlRightSideContentMenu += '                            </div>';
    htmlRightSideContentMenu += '                        </div>';
    htmlRightSideContentMenu += '                        <div class="col-price">';
    htmlRightSideContentMenu += '                            <h4>Segon Plat</h4>';
    htmlRightSideContentMenu += '                            <div class="row-price">';
    htmlRightSideContentMenu += '                                <p id="segon-plat-name"></p>';
    htmlRightSideContentMenu += '                                <p id="segon-plat-price"></p>';
    htmlRightSideContentMenu += '                            </div>';
    htmlRightSideContentMenu += '                        </div>';
    htmlRightSideContentMenu += '                        <div class="col-price">';
    htmlRightSideContentMenu += '                            <h4>Postres</h4>';
    htmlRightSideContentMenu += '                            <div class="row-price">';
    htmlRightSideContentMenu += '                                <p id="postre-name"></p>';
    htmlRightSideContentMenu += '                                <p id="postre-price"></p>';
    htmlRightSideContentMenu += '                            </div>';
    htmlRightSideContentMenu += '                        </div>';

    // injectar abans del primer div
    document.getElementsByClassName('content-left-side')[0].insertAdjacentHTML('afterbegin', htmlLeftSideContentMenu);
    document.getElementsByClassName('content-right-side')[0].insertAdjacentHTML('afterbegin', htmlRightSideContentMenu);

} else {
    // Print Carta Mati | Tarda Left
    let htmlLeftSideContentCarta = '                        <!-- ========== Row Title ======== -->';
    htmlLeftSideContentCarta += '                        <div class="title-left"><h3>Carta Mati | Tarda</h3></div>';
    htmlLeftSideContentCarta += '                        <!-- ========== Row Carta Mati Tarda ========== -->';
    htmlLeftSideContentCarta += '                        <div class="col-menu equalHMVWrap eqWrap">';

    let i = 1;
    for (var key in cartaMatiTarda) {
        // check if the property/key is defined in the object itself, not in parent
        if (cartaMatiTarda.hasOwnProperty(key)) {
            htmlLeftSideContentCarta += '<div class="equalHMV eq box-carta">';
            htmlLeftSideContentCarta += `<p>${key}</p>`;
            htmlLeftSideContentCarta += `<p>${cartaMatiTarda[key]}</p>`;
            htmlLeftSideContentCarta += '<div class="add-remove-btn">';
            htmlLeftSideContentCarta += `<div id="remove${i}" class="btn-carta remove">-</div>`;
            htmlLeftSideContentCarta += `<p id="num${i}" class="btn-carta num">${0}</p>`;
            htmlLeftSideContentCarta += `<div id="add${i}" class="btn-carta add">+</div>`;
            htmlLeftSideContentCarta += '</div>';
            htmlLeftSideContentCarta += '</div>';
            i++;
        }
    }
    
    htmlLeftSideContentCarta += '                        </div>';

    // Print Carta Mati | Tarda Right
    let htmlRightSideContentMenu = '                            <!-- ========== Row Title ======== -->';
    htmlRightSideContentMenu += '                        <div class="title-right"><h3>Carretó de la Compra</h3></div>';
    htmlRightSideContentMenu += '                        <!-- ========== Row Price ========== -->';
    htmlRightSideContentMenu += '                        <div id="zona1" class="col-price">';
    htmlRightSideContentMenu += '                            <h4>Begudes Fredes i Calentes</h4>';
    htmlRightSideContentMenu += '                        </div>';
    htmlRightSideContentMenu += '                        <div id="zona2" class="col-price">';
    htmlRightSideContentMenu += '                            <h4>Brioixeria i Fruites</h4>';
    htmlRightSideContentMenu += '                        </div>';
    htmlRightSideContentMenu += '                        <div id="zona3" class="col-price">';
    htmlRightSideContentMenu += '                            <h4>Entrepans Freds i Calents</h4>';
    htmlRightSideContentMenu += '                        </div>';

     // injectar abans del primer div
    document.getElementsByClassName('content-left-side')[0].insertAdjacentHTML('afterbegin', htmlLeftSideContentCarta);
    document.getElementsByClassName('content-right-side')[0].insertAdjacentHTML('afterbegin', htmlRightSideContentMenu);

}
/*=====  End of Print Web Page Menu  ======*/