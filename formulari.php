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
            <div class="content">
                <!-- ========== Codi Rafael Start ========== -->
                <div class="main-row">
                    <div class="content">
                <!-- ========== Codi Jordi Start ========== -->
                <!-- ========== Row Present ========== -->
                        <div class="content-row-present">
                            <h2>BENVINGUTS</h2>
                            <h2>LA TEVA COMANDA</h2>
                            <h2>DETALLS ENCARREC</h2>
                            <h2>CONFIRMACIO</h2>
                        </div>  
                        <div class="content-box">
                        
                        <?php include('validacions.php');?>

                        </div>
                <!-- ========== End Codi Rafael ============ -->
                    </div>
                </div>

        <!-- ============================================================== -->
        <!-- End Page Content -->
        <!-- ============================================================== -->
        <!-- ========== Footer Start ========== -->

        <!-- ========== End Footer ========== -->
        </div>
        <?php include('footer.php');?>

    </div>

</body>
</html>