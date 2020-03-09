
// Table Exercise

// First Capture Form

var registrationForm = document.getElementById('registration');

// Grab existiong buttons
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
registrationForm.addEventListener('submit', function (event) {
    // STOP the submission (event!)
    // Preents the page from refreshing or leaving for another blank page
    event.preventDefault();


    // Collect the form fields
    var nameInput = document.getElementById('tName');
    var ageInput = document.getElementById('tAge');
    var programInput = document.getElementById('tProgram');
    var cityInput = document.getElementById('tCity');

    // Retrieve the form fields
    var nameValue = (nameInput.value);
    var ageValue = (ageInput.value);
    var programValue = (programInput.value);
    var cityValue = (cityInput.value);

    // Create a new row
    var newRow = document.createElement('TR');

    //Create new cell for the row (Table Data)
    var nameCell = document.createElement('TD');
    nameCell.textContent = nameValue;
    newRow.appendChild(nameCell);

    //Create new cell for the row (Table Data)
    var ageCell = document.createElement('TD');
    ageCell.textContent = ageValue;
    newRow.appendChild(ageCell);

    //Create new cell for the row (Table Data)
    var programCell = document.createElement('TD');
    programCell.textContent = programValue;
    newRow.appendChild(programCell);

    //Create new cell for the row (Table Data)
    var cityCell = document.createElement('TD');
    cityCell.textContent = cityValue;
    newRow.appendChild(cityCell);


    // Create a delete button
    var deleteButton = document.createElement('BUTTON');
    deleteButton.textContent = 'Delete Row'; //Add text on the button
    deleteButton.addEventListener( 'click', function ( event ) {
        deleteRow( this ); // Delete the row!
        // In this case, "this" is the element the EVENT is happening to!
        // Remember objects? We used "this" to refer to itself there too!
    } );

    var actionCell = document.createElement('TD');
    actionCell.appendChild(deleteButton);
    newRow.appendChild(actionCell);  //Be sure to add this new cell to the rew too!
    
    //  Target your html table body to write out the values
    var tableBody = document.getElementById('table-body');

    //Inject the brand new row, with 4 table data columns inside
    tableBody.appendChild(newRow);

}   //close function
)   //close event listener


