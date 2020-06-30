function log(obb){
    var figure = document.getElementById('abb');
    figure.innerHTML = figure.innerHTML + abb + '<br/>';
}
// object literal syntax for creating object 
var person = {
    "name" : "yakshith",
    "grade": 8,
    "isworking":false,
    emailids : ["siva.lankada@gmail.com" , "jaya,lankada@gmail.com" ],
    address : {
        firstline :"no : 12 , 5th avenue ",
        secondline : "jersy city "
    },
    doespersonworks : function(){
        return this.isworking;
    }
};

// accessing property of an object 
console.log(person);
console.log(person.name);
console.log( person["grade"]); 

// modifying property values

person.grade = 9;

console.log(person.grade);
console.log(person);

// calling methods of the  person object

console.log(person.doespersonworks());