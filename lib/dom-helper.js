var DOM = {};

DOM.create = function (tag, id, className) {
  var element = document.createElement(tag);

  if (id) {
    element.id = id;
  }

  if (className) {
    element.className = className;
  }

  return element;
}

DOM.insert = function (tag, id, className) {
  return this.appends(this.create(tag, id, className));
}

DOM.insertDiv = function (id, className) {
  return this.appends(this.create('div', id, className));
}

DOM.appends = function (element) {
  return document.body.appendChild(element);
}

DOM.append = function (element1, element2, element3) {
  var elements = [].slice.call(arguments);

  for (var i = 0; i < elements.length; i++) {
    this.appends(elements[i]);
  }
}

DOM.removes = function (element) {
  return element.parentNode.removeChild(element);
}

DOM.remove = function (element1, element2, element3) {
  var elements = [].slice.call(arguments);

  for (var i = 0; i < elements.length; i++) {
    this.removes(elements[i]);
  }
}

module.exports = DOM;
