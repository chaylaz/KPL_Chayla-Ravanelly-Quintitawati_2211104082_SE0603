class HaloGeneric {
    SapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}

class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah : ${this.data}`);
    }
}

const halo = new HaloGeneric();
halo.SapaUser("Chayla"); // nama panggilan praktikan

const data = new DataGeneric("2211104082"); // NIM praktikan
data.PrintData();
