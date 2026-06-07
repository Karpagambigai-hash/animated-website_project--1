// LOADER

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.display = "none";
  }, 1200);
});


// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});


// MODAL FUNCTIONALITY

const gameCards = document.querySelectorAll(".game-card");
const modal = document.getElementById("gameModal");

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalImage = document.getElementById("modalImage");

const closeModal = document.getElementById("closeModal");

gameCards.forEach(card => {

  card.addEventListener("click", () => {

    const title = card.getAttribute("data-title");
    const description = card.getAttribute("data-description");
    const image = card.getAttribute("data-image");

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = image;

    modal.style.display = "flex";
  });

});


// CLOSE MODAL

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.style.display = "none";
  }
});


// SCROLL REVEAL ANIMATION

const reveals = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  reveals.forEach(section => {

    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealPoint = 120;

    if(revealTop < windowHeight - revealPoint){
      section.classList.add("active");
      section.classList.add("reveal");
    }

  });

});


// HERO BUTTON SCROLL

const exploreBtn = document.querySelector(".secondary-btn");

exploreBtn.addEventListener("click", () => {

  document.querySelector("#games").scrollIntoView({
    behavior:"smooth"
  });

});


// HEADER SHADOW ON SCROLL

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if(window.scrollY > 50){
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
  }
  else{
    header.style.boxShadow = "none";
  }

});