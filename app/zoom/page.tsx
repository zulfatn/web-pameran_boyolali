"use client";

import React from "react";
import Link from "next/link";

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

export default function ZoomPage() {
  // DATA KONTEN ZOOM (Silakan ubah link di sini)
  const zoomData = {
    eventTitle: "SOSIALISASI KEARSIPAN TAHAP II TAHUN 2025",
    materiList: [
      "Materi I: Penyediaan Informasi, Akses Dan Layanan Kearsipan Tingkat Daerah Kabupaten/Kota melalui JIKN",
      "Materi II: Evakuasi dan Identifikasi Arsip Akibat Bencana",
      "Materi III: Digitalisasi Layanan Perlindungan dan Penyelamatan Arsip (LALI LANTIP)",
    ],
    linkMateriSertifikat:
      "https://drive.google.com/drive/folders/1_y9gCTrZYXXx_y9HIksUZH_J8S3z1ie_", // Ganti dengan link Anda
    linkRekamanZoom:
      "https://www.youtube.com/embed/ZLS5uIoGWWQ?si=Z0ld46dDV60O88wP", // Ganti dengan link Anda
  };

  const menuItems: MenuItem[] = [
    { name: "Home", hasDropdown: false, href: "/" },
    {
      name: "Pengelolaan Kearsipan",
      hasDropdown: true,
      dropdownItems: [{ name: "Tahun 2026", href: "/pengelolaan/2026" }],
    },
    {
      name: "Layanan Kearsipan",
      hasDropdown: true,
      dropdownItems: [{ name: "Naskah Sumber Arsip", href: "/layanan/naskah" }],
    },
    {
      name: "Inovasi Kearsipan",
      hasDropdown: false,
      href: "/inovasi",
    },
    {
      name: "Sejarah Pemerintahan",
      hasDropdown: true,
      dropdownItems: [
        { name: "Boyolali Berkisah", href: "/sejarah/berkisah" },
        { name: "Podcast", href: "/sejarah/podcast" },
        { name: "JIKN", href: "/sejarah/JIKN" },
      ],
    },
    { name: "Tentang LKD", hasDropdown: false, href: "/tentang-lkd" },
    { name: "Zoom", hasDropdown: false, isActive: true, href: "/zoom" },
  ];

  return (
    <div
      className="min-h-screen font-sans text-gray-800 flex flex-col"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "700px",
        backgroundAttachment: "fixed",
        backgroundColor: "#f4f8fa",
      }}
    >
      {/* 1. HEADER UTAMA */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 py-3 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src="/logoarsip.png"
              alt="Logo Boyolali"
              className="h-10 md:h-12 w-auto"
            />
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
                      <svg
                        className="w-3 h-3 ml-1.5 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {item.hasDropdown && item.dropdownItems && (
                    <div className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-2xl border border-gray-200 py-1 z-[99] hidden group-hover:block">
                      {item.dropdownItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href || "#"}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-50 last:border-0 font-medium"
                        >
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

      {/* 2. HERO BANNER (Judul Instansi) */}
      <section
        className="relative h-[280px] md:h-[350px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/gedung-lkd.jpg')",
          backgroundColor: "#cbd5e1",
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl md:text-5xl font-extrabold text-[#1e293b] tracking-wider uppercase mb-2">
            LEMBAGA KEARSIPAN DAERAH
          </h1>
          <h1 className="text-2xl md:text-5xl font-extrabold text-[#1e293b] tracking-wider uppercase">
            KABUPATEN BOYOLALI
          </h1>
          <div className="w-24 h-1.5 bg-[#4cbbe1] mx-auto my-6"></div>
          <p className="text-sm md:text-xl font-bold text-gray-700 uppercase tracking-widest">
            DINAS KEARSIPAN DAN PERPUSTAKAAN KABUPATEN BOYOLALI
          </p>
        </div>
      </section>

      {/* 3. PITA BIRU MUDA (Judul Kegiatan) */}
      <div className="bg-[#4cbbe1] text-white text-center py-4 px-4 shadow-md relative z-20">
        <h2 className="text-base md:text-2xl font-bold tracking-[0.2em] uppercase">
          {zoomData.eventTitle}
        </h2>
      </div>

      {/* 4. MAIN CONTENT (Daftar Materi & Tombol) */}
      <main className="flex-grow max-w-[1100px] mx-auto w-full px-4 py-12 relative z-10">
        <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-2xl border border-gray-200 p-8 md:p-12">
          {/* List Materi */}
          <div className="space-y-6 mb-12">
            {zoomData.materiList.map((materi, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1.5 w-2 h-2 bg-[#4cbbe1] rounded-full shrink-0"></div>
                <p className="text-sm md:text-lg font-bold text-gray-800 leading-relaxed uppercase tracking-tight">
                  {materi}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons Area */}
          <div className="flex flex-col items-center gap-6">
            {/* Button 1 */}
            <a
              href={zoomData.linkMateriSertifikat}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[500px] bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-md border-2 border-gray-300 shadow-lg transition-all duration-300 text-center uppercase tracking-widest text-sm md:text-base hover:scale-[1.02] active:scale-95"
            >
              MATERI DAN SERTIFIKAT
            </a>

            {/* Button 2 */}
            <a
              href={zoomData.linkRekamanZoom}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[500px] bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-md border-2 border-gray-300 shadow-lg transition-all duration-300 text-center uppercase tracking-widest text-sm md:text-base hover:scale-[1.02] active:scale-95"
            >
              REKAMAN ZOOM
            </a>
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
        <p>
          &copy; 2026 Lembaga Kearsipan Daerah Kabupaten Boyolali. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
}
