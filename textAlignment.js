//text alignment function
function alignText(alignment) {
  const selection = window.getSelection();

  if (selection.rangeCount === 0) {
    console.log("No text selected");
    return;
  }

  const range = selection.getRangeAt(0);

  console.log("Selection : ", selection);
  console.log("Selected Text : ", selection.toString());
  console.log("Range Details : ", range);

  if (!range.collapsed) {
    const parentSelection = range.startContainer.parentElement;
    if (parentSelection) {
      if (parentSelection.style) {
        parentSelection.style.textAlign = alignment;
      } else {
        console.log("Selected Element is not a block level element");
      }
    }
  } else {
    console.log("Text selection is collapsed");
  }
}

//event listeners for alignment buttons
document.querySelectorAll(".align_btn").forEach((button) =>
  button.addEventListener("click", () => {
    const alignment = button.getAttribute("data-align");
    alignText(alignment);
  })
);
