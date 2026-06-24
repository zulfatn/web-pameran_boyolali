"use client";

import React from 'react';

// Struktur Menu Header
interface SubMenuItem {
  name: string;
  href?: string;
}

interface MenuItem {
  name: string;
  hasDropdown: boolean;
  isActive?: boolean;
  dropdownItems?: SubMenuItem[];
  href?: string;
}

export default function KegiatanJuniPage() {
  const menuItems: MenuItem[] = [
    { name: "Home", hasDropdown: false, href: "/" },
    { 
      name: "Pengelolaan Kearsipan", 
      hasDropdown: true,
      isActive: true,
      dropdownItems: [
        { name: "Tahun 2026", href: "/pengelolaan/2026" },
      ]
    },
    { 
      name: "Layanan Kearsipan", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Naskah Sumber Arsip", href: "/layanan/naskah" },
      ]
    },
    { name: "Inovasi Kearsipan", hasDropdown: false },
    { 
      name: "Sejarah Pemerintahan", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Boyolali Berkisah", href: "/sejarah/berkisah" },
        { name: "Podcast", href: "/sejarah/podcast" },
        { name: "JIKN", href: "/sejarah/JIKN" },
      ]
    },
    { name: "Tentang LKD", hasDropdown: false },
    { name: "Zoom", hasDropdown: false },
  ];

  return (
    <div 
      className="min-h-screen font-sans text-gray-800 flex flex-col"
      style={{
        backgroundImage: "url('/background.png')", 
        backgroundRepeat: "repeat",
        backgroundSize: "700px",
        backgroundAttachment: "fixed", 
        backgroundColor: "#f4f8fa"     
      }}
    >
      
      {/* 1. HEADER UTAMA */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 py-3 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.location.href='/'}>
            <img src="/logoarsip.png" alt="Logo Boyolali" className="h-10 md:h-12 w-auto"/>
            <div className="font-bold text-[#006699] text-base md:text-lg tracking-wide">
              LKD KABUPATEN BOYOLALI
            </div>
          </div>

          <nav className="relative">
            <ul className="flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group py-2">
                  <a 
                    href={item.href || (item.hasDropdown ? "#" : undefined)}
                    className={`flex items-center px-3 md:px-4 py-2 rounded-md font-medium text-sm transition-all duration-200
                      ${item.isActive ? "bg-[#1a1a1a] text-white" : "text-gray-700 hover:bg-[#006699] hover:text-white"}`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <svg className="w-3 h-3 ml-1.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>

                  {item.hasDropdown && item.dropdownItems && (
                    <div className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-2xl border border-gray-200 py-1 z-[99] hidden group-hover:block">
                      {item.dropdownItems.map((subItem, subIndex) => (
                        <a key={subIndex} href={subItem.href} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-50 last:border-0 font-medium">
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* 2. HERO BANNER */}
      <section 
        className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/jun-hero.jpg')" }} 
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase drop-shadow-lg inline-block border-b-4 border-[#5bc2e7] pb-2">
            SOSIALISASI TND DAN ARSIP
          </h1>
        </div>
      </section>

      {/* 3. PITA BIRU MUDA (Sub Header) */}
      <div className="bg-[#5bc2e7] text-white text-center py-5 px-4 shadow-md relative z-20">
        <h2 className="text-sm md:text-base font-bold tracking-wide uppercase mb-1">
          SOSIALISASI PERATURAN KEPEGAWAIAN DAN PENGUATAN KOMPETENSI TEKNIS BIDANG
        </h2>
        <h3 className="text-sm md:text-base font-bold tracking-wide uppercase mb-2">
          TUGAS (PKTBT) DENGAN TEMA “TATA NASKAH DINAS DAN KEARSIPAN” PELATIHAN DASAR CPNS PEMERINTAH KABUPATEN BOYOLALI TAHUN ANGGARAN 2026
        </h3>
        <p className="text-xs md:text-sm font-bold opacity-90">
          JUM'AT, 13 JUNI 2026
        </p>
      </div>

      {/* 4. KONTEN ARTIKEL (Layout 3 Foto: 1 Atas, 2 Tengah) */}
      <main className="flex-grow max-w-[1000px] mx-auto w-full px-4 py-12 relative z-10">
        <div className="bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-lg border border-gray-100">
          
          {/* Gambar 1 (Utama - Besar di Tengah) */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/juni.jpg" 
              alt="Kegiatan Sosialisasi TND 1" 
              className="w-full md:w-[70%] h-auto object-cover rounded shadow-md border-4 border-white"
            />
          </div>

          {/* Teks Bagian 1 */}
          <div className="text-gray-800 text-sm md:text-base text-justify leading-relaxed mb-8 space-y-4">
            <p>
              LKD Kabupaten Boyolali menjadi narasumber dalam kegiatan <strong>“Sosialisasi Peraturan Kepegawaian dan Penguatan Kompetensi Teknis Bidang Tugas (PKTBT) dengan tema “Tata Naskah Dinas dan Kearsipan” pada Pelatihan Dasar CPNS Pemerintah Kabupaten Boyolali Tahun Anggaran 2026”</strong> yang diadakan pada Jum'at, 13 Juni 2026 di Aula BKPSDM Kabupaten Boyolali.
            </p>
            <p>
              Dalam rangka mewujudkan Aparatur Sipil Negara (ASN) yang profesional, berintegritas, dan kompeten, Pemerintah Kabupaten Boyolali secara berkelanjutan menyelenggarakan berbagai program pembinaan dan pengembangan sumber daya manusia, salah satunya melalui Pelatihan Dasar Calon Pegawai Negeri Sipil (Latsar CPNS). Latsar CPNS merupakan tahapan penting dalam proses pembentukan karakter ASN yang berorientasi pada pelayanan publik, nasionalisme, etika publik, komitmen mutu, serta kompetensi teknis sesuai bidang tugas masing-masing.
            </p>
          </div>

          {/* Grid Gambar 2 & 3 (Sejajar Kiri Kanan) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
            <img 
              src="/juni1.jpg" 
              alt="Kegiatan Sosialisasi TND 2" 
              className="w-full h-[280px] object-cover rounded shadow-sm hover:scale-[1.02] transition-transform"
            />
            <img 
              src="/juni2.jpg" 
              alt="Kegiatan Sosialisasi TND 3" 
              className="w-full h-[280px] object-cover rounded shadow-sm hover:scale-[1.02] transition-transform"
            />
          </div>

          {/* Teks Bagian 2 */}
          <div className="text-gray-800 text-sm md:text-base text-justify leading-relaxed mb-8 space-y-4">
            <p>
              Sebagai bagian dari rangkaian kegiatan Latsar CPNS Tahun Anggaran 2026, diselenggarakan kegiatan Sosialisasi Peraturan Kepegawaian dan Penguatan Kompetensi Teknis Bidang Tugas (PKTBT) dengan mengangkat tema "Tata Naskah Dinas dan Kearsipan". Tema ini dipilih sebagai upaya untuk menanamkan pemahaman yang kuat mengenai pentingnya tata naskah dinas yang sesuai ketentuan perundang-undangan, serta penerapan prinsip-prinsip kearsipan dalam setiap proses administrasi pemerintahan.
            </p>
            <p>
              Tata naskah dinas yang tertib dan sistem kearsipan yang baik merupakan fondasi utama dalam mewujudkan birokrasi yang akuntabel, transparan, dan efisien. Oleh karena itu, kegiatan ini menjadi sangat relevan untuk membekali para CPNS agar mampu menjalankan tugas dan fungsi administratif secara profesional sejak awal masa pengabdian.
            </p>
            <p>
              Melalui kehadiran narasumber yang kompeten dalam bidang tata naskah dinas dan kearsipan, diharapkan para peserta memperoleh wawasan dan pemahaman praktis yang dapat langsung diterapkan dalam lingkungan kerja, sekaligus mendukung terwujudnya budaya kerja yang tertib administrasi di instansi pemerintah, khususnya di lingkup Pemerintah Kabupaten Boyolali.
            </p>
          </div>

          {/* Tombol Kembali */}
          <div className="mt-12 text-center border-t border-gray-200 pt-8">
            <a 
              href="/pengelolaan/2026" 
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#006699] to-[#4cbbe1] text-white font-semibold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span>&larr;</span> Kembali ke Agenda Utama
            </a>
          </div>

        </div>
      </main>

      {/* 5. FOOTER HAK CIPTA */}
      <footer className="bg-[#222222] text-[#bbbbbb] text-center p-6 text-sm relative z-10 mt-auto">
        <p>&copy; 2026 Lembaga Kearsipan Daerah Kabupaten Boyolali. All Rights Reserved.</p>
      </footer>

    </div>
  );
}