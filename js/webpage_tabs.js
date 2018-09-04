$(document).ready(function() {
    $("span.topright").click(function() {
        $(this).parent().css("display", "none");
    });

    $("button.tablinks").click(function(event) {
        var cityId = $(this).attr("id");
        var cityName = $("#" + cityId).text();
        var blankPos = cityName.search(" ");
        var i, tablinks;

        if (blankPos != -1) {
            var arr = cityName.split(" ");
            cityName = arr[0] + arr[1];
        }

        //$("div.tab").children().attr("class").replace(" active", "");
        
        $("div.tab").nextUntil("#emptyTab").css("display", "none");

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        //document.getElementById(cityName).style.display = "block";
        $("#" + cityName).css("display", "block");
        event.currentTarget.className += " active";
    });

    $("#defaultOpen").click();
});