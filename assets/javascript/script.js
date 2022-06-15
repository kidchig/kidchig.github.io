$(document).ready(function () {
    $("#maincontent").hide();
    $("#click").click(function () {
        $("#click").fadeOut(100);
        $("#maincontent").fadeIn(1000);
        $("#myVideo").get(0).play();
    });
});

document.onkeydown = function(e) {
    if(window.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
}  
