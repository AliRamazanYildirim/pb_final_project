# BC Projekt

## Projektbeschreibung

BC-Projekt ist eine Anwendung, die es Benutzern ermöglicht, Bewertungen abzugeben und diese zu analysieren. Die Anwendung bietet die Möglichkeit, Bewertungen in verschiedenen Sprachen und Kategorien abzugeben und visualisiert diese Bewertungen mit ASCII-Kunst.

## Projektstruktur

Das Projekt hat die folgende Datei- und Ordnerstruktur:

#Für eine Webanwendung oder ein Programm mit einer UX/UI-Oberfläche ist Asynchronität praktisch unerlässlich, um eine gute Skalierbarkeit und Benutzerfreundlichkeit zu gewährleisten.

## Haupttools

- ![Miro](https://img.shields.io/badge/Miro-FFD700?logo=miro&logoColor=white) 
- ![Trello](https://img.shields.io/badge/Trello-0079BF?logo=trello&logoColor=white) 
- ![Visual Studio Code](https://img.shields.io/badge/VS%20Code-007ACC?logo=visual-studio-code&logoColor=white)
- ![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)
- ![Scrum](https://img.shields.io/badge/Scrum-6DB33F?logo=scrum&logoColor=white)
- ![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white)
### Wichtige Dateien und Funktionen


-  **main.js** : Die Hauptdatei der Anwendung, die alle anderen Skripte zusammenführt. 
- `neustart_abfragen()`: Fragt den Benutzer, ob er das Programm neu starten möchte. 
- `main()`: Die Hauptfunktion der Anwendung. 

-  **js/auswertung.js**: Lädt und analysiert Bewertungen.  
- `ladeBewertungen()`:`bewertungen.txt`Lädt Bewertungen aus der Datei. 
  - `berechneAuswertung()`: Analysiert die Bewertungen.

- **js/sprachauswahl_ramazan.js**: Ermöglicht die Auswahl der Benutzersprache.
  - `sprache_waehlen()`: Ermöglicht dem Benutzer die Auswahl der Sprache.

- **js/inhalt_deutsch_conny.js** ve **js/inhalt_englisch_semm.js**: Zeigt ASCII-Kunst nach Kategorien.
- `bildchen(kategorie)`: Zeigt ASCII-Kunst für eine bestimmte Kategorie an. 
- `kategorie_waehlen()`: Ermöglicht dem Benutzer die Auswahl einer Kategorie. 

-  **js/bewertung_abgeben_ramazan.js**: Nimmt die Bewertung des Benutzers entgegen und speichert sie.  
- `bewertungAbgeben(sprache, kategorie, ratschlag, id)`: Nimmt die Bewertung des Benutzers entgegen. 
- `speichern(id, bewertung, sprache, kategorie, ratschlag)`: Speichert die Bewertung in der Datei.`bewertungen.txt` 

## Installation und Ausführung

Befolgen Sie die folgenden Schritte, um das Projekt auszuführen:

1. Projekt klonen: 
 

    ```sh
    git clone <repository-url>
    cd bc_projekt
    ```

2. Erforderliche Abhängigkeiten installieren: 
 

    ```sh
    npm install
    ```

3. Starten Sie die Anwendung: 
 

    ```sh
    node main.js
    ```

## Beitrag leisten

Wenn Sie beitragen möchten, senden Sie bitte eine Pull-Request oder öffnen Sie ein Issue.

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Weitere Informationen finden Sie in der Datei.`LICENSE`