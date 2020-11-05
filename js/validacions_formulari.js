function ocultarMissatges () {
    let missatges = document.getElementsByClassName("missatgeAlerta");
    for (let index = 0; index < missatges.length; index++) {
        missatges[index].style.display = 'none';
    }
}

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
         let test = /^\d{9}$/;
         if (test.test(caixaText[1].value || !caixaText[1].value.length == 0)) {
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
        let test = /^[\w]+@{1}[\w]+\.[a-z]{2,3}$/;
        if (test.test(caixaText[2].value) || !caixaText[2].value.length == 0) {
            //console.info("El correu esta be escrit.");
            missatges[2].style.display = 'none';
        } else {
            //console.info("El correu esta malament escrit.");
            missatges[2].style.display = 'inline';
        }   
}

function validarCamps (){
    //console.info("HAGO LA FUNCION");
    validacioNom ();
    validacioTelefon ();
    validacioCorreu ();

    let missatges = document.getElementsByClassName("missatgeAlerta");
    let pasarSeguent = false;     
    let botoasd = document.getElementById("seguent");

    for (let index = 0; index < missatges.length; index++) {
        if (missatges[index].style.display != "none") {
            //console.info("ALGO ANDA MAL");
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
, 'Pastís de Formatge': '2.5', 'Iogurt': '1.5', 'Flam': '1.5', 'Fruita de Temporada': '1'};
/*=====  End of List Menu Migdia  ======*/


/*=============================================
=            List Carta Mati | Tarda          =
=============================================*/
let cartaMatiTarda = {'Cafè': '1', 'Cafè amb Llet': '1.2', 'Té': '1.5', 'Coca-Cola': '2'
, 'Dònut': '1.5', 'Croissant': '1.5', 'Pastís de Formatge': '2.5', 'Poma': '1'
, 'Entrepa de Fuet': '2.5', 'Bikini': '2.5', 'Pizza 4 Estacions': '3.5', 'Frankfurt': '3'};
/*=====  End of List Carta Mati | Tarda  ======*/

window.onload = function() {
    /*
    let comanda = localStorage.getItem('comandaMenu');
    console.log(JSON.parse(comanda));
    comanda = JSON.parse(comanda);
    
    //document.getElementById('comanda').innerHTML = comanda.PrimerPlat + '___' + comanda.SegonPlat + '___' + comanda.Postre;
    console.log(comanda);
    */
    // for (var key in cartaMatiTarda) {
    //     if (cartaMatiTarda.hasOwnProperty(key)) {
    //         console.info(key);
    //         console.info(cartaMatiTarda[key]);
    //     }
    // }

    let cartaFalsa = {'Cafè': '2', 'Cafè amb Llet': '3', 'Té': '1', 'Pastís de Formatge': '8'};

    let taula = "<table><tr><td>PRODUCTE</td><td>UNITAT/S</td><td>PREU</td></tr>";
    let preuTotal= parseFloat(0.0);
    let comandaAPasar = "";
     for (var key in cartaMatiTarda) {
        if (cartaMatiTarda.hasOwnProperty(key)) {
            for (var key2 in cartaFalsa) {
                if (key == key2) {
                    taula += '<tr><td>'+key+'</td><td>'+cartaFalsa[key]+'</td><td>'+cartaMatiTarda[key]+'</td></tr>';
                   /* console.info(key);     
                    console.info(cartaFalsa[key]);               
                    console.info(cartaMatiTarda[key]);    */
                    preuTotal += parseFloat(cartaMatiTarda[key]*cartaFalsa[key]); 
                    comandaAPasar += key + "_" + cartaFalsa[key] + "_" + cartaMatiTarda[key] + "/";
                }
            }
           
        }
    }
    comandaAPasar += "TOTAL:" + preuTotal;
    document.getElementById("hiddenComanda").value = comandaAPasar;

    console.log("COMANDA: "+document.getElementById("hiddenComanda").value);

    taula += '</table>';

    document.getElementById('llistat').innerHTML = taula;

    taula = '<table><tr><td>TOTAL: </td><td>'+preuTotal+'</td></tr></table>';
    document.getElementById('total').innerHTML = taula;




    
    //console.info(comanda.PrimerPlat);
    //console.info(comanda.PrimerPlat.substring(0, comanda.PrimerPlat.indexOf("_")));
    //console.info(comanda.PrimerPlat.substring(comanda.PrimerPlat.indexOf("_")+1, comanda.PrimerPlat.length));
    //let preu = comanda.PrimerPlat.substring(comanda.PrimerPlat.indexOf("_")+1, comanda.PrimerPlat.length);
    //console.info(preu.substring(0, preu.indexOf("€")));

    /*
    let preuTotal= parseFloat(0.0);
    if (comanda.hasOwnProperty("PrimerPlat")){
        let p1 = comanda.PrimerPlat.substring(comanda.PrimerPlat.indexOf("_")+1, comanda.PrimerPlat.length);
        //console.info(p1.substring(p1.indexOf("_")+1, p1.length));
        taula += '<tr><td>'+comanda.PrimerPlat.substring(0, comanda.PrimerPlat.indexOf("_"))+'</td><td>'+p1.substring(p1.indexOf("_")+1, p1.length)+'</td></tr>';
        let preu = comanda.PrimerPlat.substring(comanda.PrimerPlat.indexOf("_")+1, comanda.PrimerPlat.length);
        console.info(preu.substring(0, preu.indexOf("€")));
        preuTotal += parseFloat(preu.substring(0, preu.indexOf("€")));
    }
    if (comanda.hasOwnProperty("SegonPlat")){
        p1 = comanda.SegonPlat.substring(comanda.SegonPlat.indexOf("_")+1, comanda.SegonPlat.length);
        //console.info(p1.substring(p1.indexOf("_")+1, p1.length));
        taula += '<tr><td>'+comanda.SegonPlat.substring(0, comanda.SegonPlat.indexOf("_"))+'</td><td>'+p1.substring(p1.indexOf("_")+1, p1.length)+'</td></tr>';
        let preu = comanda.SegonPlat.substring(comanda.SegonPlat.indexOf("_")+1, comanda.SegonPlat.length);
        console.info(preu.substring(0, preu.indexOf("€")));
        preuTotal += parseFloat(preu.substring(0, preu.indexOf("€")));
    }
    if (comanda.hasOwnProperty("Postre")){
        p1 = comanda.Postre.substring(comanda.Postre.indexOf("_")+1, comanda.Postre.length);
        //console.info(p1.substring(p1.indexOf("_")+1, p1.length));
        taula += '<tr><td>'+comanda.Postre.substring(0, comanda.Postre.indexOf("_"))+'</td><td>'+p1.substring(p1.indexOf("_")+1, p1.length)+'</td></tr>';
        let preu = comanda.Postre.substring(comanda.Postre.indexOf("_")+1, comanda.Postre.length);
        console.info(preu.substring(0, preu.indexOf("€")));
        preuTotal += parseFloat(preu.substring(0, preu.indexOf("€")));
    }

    taula += "</table>";

    document.getElementById('llistat').innerHTML = taula;

    console.info(preuTotal);
    taula = '<table><tr><td>TOTAL: </td><td>'+preuTotal+'</td></tr></table>';
    document.getElementById('total').innerHTML = taula;
    */

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
            //console.info(precios[index].textContent);    
            preciosParseadas[index] = parseFloat(precios[index].textContent);
        }

        let total = 0;
        for (let index = 0; index < unidadesParseadas.length; index++) {
            total += unidadesParseadas[index] * preciosParseadas[index];
        }
        //console.info("TOTAL: " + total);
       

        document.getElementById('nom').addEventListener("blur", function(){
            validacioNom ();
        }) 

        document.getElementById('telefon').addEventListener("blur", function(){
            validacioTelefon ();
        })   

        document.getElementById('correu').addEventListener("blur", function(){
            validacioCorreu ();
        })            

        document.getElementById('enrere').addEventListener("click", function(){
            console.info("Enrere");
            location.href = "menu.php";
        });
        
};

setInterval('validarCamps()', 1000);