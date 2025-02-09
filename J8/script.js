const quotes = [
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don't watch the clock; do what it does. Keep going.",
  "The best way to predict the future is to create it.",
  "Your time is limited, so don't waste it living someone else's life.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don't be afraid to give up the good to go for the great.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Your limitation—it's only your imagination.",
];


const usedindexes= new Set();
const quoteElement = document.getElementById("quote")


function qgrenerator(){

  if(usedindexes.size >= quotes.length){
    usedindexes.clear();
  }

  while(true){

    const randomindex = Math.floor(Math.random() * quotes.length)

    if (usedindexes.has(randomindex)) continue;

    const quote = quotes[randomindex];
    quoteElement.innerHTML = quote;
    usedindexes.add(randomindex);
    break;
  }

}