function cekDuplikat(data) {
    // Menggunakan Set untuk menyimpan nilai unik
    let set = new Set();
  
    for (let angka of data) {
      // Jika angka sudah ada dalam Set, maka terdapat duplikat
      if (set.has(angka)) {
        return true;
      }
  
      // Menambahkan angka ke Set
      set.add(angka);
    }
  
    // Jika tidak ada duplikat
    return false;
  }
  
  // Contoh penggunaan
  const dataAngka = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10, 12, 14, 16, 18, 20, 17, 19];
  const hasil = cekDuplikat(dataAngka);
  
  console.log(hasil);
  