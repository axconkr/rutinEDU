
import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden border border-slate-100">
          <div className="lg:w-1/3 p-12 lg:p-20 bg-[#002b5c] text-white">
            <h2 className="text-[#c5a059] font-bold tracking-[0.3em] text-[10px] mb-12 uppercase">Contact Info</h2>
            <h3 className="text-3xl font-bold mb-16 serif-font leading-tight">상담 및 방문 안내</h3>
            
            <div className="space-y-14">
              <div className="flex gap-8 group">
                <span className="text-[#c5a059] text-xl group-hover:scale-110 transition-transform">📍</span>
                <div>
                  <h4 className="font-bold text-[11px] text-[#c5a059] uppercase mb-3 tracking-[0.2em]">Address</h4>
                  <p className="text-white/90 text-[15px] font-light leading-relaxed">서울특별시 은평구 서오릉로 123<br />(구산역 4번 출구 도보 3분)</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <span className="text-[#c5a059] text-xl group-hover:scale-110 transition-transform">📞</span>
                <div>
                  <h4 className="font-bold text-[11px] text-[#c5a059] uppercase mb-3 tracking-[0.2em]">Contact</h4>
                  <p className="text-white/90 text-lg font-bold">02.1234.5678</p>
                  <p className="text-white/40 text-[11px] mt-2 font-medium">평일 14:00 - 22:00 상담 가능</p>
                </div>
              </div>
            </div>
            
            <button className="mt-20 w-full border border-white/20 py-5 text-[11px] font-bold tracking-[0.3em] hover:bg-white hover:text-[#002b5c] transition-all duration-500 uppercase">
              View on Naver Map
            </button>
          </div>
          
          <div className="lg:w-2/3 min-h-[500px] relative bg-[#f0f0f0]">
            {/* 고해상도 도시/건물 이미지 (검증된 ID) */}
            <img 
              src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=1500" 
              alt="Seoul Urban Location" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[40%]"
            />
            {/* 오버레이 효과 */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
            
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="bg-white/95 backdrop-blur-md p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] text-center border-t-4 border-[#c5a059] max-w-sm animate-fadeIn">
                <p className="text-[#002b5c] font-black text-2xl mb-3 serif-font">루틴에듀 은평본원</p>
                <div className="w-8 h-[1px] bg-[#c5a059] mx-auto mb-5"></div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">구산역 도보 3분 거리<br />은평 성모 병원 인근</p>
                <div className="flex items-center justify-center gap-2 text-[#c5a059]">
                   <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full animate-pulse"></span>
                   <span className="text-[10px] font-bold tracking-widest uppercase">Parking Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
