import Image from 'next/image';

export default function Home() {
  const imageData = ['/images/menu-1.jpeg', '/images/menu-2.jpeg'];
  return (
    <div className="relative w-100 min-h-screen bg-black flex flex-col gap-3 py-6 md:px-[200px] ">
      {imageData.map((imgPath, index) => {
        return (
          <div key={`menu-${index + 1}`}>
            <Image
              className="w-full object-contain aspect-[1131/1600]"
              width={1131}
              height={1600}
              src={imgPath}
              alt="imgPath"
            />
          </div>
        );
      })}
    </div>
  );
}
