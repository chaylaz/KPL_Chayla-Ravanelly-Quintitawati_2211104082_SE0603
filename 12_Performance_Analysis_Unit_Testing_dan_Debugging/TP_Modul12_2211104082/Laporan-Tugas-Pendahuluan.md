# Laporan Praktikum Konstruksi Perangkat Lunak

#### Nama : Chayla Ravanelly Quintitawati

#### NIM : 2211104082 / SE-06-03

## Tugas Pendahuluan

### 1. Membuat GUI Sederhana

#### main.js

main.js merupakan titik awal (entry point) dari aplikasi Electron. File ini bertugas untuk membuat jendela aplikasi melalui Electron API, memuat index.html, dan menangani proses utama (main process). Dalam file ini juga diatur ukuran jendela, pengaturan keamanan konten, dan komunikasi awal antara proses utama dan renderer. Peran main.js sangat penting karena mengatur siklus hidup aplikasi, seperti saat aplikasi dibuka, ditutup, maupun dimuat ulang.

```
const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);
```

#### index.html

File index.html berfungsi sebagai antarmuka pengguna (GUI) utama dari aplikasi. Di dalamnya terdapat elemen-elemen HTML seperti input angka, tombol untuk menjalankan proses, serta label untuk menampilkan hasil. File ini juga memuat renderer.js melalui tag < script > yang berfungsi menghubungkan elemen HTML dengan logika JavaScript. Secara umum, file ini menyediakan struktur tampilan dan interaksi dasar bagi pengguna aplikasi.

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Tanda Bilangan</title>
</head>
<body>
    <h2>Tanda Bilangan</h2>
    <input type="number" id="inputNumber" placeholder="Masukkan angka" />
    <button onclick="cekTanda()">Cek Tanda</button>
    <p id="output"></p>

    <script src="renderer.js"></script>
</body>
</html>
```

#### renderer.js

renderer.js adalah file skrip yang dijalankan pada proses renderer, yaitu lingkungan JavaScript di dalam index.html. File ini menangani input dari pengguna, mengambil nilai dari textbox saat tombol ditekan, memanggil fungsi CariTandaBilangan, serta mengubah konten elemen output dengan hasil yang sesuai. Fungsi utama dari file ini adalah menjembatani antara logika aplikasi dan antarmuka pengguna secara dinamis.

```
const { CariTandaBilangan } = require('./logic');

function cekTanda() {
    const input = document.getElementById('inputNumber').value;
    const output = document.getElementById('output');

    const num = parseInt(input);
    if (isNaN(num)) {
    output.innerText = "Masukkan angka yang valid!";
    } else {
    output.innerText = "Hasil: " + CariTandaBilangan(num);
    }
}
```

#### logic.js

File logic.js berisi fungsi CariTandaBilangan(a) yang bertugas menentukan apakah nilai input merupakan bilangan negatif, nol, atau positif. Fungsi ini diekspor menggunakan module.exports agar dapat digunakan oleh file lain, termasuk untuk kebutuhan pengujian (unit test). File ini merupakan inti logika dari aplikasi dan menjadi fokus utama dalam validasi kebenaran proses.

```
function CariTandaBilangan(a) {
    if (a < 0) return "Negatif";
    else if (a > 0) return "Positif";
    else return "Nol";
}

module.exports = { CariTandaBilangan };
```

#### Output Kode

![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/TP/24.png)

![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/TP/-24.png)

![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/TP/0.png)

### 2. Melakukan Software Profiling

#### Saat aplikasi idle (tanpa input)

![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/TP/cpu%20no%20input.png)
![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/TP/memori%20no%20input.png)

#### Saat pengguna memberikan input  dan menekan tombol

![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/TP/cpu%20input.png)
![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/TP/memori%20input.png)

### 3. Menambahkan Unit Testing

#### logic.test.js

File logic.test.js adalah skrip pengujian unit yang menggunakan framework Jest untuk memastikan bahwa fungsi CariTandaBilangan dari file logic.js bekerja sebagaimana mestinya. Terdapat beberapa test case yang digunakan untuk menguji output berdasarkan input negatif, nol, dan positif. Penamaan file dengan akhiran .test.js membantu Jest mengenali file ini secara otomatis saat proses testing dijalankan. Unit test ini bertujuan memastikan semua cabang logika telah diuji dengan benar.

```
const { CariTandaBilangan } = require('./logic');

test('Angka negatif', () => {
    expect(CariTandaBilangan(-10)).toBe('Negatif');
});

test('Angka positif', () => {
    expect(CariTandaBilangan(5)).toBe('Positif');
});

test('Angka nol', () => {
    expect(CariTandaBilangan(0)).toBe('Nol');
});
```

![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul12/TP/hasil%20test.png)