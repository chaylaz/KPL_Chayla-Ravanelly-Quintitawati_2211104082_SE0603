# Laporan Praktikum Konstruksi Perangkat Lunak

#### Nama : Chayla Ravanelly Quintitawati

#### NIM : 2211104082 / SE-06-03

## Tugas Pendahuluan

### REFACTORING DENGAN STANDAR CODE

#### tp.js

```
// Class representing a single YouTube-like video
class SayaTubeVideo {
    constructor(title) {
        // Generate random 5-digit ID
        this.videoId = Math.floor(10000 + Math.random() * 90000);
        this.videoTitle = title;
        this.playCount = 0;
    }

    // Increase the play count of the video
    increasePlayCount(count) {
        this.playCount += count;
    }

    // Print the details of the video
    printVideoDetails() {
        console.log(`Video ID: ${this.videoId}`);
        console.log(`Title: ${this.videoTitle}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

// Class representing a user who uploads videos
class SayaTubeUser {
    constructor(username) {
        // Generate random 5-digit ID
        this.userId = Math.floor(10000 + Math.random() * 90000);
        this.username = username;
        this.uploadedVideos = [];
    }

    // Add a video to the user's uploaded video list
    addVideo(video) {
        if (video instanceof SayaTubeVideo) {
            this.uploadedVideos.push(video);
        } else {
            console.log("Invalid video instance.");
        }
    }

    // Get the total number of video play counts
    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((sum, video) => sum + video.playCount, 0);
    }

    // Print all uploaded videos with their titles
    printAllVideoPlayCount() {
        console.log(`User: ${this.username}`);
        this.uploadedVideos.forEach((video, index) => {
            console.log(`Video ${index + 1} title: ${video.videoTitle}`);
        });
    }
}

// Main function for running the program
function main() {
    const user = new SayaTubeUser("Chayla");

    const videoTitles = [
        "Review Film Avengers oleh Chayla",
        "Review Film Thor: Love and Thunder oleh Chayla",
        "Review Film Ironman 3 oleh Chayla",
        "Review Film Avengers: Age of Ultron oleh Chayla",
        "Review Film Guardians of the Galaxy oleh Chayla",
        "Review Film The Dark Knight oleh Chayla",
        "Review Film Jurassic World Dominion oleh Chayla",
        "Review Film Jurassic Park 3 oleh Chayla",
        "Review Film Parasite oleh Chayla",
        "Review Film Train to Busan oleh Chayla"
    ];

    // Create and add videos to user
    videoTitles.forEach((title) => {
        const video = new SayaTubeVideo(title);
        const randomPlayCount = Math.floor(Math.random() * 1000);
        video.increasePlayCount(randomPlayCount);
        user.addVideo(video);
    });

    user.printAllVideoPlayCount();
    console.log(`Total Play Count: ${user.getTotalVideoPlayCount()}`);
}

main();
```

#### Output

![Image](https://github.com/chaylaz/Foto-Praktikum-KPL/blob/main/Modul14/TP/tp.png)

#### Penjelasan Kode

Kode dengan prinsip clean code yang telah direstrukturisasi ini menampilkan dua kelas utama, yaitu SayaTubeVideo dan SayaTubeUser. Penamaan atribut dan fungsi menggunakan gaya camelCase yang konsisten agar mudah dimengerti dan mengikuti standar penulisan JavaScript. Setiap bagian kode dilengkapi dengan komentar untuk memperjelas tujuan dari fungsinya. Struktur indentasi serta penggunaan spasi juga diatur secara konsisten agar memudahkan pembacaan. Pemilihan const dan let dilakukan secara tepat untuk membedakan antara nilai tetap dan nilai yang dapat berubah. Secara fungsional, program tetap bekerja dengan cara membuat daftar video yang diunggah oleh seorang pengguna dan menghitung total jumlah pemutarannya. Namun, dengan struktur kode yang lebih rapi dan terorganisir ini, program menjadi lebih mudah dipahami dan siap untuk dikembangkan lebih lanjut.

