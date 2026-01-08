
import React from 'react';

const TeacherProfiles: React.FC = () => {
  const teachers = [
    { 
      name: "한민우 원장", 
      subject: "MATHEMATICS", 
      exp: "연세대 이학 학사 | 대형 학원 수석 강사 출신", 
      bio: "수학은 암기가 아닙니다. 원리에서 시작해 킬러 문항까지 스스로 풀어내는 루틴을 완성합니다.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
    },
    { 
      name: "이수진 팀장", 
      subject: "ENGLISH / KOREAN", 
      exp: "고려대 영문 학사 | 수능 1등급 제조기", 
      bio: "언어는 습관입니다. 지문을 꿰뚫어 보는 압도적인 독해력을 통해 내신과 수능을 평정합니다.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    },
    { 
      name: "최영훈 선생님", 
      subject: "SCIENCE / STRATEGY", 
      exp: "서울대 교육 전공 | 입시 전략 전문가", 
      bio: "과학 개념의 시각화로 고난도 문항을 정복합니다. 학습 동기 부여와 멘탈 관리의 스페셜리스트.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="teachers" className="py-32 bg-[#002b5c] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-28">
          <h2 className="text-[#c5a059] font-bold tracking-[0.4em] text-[11px] mb-4 uppercase">The Experts</h2>
          <p className="text-4xl lg:text-5xl font-light serif-font leading-tight">
            전문성의 깊이가<br />
            <span className="font-bold">최종 합격의 차이</span>입니다
          </p>
          <div className="w-16 h-[1px] bg-[#c5a059] mx-auto mt-10"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
          {teachers.map((t, idx) => (
            <div key={idx} className="group cursor-default">
              <div className="relative overflow-hidden mb-12 aspect-[3/4] bg-slate-800 shadow-2xl">
                <img 
                  src={t.img} 
                  alt={t.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                />
                {/* 하단 페이드 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c] via-transparent to-transparent opacity-40"></div>
                {/* 테두리 포인트 */}
                <div className="absolute inset-0 border-[0px] border-[#c5a059]/0 group-hover:border-[15px] group-hover:border-white/5 transition-all duration-500"></div>
              </div>
              <div>
                <span className="text-[#c5a059] text-[11px] font-bold tracking-[0.3em] mb-4 block uppercase">{t.subject}</span>
                <h3 className="text-3xl font-bold mb-5 tracking-tight">{t.name}</h3>
                <div className="w-10 h-[1px] bg-[#c5a059] mb-5"></div>
                <p className="text-white/50 text-xs mb-5 font-medium tracking-wide leading-relaxed">{t.exp}</p>
                <p className="text-white/80 text-sm leading-relaxed serif-font font-light italic">"{t.bio}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherProfiles;
