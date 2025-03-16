class PosisiKarakterGame {
    constructor(nim) {
        this.state = 'Berdiri'; // State awal
        this.nim = nim;
    }

    changeState(action) {
        const mod = this.nim % 3;

        if (mod === 0) {
            if (action === 'TombolS') {
                console.log('tombol arah bawah ditekan');
            } else if (action === 'TombolW') {
                console.log('tombol arah atas ditekan');
            }
        }

        if (action === 'TombolS') {
            if (this.state === 'Berdiri') {
                this.state = 'Jongkok';
            } else if (this.state === 'Jongkok') {
                this.state = 'Tengkurap';
            } else if (this.state === 'Terbang') {
                this.state = 'Jongkok';
                if (mod === 2) {
                    console.log('posisi landing');
                }
            }
        } else if (action === 'TombolW') {
            if (this.state === 'Tengkurap') {
                this.state = 'Jongkok';
            } else if (this.state === 'Jongkok') {
                this.state = 'Berdiri';
            } else if (this.state === 'Berdiri') {
                this.state = 'Terbang';
                if (mod === 2) {
                    console.log('posisi take off');
                }
            }
        }

        if (mod === 1) {
            if (this.state === 'Berdiri') {
                console.log('posisi standby');
            } else if (this.state === 'Tengkurap') {
                console.log('posisi istirahat');
            }
        }
    }
}

// Main function untuk mensimulasikan perubahan state
function main() {
    const nim = 2211104082; // Ganti dengan NIM Anda
    const game = new PosisiKarakterGame(nim);

    // Simulasi perubahan state sesuai dengan urutan pada gambar
    game.changeState('TombolW');  
    game.changeState('TombolS'); 
    game.changeState('TombolS');
    game.changeState('TombolW');
    game.changeState('TombolW');
    game.changeState('TombolS');
    game.changeState('TombolS');
    game.changeState('TombolW');
    game.changeState('TombolX');  
}

// Panggil main function
main();
