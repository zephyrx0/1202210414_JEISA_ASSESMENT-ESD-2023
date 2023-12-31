function hitungKombinasiUsername(namaLengkap) {
    // Menghapus spasi dan mengubah huruf menjadi huruf kecil
    const namaTanpaSpasi = namaLengkap.replace(/\s/g, '').toLowerCase();
    
    // Inisialisasi panjang nama
    const panjangNama = Math.min(namaTanpaSpasi.length, 6);
  
    // Inisialisasi jumlah kombinasi
    let jumlahKombinasi = 0;
  
    // Loop untuk panjang nama maksimal
    for (let panjang = 1; panjang <= panjangNama; panjang++) {
      // Menghitung jumlah kombinasi untuk setiap panjang
      jumlahKombinasi += factorial(panjangNama) / (factorial(panjang) * factorial(panjangNama - panjang));
    }
  
    return jumlahKombinasi;
  }
  
  // Fungsi untuk menghitung faktorial
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Contoh penggunaan
  const namaLengkap = "Naip Lovyu";
  const kombinasiUsername = hitungKombinasiUsername(namaLengkap);
  
  console.log(`Jumlah kombinasi username yang mungkin: ${kombinasiUsername}`);
  