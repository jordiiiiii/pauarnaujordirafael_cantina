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
                <!-- ========== Codi Arnau Start ========== -->
                <!-- ========== Row Present ========== -->
                <div class="content-row-present">
                    <h2>BENVINGUTS</h2>
                    <h2>LA TEVA COMANDA</h2>
                    <h2>DETALLS ENCARREC</h2>
                    <h2>CONFIRMACIO</h2>
                </div>

                <div class="content-box">
                    
                    <!-- SLIDESHOW D'IMATGES-->
                    <div class ="todo">
                        <div class="slideshow-container">
                            <div class="mySlides fade">
                                    <div class="numbertext"></div>
                                    <img src="img/img1.jpg" style="width:80%">
                                </div>
            
                                <div class="mySlides fade">
                                    <div class="numbertext"></div>
                                    <img src="img/img2.jpg" style="width:80%">
                                </div>
            
                                <div class="mySlides fade">
                                    <div class="numbertext"></div>
                                    <img src="img/img3.jpg" style="width:80%">              
                                </div>
                                    <!--<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                                    <a class="next" onclick="plusSlides(1)">&#10095;</a>  --> 
                                    <br>  
                                <div style="text-align:center">
                                    <span class="dot" onclick="currentSlide(1)"></span> 
                                    <span class="dot" onclick="currentSlide(2)"></span> 
                                    <span class="dot" onclick="currentSlide(3)"></span> 
                                </div>
            
                            </div>
        
                            <!--Botons fer comanda / admin -->
        
                            <div class="botons">     
                                <p>
                                    <button id ="fer_comanda" class="boto">FER COMANDA</button>
                                    <button id ="admnistrador" class="boto">ADMINISTRADOR</button>
                                </p>
                            
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
    <script src="js/index.js"></script>
    <script>
        /*JavaScript botons*/
        document.getElementById("fer_comanda").onclick = function () { 
            location.href = "menu.php";
        };
        
        document.getElementById("admnistrador").onclick = function () { 
            location.href = "administrador.php";
        };

    </script>

    <!-- third party js ends -->

</body>
</html>
<!-- <img src="hospital.png" id="hospitals" onclick="damarkers();"> -->