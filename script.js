// Write your JavaScript code here!

const { myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    listedPlanets = myFetch();// Set listedPlanetsResponse equal to the value returned by calling myFetch()
    console.log(listedPlanets);
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planetRando = pickPlanet(listedPlanets);
        console.log(planetRando);
        
    })
    evt.preventDefault();
 });