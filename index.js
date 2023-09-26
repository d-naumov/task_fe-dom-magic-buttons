// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
console.log(btn);
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  document.body.appendChild(clonedBtn);
  clonedBtn.innerText = 'Я изменю тебя'
  clonedBtn.style.backgroundColor = '#a78b71';
  clonedBtn.style.color = 'white';
  clonedBtn.style.fontSize = '20px';
  clonedBtn.style.margin = '20px';
  clonedBtn.style.padding = '15px';
  clonedBtn.style.border = 'none';
  clonedBtn.style.borderRadius = '10px';
  console.log(clonedBtn);

})

// здесь можете создать EventListener для второй кнопки
clonedBtn.addEventListener('click', () => {
  btn.style.backgroundColor = `#9c4a1a`;
  btn.style.color = 'Black';
  console.log(btn);

})