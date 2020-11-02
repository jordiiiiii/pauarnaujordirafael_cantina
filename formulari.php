<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Website Cantina Institut Pedralbes">
    <meta name="keywords" content="HTML, CSS, JavaScript, PHP">
    <meta name="author" content="Rafael Garcia Perez">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cantina Pedralbes Validacio</title>
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
                <!-- ========== Codi Rafael Start ========== -->
                <!-- ========== Row Main ========== -->
                <div class="content-main">
                    <!-- <div id="comanda"></div> -->
                    <?php include('validacions.php');?>
                </div>
                <!-- ========== Row Flux ========== -->             
                <div class="content-flux">
                    <div class="back-menu-butt btn">
                        <button id="back-to-menu"><i style='font-size:14px' class='fas'>&#xf100;</i>  Previous Step</button>
                    </div>
                    <button id="send-confirmation" class="send-confirmation-butt">CONFIRMACIO</button>
                </div>
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
    <script src="js/changeDetailsPageTitle.js"></script>


    <!-- <script type="text/javascript">
        let comanda = localStorage.getItem('comandaMenu');
        console.log(JSON.parse(comanda));
        comanda = JSON.parse(comanda);
        document.getElementById('comanda').innerHTML = comanda.PrimerPlat + '___' + comanda.SegonPlat + '___' + comanda.Postre;

        document.getElementById("back-to-menu").onclick = function () { location.href = "menu.php"; };
        document.getElementById("send-confirmation").onclick = function () { location.href = "confirmacio.php"; };
    </script> -->
    <!-- third party js ends -->
</body>
</html>