const love = document.querySelector(".love")
const content = document.querySelector(".content")
const int = document.querySelector(".hidden")

function changeText() {
  love.innerText = 'Нажми на сердце';
}
setTimeout(changeText, 5000);

function toggle() {
  content.classList.toggle('hidden')
  int.classList.toggle('hidden')
}

content.addEventListener('click', toggle)

