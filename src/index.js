import "./sass/styles.scss";

const ratingContainer = document.querySelector(".rating-container");
const thankYouContainer = document.querySelector(".submitted");
const submitButton = document.querySelector("button");
const ratingNumber = document.querySelectorAll(".rating-number");
const spanRating = document.querySelector(".final-rating");
const spanError = document.querySelector(".error");

const events = ["click", "touchlist"];
let rating = 0;

function toggleRating(event) {
  this.classList.remove("hover");
  event.preventDefault();
  rating = this.innerText;
  ratingNumber.forEach((rating) => {
    rating.classList.remove("active");
  });
  this.classList.add("active");
}

function submitRating(event) {
  event.preventDefault();
  if (rating === 0) {
    spanError.classList.add("active");
  } else {
    spanError.classList.remove("active");
    ratingContainer.style.display = "none";
    spanRating.innerText = `You selected ${rating} out of 5`;
    thankYouContainer.classList.add("active");
  }
}

function handleMouse() {
  this.classList.add("hover");
}

function removeMouseEvent() {
  this.classList.remove("hover");
}

ratingNumber.forEach((number) => {
  number.addEventListener("mouseover", handleMouse);
});

ratingNumber.forEach((number) => {
  number.addEventListener("mouseout", removeMouseEvent);
});

events.forEach((userEvent) => {
  ratingNumber.forEach((rating) => {
    rating.addEventListener(userEvent, toggleRating);
  });
});

events.forEach((userEvent) => {
  submitButton.addEventListener(userEvent, submitRating);
});
