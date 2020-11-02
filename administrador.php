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
                <!-- ========== Codi Admin Start ========== -->
                <!-- ========== Row Present ========== -->
                <div class="content-row-present">
                    <h2>BENVINGUTS</h2>
                    <h2>LA TEVA COMANDA</h2>
                    <h2>DETALLS ENCARREC</h2>
                    <h2>CONFIRMACIO</h2>
                </div>
                <div class="content-box">
                    <h3>PAGINA ADMINISTRADOR SENYOR JORDI GORBE MESTRE DE LES NINFES</h3>
                    <div class="content-row-flux-nav">
                        <div class="back-index-butt">
                            <button id="back-to-index" >Previous Step</button>
                        </div>
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
    <script type="text/javascript">
        document.getElementById("back-to-index").onclick = function () { location.href = "index.php"; };
    </script>
    <!-- third party js ends -->
</body>
</html>