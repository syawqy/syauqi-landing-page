export type MockSlug = 'dashboard' | 'pos' | 'ecommerce' | 'booking' | 'hris' | 'profile';

export interface Showcase {
  slug: MockSlug;
  num: string;
  category: string;
  headline: string;
  desc: string;
  features: string[];
  tags: string[];
  url: string;
}

export const showcases: Showcase[] = [
  {
    slug: 'dashboard',
    num: '01',
    category: 'DASHBOARD & ANALYTICS',
    headline: 'Semua angka penting bisnis, dalam satu layar.',
    desc: 'Tidak perlu lagi buka 5 file Excel berbeda. Pantau penjualan, stok, dan performa tim secara real time dari mana saja.',
    features: [
      'Laporan otomatis harian, mingguan, maupun bulanan',
      'Grafik tren penjualan & produk terlaris',
      'Notifikasi saat stok menipis atau target tercapai',
    ],
    tags: ['Data Visualization', 'Real time', 'Multi role'],
    url: 'app.bisnisanda.com/dashboard',
  },
  {
    slug: 'pos',
    num: '02',
    category: 'APLIKASI KASIR (POS)',
    headline: 'Transaksi lebih cepat, antrian lebih pendek.',
    desc: 'Aplikasi kasir modern yang jalan di browser. Tanpa instal, bisa dipakai di komputer kasir maupun tablet, dan terhubung langsung ke stok serta laporan keuangan.',
    features: [
      'Terima QRIS, tunai, dan kartu debit',
      'Stok berkurang otomatis setiap transaksi',
      'Rekap shift & setoran kas tanpa hitung manual',
    ],
    tags: ['Offline first', 'QRIS Ready', 'Multi outlet'],
    url: 'kasir.kedaimu.com/pos',
  },
  {
    slug: 'ecommerce',
    num: '03',
    category: 'TOKO ONLINE / E COMMERCE',
    headline: 'Toko Anda buka 24 jam, tanpa gaji karyawan tambahan.',
    desc: 'Jual produk ke seluruh Indonesia dengan katalog rapi, pembayaran otomatis, dan ongkir real time. Pesanan masuk langsung ke dashboard Anda.',
    features: [
      'Pembayaran: QRIS, VA bank, e-wallet, COD',
      'Ongkir otomatis dari berbagai kurir',
      'Katalog, promo, dan voucher yang mudah diatur sendiri',
    ],
    tags: ['Payment Gateway', 'Ongkir Otomatis', 'SEO Friendly'],
    url: 'toko-batiknusantara.com',
  },
  {
    slug: 'booking',
    num: '04',
    category: 'SISTEM BOOKING & RESERVASI',
    headline: 'Jadwal penuh, tanpa satu pun telepon.',
    desc: 'Klinik, salon, studio foto, lapangan futsal. Pelanggan booking sendiri lewat link, Anda tinggal terima notifikasi. Pengingat otomatis via WhatsApp membuat pelanggan tidak pernah lupa jadwalnya.',
    features: [
      'Kalender real time, anti double booking',
      'Pengingat otomatis H+1 hari sebelum jadwal via WhatsApp',
      'DP / bayar di muka langsung saat booking',
    ],
    tags: ['Kalender Online', 'Notifikasi WA', 'Bayar DP'],
    url: 'booking.kliniksehat.com',
  },
  {
    slug: 'hris',
    num: '05',
    category: 'SISTEM INTERNAL / HRIS',
    headline: 'Absen, cuti, payroll beres tanpa drama.',
    desc: 'Karyawan absen dari HP dengan GPS & selfie, pengajuan cuti tinggal tap, dan slip gaji terhitung otomatis. Tim HR Anda akhirnya bisa fokus pada manusia, bukan administrasi.',
    features: [
      'Absensi GPS + selfie, anti titip absen',
      'Payroll otomatis: tunjangan, lembur, potongan',
      'Cuti, izin, lembur disetujui dari HP pimpinan',
    ],
    tags: ['Multi cabang', 'Slip Gaji Digital', 'Audit Trail'],
    url: 'hr.perusahaananda.com/absensi',
  },
  {
    slug: 'profile',
    num: '06',
    category: 'WEBSITE PROFIL PERUSAHAAN',
    headline: 'Kesan pertama yang bikin klien percaya.',
    desc: 'Saat calon klien mencari perusahaan Anda di Google, apa yang mereka lihat? Website profesional dengan portofolio meyakinkan adalah salesperson terbaik yang bekerja 24 jam nonstop tanpa komisi.',
    features: [
      'Optimasi mesin pencari agar mudah ditemukan calon klien',
      'Form leads langsung masuk ke WhatsApp Anda',
      'Muat di bawah 2 detik, skor PageSpeed hijau',
    ],
    tags: ['SEO', 'Fast Loading', 'Lead Generation'],
    url: 'www.kontraktor-bangunperkasa.co.id',
  },
];
