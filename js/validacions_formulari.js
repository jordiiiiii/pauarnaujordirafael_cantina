window.onload = function() {
    
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
};