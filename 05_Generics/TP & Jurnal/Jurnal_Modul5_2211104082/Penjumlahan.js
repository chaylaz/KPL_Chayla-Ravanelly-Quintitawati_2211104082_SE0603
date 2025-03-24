class Penjumlahan {
    static JumlahTigaAngka(a, b, c) {
        let hasil = Number(a) + Number(b) + Number(c);
        return hasil;
    }
}

class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    AddNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date().toUTCString());
    }

    PrintAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data ${index + 1} berisi : ${data}, yang disimpan pada waktu UTC : ${this.inputDates[index]}`);
        });
    }
}

// NIM : 2211104082 -> Menggunakan float 
let angka1 = 22.0;
let angka2 = 11.0;
let angka3 = 10.0;

let hasil = Penjumlahan.JumlahTigaAngka(angka1, angka2, angka3);
console.log(`Hasil penjumlahan : ${hasil}`);

let database = new SimpleDataBase();
database.AddNewData(angka1);
database.AddNewData(angka2);
database.AddNewData(angka3);
database.PrintAllData();
