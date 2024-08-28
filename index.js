
var text1 = prompt('Введіть значення для першого поля:');
var text2 = prompt('Введіть значення для другого поля:');
if (text1 && text2) {
    alert('Обидва поля заповнені');
} else {
    alert('Не всі поля заповнені');
}

var num1 = parseFloat(prompt('Введіть перше число:'));
var num2 = parseFloat(prompt('Введіть друге число:'));
if ((num1 + num2) > 10) {
    alert('Сума більша за 10');
} else {
    alert('Сума менша або дорівнює 10');
}

var textInput = prompt('Введіть текст:').toLowerCase();
if (textInput.includes('javascript')) {
    alert('Текст містить слово JavaScript');
} else {
    alert('Текст не містить слово JavaScript');
}

var rangeInput = parseInt(prompt('Введіть число:'));
if (rangeInput > 10 && rangeInput < 20) {
    alert('Число входить в діапазон від 10 до 20');
} else {
    alert('Число не входить в діапазон від 10 до 20');
}

var name = prompt('Введіть ім\'я:');
var email = prompt('Введіть email:');
var password = prompt('Введіть пароль:');
if (name.length >= 3 && email.includes('@') && email.includes('.') && email.indexOf('.') > email.indexOf('@') && password.length >= 6) {
    alert('Дані введені правильно.');
} else {
    alert('Помилка: перевірте правильність введених даних.');
}
