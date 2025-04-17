const fs = require('fs');
const path = require('path');

class GlossaryItem2211104082 {
  static ReadJSON() {
    const filePath = path.join(__dirname, 'solution', '2211104082_glossary.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error("Gagal membaca file:", err);
        return;
      }

      try {
        const obj = JSON.parse(data);
        const entry = obj.glossary.GlossDiv.GlossList.GlossEntry;

        console.log("===== Glossary Entry =====");
        console.log(`ID: ${entry.ID}`);
        console.log(`SortAs: ${entry.SortAs}`);
        console.log(`GlossTerm: ${entry.GlossTerm}`);
        console.log(`Acronym: ${entry.Acronym}`);
        console.log(`Abbrev: ${entry.Abbrev}`);
        console.log(`Definition: ${entry.GlossDef.para}`);
        console.log(`See Also: ${entry.GlossDef.GlossSeeAlso.join(", ")}`);
        console.log(`Gloss See: ${entry.GlossSee}`);
        console.log("===========================");

      } catch (parseErr) {
        console.error("Gagal parse JSON:", parseErr);
      }
    });
  }
}

module.exports = GlossaryItem2211104082;
