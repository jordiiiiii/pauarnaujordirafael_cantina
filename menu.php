<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Website Cantina Institut Pedralbes">
    <meta name="keywords" content="HTML, CSS, JavaScript, PHP">
    <meta name="author" content="Jordi Gorbe Neira">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cantina Pedralbes Menu</title>
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
                <!-- ========== Codi Jordi Start ========== -->
                <!-- ========== Row Main ========== -->
                <div class="content-main">
                    <!-- ========== Column Left ======== -->
                    <div class="content-left-side">
                        <!-- ========== Row Title ======== -->
                        <div class="title-left"><h3>Menu del Migdia</h3></div>
                        <!-- ========== Row Menu ========== -->
                        <div class="col-menu">
                            <div id="menu_a1" class="box-plat">
                                <p>Mongeta Verda i Patata</p>
                                <p>3.5€</p>
                            </div>
                            <div id="menu_a2" class="box-plat">
                                <p>Cigrons Estofats</p>
                                <p>3€</p>
                            </div>
                            <div id="menu_a3" class="box-plat">
                                <p>Patates Duquessa</p>
                                <p>2€</p>
                            </div>
                            <div id="menu_a4" class="box-plat">
                                <p>Amanida Catalana</p>
                                <p>2.5€</p>
                            </div>
                        </div>
                        <div class="col-menu">
                            <div id="menu_b1" class="box-plat">
                                <p>Pollastre al Forn amb Verduretes</p>
                                <p>3.5€</p>
                            </div>
                            <div id="menu_b2" class="box-plat">
                                <p>Truita de Carbassó i amanida</p>
                                <p>2.5€</p>
                            </div>
                            <div id="menu_b3" class="box-plat">
                                <p>Hamburgueses amb Patates Xips</p>
                                <p>3.5€</p>
                            </div>
                            <div id="menu_b4" class="box-plat">
                                <p>Pizza Casolana de Pernil i Formatge</p>
                                <p>3.5€</p>
                            </div>
                        </div>
                        <div class="col-menu">
                            <div id="menu_c1" class="box-plat">
                                <p>Pastís de Formatge</p>
                                <p>2.5€</p>
                            </div>
                            <div id="menu_c2" class="box-plat">
                                <p>Iogurt</p>
                                <p>1.5€</p>
                            </div>
                            <div id="menu_c3" class="box-plat">
                                <p>Flam</p>
                                <p>1.5€</p>
                            </div>
                            <div id="menu_c4" class="box-plat">
                                <p>Fruita de Temporada</p>
                                <p>1€</p>
                            </div>
                        </div>
                    </div>

                    <!-- ========== Column Right ======= --> 
                    <div class="content-right-side">
                        <!-- ========== Row Title ======== -->
                        <div class="title-right"><h3>Carretó de la Compra</h3></div>
                        <!-- ========== Row Price ========== -->
                        <div class="col-price">
                            <h4>Primer Plat</h4>
                            <div class="row-price">
                                <p id="primer-plat-name"></p>
                                <p id="primer-plat-price"></p>
                            </div>
                        </div>
                        <div class="col-price">
                            <h4>Segon Plat</h4>
                            <div class="row-price">
                                <p id="segon-plat-name"></p>
                                <p id="segon-plat-price"></p>
                            </div>
                        </div>
                        <div class="col-price">
                            <h4>Postres</h4>
                            <div class="row-price">
                                <p id="postre-name"></p>
                                <p id="postre-price"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ========== Row Flux ========== -->             
                <div class="content-flux">
                    <div class="back-index-butt btn">
                        <button id="back-to-index"><i style='font-size:14px' class='fas'>&#xf100;</i>  Previous Step</button>
                    </div>
                    <button id="send-order" class="send-order-butt">PREU 0.00 €</button>
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
    <script src="js/menu.js"></script>
    <script src="js/changeMenuPageTitle.js"></script>
    <!-- third party js ends -->
</body>
</html>