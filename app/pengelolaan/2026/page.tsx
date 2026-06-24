"use client";

import React from 'react';

// Definisi Tipe Data Menu Navigasi (Sama seperti Header Utama)
interface SubMenuItem {
  name: string;
  href?: string; // Tambahkan tanda tanya agar href bisa dibaca
}

interface MenuItem {
  name: string;
  hasDropdown: boolean;
  isActive?: boolean;
  dropdownItems?: SubMenuItem[];
  href?: string; // Tambahkan ini juga untuk menu utama seperti Home
}

export default function Tahun2026Page() {
  // Daftar Bulan untuk Grid Agenda (Diubah menggunakan foto dan link, sampai Juni saja)
  const bulanAgenda = [
    { bulan: "Januari", img: "/januari.jpg", link: "/pengelolaan/2026/januari" },
    { bulan: "Februari", img: "/februari.jpg", link: "/pengelolaan/2026/februari" },
    { bulan: "April", img: "/april.jpg", link: "/pengelolaan/2026/april" },
    { bulan: "Juni", img: "/juni.jpg", link: "/pengelolaan/2026/juni" }
  ];

  // Struktur Menu Header (Disamakan dengan halaman depan)
  const menuItems: MenuItem[] = [
    { name: "Home", hasDropdown: false, href: "/" }, // TYPO DIPERBAIKI (sebelumnya herf)
    { 
      name: "Pengelolaan Kearsipan", 
      hasDropdown: true,
      isActive: true, // Dibuat aktif karena kita sedang di halaman ini
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
    { name: "Inovasi Kearsipan", hasDropdown: false, href:"/inovasi"},
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
      
      {/* 1. HEADER & NAVIGASI */}
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
                    href={item.href || (item.hasDropdown ? "#" : undefined)} // TYPO DIPERBAIKI (sebelumnya item.herf)
                    className={`flex items-center px-3 md:px-4 py-2 rounded-md font-medium text-sm transition-all duration-200
                      ${item.isActive 
                        ? "bg-[#1a1a1a] text-white" 
                        : "text-gray-700 hover:bg-[#006699] hover:text-white"
                      }`}
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
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-50 last:border-0 font-medium"
                        >
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

      {/* 2. HERO BANNER - KEGIATAN TAHUN */}
      <section 
        className="relative h-[250px] flex items-center justify-center bg-cover bg-center shadow-inner"
        style={{
          backgroundImage: "url('/kuda.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest uppercase mb-2">
            Kegiatan Tahun 2026
          </h1>
          <div className="w-32 h-1.5 bg-[#4cbbe1] mx-auto rounded-full mb-4"></div>
          <p className="text-lg md:text-xl font-light opacity-90 drop-shadow-md">
            Pengelolaan Kearsipan 
          </p>
        </div>
      </section>

      {/* 3. PITA BIRU (SUB HEADER) */}
      <div className="bg-gradient-to-r from-[#006699] via-[#4cbbe1] to-[#006699] text-white text-center py-4 text-xl md:text-2xl font-bold tracking-widest shadow-md relative z-20">
        AGENDA KEARSIPAN TAHUN 2026
      </div>

      {/* 4. KONTEN GRID BULAN (DIUBAH SESUAI DESAIN FOTO + JUDUL KLIK) */}
      <main className="flex-grow max-w-[1000px] mx-auto w-full px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {bulanAgenda.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Bagian Foto */}
              <div className="w-full h-[280px] bg-gray-200 shadow-md">
                <img 
                  src={item.img} 
                  alt={`Kegiatan ${item.bulan}`} 
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Foto+Kegiatan+Belum+Tersedia'; }}
                />
              </div>
              
              {/* Bagian Judul yang Bisa Diklik */}
              <a 
                href={item.link}
                className="mt-4 border border-gray-400 bg-white py-3 text-center shadow-sm hover:bg-gray-50 hover:border-[#006699] transition-all duration-200 cursor-pointer block group"
              >
                <div className="text-sm md:text-base font-bold text-gray-800 uppercase group-hover:text-[#006699]">
                  KEGIATAN BULAN {item.bulan}
                </div>
                <div className="text-sm font-bold text-gray-800 uppercase mt-0.5 group-hover:text-[#006699]">
                  TAHUN 2026
                </div>
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* 5. SEKSI LOGO & VISITOR STATISTIK */}
      <section className="bg-[#4cbbe1] py-8 px-4 border-t-4 border-white relative z-10 text-center mt-auto">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          
          <div className="flex items-center gap-6 justify-center">
            <img src="/LogoBoyolali.png" alt="Logo Boyolali Daerah" className="h-24 w-auto object-contain drop-shadow-md"/>
            <img src="/logoarsip.png" alt="Logo Tertib Arsip" className="h-24 w-auto object-contain drop-shadow-md"/>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
            <div className="bg-white p-1 rounded border border-gray-300 shadow-sm">
              <img src="https://s11.flagcounter.com/count2/xyz/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_6/viewers_0/labels_1/pageviews_1/flags_0/percent_0/" alt="Flag Counter" className="max-w-full h-auto"/>
            </div>
            <div className="bg-[#3b8fa3] border border-[#2b6e7e] rounded text-white text-xs text-left w-[130px] font-mono shadow-inner overflow-hidden">
              <div className="bg-[#2e7485] px-2 py-1 font-bold border-b border-[#2b6e7e] flex justify-between">
                <span>Vis. today</span><span className="text-yellow-300">39</span>
              </div>
              <div className="px-2 py-1 flex justify-between">
                <span>Visits</span><span>3.452</span>
              </div>
              <div className="bg-[#2e7485] px-2 py-1 flex justify-between border-t border-[#2b6e7e]">
                <span>Pag. today</span><span className="text-yellow-300">39</span>
              </div>
              <div className="px-2 py-1 flex justify-between border-t border-[#2b6e7e]">
                <span>Pages</span><span>3.452</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. FOOTER HAK CIPTA */}
      <footer className="bg-[#222222] text-[#bbbbbb] text-center p-6 text-sm relative z-10">
        <p>&copy; 2026 Lembaga Kearsipan Daerah Kabupaten Boyolali. All Rights Reserved.</p>
      </footer>

    </div>
  );
}