<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Website Cantina Institut Pedralbes">
    <meta name="keywords" content="HTML, CSS, JavaScript, PHP">
    <meta name="author" content="Pau Callejas Tovar">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cantina Pedralbes Confirmation</title>
    <?php include('includes.inc');?>
    <link rel="stylesheet" href="css/rafaelFormulari.css">
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
                    <h1>COMANDA COMPLETADA AMB ÈXIT</h1>
                    <p id="gracies">Gràcies ${nom} per la teva compra</p>
                    <p>Passa-ho a buscar a la cantina</p>
                    <?php
                        setcookie('comprado', true,  strtotime("tomorrow"));
                        $to = "email";
                        $subject = "Resguard comanda CIP";
                        $txt = "comanda";
                        $headers = "From: cantinapedralbes@inspedralbes.cat";

                        mail($to,$subject,$txt,$headers);
                    ?>
                </div>
                <!-- ========== Row Flux ========== -->             
                <div class="content-flux">
                    <!-- <div class="back-form-butt btn">
                        <button id="back-to-form"><i style='font-size:14px' class='fas'>&#xf100;</i>  Previous Step</button>
                    </div> -->
                    <button id="send-end" class="send-end-butt">The End</button>
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
    <script src="js/confirmacio.js"></script>
    <script type="text/javascript">
        document.getElementById("send-end").onclick = function () { location.href = "index.php"; };
    </script>
    <!-- third party js ends -->
</body>
</html>