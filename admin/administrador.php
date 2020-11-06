<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Website Cantina Institut Pedralbes">
    <meta name="keywords" content="HTML, CSS, JavaScript, PHP">
    <meta name="author" content="Arnau Fernandez Jerez">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Page</title>
    <?php include('includes.inc');?>
<<<<<<< Updated upstream
=======
    <link rel="stylesheet" href="../css/arnauAdmin.css">
>>>>>>> Stashed changes
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
                <!-- ========== Codi Arnau Start ========== -->
                <!-- ========== Row Main ========== -->
                <div class="content-main">
                    <!-- ========== Column Left ======== -->
                    <div class = "content-left-side">
                        <h1>PÀGINA D'ADMINISTRACIÓ DE COMANDES</h1>
                        <br>
                        <div class = "taula-clients">
                            <?php 
                            $ruta= './pedidos';
                            $directorio = opendir($ruta);
                            while ($archivo = readdir($directorio)) 
                            {
                                $variable = substr($archivo, 0, strpos($archivo, ".txt"));
                                $contingut = @file_get_contents('./pedidos/' . $variable . '.txt', 0);
                                echo "<table>";
                                echo "<tr>";
                                echo "</tr>";
                                echo "<tr>";
                                echo "<td>" . "<a href ='./pedidos/$archivo' >$variable</a></td>";
                                echo "</tr>";
                                echo "</table>";  
                            }
                            echo "<br>";
                            ?>  
                        </div>
                    </div>
                    <!-- ========= Column Right ======= --> 
                    <div class = "content-right-side">                       
                        <img src="../img/comanda.png" width="350" height="400">
                    </div>
                </div>
 
                <!-- ========== Row Flux ========== -->
                <div class="content-flux">
                    <div class="back-index-butt btn">
                        <button id="back-to-index"><i style='font-size:14px' class='fas'>&#xf100;</i>  Previous Step</button>
                    </div>
                </div>
                <!-- ========== End Codi Arnau ============ -->
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
    <script type="text/javascript">document.getElementById("back-to-index").onclick = function () { location.href = "../index.php"; };</script>
    <!-- third party js ends -->
</body>
</html>
 
 
