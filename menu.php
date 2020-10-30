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
                    <!-- ========== Row Title ========== -->
                    <div class="content-row-title">
                        <div class="title-left"><h3>Menu del Migdia</h3></div>
                        <div class="title-right"><h3>Carretó de la Compra</h3></div>
                    </div>
                    <!-- ========== Row Menu ========== -->
                    <div class="content-row-menu">
                        <!-- Left Side -->
                        <div class="list-row-menu">
                            <div class="list-col-menu">
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
                            </div>
                            <div class="list-col-menu">
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
                            </div>
                            <div class="list-col-menu">
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
                        </div>
                        <!-- Right Side -->
                        <div class="list-row-menu-price">
                            <div>
                                <h4>Primer Plat</h4>
                                <div class="row-menu-price">
                                    <p id="primer-plat-name"></p>
                                    <p id="primer-plat-price"></p>
                                </div>
                            </div>
                            <div>
                                <h4>Segon Plat</h4>
                                <div class="row-menu-price">
                                    <p id="segon-plat-name"></p>
                                    <p id="segon-plat-price"></p>
                                </div>
                            </div>
                            <div>
                                <h4>Postres</h4>
                                <div class="row-menu-price">
                                    <p id="postre-name"></p>
                                    <p id="postre-price"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ========== Row Flux ========== -->
                    <div class="content-row-flux-nav">
                        <div class="back-index-butt">
                            <button id="back-to-index" >Previous Step</button>
                        </div>
                        <button id="send-order" class="send-order-butt">PREU 0.00 €</button>
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
    <script src="js/validacions_formulari.js"></script>
    <script src="js/menu.js"></script>

    <script type="text/javascript">
        document.getElementById("back-to-index").onclick = function () { location.href = "index.php"; };
        document.getElementById("send-order").onclick = function () { 
            
            let comanda = new Map();

            let nomPlat1 = document.getElementById('primer-plat-name').innerHTML;
            let nomPlat2 = document.getElementById('segon-plat-name').innerHTML;
            let nomPostre = document.getElementById('postre-name').innerHTML;

            if (nomPlat1 != '') {
                comanda['PrimerPlat'] = nomPlat1 + '_' + document.getElementById('primer-plat-price').innerHTML + '_1';
            }
            if (nomPlat2 != '') {
                comanda['SegonPlat'] = nomPlat2 + '_' + document.getElementById('segon-plat-price').innerHTML + '_1';
            }
            if (nomPostre != '') {
                comanda['Postre'] = nomPostre + '_' + document.getElementById('postre-price').innerHTML + '_1';
            }

            console.log(comanda);

            console.log(JSON.stringify(comanda));

            localStorage.setItem('comandaMenu', JSON.stringify(comanda));
            
            location.href = "formulari.php";
        };
    </script>
    <!-- third party js ends -->
</body>
</html>