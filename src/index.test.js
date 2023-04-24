import { describe, test, expect } from "@jest/globals";
import { renderOpenContent } from "./index";
import { renderGameBlock } from "./index";

describe("renderOpenContent", () => {
  test("should render level selection and start button", () => {
    // Создаем div для виртуальной DOM
    const container = document.createElement("div");

    // Вызываем функцию renderOpenContent
    renderOpenContent(container);

    // Проверяем наличие элементов в контейнере
    expect(container.querySelector("h1.openTitle")).not.toBeNull();
    expect(container.querySelector("div.lvlSelection")).not.toBeNull();
    expect(container.querySelectorAll("button.lvl").length).toBe(3);
    expect(container.querySelector("button.button")).not.toBeNull();
  });

  test("should change difficulty level on button click", () => {
    // Создаем div для виртуальной DOM
    const container = document.createElement("div");

    // Вызываем функцию renderOpenContent
    renderOpenContent(container);

    // Нажимаем на кнопку уровня сложности 2
    const lvl2Button = container.querySelector("button.lvl:nth-child(2)");
    lvl2Button.dispatchEvent(new MouseEvent("click"));

    // Проверяем, что значение уровня сложности изменилось в объекте window.application
    expect(window.application.dif).toBe(2);
  });
});

describe("renderGameBlock", () => {
  test("should render restart button", () => {
    const container = document.createElement("div");

    renderGameBlock(container);

    expect(container.querySelector("button.button")).not.toBeNull();
  });

  test("should reset settings on button click", () => {
    const container = document.createElement("div");

    renderGameBlock(container);

    const btn = container.querySelector("button.button");
    btn.dispatchEvent(new MouseEvent("click"));

    expect(window.application.selectedCard).toBe("0");
    expect(window.application.win).toBe(0);
  });
}); 
