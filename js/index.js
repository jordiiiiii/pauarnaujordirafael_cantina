//SLIDESHOW FUNCTIONS
var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }   
            
            slideIndex++;
        
            if (slideIndex > slides.length) {
                slideIndex = 1
            }
            
            slides[slideIndex-1].style.display = "block";
            
            setTimeout(showSlides, 5000); // la imatge canvia cada 3 segons
        }