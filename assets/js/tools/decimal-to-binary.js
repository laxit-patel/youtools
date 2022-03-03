//change values based on selected options
document.querySelector('#convert_value').addEventListener('change', function() {
    var select_val = document.querySelector('select').value;
    var input_placeholder = document.getElementById('val');
    var output = document.getElementById('result');
    input_placeholder.value = "";
    output.value = "";
    if (select_val == 'decimal') {
        input_placeholder.setAttribute('placeholder', 'Enter Decimal Value');
    } else if (select_val == 'binary') {
        input_placeholder.setAttribute('placeholder', 'Enter Binary Value');
    }
});
// adding click event to button based on selected values
document.querySelector('#convert').addEventListener('click', function() {
    var select_val = document.querySelector('select').value;
    var result = document.getElementById("result");
    if (select_val == 'decimal') {
        result.value = to_binary('val');
    } else if (select_val == 'binary') {
        result.value = to_decimal('val');
    }
});
// function to convert decimal to binary
function to_binary(x) {
    var decimal_value, binary_value, int_dec_val;
    decimal_value = document.getElementById(x).value;
    int_dec_value = parseInt(decimal_value); // converting string to int
    binary_value = int_dec_value.toString(2);
    return binary_value;
}
// function to convert binary to decimal
function to_decimal() {
    var decimal_value, binary_value;
    binary_value = document.getElementById("val").value;
    decimal_value = parseInt(binary_value, 2);
    return decimal_value;
}