# 루틴에듀학원 웹사이트 개발 기록

## 프로젝트 정보
- **프로젝트명**: 루틴에듀학원 웹사이트
- **설명**: 서울 은평구 소재 초중고 국영수과 전문 학원 랜딩 페이지
- **기술스택**: React 19 + TypeScript + Vite + Tailwind CSS 3
- **개발일**: 2026-01-08

---

## 완료된 작업 내역

### 1. 프로젝트 초기 분석 및 문서화
- ✅ CLAUDE.md 생성 - 프로젝트 구조 및 개발 가이드 문서화
- ✅ 기존 코드베이스 분석 (React 19, Vite, Tailwind CDN 사용)

### 2. Git 저장소 설정
- ✅ .gitignore 파일 생성
  - node_modules, dist, .env 등 제외
- ✅ 기존 origin 제거 및 새 GitHub 저장소 연결
  - 저장소: https://github.com/axconkr/rutinEDU
- ✅ 초기 커밋 및 push 완료

### 3. Tailwind CSS 프로덕션 설정
- ✅ Tailwind CSS CDN → 실제 패키지로 전환
  - `tailwindcss@3.4.1` 설치
  - `postcss`, `autoprefixer` 설치
- ✅ 설정 파일 생성
  - `tailwind.config.js` - content 경로, 브랜드 컬러 설정
  - `postcss.config.js` - PostCSS 플러그인 설정
- ✅ 프로젝트 구조 재구성
  - `src/` 디렉토리 생성
  - 모든 소스 파일 src로 이동 (App.tsx, index.tsx, components/)
  - `src/index.css` 생성 - @tailwind 디렉티브 + 커스텀 스타일
- ✅ index.html 수정
  - Tailwind CDN 제거
  - React importmap 제거
  - 모듈 스크립트 추가 (`<script type="module" src="/src/index.tsx">`)

### 4. 빌드 오류 수정
- ✅ Tailwind CSS 4 → 3.4.1 다운그레이드
  - v4의 새로운 설정 방식 호환성 문제 해결
- ✅ CSS 임포트 방식 변경
  - `@import "tailwindcss"` → `@tailwind base/components/utilities`
