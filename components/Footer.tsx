
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">루틴에듀학원</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              우리는 은평구 아이들의 꿈을 위해 바른 학습 습관을 전수합니다. 
              작은 루틴의 힘이 아이들의 미래를 바꿀 것을 확신합니다.
            </p>
            <div className="flex gap-4">
              {['blog', 'instagram', 'youtube', 'carrot'].map(item => (
                <div key={item} className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:border-indigo-500 transition-colors cursor-pointer text-xs">
                   {item.substring(0,2).toUpperCase()}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">학습 정보</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-white">루틴공부법</a></li>
              <li><a href="#subjects" className="hover:text-white">수업과목</a></li>
              <li><a href="#teachers" className="hover:text-white">선생님소개</a></li>
              <li><a href="#location" className="hover:text-white">수강료 안내</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">법적 고지</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-white">이용약관</a></li>
              <li><a href="#" className="hover:text-white">학원 등록번호: 제1234호</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 루틴에듀학원. All Rights Reserved.</p>
          <p>사업자등록번호: 000-00-00000 | 원장: 한민우</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
