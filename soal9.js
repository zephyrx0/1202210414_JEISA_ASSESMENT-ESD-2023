function analisisAnak(anakNakal) {
    // Membuat objek untuk menyimpan jumlah sebutan setiap nama anak
    let jumlahSebutan = {};

    // Menghitung jumlah sebutan setiap nama anak
    anakNakal.forEach(nama => {
        if (jumlahSebutan[nama]) {
            jumlahSebutan[nama]++;
        } else {
            jumlahSebutan[nama] = 1;
        }
    });

    // Menemukan jumlah sebutan terbanyak
    const jumlahTerbanyak = Math.max(...Object.values(jumlahSebutan));

    // Menemukan nama-nama anak yang memiliki jumlah sebutan terbanyak
    const anakNakalTerbanyak = Object.keys(jumlahSebutan).filter(nama => jumlahSebutan[nama] === jumlahTerbanyak);

    // Menampilkan hasil
    if (jumlahTerbanyak > 1) {
        console.log(`${anakNakalTerbanyak.join(' dan ')} Nakal`);
    } else {
        console.log("Semuanya anak baik");
    }
}

// Contoh penggunaan
const anakNakal1 = ["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar"];
analisisAnak(anakNakal1);

const anakNakal2 = ["Bagas", "Dimas", "Fajar", "Bagas", "Indra", "Gilang", "Gilang", "Bagas", "Fajar", "Fajar"];
analisisAnak(anakNakal2);

const anakNakal3 = ["Aisyah", "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "Gilang", "Hana", "Indra", "Jihan"];
analisisAnak(anakNakal3);