- ✅ 개발 서버 정상 작동 확인 (http://localhost:3002)

### 5. Vercel 배포 준비
- ✅ GitHub 저장소에 최종 코드 push
- ✅ Vercel 자동 배포 설정 완료
  - GitHub main 브랜치 연동
  - 자동 빌드 및 배포 활성화

---

## 프로젝트 구조

```
rutinEDU/
├── index.html              # HTML 엔트리 포인트
├── package.json            # 프로젝트 의존성
├── vite.config.ts          # Vite 설정
├── tsconfig.json           # TypeScript 설정
├── tailwind.config.js      # Tailwind CSS 설정
├── postcss.config.js       # PostCSS 설정
├── .gitignore              # Git 제외 파일
├── CLAUDE.md               # 개발 가이드
├── DEVELOPMENT_LOG.md      # 이 파일
└── src/
    ├── index.tsx           # React 엔트리 포인트
    ├── index.css           # Tailwind + 커스텀 스타일
    ├── App.tsx             # 메인 앱 컴포넌트
    └── components/         # React 컴포넌트들
        ├── Header.tsx
        ├── Hero.tsx
        ├── PainPoints.tsx
        ├── RoutineMethod.tsx
        ├── Subjects.tsx
        ├── TeacherProfiles.tsx
        ├── FAQ.tsx
        ├── Location.tsx
        ├── Footer.tsx
        ├── CTAButton.tsx
        └── JsonLd.tsx
```

---

## 주요 기술 결정사항

### Tailwind CSS 버전 선택
- **문제**: Tailwind CSS 4는 새로운 설정 방식 사용
- **해결**: v3.4.1로 다운그레이드하여 안정성 확보
- **이유**: Vite + React 19 환경에서 검증된 설정 방식 사용

### 프로젝트 구조
- **src/ 디렉토리 도입**: 소스 파일 명확한 분리
- **절대 경로 alias**: `@/*` → 프로젝트 루트 (vite.config.ts)

### 브랜드 컬러
- **Navy**: `#002b5c` (주요 브랜드 컬러)
- **Gold**: `#c5a059` (강조 컬러)
- **폰트**: Noto Sans KR (본문), Nanum Myeongjo (세리프)

---

## Git 커밋 히스토리

### Commit 1: Initial commit
```
Initial commit: 루틴에듀학원 웹사이트

- React 19 + TypeScript + Vite 기반 SPA
- Tailwind CSS 스타일링
- 주요 섹션: Hero, 과목 소개, 강사 프로필, FAQ, 위치 안내
- SEO 최적화 (JsonLd 스키마)
- 반응형 디자인
```

### Commit 2: Tailwind CSS 프로덕션 설정
```
Fix: Tailwind CSS 프로덕션 설정으로 변경

- CDN에서 실제 Tailwind CSS 패키지로 전환
- src 디렉토리 구조로 재구성
- index.css 추가 (Tailwind 임포트 + 커스텀 스타일)
- 프로덕션 빌드 최적화
```

### Commit 3: Tailwind 버전 수정
```
Fix: Tailwind CSS 3으로 변경 및 설정 수정

- Tailwind CSS 4 → 3.4.1로 다운그레이드
- tailwind.config.js, postcss.config.js 추가
- @tailwind 디렉티브로 변경
- 스타일이 정상 작동하도록 수정
```

---

## 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 미리보기
npm run preview

# Git push (GitHub)
git add .
git commit -m "메시지"
git push
```

---

## Vercel 배포 정보

### 배포 방법
1. https://vercel.com 접속
2. GitHub 계정으로 로그인
3. "Add New..." → "Project" 클릭
4. `axconkr/rutinEDU` 저장소 선택
5. 자동 감지된 설정 확인:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. "Deploy" 클릭

### 자동 배포
- GitHub `main` 브랜치에 push → Vercel 자동 재배포

---

## 다음 작업 시 참고사항

### 컴포넌트 수정 시
- 모든 컴포넌트는 `src/components/` 내 위치
- Tailwind CSS 유틸리티 클래스 사용
- 브랜드 컬러: `text-[#002b5c]`, `bg-[#c5a059]` 또는 커스텀 클래스 사용

### 스타일 추가 시
- `src/index.css`에 전역 스타일 추가
- Tailwind 커스텀 클래스는 `tailwind.config.js`의 `theme.extend`에 추가

### 새로운 페이지 추가 시
1. `src/components/` 에 컴포넌트 생성
2. `src/App.tsx`에 임포트 및 렌더링
3. 필요시 라우팅 라이브러리 추가 고려 (현재는 SPA)

### 배포 시
- `git push` 만 하면 Vercel이 자동 배포
- 배포 상태는 Vercel 대시보드에서 확인

---

## 문제 해결 기록

### 문제 1: Tailwind CSS CDN 경고
- **증상**: 프로덕션에서 CDN 사용 경고
- **원인**: CDN은 개발용, 프로덕션에 부적합
- **해결**: 실제 패키지 설치 및 빌드 파이프라인 구축

### 문제 2: 디자인 깨짐
- **증상**: Tailwind 스타일이 적용되지 않음
- **원인**: Tailwind CSS 4의 새로운 설정 방식 미지원
- **해결**: v3.4.1로 다운그레이드 및 전통적인 설정 방식 사용

### 문제 3: GitHub origin 충돌
- **증상**: 기존 Google AI Studio template origin 존재
- **원인**: 템플릿 저장소에서 fork된 프로젝트
- **해결**: 기존 origin 제거 후 새 저장소로 재설정

---

## 성능 최적화 포인트 (향후 고려사항)

- [ ] 이미지 최적화 (WebP 포맷, lazy loading)
- [ ] 코드 스플리팅 (React.lazy, Suspense)
- [ ] 폰트 최적화 (font-display: swap)
- [ ] 번들 크기 분석 및 최적화
- [ ] PWA 기능 추가 고려
- [ ] 성능 모니터링 도구 연동 (Web Vitals)

---

## 연락처 및 리소스

- **GitHub 저장소**: https://github.com/axconkr/rutinEDU
- **Vercel 대시보드**: https://vercel.com
- **개발 계정**: axconkr (GitHub), Vercel 연동

---

**작업 완료일**: 2026-01-08
**최종 상태**: ✅ 개발 완료, Vercel 배포 준비 완료
**다음 작업자**: 이 문서를 참고하여 추가 개발 진행
