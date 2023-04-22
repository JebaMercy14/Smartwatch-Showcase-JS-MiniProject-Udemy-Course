var skinImageUrls = {
  "red": "https://i.imgur.com/PTgQlim.png",
  "black": "https://i.imgur.com/iOeUBV7.png",
  "blue": "https://i.imgur.com/Mplj1YR.png",
  "pink": "https://i.imgur.com/Zygu7I3.png",
  "purple": "https://i.imgur.com/xSIK4M8.png"
};

function onButtonClick() {
  var selectedColor = prompt("Enter the color of the smartwatch (red, black, blue, pink, purple):");
  if (selectedColor && skinImageUrls.hasOwnProperty(selectedColor)) {
    var smartwatchImage = document.getElementById("smartwatch-image");
    smartwatchImage.src = skinImageUrls[selectedColor];
  } else {
    alert("Invalid color selection. Please try again.");
  }
}
