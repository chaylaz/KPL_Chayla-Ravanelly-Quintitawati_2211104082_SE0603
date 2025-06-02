class KodeBuah {
    static kodeBuahMap = {
        "Apel": "A00",
        "Aprikot": "B00",
        "Alpukat": "C00",
        "Pisang": "D00",
        "Paprika": "E00",
        "Blackberry": "F00",
        "Ceri": "H00",
        "Kelapa": "I00",
        "Jagung": "J00",
        "Kurma": "K00",
        "Durian": "L00",
        "Anggur": "M00",
        "Melon": "N00",
        "Semangka": "O00"
    };

    static getKodeBuah(namaBuah) {
        return this.kodeBuahMap[namaBuah] || "Kode tidak ditemukan";
    }
}

// Contoh penggunaan
console.log("Kode buah Apel adalah: " + KodeBuah.getKodeBuah("Apel"));
console.log("Kode buah Durian adalah: " + KodeBuah.getKodeBuah("Durian"));