

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 



// JavaScript to handle the toggler functionality (if needed)
document.addEventListener('DOMContentLoaded', function() {
    const togglerButton = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarSupportedContent');

    togglerButton.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });
});

