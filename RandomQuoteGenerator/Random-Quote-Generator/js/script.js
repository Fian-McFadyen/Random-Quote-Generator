/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
let randomNumber
let previousNumber;
let html;
/***
* `quotes` array
* This is a 2D array containing object literals pataining to quotes.
* The object literals contains key value pairs such as:
* Quote
* Source
* Citation
* Year
* Content tags
***/
let quotes = [
    {
      quote: 'Live long and prosper.',
      source: 'Spock',
      citation: 'Star Trek',
    },
    {
      quote: 'If you are cold, tea will warm you;<br>if you are too heated, it will cool you;<br>If you are depressed, it will cheer you;<br>If you are excited, it will calm you.',
      source: 'William Galdstone',
      citation: 'Former Primeinister',
    },
    {
      quote: 'Be yourself; everyone else is already taken.',
      source: 'Oscar Wilde',
      citation: 'Author',
    },
    {
      quote: 'Try not to become a man of success, but rather try to become a man of value.',
      source: 'Albert Einstein',
      citation: 'Physicist',
      year: '1939',
    },
    {
      quote: 'Act as If what you do makes a difference. It does.',
      source: 'William James',
      citation: 'Psychologist',
      year: '1890',
    },
    {
      quote: "Bloody hell I've been procrastinating a lot.",
      source: 'Me',
      citation: 'Chronic Procrastinator',
      year: '2020',
    },
];


/***
 * `getRandomQuote` function
 * This function uses the Math.random function to return a rqandom value between0 and 1.
 * It then times the random value which was generated by the length of the quote array.
 * Finally the Math.floor function rounds it down to the nearest int and it gets stored in the randomNumber variable.
 * An object literal from the 2d quotes array is retrieved corresponding to the value of the random number.
 * The random number that was generated if then stored in the previousNumber variable and everytime a new number is generated it is compared to it.
 * If the newly generated randomNumber is === to the previousNumber a new randomNumber is generated.
 * The above is done until randomNumber !== previousNumber, this is done so the same quote won't be shown twice in a row.
***/

function getRandomQuote() {
  do {
    randomNumber = Math.floor(Math.random() * quotes.length);
  } while (randomNumber === previousNumber);
  previousNumber = randomNumber
  return quotes[randomNumber];
}

/***
* `randomBgColour` function
* This function uses the Math.random function to return a rqandom value between0 and 1.
* It then times the random value by 256 to return a valid colour value
* Finally the Math.floor function rounds it down to the nearest int.
* This is done for each colour variable (red, green, blue).
* Then each colour value is formatted into the corrrect CSS for changing the background colour.
* The newly formatted colour value is stored in the bgColour variable
* Finally the correct CSS element is selected (document.body.style.background) and it is changed to the formatted CSS that is stored in bgColour.
***/
function randomBgColour() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);;
  let bgColour = `rgb(${red},${green},${blue})`;
  document.body.style.background = bgColour;
  }


/***
 * `printQuote` function
* Firstly the getRandomQuote function is run and the returned values are stored in the randomQuote variable.
* Next the html variable is reassigned the value of the correctly formatted HTML needed to display the quote and the source (<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source})
* Then the citation and year values from the raqndomQuote variable are tested, if they return true the HTML variable is updated to now also contain the HTML to display the citation and year.
* If it returns false the HTML variable is not updated.
* The HTML class where the HTML variable should be writted to is selected and changed to the HTML sotred in the HTML variable(document.getElementById('quote-box').innerHTML = html).
* Finally the randomBgColour is run to change the background.
***/

function printQuote() {
    randomQuote = getRandomQuote();
    html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
    if (randomQuote.citation) {
      html += `<span class="year">${randomQuote.citation}</span>`;
    }
    if (randomQuote.year) {
      html += `<span class="year">${randomQuote.year}</span>`;
    }
    document.getElementById('quote-box').innerHTML = html;
    randomBgColour();
}
/***
* This tells the Javascript engine to run th printQuote function every 20 seconds
***/
setInterval(printQuote, 20000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);
