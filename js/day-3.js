
// Objects Again!


var myObject = {
firstname:  "Kel",
lastName:   "stalker",
syaHello: function () {
    var newP = docu.createElement('p')
    newP.textContent = "Hey There!";
    document.body.appendChild( newP );
    document.body.innerHTML +=`
        <dl>
        // Datalist Title    
        <dt>First Name:</dt> 
            
            <dd>`+this.firstname+' </dd>
    //dt is ALWAYS followed by dd (dataless data)
            <dt>Last Name:</ddt> // Datalist Title
            <dd>`+this.lastname+`</dd>`
        </dl>;}


}