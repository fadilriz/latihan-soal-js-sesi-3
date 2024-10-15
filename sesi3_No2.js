nilai_coding = 75
nilai_interview = `B`
hasilCoding = ``
hasilInterview = ``

if ( nilai_coding >= 80 && nilai_coding <= 100 ){
    hasilCoding = `LOLOS`;
} else if (nilai_coding >= 60 && nilai_coding < 80){
hasilCoding = `DIPERTIMBANGKAN`;
} else if (nilai_coding < 60 ){
    hasilCoding = `GAGAL`;
}

if (nilai_interview === `A` || nilai_interview === `B`){
    hasilInterview = `LULUS`;
} else {
    hasilInterview = `GAGAL`;
}

if ( hasilCoding === `LOLOS` || hasilCoding === `DIPERTIMBANGKAN` && hasilInterview === `LULUS`){
    console.log("Selamat Kamu Berhasil Menjadi Calon Programmer")
} else {
    console.log("Maaf Kamu Belum Berhasil Menjadi Calon Programmer")
}