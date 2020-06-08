(function() {
'use strict';

//Create new rows
var templateRow = document.getElementById('template');

//Body where new rows will go.
var tableBody = document.getElementById('tableBody');

//Firebase database link, under messages directory
var dataRef = new Firebase('https://wow-c3aee.firebaseio.com/messages');

//Update data
dataRef.on('child_added', function (snapshot) {

    var item = snapshot.val();

    addRow(item);
});


// Adds a new row
function addRow(item) {

    var row = templateRow.cloneNode(true);

    row.removeAttribute('id');

    row.style.display = '';

    for (var prop in item) {
       
        var field = row.querySelector('[data=' + prop + ']');

        field.innerHTML = item[prop];
    }
    tableBody.appendChild(row);
}

})();
