const readline = require("readline");
const BankTransferConfig = require("./BankTransferConfig");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const configObj = new BankTransferConfig();
const config = configObj.getConfig();
const lang = config.lang;
const confirmationText = config.confirmation[lang];

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function runApp() {
  console.log(
    lang === "en"
      ? "Please insert the amount of money to transfer:"
      : "Masukkan jumlah uang yang akan di-transfer:"
  );

  const amountInput = await askQuestion("> ");
  const amount = parseInt(amountInput);

  const fee =
    amount <= config.transfer.threshold
      ? config.transfer.low_fee
      : config.transfer.high_fee;
  const total = amount + fee;

  console.log(
    lang === "en"
      ? `Transfer fee = ${fee}\nTotal amount = ${total}`
      : `Biaya transfer = ${fee}\nTotal biaya = ${total}`
  );

  console.log(lang === "en" ? "Select transfer method:" : "Pilih metode transfer:");
  config.methods.forEach((method, index) => {
    console.log(`${index + 1}. ${method}`);
  });

  await askQuestion("> "); // We just wait for any input (not used in logic)

  const confirmPrompt =
    lang === "en"
      ? `Please type "${confirmationText}" to confirm the transaction:`
      : `Ketik "${confirmationText}" untuk mengkonfirmasi transaksi:`;

  const confirmInput = await askQuestion(`${confirmPrompt}\n> `);

  if (confirmInput.toLowerCase() === confirmationText.toLowerCase()) {
    console.log(lang === "en" ? "The transfer is completed" : "Proses transfer berhasil");
  } else {
    console.log(lang === "en" ? "Transfer is cancelled" : "Transfer dibatalkan");
  }

  rl.close();
}

runApp();
