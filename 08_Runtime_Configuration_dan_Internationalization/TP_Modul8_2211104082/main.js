const readline = require('readline');
const CovidConfig = require('./CovidConfig');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const configInstance = new CovidConfig();
let config = configInstance.getConfig();

// Ganti satuan suhu sebelum mulai (sesuai instruksi poin G)
configInstance.ubahSatuan();
config = configInstance.getConfig(); 

rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${config.satuan_suhu}: `, (suhuInput) => {
  const suhu = parseFloat(suhuInput);

  rl.question('Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ', (hariInput) => {
    const hari = parseInt(hariInput);

    let suhuNormal = false;

    if (config.satuan_suhu === 'celcius') {
      suhuNormal = suhu >= 36.5 && suhu <= 37.5;
    } else if (config.satuan_suhu === 'fahrenheit') {
      suhuNormal = suhu >= 97.7 && suhu <= 99.5;
    }

    const demamAman = hari < config.batas_hari_deman;

    if (suhuNormal && demamAman) {
      console.log(config.pesan_diterima);
    } else {
      console.log(config.pesan_ditolak);
    }

    rl.close();
  });
});
