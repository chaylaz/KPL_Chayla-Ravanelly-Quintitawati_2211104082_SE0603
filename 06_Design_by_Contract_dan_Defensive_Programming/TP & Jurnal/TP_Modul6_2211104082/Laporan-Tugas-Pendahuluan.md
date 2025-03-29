## NAMA : CHAYLA RAVANELLY QUINTITAWATI 
## NIM : 2211104082
## KELAS : SE 06 03

# TUGAS PENDAHULUAN 

### Menambahkan class SayaTubeVideo

Screenshot Code : 

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul6/TP/input%20sayatubevideo.png>)

Output : 

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul6/TP/output%20sayatubevideo.png>) 


### Implementasi design by contract

Screenshot Code :

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul6/TP/input%20implementasi%20design%20by%20contract%201.png>)

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul6/TP/input%20implementasi%20design%20by%20contract%202.png>)

Output : 

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul6/TP/output%20implementasi%20design%20by%20contract.png>)

Penjelasan Kode Program : 
Sebelum dimodifikasi, program hanya mendefinisikan kelas SayaTubeVideo dengan atribut id, title, dan playCount. ID dibuat secara acak dalam rentang lima digit, judul diatur melalui konstruktor, dan playCount diinisialisasi dengan nilai nol. Metode IncreasePlayCount menambah jumlah tampilan tanpa batasan, sementara PrintVideoDetails mencetak informasi video. Di dalam fungsi utama, sebuah objek video dibuat dengan judul tertentu, jumlah tampilan ditambah 100, lalu detailnya ditampilkan. Setelah dimodifikasi, kode diperkuat dengan prinsip Design by Contract. Prekondisi ditambahkan agar judul tidak boleh kosong dan maksimal 100 karakter. Penambahan jumlah tampilan juga dibatasi hingga 10 juta per pemanggilan. Selain itu, pengecekan terhadap kemungkinan overflow dilakukan dengan membandingkan nilai playCount dengan batas maksimum yang dapat ditangani JavaScript. Jika terjadi kesalahan, blok try-catch akan menangkap dan menampilkan pesan error tanpa menghentikan program. Di dalam fungsi utama, selain pembuatan objek normal, terdapat pengujian validasi judul serta simulasi overflow menggunakan perulangan untuk menguji batasan jumlah tampilan.
