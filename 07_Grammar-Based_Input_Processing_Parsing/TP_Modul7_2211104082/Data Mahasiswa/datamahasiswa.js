const fs = require('fs');

class DataMahasiswa2211104082 {
  static ReadJSON() {
    // Baca file JSON
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Gagal membaca file :', err);
        return;
      }

      // Parsing JSON
      try {
        const obj = JSON.parse(data);
        const namaLengkap = `${obj.nama.depan} ${obj.nama.belakang}`;
        console.log(`Nama ${namaLengkap} dengan nim ${obj.nim} dari fakultas ${obj.fakultas}`);
      } catch (parseErr) {
        console.error('Gagal parsing JSON :', parseErr);
      }
    });
  }
}

// Panggil method
DataMahasiswa2211104082.ReadJSON();
