import Image from "next/image";
import Link from "next/link";
import SharedHeader from "@/components/SharedHeader";

export default function FethiyePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* SharedHeader — activePage="fethiye" ile aktif sekme vurgulanır */}
      <SharedHeader activePage="fethiye" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="relative h-[500px]">
            <Image
              src="https://idsb.tmgrup.com.tr/ly/uploads/images/2024/03/15/319736.jpg"
              alt="Ölüdeniz Blue Lagoon"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center bg-black text-white p-12">
            <h2 className="text-4xl font-bold mb-4">FETHİYE</h2>
            <h3 className="text-2xl mb-6">The Pearl of Turkey's Turquoise Coast</h3>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative h-[400px] mb-8">
            <Image
              src="https://c8.alamy.com/comp/2BGGXFG/oludeniz-blue-flag-beach-is-popular-tourist-destination-blue-lagoon-with-clear-calm-sea-in-turquoise-coast-of-southwestern-turkey-2BGGXFG.jpg"
              alt="Ölüdeniz Beach"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Fethiye is a stunning coastal town located in southwestern Turkey, renowned for its natural beauty,
            crystal-clear turquoise waters, and rich historical heritage. Nestled between dramatic mountains and
            the Mediterranean Sea, Fethiye offers visitors an unforgettable blend of ancient ruins, pristine beaches,
            and breathtaking landscapes.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            From the famous Blue Lagoon of Ölüdeniz to the mysterious Butterfly Valley and the haunting ruins of
            Kayaköy, Fethiye is a paradise for nature lovers, adventure seekers, and history enthusiasts alike.
          </p>
        </div>

        {/* Ölüdeniz Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold mb-4">Ölüdeniz - The Blue Lagoon</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Ölüdeniz is home to one of the most photographed beaches in the world, famous for its stunning
                turquoise waters and pristine white sands. The Blue Lagoon is a protected natural reserve where
                the calm, shallow waters create a perfect haven for swimming and relaxation.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                The beach is also a world-renowned paragliding destination, with enthusiasts launching from the
                nearby Babadağ Mountain to soar above this spectacular coastline.
              </p>
            </div>
            <div className="relative h-[400px] order-1 lg:order-2">
              <Image
                src="https://www.shutterstock.com/image-photo/blue-lagoon-oludeniz-beach-aerial-600nw-2505643315.jpg"
                alt="Ölüdeniz Aerial View"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Butterfly Valley Section */}
        <div className="mb-16 bg-gray-50 p-8 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px]">
              <Image
                src="https://www.powerandmotoryacht.com/wp-content/uploads/tempest/MTc2MjMzMTYwMjEwNjU1MTEx_00-fethiye-butterfly-valley.jpg"
                alt="Butterfly Valley"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Butterfly Valley</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Kelebekler Vadisi, or Butterfly Valley, is a hidden paradise accessible only by boat or a challenging
                hiking trail. Named after the numerous butterfly species that inhabit the area, this secluded cove
                is surrounded by dramatic 350-meter-high cliffs.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                The valley features a pristine beach, crystal-clear waters, and a stunning waterfall nestled within
                lush greenery. It's a perfect escape for those seeking tranquility and natural beauty.
              </p>
            </div>
          </div>
        </div>

        {/* Kayaköy Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold mb-4">Kayaköy - The Ghost Village</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Kayaköy is an abandoned Greek village that stands as a haunting reminder of the population exchange
                between Greece and Turkey in 1923. Once home to thousands of Greek Orthodox residents, the village
                now consists of hundreds of empty stone houses and churches scattered across the hillside.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                This atmospheric site offers visitors a glimpse into the past, with its crumbling buildings and
                peaceful ambiance creating a unique and contemplative experience.
              </p>
            </div>
            <div className="relative h-[400px] order-1 lg:order-2">
              <Image
                src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/03/31/16/fethiye_corbis.jpg"
                alt="Kayaköy Ghost Village"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Additional Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="relative h-[300px]">
            <Image
              src="https://visitturkey.in/wp-content/uploads/2024/07/butterfly-valley-turkey.webp"
              alt="Butterfly Valley Scenic"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative h-[300px]">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Kayak%C3%B6y_Turkey.jpg"
              alt="Kayaköy Aerial View"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Why Visit Fethiye */}
        <div className="max-w-4xl mx-auto bg-[#f5f5f5] p-12 rounded-lg">
          <h3 className="text-3xl font-bold mb-6 text-center">Why Visit Fethiye?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-3">Natural Wonders</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• World-famous Blue Lagoon at Ölüdeniz</li>
                <li>• Spectacular Butterfly Valley</li>
                <li>• 12 Islands boat tours</li>
                <li>• Babadağ Mountain for paragliding</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Cultural Heritage</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Ancient Lycian rock tombs</li>
                <li>• Kayaköy ghost village</li>
                <li>• Tlos ancient city</li>
                <li>• Fethiye Museum with archaeological treasures</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
                  <Image src="/images/instagram.png" alt="Instagram" width={32} height={32} />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
