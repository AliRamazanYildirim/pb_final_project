//! Version v0.0.4


//! Kathegorien der Ratschlägen um später nach Kalenderdaten
//! einen der "Jahreszeit" entsprechenden Ratschlag zu bekommen
//! oder nach Stil

import readline from "readline";

// Kategorien der Ratschläge
const ratschlaegeDeutsch = {
  humorvoll: [
    "Lächle, du kannst sie nicht alle töten.",
    "Wenn alles andere fehlschlägt, versuche es mit Schokolade.",
    "Das Leben ist zu kurz, um schlechten Kaffee zu trinken.",
    "Ich bin nicht faul, ich bin im Energiesparmodus.",
    "Warum kompliziert, wenn es auch einfach geht? Weil es lustiger ist.",
    "Ich bin nicht gestresst, ich bin nur voller potenzieller Energie.",
    "Morgen fange ich an... oder übermorgen.",
    "Es gibt keinen Grund, erwachsen zu werden, wenn man es nicht will.",
    "Sport ist Mord – zumindest für meine Couch.",
    "Multitasking ist, wenn man alles gleichzeitig vergisst.",
    "Ich habe keine Fehler gemacht – das war alles ein geplanter Testlauf.",
    "Der frühe Vogel kann mich mal, ich bin eine Nachteule.",
    "Ich bin nicht klein, ich bin platzsparend.",
    "Humor ist, wenn man trotzdem lacht – meistens über sich selbst.",
    "Man kann nicht alles haben, aber Schokolade ist schon mal ein guter Anfang.",
    "Ich bin nicht unordentlich, ich habe nur ein kreatives Chaos.",
    "Ich brauche keinen Therapeuten, ich habe meine Couch.",
    "Ich habe beschlossen, glücklich zu sein – das passt besser zu meinem Gesicht.",
    "Der Mensch lebt nicht vom Brot allein – es gibt auch Pizza.",
    "Ein Tag ohne Lachen ist ein verlorener Tag – oder einfach ein Montag.",
  ],
  ernst: [
    "Lerne, im Moment zu leben. Er ist das einzige, was wir wirklich haben.",
    "Geduld ist eine Tugend, die du täglich üben solltest.",
    "Manchmal ist der beste Weg, Probleme zu lösen, einfach loszulassen.",
    "Jeder Tag bietet die Chance, etwas Neues zu lernen.",
    "Veränderung beginnt immer bei dir selbst.",
    "Manchmal ist der Weg das Ziel.",
    "Erfolg kommt selten ohne Anstrengung.",
    "Es gibt keinen Aufstieg ohne den Mut zum Fallen.",
    "Ehrlichkeit ist die Grundlage für Vertrauen.",
    "Das Leben ist nicht fair, aber du kannst immer fair sein.",
    "Schweigen ist manchmal die stärkste Antwort.",
    "Hoffnung ist das Licht, das uns durch die Dunkelheit führt.",
    "Große Veränderungen beginnen oft mit kleinen Schritten.",
    "Finde deinen eigenen Weg und folge ihm mit Überzeugung.",
    "Es gibt keinen Mut ohne Angst.",
    "Jeder Schmerz ist ein Lehrer.",
    "Das, was du heute tust, bestimmt dein Morgen.",
    "Manchmal muss man erst verlieren, um zu erkennen, was wirklich zählt.",
    "Vertrauen ist schwer zu gewinnen und leicht zu verlieren.",
    "Zufriedenheit ist der Schlüssel zum inneren Frieden.",
  ],
  ostern: [
    "Genieße die Osterzeit und die fröhlichen Farben des Frühlings.",
    "Ostern erinnert uns daran, dass es immer wieder neue Anfänge gibt.",
    "Lass das Leben blühen, so wie der Frühling alles neu erweckt.",
    "Der Osterhase bringt nicht nur Schokolade, sondern auch Hoffnung.",
    "Ostern ist ein Fest der Freude und des Neuanfangs.",
    "Mit Ostern kommt das Licht und die Wärme zurück.",
    "Das Osterfest lädt uns ein, den Neubeginn zu feiern.",
    "In der Natur liegt das Wunder von Ostern verborgen.",
    "Ostern bedeutet, dass selbst nach dem dunkelsten Winter der Frühling erwacht.",
    "Frohe Ostern! Möge dein Herz so leicht sein wie ein Osterei.",
    "Mit Ostern kehrt die Freude des Lebens zurück.",
    "Ostern ist die Zeit, um die Familie und das Leben zu feiern.",
    "Ein Osterfest ohne bunte Eier ist wie ein Frühling ohne Blumen.",
    "Zu Ostern erinnern wir uns an die Erneuerung und das Wunder des Lebens.",
    "Ostern ist der Beweis, dass Hoffnung und Glaube unerschütterlich sind.",
    "Lass die Sonnenstrahlen des Frühlings dein Herz erhellen.",
    "Ostern bringt uns zusammen und erinnert uns an das Wesentliche im Leben.",
    "Ein Osterei steht symbolisch für das Geschenk des Lebens.",
    "Der Frühling bringt uns neue Kraft – Ostern zeigt uns die Möglichkeiten.",
    "Möge dein Osterfest voller Freude und neuer Anfänge sein.",
  ],
  weihnachten: [
    "Weihnachten ist die Zeit, in der wir innehalten und dankbar sind für alles Gute im Leben.",
    "Genieße die Wärme und das Licht, das Weihnachten bringt.",
    "Das schönste Geschenk zu Weihnachten ist gemeinsame Zeit.",
    "Die wahre Magie von Weihnachten liegt im Geben, nicht im Empfangen.",
    "Zu Weihnachten öffnet sich unser Herz für das, was wirklich zählt.",
    "Weihnachten erinnert uns daran, dass Liebe und Frieden die größten Geschenke sind.",
    "Lass den Geist von Weihnachten in deinem Herzen verweilen.",
    "Weihnachten ist nicht nur ein Fest, sondern ein Gefühl.",
    "Die besten Geschenke sind die, die man nicht in Papier wickeln kann.",
    "Weihnachten ist die Zeit, in der Wünsche wahr werden können.",
    "In der Stille von Weihnachten liegt oft die größte Freude.",
    "Ein Funken Weihnachtslicht kann ein ganzes Herz erleuchten.",
    "Weihnachten bringt die Familie zusammen und das Herz zum Leuchten.",
    "Es sind nicht die Geschenke, die Weihnachten besonders machen, sondern die Liebe, die wir teilen.",
    "Die wahre Bedeutung von Weihnachten ist das Miteinander.",
    "Lass die Weihnachtszeit dein Herz wärmen und deine Seele erhellen.",
    "An Weihnachten feiern wir das Licht, das in die Welt kam.",
    "Ein friedliches und frohes Weihnachtsfest ist das schönste Geschenk.",
    "Weihnachten bringt uns näher zusammen, auch wenn die Welt uns trennt.",
    "Möge der Frieden von Weihnachten das ganze Jahr über in deinem Herzen wohnen.",
  ],
  neujahr: [
    "Ein neues Jahr ist eine neue Chance, deime Träume zu verwirklichen.",
    "Lass das Alte hinter dir und freue dich auf das Neue.",
    "Neujahr ist die perfekte Zeit für einen Neuanfang.",
    "Mit jedem Neujahr kommen neue Möglichkeiten und Herausforderungen.",
    "Lass das vergangene Jahr als Lektion dienen, nicht als Last.",
    "Das neue Jahr ist wie ein unbeschriebenes Blatt – fülle es mit schönen Momenten.",
    "Möge das neue Jahr dir Kraft geben, deine Ziele zu erreichen.",
    "Ein Neuanfang beginnt nicht im Kalender, sondern in deinem Herzen.",
    "Jedes Ende ist der Anfang von etwas Neuem.",
    "Mach das neue Jahr zu deinem besten Jahr.",
    "Das Geheimnis des Neujahrs liegt darin, den Moment zu schätzen.",
    "Nimm dir vor, im neuen Jahr deine Träume zu leben, nicht nur zu träumen.",
    "Neujahr ist der Beginn einer Reise zu neuen Abenteuern.",
    "Mit dem neuen Jahr kommen auch neue Hoffnungen und Wünsche.",
    "Lebe im neuen Jahr so, dass du auf keine einzige Sekunde zurückblicken musst.",
    "Nutze das neue Jahr, um an dir selbst zu arbeiten und zu wachsen.",
    "Das neue Jahr bringt dir die Möglichkeit, aus den Fehlern des alten zu lernen.",
    "Ein neues Jahr bedeutet neue Herausforderungen, aber auch neue Chancen.",
    "Beginne das neue Jahr mit einem Lächeln und positiven Gedanken.",
    "Möge das neue Jahr voller Glück und Erfolg für dich sein.",
  ],
};

