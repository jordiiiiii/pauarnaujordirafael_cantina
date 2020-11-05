<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Website Cantina Institut Pedralbes">
    <meta name="keywords" content="HTML, CSS, JavaScript, PHP">
    <meta name="author" content="Rafael Garcia Perez">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cantina Pedralbes Confirmation</title>
   
    <?php include('includes.inc');?>

    <link rel="stylesheet" href="css/cssRafael.css">

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
                <!-- ========== Codi Rafael Start ========== -->
                <!-- ========== Row Main ========== -->
                <div class="content-main">
                    <div>
                        <br><br>             
                        <div id="llistat"></div>
                        <br>
                        <div id="total"></div>

                        <br><br>

                        <h2 class="titol">DATOS DE USUARIO</h2>
                        <br>
                        <form action="confirmacio.php" method="POST">
                            <div>
                                <label for="nom">Nom:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" id="nom" name="nom">
                                &nbsp;&nbsp;&nbsp;
                                <p class="missatgeAlerta">Camp Incorrecte*</p>
                                
                            </div>
                            <br><div>
                                <label for="telefon">Telefon:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" id="telefon" name="telefon">
                                &nbsp;&nbsp;&nbsp;
                                <p class="missatgeAlerta">Camp Incorrecte*</p>
                            </div>
                            <br>
                            <div>
                                <label for="correu">Correu:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" id="correu" name="correu">
                                &nbsp;&nbsp;&nbsp;
                                <p class="missatgeAlerta">Camp Incorrecte*</p>
                            </div>
                            </div>
                        <br><br>
                        <input type="hidden" id="hiddenNom" name="hiddenNom" value = "">
                        <input type="hidden" id="hiddenCorreu" name="hiddenCorreu" value = "">
                        <input type="hidden" id="hiddenComanda" name="hiddenComanda" value = "">

                    </div>
         <!-- ========== Row Flux ========== -->    

         <div class="content-flux">
                    <div class="back-index-butt btn">
                    <button id="back-to-menu"><i style="font-size:14px" class="fas" aria-hidden="true"></i>  Previous Step</button>                        
                    </div>
                    <input type="submit" value="Següent" id="seguent" class="boton">
                </div>
                </form>
                

                <!-- ========== End Rafael Jordi ============ -->
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
    <script src="js/changeDetailsPageTitle.js"></script>
    <script src="js/validacions_formulari.js" language="javascript" type="text/javascript"></script>
    <!-- third party js ends -->
</body>
</html>