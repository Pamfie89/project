window.application.screens["open"] = renderOpenScreen;
window.application.screens["game"] = renderGameScreen;

window.application.blocks["open-content"] = renderOpenContent;
window.application.blocks["game-block"] = renderGameBlock;
window.application.blocks["gameWin-block"] = renderWinBlock;

cardsBack = [
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
  { src: "./cards/рубашка.jpg", value: "cardBack" },
];
cards = [
  { src: "./cards/6 бубны.jpg", value: "Б6" },
  { src: "./cards/6 крести.jpg", value: "К6" },
  { src: "./cards/6 пики.jpg", value: "П6" },
  { src: "./cards/6 черви.jpg", value: "Ч6" },
  { src: "./cards/7 бубны.jpg", value: "Б7" },
  { src: "./cards/7 крести.jpg", value: "К7" },
  { src: "./cards/7 пики.jpg", value: "П7" },
  { src: "./cards/7 черви.jpg", value: "Ч7" },
  { src: "./cards/8 бубны.jpg", value: "Б8" },
  { src: "./cards/8 крести.jpg", value: "К8" },
  { src: "./cards/8 пики.jpg", value: "П8" },
  { src: "./cards/8 черви.jpg", value: "Ч8" },
  { src: "./cards/9 бубны.jpg", value: "Б9" },
  { src: "./cards/9 крести.jpg", value: "К9" },
  { src: "./cards/9 пики.jpg", value: "П9" },
  { src: "./cards/9 черви.jpg", value: "Ч8" },
  { src: "./cards/10 бубны.jpg", value: "Б10" },
  { src: "./cards/10 крести.jpg", value: "К10" },
  { src: "./cards/10 пики.jpg", value: "П10" },
  { src: "./cards/10 черви.jpg", value: "Ч10" },
  { src: "./cards/валет бубны.jpg", value: "БВ" },
  { src: "./cards/валет крести.jpg", value: "КВ" },
  { src: "./cards/валет пики.jpg", value: "ПВ" },
  { src: "./cards/валет черви.jpg", value: "ЧВ" },
  { src: "./cards/дама бубны.jpg", value: "БД" },
  { src: "./cards/дама крести.jpg", value: "КД" },
  { src: "./cards/дама пики.jpg", value: "ПД" },
  { src: "./cards/дама черви.jpg", value: "ЧД" },
  { src: "./cards/король бубны.jpg", value: "БК" },
  { src: "./cards/король крести.jpg", value: "КК" },
  { src: "./cards/король пики.jpg", value: "ПК" },
  { src: "./cards/король черви.jpg", value: "ЧК" },
  { src: "./cards/туз бубны.jpg", value: "БТ" },
  { src: "./cards/туз крести.jpg", value: "КТ" },
  { src: "./cards/туз пики.jpg", value: "ПТ" },
  { src: "./cards/туз черви.jpg", value: "ЧТ" },
];
function cardTemplate(card) {
  return {
    tag: "div",
    cls: "card",
    content: {
      tag: "img",
      cls: "card__img",
      attrs: {
        src: card.src,
        value: card.value,
      },
    },
  };
}
let cardResult = [];
let gamePairs = [];

window.addEventListener("DOMContentLoaded", function () {
  window.application.renderScreen("open");
});

function renderOpenScreen() {
  const app = document.querySelector(".app");
  app.textContent = "";

  const content = document.createElement("div");
  content.classList.add("openContent");

  window.application.renderBlock("open-content", content);

  app.appendChild(content);
}

function renderOpenContent(container) {
  const title = document.createElement("h1");
  title.textContent = "Выбери сложность";
  title.classList.add("openTitle");

  const div = document.createElement("div");
  div.classList.add("lvlSelection");
  const lvl_1 = document.createElement("button");
  lvl_1.textContent = "1";
  lvl_1.classList.add("lvl");
  lvl_1.addEventListener("click", (e) => {
    e.preventDefault();
    window.application.dif = 1;
  });
  const lvl_2 = document.createElement("button");
  lvl_2.textContent = "2";
  lvl_2.classList.add("lvl");
  lvl_2.addEventListener("click", (e) => {
    e.preventDefault();
    window.application.dif = 2;
  });
  const lvl_3 = document.createElement("button");
  lvl_3.textContent = "3";
  lvl_3.classList.add("lvl");
  lvl_3.addEventListener("click", (e) => {
    e.preventDefault();
    window.application.dif = 3;
  });

  const btn = document.createElement("button");
  btn.textContent = "Старт";
  btn.classList.add("button");
  btn.addEventListener("click", () => {
    if (!window.application.dif >= 1) {
      alert("Выберите уровень сложности!");
    } else {
      window.application.renderScreen("game");
    }
  });

  div.appendChild(lvl_1);
  div.appendChild(lvl_2);
  div.appendChild(lvl_3);

  container.appendChild(title);
  container.appendChild(div);
  container.appendChild(btn);
}

function renderGameScreen() {
  const app = document.querySelector(".app");
  app.textContent = "";

  const content = document.createElement("div");
  content.classList.add("gameContent");

  window.application.renderBlock("game-block", content);

  app.appendChild(content);
}

