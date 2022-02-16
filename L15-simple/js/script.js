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

const a = new DomElement();
a.selector = "#text";
a.cssText(500, 100, "lime", 70);
a.setText("Hello, World!!!");
a.draw();
