document.getElementById("back-to-menu").onclick = function () { location.href = "menu.php"; };

// function ocultarMissatges () {
//     let missatges = document.getElementsByClassName("missatgeAlerta");
//     for (let index = 0; index < missatges.length; index++) {
//         missatges[index].style.display = 'none';
//     }
// }

function validacioNom () {
    let missatges = document.getElementsByClassName("missatgeAlerta");
    let caixaText = document.getElementsByTagName("input");
            if (!caixaText[0].value.length == 0){
                missatges[0].style.display = 'none';
            } else {
                missatges[0].style.display = 'inline';           
            }
}
function validacioTelefon () {
         let missatges = document.getElementsByClassName("missatgeAlerta");
         let caixaText = document.getElementsByTagName("input");
         var re = /^\d{9}$/;
        //  if (test.test(caixaText[1].value || !caixaText[1].value.length == 0)) {
            if (re.test(caixaText[1].value)) {
             //console.info("El numero esta be escrit.");
             missatges[1].style.display = 'none';
         } else {
             //console.info("El numero esta malament escrit.");
             missatges[1].style.display = 'inline';
         }   
}
function validacioCorreu () {
        let missatges = document.getElementsByClassName("missatgeAlerta");
        let caixaText = document.getElementsByTagName("input");
        var re = /([^a\d\d][a-zA-Z0-9]+)\@(\binspedralbes.cat\b)/;
        console.info(caixaText[2].value);
        if (re.test(caixaText[2].value)) {
            console.info("El correu esta be escrit.");
            missatges[2].style.display = 'none';
        } else {
            console.info("El correu esta malament escrit.");
            missatges[2].style.display = 'inline';
        }   
}

function validarCamps (){
    validacioNom ();
    validacioTelefon ();
    validacioCorreu ();

    let missatges = document.getElementsByClassName("missatgeAlerta");
    let pasarSeguent = false;     
    let botoasd = document.getElementById("seguent");

    for (let index = 0; index < missatges.length; index++) {
        if (missatges[index].style.display != "none") {
            pasarSeguent = false;
            index = missatges.length;
        } else { 
            index == missatges.length;
            pasarSeguent = true;
        }
    }
    //console.info(pasarSeguent);
    if (pasarSeguent) {
        console.info("PASAR A LA OTRA PAGINA");
        //let caixaText = document.getElementsByTagName("input");
        document.getElementById("hiddenNom").value = document.getElementById("nom").value;
        document.getElementById("hiddenCorreu").value = document.getElementById("correu").value;
        botoasd.disabled=false;
    } else {
       // console.info("NO PASAS A LA OTRA PAGINA");
       botoasd.disabled=true;
    }
}

/*=============================================
=            List Menu Migdia                 =
=============================================*/
let menuMigdia = {'Mongeta Verda i Patata': '3.5', 'Cigrons Estofats': '3', 'Patates Duquessa': '2', 'Amanida Catalana': '2.5'
, 'Pollastre al Forn amb Verduretes': '3.5', 'Truita de Carbassó i amanida': '2.5', 'Hamburgueses amb Patates Xips': '3.5', 'Pizza Casolana de Pernil i Formatge': '3.5'
, 'Pastís de poma': '2.5', 'Iogurt': '1.5', 'Flam': '1.5', 'Fruita de Temporada': '1'};
/*=====  End of List Menu Migdia  ======*/


/*=============================================
=            List Carta Mati | Tarda          =
=============================================*/
let cartaMatiTarda = {'Cafè': '1', 'Cafè amb Llet': '1.2', 'Té': '1.5', 'Coca-Cola': '2'
, 'Dònut': '1.5', 'Croissant': '1.5', 'Pastís de Formatge': '2.5', 'Poma': '1'
, 'Entrepa de Fuet': '2.5', 'Bikini': '2.5', 'Pizza 4 Estacions': '3.5', 'Frankfurt': '3'};
/*=====  End of List Carta Mati | Tarda  ======*/

