
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#002b5c]">
      {/* 배경 이미지 - 학구적인 분위기의 도서관/학원 배경 (검증된 고화질 ID) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Academy Background" 
          className="w-full h-full object-cover opacity-30 grayscale-[20%]"
        />
        {/* 세련된 그라데이션 오버레이 (새움 스타일) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002b5c] via-[#002b5c]/80 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-10 animate-fadeIn">
            <div className="w-12 h-[1px] bg-[#c5a059]"></div>
            <span className="text-[#c5a059] font-bold tracking-[0.4em] text-[11px] uppercase">Eunpyeong Premium Education</span>
          </div>
          
          <h1 className="text-5xl lg:text-[80px] font-light text-white leading-[1.1] mb-10 serif-font">
            성적을 바꾸는<br />
            <span className="font-black text-white">가장 확실한 습관,</span><br />
            <span className="text-[#c5a059] italic">Routine Edu.</span>
          </h1>
          
          <div className="bg-white/5 backdrop-blur-sm p-10 border-l border-white/20 mb-12 max-w-2xl shadow-2xl">
            <p className="text-xl text-white/95 leading-relaxed serif-font font-light">
              "부모님의 불안을 성적 향상의 확신으로 바꿉니다.<br />
              은평구 상위권이 선택한 <br />
              <strong>루틴에듀만의 밀착 관리 시스템</strong>을 만나보세요."
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5">
            <button className="bg-[#c5a059] text-white px-12 py-5 font-bold hover:bg-[#b08d4a] transition-all tracking-widest text-sm shadow-2xl uppercase">
              Free Consulting
            </button>
            <button className="bg-transparent text-white border border-white/30 px-12 py-5 font-bold hover:bg-white/10 transition-all tracking-widest text-sm backdrop-blur-sm uppercase">
              Curriculum
            </button>
          </div>
        </div>
      </div>
      
      {/* 하단 장식 라인 */}
      <div className="absolute bottom-0 right-0 w-1/2 h-[1px] bg-[#c5a059]/30"></div>
    </section>
  );
};

export default Hero;
