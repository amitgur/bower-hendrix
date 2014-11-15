$(document).ready( function(){

    var usersCtx = document.getElementById("myChartUsers").getContext("2d");
    var pagesCtx = document.getElementById("myChartPages").getContext("2d");
    var barUsers = new Chart(usersCtx).Line(dataUsers);
    var barPages = new Chart(pagesCtx).Line(dataPages);

});