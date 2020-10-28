function ocultarMissatges () {
    let missatges = document.getElementsByClassName("missatgeAlerta");
    for (let index = 0; index < missatges.length; index++) {
        missatges[index].style.display = 'none';
    }
}


window.onload = function() {

        ocultarMissatges ();
    
        let extraerUnidades = document.getElementsByClassName("unidades");
        let unidadesParseadas = [];
        for (let index = 0; index < extraerUnidades.length; index++) {
            //console.info(extraerUnidades[index].textContent);
            //console.info(extraerUnidades[index].textContent.substring(1));
            unidadesParseadas[index] = parseFloat(extraerUnidades[index].textContent.substring(1));
            
        }
        /*
        for (let index = 0; index < unidadesParseadas.length; index++) {
            console.info(unidadesParseadas[index]);  
        }
        */

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


        let codigoTablaTotal = '<br><table border="2"><tr><th>TOTAL:</th><th>'+total+'</th></tr></table>'; 

        let tablaTotal = document.getElementById("tablaTotal");
        tablaTotal.innerHTML = codigoTablaTotal;

        document.getElementById('telefon').addEventListener("blur", function(){
            //console.info(this.value);
            let missatges = document.getElementsByClassName("missatgeAlerta");
            let test = /^\d{9}$/;
            if (test.test(this.value)) {
                //console.info("El numero esta be escrit.");
                missatges[1].style.display = 'none';
            } else {
                //console.info("El numero esta malament escrit.");
                missatges[1].style.display = 'inline';
            }     
        })   

        document.getElementById('correu').addEventListener("blur", function(){
            //console.info(this.value);
            let missatges = document.getElementsByClassName("missatgeAlerta");
            let test = /^[\w]+@{1}[\w]+\.[a-z]{2,3}$/;
            if (test.test(this.value)) {
                //console.info("El correu esta be escrit.");
                missatges[2].style.display = 'none';
            } else {
                //console.info("El correu esta malament escrit.");
                missatges[2].style.display = 'inline';
            }     
        })   

        document.getElementById('nom').addEventListener("blur", function(){
            let missatges = document.getElementsByClassName("missatgeAlerta");
            console.info(this.value);
            if (!this.value.length == 0){
                console.info("CAMP OMPLERT");
                missatges[0].style.display = 'none';
            } else {
                console.info("CAMP BUIT");
                missatges[0].style.display = 'inline';           
            }
        })   

         

        document.getElementById('seguent').addEventListener("click", function(){
            //console.info("Boto següent.");  
            let missatges = document.getElementsByClassName("missatgeAlerta");
            let caixaText = document.getElementsByTagName("input");

            for (let index = 0; index < missatges.length; index++) {
                //console.info(missatges[index].style.display);
                /*if (missatges[index].style.display != "none") {
                    console.info("ALGO ANDA MAL");
                }*/
                //console.info(caixaText[index].textContent);
                if (caixaText[index].textContent === '') {
                   // console.info("CAMPS BUITS");
                    missatges[index].style.display = 'inline';
                } else {
                    missatges[index].style.display = 'none';
                }
            }
        })   
};



