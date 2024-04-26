import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Loading = () => {
  return (
    <div className="min-h-52 w-80 mx-auto" style={{ height: '800px' }}>
      <Skeleton baseColor="#03c04a" style={{ height: '100%' }} />
    </div>
  );
};

export default Loading;
