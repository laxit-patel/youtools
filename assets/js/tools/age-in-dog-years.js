// input age calculation
function ageInDogYears() {
    let myAge = document.getElementById("years").value;
    let dogAge = myAge / 7;

    // if under 1 year, convert to months
    if (dogAge < 1) {
        $('#age-container').slideUp();
        dogAge = ((Math.round(dogAge * 100) / 100) * 12).toFixed(0);
        document.getElementById("age").innerHTML =
            dogAge + " months old in dog years";
        // 1 year and above
    } else {
        $('#age-container').show();
        dogAge = Math.round(dogAge);
        document.getElementById("age").innerHTML =
            dogAge + " years old in dog years";
    }
}