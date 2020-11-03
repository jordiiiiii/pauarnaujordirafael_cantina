<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Website Cantina Institut Pedralbes">
    <meta name="keywords" content="HTML, CSS, JavaScript, PHP">
    <meta name="author" content="Arnau Fernandez Jerez">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cantina Pedralbes Website</title>
    <?php include('includes.inc');?>
    <link rel="stylesheet" href="../css/arnauIndex.css">
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
                    <!-- SLIDESHOW D'IMATGES-->
                    <div class ="todo">
                        <div class="slideshow-container">
                            <div class="mySlides fade">
                                <div class="numbertext"></div>
                                <img src="../img/indexImg1.jpg">
                            </div>
                            <div class="mySlides fade">
                                <div class="numbertext"></div>
                                <img src="../img/indexImg2.jpg">
                            </div>
                            <div class="mySlides fade">
                                <div class="numbertext"></div>
                                <img src="../img/indexImg2.jpg">
                            </div>
                                <!--<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                                <a class="next" onclick="plusSlides(1)">&#10095;</a>  -->
                                <!-- <br>   -->
                            <div style="text-align:center">
                                <span class="dot" onclick="currentSlide(1)"></span>
                                <span class="dot" onclick="currentSlide(2)"></span>
                                <span class="dot" onclick="currentSlide(3)"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ========== Row Flux ========== -->
                <div class="content-flux">
                    <button id="send-admin" class="send-admin-butt">ADMIN</button>
                    <button id="send-menu" class="send-menu-butt">MENUS</button>
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
    <script src="../js/changeWelcomePageTitle.js"></script>
    <script src="../js/index.js"></script>
    <!-- third party js ends -->
</body>
</html>