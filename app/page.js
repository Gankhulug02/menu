import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-100 min-h-screen bg-black d-flex justify-between py-6 md:px-[200px] ">
      <p className="left-0 top-0 sticky">Tsoomoo</p>
      <Image className="w-full object-contain aspect-[1131/1600]" width={1131} height={1600} src={"https://marketplace.canva.com/EAFKfB87pN0/1/0/1131w/canva-brown-and-black-illustration-fast-food-menu-y8NpubROdFc.jpg"} alt="menu"/>
    </div>
  );
}
