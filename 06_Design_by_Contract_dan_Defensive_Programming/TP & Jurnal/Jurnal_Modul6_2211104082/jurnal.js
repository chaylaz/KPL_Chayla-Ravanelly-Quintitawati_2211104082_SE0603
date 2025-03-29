class SayaTubeVideo {
    constructor(title) {
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
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
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.Username = username;
        this.uploadedVideos = [];
    }

    GetTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    AddVideo(video) {
        this.uploadedVideos.push(video);
    }

    PrintAllVideoPlaycount() {
        console.log(`User : ${this.Username}`);
        this.uploadedVideos.forEach((video, index) => {
            console.log(`Video ${index + 1} judul : ${video.title}`);
        });
    }
}

// Implementasi di fungsi utama
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
    user.AddVideo(video);
    video.IncreasePlayCount(Math.floor(1 + Math.random() * 1000)); // Menambah play count secara random
});

user.PrintAllVideoPlaycount();
console.log(`Total play count : ${user.GetTotalVideoPlayCount()}`);
