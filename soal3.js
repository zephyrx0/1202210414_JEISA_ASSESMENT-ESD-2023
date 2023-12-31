function cariPencuri(urutanKedatangan, fotoXiao) {
    // Inisialisasi daftar teman
    const teman = ['Ningguang', 'Hutao', 'Xiao', 'Childe'];
  
    // Inisialisasi keadaan kue
    let kueHilang = false;
  
    // Loop melalui urutan kedatangan
    for (let i = 0; i < urutanKedatangan.length; i++) {
      const temanSekarang = teman[i];
  
      // Cek kebiasaan teman saat masuk ruang tamu
      switch (temanSekarang) {
        case 'Ningguang':
          // Ningguang selalu memeriksa kue sebelum memberikan kado
          if (!kueHilang) {
            kueHilang = true;
            console.log(`${temanSekarang} adalah pencuri!`);
            return temanSekarang;
          }
          break;
  
        case 'Hutao':
          // Hutao langsung memberikan kado tanpa memperhatikan kue
          break;
  
        case 'Xiao':
          // Xiao memiliki kebiasaan memotret apa pun yang dia lihat pertama kali di ruangan
          if (!kueHilang) {
            kueHilang = true;
            console.log(`${temanSekarang} adalah pencuri!`);
            return temanSekarang;
          }
          break;
  
        case 'Childe':
          // Childe selalu membawa air mineral dan meletakkannya di meja sebelum memberikan kado
          if (!kueHilang) {
            kueHilang = true;
            console.log(`${temanSekarang} adalah pencuri!`);
            return temanSekarang;
          }
          break;
      }
    }
  
    // Jika kue tidak hilang sesuai dengan foto Xiao
    if (!kueHilang) {
      console.log('Semua teman memberikan kado tanpa mengambil kue.');
    }
  
    return null;
  }
  
  // Urutan kedatangan teman
  const urutanKedatangan = ['Ningguang', 'Hutao', 'Xiao', 'Childe'];
  
  // Foto yang diambil oleh Xiao menunjukkan kue masih utuh
  const fotoXiao = true;
  
  // Panggil fungsi untuk mencari pencuri
  const pencuri = cariPencuri(urutanKedatangan, fotoXiao);
  