// Write your JavaScript code here!

//const { myFetch, pickPlanet} = require("./scriptHelper");

window.addEventListener("load", function() {



//load planet on form load 
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      //  const jsonPlanets = response.json.then(function(json);
      //  console.log(jsonPlanets);    
       response.json().then(function(json) {
          console.log(json) //check planet data in console
          //let planetsResponse = json;
         planetRando = json[Math.floor((Math.random() * 6))] //pick random planet
                  const div = document.getElementById("missionTarget"); //add formatted planet display
                  div.innerHTML = `
                     <h2>Mission Destination</h2>
                        <ol>
                            <li>Name: ${planetRando.name}</li>
                            <li>Diameter: ${planetRando.diameter}</li>
                            <li>Star: ${planetRando.star}</li>
                            <li>Distance from Earth: ${planetRando.distance}</li>
                            <li>Number of Moons: ${planetRando.moons}</li>
                        </ol>
                        <img src="${planetRando.image}">
                  `;
               });
       });





/*
    let listedPlanets;
    //listedPlanetsRespo = myFetch();// Set listedPlanetsResponse equal to the value returned by calling myFetch()
    //console.log(listedPlanets);
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planetRando = pickPlanet(listedPlanets);
        console.log(planetRando);
        addDestinationInfo(document, planetRando.name, planetRando.diameter, planetRando.star, planetRando.distance, planetRando.moons, planetRando.imageUrl);
        
    })
    evt.preventDefault();

*/

let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {

    //form submission
       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]");
       

       //validation
       if (!pilotName.value || !copilotName.value || !fuelLevel.value || !cargoMass.value) {
           alert("All fields are required!")
           event.preventDefault();
       }
       if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
           alert("Fuel and Cargo must be numerals");
           event.preventDefault();
       }

       //status update
       document.getElementById("pilotStatus").innerHTML = 
          `Pilot ${pilotName.value} is ready for launch`;
       document.getElementById("copilotStatus").innerHTML = 
          `Co-Pilot ${copilotName.value} is ready for launch`;
       let fuelStatus = document.getElementById("fuelStatus");
       let launchStatus = document.getElementById("launchStatus");
       let cargoStatus = document.getElementById("cargoStatus");

       //check values in console and then check for appropriate values for launch and make visible
       console.log(pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
       let missionUpdate = document.getElementById("faultyItems");
       if(fuelLevel.value < 10000 || cargoMass > 10000){
          missionUpdate.style = ("visibility: visible");
          launchStatus.style = ("color: red");
          launchStatus.innerHTML = ("SHUTTLE NOT READY FOR LAUNCH");
          fuelLevel.value < 10000 ? fuelStatus.innerHTML = ("Fuel level not high enough for launch"):null;
          cargoMass.value > 10000 ? cargoStatus.innerHTML = ("Cargo Mass too High for Liftoff"):null;
       } else if(fuelLevel.value >= 10000 || cargoMass <= 10000){ 
          launchStatus.style = ("color: green"); 
          launchStatus.innerHTML = ("SHUTTLE READY FOR LAUNCH");
          missionUpdate.style = ("visibility: invisible");
         }

         //fetch planet data
       
       event.preventDefault();
   });


 });