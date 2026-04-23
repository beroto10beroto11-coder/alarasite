"use client";

import Image from "next/image";
import Link from "next/link";
import SharedHeader from "@/components/SharedHeader";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SharedHeader activePage="contact" />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 uppercase tracking-tighter">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold border-b pb-2">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2 text-gray-800">
                  <span className="text-2xl">📍</span> Address
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sweet Escape Aparthotel<br />
                  Atatürk Caddesi, No:138/1<br />
                  48300 Fethiye, Muğla / Turkey
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2 text-gray-800">
                  <span className="text-2xl">📞</span> Phone
                </h3>
                <p className="text-gray-600">
                  <br />
                  +90 540 617 20 16
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2 text-gray-800">
                  <span className="text-2xl">✉️</span> Email
                </h3>
                <p className="text-gray-600">alara@thesweetescapefethiye.com</p>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2 text-gray-800">
                  <span className="text-2xl">🌐</span> Social Media
                </h3>
                <div className="flex gap-4 mt-3">
                  <a href="https://www.instagram.com/thesweetescapefethiye/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 24 24" fill="black">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none transition" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none transition" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none transition" placeholder="How can we help you?" />
              </div>
              <button type="submit" className="w-full bg-black text-white py-4 font-bold rounded-lg hover:bg-gray-800 transition shadow-lg">
                SEND MESSAGE
              </button>
            </form>
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