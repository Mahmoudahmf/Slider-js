var imgs = Array.from(document.querySelectorAll(".item img"));

var popup = document.getElementById("popUpContainer");
var popupItem = document.getElementById("popUpItem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var close = document.getElementById("close");
var currentIndex = 0;
var popUpItemContainer = document.getElementById("popUpItemContainer");

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (eventInfo) {
    //console.log(eventInfo);

    currentIndex = imgs.indexOf(eventInfo.target);
    //console.log(currentIndex);

    var imgSrc = eventInfo.target.getAttribute("src");
    popupItem.style.backgroundImage = `url(${imgSrc})`;

    popup.style.display = "flex";
  });
}

function nextItem() {
  currentIndex++;
  if (currentIndex == imgs.length) {
    currentIndex = 0;
  }
  var imgSrc = imgs[currentIndex].getAttribute("src");
  popupItem.style.backgroundImage = `url(${imgSrc})`;
}
nextBtn.addEventListener("click", nextItem);

function prevItem() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgs.length - 1;
  }

  var imgSrc = imgs[currentIndex].getAttribute("src");
  popupItem.style.backgroundImage = `url(${imgSrc})`;
}
prevBtn.addEventListener("click", prevItem);

function closItem() {
  popup.style.display = "none";
}
close.addEventListener("click", closItem);

function closeContainer() {
  popup.style.display = "none";
}

popUpItemContainer.addEventListener("click", closeContainer);

document.addEventListener("keyup", function (eventInfo) {
  if (eventInfo.code == "ArrowRight") {
    nextItem();
  } else if (eventInfo.code == "ArrowLeft") {
    prevItem();
  } else if (eventInfo.code == "Escape") {
    closItem();
  }
});
