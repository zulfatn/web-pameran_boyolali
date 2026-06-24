"use client";

import React from 'react';

// Struktur Menu Header (Sesuai Standar LKD Boyolali)
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

export default function KegiatanAprilPage() {
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
        className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/apr-hero.jpg')" }} // Ganti dengan foto ruangan rapat besar
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase drop-shadow-lg inline-block border-b-4 border-[#5bc2e7] pb-2">
            RAKOR MEDSOS DAN ADUMAS
          </h1>
        </div>
      </section>

      {/* 3. PITA BIRU MUDA (Sub Header) */}
      <div className="bg-[#5bc2e7] text-white text-center py-5 px-4 shadow-md relative z-20">
        <h2 className="text-sm md:text-base font-bold tracking-wide uppercase mb-1">
          RAPAT KOORDINASI PENYUSUNAN KONTEN BERITA MEDIA SOSIAL DAN ADUAN
        </h2>
        <h3 className="text-sm md:text-base font-bold tracking-wide uppercase mb-2">
          MASYARAKAT DI LINGKUNGAN PEMERINTAH KABUPATEN BOYOLALI
        </h3>
        <p className="text-xs md:text-sm font-bold opacity-90">
          KAMIS, 17 APRIL 2026
        </p>
      </div>

      {/* 4. KONTEN ARTIKEL (Sesuai Desain: 1 Gambar - Teks - 2 Gambar - Teks - 2 Gambar) */}
      <main className="flex-grow max-w-[1000px] mx-auto w-full px-4 py-12 relative z-10">
        <div className="bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-lg border border-gray-100">
          
          {/* Gambar 1 (Utama - Besar di Tengah) */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/april.jpg" 
              alt="Rakor Medsos 1" 
              className="w-full md:w-[60%] h-auto object-cover rounded shadow-md border-4 border-white"
            />
          </div>

          {/* Teks Bagian 1 */}
          <div className="text-gray-800 text-sm md:text-base text-justify leading-relaxed mb-8 space-y-4">
            <p>
              Dalam era digital yang terus berkembang pesat, media sosial telah menjadi salah satu sarana utama komunikasi publik bagi instansi pemerintah. Pemerintah Kabupaten Boyolali pun memanfaatkan media sosial sebagai media penyampaian informasi yang cepat, efektif, dan mampu menjangkau masyarakat secara luas. Untuk menjaga kualitas serta konsistensi informasi yang disampaikan, diperlukan koordinasi yang matang antar perangkat daerah guna menyusun konten berita yang informatif, faktual, dan sesuai dengan kebutuhan masyarakat.
            </p>
            <p>
              Selain itu, kehadiran media sosial juga membuka ruang interaksi dua arah antara pemerintah dan masyarakat. Masyarakat kini dapat dengan mudah menyampaikan saran, kritik, maupun aduan terkait layanan publik melalui berbagai kanal digital. Hal ini menuntut responsivitas yang tinggi dari setiap perangkat daerah agar setiap aduan masyarakat dapat ditindaklanjuti dengan cepat dan tepat sasaran. Oleh karena itu, sinergi dan pemahaman yang seragam mengenai mekanisme pengelolaan aduan menjadi sangat penting.
            </p>
          </div>

          {/* Grid Gambar 2 & 3 (Sejajar Kiri Kanan) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
            <img 
              src="/april1.jpg" 
              alt="Rakor Medsos 2" 
              className="w-full h-[250px] object-cover rounded shadow-sm hover:scale-[1.02] transition-transform"
            />
            <img 
              src="/april2.jpg" 
              alt="Rakor Medsos 3" 
              className="w-full h-[250px] object-cover rounded shadow-sm hover:scale-[1.02] transition-transform"
            />
          </div>

          {/* Teks Bagian 2 */}
          <div className="text-gray-800 text-sm md:text-base text-justify leading-relaxed mb-8 space-y-4">
            <p>
              Menanggapi kebutuhan tersebut, Pemerintah Kabupaten Boyolali melalui Dinas Komunikasi dan Informatika menyelenggarakan <strong>Rapat Koordinasi Penyusunan Konten Berita Media Sosial dan Aduan Masyarakat</strong> pada Kamis, 17 April 2026, bertempat di Aula Dinas Komunikasi dan Informatika Kabupaten Boyolali. Kegiatan ini melibatkan seluruh perangkat daerah, termasuk Dinas Kearsipan dan Perpustakaan Kabupaten Boyolali sebagai peserta aktif dalam upaya memperkuat komunikasi publik serta pengelolaan aduan secara terpadu.
            </p>
            <p>
              Melalui rapat koordinasi ini, diharapkan setiap perangkat daerah memiliki pemahaman yang sama mengenai strategi penyusunan konten media sosial serta tata kelola aduan masyarakat yang terstandar. Dengan demikian, informasi yang disampaikan kepada publik dapat menjadi lebih terarah, transparan, dan membangun kepercayaan masyarakat terhadap kinerja pemerintah daerah. Selain itu, rapat ini juga menjadi wadah untuk berbagi praktik baik antar perangkat daerah guna meningkatkan kualitas pelayanan informasi publik secara keseluruhan.
            </p>
          </div>

          {/* Grid Gambar 4 & 5 (Sejajar Kiri Kanan Bawah) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <img 
              src="/april3.jpg" 
              alt="Rakor Medsos 4" 
              className="w-full h-[250px] object-cover rounded shadow-sm hover:scale-[1.02] transition-transform"
            />
            <img 
              src="/april4.jpg" 
              alt="Rakor Medsos 5" 
              className="w-full h-[250px] object-cover rounded shadow-sm hover:scale-[1.02] transition-transform"
            />
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