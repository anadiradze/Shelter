const createElement = ({
  tag,
  classList,
  text,
  parent,
  id,
  child,
  src,
  href,
  draggable,
  ondragstart,
  ondrop,
  ondragover
}) => {
  const element = document.createElement(tag);
  if (id) {
    element.id = id;
  }
  if (classList.length) {
    classList.map((className) => {
      element.classList.add(className);
    });
  }
  if (text) {
    element.textContent = text;
  }
  if (parent) {
    parent.append(element);
  }
  if (child) {
    element.append(child);
  }
  if (src) {
    element.setAttribute("src", src);
  }
  if (href) {
    element.setAttribute("href", href);
  }
  if (draggable) {
    element.setAttribute("draggable", draggable);
  }
  if (ondragstart) {
    element.setAttribute("ondragstart", ondragstart);
  }
  if (ondrop) {
    element.setAttribute("ondrop", ondrop);
  }
  if (ondragover) {
    element.setAttribute("ondragover", ondragover);
  }
  return element;
};

export default createElement;
