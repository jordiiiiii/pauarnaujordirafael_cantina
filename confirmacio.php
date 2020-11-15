<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Website Cantina Institut Pedralbes">
    <meta name="keywords" content="HTML, CSS, JavaScript, PHP">
    <meta name="author" content="Pau Callejas Tovar">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/confirmacio.css">
    <title>Cantina Pedralbes Confirmation</title>
    <?php include('includes.inc');?>
</head>
<body>
    <!-- Begin Page -->
    <div class="row-layout">
        <!-- ========== Header Start ========== -->
        <?php include('header.php');?>
        <!-- ========== End Header ========== -->
        <!-- ============================================================== -->
        <!-- Start Page Content here -->
        <!-- ============================================================== -->
        <div class="main-row">
            <div class="content-col">
                <!-- ========== Row Head ========== -->
                <div class="content-head">
                    <h2>BENVINGUTS</h2>
                    <h2>LA TEVA COMANDA</h2>
                    <h2>DETALLS ENCARREC</h2>
                    <h2>CONFIRMACIO</h2>
                </div>
                <!-- ========== Codi Pau Start ========== -->
                <!-- ========== Row Main ========== -->
                <div class="content-main">
                    <!-- ========== Column Left ======== -->
                    <div class = "content-left-side">
                        <div class="titulo">
                            <h1>COMANDA COMPLETADA AMB ÈXIT</h1>
                            <br/>
                        <p>Passa-ho a buscar a la cantina</p>
                        <br/>
                        <?php
                            $nombre = $_POST["hiddenNom"];
                            echo " Gràcies " . $nombre . " per la teva compra";
                            setcookie('comprado', true,  strtotime("tomorrow"));
                            $to = $_POST["hiddenCorreu"];
                            $subject = "Resguard comanda CIP";
                            $txt = "comanda" . $_POST["hiddenComanda"];
                            $headers = "From: cantinapedralbes@inspedralbes.cat";
                            
                            mail($to,$subject,$txt,$headers);
                            $direc = "./admin/pedidos/" . $_POST["hiddenCorreu"] . ".txt";
                            $fh = fopen("$direc", 'w') or die("Se produjo un error al crear el archivo");
                            $texto = " Comanda: " . $_POST["hiddenComanda"] ;
                            fwrite($fh, $texto) or die("No se pudo escribir en el archivo");
                            fclose($fh);
                            echo "<br></br>S'ha enviat la teva comanda al teu correu";
                            
                            ?>
                        </div>
                    </div>

                    <!-- ========= Column Right ======= --> 
                    <div class = "content-right-side">                       
                            <img src="img/confirmacio.png" width="300px"/>
                    </div>
                </div>
                <!-- ========== Row Flux ========== -->             
                <div class="content-flux">
                    <!-- <div class="back-form-butt btn">
                        <button id="back-to-form"><i style='font-size:14px' class='fas'>&#xf100;</i>  Previous Step</button>
                    </div> -->
                    <button id="send-end" class="send-end-butt">Finalitza</button>
                </div>
                <!-- ========== End Codi Pau ============ -->
            </div>
        </div>
        <!-- ============================================================== -->
        <!-- End Page Content -->
        <!-- ============================================================== -->
        <!-- ========== Footer Start ========== -->
        <?php include('footer.php');?>
        <!-- ========== End Footer ========== -->
    </div>
    <!-- third party js -->
    <script src="js/changeConfirmationPageTitle.js"></script>
    <script type="text/javascript">
        document.getElementById("send-end").onclick = function () { location.href = "index.php"; };
    </script>
    <!-- third party js ends -->
</body>
</html>