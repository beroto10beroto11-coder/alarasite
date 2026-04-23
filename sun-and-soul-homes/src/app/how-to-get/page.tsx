"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SharedHeader from "@/components/SharedHeader";

export default function HowToGetPage() {
  const [lang, setLang] = useState("tr");

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader activePage="how-to-get" />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h1 className="text-4xl font-black tracking-tight text-gray-900">
              {lang === "tr" ? "NASIL GİDİLİR?" : "HOW TO GET HERE?"}
            </h1>
            
            <div className="flex bg-gray-100 p-1 rounded-xl">
              <button 
                onClick={() => setLang("tr")}
                className={`px-8 py-2 rounded-lg text-xs font-black transition-all ${lang === "tr" ? "bg-black text-white shadow-lg" : "text-gray-400 hover:text-gray-600"}`}
              >
                TÜRKÇE
              </button>
              <button 
                onClick={() => setLang("en")}
                className={`px-8 py-2 rounded-lg text-xs font-black transition-all ${lang === "en" ? "bg-black text-white shadow-lg" : "text-gray-400 hover:text-gray-600"}`}
              >
                ENGLISH
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. SEÇENEK */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">✈️</div>
              <h3 className="text-xl font-bold mb-4 text-blue-900 uppercase">
                {lang === "tr" ? "HAVAŞ + DOLMUŞ" : "HAVAŞ + MINIBUS"}
              </h3>
              <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
                <p>{lang === "tr" 
                  ? "Dalaman Havalimanı'ndan HAVAŞ ile Fethiye Otogar'a (200 TL), oradan 'Ölüdeniz' minibüsüne binin (48 TL)." 
                  : "Take HAVAŞ from Dalaman Airport to Fethiye Bus Station (200 TL), then take the 'Ölüdeniz' minibus (48 TL)."}
                </p>
                <div className="bg-blue-50 p-4 rounded-2xl text-[11px] font-black text-blue-700">
                  {lang === "tr" ? "⏱ TOPLAM: 1.5 SAAT | 💰 250 TL" : "⏱ TOTAL: 1.5 HOURS | 💰 250 TL"}
                </div>
              </div>
            </div>

            {/* 2. SEÇENEK */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">🚗</div>
              <h3 className="text-xl font-bold mb-4 text-green-900 uppercase">
                {lang === "tr" ? "ÖZEL TRANSFER" : "PRIVATE TRANSFER"}
              </h3>
              <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
                <p>{lang === "tr" 
                  ? "Bize uçuş saatinizi bildirin, sizi Dalaman'da karşılayıp kapıdan kapıya doğrudan getirelim." 
                  : "Let us know your flight details; we will meet you at Dalaman and bring you directly door-to-door."}
                </p>
                <div className="bg-green-50 p-4 rounded-2xl text-[11px] font-black text-green-700">
                  {lang === "tr" ? "⏱ 45 DK - 1 SAAT | 💰 3000 TL (€60)" : "⏱ 45 MIN - 1 HOUR | 💰 3000 TL (€60)"}
                </div>
              </div>
            </div>

            {/* 3. SEÇENEK */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">🚖</div>
              <h3 className="text-xl font-bold mb-4 text-yellow-700 uppercase">
                {lang === "tr" ? "TAKSİ İLE" : "BY TAXI"}
              </h3>
              <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
                <p>{lang === "tr" 
                  ? "Havalimanı çıkışındaki taksilerle doğrudan ulaşım sağlayabilirsiniz. Sabit fiyat sormayı unutmayın." 
                  : "You can take a taxi directly from the airport exit. Don't forget to ask for a fixed price."}
                </p>
                <div className="bg-yellow-50 p-4 rounded-2xl text-[11px] font-black text-yellow-700">
                  {lang === "tr" ? "⏱ 45 DK - 1 SAAT | 💰 ~€50" : "⏱ 45 MIN - 1 HOUR | 💰 ~€50"}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-900 rounded-2xl text-center shadow-2xl">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
              {lang === "tr" ? "📍 Otel Adresimiz" : "📍 Our Hotel Address"}
            </p>
            <p className="text-white text-lg font-medium">Atatürk Caddesi, No:138/1, 48300 Fethiye/Muğla</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-xl mb-2 italic">Sweet Escape Aparthotel</h3>
              <p className="text-sm text-gray-500 max-w-xs">Ölüdeniz, Atatürk Caddesi, No:138/1, 48300 Fethiye/Muğla</p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <Link href="/rooms" className="bg-black text-white px-10 py-3 font-bold hover:bg-gray-800 transition shadow-lg tracking-widest text-xs">
                BOOK NOW
              </Link>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/thesweetescapefethiye/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="black">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t text-center">
            <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">© 2026 The Sweet Escape Fethiye - All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}