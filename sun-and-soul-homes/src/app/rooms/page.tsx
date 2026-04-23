import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import SharedHeader from "@/components/SharedHeader";
export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SharedHeader activePage="rooms" />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Book Your Room</h1>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            Experience luxury and comfort at Sweet Escape Aparthotel. Our boutique accommodations offer
            stunning views, modern amenities, and authentic Turkish hospitality.
          </p>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              Our online booking system is currently under development.
              Please contact us directly to make a reservation.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="font-semibold text-lg">Sweet Escape Aparthotel</h3>
              <p className="text-sm text-gray-600">Ölüdeniz, Atatürk Caddesi, No:138/1, 48300 Fethiye/Muğla</p>
              <p className="text-sm text-gray-600 mt-2">
                <br />
                +90 212 255 40 50
              </p>
              <p className="text-sm text-gray-600">alara@thesweetescapefethiye.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Link href="/contact" className="bg-black text-white px-8 py-3 mb-4 hover:bg-gray-800 transition">
                CONTACT US
              </Link>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/thesweetescapefethiye/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                 >
                 <Image 
                  src="/images/instagram.png" 
                  alt="Instagram"
                  width={32}
                  height={32}
                 />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
