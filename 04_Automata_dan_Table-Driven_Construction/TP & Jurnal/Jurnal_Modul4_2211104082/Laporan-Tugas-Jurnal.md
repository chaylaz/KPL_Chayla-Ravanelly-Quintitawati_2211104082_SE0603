## NAMA : CHAYLA RAVANELLY QUINTITAWATI 
## NIM : 2211104082
## KELAS : SE 06 03

# TUGAS JURNAL  

### Kode Buah 

Screenshot Code : 

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul4/jurnal/input%20kode%20buah.png>)

Output : 

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul4/jurnal/output%20kode%20buah.png>) 

Penjelasan Kode Program :
Kode di atas mendefinisikan sebuah kelas bernama "KodeBuah yang" menyimpan daftar nama buah beserta kode uniknya dalam bentuk objek JavaScript ("kodeBuahMap"). Objek ini berisi pasangan kunci-nilai, di mana kunci adalah nama buah dan nilai adalah kode yang sesuai. Method "getKodeBuah" berfungsi untuk mengambil kode buah berdasarkan nama yang diberikan sebagai parameter. Jika nama buah yang dicari tidak ada dalam daftar, method ini akan mengembalikan pesan "Kode tidak ditemukan". Pada bagian akhir, terdapat contoh penggunaan di mana kode buah untuk "Apel" dan "Durian" dipanggil lalu hasilnya ditampilkan di konsol dengan menggunakan "console.log()".


### Posisi Karakter Game 

Screenshot Code :

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul4/jurnal/input%20posisi%20karakter%20game1.png>)

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul4/jurnal/input%20posisi%20karakter%20game2.png>)

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul4/jurnal/input%20posisi%20karakter%20game3.png>)

Output : 

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul4/jurnal/output%20posisi%20karakter%20game.png>)

Penjelasan Kode Program : 
Kode ini merupakan implementasi sistem perubahan posisi karakter dalam permainan menggunakan konsep state-based dalam JavaScript. Kelas "PosisiKarakterGame" memiliki atribut "state" yang menyimpan posisi karakter dan "nim" sebagai parameter untuk menentukan aturan tambahan berdasarkan hasil modulus 3. Metode "changeState(action)" menangani perubahan posisi berdasarkan tombol yang ditekan, yaitu "TombolS" untuk turun dan "TombolW" untuk naik, mengikuti diagram transisi yang diberikan. Jika "nim % 3 == 0", akan muncul pesan saat tombol ditekan; jika "nim % 3 == 1", pesan muncul saat berpindah ke "Berdiri" atau "Tengkurap"; dan jika "nim % 3 == 2", pesan muncul saat berpindah dari "Terbang" ke "Jongkok" (landing) dan "Berdiri" ke "Terbang" (take off). Fungsi "main()" bertanggung jawab untuk menjalankan simulasi perubahan posisi dengan memanggil metode "changeState(action)" secara berurutan, memastikan semua skenario transisi dapat diuji sesuai dengan diagram.


