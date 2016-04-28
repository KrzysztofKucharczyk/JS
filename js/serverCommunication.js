'use strict';

var serverCommunication = function() {
    // http://jsfiddle.net/mjaric/sewm6/

    function drawTable(data) {
        for (var i = 0; i < data.length; i++) {
            drawRow(data[i]);
        }
    }

    function drawRow(rowData) {
        var row = $("#inputDataPlace").append(row);
        row.append($("<tr>" + "<td>" + rowData.title + "</td>" + "<td>" + rowData.author + "</td>" + "</tr>"));
    }

    return {
        readFromFile: function() {
            var xmlhttp = new XMLHttpRequest(),
                pathToData = 'testJson.json';

            this.disallowWhenAlreadyEntered();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var json = $.parseJSON(xmlhttp.responseText);
                    drawTable(json);
                }
            }
            xmlhttp.open('GET', pathToData, true);
            xmlhttp.send();
        },

        disallowWhenAlreadyEntered: function() {
          $("#requestButton").hide();
          $("#requestTable").before("<div class=\"alert alert-info\" role=\"alert\">" + "Data has been already taken. Leave button alone." + "</div>");
        }
    };
}();
