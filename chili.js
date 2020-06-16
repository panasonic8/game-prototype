$(document).ready(function () {
    //animación número uno
$("#ajibtn").mouseover(function () { 
    $("#imgaji").css("width", "250px");

$("#ajibtn").mouseleave(function () { 
    $("#imgaji").css("width", "230px");
    });
});

$("#ajibtn").click(function () { 
    if(Number(localStorage.ajinum) >= 1100){
    $("#al").append();
    }
    
});

});