window.onload = function() {
    
    let comanda = localStorage.getItem('comanda');
    console.log(JSON.parse(comanda));
    comanda = JSON.parse(comanda);
    
    //document.getElementById('comanda').innerHTML = comanda.PrimerPlat + '___' + comanda.SegonPlat + '___' + comanda.Postre;
    console.log(comanda);
    
    // for (var key in cartaMatiTarda) {
    //     if (cartaMatiTarda.hasOwnProperty(key)) {
    //         console.info(key);
    //         console.info(cartaMatiTarda[key]);
    //     }
    // }

    //comanda = {"Mongeta Verda i Patata":1,"Pollastre al Forn amb Verduretes":1,"Iogurt":1};

    let taula = '<table><tr><td class="titol">PRODUCTE</td><td class="titol">UNITAT/S</td><td class="titol">PREU</td></tr>';
    let preuTotal= parseFloat(0.0);
    let comandaAPasar = "";
     for (var key in menuMigdia) {
        if (menuMigdia.hasOwnProperty(key)) {
            for (var key2 in comanda) {
                if (key == key2) {
                    taula += '<tr><td>'+key+'</td><td>'+comanda[key]+'</td><td>'+menuMigdia[key]+'</td></tr>';
                    preuTotal += parseFloat(menuMigdia[key]*comanda[key]); 
                    comandaAPasar += key + "_" + comanda[key] + "_" + menuMigdia[key] + "/";
                }
            }
        }
    }
    for (var key in cartaMatiTarda) {
        if (cartaMatiTarda.hasOwnProperty(key)) {
            for (var key2 in comanda) {
                if (key == key2) {
                    taula += '<tr><td>'+key+'</td><td>'+comanda[key]+'</td><td>'+cartaMatiTarda[key]+'</td></tr>';
                    preuTotal += parseFloat(cartaMatiTarda[key]*comanda[key]); 
                    comandaAPasar += key + "_" + comanda[key] + "_" + cartaMatiTarda[key] + "/";
                }
            }
        }
    }
   

    comandaAPasar += "TOTAL:" + preuTotal;
    document.getElementById("hiddenComanda").value = comandaAPasar;

    console.log("COMANDA: "+document.getElementById("hiddenComanda").value);

    taula += '</table>';

    document.getElementById('llistat').innerHTML = taula;

    taula = '<table><tr><td class="titol">TOTAL: </td><td>'+preuTotal+'</td></tr></table>';
    document.getElementById('total').innerHTML = taula;

    let boto = document.getElementById("seguent");
    boto.disabled=true;

    let extraerUnidades = document.getElementsByClassName("unidades");
    let unidadesParseadas = [];
    for (let index = 0; index < extraerUnidades.length; index++) {
        //console.info(extraerUnidades[index].textContent);
        //console.info(extraerUnidades[index].textContent.substring(1));
        unidadesParseadas[index] = parseFloat(extraerUnidades[index].textContent.substring(1));
        
    }

        let precios = document.getElementsByClassName("precio");
        let preciosParseadas = [];
        for (let index = 0; index < precios.length; index++) {
            preciosParseadas[index] = parseFloat(precios[index].textContent);
        }

        let total = 0;
        for (let index = 0; index < unidadesParseadas.length; index++) {
            total += unidadesParseadas[index] * preciosParseadas[index];
        }       

        document.getElementById('nom').addEventListener("blur", function(){
            validacioNom ();
        }) 

        document.getElementById('telefon').addEventListener("blur", function(){
            validacioTelefon ();
        })   

        document.getElementById('correu').addEventListener("blur", function(){
            validacioCorreu ();
        })            

        
        
        
};


// document.getElementById('enrere').addEventListener("click", function(){
//     console.info("Enrere");
//     location.href = "menu.php";
// });



setInterval('validarCamps()', 1500);