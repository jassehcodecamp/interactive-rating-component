/**
 * Here, we set the initial variables for the Rating container, Rating feedback container, and the Rating result elements from our HTML
 */
const ratingContainer = document.querySelector('.rating-container');
const ratingFeedbackContainer = document.querySelector('.rating-feedback-container');
const rating = document.querySelector('.rating-result #rating');

/**
 * set initial variable for the rating buttons, and the submit rating button 
 */
const ratingButtons = document.querySelectorAll('.buttons button');
const submitRatingButton = document.querySelector('button.submit');

/**
 * Here, we assume that we don't know the selected rating yet. 
 */
let selectedRating = null;


/**
 * Here, we make a loop through the selected rating buttons (ratingButtons), 
 * and then attach an event listener on each button
 * when a button is clicked, we checked if there is a current active button, if so we reset/remove the active class from that button
 * and then add the active class to our newly clicked button
 * after that, we set the selected rating to the text content of the clicked button.  
 */
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

/**
 * Here, we also attached an event listener to the submit rating button
 * before we submit the rating we checked and confirmed that there is a selected rating. If so:
 *  we first set the rating text content to the selected rating
 *  next, hide the rating containter (the container with the rating buttons) by adding our "hide" class
 *  and finally remove the "hide" class from our rating feedback container.
 * 
 *  This completes the whole rating program
 */
submitRatingButton.addEventListener('click', function() {
  if (selectedRating) {
    rating.textContent = selectedRating;
    ratingContainer.classList.add('hide');
    ratingFeedbackContainer.classList.remove('hide');
  }
});
