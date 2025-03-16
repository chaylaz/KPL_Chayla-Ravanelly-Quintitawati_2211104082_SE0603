const readline = require('readline');

class DoorMachine {
    constructor() {
        this.state = 'Terkunci';
        console.log('Pintu terkunci');
    }

    aksi(input) {
        if (input === 'BukaPintu') {
            if (this.state === 'Terkunci') {
                console.log('Pintu terkunci, tidak bisa dibuka!');
            } else {
                this.state = 'Terbuka';
                console.log('Pintu terbuka');
            }
        } else if (input === 'KunciPintu') {
            if (this.state === 'Terbuka') {
                this.state = 'Terkunci';
                console.log('Pintu terkunci');
            } else {
                console.log('Pintu sudah terkunci!');
            }
        } else if (input === 'UnlockPintu') {
            if (this.state === 'Terkunci') {
                this.state = 'Terbuka';
                console.log('Pintu tidak terkunci');
            } else {
                console.log('Pintu sudah terbuka!');
            }
        } else {
            console.log('Aksi tidak dikenali! Masukkan "BukaPintu", "KunciPintu", atau "UnlockPintu"');
        }
    }
}

const pintu = new DoorMachine();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tanyaAksi() {
    rl.question('Masukkan aksi (BukaPintu, KunciPintu, UnlockPintu): ', (input) => {
        pintu.aksi(input);
        tanyaAksi();
    });
}

tanyaAksi();
