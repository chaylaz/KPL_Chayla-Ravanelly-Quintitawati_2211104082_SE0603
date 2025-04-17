## NAMA : CHAYLA RAVANELLY QUINTITAWATI 
## NIM : 2211104082
## KELAS : SE 06 03

# TUGAS PENDAHULUAN 

### Menambahkan JSON Deserialization 1

Screenshot Code : 

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul7/TP/input%20tugas%20pertama.png>)

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul7/TP/json%20tugas%20pertama.png>)

Output : 

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul7/TP/output%20tugas%20pertama%20.png>) 


### Menambahkan JSON Deserialization 2

Screenshot Code :

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul7/TP/input%20tugas%20kedua.png>)

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul7/TP/json%20tugas%20kedua.png>)

Output : 

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul7/TP/output%20tugas%20kedua.png>)

Penjelasan Kode Program : 
Dua potongan kode JavaScript yang dibuat masing-masing bertugas untuk membaca dan menampilkan isi file JSON secara terstruktur. Program pertama terdapat pada kelas "DataMahasiswa2211104082", yang berfungsi untuk membuka file "data.json", lalu mengubah isinya menjadi objek dengan "JSON.parse". Setelah berhasil, program akan menampilkan informasi mahasiswa berupa nama lengkap yang disusun dari nama depan dan belakang, NIM, serta asal fakultas. Sedangkan pada kode kedua, kelas "KuliahMahasiswa2211104082" digunakan untuk memproses file "matkul.json" yang memuat daftar mata kuliah. Melalui method "ReadJSON()", data tersebut diurai lalu dicetak satu per satu, dimulai dari "MK 1" hingga "MK n", lengkap dengan kode dan nama masing-masing mata kuliah. Keduanya menggunakan modul "fs" untuk membaca file, dan menerapkan teknik error handling untuk mengantisipasi kegagalan dalam proses baca atau parsing data. Secara keseluruhan, kedua program ini dirancang untuk mempermudah pengambilan serta penyajian data berbasis file eksternal dengan format JSON.
