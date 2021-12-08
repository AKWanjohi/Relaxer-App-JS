let container = document.querySelector(".container"),
  text = document.querySelector(".text"),
  pointerContainer = document.querySelector(".pointer-container");

let totalTime = 9000,
  breatheTime = (totalTime / 5) * 2,
  holdTime = totalTime / 5;

let breatheAnimationDuration = String(totalTime / 1000) + "s",
  animationDuration = String(breatheTime / 1000) + "s";

pointerContainer.style.animationDuration = breatheAnimationDuration;

breatheAnimation();

setInterval(breatheAnimation, totalTime);

function breatheAnimation() {
  text.textContent = "Breathe In!";
  container.className = "container grow";

  let containerGrow = document.querySelector(".container.grow");
  containerGrow.style.animationDuration = animationDuration;

  setTimeout(function () {
    text.textContent = "Hold";

    setTimeout(function () {
      text.textContent = "Breathe Out!";
      container.className = "container shrink";

      let containerShrink = document.querySelector(".container.shrink");
      containerShrink.style.animationDuration = animationDuration;
    }, holdTime);
  }, breatheTime);
}
