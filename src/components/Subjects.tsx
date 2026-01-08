
import React from 'react';

const Subjects: React.FC = () => {
  const subjects = [
    { 
      name: "KOREAN", 
      title: "국어 : 문장 분석의 힘", 
      desc: "단순 요약이 아닌 글의 구조적 독해법을 훈련하여 수능과 내신을 동시에 잡습니다." 
    },
    { 
      name: "ENGLISH", 
      title: "영어 : 절대적 문해력", 
      desc: "단어 나열식 해석에서 벗어나 논리적 관계를 파악하는 정석 영어를 지도합니다." 
    },
    { 
      name: "MATH", 
      title: "수학 : 사고의 루틴", 
      desc: "문제 풀이 양에 치중하지 않고, 하나의 문제를 풀더라도 개념의 확장이 일어나는 사고법을 전수합니다." 
    },
    { 
      name: "SCIENCE", 
      title: "과학 : 개념의 시각화", 
      desc: "어려운 과학 현상을 직관적으로 이해시키고 서술형 문제에 완벽히 대응하는 정교한 답안 작성을 연습합니다." 
    }
  ];

  return (
    <section id="subjects" className="py-32 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-[#002b5c] font-black text-6xl opacity-5 mb-[-2rem] tracking-tighter uppercase">Curriculum</h2>
          <p className="text-3xl font-bold text-[#002b5c] serif-font relative z-10">과목별 전문 커리큘럼</p>
          <div className="w-12 h-1 bg-[#c5a059] mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {subjects.map((sub, idx) => (
            <div key={idx} className="bg-white p-12 flex flex-col md:flex-row gap-10 items-start hover:shadow-2xl transition-all duration-500 border border-slate-100 group">
              <div className="flex flex-col items-center">
                <span className="text-[#002b5c] font-black text-4xl mb-2 opacity-10 group-hover:opacity-100 transition-opacity serif-font">0{idx+1}</span>
                <div className="h-12 w-[1px] bg-slate-200"></div>
              </div>
              <div>
                <h4 className="text-[#c5a059] text-[11px] font-black tracking-[0.3em] mb-3 uppercase">{sub.name}</h4>
                <h3 className="text-xl font-bold text-[#002b5c] mb-6">{sub.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed serif-font">{sub.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;
