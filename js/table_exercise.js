
var registrationForm = document.getElementById('registration');

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
    var deleteButton = document.createElement( 'BUTTON' );
    deleteButton.textContent = 'Delete Row'; //Add text on the button
    var actionCell = document.createElement( 'TD' );
    actionCell.appendChild (deleteButton);
    newRow.appendChild( actionCell);  //Be sure to add this new cell to the rew too!

        // Element will be the button pressed
        function deleteRow ( Element ) {  //Element will b the button we pressed
            var tableRow = Element.parentNode().parentNode(); // 2 levels up
            tableRow.parentNode().removeChild( tableRow);

        }

    //  Target your html table body to write out the values
    var tableBody = document.getElementById('table-body');

    //Inject the brand new row, with 4 table data columns inside
    tableBody.appendChild(newRow);

}   //close function
    )   //close event listener


