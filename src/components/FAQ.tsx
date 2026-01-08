
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "입학 전 레벨 테스트가 필수인가요?", a: "네, 단순히 정답률만 보는 것이 아니라 아이의 학습 습관과 취약 지점을 파악하기 위해 필수적으로 진행합니다. 테스트 후 1:1 상담이 이어집니다." },
    { q: "초등부부터 수업이 가능한가요?", a: "초등 고학년(5-6학년)부터 중등 예비 과정을 위해 전문화된 반이 구성되어 있습니다. 기초 습관을 잡기에 가장 좋은 시기입니다." },
    { q: "은평구 어느 지역까지 차량 운행을 하나요?", a: "현재 불광동, 대조동, 갈현동 등 은평구 전 지역 차량 운행 여부를 확인하실 수 있으니 상담 시 꼭 말씀해주세요." },
    { q: "내신 기간 관리는 어떻게 이루어지나요?", a: "시험 4주 전부터 학교별 기출 분석과 '무한 루틴' 문제 풀이 기간에 돌입합니다. 주말 보충을 포함하여 완벽히 대비합니다." }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">자주 묻는 질문</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                <span className={`text-indigo-600 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
