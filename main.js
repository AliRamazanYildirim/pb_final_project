// main.js
// Die Main JS dient der zusammenführung/ Verknüpfung der Scripte und steuert die logische Abfolge
// Asynchron weil später viele Nutzer zeitgleich auf das Programm zugreifen können
// Version v0.0.6

import { animateEarth } from "./js/animation.js";
import { spracheWaehlen } from "./js/sprachAuswahl.js";
import { kategorieDeutschWaehlen } from "./js/inhaltDeutsch.js";
import { kategorieEnglishWaehlen } from "./js/inhaltEnglisch.js";
import { bewertungAbgeben } from "./js/bewertungAbgeben.js";
import readline from "readline";

// Funktion zur Neustart-Abfrage
async function neustart_abfragen() {
  return new Promise((resolve) => { 119
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(
      "****Möchten Sie das Programm neu starten? (j/n): ",
      (antwort) => {
        rl.close();
        if (antwort.toLowerCase() === "j") {
          resolve(true);
        } else {
          resolve(false);
        }
      }
    );
  });
}

// Erstelle eine Funktion, die asynchron abläuft
async function main() {
  console.clear(); // Immer beim Start Konsole leeren

    // Start der Animation (2-3 Zyklen) vor dem Programm
    await animateEarth(3);

  try {
    // Warte auf die Sprachauswahl
    const sprachauswahl = await spracheWaehlen();
    let ergebnis;
    if (sprachauswahl === "Deutsch 🇩🇪") {
      console.log("Deutscher Inhalt wird geladen...🇩🇪");
      console.log("********************************");
      // Lade das deutsche Skript und warte auf die Kategorieauswahl
      ergebnis = await kategorieDeutschWaehlen();
      console.log("***********");
      // console.log(
      //   `Sprache: ${ergebnis.sprache}, Kategorie: ${ergebnis.kategorie}, Ratschlag: ${ergebnis.ratschlag}, ID: ${ergebnis.id}`
      // );
    } else if (sprachauswahl === "Englisch 🇬🇧") {
      console.log("Englischer Inhalt wird geladen...🇬🇧");
      console.log("********************************");
      // Lade das englische Skript und warte auf die Kategorieauswahl
      ergebnis = await kategorieEnglishWaehlen();
      console.log("***********");
      // console.log(
      //   `Sprache: ${ergebnis.sprache}, Kategorie: ${ergebnis.kategorie}, Ratschlag: ${ergebnis.ratschlag}, ID: ${ergebnis.id}`
      // );
    } else {
      console.log("Keine gültige Sprache ausgewählt.");
      return;
    }

    // Bewertungsfunktion separat aufrufen, wenn die Sprache und der Ratschlag vorhanden sind
    if (ergebnis) {
      await bewertungAbgeben(
        ergebnis.sprache,
        ergebnis.kategorie,
        ergebnis.ratschlag,
        ergebnis.id
      );
    }

    // Warte auf die Eingabe, ob das Programm neu gestartet werden soll
    const neustart = await neustart_abfragen();
    if (neustart) {
      console.clear(); // Bildschirm leeren
      console.log("Programm wird neu gestartet...");
      main(); // Neustart der main-Funktion
    } else {
      console.log("Programm wird beendet.");
    } 
  } catch (error) {
    console.error("Es gab einen Fehler:", error);
  }
}

// Hauptfunktion aufrufen
main(); 