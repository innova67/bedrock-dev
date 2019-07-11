
var docButton = document.getElementById("btn-doc")
docButton.addEventListener("mouseover", mouseOverDoc);
docButton.addEventListener("mouseout", mouseOutDoc);
var imgDoc = document.getElementById("img-doc");
var gifDoc = document.getElementById("gif-doc");

var tutoButton = document.getElementById("btn-tuto")
tutoButton.addEventListener("mouseover", mouseOverTuto);
tutoButton.addEventListener("mouseout", mouseOutTuto);
var imgTuto = document.getElementById("img-tuto");
var gifTuto = document.getElementById("gif-tuto");

var tipsButton = document.getElementById("btn-tips")
tipsButton.addEventListener("mouseover", mouseOverTips);
tipsButton.addEventListener("mouseout", mouseOutTips);
var imgTips = document.getElementById("img-tips");
var gifTips = document.getElementById("gif-tips");


function mouseOverDoc() {
  imgDoc.style.display = "none";
  gifDoc.style.display = "block";
}
function mouseOutDoc() {
  gifDoc.style.display = "none";
  imgDoc.style.display = "block";
}

function mouseOverTuto() {
  imgTuto.style.display = "none";
  gifTuto.style.display = "block";
}
function mouseOutTuto() {
  gifTuto.style.display = "none";
  imgTuto.style.display = "block";
}

function mouseOverTips() {
  imgTips.style.display = "none";
  gifTips.style.display = "block";
}
function mouseOutTips() {
  gifTips.style.display = "none";
  imgTips.style.display = "block";
}