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
                    <?php
                        if (isset($_COOKIE['comprado'])) {
                            include('error.php');
                        }
                        else {
                            include('pedido_ok.php');
                            setcookie('comprado', true,  strtotime("tomorrow"));
                        }
                    ?>
                </div>
                <!-- ========== Row Flux ========== -->             
                <div class="content-flux">

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
    <script type="text/javascript">
        document.getElementById("send-end").onclick = function () { location.href = "index.php"; };
    </script>
    <!-- third party js ends -->
</body>
</html>