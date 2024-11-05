//! Version v0.0.4

import readline from 'readline';

// Verfügbare Sprachen
const sprachen = {
  1: 'Deutsch 🇩🇪',
  2: 'Englisch 🇬🇧',
};

function spracheWaehlen() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    console.log('Bitte wählen Sie eine Sprache:');
    for (const [key, value] of Object.entries(sprachen)) {
      console.log(`${key}: ${value}`);
    }

    rl.question('Geben Sie die Nummer der gewünschten Sprache ein: ', (antwort) => {
      console.clear(); // Konsole leeren, um die Eingabeanzeige zu entfernen
      const sprache = sprachen[antwort];
      if (sprache) {
        console.log(`Sie haben ${sprache} gewählt.`);
        resolve(sprache);  // Gebe die Sprache zurück
      } else {
        console.log('Ungültige Auswahl.');
        resolve(null);
      }
      rl.close();  // Schließe die readline-Instanz
    });
  });
}

export { spracheWaehlen };
