$(document).ready(function() {
    $("span.topright").click(function() {
        $(this).parent().css("display", "none");
    });

    $("button.tablinks").click(function(event) {
        var buttonTabId = $(this).attr("id");
        var tabName = $("#" + buttonTabId).text();
        // Find the tab name that include a blank and take the blank away
        // to find an id for the section that belongs to
        var blankPos = tabName.search(" ");
        var i, tablinks;

        if (blankPos != -1) {
            // Create an array for the tab name that includes a blank
            var arr = tabName.split(" ");
            // Take away a blank from city name and concateante as one word for an element id
            tabName = arr[0] + arr[1];
        }
        
        // Don't display div tab(s) before emptyTab id
        $("div.tab").nextUntil("#emptyTab").css("display", "none");

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Find the tab name as an id
        $("#" + tabName).css("display", "block");
        event.currentTarget.className += " active";
    });

    $("#defaultOpen").click();
});