"use strict";

const DomElement = function (selector) {
  if (selector !== undefined) {
    this.selector = selector.trim();
    this.createElement();
  }
  this.height;
  this.width;
  this.bg;
  this.fontSize;
};

DomElement.prototype.createElement = function () {
  const typeSelector = this.selector[0];
  const attrValue = this.selector.substring(1);
  switch (typeSelector) {
    case ".":
      this.element = document.createElement("div");

      attrValue != "" && this.element.classList.add(attrValue);
      break;
    case "#":
      this.element = document.createElement("p");
      attrValue != "" && (this.element.id = attrValue);
      break;
    default:
  }
};

//Есть конечно свойство cssText, но я уже сделал свой метод
DomElement.prototype.cssText = function (width, height, bg, fontSize) {
  width != undefined && (this.width = +width);
  height != undefined && (this.height = +height);
  bg != undefined && CSS.supports("color", bg) && (this.bg = bg);
  fontSize != undefined && (this.fontSize = +fontSize);

  !!this.element && !!this.height && (this.element.style.height = this.height + "px");
  !!this.element && !!this.width && (this.element.style.width = this.width + "px");
  !!this.element && !!this.bg && (this.element.style.backgroundColor = this.bg);
  !!this.element && !!this.fontSize && (this.element.style.fontSize = this.fontSize + "px");
};

DomElement.prototype.setText = function (content) {
  this.content = "" + content;
  !!this.element && (this.element.textContent = this.content);
};

DomElement.prototype.draw = function (parent) {
  this.parent = parent != undefined ? parent : document.body;
  if (this.element) {
    this.parent.append(this.element);
  } else {
    this.createElement();
    this.cssText(this.width, this.height, this.bg, this.fontSize);
    this.setText(this.content);
    !!this.element && this.parent.append(this.element);
  }
};

const a = new DomElement(".cube");
a.cssText(100, 100, "magenta", 24);
a.setText("");
a.element.style.position = "absolute";
a.element.style.overflow = "hidden";
a.element.style.display = "flex";
a.element.style.alignItems = "center";
a.element.style.justifyContent = "center";
a.element.style.overflowWrap = "anywhere";

a.draw();
const cube = document.querySelector(".cube");
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      cube.style.top = parseInt(cube.style.top || 0) - 10 + "px";
      break;
    case "ArrowDown":
      cube.style.top = parseInt(cube.style.top || 0) + 10 + "px";
      break;
    case "ArrowLeft":
      cube.style.left = parseInt(cube.style.left || 0) - 10 + "px";
      break;
    case "ArrowRight":
      cube.style.left = parseInt(cube.style.left || 0) + 10 + "px";
      break;
    case "Backspace":
      cube.textContent = cube.textContent.slice(0, -1);
      break;
    default:
      cube.textContent = cube.textContent + e.key;
      break;
  }
  console.log(e);
});
