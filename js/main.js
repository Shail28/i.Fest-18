
$(document).ready(function(){
    $(".toggle-menu").click(function(){
        $('#menuBars').toggleClass('fa-bars fa-close');
        document.querySelector('.navList').classList.toggle("menuOpen");
    });
});
