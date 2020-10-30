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
                <!-- ========== Row Present ========== -->
                <div class="content-row-present">
                    <h2>BENVINGUTS</h2>
                    <h2>LA TEVA COMANDA</h2>
                    <h2>DETALLS ENCARREC</h2>
                    <h2>CONFIRMACIO</h2>
                </div>
                <div id="comanda"></div>
                <a href="confirmacio.php">Confirmacio</a>
                <!-- ========== End Codi Rafael ============ -->
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
    <script type="text/javascript">
        let comanda = localStorage.getItem('comandaMenu');
        console.log(JSON.parse(comanda));
        comanda = JSON.parse(comanda);
        document.getElementById('comanda').innerHTML = comanda.PrimerPlat + '___' + comanda.SegonPlat + '___' + comanda.Postre;
    </script>
    <!-- third party js ends -->
</body>
</html>