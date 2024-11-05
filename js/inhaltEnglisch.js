//! Version v0.0.4


//! Kathegorien der Ratschlägen um später nach Kalenderdaten
//! einen der "Jahreszeit" entsprechenden Ratschlag zu bekommen
//! oder nach Stil

import readline from "readline";


// Kategorien der Ratschläge
const ratschlaegeDeutsch = {
  funny: [
    "I’m on a seafood diet. I see food and I eat it.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "My bed is a magical place. I suddenly remember everything I had to do.",
    "If at first you don’t succeed, skydiving is not for you.",
    "I used to think I was indecisive, but now I’m not so sure.",
    "The road to success is always under construction… and so is my kitchen.",
    "If Cinderella’s shoe fit perfectly, why did it fall off?",
    "I thought growing up was the answer. Nope, I just need more coffee.",
    "Life is short. Smile while you still have teeth.",
    "I’m not arguing, I’m just explaining why I’m right.",
    "If you think nobody cares if you're alive, try missing a couple of payments.",
    "The early bird can have the worm, I’ll take pancakes.",
    "I’m not lazy, I’m just on energy-saving mode.",
    "Never trust an atom. They make up everything!",
    "I put my phone on airplane mode, but it’s not flying!",
    "I asked the gym if they could teach me to do the splits. They said, “How flexible are you?” I said, “I can’t make Tuesdays.”",
    "I’m on a whiskey diet. I’ve lost three days already.",
    "I’d like to agree with you, but then we’d both be wrong.",
    "I don’t need a hair stylist, my pillow gives me a new hairstyle every morning.",
    "Life’s too short to wait for the microwave to beep.",
  ],
  serious: [
    "Life isn’t about waiting for the storm to pass, it’s about learning to dance in the rain.",
    "You are not a drop in the ocean. You are the entire ocean in a drop.",
    "The purpose of life is to live it, to taste experience to the utmost.",
    "When nothing goes right, go left.",
    "It’s never too late to be what you might have been.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Sometimes the hardest thing and the right thing are the same.",
    "Life has no remote. Get up and change it yourself.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "Life is not measured by the breaths we take but by the moments that take our breath away.",
    "Don’t count the days, make the days count.",
    "Challenges are what make life interesting, overcoming them is what makes life meaningful.",
    "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
    "The only way to do great work is to love what you do.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "In three words I can sum up everything I’ve learned about life: It goes on.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Life is a journey that must be traveled no matter how bad the roads and accommodations.",
    "Do what you can, with what you have, where you are.",
    "You only live once, but if you do it right, once is enough.",
  ],
  easter: [
    "Easter is the only time when it’s safe to put all your eggs in one basket.",
    "Easter spells out beauty, the rare beauty of new life.",
    "The very first Easter taught us this: that life never ends and love never dies.",
    "There would be no Christmas if there was no Easter.",
    "The great gift of Easter is hope.",
    "Easter is a time to rejoice, be thankful, and find renewal.",
    "Bunnies are cute, eggs are colorful, but Easter is about renewal.",
    "Easter is meant to be a symbol of hope, renewal, and new life.",
    "Spring brings new life, and Easter reminds us of its beauty.",
    "Easter is a reminder that nothing can destroy us forever.",
    "Easter shows that there is light beyond the darkest of days.",
    "Let your joy burst forth like flowers in the spring.",
    "Easter reminds us that miracles do happen.",
    "With the coming of Easter, may you feel peace and joy in your heart.",
    "Easter is a time for reflection, renewal, and rebirth.",
    "New beginnings, new hopes, and endless possibilities – that’s what Easter is about.",
    "Celebrate Easter with love, faith, and happiness.",
    "Wishing you a basket full of blessings this Easter.",
    "Easter is the celebration of love and sacrifice.",
    "Let this Easter be a time to reconnect with the miracle of life.",
  ],
  christmas: [
    "Christmas is not a time nor a season, but a state of mind.",
    "The best of all gifts around any Christmas tree is the presence of a happy family.",
    "Christmas waves a magic wand over this world, and everything is softer and more beautiful.",
    "Christmas isn’t a season. It’s a feeling.",
    "May your Christmas be filled with joy and warmth.",
    "At Christmas, all roads lead home.",
    "The best way to spread Christmas cheer is singing loud for all to hear.",
    "Christmas gives us an opportunity to pause and reflect on the important things.",
    "It’s not what’s under the Christmas tree that matters; it’s who’s around it.",
    "May the spirit of Christmas bring you peace and joy.",
    "Christmas is the day that holds all time together.",
    "May your days be merry and bright, and may all your Christmases be white.",
    "Christmas is the season of joy, of gift-giving, and of families united.",
    "The joy of brightening other lives is the true magic of Christmas.",
    "Gifts of time and love are surely the basic ingredients of a truly merry Christmas.",
    "It’s not how much we give, but how much love we put into giving.",
    "Peace on earth will come to stay, when we live Christmas every day.",
    "Wishing you a season of gladness, a season of cheer, and to top it all off—a wonderful year.",
    "Christmas is the spirit of giving without a thought of getting.",
    "Keep calm and jingle all the way.",
  ],
  new_year: [
    "New Year, new beginnings.",
    "Cheers to a new year and another chance for us to get it right.",
    "Tomorrow is the first blank page of a 365-page book. Write a good one.",
    "New Year’s Day is the first page of a blank book. Write it well.",
    "The best way to predict the future is to create it.",
    "May all your troubles last as long as your New Year’s resolutions.",
    "New Year is not about changing the dates but changing the direction.",
    "A new year is a chance to start over, do better, and be better.",
    "This is the beginning of anything you want.",
    "Out with the old, in with the new!",
    "It’s never too late to be who you want to be.",
    "New year, new feels, new chances, new dreams.",
    "Here’s to new beginnings and chasing your dreams.",
    "This year, be brave, take risks, and live the life you’ve imagined.",
    "Celebrate endings—for they precede new beginnings.",
    "The magic in new beginnings is truly the most powerful of them all.",
    "Wishing you 12 months of success, 52 weeks of laughter, 365 days of fun.",
    "Let this new year be the one where your dreams come true.",
    "Life’s not about expecting, hoping, and wishing, it’s about doing.",
    "May your coming year be filled with magic and dreams and good madness.",
  ],
};

