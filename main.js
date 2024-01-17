
var registerForm = document.querySelector(".registerForm");
var para = document.querySelector("p");
var result;
registerForm.onsubmit = function (e) {
    e.preventDefault();
    var element = e.target.elements;
    var price = {
        moneyNumber: element['amount'].value,
        moneyType: element['exchange'].value,
    };
    if (price.moneyType == 'dollar') {
        result = price.moneyNumber * 3.4;
    }
    else if (price.moneyType == 'dinar') {
        result = price.moneyNumber * 4.3;
    }
    else {
        result = price.moneyNumber;
    }
    para.textContent = `Converted amount is : ${result} `;
}
