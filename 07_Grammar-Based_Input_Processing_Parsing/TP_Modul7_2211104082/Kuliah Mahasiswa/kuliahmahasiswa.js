const fs = require('fs');

class KuliahMahasiswa2211104082 {
  static ReadJSON() {
    fs.readFile('matkul.json', 'utf8', (err, data) => {
      if (err) {
        console.error("Gagal membaca file :", err);
        return;
      }

      try {
        const obj = JSON.parse(data);
        console.log("Daftar mata kuliah yang diambil :");
        obj.courses.forEach((matkul, index) => {
          console.log(`MK ${index + 1} ${matkul.code} - ${matkul.name}`);
        });
      } catch (parseErr) {
        console.error("Gagal parsing JSON :", parseErr);
      }
    });
  }
}

// Panggil method
KuliahMahasiswa2211104082.ReadJSON();
