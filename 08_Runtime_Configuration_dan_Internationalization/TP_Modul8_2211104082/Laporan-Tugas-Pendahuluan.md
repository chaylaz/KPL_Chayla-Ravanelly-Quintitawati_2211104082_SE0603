## NAMA : CHAYLA RAVANELLY QUINTITAWATI 
## NIM : 2211104082
## KELAS : SE 06 03

# TUGAS PENDAHULUAN 

### Implementasi Runtime Configuration

Screenshot Code : 

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul8/TP/main.js.png>)

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul8/TP/json.png>)

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul8/TP/config.js.png>)

Output : 

![image alt ](<https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul8/TP/output%20tugas%20pertama.png>) 

Penjelasan Kode Program : 
Program ini dibuat menggunakan Node.js dan terdiri dari tiga file utama, yaitu "covid_config.json", "CovidConfig.js", dan "main.js". File "covid_config.json" berfungsi sebagai sumber konfigurasi yang dapat diubah secara dinamis, mencakup satuan suhu, batas hari demam, serta pesan diterima atau ditolak. Kelas "CovidConfig" menangani pembacaan, penyimpanan, dan pengaturan nilai konfigurasi. Apabila file konfigurasi belum tersedia, maka sistem akan menggunakan nilai default. Di dalam kelas ini juga terdapat metode "ubahSatuan" untuk mengganti satuan suhu dari Celcius ke Fahrenheit atau sebaliknya. Sementara itu, file "main.js" merupakan bagian utama program yang menerima input dari pengguna berupa suhu tubuh dan jumlah hari sejak terakhir mengalami demam. Berdasarkan input tersebut dan aturan dari file konfigurasi, program akan menampilkan pesan apakah pengguna diizinkan atau tidak masuk ke gedung. Program ini memanfaatkan teknik konfigurasi saat runtime, sehingga nilai-nilai penting dapat diubah tanpa perlu mengedit langsung kode program.
