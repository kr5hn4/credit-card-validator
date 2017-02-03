
function testField(field) {
    var regExp = new RegExp("[0-9]{15,19}");
    if (!regExp.test(field.value)) {
        // Case of error
        field.value = "";
        alert("wrong number!, please input a 15-19 digit card no. to validate");
    }
};

function validate() {

    // convert the number into an array of digits
    var number;
    number = document.getElementById('number').value;
    var num = number,
        digits = [],
        sNum = num.toString();
    for (var i = 0, len = sNum.length; i < len; i += 1) {
        digits.push(+sNum.charAt(i));
    }

    //record the last digit
    var digitsLength = digits.length;
    var lastDigit = digits[digitsLength - 1];

    //double odd positions
    var l = digitsLength - 1;
    for (var i = 0; i < l; i += 2) {
        digits[i] = digits[i] * 2;
    }

    //if doubling results in no. greater than 10 add the two digits
    for (var i = 0; i < l; i += 2) {
        if (digits[i] >= 10) {
            if (digits[i] == 10) {
                digits[i] = 1;
            }
            if (digits[i] == 12) {
                digits[i] = 3;
            }
            if (digits[i] == 14) {
                digits[i] = 5;
            }
            if (digits[i] == 16) {
                digits[i] = 7;
            }
            if (digits[i] == 18) {
                digits[i] = 9;
            }
        }
    }

    //calculate sum of all digits except checksum(i.e. last digit)
    var sumOfAllDigits = 0;
    for (var i = 0; i <= l; i++) {
        sumOfAllDigits += digits[i];
    }
    //if it is divisible by 10 its a valid card, else its not a valid card
    if (sumOfAllDigits % 10 == 0) {
        alert("valid");
    } else {
        alert("not valid")
    }
    // alert(sumOfAllDigits);


}
