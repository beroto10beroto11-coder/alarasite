import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <Image 
        src="/images/logo.png" 
        alt="The Sweet Escape Logo" 
        width={120}    // Orijinal logonun genişliğiyle aynı tuttum
        height={40}    // Yüksekliği görseline göre otomatik ayarlayacaktır
        className="object-contain"
        priority      // Logonun hızlı yüklenmesi için önemli
      />
    </div>
  );
}