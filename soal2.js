function cekPalindrom(kalimat) {
    // Menghapus spasi dan mengubah huruf menjadi huruf kecil
    const kalimatBersih = kalimat.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
    // Mengecek palindrom
    const panjang = kalimatBersih.length;
    for (let i = 0; i < Math.floor(panjang / 2); i++) {
      if (kalimatBersih[i] !== kalimatBersih[panjang - 1 - i]) {
        return 'suka blyat';
      }
    }
  
    return 'eureeka!';
  }
  
  // Contoh penggunaan
  console.log(cekPalindrom('Angsa'));
  console.log(cekPalindrom('KataK'));
  console.log(cekPalindrom('kasur empuk'));
  console.log(cekPalindrom('Aku Suka Kamu'));
  console.log(cekPalindrom('Ibu Ratna antar ubi.'));
  