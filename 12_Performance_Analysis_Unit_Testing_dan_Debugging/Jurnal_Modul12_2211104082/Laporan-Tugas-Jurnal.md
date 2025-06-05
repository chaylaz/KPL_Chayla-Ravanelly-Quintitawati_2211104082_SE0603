 # Laporan Praktikum Konstruksi Perangkat Lunak

#### Nama : Chayla Ravanelly Quintitawati

#### NIM : 2211104082 / SE-06-03

## Tugas Jurnal

### 1. Membuat GUI Sederhana

#### main.js

File main.js berperan sebagai titik masuk utama aplikasi berbasis Electron. Di dalamnya dilakukan pembuatan jendela aplikasi menggunakan BrowserWindow, serta memuat file HTML (index.html) untuk ditampilkan. Selain itu, file ini juga mengatur siklus hidup aplikasi, seperti membuka jendela saat aplikasi siap dan menangani aksi saat jendela ditutup. File ini berjalan pada proses utama (main process) dari Electron.

```
const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
```

#### index.html

File ini berisi struktur tampilan antarmuka pengguna (GUI) menggunakan HTML. Di dalamnya terdapat dua textbox (untuk input nilai a dan b), satu tombol (untuk memicu perhitungan), dan satu label (untuk menampilkan hasil output). File ini menjadi UI statis yang dirender oleh Electron dan berkomunikasi dengan skrip renderer.js untuk menangani logika perhitungan saat pengguna berinteraksi.


```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Cari Nilai Pangkat</title>
  </head>
  <body>
    <h1>Hitung Nilai Pangkat</h1>
    <input type="number" id="inputA" placeholder="Masukkan nilai a" />
    <input type="number" id="inputB" placeholder="Masukkan nilai b" />
    <button onclick="hitungPangkat()">Hitung</button>
    <p id="output"></p>

    <script src="renderer.js"></script>
  </body>
</html>
```

#### renderer.js

File ini berfungsi sebagai jembatan antara tampilan HTML (index.html) dan logika aplikasi (fungsi CariNilaiPangkat). File ini berjalan di proses renderer (browser window) pada Electron. Di dalamnya terdapat kode JavaScript untuk menangani klik tombol, membaca nilai dari textbox, memanggil fungsi CariNilaiPangkat dari file pangkat.js, dan menampilkan hasil ke label. renderer.js menangani semua interaksi dinamis di sisi UI.

```
const { CariNilaiPangkat } = require("./pangkat");

window.hitungPangkat = function () {
  const a = parseInt(document.getElementById("inputA").value);
  const b = parseInt(document.getElementById("inputB").value);
  const hasil = CariNilaiPangkat(a, b);
  document.getElementById("output").innerText = `Hasil: ${hasil}`;
};
```

#### pangkat.js

File ini berisi definisi fungsi utama CariNilaiPangkat(a, b), yang menghitung pangkat berdasarkan aturan logika tertentu seperti jika b = 0 hasil 1, jika b < 0 hasil -1, jika b > 10 atau a > 100 hasil -2, dan jika hasil pangkat melebihi batas maksimal Number.MAX_SAFE_INTEGER maka hasil -3. File ini menggunakan JavaScript murni dan diekspor menggunakan module.exports, sehingga dapat digunakan baik di renderer.js maupun pada unit test.

```
function CariNilaiPangkat(a, b) {
  if (b === 0) return 1;
  if (b < 0) return -1;
  if (b > 10 || a > 100) return -2;

  let hasil = 1;
  try {
    for (let i = 0; i < b; i++) {
      hasil *= a;
      if (!Number.isSafeInteger(hasil)) throw new Error("Overflow");
    }
    return hasil;
  } catch (err) {
    return -3;
  }
}

module.exports = { CariNilaiPangkat };
```

#### Output Kode

a. Tampilan GUI
![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/Jurnal/tampilan%20gui.png)

b. Input perpangkatan biasa
![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/Jurnal/81.png)

c. Apabila input b adalah 0 maka nilai return selalu 1
![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/Jurnal/1.png)

d. Apabila input b adalah bilangan negatif, maka nilai return adalah -1
![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/Jurnal/-1.png)

e. Apabila input b lebih dari 10 atau input a lebih dari 100 maka nilai return adalah -2
![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/Jurnal/-2.png)

f. Apabila hasil pangkat melebihi batas maksimal bilangan positif integer maka nilai return adalah -3
![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/Jurnal/-3.png)

### 2. Melakukan Software Profiling

#### Saat aplikasi idle (tanpa input)

![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/Jurnal/tanpa%20input.png)


#### Input 3 dan 19

![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/Jurnal/input%203%20dan%209.png)


#### Input 9 dan 30

![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/Jurnal/9%20%26%2030.png)


### 3. Menambahkan Unit Testing

#### pangkat.test.js

File pangkat.test.js berfungsi untuk menguji validitas fungsi CariNilaiPangkat menggunakan framework Jest. Pengujian dilakukan untuk berbagai kondisi input: mulai dari kasus normal, nol, negatif, nilai batas atas, hingga kasus overflow. Hal ini bertujuan untuk memastikan bahwa setiap percabangan logika pada fungsi diuji secara menyeluruh dan dapat dipastikan hasilnya sesuai dengan yang diharapkan.

```
const { CariNilaiPangkat } = require("./pangkat");

test("pangkat biasa 2^3 = 8", () => {
  expect(CariNilaiPangkat(2, 3)).toBe(8);
});

test("0^0 = 1", () => {
  expect(CariNilaiPangkat(0, 0)).toBe(1);
});

test("negatif pangkat return -1", () => {
  expect(CariNilaiPangkat(2, -2)).toBe(-1);
});

test("pangkat lebih dari 10 return -2", () => {
  expect(CariNilaiPangkat(2, 11)).toBe(-2);
});

test("nilai a lebih dari 100 return -2", () => {
  expect(CariNilaiPangkat(101, 2)).toBe(-2);
});

test("overflow return -3", () => {
  expect(CariNilaiPangkat(100, 10)).toBe(-3);
});
```

![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/Jurnal/hasil%20test.png)