function renderGameBlock(container) {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("headerDiv");

  const timer = document.createElement("div");
  timer.classList.add("timer");
  const min = document.createElement("div");
  min.textContent = "min";
  min.classList.add("min");
  const sec = document.createElement("div");
  sec.textContent = "sec";
  sec.classList.add("sec");
  const gameTime = document.createElement("div");
  gameTime.classList.add("gameTime");
  const gameTimeMin = document.createElement("div");
  gameTimeMin.classList.add("gameTime");
  gameTimeMin.innerText = "00.";
  const gameTimeSec = document.createElement("div");
  gameTimeSec.classList.add("gameTime");
  gameTimeSec.innerText = "00";
  timer.appendChild(min);
  timer.appendChild(sec);
  timer.appendChild(gameTime);
  gameTime.appendChild(gameTimeMin);
  gameTime.appendChild(gameTimeSec);
  headerDiv.appendChild(timer);

  let minute = 00;
  let second = 00;
  let timerInterval;
  function Timer() {
    second++;
    if (second < 9) {
      gameTimeSec.innerText = "0" + second;
    }
    if (second > 9) {
      gameTimeSec.innerText = second;
    }
    if (second > 60) {
      minute++;
      gameTimeMin.innerText = "0" + minute;
      second = 0;
      gameTimeSec.innerText = "0" + second;
    }
  }

  const btn = document.createElement("button");
  btn.classList.add("button");
  btn.textContent = "Начать заново";
  btn.addEventListener("click", () => {
    window.application.selectedCard = 0;
    window.application.win = 0;
    window.application.renderScreen("open");
  });
  headerDiv.appendChild(btn);

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainer");
  if (window.application.dif === 1) {
    gamePairs[2].sort(() => Math.random() - 0.5);
    window.application.cards = gamePairs[2];
    cardContainer.appendChild(templateEngine(gamePairs[2].map(cardTemplate)));
  } else if (window.application.dif === 2) {
    gamePairs[5].sort(() => Math.random() - 0.5);
    window.application.cards = gamePairs[5];
    cardContainer.appendChild(templateEngine(gamePairs[5].map(cardTemplate)));
  } else if (window.application.dif === 3) {
    gamePairs[8].sort(() => Math.random() - 0.5);
    window.application.cards = gamePairs[8];
    cardContainer.appendChild(templateEngine(gamePairs[8].map(cardTemplate)));
  }

  container.appendChild(headerDiv);
  container.appendChild(cardContainer);
  const gameCard = cardContainer.querySelectorAll(".card__img");
  gameCard.forEach((cardImg) =>
    cardImg.addEventListener("click", (e) => {
      e.preventDefault();
      const indexSelectedCard = [...cardContainer.children].findIndex(
        (elem) => elem === e.target.parentNode
      );
      e.target.value = window.application.cards[indexSelectedCard].value;
      if (window.application.selectedCard === 0) {
        window.application.selectedCard = e.target.value;
        e.target.src = window.application.cards[indexSelectedCard].src;
        window.application.win = window.application.win + 1;
      } else {
        if (e.target.value === window.application.selectedCard) {
          e.target.src = window.application.cards[indexSelectedCard].src;
          window.application.selectedCard = 0;
          window.application.win = window.application.win + 1;
        } else {
          window.application.selectedCard = 0;
          window.application.win = 0;
          alert("lose");
          window.application.renderScreen("open");
        }
      }
    })
  );
  function win() {
    if (window.application.win === 6 && window.application.dif === 1) {
      window.application.renderBlock("gameWin-block", container);
      clearInterval(winTimer);
    } else if (window.application.win === 12 && window.application.dif === 2) {
      alert("win");
      clearInterval(winTimer);
    } else if (window.application.win === 18 && window.application.dif === 3) {
      alert("win");
      clearInterval(winTimer);
    }
  }
  const winTimer = setInterval(win, 100);
  function fivesec() {
    gameCard.forEach((cardImg) => {
      cardImg.src = cardsBack[0].src;
    });
    clearInterval(timerInterval);
    timerInterval = setInterval(Timer, 1000);
  }
  setTimeout(fivesec, 5000);
}

function renderWinBlock(container) {
  const grayDiv = document.createElement("div");
  grayDiv.classList.add("gray");
  const winWindow = document.createElement("div");
  winWindow.classList.add("winWindow");
  const img = document.createElement("img");
  img.classList.add("emodji");
  img.src = "./images/win.svg";
  const title = document.createElement("h1");
  title.textContent = "Вы выиграли!";
  title.classList.add("gameTitle");
  const playerTime = document.createElement("div");
  playerTime.classList.add("playerTime");
  const subtitle = document.createElement("h2");
  subtitle.textContent = "Затраченное время:";
  subtitle.classList.add("gameSubtitle");
  const playerRecord = document.createElement("p");
  playerRecord.textContent = "00.00";
  playerRecord.classList.add("playerRecord");
  const btn = document.createElement("button");
  btn.classList.add("button");
  btn.textContent = "Играть снова";
  btn.addEventListener("click", () => {
    window.application.selectedCard = 0;
    window.application.win = 0;
    window.application.renderScreen("open");
  });

  
  playerTime.appendChild(subtitle);
  playerTime.appendChild(playerRecord);
  winWindow.appendChild(img);
  winWindow.appendChild(title);
  winWindow.appendChild(playerTime);
  winWindow.appendChild(btn);
  container.appendChild(grayDiv);
  container.appendChild(winWindow);
}

for (let i = 0; i < 9; i++) {
  let randomIndex = Math.floor(Math.random() * (cards.length - i)) + i;
  cardResult.push(cards[randomIndex]);
  let result = cardResult.concat(cardResult);
  gamePairs.push(result);
  console.log(gamePairs);
}
