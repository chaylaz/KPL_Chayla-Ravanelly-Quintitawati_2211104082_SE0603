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