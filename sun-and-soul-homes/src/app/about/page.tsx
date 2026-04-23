"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SharedHeader from "@/components/SharedHeader";

export default function AboutPage() {
  const [lang, setLang] = useState("tr");

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader activePage="about" />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Language Toggle */}
          <div className="flex justify-center mb-8">
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

          {/* Title */}
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 uppercase tracking-tight">
            {lang === "tr" ? "Hakkımızda" : "About Us"}
          </h1>

          {/* Content */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-sm mb-12">
            {lang === "tr" ? (
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  The Sweet Escape Fethiye, Ölüdeniz'e en yakın yerlerden biridir. Ölüdeniz Plajı'na arabayla sadece 6 dakika, Bar Street'e ise 3 dakikalık yürüme mesafesindedir. Babadağ'a ... mesafededir. Fethiye merkeze ... mesafededir.
                </p>
                <p>
                  Tesisimizde havuz, kablosuz internet ve bagaj odası bulunmaktadır.
                </p>
                <p>
                  Dairelerimiz üç adet 2+1, dört adet 1+1 ve üç stüdyo daireden oluşmaktadır.
                </p>
              </div>
            ) : (
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  The Sweet Escape Fethiye is one of the closest places to Ölüdeniz. It only takes 6 minutes by car to get to Ölüdeniz Beach and a 3 minute walk from Bar Street. ... away from the Mountain Babadağ. ... From the center of Fethiye.
                </p>
                <p>
                  Our facilities include a pool, wireless internet, and a baggage room.
                </p>
                <p>
                  Our apartments include three 2+1, four 1+1 and three studio apartments.
                </p>
              </div>
            )}
          </div>

          {/* Logos Section */}
          <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
            {/* Sol Logo - Bakanlık */}
            <div className="flex-shrink-0">
              <Image 
                src="/images/bakanlık.png" 
                alt="Ministry Logo" 
                width={120} 
                height={120}
                className="object-contain"
              />
            </div>

            {/* Orta Logo - Sweet Escape */}
            <div className="flex-shrink-0">
              <Image 
                src="/images/logo.png" 
                alt="Sweet Escape Logo" 
                width={150} 
                height={150}
                className="object-contain"
              />
            </div>

            {/* Sağ Logo - TR */}
            <div className="flex-shrink-0">
              <Image 
                src="/images/tr.png" 
                alt="Turkey Logo" 
                width={120} 
                height={120}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-12 mt-16">
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
                <a href="https://www.instagram.com/thesweetescapefethiye/" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition">
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