class Penjumlahan {
    static JumlahTigaAngka(a, b, c) {
        let hasil = Number(a) + Number(b) + Number(c);
        return hasil;
    }
}

// NIM : 2211104082 -> Menggunakan float
let angka1 = 22.0;
let angka2 = 11.0;
let angka3 = 10.0;

let hasil = Penjumlahan.JumlahTigaAngka(angka1, angka2, angka3);
console.log(`Hasil penjumlahan : ${hasil}`);
