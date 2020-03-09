// To-Do List Capture Form using table-exercise as template

var toDoListForm = document.getElementById('toDoTable');

// Grab existiong buttons  (only one right now, may add more)
var allButtons = document.querySelectorAll('td > button');
// Loop through our query selected buttons
for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function (event) {
        deleteRow(this);
    }
    );
}

// Element will be the button pressed
function deleteRow(element) {  //Element will b the button we pressed
    var tableRow = element.parentNode.parentNode; // 2 levels up
    tableRow.parentNode.removeChild(tableRow);  // and element cannot delete itself so tell the parent to do it
}

// Listen for click event
toDoListForm = document.getElementById('toDoTableForm');
addEventListener('submit', function (event) {
    // STOP the submission (event!)
    // Preents the page from refreshing or leaving for another blank page
    event.preventDefault();


    // Collect the form fields
    var toDoInput = document.getElementById('tToDo');

    // Retrieve the form field (only one right now)
    var toDoValue = (toDoInput.value);

    // Create a new row
    var newRow = document.createElement('TR');

    //Create new cell for the row (Table Data)
    var toDoCell = document.createElement('TD');
    toDoCell.textContent = toDoValue;
    newRow.appendChild(toDoCell);

    // Create a delete button
    var deleteButton = document.createElement('BUTTON');
    deleteButton.textContent = 'Delete Item'; //Add text on the button
    deleteButton.addEventListener( 'click', function ( event ) {
        deleteRow( this ); // Delete the row!
        // In this case, "this" is the element the EVENT is happening to!
        // Remember objects? We used "this" to refer to itself there too!
    } );

    var actionCell = document.createElement('TD');
    actionCell.appendChild(deleteButton);
    newRow.appendChild(actionCell);  //Be sure to add this new cell to the rew too!
    
    //  Target your html table body to write out the values
    var tableBody = document.getElementById("toDoTable");

    //Inject the brand new row, with table data columns inside
    tableBody.appendChild(newRow);
    


}   //close function
)   //close event listener