/**
 * The template HTML structure for the element we want to create
 * I advice writing this inside the HTML first and once you are
 * satisfied copy that over here.
 * You can get really complex here if you like :-)
 */
const cardTemplate = `
  <div class="card">
    <h2></h2>
    <p></p>
    <button>Click Me</button>
  </div>
`;

/**
 * Creates a new Card element
 *
 * @param {string} title - Title of card
 * @param {string} details - Details of card
 */
function createCard(title, details) {
  // Create the root element
  const newCard = document.createElement("li");
  // Be mindeful of what you are setting the innerHTML to
  // if you are fetching this from somewhere else (untrusted source),
  // like a message board, this can pose a security risk, due
  // to cross-site scripting (XSS attacks)
  newCard.innerHTML = cardTemplate;

  // Get elements from our little piece of HTML
  const titleElement = newCard.querySelector("h2");
  // and modify it to our hearts content
  titleElement.textContent = title;

  const detailElement = newCard.querySelector("p");
  detailElement.textContent = details;

  // Add event listners and use the variables
  // available inside here for the function
  const secretButton = newCard.querySelector("button");
  secretButton.addEventListener("click", () => {
    console.log(`Button for ${title} clicked`);
  });

  // Return the new card to the caller
  // And let them decide what to do with it
  return newCard;
}

// Get the todo list to append our element to
const cardList = document.getElementById("cardList");
// Create a new element
const feedSharkCard = createCard("Feed Shark", "something fun afterwards");
// Append an element
cardList.append(feedSharkCard);

// In one line
cardList.append(createCard("Watch sunset", "Bring food and wine"));

// Attach a new event listner and have that create a card
const addCardButton = document.getElementById("addCard");

addCardButton.addEventListener("click", () => {
  // Create some random strings
  const newCard = createCard(
    `${selectRandomFrom(verbs)} ${selectRandomFrom(nouns)}`,
    selectRandomFrom(details)
  );
  // Append new card
  cardList.append(newCard);
});

// Some random arrays of string used for creation of card details
// Along with a utility function for getting random elements from
// an array

/**
 * Returns a random element from the array
 *
 * @param {string[]} array Array to select an element from
 * @returns {string} Random element from the array
 */
function selectRandomFrom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

/**
 * A list of random verbs
 */
const verbs = [
  "Buy",
  "Clean",
  "Call",
  "Write",
  "Exercise",
  "Research",
  "Plan",
  "Cook",
  "Organize",
  "Read",
];

/**
 * A list of random nouns
 */
const nouns = [
  "groceries",
  "house",
  "friend",
  "email",
  "gym",
  "vacation",
  "project",
  "dinner",
  "closet",
  "book",
];

/**
 * A list of random details
 */
const details = [
  "by 5 pm today",
  "in a creative way",
  "with a friend",
  "using the new recipe",
  "at the park",
  "on a rainy day",
  "for the upcoming party",
  "while listening to music",
  "in a hurry",
  "with extra care",
];
