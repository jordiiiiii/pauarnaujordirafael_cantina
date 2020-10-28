<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <style>
    table td {
        text-align: center;
    }
    .missatgeAlerta {
        display:inline;
        color: red;
    }
    </style>
    <script src="js/validacions_formulari.js" language="javascript" type="text/javascript"></script>

</head>
<body>
<img class="logo" src="img/logo.jpg" alt="Logo InsPedralbes">
<br><br>
<h1>COMANDA<h1>
<table border="2">
  <tr>
    <td>PRODUCTE</td>
    <td>UNITAT/S</td>
    <td>PREU</td>
  </tr>
  <tr>
    <td>Bocata</td>
    <td class="unidades">x2</td>
    <td class="precio">3.5</td>
  </tr>
  <tr>
    <td>Alcachofas</td>
    <td class="unidades">x5</td>
    <td class="precio">1.5</td>
  </tr>
  <tr>
    <td>Cebolla</td>
    <td class="unidades">x2</td>
    <td class="precio">1</td>
  </tr>
</table>

<div id = "tablaTotal" ></div>

<br><br>
<h1>DATOS DE USUARIO<h1>

<form action='1.7RafaelGarcia.php' method='POST'>
  <div>
  <label for="nom">Nom:</label>
  <input type="text" id="nom" name="model">
  <p class="missatgeAlerta">Camp Incorrecte*</p>
  </div>
  <br>
  <div>
  <label for="telefon">Telefon:</label>
  <input type="text" id="telefon" name="model">
  <p class="missatgeAlerta">Camp Incorrecte*</p>
  </div>
  <br>
  <div>
  <label for="correu">Correu:</label>
  <input type="text" id="correu" name="model">
  <p class="missatgeAlerta">Camp Incorrecte*</p>
  </div>
</form>

<button type="button" id="seguent">Següent</button>

</div>
</body>
</html>

