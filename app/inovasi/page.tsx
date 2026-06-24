"use client";

import React from 'react';
import Link from 'next/link'; // Menggunakan Link Next.js agar navigasi lancar

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

export default function InovasiKearsipanPage() {
  // Data Video Inovasi - SEKARANG MENGGUNAKAN LINK PENUH (src)
  const inovasiVideos = [
    {
      id: 1,
      title: "UPAYA KEGIATAN RESTORASI ARSIP SEBAGAI BAHAN PENYELAMATAN DI\nDINAS KEARSIPAN DAN PERPUSTAKAAN KABUPATEN BOYOLALI",
      src: "https://www.youtube.com/embed/PxKBfpK5j2w?si=dBBTTqVNs_GzaWbb" 
    },
    {
      id: 2,
      title: "PEMANFAATAN GOOGLE DRIVE SEBAGAI MEDIA PENYIMPANAN ARSIP\nDI DINAS KEARSIPAN DAN PERPUSTAKAAN KABUPATEN BOYOLALI",
      src: "https://www.youtube.com/embed/wMIk0CMeNvs?si=Mv7FirUvIkogPjew" 
    },
    {
      id: 3,
      title: "OPTIMALISASI PEMELIHARAAN ARSIP VITAL MELALUI ALIH MEDIA DI\nDINAS KEARSIPAN DAN PERPUSTAKAAN KABUPATEN BOYOLALI",
      src: "https://www.youtube.com/embed/pTC5HHwUqY4?si=UHMhV3hEwDlNcUiM" 
    },
    {
      id: 4,
      title: "OPTIMALISASI PEMBINAAN ARSIP KELUARGA MELALUI MEDIA\nINFORMASI DIGITAL",
      src: "https://www.youtube.com/embed/m6jYydRgY7Q?si=iZVECGuoX0U_y_rQ" 
    },
    {
      id: 5,
      title: "PELAYANAN PERLINDUNGAN DAN PENYELAMATAN ARSIP (LALU LAPIT)\nDI DESA RAWAN BENCANA WILAYAH KABUPATEN BOYOLALI",
      src: "https://www.youtube.com/embed/b47yAmQEqag?si=F91ztjkUixBH5cUq" 
    }
  ];

  const menuItems: MenuItem[] = [
    { name: "Home", hasDropdown: false, href: "/" },
    { 
      name: "Pengelolaan Kearsipan", 
      hasDropdown: true,
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
    { 
      name: "Inovasi Kearsipan", 
      hasDropdown: false, 
      href: "/inovasi",
      isActive: true 
    },
    { 
      name: "Sejarah Pemerintahan", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Boyolali Berkisah", href: "/sejarah/berkisah" },
        { name: "Podcast", href: "/sejarah/podcast" },
        { name: "JIKN", href: "/sejarah/JIKN" },
      ]
    },
    { name: "Tentang LKD", hasDropdown: false, href: "/tentang-lkd" },
    { name: "Zoom", hasDropdown: false, href: "/zoom" },
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
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <img src="/logoarsip.png" alt="Logo Boyolali" className="h-10 md:h-12 w-auto"/>
            <div className="font-bold text-[#006699] text-base md:text-lg tracking-wide">
              LKD KABUPATEN BOYOLALI
            </div>
          </Link>

          <nav className="relative">
            <ul className="flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group py-2">
                  <Link 
                    href={item.href || (item.hasDropdown ? "#" : "/")}
                    className={`flex items-center px-3 md:px-4 py-2 rounded-md font-medium text-sm transition-all duration-200
                      ${item.isActive ? "bg-[#1a1a1a] text-white" : "text-gray-700 hover:bg-[#006699] hover:text-white"}`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <svg className="w-3 h-3 ml-1.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {item.hasDropdown && item.dropdownItems && (
                    <div className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-2xl border border-gray-200 py-1 z-[99] hidden group-hover:block">
                      {item.dropdownItems.map((subItem, subIndex) => (
                        <Link key={subIndex} href={subItem.href || "#"} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-50 last:border-0 font-medium">
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* 2. HERO BANNER BUMI */}
      <section 
        className="relative h-[250px] md:h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/inovasi-hero.jpg')", backgroundColor: "#1a202c" }} 
      >
        <div className="absolute inset-0 bg-[#0f172a]/60 backdrop-blur-[1px]"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-widest uppercase drop-shadow-lg inline-block border-b-4 border-[#5bc2e7] pb-2">
            INOVASI KEARSIPAN
          </h1>
        </div>
      </section>

      {/* 3. PITA BIRU MUDA (Sub Header) */}
      <div className="bg-[#5bc2e7] text-white text-center py-4 px-4 shadow-md relative z-20">
        <h2 className="text-base md:text-lg font-bold tracking-widest uppercase">
          INOVASI KEARSIPAN
        </h2>
      </div>

      {/* 4. KONTEN VIDEO */}
      <main className="flex-grow max-w-[1100px] mx-auto w-full px-4 py-12 relative z-10">
        
        {/* Grid 4 Video Pertama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {inovasiVideos.slice(0, 4).map((video) => (
            <div key={video.id} className="flex flex-col items-center text-center">
              {/* iframe YouTube */}
              <div className="w-full h-[250px] md:h-[300px] bg-gray-200 rounded-md overflow-hidden shadow-lg border-2 border-gray-300 mb-4">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={video.src} // <-- DIPERBAIKI: Langsung memanggil link penuh
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-xs md:text-sm text-gray-700 font-medium uppercase tracking-wide leading-relaxed whitespace-pre-line px-2">
                {video.title}
              </p>
            </div>
          ))}
        </div>

        {/* Video ke-5 di Tengah Bawah */}
        <div className="flex justify-center mt-12">
          <div className="flex flex-col items-center text-center w-full md:w-1/2">
            <div className="w-full h-[250px] md:h-[300px] bg-gray-200 rounded-md overflow-hidden shadow-lg border-2 border-gray-300 mb-4">
              <iframe 
                width="100%" 
                height="100%" 
                src={inovasiVideos[4].src} // <-- DIPERBAIKI: Langsung memanggil link penuh
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-xs md:text-sm text-gray-700 font-medium uppercase tracking-wide leading-relaxed whitespace-pre-line px-2">
              {inovasiVideos[4].title}
            </p>
          </div>
        </div>

      </main>

      {/* 4. SEKSI LOGO & VISITOR STATISTIK */}
      <section className="bg-[#4cbbe1] py-8 px-4 border-t-4 border-white relative z-10 text-center">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          
          <div className="flex items-center gap-6 justify-center">
            <img 
              src="/LogoBoyolali.png" 
              alt="Logo Boyolali Daerah" 
              className="h-24 w-auto object-contain drop-shadow-md"
            />
            <img 
              src="/logoarsip.png"   
              alt="Logo Tertib Arsip" 
              className="h-24 w-auto object-contain drop-shadow-md"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
            
            <div className="bg-white p-1 rounded border border-gray-300 shadow-sm">
              <img 
                src="https://s11.flagcounter.com/count2/xyz/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_6/viewers_0/labels_1/pageviews_1/flags_0/percent_0/" 
                alt="Flag Counter" 
                className="max-w-full h-auto"
              />
            </div>

            <div className="bg-[#3b8fa3] border border-[#2b6e7e] rounded text-white text-xs text-left w-[130px] font-mono shadow-inner overflow-hidden">
              <div className="bg-[#2e7485] px-2 py-1 font-bold border-b border-[#2b6e7e] flex justify-between">
                <span>Vis. today</span>
                <span className="text-yellow-300">39</span>
              </div>
              <div className="px-2 py-1 flex justify-between">
                <span>Visits</span>
                <span>3.452</span>
              </div>
              <div className="bg-[#2e7485] px-2 py-1 flex justify-between border-t border-[#2b6e7e]">
                <span>Pag. today</span>
                <span className="text-yellow-300">39</span>
              </div>
              <div className="px-2 py-1 flex justify-between border-t border-[#2b6e7e]">
                <span>Pages</span>
                <span>3.452</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FOOTER HAK CIPTA */}
      <footer className="bg-[#222222] text-[#bbbbbb] text-center p-6 text-sm relative z-10">
        <p>&copy; 2026 Lembaga Kearsipan Daerah Kabupaten Boyolali. All Rights Reserved.</p>
      </footer>

    </div>
  );
}