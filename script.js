// simple smooth scroll
const text = "WEB DEVELOPER! ";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("type-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 150); // speed
  }
  else {
    setTimeout(() => {
      document.getElementById("type-text").innerHTML = ""; // clear text
      index = 0; // reset index
      typeWriter(); // restart
    }, 1000);
}
}
typeWriter();
function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const time = `${hours}:${minutes}:${seconds}`;

  document.getElementById("clock").innerText = time;
}
setInterval(updateClock, 1000);


updateClock();

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  let scrollValue = window.scrollY;

  hero.style.opacity = 1 - scrollValue / 400;
  hero.style.filter = `blur(${scrollValue / 20}px)`;
});


const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      card.classList.add("show");   
    } else {
      card.classList.remove("show");
    }
  });
});