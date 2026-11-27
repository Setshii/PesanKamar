import { tanya, tutupInput, cetakGaris } from './fitur';

// Menampilkan daftar pilihan menu utama
function tampilkanMenu(): void {
  console.log('');
  cetakGaris(42, '=');
  console.log('   SISTEM PEMESANAN KAMAR HOTEL');
  cetakGaris(42, '=');
  console.log('1. Pesan kamar (Create)');
  console.log('2. Lihat semua pesanan (Read)');
  console.log('3. Ubah status pesanan (Update)');
  console.log('4. Hapus pesanan (Delete)');
  console.log('5. Cari pesanan (Search)');
  console.log('0. Keluar');
}

// Placeholder fitur yang belum dikerjakan (diisi pada progress berikutnya)
function belumTersedia(fitur: string): void {
  console.log(`\nFitur ${fitur} belum tersedia (dikerjakan pada progress berikutnya).`);
}

// Menu utama berulang sampai pengguna memilih keluar (while + switch)
async function menuUtama(): Promise<void> {
  let jalan = true;
  while (jalan) {
    tampilkanMenu();
    const pilihan = (await tanya('Pilih menu: ')).trim();
    switch (pilihan) {
      case '1':
        belumTersedia('Pesan kamar');
        break;
      case '2':
        belumTersedia('Lihat semua pesanan');
        break;
      case '3':
        belumTersedia('Ubah status pesanan');
        break;
      case '4':
        belumTersedia('Hapus pesanan');
        break;
      case '5':
        belumTersedia('Cari pesanan');
        break;
      case '0':
        console.log('\nTerima kasih. Program selesai.');
        jalan = false; // hentikan perulangan menu
        break;
      default:
        console.log('\nPilihan menu tidak valid, silakan coba lagi.');
    }
  }
  tutupInput(); // tutup pembacaan input
}

// Titik masuk program
menuUtama();