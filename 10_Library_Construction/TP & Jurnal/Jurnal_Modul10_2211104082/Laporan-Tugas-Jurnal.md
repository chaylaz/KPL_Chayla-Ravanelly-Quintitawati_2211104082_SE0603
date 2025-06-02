# Laporan Praktikum Konstruksi Perangkat Lunak
#### Nama : Chayla Ravanelly Quintitawati
#### NIM : 2211104082 / SE-06-03

## Tugas Jurnal

### Membuat Library Aljabar

#### app.js


const MatematikaLibraries = require("./MatematikaLibraries.js");

console.log("FPB(60, 45):", MatematikaLibraries.FPB(60, 45));

console.log("KPK(12, 8):", MatematikaLibraries.KPK(12, 8));

console.log(
  "Turunan([1, 4, -12, 9]):",
  MatematikaLibraries.Turunan([1, 4, -12, 9])
);

console.log(
  "Integral([4, 6, -12, 9]):",
  MatematikaLibraries.Integral([4, 6, -12, 9])
);


#### MatematikaLibraries.js


class MatematikaLibraries {
  static FPB(input1, input2) {
    let a = Math.abs(input1);
    let b = Math.abs(input2);

    while (b) {
      let temp = b;
      b = a % b;
      a = temp;
    }

    return a;
  }

  static KPK(input1, input2) {
    return Math.abs(input1 * input2) / this.FPB(input1, input2);
  }

  static Turunan(persamaan) {
    let result = [];

    for (let i = 0; i < persamaan.length - 1; i++) {
      const koefisien = persamaan[i] * (persamaan.length - 1 - i);
      const pangkat = persamaan.length - 2 - i;

      if (koefisien !== 0) {
        if (pangkat === 0) {
          result.push(koefisien.toString());
        } else if (pangkat === 1) {
          result.push(`${koefisien}x`);
        } else {
          result.push(`${koefisien}x${pangkat}`);
        }
      }
    }

    return result.join(" + ").replace(/\+ -/g, "- ");
  }

  static Integral(persamaan) {
    let result = [];

    for (let i = 0; i < persamaan.length; i++) {
      const pangkat = persamaan.length - i;
      const koefisien = persamaan[i] / pangkat;

      if (koefisien !== 0) {
        if (pangkat === 1) {
          result.push(`${koefisien}x`);
        } else {
          result.push(`${koefisien}x${pangkat}`);
        }
      }
    }

    result.push("C");

    return result.join(" + ").replace(/\+ -/g, "- ");
  }
}

module.exports = MatematikaLibraries;


#### Output
![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul10/Jurnal/output.png>)

#### Penjelasan Kode
Kode program ini mendefinisikan sebuah kelas bernama "MatematikaLibraries" yang memiliki empat metode statis untuk menyelesaikan berbagai operasi matematika. Metode "FPB" menghitung faktor persekutuan terbesar dari dua angka dengan algoritma Euclidean. Metode "KPK" menghitung kelipatan persekutuan terkecil dari dua angka menggunakan hasil perkalian dibagi FPB. Metode "Turunan" menerima array koefisien dari sebuah polinomial dan mengembalikan bentuk turunannya dalam notasi aljabar, di mana setiap koefisien dikalikan dengan pangkat aslinya lalu diturunkan satu derajat. Metode "Integral" melakukan kebalikan dari turunan, yaitu mengintegralkan setiap suku polinomial dengan menambahkan satu pangkat dan membagi koefisiennya, lalu menambahkan konstanta integrasi "C" di akhir. Program ini kemudian menjalankan keempat metode tersebut dengan input contoh dan mencetak hasilnya ke konsol.



