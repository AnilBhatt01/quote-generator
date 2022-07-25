const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const tweetBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const whatsappBtn = document.getElementById("whatsapp");
const loader = document.getElementById("loader");

let apiQuotes = [];

/// Show Loading

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading

function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

//  Show New Quote

function newQuote() {
  loading();
  // Pick a random quote from apiQuotes array

  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if Author field is black and replace it with 'unknown'
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  //Check quote length to determine styling
  if (quote.text.length > 80) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  // Set Quote, Hide Loader
  quoteText.textContent = quote.text;
  complete();
}

// Get Quotes from API

async function getQuotes() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();

    newQuote();
  } catch (error) {
    // Catch Error Here
  }
}
// Tweet Quote

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Whatsapp Quote

function whatsappQuote() {
  const whatsappUrl = `whatsapp://send?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(whatsappUrl, "_black");
}

// Event Listners

newQuoteBtn.addEventListener("click", newQuote);
tweetBtn.addEventListener("click", tweetQuote);
whatsappBtn.addEventListener("click", whatsappQuote);

// Whatsapp Quote

getQuotes();
