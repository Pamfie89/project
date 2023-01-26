window.application.screens["open"] = renderOpenScreen;
window.application.screens["game1"] = renderGame1Screen;
window.application.screens["game2"] = renderGame2Screen;
window.application.screens["game3"] = renderGame3Screen;
window.application.screens["test1"] = renderTest1Screen;
window.application.screens["test2"] = renderTest2Screen;

window.application.blocks["open-content"] = renderOpenContent;
window.application.blocks["test1-block"] = renderTest1Block;
window.application.blocks["test2-block"] = renderTest2Block;

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
      },
    },
  };
}

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
    } else if (window.application.dif === 1) {
      window.application.renderScreen("game1");
    } else if (window.application.dif === 2) {
      window.application.renderScreen("game2");
    } else if (window.application.dif === 3) {
      window.application.renderScreen("game3");
    }
  });

  div.appendChild(lvl_1);
  div.appendChild(lvl_2);
  div.appendChild(lvl_3);

  container.appendChild(title);
  container.appendChild(div);
  container.appendChild(btn);
}

function renderGame1Screen() {
  const app = document.querySelector(".app");
  app.textContent = "";
}

function renderGame2Screen() {
  const app = document.querySelector(".app");
  app.textContent = "";
}

function renderGame3Screen() {
  const app = document.querySelector(".app");
  app.textContent = "";
}

function renderTest1Screen() {
  const app = document.querySelector(".app");
  app.textContent = "";

  const content = document.createElement("div");
  content.classList.add("gameContent");

  window.application.renderBlock("test1-block", content);

  app.appendChild(content);
}

function renderTest1Block(container) {
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
  gameTime.textContent = "00.00";
  timer.appendChild(min);
  timer.appendChild(sec);
  timer.appendChild(gameTime);
  headerDiv.appendChild(timer);

  const btn = document.createElement("button");
  btn.classList.add("button");
  btn.textContent = "Начать заново";
  headerDiv.appendChild(btn);

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainer");
  cardContainer.appendChild(templateEngine(cards.map(cardTemplate)));

  container.appendChild(headerDiv);
  container.appendChild(cardContainer);
}

function renderTest2Screen() {
  const app = document.querySelector(".app");
  app.textContent = "";

  const content = document.createElement("div");
  content.classList.add("gameContent");

  window.application.renderBlock("test2-block", content);

  app.appendChild(content);
}

function renderTest2Block(container) {
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
  gameTime.textContent = "00.00";
  timer.appendChild(min);
  timer.appendChild(sec);
  timer.appendChild(gameTime);
  headerDiv.appendChild(timer);

  const btn = document.createElement("button");
  btn.classList.add("button");
  btn.textContent = "Начать заново";
  headerDiv.appendChild(btn);

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainer");
  cardContainer.appendChild(templateEngine(cardsBack.map(cardTemplate)));

  container.appendChild(headerDiv);
  container.appendChild(cardContainer);
}
