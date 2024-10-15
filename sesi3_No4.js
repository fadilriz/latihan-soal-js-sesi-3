function hitungTotalKalori(waktuLari, waktuPushUp, waktuPlank) {

    const kaloriPer5MenitLari = 60;
    const kaloriPerMenitLari = kaloriPer5MenitLari / 5;
    const totalKaloriLari = waktuLari * kaloriPerMenitLari;

    const kaloriPer30MenitPushUp = 200;
    const kaloriPerMenitPushUp = kaloriPer30MenitPushUp / 30;
    const totalKaloriPushUp = waktuPushUp * kaloriPerMenitPushUp;

    const kaloriPerMenitPlank = 5;
    const totalKaloriPlank = waktuPlank * kaloriPerMenitPlank;

    return totalKaloriLari + totalKaloriPushUp + totalKaloriPlank;
}

const waktuLari = 15;
const waktuPushUp = 60;
const waktuPlank = 25;

const totalKaloriTerbakar = hitungTotalKalori(waktuLari, waktuPushUp, waktuPlank);

console.log(`Total kalori yang terbakar dari semua olahraga: ${totalKaloriTerbakar} kalori`);