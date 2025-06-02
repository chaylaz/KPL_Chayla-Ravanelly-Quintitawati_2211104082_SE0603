function CariNilaiPangkat(a, b) {
    // Aturan Khusus
    if (b === 0) return 1;
    if (b < 0) return -1;
    if (b > 10 || a > 100) return -2;

    let hasil = 1;
    for (let i = 0; i < b; i++) {
        hasil *= a;
        if (hasil > Number.MAX_SAFE_INTEGER) {
            return -3;
        }
    }
    return hasil;
}

function hitungPangkat() {
    const a = parseInt(document.getElementById("inputA").value);
    const b = parseInt(document.getElementById("inputB").value);
    const hasil = CariNilaiPangkat(a, b);
    document.getElementById("outputLabel").textContent = `Hasil: ${hasil}`;
}

// Export untuk unit test
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CariNilaiPangkat };
}