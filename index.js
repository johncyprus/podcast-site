let submitButton = document.querySelector(".content__btn");
let inputEl = document.querySelector(".content__input");
let inputLabel = document.querySelector(".content__input-label");

function validateEmail(inputEl, cssPseudoclass) {
  return inputEl.matches(cssPseudoclass);
}

function labelFadeInFadeOut(el, className) {
  el.classList.add(className);

  setTimeout(() => {
    el.classList.remove(className);
  }, 2000);
}

submitButton.addEventListener('click', (e) => {
  if (inputEl.value === '') {
    inputLabel.innerHTML = "Oops! Please add your email";
    labelFadeInFadeOut(inputLabel, 'active');

  } else {
    if (!validateEmail(inputEl, ':valid')) {
      inputLabel.innerHTML = "Oops! Please check your email";
      labelFadeInFadeOut(inputLabel, 'active');
    }
  }
});