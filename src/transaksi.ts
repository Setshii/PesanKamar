import { HARGA_KAMAR, BATAS_DISKON, PERSEN_DISKON, UMUR_MINIMAL, dataStok } from './data';
import type { JenisKamar } from './data';

// Mengecek kelayakan tamu: umur, KTP, dan stok kamar (nested if 3 tingkat)
export function cekKelayakanTamu(
  umur: number,
  punyaKtp: boolean,
  jenis: JenisKamar
): { layak: boolean; pesan: string } {
  // Umur bukan angka atau negatif dianggap tidak valid
  if (Number.isNaN(umur) || umur < 0) {
    return { layak: false, pesan: 'Umur tidak valid.' };
  }
  if (umur >= UMUR_MINIMAL) {
    if (punyaKtp) {
      if (dataStok[jenis] > 0) {
        return { layak: true, pesan: 'Tamu layak memesan kamar.' };
      } else {
        return { layak: false, pesan: 'Stok kamar kosong.' };
      }
    } else {
      return { layak: false, pesan: 'Wajib punya KTP.' };
    }
  } else {
    return { layak: false, pesan: 'Umur minimal 17 tahun.' };
  }
}

// Menghitung total bayar; diskon 15% jika total > batas dan punya voucher
// (operator aritmatika dan compound *=, /=, -=)
export function hitungTotalBayar(jenis: JenisKamar, jumlahMalam: number, punyaVoucher: boolean): number {
  if (jumlahMalam <= 0) {
    return 0; // jumlah malam tidak valid
  }
  let total = HARGA_KAMAR[jenis];
  total *= jumlahMalam; // harga kamar dikali jumlah malam
  if (total > BATAS_DISKON && punyaVoucher) {
    let potongan = total;
    potongan *= PERSEN_DISKON; // hitung nilai diskon
    potongan /= 100;
    total -= potongan;         // kurangi total dengan diskon
  }
  return total;
}

// Menentukan metode pembayaran dari pilihan angka (switch dengan 3 case + default)
export function tentukanMetodeBayar(pilihan: number): string {
  let metode = '';
  switch (pilihan) {
    case 1:
      metode = 'Transfer Bank';
      break;
    case 2:
      metode = 'E-Wallet / QRIS';
      break;
    case 3:
      metode = 'Kartu Kredit / Debit';
      break;
    default:
      metode = ''; // kosong berarti metode tidak valid
  }
  return metode;
}

// Mengubah jumlah malam menjadi teks minggu dan sisa malam (operator / dan %)
export function formatLamaMenginap(jumlahMalam: number): string {
  const minggu = Math.floor(jumlahMalam / 7); // jumlah minggu penuh
  const sisaMalam = jumlahMalam % 7;          // sisa malam di luar minggu penuh
  if (sisaMalam !== 0) {
    return jumlahMalam + ' malam (' + minggu + ' minggu ' + sisaMalam + ' malam)';
  }
  return jumlahMalam + ' malam (' + minggu + ' minggu)';
}