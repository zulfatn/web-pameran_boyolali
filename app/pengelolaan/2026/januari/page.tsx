"use client";

import React from 'react';

// Struktur Menu Header (Disamakan agar seragam)
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

export default function KegiatanJanuariPage() {
  const menuItems: MenuItem[] = [
    { name: "Home", hasDropdown: false, href: "/" },
    { 
      name: "Pengelolaan Kearsipan", 
      hasDropdown: true,
      isActive: true, // Aktif karena masih di bagian pengelolaan
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

      {/* 2. HERO BANNER (Gambar Atas) */}
      <section 
        className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/januari.jpg')" }} // <-- Ganti dengan foto ruangan rapat Anda
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase drop-shadow-lg">
            KONSULTASI DAN BIMTEK SRIKANDI
          </h1>
        </div>
      </section>

      {/* 3. PITA BIRU MUDA (Sub Header) */}
      <div className="bg-[#5bc2e7] text-white text-center py-5 px-4 shadow-md relative z-20">
        <h2 className="text-lg md:text-xl font-bold tracking-wide uppercase mb-1">
          PENDAMPINGAN KONSULTASI DAN BIMBINGAN TEKNIS APLIKASI SRIKANDI
        </h2>
        <h3 className="text-lg md:text-xl font-bold tracking-wide uppercase mb-2">
          PUSKESMAS KARANGGEDE KABUPATEN BOYOLALI
        </h3>
        <p className="text-base md:text-lg font-semibold">
          SENIN, 6 JANUARI 2026
        </p>
      </div>

      {/* 4. KONTEN ARTIKEL (Foto Tengah & Teks Rata Kiri-Kanan) */}
      <main className="flex-grow max-w-[1000px] mx-auto w-full px-4 py-12 relative z-10">
        <div className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-lg border border-gray-100">
          
          {/* Foto 1 */}
          <div className="mb-6 flex justify-center">
            <img 
              src="/januari.jpg" 
              alt="Bimtek Srikandi 1" 
              className="max-w-full md:max-w-[70%] h-auto rounded shadow-md border-4 border-white"
            />
          </div>

          {/* Teks Paragraf 1 */}
          <div className="text-gray-800 text-sm md:text-base text-justify leading-relaxed mb-8">
            <p className="mb-4">
              LKD Kabupaten Boyolali melaksanakan kegiatan Pendampingan Konsultasi dan Bimbingan Teknis Aplikasi Sistem Informasi Kearsipan Dinamis Terintegrasi (SRIKANDI) yang diadakan pada <strong>Senin, 6 Januari 2026</strong> di Ruang Rapat Dinas Arpus Kabupaten Boyolali.
            </p>
            <p>
              Sistem Pemerintahan Berbasis Elektronik (SPBE) merupakan langkah strategis yang diambil pemerintah dalam mewujudkan tata kelola pemerintahan yang bersih, efektif, efisien, dan transparan. Salah satu implementasi SPBE di sektor pelayanan kearsipan adalah melalui Aplikasi Sistem Informasi Kearsipan Dinamis Terintegrasi (SRIKANDI). Aplikasi ini bertujuan untuk meningkatkan pengelolaan arsip secara digital sehingga mendukung efisiensi waktu, biaya, ruang, dan penyimpanan data yang terintegrasi.
            </p>
          </div>

          {/* Foto 2 */}
          <div className="mb-6 flex justify-center">
            <img 
              src="/januari1.jpg" // <-- Ganti dengan foto ke-2 Anda
              alt="Bimtek Srikandi 2" 
              className="max-w-full md:max-w-[70%] h-auto rounded shadow-md border-4 border-white"
            />
          </div>

          {/* Teks Paragraf 2 */}
          <div className="text-gray-800 text-sm md:text-base text-justify leading-relaxed mb-8">
            <p className="mb-4">
              Puskesmas Karanggede, sebagai salah satu fasilitas pelayanan kesehatan tingkat pertama, memiliki peran penting dalam menyediakan layanan kesehatan kepada masyarakat. Untuk mendukung kelancaran tugas dan fungsi tersebut, pengelolaan arsip yang baik menjadi salah satu kebutuhan utama. Namun, penerapan birokrasi kearsipan digital seperti aplikasi SRIKANDI sering kali menghadapi berbagai kendala, seperti kurangnya pemahaman teknis, keterbatasan infrastruktur, dan kebutuhan SDM pendampingan.
            </p>
            <p>
              Menyadari pentingnya penguasaan teknologi tersebut, pendampingan konsultasi dan bimbingan teknis aplikasi SRIKANDI di Puskesmas Karanggede dilakukan sebagai langkah strategis. Program ini bertujuan untuk memberikan pemahaman mendalam kepada para pengelola arsip Puskesmas mengenai penggunaan aplikasi SRIKANDI, menyelesaikan kendala teknis yang dihadapi, serta memastikan pengelolaan arsip digital dapat dilakukan secara optimal sesuai standar yang ditetapkan pemerintah. 
            </p>
            <p>
              Dengan adanya kegiatan pendampingan ini, diharapkan Puskesmas Karanggede mampu memanfaatkan aplikasi SRIKANDI secara maksimal dalam mendukung pengelolaan arsip yang efektif dan terintegrasi, serta meningkatkan mutu layanan kepada masyarakat.
            </p>
          </div>

          {/* Tombol Kembali (Opsional, agar user gampang balik) */}
          <div className="mt-10 text-center border-t border-gray-200 pt-6">
            <a 
              href="/pengelolaan/2026" 
              className="inline-block px-6 py-2 bg-[#006699] text-white font-semibold rounded hover:bg-[#004d73] transition-colors"
            >
              &larr; Kembali ke Agenda 2026
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