// Funktion, die einen zufälligen Ratschlag und seine ID (den Index) zurückgibt
const zufaelligerRatschlagDeutsch = (kategorie) => {
  const alleDeutscheKategorien = ratschlaegeDeutsch[kategorie];

  if (!alleDeutscheKategorien) {
    return {
      ratschlag:
        "Kategorie nicht gefunden. Bitte wähle eine gültige Kategorie.",
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
    case "weihnachten":
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
    case "ostern":
      console.log(`
        * * * * * * * * * * * * * *
       *     Frohe Ostern!       *
       *     (\_/)
       *     (o.o)
       *     (> <)
       *                       *
        * * * * * * * * * * * * * *
      `);
      break;
    case "humorvoll":
      console.log(`
        * * * * * * * * * * * * * *
       *    Dicker Hamster!       *
       *       ,_____,            *
       *       (o^-^o)           *
       *      /       \         *
       *     (       )\        *
       *      "--- --"         *
        * * * * * * * * * * * * * *
      `);
      break;
    case "ernst":
      console.log(`
        * * * * * * * * * * * * * *
       *  Weiser, alter Mann       *
       *       _________          *
       *      /         \         *
       *     /  O     O  \       *
       *    |     \_/     |       *
       *     \___________/       *
        * * * * * * * * * * * * * *
      `);
      break;
    case "neujahr":
      console.log(`
        * * * * * * * * * * * * * *
       *       Frohes Neues Jahr! *
       *       BOOM!  BOOM!       *
       *     * * * * * * *       *
       *   * * * * * * * *      *
       *                       *
        * * * * * * * * * * * * * *
      `);
      break;
    default:
      console.log("Keine Animation verfügbar.");
      break;
  }
}
//! NEU --------------------------------------------------------------------ENDE

// Funktion zur Auswahl der Kategorie mit Rückgabe von Ratschlag und ID
// Funktion zur Auswahl der Kategorie auf Deutsch
function kategorieDeutschWaehlen() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log("Bitte wählen Sie eine Kategorie:");
    console.log("1: Motivation");
    console.log("2: Weisheit");

    rl.question("Geben Sie die Nummer der gewünschten Kategorie ein: ", (kategorie) => {
      if (kategorie !== "1" && kategorie !== "2") {
        console.log("Ungültige Eingabe. Bitte wähle eine Zahl zwischen 1 und 2.");
        kategorieDeutschWaehlen();
        return;
      }
      console.clear();
      const kat = kategorie.toLocaleUpperCase(); // kat değişkenini tanımlayın
      console.log(`Ihre gewählte Kategorie: ${kat}`);

      const { ratschlag, id } = zufaelligerRatschlagDeutsch(kategorie); // Ratschlag und ID abrufen
      console.log(ratschlag);

      //! NEU --------------------------------------------------------------------Start

      bildchen(kategorie); // ASCii-Animation basierend auf der Kategorie anzeigen

      //! NEU --------------------------------------------------------------------ENDE

      rl.close();

      // Rückgabe über Promise: Sprache, Kategorie, Ratschlag und ID
      resolve({
        sprache: "deutsch",
        kategorie: kategorie,
        ratschlag: ratschlag,
        id: id, // ID wird ebenfalls zurückgegeben
      });
    });
  });
}

export { kategorieDeutschWaehlen };