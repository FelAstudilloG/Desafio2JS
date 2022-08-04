const image = document.querySelector('.consola');

const cambiodemarco = () => {
  let marco = document.querySelector('.consola').style.border;
  if (!marco) {
    document.querySelector('.consola').style.border = "2px solid red";
  } else {
    document.querySelector('.consola').style.border = "";
  }
}
image.addEventListener("click", cambiodemarco);

const checkButton = document.querySelector('.check');

const checkTotal = () => {
  let num1 = document.querySelector('#ps1').value;
  let num2 = document.querySelector('#ps5').value;
  let num3 = document.querySelector('#snes').value;
  let num4 = document.querySelector('#switch').value;
  let total = +num1 + +num2 + +num3 + +num4;

  if (total <= 10) {
    document.querySelector('#Resultado').textContent = "Llevas " + total;
  } else {
    document.querySelector('#Resultado').textContent = "Llevas demasiados consolas"
  }
}
checkButton.addEventListener("click", checkTotal);

//Parte 3 del desafío
const passButton = document.querySelector('.passButton');

const checkPass = () => {
  let select1 = document.querySelector('#first').value;
  let select2 = document.querySelector('#second').value;
  let select3 = document.querySelector('#third').value;
  let pass = select1 + select2 + select3;

  if (pass === '911') {
    document.querySelector('#response').textContent = "Password 1 Exitoso";
  } else if (pass === '714') {
    document.querySelector('#response').textContent = "Password 2 Exitoso";
  } else {
    document.querySelector('#response').textContent = "Password Incorrecto, favor escribir uno bueno";
  }
}

passButton.addEventListener("click", checkPass);
