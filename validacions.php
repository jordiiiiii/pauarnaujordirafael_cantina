<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <style>
    button {
        background-color: var(--main-color);
        color: var(--main-bg-box-color);
        margin-left: 90px;
        flex: 3;
        height: 48px;
        border-radius: 4px;
        box-shadow: -10px 25px 50px rgba(0, 0, 0, 0.3);
        text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
        font-size: 18px;
        font-weight: var(--w2-font);
    }
    table{
      border-style: groove; border-width: 1px;
            text-align: center;
      width:100%
    } 
    tr{
      border-style: groove; border-width: 1px;

    } 
    td{
      border-style: groove; border-width: 1px;

    } 
    
    .missatgeAlerta {
        display:inline;
        color: red;
    }
    </style>

</head>
<body>
<!--<h1>COMANDA<h1>-->
<div id="llistat"></div>
<br><br>

<p>DATOS DE USUARIO</p>
<div id="formulari"></div>

<!--<div id="comanda" ></div>-->
<br><br>
<button type="button" id="enrere">Enrere</button>
<button type="button" id="seguent">Següent</button>

</div>
<script src="js/validacions_formulari.js" language="javascript" type="text/javascript"></script>
</body>
</html>

