class SayaTubeVideo {
    constructor(title) {
        this.id = Math.floor(10000 + Math.random() * 90000); // Generate random 5-digit ID
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

// Main Function
const video = new SayaTubeVideo("Tutorial Design By Contract – Chayla Ravanelly Quintitawati");
video.IncreasePlayCount(100);
video.PrintVideoDetails();
