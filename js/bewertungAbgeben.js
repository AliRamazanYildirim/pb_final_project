//! Version v0.0.4

//! Übernahme der Werte aus main 
//! Abfrage Bewertung des Users
//! Speichern der Werte in Textdatei



import readline from 'readline';
import { promises as fs } from 'fs';

// Bewertungsfunktion mit direkter Ausgabe der übergebenen Variablen
async function bewertungAbgeben(sprache, kategorie, ratschlag, id) {
    //console.log(`Sprache: ${sprache}, Kategorie: ${kategorie}, Ratschlag: ${ratschlag}, ID: ${id}`);

    const bewertung = await frageBewertung(id);
    await speichern(id, bewertung, sprache, kategorie, ratschlag);
    console.log(`Ihre Bewertung von ${bewertung} Stern(en) wurde gespeichert.`);
}

// Frage den Benutzer nach der Bewertung
function frageBewertung(id) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(`Bitte geben Sie eine Bewertung für den Spruch mit der ID ${id} (1-5 Sterne): `, (input) => {
            const bewertung = parseInt(input);
            rl.close();

            // Überprüfen, ob die Eingabe im Bereich 1-5 liegt
            if (bewertung >= 1 && bewertung <= 5) {
                resolve(bewertung);
            } else {
                console.log("Ungültige Eingabe. Bitte geben Sie eine Zahl zwischen 1 und 5 ein.");
                resolve(frageBewertung(id)); // Wiederhole die Frage
            }
        });
    });
}

// Funktion zum Speichern der Bewertung in eine Textdatei
async function speichern(id, bewertung, sprache, kategorie, ratschlag) {
    const daten = `${id}|${bewertung}|${sprache}|${kategorie}|${ratschlag}\n`;

    // Asynchrone Speicherung der Daten in die Textdatei
    try {
        await fs.appendFile('bewertungen.txt', daten);
        console.log('Die Bewertung und weiteren Informationen wurden gespeichert.');
    } catch (err) {
        console.error('Fehler beim Speichern der Bewertung:', err);
    }
}

export { bewertungAbgeben };