// Funktion, die einen zufälligen Ratschlag und seine ID (den Index) zurückgibt
const zufaelligerRatschlagDeutsch = (kategorie) => {
  const alleDeutscheKategorien = ratschlaegeDeutsch[kategorie];

  if (!alleDeutscheKategorien) {
    return {
      ratschlag: "Kategorie not found. Please choose another kategorie.",
      id: -1,
    };
  }

  const index = Math.floor(Math.random() * alleDeutscheKategorien.length);
  return { ratschlag: alleDeutscheKategorien[index], id: index }; // Ratschlag und ID zurückgeben
};

//! NEU --------------------------------------------------------------------Start
// Funktion zur Darstellung von ASCII-Art basierend auf der Kategorie
function bildchen(kategorie) {
  switch (kategorie) {
    case "christmas":
      console.log(`
        * * * * * * * * * * * * * *
       *       Ho Ho Ho!        *
       *        ☃ ☃ ☃          *
       *    /\//\//\\\\\\\\\\\  *
       *     { O }---<         *
       *      / \             *
        * * * * * * * * * * * * * *
      `);
      break;
    case "easter":
      console.log(`
        * * * * * * * * * * * * * *
       *     happy easter!       *
       *     (\_/)
       *     (o.o)
       *     (> <)
       *                       *
        * * * * * * * * * * * * * *
      `);
      break;
    case "funny":
      console.log(`
        * * * * * * * * * * * * * *
       *    funny!       *
       *       ,_____,            *
       *       (o^-^o)           *
       *      /       \         *
       *     (       )\        *
       *      "--- --"         *
        * * * * * * * * * * * * * *
      `);
      break;
    case "serious":
      console.log(`
        * * * * * * * * * * * * * *
       *  buddah       *
       *       _________          *
       *      /         \         *
       *     /  O     O  \       *
       *    |     \_/     |       *
       *     \___________/       *
        * * * * * * * * * * * * * *
      `);
      break;
    case "new_year":
      console.log(`
        * * * * * * * * * * * * * *
       *       happy new year! *
       *       BOOM!  BOOM!       *
       *     * * * * * * *       *
       *   * * * * * * * *      *
       *                       *
        * * * * * * * * * * * * * *
      `);
      break;
    default:
      console.log("No animation available.");
      break;
  }
}
//! NEU --------------------------------------------------------------------ENDE

// Funktion zur Auswahl der Kategorie mit Rückgabe von Ratschlag und ID
function kategorieEnglishWaehlen() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log("Choose a kategorie:");
    console.log("*********************");

    console.log("1. funny");
    console.log("2. serious");
    //! NEU ----------------------------------------------------------------Start
    console.log("3. christmas");
    console.log("4. easter");
    console.log("5. new year");
    //! NEU -----------------------------------------------------------------ENDE
    console.log("********************");

    rl.question("Please give the number of your kategorie: ", (antwort) => {
      let kategorie;

      if (antwort === "1") {
        kategorie = "funny";
      } else if (antwort === "2") {
        kategorie = "serious";
        //! NEU --------------------------------------------------------------------Start
      } else if (antwort === "3") {
        kategorie = "christmas";
      } else if (antwort === "4") {
        kategorie = "easter";
      } else if (antwort === "5") {
        kategorie = "new_year";
        //! NEU --------------------------------------------------------------------ENDE
      } else {
        console.log("Invalid entry. Please select a number between 1 and 2.");
        kategorie2_waehlen();
        return;
      }
      console.clear();
      const kat = kategorie.toLocaleUpperCase();
      console.log(`Your selected category: ${kat}`);

      const { ratschlag, id } = zufaelligerRatschlagDeutsch(kategorie); // Ratschlag und ID abrufen
      console.log(ratschlag);

      //! NEU --------------------------------------------------------------------Start

      bildchen(kategorie); // ASCii-Animation basierend auf der Kategorie anzeigen

      //! NEU --------------------------------------------------------------------ENDE

      rl.close();

      // Rückgabe über Promise: Sprache, Kategorie, Ratschlag und ID
      resolve({
        sprache: "english",
        kategorie: kategorie,
        ratschlag: ratschlag,
        id: id, // ID wird ebenfalls zurückgegeben
      });
    });
  });
}

export { kategorieEnglishWaehlen };