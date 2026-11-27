// Tipe untuk kode jenis kamar yang valid
export type JenisKamar = 'standar' | 'deluxe' | 'vip';

// Tipe untuk status pesanan (dipakai untuk fitur ubah status dan filter pencarian)
export type StatusPesanan = 'Menunggu' | 'Lunas' | 'Dibatalkan';

// Struktur satu data pesanan hotel (entitas utama aplikasi)
export interface PesananHotel {
  id: number;             // nomor unik pesanan
  nama: string;           // nama pengunjung
  noHp: string;           // nomor HP pengunjung
  umur: number;           // umur pengunjung
  punyaKtp: boolean;      // true jika sudah punya KTP
  jenisKamar: JenisKamar; // jenis kamar yang dipesan
  jumlahMalam: number;    // lama menginap (malam)
  metodeBayar: string;    // metode pembayaran yang dipilih
  status: StatusPesanan;  // status pesanan saat ini
  totalAwal: number;      // total harga sebelum diskon
  totalBayar: number;     // total yang dibayar setelah diskon
}

// Struktur angka per jenis kamar (dipakai untuk harga dan stok)
export interface DataKamar {
  standar: number;
  deluxe: number;
  vip: number;
}

// Harga kamar per malam (nilai tetap, rupiah)
export const HARGA_KAMAR: DataKamar = { standar: 500000, deluxe: 800000, vip: 1500000 };

// Batas total harga agar voucher bisa dipakai (nilai tetap)
export const BATAS_DISKON: number = 1500000;

// Persentase diskon voucher (nilai tetap)
export const PERSEN_DISKON: number = 15;

// Umur minimal pengunjung untuk boleh memesan (nilai tetap)
export const UMUR_MINIMAL: number = 17;

// Stok kamar tersedia per jenis, sudah dikurangi pesanan pada data seed
export const dataStok: DataKamar = {
  standar: 3,
  deluxe: 2,
  vip: 1,
};

// Data awal (seed) pesanan, disimpan di memori dalam array
export const daftarPesanan: PesananHotel[] = [
  { id: 1, nama: 'Budi Santoso', noHp: '081234567801', umur: 21, punyaKtp: true, jenisKamar: 'standar', jumlahMalam: 2, metodeBayar: 'Transfer Bank', status: 'Lunas', totalAwal: 1000000, totalBayar: 1000000 },
  { id: 2, nama: 'Siti Aminah', noHp: '081234567802', umur: 30, punyaKtp: true, jenisKamar: 'deluxe', jumlahMalam: 3, metodeBayar: 'E-Wallet / QRIS', status: 'Lunas', totalAwal: 2400000, totalBayar: 2040000 },
  { id: 3, nama: 'Rahmat Hidayat', noHp: '081234567803', umur: 45, punyaKtp: true, jenisKamar: 'vip', jumlahMalam: 1, metodeBayar: 'Kartu Kredit / Debit', status: 'Lunas', totalAwal: 1500000, totalBayar: 1500000 },
  { id: 4, nama: 'Dewi Lestari', noHp: '081234567804', umur: 19, punyaKtp: true, jenisKamar: 'standar', jumlahMalam: 1, metodeBayar: 'E-Wallet / QRIS', status: 'Menunggu', totalAwal: 500000, totalBayar: 500000 },
  { id: 5, nama: 'Andi Wijaya', noHp: '081234567805', umur: 27, punyaKtp: true, jenisKamar: 'deluxe', jumlahMalam: 2, metodeBayar: 'Transfer Bank', status: 'Menunggu', totalAwal: 1600000, totalBayar: 1600000 },
];