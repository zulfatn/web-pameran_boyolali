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

export default function NaskahSumberArsipPage() {
  // Data Naskah menggunakan Link Eksternal (Google Drive)
  const naskahData = [
    {
      id: 1,
      title: "SEJARAH PENGGING\nBOYOLALI JAWA TENGAH",
      year: "TAHUN 2018",
      image: "/pengging.png",
      pdfLink: "https://drive.google.com/file/d/1tHS4OJ0d9oj_sMYb3lwD6l3cCqiGTZVR/view" 
    },
    {
      id: 2,
      title: "SEJARAH DINAS ARPUS\nKABUPATEN BOYOLALI",
      year: "TAHUN 2019",
      image: "/arpus.png",
      pdfLink: "https://drive.google.com/file/d/1AXI7SWEuVNDNeENXu0SzGyFzKMDFzH72/view" 
    },
    {
      id: 3,
      title: "SUTOPO SANG\nPENGABAR BENCANA",
      year: "TAHUN 2022",
      image: "/sutopo.png",
      pdfLink: "https://drive.google.com/file/d/1pFB4l8zAjMP1ygd1l09EdAGpjETZVjY7/view" 
    },
    {
      id: 4,
      title: "BOYOLALI KOTA SUSU",
      year: "TAHUN 2024",
      image: "/susu.png",
      pdfLink: "https://drive.google.com/file/d/1BOc5cZn6jzjC5_4RxR-dpasM0755Ah-5/view" 
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
      isActive: true, 
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
        className="relative h-[250px] md:h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/naskah-hero.jpg')", backgroundColor: "#4a5568" }} 
      >
        <div className="absolute inset-0 bg-[#404654]/80 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-widest uppercase drop-shadow-lg inline-block border-b-4 border-[#5bc2e7] pb-2">
            NASKAH SUMBER ARSIP
          </h1>
        </div>
      </section>

      {/* 3. KONTEN GRID NASKAH */}
      <main className="flex-grow max-w-[800px] mx-auto w-full px-4 py-12 relative z-10">
        
        {/* Garis Pembatas Atas */}
        <hr className="border-t-2 border-gray-800 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
          {naskahData.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center group">
              {/* Gambar Sampul Buku */}
              <div className="w-full max-w-[280px] h-[180px] mb-4 overflow-hidden shadow-md flex items-center justify-center bg-white border border-gray-200 group-hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={item.image} 
                  alt={item.title.replace('\n', ' ')} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Judul Tautan PDF */}
              <a 
                href={item.pdfLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base md:text-lg font-medium text-gray-800 uppercase tracking-wide underline decoration-1 underline-offset-4 hover:text-[#006699] hover:decoration-[#006699] transition-colors whitespace-pre-line leading-tight cursor-pointer"
              >
                {item.title}
              </a>

              {/* Tahun */}
              <p className="text-xs md:text-sm font-bold text-gray-600 mt-3 tracking-wider">
                {item.year}
              </p>
            </div>
          ))}
        </div>

        {/* Garis Pembatas Bawah */}
        <hr className="border-t-2 border-gray-800 mt-10 mb-8" />

      </main>
      
      {/* SEKSI LOGO & VISITOR STATISTIK */}
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