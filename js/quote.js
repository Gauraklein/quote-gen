var quote = [
   {
      "text": "Don't cry because it's over, smile because it happened.",
      "author": "Dr. Seuss"
   },
   {
      "text": "Be yourself; everyone else is already taken.",
      "author": "Oscar Wilde"
   },
   {
      "text": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      "author": "Albert Einstein"
   },
   {
      "text": "In three words I can sum up everything I've learned about life: it goes on.",
      "author": "Robert Frost"
   },
   {
      "text": "If you tell the truth, you don't have to remember anything.",
      "author": "Mark Twain"
   },
   {
      "text": "Always forgive your enemies; nothing annoys them so much.",
      "author": "Oscar Wilde"
   },
   {
      "text": "To live is the rarest thing in the world. Most people exist, that is all.",
      "author": "Oscar Wilde"
   },
   {
      "text": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      "author": "Ralph Waldo Emerson"
   },
   {
      "text": "It does not do to dwell on dreams and forget to live.",
      "author": "J.K. Rowling"
   },
   {
      "text": "Life is what happens to us while we are making other plans.",
      "author": "Allen Saunders"
   }, {
      "text": "If you don't stand for something you will fall for anything.",
      "author": "Gordon A. Eadie"
   }
];

function newQuote() {
   var randomNumber = Math.floor(Math.random() * (quote.length));

   console.log(randomNumber);

   document.getElementById('text').innerHTML = quote[randomNumber]["text"];
   document.getElementById('author').innerHTML = quote[randomNumber]["author"];
}



