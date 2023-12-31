function dekripsiChat(pesan) {
    return pesan
      .split('\n')
      .map(line =>
        line
          .split(' ')
          .map(word =>
            word
              .split('')
              .map(char => {
                if (/[a-zA-Z]/.test(char)) {
                  const baseCharCode = char.toLowerCase() === char ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
                  return String.fromCharCode(((char.charCodeAt(0) - 5 - baseCharCode + 26) % 26) + baseCharCode);
                } else {
                  return char;
                }
              })
              .join('')
          )
          .join(' ')
      )
      .join('\n');
  }
  
  // Pesan yang dienkripsi
  const pesanEnkripsi =
    "xfqfr bfmdz\ngjxtp lzj rfz ifkyfw jxi snm\ngwt, gjxtp qz rfz rfpfs in bfwlty lfp?\nfpz xfdfsl pfrz, rfz lfp ofin ufhfwpz\ndfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu";
  
  // Dekripsi pesan
  const pesanDekripsi = dekripsiChat(pesanEnkripsi);
  
  // Menampilkan hasil dekripsi
  console.log(pesanDekripsi);
  