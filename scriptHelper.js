// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const div = document.getElementById("missionTarget");
    div.innerHTML = `
       <h2>Mission Destination</h2>
          <ol>
              <li>Name: ${name}</li>
              <li>Diameter: ${diameter}</li>
              <li>Star: ${star}</li>
              <li>Distance from Earth: ${distance}</li>
              <li>Number of Moons: ${moons}</li>
          </ol>
          <img src="${imageUrl}">
    `;
 }
 
 function validateInput(testInput) {
    //let pilotName = document.querySelector("input[name=pilotName]");
    //let copilotName = document.querySelector("input[name=copilotName]");
    let validateOut;
    if(isNaN(testInput)) {
        //alert("Fuel and Cargo must be numerals");
        validateOut = "Not a Number";
    }else if(testInput === ""){
        //alert("Fuel and Cargo cannot be empty");
        validateOut = "Empty";
    }else validateOut = "Is a Number";


    return validateOut;
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    pilot = document.querySelector("input[name=pilotName]");
    copilot = document.querySelector("input[name=copilotName]");
    fuelLevel = document.querySelector("input[name=fuelLevel]");
    validateInput(fuelLevel);
    cargoLevel = document.querySelector("input[name=cargoMass]");
    validateInput(cargoLevel);
    list = document.getElementById("faultyItems");
    list.style = ("visibility: visible");


    
 }
 
 async function myFetch() {
    let planetList;
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      //  const jsonPlanets = response.json.then(function(json);
      //  console.log(jsonPlanets);    
       response.json().then(function(json) {
        planetList = json;
        return planetList;
               });
       });
 }
 
 function pickPlanet(planets) {
    return (planets[Math.floor((Math.random() * planets.length))])
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;