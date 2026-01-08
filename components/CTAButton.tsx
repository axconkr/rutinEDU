
import React from 'react';

const CTAButton: React.FC = () => {
  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-4">
      <a 
        href="https://pf.kakao.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#fae100] text-[#3c1e1e] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group relative"
      >
        <span className="text-2xl font-bold">TALK</span>
        <span className="absolute right-full mr-4 bg-white px-3 py-1.5 rounded-md text-[11px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">카톡 실시간 상담</span>
      </a>
      <a 
        href="tel:02-1234-5678"
        className="bg-[#002b5c] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group relative"
      >
        <span className="text-xl">📞</span>
        <span className="absolute right-full mr-4 bg-white text-[#002b5c] px-3 py-1.5 rounded-md text-[11px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none text-black">전화 상담 예약</span>
      </a>
    </div>
  );
};

export default CTAButton;
