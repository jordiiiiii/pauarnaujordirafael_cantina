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

        
     
        //document.getElementById('otro').innerHTML = taula;

window.onload = function() {

    let comanda = localStorage.getItem('comandaMenu');
    console.log(JSON.parse(comanda));
    comanda = JSON.parse(comanda);
    //document.getElementById('comanda').innerHTML = comanda.PrimerPlat + '___' + comanda.SegonPlat + '___' + comanda.Postre;
    console.log(comanda);

    let taula = '<table border="2"><tr><td>PRODUCTE</td><td>UNITAT/S</td><td>PREU</td></tr>';
   
    document.getElementById('llistat').innerHTML = taula;
    
    let formulari = '<form action="1.7RafaelGarcia.php" method="POST"><div><label for="nom">Nom:</label><input type="text" id="nom" name="model"><p class="missatgeAlerta">Camp Incorrecte*</p></div><br><div><label for="telefon">Telefon:</label><input type="text" id="telefon" name="model"><p class="missatgeAlerta">Camp Incorrecte*</p></div><br><div><label for="correu">Correu:</label><input type="text" id="correu" name="model"><p class="missatgeAlerta">Camp Incorrecte*</p></div></form>';
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

        document.getElementById('seguent').addEventListener("click", function(){
            //console.info("Boto següent.");  
            validacioNom ();
            validacioTelefon ();
            validacioCorreu ();
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
            console.info(pasarSeguent);
            if (pasarSeguent) {
                let caixaText = document.getElementsByTagName("input");
                
                console.info("PASAR A LA OTRA PAGINA");
                location.href = "confirmacio.php";

            } else {
                console.info("NO PASAS A LA OTRA PAGINA");
            }
            
        }) 
        
        

};



