// Initial Ratings
const ratings = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 3.6,
  phillips: 4.1
};

// Total Stars
const starsTotal = 5;

// Run getRatings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);

// Form Elements
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

// Initialize Product
let product;

// Product Select Change
productSelect.addEventListener('change', (e) => {
  product = e.target.value;
  console.log(product);
  // Enable Rating Control
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

// Rating Control Change
ratingControl.addEventListener('blur', (e) => {
  const rating = e.target.value
  // Ensure 5 or under
  if (rating > 5) {
    alert('Please rate 1 - 5');
    return;
  }
  // Change Rating
  ratings[product] = rating;
  getRatings();
});

// Get Ratings -> for in loop
function getRatings() {
  console.log('in getRatings');
  for (let rating in ratings) {
    console.log(rating);
    console.log(ratings[rating]);

    // Get Percentage
    const starPercentage = (ratings[rating] / starsTotal * 100);
    console.log(starPercentage);

    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    console.log(starPercentageRounded);

    // Set width of stars-inner to percentage
    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

    // Add Number Rating
    document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
  } // end for in loop
} // end getRatings()
