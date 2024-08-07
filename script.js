const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+[]{}|;:,.<>?/~`";
const allChars = upperCase + lowerCase + number + symbol;
function createPassword() {
let password = "";
password += upperCase[Math.round(Math.random() * upperCase.length)]
password += lowerCase[Math.round(Math.random() * lowerCase.length)]
password += number[Math.round(Math.random() * number.length)]
password += symbol[Math.round(Math.random() * symbol.length)]
while (length > password.length) {
password += allChars[Math.round(Math.random() * allChars.length)]
}
passwordBox.value = password;
}
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    }
    function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
    x.type = "text";
    } else {
    x.type = "password";
    }
    }