function hitungTarifDisneyIsland(umur, tinggi) {
    const tarifAnakDiBawah1Tahun = 'Dilarang masuk';
    const tarifAnakDiBawah3Tahun = 30000;
    const tambahanTarifAnak2_3TahunJikaLebih70cm = 10000;

    const tarifAnakDiBawah7Tahun = 40000;
    const tambahanTarifAnak4_7TahunJikaLebih120cm = 15000;

    const tarifAnakDiBawah10Tahun = 50000;
    const tambahanTarifAnak8_10TahunJikaLebih150cm = 20000;

    const tarifAnak10TahunKeatas = 80000;

    if (umur < 1) {
        return tarifAnakDiBawah1Tahun;
    } else if (umur < 3) {
        const totalTarif = (umur >= 2 && tinggi > 70) ? 
            tarifAnakDiBawah3Tahun + tambahanTarifAnak2_3TahunJikaLebih70cm : 
            tarifAnakDiBawah3Tahun;
        return `Tarif: Rp ${totalTarif}`;
    } else if (umur < 7) {
        const totalTarif = (umur >= 4 && tinggi > 120) ? 
            tarifAnakDiBawah7Tahun + tambahanTarifAnak4_7TahunJikaLebih120cm : 
            tarifAnakDiBawah7Tahun;
        return `Tarif: Rp ${totalTarif}`;
    } else if (umur < 10) {
        const totalTarif = (umur >= 8 && tinggi > 150) ? 
            tarifAnakDiBawah10Tahun + tambahanTarifAnak8_10TahunJikaLebih150cm : 
            tarifAnakDiBawah10Tahun;
        return `Tarif: Rp ${totalTarif}`;
    } else {
        return `Tarif: Rp ${tarifAnak10TahunKeatas}`;
    }
}

const umurAnak = 3;
const tinggiAnak = 80;

const tarif = hitungTarifDisneyIsland(umurAnak, tinggiAnak);

console.log(tarif);
