//! Version v0.0.5

//Intro




const frames = [
    " 🌍        ",
    "   🌍      ",
    "     🌍    ",
    "       🌍  ",
    "     🌍    ",
    "   🌍      ",
];

// Funktion zur Animation der Erde und des Schriftzugs
function animateEarth(cycles = 3) {    //Default Wert
    let index = 0;
    let count = 0;
    let schriftzug = "";
    const title = "LEBENSRATGEBER";

    return new Promise((resolve) => {
        const interval = setInterval(() => {
            console.clear();  //Aufruf um die Erde zu löschen 

            // Erde animieren Bewegung
            console.log(frames[index]);

            // Schriftzug animieren
            schriftzug = title.slice(0, schriftzug.length + 1);
            console.log(schriftzug);

            index = (index + 1) % frames.length;

            // Check, ob ein Zyklus abgeschlossen ist
            if (index === 0) {
                count += 1;
                if (count >= cycles) {
                    clearInterval(interval);
                    resolve();
                }
            }
        }, 200);  //Wiederholung alle 200Millisekunden
    });
}

export  { animateEarth };
