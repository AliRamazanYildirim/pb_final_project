//! Version v0.0.5


//! Lädt bewertungen.txt und gibt eine Rudimentäre Bewertung aus



import { promises as fs } from 'fs';

async function ladeBewertungen() {
    try {
        const daten = await fs.readFile('bewertungen.txt', 'utf8');
        return daten.split('\n').filter(zeile => zeile).map(zeile => {
            const [id, bewertung, sprache, kategorie, ratschlag] = zeile.split('|');
            return { id, bewertung: parseInt(bewertung), sprache, kategorie, ratschlag };
        });
    } catch (error) {
        console.error('Fehler beim Laden der Bewertungen:', error);
        return [];
    }
}

async function berechneAuswertung() {
    const bewertungen = await ladeBewertungen();
    
    if (bewertungen.length === 0) {
        console.log("Keine Bewertungen vorhanden.");
        return;
    }

    // Beispiel: Durchschnittliche Bewertung pro Kategorie
    const kategorien = {};
    bewertungen.forEach(({ kategorie, bewertung }) => {
        if (!kategorien[kategorie]) {
            kategorien[kategorie] = { summe: 0, anzahl: 0 };
        }
        kategorien[kategorie].summe += bewertung;
        kategorien[kategorie].anzahl += 1;
    });

    console.log("Durchschnittliche Bewertung pro Kategorie:");
    for (const [kategorie, { summe, anzahl }] of Object.entries(kategorien)) {
        console.log(`${kategorie}: ${(summe / anzahl).toFixed(2)} Sterne`);
    }

    // Weitere Statistiken können hier ergänzt werden
}

berechneAuswertung();
