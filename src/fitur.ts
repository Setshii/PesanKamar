import * as readline from 'readline';
import type { PesananHotel } from './data';

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fungsi pembantu: menampilkan pertanyaan lalu menunggu jawaban pengguna
export function tanya(pertanyaan: string): Promise<string> {
  return new Promise((selesai) => rl.question(pertanyaan, (jawaban) => selesai(jawaban)));
}

// Menutup pembacaan input saat program selesai
export function tutupInput(): void {
  rl.close();
}

// Mencetak garis pemisah sepanjang tertentu (for loop + operator compound +=)
export function cetakGaris(panjang: number, karakter: string): void {
  let garis = '';
  for (let i = 0; i < panjang; i++) {
    garis += karakter; // tambahkan satu karakter tiap putaran
  }
  console.log(garis);
}

// Mencari satu pesanan berdasarkan id (array .find); hasil undefined jika tidak ada
export function cariPesananById(daftar: PesananHotel[], id: number): PesananHotel | undefined {
  const hasil = daftar.find((p) => p.id === id);
  if (!hasil) {
    console.log(`\nPesanan dengan ID ${id} tidak ditemukan.`); // pesan jika id tidak ada
  }
  return hasil;
}