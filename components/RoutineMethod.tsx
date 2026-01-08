
import React from 'react';

const RoutineMethod: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#fdfcfb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 relative">
            {/* 장식용 원형 배경 */}
            <div className="absolute -top-12 -left-12 w-72 h-72 bg-[#f2efeb] -z-10 rounded-full"></div>
            
            <div className="relative z-10 rounded-sm overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700" 
                alt="Intensive Study Session" 
              />
            </div>
            
            {/* 부유하는 정보 박스 (새움 스타일 포인트) */}
            <div className="absolute -bottom-10 -right-10 bg-[#002b5c] p-12 text-white z-20 hidden md:block shadow-2xl">
              <p className="text-5xl font-black mb-1 serif-font text-[#c5a059]">03</p>
              <p className="text-[10px] tracking-[0.3em] font-bold text-white/60 uppercase">Step System</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-[#c5a059] font-bold tracking-[0.3em] text-xs mb-6 uppercase">The Core Philosophy</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-[#002b5c] serif-font leading-[1.2] mb-10">
              막연한 의지가 아닌,<br />
              <span className="text-[#c5a059]">지탱해주는 시스템</span>의 힘
            </h3>
            <p className="text-slate-600 mb-14 text-lg leading-relaxed serif-font">
              반짝 열심히 하는 것은 누구나 가능합니다. 하지만 꾸준히 하는 것은 오직 루틴만이 가능하게 합니다. 
              루틴에듀는 아이들의 학습 일과를 과학적으로 설계하여, 지치지 않는 성장의 근육을 만듭니다.
            </p>
            
            <div className="grid gap-12">
              {[
                { t: "밀착 메타인지 진단", d: "아이의 현재 수준과 약점을 데이터로 정확히 파악하여 개인별 학습 지도를 시작합니다." },
                { t: "1:1 소수정예 과외식 수업", d: "3인의 전문가가 빈틈없는 이해를 위해 한 명 한 명에게 집중하는 고밀도 수업을 진행합니다." },
                { t: "데일리 학부모 리포트", d: "오늘의 진도와 이해도를 매일 전송하여 학부모님과 원활한 소통을 유지합니다." }
              ].map((item, i) => (
                <div key={i} className="flex gap-10 items-start group">
                  <div className="text-4xl font-black text-[#c5a059]/10 group-hover:text-[#c5a059] transition-all duration-300 serif-font italic shrink-0">0{i+1}</div>
                  <div className="border-l border-slate-100 pl-8 transition-colors group-hover:border-[#c5a059]/30">
                    <h4 className="font-bold text-[#002b5c] text-xl mb-3">{item.t}</h4>
                    <p className="text-slate-500 leading-relaxed text-[15px]">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoutineMethod;
