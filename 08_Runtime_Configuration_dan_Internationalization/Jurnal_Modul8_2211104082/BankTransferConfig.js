const fs = require("fs");

class BankTransferConfig {
  constructor() {
    this.configFile = "bank_transfer_config.json";
    this.defaultConfig = {
      lang: "en",
      transfer: {
        threshold: 25000000,
        low_fee: 6500,
        high_fee: 15000,
      },
      methods: ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
      confirmation: {
        en: "yes",
        id: "ya",
      },
    };

    this.config = this.loadConfig();
  }

  loadConfig() {
    if (fs.existsSync(this.configFile)) {
      const rawData = fs.readFileSync(this.configFile);
      return JSON.parse(rawData);
    } else {
      fs.writeFileSync(this.configFile, JSON.stringify(this.defaultConfig, null, 2));
      return this.defaultConfig;
    }
  }

  getConfig() {
    return this.config;
  }
}

module.exports = BankTransferConfig;
