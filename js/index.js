/*====================================================
=            Section Onclick Button                  =
====================================================*/
/*=============================================
=            Adimn Button                  =
=============================================*/
document.getElementById("send-admin").onclick = function () { location.href = "./admin/administrador.php"; };
/*=====  End of Adimn Button  ======*/

/*=============================================
=            Menu Button                      =
=============================================*/
document.getElementById("send-menu").onclick = function () { location.href = "verifica.php"; };
/*=====  End of Menu Button  ==========*/
/*=====  End of Section Onclick Button  ============*/


/*====================================================
=            Section Functions                       =
====================================================*/
/*=============================================
=            Slideshow Functions              =
=============================================*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }   
    
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    
    slides[slideIndex-1].style.display = "block";
    
    setTimeout(showSlides, 3000); // la imatge canvia cada 3 segons
}
/*=====  End of Slideshow Functions  ======*/
/*=====  End of Section Functions  =================*/