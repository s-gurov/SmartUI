// Сounters
const onSectionHitEvent = new Event("onSectionHit");

const runCounters = () => {
  startCounter(23567, "recipesAvailable");
  startCounter(431729, "activeUsers");
  startCounter(892173, "positiveReviews");
  startCounter(56581, "photosAndVideos");
  startCounter(3182, "spicesAndHerbs");
  document.getElementById("numbersBox").removeEventListener("onSectionHit", runCounters);
}

const startCounter = (number, elemId) => {
  let timeStep = 40;
  let counterStep;
  const counterElement = document.getElementById(elemId);
  counterStep = Math.trunc(number / timeStep);
  const offset = number - timeStep * counterStep; 
  let counter = 0;
  let interval = setInterval(() => {
    counter += counterStep;
    if (counter + offset === number) {
      counter += offset;
      clearInterval(interval)
    }
    counterElement.innerHTML = counter.toLocaleString("en-US");
  }, timeStep);
}

numbersBox.addEventListener("onSectionHit", runCounters);
window.addEventListener('scroll', () => {
  if (numbersBox.offsetTop - window.scrollY - window.innerHeight < 0) {
    document.getElementById("numbersBox").dispatchEvent(onSectionHitEvent);
  }
});

// Load cuisines dynamically
const cuisinesArr = [
  {
    name: "Italian",
    recipes: 327,
    img: "img/cuisines/italian.jpg",
  },
  {
    name: "Indian",
    recipes: 856,
    img: "img/cuisines/indian.jpg",
  },
  {
    name: "French",
    recipes: 27,
    img: "img/cuisines/french.jpg",
  },
  {
    name: "Steakhouse",
    recipes: 174,
    img: "img/cuisines/steachouse.jpg",
  },
  {
    name: "Seafood",
    recipes: 731,
    img: "img/cuisines/seafood.jpg",
  },
  {
    name: "Sushi",
    recipes: 237,
    img: "img/cuisines/sushi.jpg",
  },
  {
    name: "Mexican",
    recipes: 529,
    img: "img/cuisines/mexican.jpg",
  },
  {
    name: "Chinese",
    recipes: 145,
    img: "img/cuisines/chinese.jpg",
  },
  {
    name: "Pizza",
    recipes: 327,
    img: "img/cuisines/pizza.jpg",
  },
  {
    name: "American",
    recipes: 1437,
    img: "img/cuisines/american.jpg",
  }
];

// Sorting optional
// cuisinesArr.sort((cuisinesA, cuisinesB) => cuisinesA.recipes - cuisinesB.recipes);

const cuisinesContainer = document.getElementById("cuisines-container");

cuisinesArr.forEach(cuisine => {
  cuisinesContainer.innerHTML += getCuisineHtml(cuisine.name, cuisine.recipes, cuisine.img);
})

function getCuisineHtml(name, recipes, img) {
  return `<div class="cuisines-card">
            <div class="cuisines-card__recipes"><i>${recipes.toLocaleString('de-DE')} Recipes</i></div>
            <div class="cuisines-card__name">${name}</div>
            <img src="${img}" alt="steachouse" class="cuisines-card__img">
          </div>`;
}
