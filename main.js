function celsiusToFahrenheit(temperature){
    let fahrenheit = (temperature * 1.8) + 32;
    return fahrenheit;
}

let myCelsiusTemp = -30;
let result = celsiusToFahrenheit (myCelsiusTemp);
console.log(result);