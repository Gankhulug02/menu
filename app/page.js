import Image from 'next/image';
import { fetchData } from './api/fetchData';
import Link from 'next/link';

async function getProductDatas() {
  const banners = await fetchData();
  return banners;
}
export default async function Home() {
  const productsData = getProductDatas();

  const [products] = await Promise.all([productsData]);

  const imageData = ['/images/menu-1.jpeg', '/images/menu-2.jpeg'];
  return (
    <div className="relative w-100 min-h-screen bg-black flex flex-col gap-3 py-6 md:px-[200px] ">
      {imageData.map((imgPath, index) => {
        return (
          <div key={`menu-${index + 1}`}>
            <Link href={'/product'}>Product</Link>
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
