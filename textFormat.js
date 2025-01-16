function textFormat(tag) {
  const selection = window.getSelection();
  if (selection.rangeCount === 0) {
    console.log("No selected text");
    return;
  }

  const range = selection.getRangeAt(0);
  if (!range.collapsed) {
    const parentElement =
      range.commonAncestorContainer.nodeType === Node.TEXT_NODE
        ? range.commonAncestorContainer.parentElement
        : range.commonAncestorContainer;

    if (parentElement.tagName.toLowerCase === tag) {
      unWrapElement(parentElement);
    } else {
      const newElement = document.createElement(tag);
      newElement.appendChild(range.extractContents());
      range.insertNode(newElement);
    }
  }
}

function unWrapElement(element) {
  const parent = element.parentNode;
  while (element.firstChild) {
    parent.insertBefore(element.firstChild, element);
  }
  parent.removeChild(element);
}

document.querySelectorAll(".format_btn").forEach((button) =>
  button.addEventListener("click", () => {
    const tag = button.getAttribute("data-format");
    textFormat(tag);
  })
);
