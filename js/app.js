baguetteBox.run(".gallery", {
  animation: "fadeIn",
  noScrollbars: true,
});

const myInput = document.getElementById("myInput");

myInput.addEventListener("keyup", (e) => {
  let currentValue = e.target.value.toLowerCase();
  let anchors = document.querySelectorAll(".gallery a");
  anchors.forEach((anchor) => {
    if (
      anchor
        .getAttribute("data-caption")
        .toLocaleLowerCase()
        .includes(currentValue)
    ) {
      anchor.style.display = "block";
    } else {
      anchor.style.display = "none";
    }
  });
});

const TheseImages = document.querySelectorAll(".TheseImages");
TheseImages.forEach((image) => {
  let randomAniDelay = Math.floor(Math.random() * 500);
  image.style.animation = `fadeIn 1s .${randomAniDelay}s ease fowards`;
});
