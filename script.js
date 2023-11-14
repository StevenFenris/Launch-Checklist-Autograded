// Write your JavaScript code here!

//const { myFetch, pickPlanet} = require("./scriptHelper");

window.addEventListener("load", function() {


let list = document.getElementById("faultyItems");
let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        pilot = document.querySelector("input[name=pilotName]").value;
        copilot = document.querySelector("input[name=copilotName]").value;
        fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        cargoLevel = document.querySelector("input[name=cargoMass]").value;
        if(pilot === "" || copilot === "" || fuelLevel ==="" || cargoLevel === ""){alert("Must enter information into all fields!")}
        validateInput(cargoLevel) === "Not a Number" ? alert("Enter valid information for Cargo"):null
        validateInput(fuelLevel) === "Not a Number" ? alert("Enter valid information for Fuel"):null
        console.log(pilot, copilot, fuelLevel, cargoLevel);
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        event.preventDefault();
    });

let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
        
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        planetRando = pickPlanet(listedPlanets);
        console.log(planetRando);
        addDestinationInfo(document, planetRando.name, planetRando.diameter, planetRando.star, planetRando.distance, planetRando.moons, planetRando.image);
    });




 });
