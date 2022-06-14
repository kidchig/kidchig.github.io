$(document).ready(function () {
    $("#maincontent").hide();
    $("#click").click(function () {
        $("#click").fadeOut(100);
        $("#maincontent").fadeIn(1000);
        $("#myVideo").get(0).play();
        $("#myAudio").get(0).play();
    });
});
