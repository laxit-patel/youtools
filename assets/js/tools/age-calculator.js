function calculateDateOfBirth() {

    var msg;
    var age = [];

    //number of milliseconds in a year, month, week, day, hour, minute, second, in that order
    var msConversions = [3.156e10, 2.63e9, 6.6048e8, 8.64e7, 3.6e6, 60000, 1000];

    //output strings
    var pluralUnits = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];
    var singleUnits = ["year", "month", "week", "day", "hour", "minute", "second"];

    //Get user's input
    var $birthyear = $('#year').val();
    var $birthmonth = $('#month').val();
    var $birthday = $('#day').val();

    //Set today and user's birthdate
    var today = new Date();
    var birthdate = new Date($birthyear, $birthmonth, $birthday);

    //Get age in milliseconds
    var ageInMs = today.getTime() - birthdate.getTime();

    //Sets values for age array
    function setAges() {
        var i;

        for (i = 0; i < msConversions.length; i++) {

            if (ageInMs / msConversions[i] < 0) {
                console.log("Dude, shut uuuup, you were not born in the future.");
                return false;
            }

            if (i === 0) {
                age.push(Math.floor(ageInMs / msConversions[0]));
            }

            if (i > 0) {
                age.push(Math.floor((ageInMs % msConversions[i - 1]) / msConversions[i]));
            }

        }

    }

    //Let's call it
    setAges();

    if (age.length === 0) {
        $('#results').empty();
        $('#results').append("<p>Dude, shut uuuup, you were not born in the future.</p>");
        return false;
    } else {
        //Set up output
        msg = "<p>You were born on " + $('#month option:selected').text() + " " + birthdate.getDate() + ", " + birthdate.getFullYear() + ".</p><p>You are ";

        //Loop through age array and add some formatting 
        var i;
        for (i = 0; i < age.length; i++) {

            //just to make sure the commas make sense
            if (age[i + 1] !== undefined) {

                //loop through age array and concatenate appropriate units
                if (age[i] === 1) {
                    msg += age[i] + " " + singleUnits[i] + ", ";
                } else {
                    msg += age[i] + " " + pluralUnits[i] + ", ";
                }

            } else {

                if (age[i] === 1) {
                    msg += age[i] + " " + singleUnits[i];
                } else {
                    msg += age[i] + " " + pluralUnits[i];
                }
            }

        }

        msg += " old.</p>";

        //append to DOM
        $('#results').empty();
        $('#results').append(msg);

        document.getElementById('msg_container').style.display = 'block';
    }
}

//on form submit
$('#dateOfBirth').bind('submit', function(e) {
    e.preventDefault();
    //Make it keep counting
    setInterval(function() { calculateDateOfBirth(); }, 1000);

});