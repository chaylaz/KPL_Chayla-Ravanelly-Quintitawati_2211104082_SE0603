# Laporan Praktikum Konstruksi Perangkat Lunak

#### Nama : Chayla Ravanelly Quintitawati

#### NIM : 2211104082 / SE-06-03

## Tugas Jurnal

### MENJELASKAN DESIGN PATTERN SINGLETON

#### A. Dua Contoh Kondisi Penggunaan Design Pattern “Singleton”

1. Dalam aplikasi yang memerlukan sistem pencatatan log yang seragam di seluruh bagian program, Singleton digunakan agar hanya ada satu objek Logger yang aktif, sehingga semua log tersimpan di satu tempat yang sama.

2. Pada aplikasi yang mengandalkan konfigurasi global (misalnya dari file .json, .ini, atau variabel lingkungan), Singleton berguna untuk memastikan hanya satu objek konfigurasi yang dibuat dan dibagikan ke seluruh komponen aplikasi.

#### B. Ringkasan Langkah-Langkah Implementasi Singleton

1. Menjadikan Constructor Privat atau Terproteksi
Ini bertujuan untuk mencegah pembuatan objek langsung dari luar kelas dengan menggunakan new.

2. Menyediakan Field Statis untuk Menyimpan Instance
Biasanya berupa atribut kelas yang menyimpan objek Singleton agar bisa diakses berulang kali tanpa membuat instance baru.

3. Membuat Method Statis (misalnya getInstance() atau instance())
Method ini bertugas untuk mengecek apakah instance sudah ada. Jika belum, ia akan membuatnya, dan jika sudah ada, langsung mengembalikannya.

#### C. Tiga Kelebihan dan Kekurangan Singleton Pattern

1. Kelebihan

   - Kontrol Terpusat : Menjamin hanya satu objek yang dibuat dan digunakan bersama di seluruh bagian aplikasi.
   - Efisiensi Resource : Karena hanya satu instance yang digunakan, maka pemakaian memori dan sumber daya lainnya menjadi lebih hemat.
   - Kemudahan Akses : Objek Singleton dapat diakses dengan mudah dari mana saja dalam aplikasi menggunakan method statis.

2. Kekurangan
   - Sulit Diuji Secara  : Karena instance global sulit direset atau dimodifikasi, pengujian unit bisa menjadi kompleks terutama jika ada state yang berubah.
   - Adanya Ketergantungan Tersembunyi : Kelas yang menggunakan Singleton bisa terlihat independen padahal menyimpan ketergantungan terhadap instance global.
   - Melanggar Prinsip Desain SOLID : Singleton kerap menggabungkan logika utama dan pengelolaan instance, sehingga tidak mengikuti prinsip pemisahan tanggung jawab atau keterbukaan terhadap ekstensi.

### IMPLEMENTASI DAN PEMAHAMAN DESIGN PATTERN SINGLETON

#### pusat_data_singleton.py

```
class PusatDataSingleton:
    _instance = None  # Property singleton
    def __init__(self):
        self.DataTersimpan = []  # List of strings

    @classmethod
    def GetDataSingleton(cls):
        if cls._instance is None:
            cls._instance = PusatDataSingleton()
        return cls._instance

    def GetSemuaData(self):
        return self.DataTersimpan

    def PrintSemuaData(self):
        print("Isi data:")
        for data in self.DataTersimpan:
            print(f"- {data}")

    def AddSebuahData(self, input):
        self.DataTersimpan.append(input)

    def HapusSebuahData(self, index):
        if 0 <= index < len(self.DataTersimpan):
            removed = self.DataTersimpan.pop(index)
            print(f"Data '{removed}' telah dihapus.")
        else:
            print("Index tidak valid.")
```

### IMPLEMENTASI PROGRAM UTAMA

#### main.py

```
from pusat_data_singleton import PusatDataSingleton

if __name__ == "__main__":
    # A. Buat dua variable singleton
    data1 = PusatDataSingleton.GetDataSingleton()
    data2 = PusatDataSingleton.GetDataSingleton()

    # B. Tambah data anggota dan asisten via data1
    data1.AddSebuahData("Alice - Anggota")
    data1.AddSebuahData("Bob - Anggota")
    data1.AddSebuahData("Charlie - Anggota")
    data1.AddSebuahData("Dina - Asisten Praktikum")

    # C. Cetak data dari data2 (harusnya sama dengan data1)
    print("\n[Print dari data2 sebelum penghapusan]")
    data2.PrintSemuaData()

    # D. Hapus asisten via data2
    index_asisten = data2.GetSemuaData().index("Dina - Asisten Praktikum")
    data2.HapusSebuahData(index_asisten)

    # E. Cetak ulang data dari data1 (asisten harus sudah hilang)
    print("\n[Print dari data1 setelah penghapusan dari data2]")
    data1.PrintSemuaData()

    # F. Hitung jumlah data
    print("\nJumlah data di data1:", len(data1.GetSemuaData()))
    print("Jumlah data di data2:", len(data2.GetSemuaData()))

```

#### Output

![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul13/Jurnal/1.png)

#### Penjelasan Kode

Dalam kode ini, pola desain Singleton diterapkan melalui kelas PusatDataSingleton, yang berfungsi sebagai tempat penyimpanan data berbentuk list. Tujuannya adalah agar hanya ada satu instance objek yang dibuat selama program berjalan. Hal ini tercapai berkat properti _instance dan method kelas GetDataSingleton(). Jika _instance masih kosong (None), maka akan dibuat objek baru dan disimpan di sana. Jika tidak, objek yang sama akan dikembalikan setiap kali diminta.

Konstruktor _init_() hanya dijalankan satu kali, dan fungsinya adalah menginisialisasi DataTersimpan sebagai list kosong. Fungsi lain yang disediakan meliputi menambahkan item (melalui AddSebuahData()), mencetak seluruh data (PrintSemuaData()), menghapus data berdasarkan indeks (HapusSebuahData()), dan mengambil seluruh isi list (GetSemuaData()).

Pada main.py, program utama menciptakan dua variabel, data1 dan data2, yang keduanya mengakses instance Singleton yang sama. Data ditambahkan melalui data1, lalu dicetak menggunakan data2 untuk membuktikan bahwa keduanya berbagi list yang sama. Selanjutnya, data2 digunakan untuk menghapus data tertentu (dalam hal ini, informasi asisten praktikum), dan ketika data tersebut dicetak ulang lewat data1, hasilnya sudah berubah. Ini menunjukkan bahwa data1 dan data2 memang merujuk pada objek yang sama. Di akhir, jumlah data yang tersisa dihitung melalui kedua variabel dan hasilnya tentu saja identik karena list-nya adalah satu.