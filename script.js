const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const score = document.getElementById("score");
const res = document.getElementById("res");
const btn = document.getElementById("btn");

rock.style.backgroundImage = `url(./rock${randomInteger(1, 3)}.png)`;
let record = 2;

function jump() {
  dino.classList.add("jump-animation");
  setTimeout(() =>
    dino.classList.remove("jump-animation"), 500);
}

btn.addEventListener('click', (event) => {
  if (!dino.classList.contains('jump-animation')) {
    jump();
  }
})

document.addEventListener('keypress', (event) => {
  if (!dino.classList.contains('jump-animation')) {
    jump();
  }
})

setInterval(() => {
  const dinoTop = parseInt(window.getComputedStyle(dino)
    .getPropertyValue('top'));
  const rockLeft = parseInt(window.getComputedStyle(rock)
    .getPropertyValue('left'));
  score.innerText++;

  if (rockLeft < 0) {
    rock.style.display = 'none';
    rock.style.backgroundImage = `url(./rock${randomInteger(1, 3)}.png)`;
    rock.style.animation = `rock ${randomFloat(0.90, 2.50)}s infinite`;
  } else {
    rock.style.display = ''
  }

  if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
    if (score.innerText > record) {
      res.innerHTML = "Рекорд: " + score.innerText;
      record = +score.innerText;
    }
    score.innerText = 0;
    //alert("Очки: " + score.innerText + ". Почати спочатку?")
    //location.reload();
  }
}, 50);

function randomInteger(min, max) { //[min; max]
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
