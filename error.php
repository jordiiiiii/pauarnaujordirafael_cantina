<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Website Cantina Institut Pedralbes">
    <meta name="keywords" content="HTML, CSS, JavaScript, PHP">
    <meta name="author" content="Jordi Gorbe Neira">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cantina Pedralbes Menu i Carta</title>
    <?php include('includes.inc');?>
    <link rel="stylesheet" href="css/jordiMenu.css">
    <link rel="stylesheet" href="css/jordiCartaMatiTarda.css">
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
                <!-- ========== Codi Jordi Start ========== -->
                <!-- ========== Row Main ========== -->
                <div class="content-main">
                    <div align="center">
                        <div>
                            <h1> Oops! <!/h1>
                        </div>
                        <div top:10px>
                            <img src="../img/error.png"/>
                            <h2>Ja has realitzat la teva comanda diària</h2>
                            <h1>Seràs redirigit automàticament a la pàgina principal</h1>
                        </div>
                    </div>
                </div>
                <!-- ========== End Codi Jordi ============ -->
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
    <script src="js/changeMenuPageTitle.js"></script>
    <script src="js/menu.js"></script>
    <!-- third party js ends -->
</body>
</html>