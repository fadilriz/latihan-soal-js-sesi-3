nilai_coding = 60
nilai_interview = `k`

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

if ( hasilCoding === `LOLOS` && hasilInterview === `LULUS`){
    console.log("Selamat Kamu Berhasil Menjadi Calon Programmer")
} else if (hasilCoding === `DIPERTIMBANGKAN` && hasilInterview === `LULUS`){
    console.log("Selamat Kamu Berhasil Menjadi Calon Programmer");
} else{
    console.log("Maaf Kamu Belum Berhasil Menjadi Calon Programmer")
}
