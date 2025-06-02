# Laporan Praktikum Konstruksi Perangkat Lunak

#### Nama : Chayla Ravanelly Quintitawati

#### NIM : 2211104082 / SE-06-03

## Tugas Pendahuluan

### DESIGN PATTERN

#### A. Contoh Situasi Penggunaan Design Pattern “Observer”

Salah satu situasi yang sesuai untuk penggunaan Observer Pattern adalah pada fitur langganan (subscribe) di platform YouTube. Ketika seorang user (observer) menekan tombol Subscribe pada sebuah channel (subject), maka sistem akan secara otomatis mengirimkan pemberitahuan setiap kali channel tersebut merilis video baru. Dalam hal ini, YouTube bertindak sebagai subject yang menyimpan daftar observers (subscriber) dan menginformasikan kepada mereka saat ada perubahan — contohnya, ketika video baru diunggah. Inilah prinsip dasar dari Observer Pattern.

#### B. Ringkasan Langkah-Langkah Implementasi Observer Pattern

1. Membuat Interface/Kelas Observer
Menyediakan method seperti update() yang akan dipanggil jika terjadi perubahan pada subject.

2. Membuat Interface/Kelas Subject
Kelas ini bertugas menyimpan daftar observers serta menyediakan method attach(), detach(), dan notify().

3. Mengimplementasikan Subject Konkret
Merupakan representasi nyata dari subjek, misalnya YouTube Channel, yang dapat mengunggah video baru dan memberi tahu seluruh observer.

4. Mengimplementasikan Observer Konkret
Berfungsi sebagai subscriber yang ingin mendapat pemberitahuan setiap kali ada video baru.

5. Menambahkan Observer ke Subject
Subscriber perlu memanggil method attach() agar bisa mulai menerima notifikasi dari subject terkait.

#### C. Kelebihan dan Kekurangan Observer Pattern

1. Kelebihan

   - Loose Coupling : Subject tidak perlu mengetahui detail tentang observer secara langsung, hanya cukup memberi tahu saat terjadi perubahan.
   - Fleksibel untuk Dikembangkan: Menambah observer tidak mengharuskan perubahan kode pada subject.
   - Responsif terhadap Update: Perubahan pada subject langsung diteruskan ke seluruh observer secara real-time.

2. Kekurangan
   - Beban Kinerja : Bila jumlah observer sangat banyak, proses notifikasi bisa memengaruhi performa sistem.
   - Sulit untuk Debugging : Hubungan antar objek tidak terlihat secara eksplisit, sehingga menyulitkan saat ingin melakukan pelacakan masalah.
   - Urutan Tidak Terjamin : Notifikasi bisa dikirim tanpa urutan yang pasti, yang berisiko jika urutan memiliki dampak penting.

### IMPLEMENTASI DAN PEMAHAMAN DESIGN PATTERN OBSERVER

#### A. event_manager.py

```
class EventManager:
    def __init__(self):
        self.listeners = {}

    def subscribe(self, event_type, listener):
        if event_type not in self.listeners:
            self.listeners[event_type] = []
        self.listeners[event_type].append(listener)

    def unsubscribe(self, event_type, listener):
        if event_type in self.listeners:
            self.listeners[event_type].remove(listener)

    def notify(self, event_type, data):
        if event_type in self.listeners:
            for listener in self.listeners[event_type]:
                listener.update(data)

```

#### B. youtube_channel.py

```
from event_manager import EventManager

class YouTubeChannel:
    def __init__(self, name):
        self.name = name
        self.events = EventManager()

    def upload_video(self, video_title):
        print(f"[{self.name}] Uploaded a new video: {video_title}")
        self.events.notify("new_video", (self.name, video_title) )
        print("\n")

```

#### C. subscriber.py

```
class Subscriber:
    def __init__(self, username):
        self.username = username

    def update(self, data):
        channel_name, video_title = data
        print(f"Hi {self.username}, new video uploaded by {channel_name}: '{video_title}'")

```

#### D. main.py

```
# main.py
from youtube_channel import YouTubeChannel
from subscriber import Subscriber

if __name__ == "__main__":
    # Create channels
    channel1 = YouTubeChannel("TechWithTim")
    channel2 = YouTubeChannel("DailyCoding")

    # Create subscribers
    alice = Subscriber("Alice")
    bob = Subscriber("Bob")

    # Alice subscribes to both channels
    channel1.events.subscribe("new_video", alice)
    channel2.events.subscribe("new_video", alice)

    # Bob only subscribes to TechWithTim
    channel1.events.subscribe("new_video", bob)

    # Channels upload videos
    channel1.upload_video("Python Tips and Tricks")
    channel2.upload_video("Coding Interview Challenge")

```

#### Penjelasan main.py

```
from youtube_channel import YouTubeChannel
from subscriber import Subscriber

```

Baris ini digunakan untuk mengimpor class YouTubeChannel dan Subscriber dari file lain agar dapat digunakan di file utama.

```
if __name__ == "__main__":

```

Bagian ini memastikan bahwa kode berikut hanya dieksekusi saat file dijalankan secara langsung, bukan ketika diimpor dari file lain.

```
    # Create channels
    channel1 = YouTubeChannel("TechWithTim")
    channel2 = YouTubeChannel("DailyCoding")

```

Membuat dua objek channel YouTube yang berfungsi sebagai pengirim notifikasi saat video baru diunggah.

```
    # Create subscribers
    alice = Subscriber("Alice")
    bob = Subscriber("Bob")

```

Membuat dua pengguna/subscriber bernama Alice dan Bob yang akan menerima pemberitahuan jika mereka telah berlangganan ke sebuah channel.

```
    # Alice subscribes to both channels
    channel1.events.subscribe("new_video", alice)
    channel2.events.subscribe("new_video", alice)

```

Alice mendaftar sebagai subscriber pada dua channel sehingga akan mendapatkan notifikasi dari keduanya saat video baru tersedia.

```
    # Bob only subscribes to TechWithTim
    channel1.events.subscribe("new_video", bob)

```

Bob hanya berlangganan pada satu channel, yaitu TechWithTim, sehingga ia hanya menerima notifikasi dari channel tersebut.

```
    # Channels upload videos
    channel1.upload_video("Python Tips and Tricks")
    channel2.upload_video("Coding Interview Challenge")

```

Kedua channel mengunggah video. Fungsi upload_video() akan memicu metode notify() yang memberi tahu semua subscriber yang terkait dengan event "new_video".

#### Output

![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul13/TP/1.png)