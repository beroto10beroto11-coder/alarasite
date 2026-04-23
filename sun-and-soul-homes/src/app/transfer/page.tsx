import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import SharedHeader from "@/components/SharedHeader";
export default function TransferPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SharedHeader activePage="transfer" />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Airport Transfer Service</h1>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Comfortable & Reliable</h2>
              <p className="text-gray-700 mb-4">
                Start your vacation stress-free with our professional airport transfer service.
                We provide comfortable, air-conditioned vehicles and experienced drivers.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Direct transfer from Dalaman Airport to Sweet Escape Aparthotel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Professional drivers with local knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Flight monitoring service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Complimentary bottled water</span>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Book Your Transfer</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Transfer Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400">
                    <option>Airport to Hotel</option>
                    <option>Hotel to Airport</option>
                    <option>Round Trip</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Pickup Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Pickup Time</label>
                    <input
                      type="time"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Number of Passengers</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400">
                    <option>1-3 passengers</option>
                    <option>4-6 passengers</option>
                    <option>7+ passengers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Flight Number (Optional)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="e.g. TK1234"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 text-lg font-medium hover:bg-gray-800 transition"
                >
                  Request Transfer
                </button>
              </form>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Transfer Prices</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg text-center shadow">
                <h4 className="text-lg font-semibold mb-2">Standard Car</h4>
                <p className="text-3xl font-bold text-orange-500 mb-2">€35</p>
                <p className="text-gray-600 text-sm">1-3 passengers</p>
                <p className="text-gray-600 text-sm">One way</p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center shadow border-2 border-orange-500">
                <div className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-2">
                  Most Popular
                </div>
                <h4 className="text-lg font-semibold mb-2">Minivan</h4>
                <p className="text-3xl font-bold text-orange-500 mb-2">€50</p>
                <p className="text-gray-600 text-sm">4-6 passengers</p>
                <p className="text-gray-600 text-sm">One way</p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center shadow">
                <h4 className="text-lg font-semibold mb-2">Minibus</h4>
                <p className="text-3xl font-bold text-orange-500 mb-2">€75</p>
                <p className="text-gray-600 text-sm">7+ passengers</p>
                <p className="text-gray-600 text-sm">One way</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 text-sm">
              * Round trip bookings receive a 10% discount
            </p>
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
