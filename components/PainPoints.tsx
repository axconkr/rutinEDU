
import React from 'react';

const PainPoints: React.FC = () => {
  const points = [
    { num: "01", title: "수업만 듣고 끝나는 학습", desc: "학습 내용이 자기 것이 되려면 '출력'의 시간이 반드시 필요합니다. 루틴에듀는 스스로 설명하는 시간을 보장합니다." },
    { num: "02", title: "무너진 공부 밸런스", desc: "한 과목에만 치우친 공부는 위험합니다. 국영수과의 완벽한 밸런스로 전체 평균과 입시 경쟁력을 동시에 잡습니다." },
    { num: "03", title: "관리가 안 되는 자습 시간", desc: "방치되는 자습은 시간 낭비일 뿐입니다. 3인의 전문가가 자습의 밀도까지 완벽하게 관리합니다." }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[#c5a059] font-bold tracking-[0.2em] text-xs mb-4">WE UNDERSTAND YOUR ANXIETY</h2>
          <p className="text-3xl lg:text-4xl font-bold text-[#002b5c] serif-font">부모님의 고민, 루틴에듀가 해결책입니다</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-0 border-t border-b border-slate-100">
          {points.map((p, idx) => (
            <div key={idx} className={`p-12 transition-all hover:bg-[#002b5c] group border-r border-slate-100 last:border-r-0`}>
              <span className="text-4xl font-black text-slate-100 group-hover:text-white/10 mb-8 block transition-colors serif-font">{p.num}</span>
              <h3 className="text-xl font-bold text-[#002b5c] group-hover:text-white mb-6 transition-colors">{p.title}</h3>
              <p className="text-slate-500 group-hover:text-white/80 leading-relaxed text-sm transition-colors">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
