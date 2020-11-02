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

window.onload = function() {

    let comanda = localStorage.getItem('comandaMenu');
    console.log(JSON.parse(comanda));
    comanda = JSON.parse(comanda);
    //document.getElementById('comanda').innerHTML = comanda.PrimerPlat + '___' + comanda.SegonPlat + '___' + comanda.Postre;
    console.log(comanda);

    let taula = "<table><tr><td>PRODUCTE</td><td>UNITAT/S</td></tr>";
    
    //console.info(comanda.PrimerPlat);
    //console.info(comanda.PrimerPlat.substring(0, comanda.PrimerPlat.indexOf("_")));
    //console.info(comanda.PrimerPlat.substring(0, comanda.PrimerPlat.indexOf("_")));
    //console.info(comanda.PrimerPlat.substring(comanda.PrimerPlat.indexOf("_")+1, comanda.PrimerPlat.length));

    if (comanda.hasOwnProperty("PrimerPlat")){
        let p1 = comanda.PrimerPlat.substring(comanda.PrimerPlat.indexOf("_")+1, comanda.PrimerPlat.length);
        console.info(p1.substring(p1.indexOf("_")+1, p1.length));
        taula += '<tr><td>'+comanda.PrimerPlat.substring(0, comanda.PrimerPlat.indexOf("_"))+'</td><td>'+p1.substring(p1.indexOf("_")+1, p1.length)+'</td></tr>';
    }
    if (comanda.hasOwnProperty("SegonPlat")){
        p1 = comanda.SegonPlat.substring(comanda.SegonPlat.indexOf("_")+1, comanda.SegonPlat.length);
        console.info(p1.substring(p1.indexOf("_")+1, p1.length));
        taula += '<tr><td>'+comanda.SegonPlat.substring(0, comanda.SegonPlat.indexOf("_"))+'</td><td>'+p1.substring(p1.indexOf("_")+1, p1.length)+'</td></tr>';
    }
    if (comanda.hasOwnProperty("Postre")){
        p1 = comanda.Postre.substring(comanda.Postre.indexOf("_")+1, comanda.Postre.length);
        console.info(p1.substring(p1.indexOf("_")+1, p1.length));
        taula += '<tr><td>'+comanda.Postre.substring(0, comanda.Postre.indexOf("_"))+'</td><td>'+p1.substring(p1.indexOf("_")+1, p1.length)+'</td></tr>';
    }


    taula += "</table>";

    document.getElementById('llistat').innerHTML = taula;
    
    let formulari = '<form action="1.7RafaelGarcia.php" method="POST"><div><label for="nom">Nom:   </label><input type="text" id="nom" name="model"><p class="missatgeAlerta">Camp Incorrecte*</p></div><br><div><label for="telefon">Telefon:    </label><input type="text" id="telefon" name="model"><p class="missatgeAlerta">Camp Incorrecte*</p></div><br><div><label for="correu">Correu:    </label><input type="text" id="correu" name="model"><p class="missatgeAlerta">Camp Incorrecte*</p></div></form>';
    document.getElementById("formulari").innerHTML = formulari;
       


        ocultarMissatges ();
    
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

        /*
        let codigoTablaTotal = '<br><table border="2"><tr><th>TOTAL:</th><th>'+total+'</th></tr></table>'; 
        let tablaTotal = document.getElementById("taulaTotal");
        tablaTotal.innerHTML = codigoTablaTotal;
        */


    
       

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
            location.href = "menu.php";
        });


        document.getElementById('seguent').addEventListener("click", function(){
            //console.info("Boto següent.");  
        
            //////////////////////////// ACTIVAR MAS TARDER //////////////////////////////////////
            /*    validacioNom ();
            validacioTelefon ();
            validacioCorreu ();*/
            ////////////////////////////////////////////////////////////////////////////////////
            let missatges = document.getElementsByClassName("missatgeAlerta");
            let pasarSeguent = false;         

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
                let caixaText = document.getElementsByTagName("input");
                var dadesUsuari = new Map();
                dadesUsuari["nom"]=caixaText[0].value;
                dadesUsuari["correu"]=caixaText[2].value;
                
                localStorage.setItem("dadesUsuari", JSON.stringify(dadesUsuari));
                location.href = "confirmacio.php";
            } else {
                console.info("NO PASAS A LA OTRA PAGINA");
            }
            
        }) 
        
        

};



