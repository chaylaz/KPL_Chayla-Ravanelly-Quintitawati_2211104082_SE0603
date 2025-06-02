# Laporan Praktikum Konstruksi Perangkat Lunak
#### Nama : Chayla Ravanelly Quintitawati
#### NIM : 2211104082 / SE-06-03

## Tugas Pendahuluan

### Membuat Library Aljabar

#### aljabar.js


class AljabarLibraries {
  static AkarPersamaanKuadrat(persamaan) {
    const [a, b, c] = persamaan;
    const diskriminan = b * b - 4 * a * c;

    if (diskriminan < 0) {
      return [];
    } else if (diskriminan === 0) {
      const x = -b / (2 * a);
      return [x];
    } else {
      const x1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
      const x2 = (-b - Math.sqrt(diskriminan)) / (2 * a);
      return [x1, x2];
    }
  }

  static HasilKuadrat(persamaan) {
    const [a, b] = persamaan;

    const a2 = a * a;
    const ab2 = 2 * a * b;
    const b2 = b * b;

    return [a2, ab2, b2];
  }
}

module.exports = AljabarLibraries;


#### index.js


const Aljabar = require("./aljabar");

const akar = Aljabar.AkarPersamaanKuadrat([1, -3, -10]);
console.log("Akar-akar persamaan kuadrat:");
console.log(akar);

const hasilKuadrat = Aljabar.HasilKuadrat([2, -3]);
console.log("\nHasil kuadrat dari persamaan linear:");
console.log(`${hasilKuadrat[0]}x^2 + ${hasilKuadrat[1]}x + ${hasilKuadrat[2]}\n`);


#### Output
![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul10/TP/output.png>)

#### Penjelasan Kode
Kode program ini mendefinisikan sebuah kelas bernama "AljabarLibraries" yang memiliki dua metode statis: "AkarPersamaanKuadrat" untuk menghitung akar-akar dari persamaan kuadrat menggunakan rumus diskriminan, dan "HasilKuadrat" untuk menghitung hasil kuadrat dari bentuk (ax + b)² menjadi tiga koefisien a², 2ab, dan b². Fungsi pertama mengembalikan array berisi akar-akar real dari persamaan kuadrat berdasarkan nilai diskriminan (dua akar jika positif, satu akar jika nol, dan kosong jika negatif), sedangkan fungsi kedua mengembalikan array koefisien hasil kuadrat dari bentuk binomial. Program ini kemudian menjalankan kedua fungsi tersebut dengan contoh input dan mencetak hasilnya ke konsol.
