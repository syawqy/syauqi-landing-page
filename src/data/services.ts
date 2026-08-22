export interface Service {
  icon: 'bulb' | 'window' | 'globe' | 'shield' | 'wrench' | 'chart';
  title: string;
  desc: string;
}

export const services: Service[] = [
  {
    icon: 'bulb',
    title: 'Konsultasi IT & Digitalisasi',
    desc: 'Saya pelajari alur kerja bisnis Anda, temukan titik lambat, lalu susun roadmap teknologi yang realistis sesuai budget. Bukan sekadar jualan software mahal.',
  },
  {
    icon: 'window',
    title: 'Pengembangan Web App Custom',
    desc: 'Dashboard, POS, HRIS, booking, toko online. Dibangun dari nol sesuai proses bisnis Anda, lengkap dengan pelatihan tim dan dokumentasi.',
  },
  {
    icon: 'globe',
    title: 'Website Company Profile & Landing Page',
    desc: 'Website cepat, elegan, dan SEO friendly yang mengubah pengunjung menjadi pelanggan, plus integrasi WhatsApp dan Google Analytics.',
  },
  {
    icon: 'shield',
    title: 'Modernisasi Sistem Lama',
    desc: 'Masih pakai Excel atau software usang? Saya migrasikan data dan alur kerja Anda ke sistem modern tanpa menghentikan operasional sehari pun.',
  },
  {
    icon: 'wrench',
    title: 'Integrasi & Otomatisasi',
    desc: 'Hubungkan sistem yang ada: notifikasi WhatsApp otomatis, sinkron marketplace, ekspor pembukuan, API pihak ketiga. Pekerjaan manual berulang saya otomatisasi.',
  },
  {
    icon: 'chart',
    title: 'Perawatan & Dukungan Berkelanjutan',
    desc: 'Sistem saya pantau setelah serah terima: backup harian, update keamanan, dan perbaikan bug cepat. Anda fokus jualan, saya jaga sistemnya.',
  },
];
