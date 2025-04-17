const fs = require('fs');
const path = require('path');

class TeamMembers2211104082 {
  static ReadJSON() {
    const filePath = path.join(__dirname, 'solution', '2211104082_team.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error("Gagal membaca file :", err);
        return;
      }

      try {
        const obj = JSON.parse(data);
        console.log("Team member list :");
        obj.members.forEach(member => {
          console.log(`${member.nim} ${member.firstName} ${member.lastName} (${member.age} ${member.gender})`);
        });
      } catch (parseErr) {
        console.error("Gagal parse JSON :", parseErr);
      }
    });
  }
}

module.exports = TeamMembers2211104082;
