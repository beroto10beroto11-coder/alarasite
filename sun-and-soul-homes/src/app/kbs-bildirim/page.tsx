"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";

interface GuestData {
  fullName: string;
  phone: string;
  email: string;
  nationality: string;
  idDocument: File | null;
}

export default function KBSBildirimPage() {
  const [guestCount, setGuestCount] = useState<number>(1);
  const [guests, setGuests] = useState<GuestData[]>([
    { fullName: "", phone: "", email: "", nationality: "", idDocument: null }
  ]);
  const [specialNote, setSpecialNote] = useState("");

  const handleGuestCountChange = (count: number) => {
    setGuestCount(count);
    const newGuests = Array.from({ length: count }, (_, i) =>
      guests[i] || { fullName: "", phone: "", email: "", nationality: "", idDocument: null }
    );
    setGuests(newGuests);
  };

  const handleGuestChange = (index: number, field: keyof GuestData, value: string) => {
    const newGuests = [...guests];
    newGuests[index] = { ...newGuests[index], [field]: value };
    setGuests(newGuests);
  };

  const handleFileChange = (index: number, file: File | null) => {
    const newGuests = [...guests];
    newGuests[index] = { ...newGuests[index], idDocument: file };
    setGuests(newGuests);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi buraya eklenecek (backend entegrasyonu)
    console.log("Form Data:", { guests, specialNote });
    alert("Form başarıyla gönderildi! (Backend entegrasyonu yapılacak)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            
            <div className="flex-1 flex justify-center">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div className="w-20 h-20"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Form Title */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 rounded-t-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-center tracking-wide">
            ZORUNLU MİSAFİR KİMLİK BİLDİRİM FORMU
          </h1>
          <p className="text-center mt-3 text-amber-100 text-sm">
            Yasal zorunluluk gereği tüm misafir bilgilerinin eksiksiz doldurulması gerekmektedir
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-b-lg p-8">
          {/* Guest Count Selection */}
          <div className="mb-8 pb-6 border-b-2 border-amber-200">
            <label className="block text-lg font-semibold mb-3 text-gray-800">
              Misafir Sayısı <span className="text-red-600">*</span>
            </label>
            <select
              value={guestCount}
              onChange={(e) => handleGuestCountChange(Number(e.target.value))}
              className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-lg"
              required
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num} Misafir
                </option>
              ))}
            </select>
          </div>

          {/* Guest Information Fields */}
          {guests.map((guest, index) => (
            <div key={index} className="mb-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-2 border-amber-200">
              <h3 className="text-xl font-bold mb-4 text-amber-800 border-b-2 border-amber-300 pb-2">
                {index + 1}. Misafir Bilgileri
              </h3>

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    İsim Soyisim <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={guest.fullName}
                    onChange={(e) => handleGuestChange(index, "fullName", e.target.value)}
                    className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Adınız ve Soyadınız"
                    required
                  />
                </div>

                {/* Phone and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Telefon Numarası <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      value={guest.phone}
                      onChange={(e) => handleGuestChange(index, "phone", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="+90 5XX XXX XX XX"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      E-posta Adresi <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      value={guest.email}
                      onChange={(e) => handleGuestChange(index, "email", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="ornek@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Nationality */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Uyruk (Nationality) <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={guest.nationality}
                    onChange={(e) => handleGuestChange(index, "nationality", e.target.value)}
                    className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  >
                    <option value="">Uyruk Seçiniz</option>
                    <option value="TR">Türkiye</option>
                    <option value="DE">Almanya (Germany)</option>
                    <option value="US">Amerika (USA)</option>
                    <option value="GB">İngiltere (UK)</option>
                    <option value="FR">Fransa (France)</option>
                    <option value="NL">Hollanda (Netherlands)</option>
                    <option value="RU">Rusya (Russia)</option>
                    <option value="SA">Suudi Arabistan (Saudi Arabia)</option>
                    <option value="AE">BAE (UAE)</option>
                    <option value="OTHER">Diğer (Other)</option>
                  </select>
                </div>

                {/* ID/Passport Upload */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Kimlik/Pasaport Fotokopisi <span className="text-red-600">*</span>
                  </label>
                  <div className="border-2 border-dashed border-amber-400 rounded-lg p-4 bg-white hover:bg-amber-50 transition">
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileChange(index, e.target.files?.[0] || null)}
                      className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-600 file:text-white hover:file:bg-amber-700 cursor-pointer"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      {guest.nationality === "TR"
                        ? "Türk vatandaşları için Kimlik (ön-arka)"
                        : "Yabancı misafirler için Pasaport sayfası"
                      }
                    </p>
                    {guest.idDocument && (
                      <p className="text-sm text-green-600 mt-2 font-medium">
                        ✓ Dosya seçildi: {guest.idDocument.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Special Note */}
          <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
            <label className="block text-lg font-semibold mb-3 text-gray-800">
              Özel Durum Notu (İsteğe Bağlı)
            </label>
            <textarea
              value={specialNote}
              onChange={(e) => setSpecialNote(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Doğum günü, evlilik yıldönümü, özel diyet, erken Check-In Guide talebi vb. notlarınızı buraya yazabilirsiniz..."
            />
          </div>

          {/* Legal Notice */}
          <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
            <p className="text-sm text-gray-700 flex items-start gap-2">
              <span className="text-yellow-600 text-lg">⚠️</span>
              <span>
                <strong>Yasal Bilgilendirme:</strong> Verileriniz 5651 sayılı kanun ve ilgili yönetmelikler
                gereği yasal zorunluluk kapsamında Emniyet Genel Müdürlüğü&apos;ne (KBS - Konaklama Bilgi Sistemi)
                iletilecektir. Kişisel verileriniz KVKK kapsamında korunmaktadır.
              </span>
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-6 rounded-lg text-lg font-bold hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            BİLDİRİMİ TAMAMLA
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Form gönderildikten sonra tarafınıza onay e-postası gönderilecektir.
          </p>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            © 2024 Sweet Escape Aparthotel - Ölüdeniz, Atatürk Caddesi, No:138/1, 48300 Fethiye/Muğla
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Tüm hakları saklıdır. KVKK uyumlu güvenli veri işleme.
          </p>
        </div>
      </footer>
    </div>
  );
}
