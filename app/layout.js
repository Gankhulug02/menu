import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Menu',
  description: 'Created by Etoyaa',
  keywords: [
    'mchicken',
    'larva',
    'larva chicken',
    'chicken',
    'darkhan chicken',
    'шарсан тахиа',
    'дархан тахиа',
    'түргэн хоол',
    'дархан түргэн хоол',
  ],
  metadataBase: new URL('https://menu-eosin.vercel.app/'),
  openGraph: {
    metadataBase: new URL('https://menu-eosin.vercel.app/'),
    images: {
      url: '/images/menu-1.jpeg',
      width: 1200,
      height: 627,
      alt: 'menu',
    },
    twitter: {
      card: 'summary_large_image',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
