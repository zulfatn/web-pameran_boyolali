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

export default function TentangLKDPage() {
  // DATA KONTEN TENTANG LKD
  const lkdContent = {
    title: "LEMBAGA KEARSIPAN DAERAH KABUPATEN BOYOLALI",
    subtitle: "DINAS KEARSIPAN DAN PERPUSTAKAAN KABUPATEN BOYOLALI",
    descParagraph1:
      "Dinas Kearsipan Dan Perpustakaan Kabupaten Boyolali merupakan Lembaga Kearsipan Daerah di lingkungan Pemerintah Kabupaten Boyolali yang dipimpin oleh Kepala Dinas Kearsipan Dan Perpustakaan Kabupaten Boyolali selaku kepala lembaga Kearsipan Daerah.",
    descParagraph2:
      "Lembaga kearsipan daerah kabupaten/kota wajib melaksanakan pengelolaan arsip statis yang berskala kabupaten/kota yang diterima dari: satuan kerja perangkat daerah kabupaten/kota dan penyelenggara pemerintahan daerah kabupaten/kota; desa atau yang disebut dengan nama lain; organisasi perusahaan; organisasi politik; organisasi kemasyarakatan; dan perseorangan.",
    descParagraph3:
      "Lembaga kearsipan daerah kabupaten/kota mempunyai tugas melaksanakan:",
    tugasList: [
      "Pengelolaan arsip inaktif yang memiliki retensi di bawah 10 (sepuluh) tahun yang berasal dari satuan kerja perangkat daerah kabupaten/kota dan penyelenggara pemerintahan daerah kabupaten/kota; dan",
      "Pembinaan kearsipan terhadap pencipta arsip di lingkungan daerah kabupaten/kota.",
    ],
    links: {
      website: "https://dinas-arpus.boyolali.go.id",
      email: "mailto:lkdboyolali@gmail.com",
      instagram: "https://instagram.com/dinasarpus_boyolali",
      tiktok: "https://tiktok.com/@dinasarpus_boyolali",
    },
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
    {
      name: "Tentang LKD",
      hasDropdown: false,
      isActive: true,
      href: "/tentang-lkd",
    },
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

                  {/* Dropdown Menu yang sudah diperbaiki */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-2xl border border-gray-200 py-1 z-[99] hidden group-hover:block">
                      {item.dropdownItems.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.href || "#"}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-50 last:border-0 font-medium"
                        >
                          {sub.name}
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
        className="relative h-[320px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/gedung-lkd.jpeg')",
          backgroundColor: "#e2e8f0",
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-4 max-w-[1000px]">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-wider text-[#1a1a1a] drop-shadow-sm uppercase">
            {lkdContent.title}
          </h1>
          <div className="w-32 h-1 bg-[#4cbbe1] mx-auto my-4"></div>
          <p className="text-sm md:text-lg font-bold text-gray-700 tracking-wide uppercase">
            {lkdContent.subtitle}
          </p>
        </div>
      </section>

      {/* 3. MAIN CONTENT */}
      <main className="flex-grow max-w-[1200px] mx-auto w-full px-4 py-12 relative z-10 flex flex-col items-center gap-10">
        {/* Dua Gambar Berjejer di Tengah */}
        <div className="w-full max-w-[800px] flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <div className="overflow-hidden rounded-md border border-gray-100">
            <img
              src="/arpus.jpeg"
              alt="Lembaga Kearsipan Daerah Depan"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-md border border-gray-100">
            <img
              src="/arpus2.png"
              alt="Lembaga Kearsipan Daerah Samping"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-xs text-gray-500 italic mt-1">
            Lembaga Kearsipan Daerah Kabupaten Boyolali
          </p>
        </div>

        {/* PITA BIRU MUDA - JUDUL KONTEN */}
        <div className="w-full bg-[#4cbbe1] text-white text-center py-3 px-4 shadow-md rounded">
          <h2 className="text-base md:text-xl font-bold tracking-widest uppercase">
            LKD KABUPATEN BOYOLALI
          </h2>
        </div>

        {/* Teks Penjelasan / Tupoksi LKD */}
        <div className="w-full bg-white rounded-lg shadow-xl border border-gray-200 p-6 md:p-10 text-justify text-sm md:text-base leading-relaxed text-gray-700 space-y-4">
          <p>{lkdContent.descParagraph1}</p>
          <p>{lkdContent.descParagraph2}</p>
          <p className="font-semibold">{lkdContent.descParagraph3}</p>
          <ul className="list-disc pl-6 space-y-2">
            {lkdContent.tugasList.map((item, idx) => (
              <li key={idx} className="pl-1">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* HUBUNGI KAMI */}
        <div className="w-full bg-[#4cbbe1] text-white text-center py-3 px-4 shadow-md rounded mt-4">
          <h2 className="text-base md:text-xl font-bold tracking-widest uppercase">
            HUBUNGI KAMI
          </h2>
        </div>

        {/* Kotak Alamat & Map Google */}
        <div className="w-full bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Sisi Kiri: Map Google */}
          <div className="w-full h-[300px] lg:h-full min-h-[300px] bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.273180479155!2d110.59600000000001!3d-7.5342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzInMDMuMSJTIDExMMKwMzUnNDUuNiJF!5e0!3m2!1sid!2sid!4v1718978400000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Lokasi Perpusda LKD Boyolali"
            ></iframe>
          </div>

          {/* Sisi Kanan: Detail Kontak Utama */}
          <div className="p-6 md:p-8 flex flex-col justify-center bg-gray-50">
            <div>
              <h3 className="font-bold text-gray-800 text-base md:text-lg uppercase tracking-wide border-b-2 border-[#4cbbe1] pb-2 mb-4">
                LEMBAGA KEARSIPAN DAERAH KABUPATEN BOYOLALI
              </h3>
              <p className="text-xs md:text-sm text-gray-600 font-bold leading-relaxed uppercase">
                DINAS KEARSIPAN DAN PERPUSTAKAAN KABUPATEN BOYOLALI <br />
                <span className="font-normal normal-case block mt-2 text-gray-500">
                  Alamat: Jalan Pahlawan Nomor 162 Grahagading, Boyolali,
                  Provinsi Jawa Tengah 57316
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* 4. SEKSI MEDIA SOSIAL */}
        <div className="w-full border-t-2 border-b-2 border-gray-400/40 my-2 overflow-hidden">
          {/* Header Pita Media Sosial */}
          <div className="bg-[#4cbbe1] text-white text-center py-2.5 px-4 shadow-sm">
            <h2 className="text-base md:text-xl font-bold tracking-[0.2em] uppercase">
              MEDIA SOSIAL
            </h2>
          </div>

          {/* Container Grid Ikon Bulat Bermotif */}
          <div
            className="py-12 px-6 flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24 bg-cover bg-repeat"
            style={{
              backgroundImage: "url('/background.png')",
              backgroundSize: "550px",
            }}
          >
            {/* Website */}
            <a
              href={lkdContent.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white text-3xl md:text-4xl shadow-md group-hover:scale-105 transition-transform">
                🌐
              </div>
              <span className="font-bold text-gray-700 text-xs mt-3 uppercase tracking-wider">
                WEBSITE
              </span>
              <span className="text-[11px] md:text-xs text-gray-500 font-medium lowercase truncate max-w-[160px]">
                {lkdContent.links.website.replace("https://", "")}
              </span>
            </a>

            {/* E-Mail */}
            <a
              href={lkdContent.links.email}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-900 flex items-center justify-center text-white text-3xl md:text-4xl shadow-md group-hover:scale-105 transition-transform">
                ✉️
              </div>
              <span className="font-bold text-gray-700 text-xs mt-3 uppercase tracking-wider">
                E-MAIL
              </span>
              <span className="text-[11px] md:text-xs text-gray-500 font-medium lowercase truncate max-w-[160px]">
                {lkdContent.links.email.replace("mailto:", "")}
              </span>
            </a>

            {/* Instagram */}
            <a
              href={lkdContent.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-amber-500 via-purple-600 to-indigo-600 flex items-center justify-center text-white text-3xl md:text-4xl shadow-md group-hover:scale-105 transition-transform">
                📷
              </div>
              <span className="font-bold text-gray-700 text-xs mt-3 uppercase tracking-wider">
                INSTAGRAM
              </span>
              <span className="text-[11px] md:text-xs text-gray-500 font-medium lowercase truncate max-w-[160px]">
                @dinasarpus_boyolali
              </span>
            </a>

            {/* TikTok */}
            <a
              href={lkdContent.links.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black flex items-center justify-center text-white text-3xl md:text-4xl shadow-md group-hover:scale-105 transition-transform">
                🎵
              </div>
              <span className="font-bold text-gray-700 text-xs mt-3 uppercase tracking-wider">
                TIKTOK
              </span>
              <span className="text-[11px] md:text-xs text-gray-500 font-medium lowercase truncate max-w-[160px]">
                @dinasarpus_boyolali
              </span>
            </a>
          </div>
        </div>
      </main>

      {/* 5. SEKSI LOGO & VISITOR STATISTIK */}
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

      {/* 6. FOOTER HAK CIPTA */}
      <footer className="bg-[#222222] text-[#bbbbbb] text-center p-6 text-sm relative z-10">
        <p>
          © 2026 Lembaga Kearsipan Daerah Kabupaten Boyolali. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
}
 