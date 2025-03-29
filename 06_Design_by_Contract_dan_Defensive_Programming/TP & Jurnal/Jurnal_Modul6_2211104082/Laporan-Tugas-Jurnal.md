## NAMA : CHAYLA RAVANELLY QUINTITAWATI 
## NIM : 2211104082
## KELAS : SE 06 03

# TUGAS JURNAL  

### Menambahkan dua class SayaTubeVideo dan SayaTubeUser

Screenshot Code : 

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul6/Jurnal/input%20jurnal%20awal%201.png>)

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul6/Jurnal/input%20jurnal%20awal%202.png>)

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul6/Jurnal/input%20jurnal%20awal%203.png>)

Output : 

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul6/Jurnal/output%20jurnal%20awal.png>) 


### SimpleDataBase

Screenshot Code :

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul6/Jurnal/input%20jurnal%20kedua%201.png>)

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul6/Jurnal/input%20jurnal%20kedua%202.png>)

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul6/Jurnal/input%20jurnal%20kedua%203.png>)

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul6/Jurnal/input%20jurnal%20kedua%204.png>)

Output : 

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul6/Jurnal/output%20jurnal%20kedua.png>)

Penjelasan Kode Program : 
Program ini awalnya terdiri dari dua kelas, yaitu "SayaTubeVideo" dan "SayaTubeUser". Kelas "SayaTubeVideo" bertanggung jawab untuk menyimpan informasi mengenai video, termasuk ID acak 5 digit, judul, dan jumlah pemutaran. Metode "IncreasePlayCount" memungkinkan penambahan jumlah pemutaran, sedangkan "PrintVideoDetails" mencetak detail video. Sementara itu, "SayaTubeUser" menyimpan daftar video yang diunggah oleh pengguna serta menyediakan metode untuk menambahkan video, menghitung total pemutaran semua video, dan mencetak daftar video yang diunggah. Setelah dimodifikasi, kode ini telah menerapkan prinsip *Design by Contract*, dengan menambahkan pengecekan awal (*precondition*) untuk memastikan judul video dan nama pengguna tidak kosong serta tidak melebihi batas karakter yang ditentukan. Selain itu, batasan jumlah maksimal pemutaran yang dapat ditambahkan dalam satu kali pemanggilan metode juga diterapkan untuk mencegah input yang tidak valid. Dalam hal penanganan kesalahan (*exception handling*), blok "try-catch" ditambahkan agar program tidak berhenti secara tiba-tiba jika terjadi kesalahan, seperti nilai pemutaran yang melebihi batas integer. Kemudian, terdapat postcondition yang membatasi jumlah video yang ditampilkan dalam metode "PrintAllVideoPlaycount" menjadi maksimal delapan. Modifikasi ini meningkatkan keamanan dan keandalan program dengan memastikan data yang dimasukkan valid dan mencegah kemungkinan *overflow* yang dapat menyebabkan error.

