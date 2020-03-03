/* New Exercise - 3 March 2020
===
Build a JS object of your own to represent a hotel.
Properties of the hotel object should include the name of the hotel (The Quay), the total number of rooms (40), the current number of rooms booked (25), an array of the types of rooms (twin, double, suite), and function to check the availability.
One you've created your object, create a loop to log to the console all of the room types one-by-one. Then, update the booked rooms to 30, check the new availability, and output that using console.log */

var hotel_object = {
    name: 'The Quay',
    roomsTotal: 40,
    roomsBooked: 25,
    roomType: [
        'twin',
        'double',
        'suite'
        ],

    checkAvailability: function(){
        console.log ( ' Number of rooms currently available: ' + (this.roomsTotal - this.roomsBooked));
    
    hotel_object.roomsBooked += 5;
    hotel_object.checkAvailability();
   }
}