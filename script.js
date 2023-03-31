const btn = document.querySelector(".btn");
const container = document.querySelector("#container");
const containerTy = document.querySelector("#container-ty");
const ratings = document.querySelectorAll(".rating-number-item");
const tyRating = document.querySelector(".ty-rating");
let hasSelectedRating = false;
let selectedRatingNum = 0;

// Map original backgroundColor of each of the ratings
const originalBgColour = new Map();
ratings.forEach((element) => {
  originalBgColour.set(element, element.style.backgroundColor);
});

// Map original font colour of each of the ratings
const originalFontColour = new Map();
ratings.forEach((element) => {
  originalFontColour.set(element, element.style.color);
});

// Look through the ratings array and add click events to each item in the array
ratings.forEach((element) => {
  element.addEventListener("click", () => {
    /*If rating is clicked, look at all other ratings.
    If another rating font and background colour is not original, 
    change it's colour back to original colour.*/
    ratings.forEach((el) => {
      if (el !== element) {
        el.style.backgroundColor = originalBgColour.get(el);
        el.style.color = originalFontColour.get(el);
      }
    });
    /*Change selected rating font and background colour to white and orange respectively. 
    Save the rating to a variable and set hasSelectedRating flag to true*/
    element.style.backgroundColor = "#FC7614";
    element.style.color = "#FFF";
    selectedRatingNum = element.textContent;
    hasSelectedRating = true;
  });
});

/*Add click event listener to button.
If rating selected and button is clicked,
hide first container and show second.
Update thank you text.*/
btn.addEventListener("click", () => {
  if (hasSelectedRating) {
    container.style.display = "none";
    containerTy.style.display = "flex";
    tyRating.textContent = `You selected ${selectedRatingNum} out of 5`;
  } else {
    return;
  }
});
