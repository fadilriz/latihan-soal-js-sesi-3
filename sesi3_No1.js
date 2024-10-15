nama = "Rizky Fadillah"
umur = 45
tempat_tinggal = "New York"
tabungan = 11000000

if (umur > 40 && tabungan > 10000000){
    if (tempat_tinggal == "Nevada" || tempat_tinggal == "New York" || tempat_tinggal == "Havana")
        console.log(nama + ' Kemungkinan adalah seorang anggota mafia dengan pangkat DON')
} else if( umur <= 40 && umur >= 25 && tabungan > 1000000 && tabungan >= 2000000){
    if (tempat_tinggal == "New Jersey" || tempat_tinggal == "Manhattan" || tempat_tinggal == "Nevada")
        console.log(nama + ' Kemungkinan adalah seorang anggota mafia dengan pangkat Underboss')
} else if( umur >= 18 && umur <= 24 && tabungan <= 1000000){
    if (tempat_tinggal == "California" || tempat_tinggal == "Detroit" || tempat_tinggal == "Boston")
        console.log(nama + ' kemungkinan adalah seorang anggota mafai dengan pangkat Capo')
} else{
    console.log(nama + ' tidak mencurigakan')
}