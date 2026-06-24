"use client";
import React from 'react';
import Link from 'next/link'; // DITAMBAHKAN: Import Link dari Next.js

// Definisi Tipe Data Menu Navigasi Bertingkat
interface SubSubMenuItem {
  name: string;
  href: string;
}

interface SubMenuItem {
  name: string;
  hasSubDropdown?: boolean;
  subItems?: SubSubMenuItem[];
  href?: string; 
}

interface MenuItem {
  name: string;
  hasDropdown: boolean;
  isActive?: boolean;
  dropdownItems?: SubMenuItem[];
  href?: string; 
}

export default function LkdBoyolali() {
  const menuItems: MenuItem[] = [
    { name: "Home", hasDropdown: false, isActive: true, href: "/" }, 
    { 
      name: "Pengelolaan Kearsipan", 
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Tahun 2026",
          hasSubDropdown: true,
          href: "/pengelolaan/2026", 
        },
      ]
    },
    { name: "Layanan Kearsipan", 
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Naskah Sumber Arsip",
          hasSubDropdown: true,
          href: "/layanan/naskah" // DITAMBAHKAN: Agar naskah juga bisa diklik
        },
      ]
     },
  
    { name: "Inovasi Kearsipan", hasDropdown: false, href: "/inovasi" }, 
    { name: "Sejarah Pemerintahan", 
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Boyolali Berkisah",
          hasSubDropdown: true,
          href: "/sejarah/berkisah"
        },
        {
          name: "Podcast",
          hasSubDropdown: true,
          href: "/sejarah/podcast"
        },
        {
          name: "JIKN",
          hasSubDropdown: true,
          href: "/sejarah/JIKN"
        },
      ]
     },
    { name: "Tentang LKD", hasDropdown: false, href: "/tentang-lkd" }, 
    { name: "Zoom", hasDropdown: false, href: "/zoom" }, 
  ];

  return (
    <div 
      className="min-h-screen font-sans text-gray-800"
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
          
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <img 
              src="logoarsip.png" 
              alt="Logo Boyolali" 
              className="h-10 md:h-12 w-auto"
            />
            <div className="font-bold text-[#006699] text-base md:text-lg tracking-wide">
              LKD KABUPATEN BOYOLALI
            </div>
          </Link>

          {/* Menu Navigasi */}
          <nav className="relative">
            <ul className="flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group py-2">
                  
                  {/* DIPERBAIKI: Menggunakan <Link> pengganti <a> */}
                  <Link 
                    href={item.href || (item.hasDropdown ? "#" : "/")} 
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
                  </Link>

                  {/* Dropdown Tingkat 1 */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-2xl border border-gray-200 py-1 z-[99] hidden group-hover:block transition-all duration-150">
                      {item.dropdownItems.map((subItem, subIndex) => (
                        <div key={subIndex} className="relative group/sub">
                          
                          {/* DIPERBAIKI: Menggunakan <Link> pengganti <a> untuk Sub Menu */}
                          <Link
                            href={subItem.href || "#"}
                            className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 text-left border-b border-gray-50 last:border-0 cursor-pointer"
                          >
                            <div className="flex items-center gap-2">
                              <span className="inline-flex items-center justify-center w-4 h-4 border border-gray-400 rounded-sm text-gray-600 text-[9px] font-bold">
                                ▼
                              </span>
                              <span className="font-medium text-gray-700">{subItem.name}</span>
                            </div>
                            {subItem.hasSubDropdown && (
                              <svg className="w-3 h-3 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </Link>

                          {/* Dropdown Tingkat 2 */}
                          {subItem.hasSubDropdown && subItem.subItems && (
                            <div className="absolute left-full top-0 ml-0.5 w-48 bg-white rounded-md shadow-2xl border border-gray-200 py-1 z-[100] hidden group-hover/sub:block">
                              {subItem.subItems.map((nestedItem, nestedIndex) => (
                                <Link
                                  key={nestedIndex}
                                  href={nestedItem.href}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-[#006699] hover:text-white font-medium"
                                >
                                  {nestedItem.name}
                                </Link>
                              ))}
                            </div>
                          )}

                        </div>
                      ))}
                    </div>
                  )}

                </li>
              ))}
            </ul>
          </nav>

        </div>
      </header>

      {/* 2. HERO / BANNER UTAMA */}
      <section 
        className="relative overflow-hidden text-white text-center py-24 px-6 bg-cover bg-center shadow-inner"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 40, 60, 0.6), rgba(0, 40, 60, 0.75)), url('/kuda.png')",
        }}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-md leading-tight">
            Selamat Datang di Pameran Kearsipan Virtual
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 font-light drop-shadow">
            Dinas Kearsipan dan Perpustakaan Kabupaten Boyolali
          </p>
          <a 
            href="#" 
            className="inline-flex items-center justify-center gap-2 bg-[#ffcc00] text-gray-900 px-8 py-4 rounded-full font-bold text-lg md:text-xl shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:bg-[#e6b800] transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.053 5.488a2 2 0 0 0-1.875-1.488h-16.356a2 2 0 0 0-1.875 1.488l-1.815 6.049a2 2 0 0 0 .144 1.554l2.583 4.226a2 2 0 0 0 1.705.955h5.11a2.001 2.001 0 0 0 1.636-.837l2.29-3.267 2.29 3.267a2.001 2.001 0 0 0 1.636.837h5.11a2 2 0 0 0 1.705-.955l2.583-4.226a2 2 0 0 0 .144-1.554l-1.815-6.049zm-13.053 4.512a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
            </svg>
            LANJUTKAN KE PAMERAN VIRTUAL
          </a>
        </div>
      </section>

      {/* 3. KONTEN UTAMA & SIDEBAR */}
      <main className="max-w-[1200px] mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        
        {/* Kiri: Video Box */}
        <div className="lg:col-span-2 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-[#006699] flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Sambutan Kepala Dinas
          </h3>
          <p className="text-gray-500 text-sm mt-1 mb-4">
            Pameran Kearsipan Virtual Dinas Arpus Boyolali
          </p>
          
          <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-200 shadow-inner">
            <iframe 
              src="https://www.youtube.com/embed/tbdY3SQno74?si=rpNJ4mVJTPXMBvym" 
              title="Sambutan Kepala Dinas" 
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Kanan: Info Kontak / Sidebar */}
        <div className="lg:col-span-1 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 h-fit">
          <h4 className="text-lg font-bold text-[#006699] border-b-2 border-[#ffcc00] pb-2 mb-5">
            Lembaga Kearsipan Daerah
          </h4>
          
          <div className="space-y-4">
            <div className="flex gap-3 text-sm text-gray-700 leading-relaxed">
              <svg className="w-5 h-5 text-[#006699] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <div><strong>Dinas Kearsipan dan Perpustakaan Kabupaten Boyolali</strong></div>
            </div>
            
            <div className="flex gap-3 text-sm text-gray-700 leading-relaxed">
              <svg className="w-5 h-5 text-[#006699] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>Jl. Pandanaran Nomor 167 Siswodipuran, Boyolali 57311, Provinsi Jawa Tengah</div>
            </div>
            
            <div className="flex gap-3 text-sm text-gray-700 leading-relaxed">
              <svg className="w-5 h-5 text-[#006699] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>Telp. (0276) 322463</div>
            </div>
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