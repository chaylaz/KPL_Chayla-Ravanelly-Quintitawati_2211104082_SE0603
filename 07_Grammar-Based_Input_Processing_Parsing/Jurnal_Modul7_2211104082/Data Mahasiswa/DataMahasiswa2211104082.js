const fs = require('fs');
const path = require('path');

class DataMahasiswa2211104082 {
  static ReadJSON() {
    const filePath = path.join(__dirname, 'solution', '2211104082.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error("Gagal membaca file :", err);
        return;
      }

      try {
        const obj = JSON.parse(data);
        console.log("===== Data Mahasiswa =====");
        console.log(`Nama : ${obj.firstName} ${obj.lastName}`);
        console.log(`Jenis Kelamin : ${obj.gender}`);
        console.log(`Usia : ${obj.age}`);
        console.log(`Alamat : ${obj.address.streetAddress}, ${obj.address.city}, ${obj.address.state}`);
        console.log("Mata Kuliah :");
        obj.courses.forEach((course, index) => {
          console.log(`  ${index + 1}. [${course.code}] ${course.name}`);
        });
        console.log("===========================");
      } catch (parseErr) {
        console.error("Gagal parse JSON :", parseErr);
      }
    });
  }
}

module.exports = DataMahasiswa2211104082;
