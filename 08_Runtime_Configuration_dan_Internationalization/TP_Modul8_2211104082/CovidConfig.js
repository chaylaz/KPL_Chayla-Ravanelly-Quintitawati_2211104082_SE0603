const fs = require('fs');

class CovidConfig {
  constructor(configPath = 'covid_config.json') {
    this.configPath = configPath;
    this.defaultConfig = {
      satuan_suhu: "celcius",
      batas_hari_deman: 14,
      pesan_ditolak: "Anda tidak diperbolehkan masuk ke dalam gedung ini",
      pesan_diterima: "Anda dipersilahkan untuk masuk ke dalam gedung ini"
    };
    this.config = this.loadConfig();
  }

  loadConfig() {
    if (fs.existsSync(this.configPath)) {
      const data = fs.readFileSync(this.configPath);
      return JSON.parse(data);
    } else {
      this.saveConfig(this.defaultConfig);
      return this.defaultConfig;
    }
  }

  saveConfig(config) {
    fs.writeFileSync(this.configPath, JSON.stringify(config, null, 2));
  }

  getConfig() {
    return this.config;
  }

  ubahSatuan() {
    this.config.satuan_suhu = this.config.satuan_suhu === 'celcius' ? 'fahrenheit' : 'celcius';
    this.saveConfig(this.config);
    console.log(`Satuan suhu telah diubah menjadi: ${this.config.satuan_suhu}`);
  }
}

module.exports = CovidConfig;
