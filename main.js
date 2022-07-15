const ratingContainer = document.querySelector('.rating-container');
const ratingFeedbackContainer = document.querySelector('.rating-feedback-container');
const rating = document.querySelector('.rating-result #rating');

const ratingButtons = document.querySelectorAll('.buttons button');
const submitRatingButton = document.querySelector('button.submit');

let selectedRating = null;

for (let button of ratingButtons) {
  
  button.addEventListener('click', function() {
    
    let currentActiveButton = document.querySelector('.buttons button.active');
    
    if (currentActiveButton) {
      currentActiveButton.classList.remove('active');
    }
  
    button.classList.add('active');
    
    selectedRating = button.textContent;

  })
}


submitRatingButton.addEventListener('click', function() {
  if (selectedRating) {
    rating.textContent = selectedRating;
    ratingContainer.classList.add('hide');
    ratingFeedbackContainer.classList.remove('hide');
  }
});
