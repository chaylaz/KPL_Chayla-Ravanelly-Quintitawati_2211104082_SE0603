class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 100) {
            throw new Error("Title cannot be null and must be at most 100 characters long.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000); // Generate random 5-digit ID
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        if (count > 10000000) {
            throw new Error("Play count increment cannot exceed 10,000,000 per call.");
        }
        try {
            if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
                throw new Error("Play count overflow detected.");
            }
            this.playCount += count;
        } catch (error) {
            console.error(error.message);
        }
    }

    PrintVideoDetails() {
        console.log(`Video ID : ${this.id}`);
        console.log(`Title : ${this.title}`);
        console.log(`Play Count : ${this.playCount}`);
    }
}

// Main Function
try {
    const video = new SayaTubeVideo("Tutorial Design By Contract – Chayla Ravanelly Quintitawati");
    video.IncreasePlayCount(100);
    video.PrintVideoDetails();

    // Test Precondition Violation
    // const invalidVideo = new SayaTubeVideo(""); // Uncomment to test empty title error
    // const longTitleVideo = new SayaTubeVideo("A".repeat(101)); // Uncomment to test long title error

    // Test Overflow
    for (let i = 0; i < 1000; i++) {
        video.IncreasePlayCount(10000000);
    }
} catch (error) {
    console.error("An error occurred:", error.message);
}
