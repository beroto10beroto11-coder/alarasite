import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import SharedHeader from "@/components/SharedHeader";
export default function CheckInPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SharedHeader activePage="checkin" />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center"> Online Check-In</h1>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Welcome to Sweet Escape Aparthotel</h2>
            <p className="text-gray-700 mb-4">
              Save time on arrival by completing your  Check-In online  . Simply enter your
              reservation details below.
            </p>
          </div>

          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6"> Check-In Information  </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Reservation Number</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Enter your reservation number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Last name on reservation"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2"> Check-In Date  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Expected Arrival Time</label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 text-lg font-medium hover:bg-gray-800 transition"
              >
                Start Check-In 
              </button>
            </form>
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Check-In  Guidelines</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Standard Check-In time: 2:00 PM</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Early Check-In is subject to availability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Please have your ID and booking confirmation ready</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Contact us if you expect to arrive after 10:00 PM</span>
              </li>
            </ul>
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
                <a href="https://www.instagram.com/thesweetescapefethiye/" target="_blank" rel="noopener noreferrer">
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
