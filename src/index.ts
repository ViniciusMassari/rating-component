import './sass/styles.scss';

const ratingContainer: HTMLElement | null =
  document.querySelector('.rating-container');
const thankYouContainer = document.querySelector('.submitted');
const submitButton: HTMLButtonElement | null = document.querySelector('button');
const ratingNumber: NodeListOf<HTMLSpanElement> | null =
  document.querySelectorAll('.rating-number');
const spanRating: HTMLSpanElement | null =
  document.querySelector('.final-rating');
const spanError = document.querySelector('.error');
const backButton = document.getElementById('backButton');

const events = ['click', 'touchlist'];
let rating: string = '';

function toggleRating(this: HTMLSpanElement, event: Event) {
  this.classList.remove('hover');
  event.preventDefault();
  rating = this.innerText;
  ratingNumber?.forEach((rating) => {
    rating.classList.remove('active');
  });
  this.classList.add('active');
}

function submitRating(event: Event) {
  event.preventDefault();
  if (rating === '') {
    spanError?.classList.add('active');
  } else {
    spanError?.classList.remove('active');
    if (ratingContainer && spanRating && thankYouContainer) {
      ratingContainer.style.display = 'none';
      spanRating.innerText = `You selected ${rating} out of 5`;
      thankYouContainer.classList.add('active');
    }
  }
}

function reloadPage(e: Event) {
  if (backButton instanceof HTMLButtonElement) {
    window.location.reload();
  }
}

function handleMouse(this: HTMLSpanElement) {
  this.classList.add('hover');
}

function removeMouseEvent(this: HTMLSpanElement) {
  this.classList.remove('hover');
}

ratingNumber.forEach((number) => {
  number.addEventListener('mouseover', handleMouse);
});

ratingNumber.forEach((number) => {
  number.addEventListener('mouseout', removeMouseEvent);
});

events.forEach((userEvent) => {
  ratingNumber.forEach((rating) => {
    rating.addEventListener(userEvent, toggleRating);
  });
});

events.forEach((userEvent) => {
  submitButton?.addEventListener(userEvent, submitRating);
});

events.forEach((userEvent) => {
  backButton?.addEventListener(userEvent, reloadPage);
});
