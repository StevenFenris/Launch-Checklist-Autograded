// Write your helper functions here!

//require('cross-fetch/polyfill');

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
       document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
       document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
       let fuelStatus = document.getElementById("fuelStatus");
       let launchStatus = document.getElementById("launchStatus");
       let cargoStatus = document.getElementById("cargoStatus");
       //reset defaults to pass testing
       fuelStatus.innerHTML = ("Fuel level high enough for launch");
       cargoStatus.innerHTML = ("Cargo mass low enough for launch");
       //check values in console and then check for appropriate values for launch and make visible
       console.log(pilot, copilot, fuelLevel, cargoLevel);
       //let missionUpdate = document.getElementById("faultyItems");

      if(fuelLevel >= 10000 && cargoLevel <= 10000){ 
         launchStatus.style = ("color: green"); 
         launchStatus.innerHTML = ("Shuttle is Ready for Launch");
         //list.style = ("visibility: visible");
      }else if(fuelLevel < 10000 || cargoLevel > 10000){
         list.style = ("visibility: visible");
         launchStatus.style = ("color: red");
         launchStatus.innerHTML = ("Shuttle Not Ready for Launch");
         fuelLevel < 10000 ? fuelStatus.innerHTML = ("Fuel level too low for launch"):null;
         cargoLevel > 10000 ? cargoStatus.innerHTML = ("Cargo mass too heavy for launch"):null;
      }
       
       
      

    
 }
 
 async function myFetch() {
   let planets; 
   planets = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      //  const jsonPlanets = response.json();
      //  console.log(jsonPlanets);    
       return response.json()
   });
 return planets;
 }
 
 function pickPlanet(planets) {
   let planetRando = planets[Math.floor((Math.random() * 6))] //pick random planet
   return planetRando
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
