class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 200) {
            throw new Error("Judul video harus tidak null dan maksimal 200 karakter.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        if (count < 0 || count > 25000000) {
            throw new Error("Penambahan play count harus antara 0 hingga 25.000.000.");
        }
        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
            throw new Error("Play count melebihi batas maksimum integer.");
        }
        this.playCount += count;
    }

    PrintVideoDetails() {
        console.log(`Video ID : ${this.id}`);
        console.log(`Title : ${this.title}`);
        console.log(`Play Count : ${this.playCount}`);
    }
}

class SayaTubeUser {
    constructor(username) {
        if (!username || username.length > 100) {
            throw new Error("Username harus tidak null dan maksimal 100 karakter.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.Username = username;
        this.uploadedVideos = [];
    }

    GetTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    AddVideo(video) {
        if (!video || video.playCount > Number.MAX_SAFE_INTEGER) {
            throw new Error("Video tidak boleh null dan play count harus dalam batas aman.");
        }
        this.uploadedVideos.push(video);
    }

    PrintAllVideoPlaycount() {
        console.log(`User : ${this.Username}`);
        this.uploadedVideos.slice(0, 8).forEach((video, index) => {
            console.log(`Video ${index + 1} judul : ${video.title}`);
        });
    }
}

// Implementasi di fungsi utama
try {
    const user = new SayaTubeUser("Chayla");

    const videoTitles = [
        "Review Film Interstellar oleh Chayla",
        "Review Film Inception oleh Chayla",
        "Review Film The Dark Knight oleh Chayla",
        "Review Film Parasite oleh Chayla",
        "Review Film The Shawshank Redemption oleh Chayla",
        "Review Film Fight Club oleh Chayla",
        "Review Film Forrest Gump oleh Chayla",
        "Review Film Whiplash oleh Chayla",
        "Review Film The Matrix oleh Chayla",
        "Review Film Joker oleh Chayla"
    ];

    const videos = videoTitles.map(title => new SayaTubeVideo(title));

    videos.forEach(video => {
        try {
            user.AddVideo(video);
            video.IncreasePlayCount(Math.floor(1 + Math.random() * 1000)); // Menambah play count secara random
        } catch (error) {
            console.error(error.message);
        }
    });

    user.PrintAllVideoPlaycount();
    console.log(`Total play count : ${user.GetTotalVideoPlayCount()}`);

    // Simulasi Overflow Play Count
    try {
        let testVideo = new SayaTubeVideo("Test Overflow Video");
        for (let i = 0; i < 1000; i++) {
            testVideo.IncreasePlayCount(25000000);
        }
    } catch (error) {
        console.error("Overflow terjadi : " + error.message);
    }
} catch (error) {
    console.error("Error terjadi : " + error.message);
}
