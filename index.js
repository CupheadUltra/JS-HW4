
function checkTextFields() {
  const text1 = document.getElementById('text1').value;
  const text2 = document.getElementById('text2').value;
  const result = document.getElementById('textResult');

  if (text1 && text2) {
      result.textContent = "Обидва поля заповнені";
  } else {
      result.textContent = "Не всі поля заповнені";
  }
}

function checkSum() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const result = document.getElementById('sumResult');

  if (num1 + num2 > 10) {
      result.textContent = "Сума більша за 10";
  } else {
      result.textContent = "Сума менша або дорівнює 10";
  }
}

function checkJavaScript() {
  const text = document.getElementById('jsText').value;
  const result = document.getElementById('jsResult');

  if (text.includes("JavaScript")) {
      result.textContent = "Текст містить слово JavaScript";
  } else {
      result.textContent = "Текст не містить слово JavaScript";
  }
}

function checkRange() {
  const number = parseFloat(document.getElementById('rangeNumber').value);
  const result = document.getElementById('rangeResult');

  if (number > 10 && number < 20) {
      result.textContent = "Число входить в діапазон від 10 до 20";
  } else {
      result.textContent = "Число не входить в діапазон від 10 до 20";
  }
}

function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const result = document.getElementById('formResult');

  const nameValid = name.length >= 3;
  const emailValid = email.includes('@') && email.indexOf('.') > email.indexOf('@');
  const passwordValid = password.length >= 6;

  if (nameValid && emailValid && passwordValid) {
      result.textContent = "Дані заповнені правильно, перенаправлення...";
     
      window.location.href = "success.html";
      return false;
  } else {
      result.textContent = "Дані заповнені неправильно";
      return false;
  }
}
