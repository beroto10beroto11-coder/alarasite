import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import SharedHeader from "@/components/SharedHeader";
export default function GalleryPage() {
  const images = [
    {
      src: "https://idsb.tmgrup.com.tr/ly/uploads/images/2024/03/15/319736.jpg",
      alt: "Ölüdeniz Blue Lagoon",
    },
    {
      src: "https://www.powerandmotoryacht.com/wp-content/uploads/tempest/MTc2MjMzMTYwMjEwNjU1MTEx_00-fethiye-butterfly-valley.jpg",
      alt: "Butterfly Valley",
    },
    {
      src: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/03/31/16/fethiye_corbis.jpg",
      alt: "Kayaköy Ghost Village",
    },
    {
      src: "https://c8.alamy.com/comp/2BGGXFG/oludeniz-blue-flag-beach-is-popular-tourist-destination-blue-lagoon-with-clear-calm-sea-in-turquoise-coast-of-southwestern-turkey-2BGGXFG.jpg",
      alt: "Ölüdeniz Beach",
    },
    {
      src: "https://visitturkey.in/wp-content/uploads/2024/07/butterfly-valley-turkey.webp",
      alt: "Butterfly Valley Scenic",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Kayak%C3%B6y_Turkey.jpg",
      alt: "Kayaköy Aerial View",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      
      <SharedHeader activePage="gallery" />
      

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the breathtaking beauty of Fethiye through our curated collection of images
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative h-[300px] overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
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
