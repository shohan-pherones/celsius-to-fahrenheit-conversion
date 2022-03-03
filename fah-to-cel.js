function fahrenheitToCelcius(temperature){
    let celsius = (temperature - 32) * .5556;
    return celsius;
}

let myFahrenheit = -40;
let result = fahrenheitToCelcius (myFahrenheit);
console.log(result);