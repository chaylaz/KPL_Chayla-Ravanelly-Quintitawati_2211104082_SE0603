# Laporan Praktikum Konstruksi Perangkat Lunak
#### Nama : Chayla Ravanelly Quintitawati
#### NIM : 2211104082 / SE-06-03

## Tugas Jurnal

### REFACTORING DENGAN STANDAR CODE

#### kuliah.js

```
const fs = require('fs');

class KuliahMahasiswa {
    constructor() {
        this.courseList = []; // Menyimpan daftar mata kuliah
    }

    // Method untuk membaca dan memparsing file JSON
    readJsonFile() {
        try {
            // Membaca isi file JSON
            const rawJsonData = fs.readFileSync('jurnal.json');

            // Mengubah data JSON ke dalam objek JavaScript
            const parsedData = JSON.parse(rawJsonData);
            this.courseList = parsedData.courses;

            // Menampilkan daftar mata kuliah
            console.log("Daftar mata kuliah yang diambil:");
            this.courseList.forEach((course, index) => {
                console.log(`MK ${index + 1}: ${course.code} - ${course.name}`);
            });

            return this.courseList;
        } catch (error) {
            console.error('Gagal membaca atau memparsing file JSON:', error);
            return [];
        }
    }
}

// Contoh penggunaan class
const mahasiswa = new KuliahMahasiswa();
mahasiswa.readJsonFile();
```

#### jurnal.json

```
{
  "courses": [{
          "code": "CRI2C4",
          "name": "Konstruksi Perangkat Lunak"
      },
      {
          "code": "CRI3D4",
          "name": "Pemrograman Web"
      },
      {
          "code": "CRI3E4",
          "name": "Basis Data"
      },
      {
          "code": "CRI3F4",
          "name": "Sistem Operasi Perangkat Lunak"
      },
      {
          "code": "CRI3G4",
          "name": "Jaringan Komputer"
      },
      {
          "code": "CRI3H4",
          "name": "Kecerdasan Buatan"
      },
      {
          "code": "CRI3I4",
          "name": "Proyek Tingkat 2"
      }
  ]
}
```

#### Output
![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul14/Jurnal/jurnal.png)

#### Penjelasan Kode
Kode JavaScript tersebut menggunakan modul "fs" dari Node.js untuk membaca file "jurnal.json" yang berisi daftar mata kuliah. Kelas "KuliahMahasiswa" dibuat dengan sebuah properti "courseList" yang menyimpan data mata kuliah. Melalui method "readJsonFile()", file JSON dibaca secara sinkron lalu diparsing menjadi objek JavaScript. Data daftar mata kuliah dari file tersebut dimasukkan ke dalam "courseList" dan ditampilkan satu per satu di konsol menggunakan "forEach". Jika terjadi kesalahan saat membaca atau memparsing file, error akan ditangkap dan ditampilkan. Di akhir kode, objek dari kelas "KuliahMahasiswa" dibuat dan method "readJsonFile()" dipanggil untuk menjalankan proses pembacaan dan penampilan data dari file JSON tersebut.
