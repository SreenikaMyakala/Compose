const modalHyperlink = document.querySelector(".modalHyperlink");
const hyperlinkButton = document.querySelector(".hyperlink_btn");
const applyButton = modalHyperlink.querySelector('button[type="submit"]');

hyperlinkButton.addEventListener("click", () => {
  selectionFunc();
});

function selectionFunc() {
  const selection = window.getSelection();
  if (!selection.isCollapsed) {
    openModal();
  } else {
    alert("please select a text first");
  }
}

function openModal() {
  modalHyperlink.style.display = "block";
}

function embedLink(url) {
  const selection = window.getSelection();
  if (!selection.isCollapsed) {
    const selectedText = selection.toString();
    const selectedRange = selection.getRangeAt(0);

    const anchorElement = document.createElement("a");
    anchorElement.href = url;
    anchorElement.textContent = selectedText;
    anchorElement.target = "_blank";

    selectedRange.deleteContents();
    selectedRange.insertNode(anchorElement);
  } else {
    console.log("No text selected");
  }
}

applyButton.addEventListener("click", () => {
  const input = modalHyperlink.querySelector('input[type="url"]');
  const url = input ? input.value.trim() : " ";
  if (!url) {
    alert("please enter a valid url");
    return;
  }
  embedLink(url);
  modalHyperlink.style.display = "none";
});
