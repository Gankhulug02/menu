import React from 'react';
import Link from 'next/link';
import { fetchData } from '../api/fetchData';

const Product = async () => {
  const a = await fetchData();

  return (
    <div>
      <Link href={'/'}>home</Link>
    </div>
  );
};

export default Product;
