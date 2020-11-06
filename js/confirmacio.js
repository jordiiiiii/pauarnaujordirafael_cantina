menu = localStorage.getItem("comandaMenu");
menu = {"PrimerPlat":"Patates Duquessa_2€_1","SegonPlat":"Hamburgueses amb Patates Xips_3.5€_1","Postre":"Flam_1.5€_1"};

function EscribirFichero(menu) {
    let fso = CreateObject("Scripting.FileSystemObject");  
    let s = fso.CreateTextFile("./admin/pedidos/test.txt", True);
    let productes = Object.keys(menu)
    for(var i = 0; i < Object.length(menu); i++){
        let p = menu.productes[i];
        p = p.split("_");
        var total = p[1]*p[2]
    }
    s.writeline("Producte: " + p[0] + " x" + p[2]);
    s.writeline("Preu: " + total);
    s.writeline("-----------------------------");
    s.Close();
 }