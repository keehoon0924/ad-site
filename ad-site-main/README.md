# EmojiRibbit 🐸

쉽고 빠른 이모지 & 특수문자 복사 플랫폼

## 프로젝트 개요

EmojiRibbit은 블로거, SNS 크리에이터, 콘텐츠 제작자를 위한 이모지 및 특수문자 수집 사이트입니다.

- **3,600+개**의 다양한 이모지와 특수문자 제공
- **한 번의 클릭**으로 자동 복사
- **카테고리별 정렬** (표정, 동물, 음식, 여행 등)
- **최근 사용 이모지** 추적 (로컬스토리지)
- **검색 기능** (키워드 필터링)
- **다크모드** 지원
- **완벽한 반응형 디자인** (모바일/태블릿/데스크톱)

## 프로젝트 구조

```
ad-site/
├── index.html              # Hero 페이지 (메인 랜딩)
├── assets/
│   ├── css/
│   │   ├── commons.css     # 공통 스타일 (Design Tokens, Reset)
│   │   └── style.css       # 페이지별 스타일 (Hero, Navigation, 등)
│   ├── js/
│   │   ├── main.js         # 공통 초기화 & 전역 로직
│   │   └── sections/
│   │       └── hero.js     # Hero 섹션 인터랙션
│   └── images/             # 이미지 에셋
├── README.md               # 이 파일
```

## 주요 기능

### 1. 자동 복사 기능
- 이모지 클릭 시 클립보드에 자동 복사
- "복사됨!" 알림 메시지 표시
- 사용자 피드백 제공

### 2. 카테고리 탭 네비게이션
- 상단 고정 메뉴
- 표정 😊 | 동물 🐶 | 음식 🍏 | 여행 🚀

### 3. 최근 사용 이모지
- 로컬스토리지 활용
- 사용자가 복사한 이모지 기록
- 빠른 재사용성

### 4. 검색 기능
- 이모지 이름 검색
- 키워드 필터링
- 실시간 결과

### 5. 다크모드
- 라이트/다크 모드 전환
- 로컬스토리지 저장
- 시스템 설정 감지

## 기술 스택

- **HTML5** - 시맨틱 마크업
- **CSS3** - 그라데이션, 애니메이션, Grid/Flexbox
- **JavaScript (Vanilla)** - 상호작용 로직
- **AOS.js** - 스크롤 애니메이션
- **WOW.js** - 일반 애니메이션
- **Swiper.js** - 캐러셀 (추후 구현)

## 설치 및 실행

### 1. 저장소 클론

```bash
git clone <repository-url>
cd ad-site
```

### 2. 로컬 서버 실행

#### Python 3.x
```bash
python -m http.server 8000
```

#### Python 2.x
```bash
python -m SimpleHTTPServer 8000
```

#### Node.js (http-server)
```bash
npx http-server
```

#### VS Code Live Server
- VS Code에서 `index.html` 우클릭
- `Open with Live Server` 선택

### 3. 브라우저 접속

```
http://localhost:8000
```

## 디자인 시스템

### Color Tokens (Design Tokens)

```css
--color-primary: #6366f1
--color-accent: #ec4899
--color-success: #10b981
--gradient-hero: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)
```

### Typography

- **Font Family**: System UI (Segoe UI, Noto Sans KR, 등)
- **Font Scale**: clamp() 사용 (반응형)
- **Font Weight**: 400 (Regular), 600 (Semibold), 700 (Bold), 800 (Extra Bold)

### Spacing

- **Base Unit**: 8px
- **Padding**: 8px, 12px, 16px, 20px, 24px, 32px, 40px
- **Gap**: 8px, 12px, 16px, 24px, 32px

### Border Radius

- **--radius-1**: 8px
- **--radius-2**: 12px
- **--radius-3**: 16px

### Shadows

- **--shadow-1**: 0 8px 24px rgba(0, 0, 0, 0.08)
- **--shadow-2**: 0 12px 32px rgba(0, 0, 0, 0.12)
- **--shadow-3**: 0 20px 48px rgba(0, 0, 0, 0.16)

## 애니메이션 & 이펙트

### 적용된 라이브러리 & 기법

1. **AOS.js** - 스크롤 트리거 애니메이션
   - Fade In Up 효과
   - Delay 조정으로 순차 애니메이션

2. **CSS Keyframes** - 고성능 애니메이션
   - Bounce (스크롤 인디케이터)
   - Gradient Shift (배경)
   - Scroll Line (스크롤 텍스트)

3. **Transitions** - 부드러운 인터랙션
   - 호버 상태
   - 포커스 상태
   - 다크모드 전환

4. **Cubic Bezier** - 자연스러운 모션
   - `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (표준)
   - `cubic-bezier(0.2, 0.8, 0.2, 1)` (부드러운 스프링)

## 반응형 디자인

### Breakpoints

- **Desktop**: 1024px 이상
- **Tablet**: 768px ~ 1023px
- **Mobile**: 768px 이하

### 모바일 특화 기능

- **햄버거 메뉴** (768px 이하)
  - 애니메이션 X → ≡ 전환
  - 바깥 클릭으로 닫기
  - ESC 키로 닫기

- **검색 창** - 항상 노출
- **CTA 버튼** - 전체 너비
- **텍스트** - 가독성 향상 (clamp 사용)

## 다크모드 구현

### 저장 및 로드

```javascript
// 테마 저장
localStorage.setItem("theme", "dark");

// 테마 로드
const theme = localStorage.getItem("theme") || "light";
```

### CSS 변수 전환

```css
html[data-theme="dark"] {
  --color-text: var(--color-text-dark);
  --color-bg: var(--color-bg-dark);
  /* ... */
}
```

## 접근성 (A11y)

- ✅ 시맨틱 HTML5
- ✅ ARIA 라벨 & 역할
- ✅ 키보드 네비게이션
- ✅ 포커스 표시
- ✅ 스크린 리더 지원
- ✅ `prefers-reduced-motion` 감지

## SEO 최적화

- ✅ Meta Description
- ✅ Semantic HTML
- ✅ Heading 계층 구조
- ✅ 이미지 Alt 텍스트 (추후)
- ✅ OG 태그 (추후)

## 브라우저 지원

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+

## 향후 계획

- [ ] 이모지 상세 페이지
- [ ] 나만의 조합 만들기 (Combos)
- [ ] 인스타그램 폰트 변환
- [ ] 더 많은 특수문자
- [ ] 사용자 로그인 & 저장된 컬렉션
- [ ] API 연동
- [ ] 다국어 지원 (i18n)

## 성능 최적화

- ✅ CSS 압축 (프로덕션 배포 시)
- ✅ JS 번들 최소화
- ✅ Lazy Loading (이미지)
- ✅ Smooth Scrolling
- ✅ Hardware Acceleration (CSS `transform` 사용)

## 라이센스

MIT License

## 연락처

- 이메일: [your-email@example.com]
- GitHub: [your-github-profile]

---

**마지막 업데이트**: 2026-04-13
