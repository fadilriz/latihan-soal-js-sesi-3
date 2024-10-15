nomor_punggung = 60;

if (nomor_punggung % 3 === 0 && nomor_punggung % 5 === 0 && nomor_punggung <= 100) {
    console.log("Keeper");   
}

if (nomor_punggung % 2 === 0 && nomor_punggung < 50) {
    console.log("Target Attacker");
}

if (nomor_punggung % 2 === 0 && nomor_punggung >= 50 && nomor_punggung <= 100) {
    console.log("Berhak dipilih menjadi Capten Team");
}

if (nomor_punggung % 2 !== 0 && nomor_punggung < 90) {
    console.log("Defender");
}

if (nomor_punggung % 2 !== 0 && nomor_punggung >= 90 && nomor_punggung <= 100) {
    console.log("Playmaker");
}

if (!(nomor_punggung % 3 === 0 && nomor_punggung % 5 === 0 && nomor_punggung <= 100) &&
    !(nomor_punggung % 2 === 0 && nomor_punggung < 50) &&
    !(nomor_punggung % 2 === 0 && nomor_punggung >= 50 && nomor_punggung <= 100) &&
    !(nomor_punggung % 2 !== 0 && nomor_punggung < 90) &&
    !(nomor_punggung % 2 !== 0 && nomor_punggung >= 90 && nomor_punggung <= 100)) {
    console.log("Maaf nomor punggung anda tidak sesuai");
}