"use client";

import React from 'react';
import Link from 'next/link';

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

export default function JiknPage() {

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
      href: "/inovasi"
    },
    { 
      name: "Sejarah Pemerintahan", 
      hasDropdown: true,
      isActive: true, // Menu ini menyala karena JIKN adalah sub-menunya
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

      {/* 2. HERO BANNER ATAS */}
      <section 
        className="relative h-[250px] md:h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/jikn-hero.jpg')", backgroundColor: "#1a202c" }} 
      >
        <div className="absolute inset-0 bg-[#0f172a]/60 backdrop-blur-[1px]"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest uppercase drop-shadow-lg inline-block border-b-4 border-[#5bc2e7] pb-2">
            JIKN
          </h1>
        </div>
      </section>

      {/* 3. PITA BIRU MUDA (Tombol Link ke Halaman Login JIKN) */}
      <div className="bg-[#5bc2e7] shadow-md relative z-20 transition-all duration-300 hover:bg-[#49b0d5]">
        <a 
          href="https://jikn.anri.go.id/login" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-white text-center py-5 px-4 font-bold text-base md:text-xl tracking-wider uppercase underline decoration-2 underline-offset-4 cursor-pointer"
          title="Klik untuk menuju halaman login web JIKN ANRI"
        >
          JARINGAN INFORMASI KEARSIPAN NASIONAL
        </a>
      </div>

      {/* 4. MAIN CONTENT */}
      <main className="flex-grow max-w-[900px] mx-auto w-full px-6 py-16 relative z-10 flex flex-col items-center justify-center">
        <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl border border-gray-100 text-center">
          
          {/* Judul Konten */}
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 tracking-wide">
            Arsip Sebagai Jati Diri Bangsa
          </h2>
          
          {/* Garis Pembatas Kecil */}
          <div className="w-16 h-1 bg-[#5bc2e7] mx-auto mb-6 rounded-full"></div>

          {/* Deskripsi Konten */}
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-[750px] mx-auto font-medium">
            Simpul Jaringan mengolah informasi kearsipan yang dimiliki dalam rangka membantu temu balik 
            baik dalam format digital maupun lokasi fisik arsip di tempat penyimpanannya.
          </p>

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