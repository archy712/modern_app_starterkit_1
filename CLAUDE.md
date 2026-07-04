# CLAUDE.md

이 파일은 이 저장소에서 코드 작업을 할 때 Claude Code(claude.ai/code)에게 제공되는 안내 문서입니다.

@AGENTS.md

## 명령어

- `npm run dev` — 개발 서버 실행 (Turbopack, Next 16부터 기본값이라 별도 플래그 불필요)
- `npm run build` — 프로덕션 빌드
- `npm run start` — 프로덕션 빌드 실행
- `npm run lint` — ESLint 실행 (flat config 방식; Next 16에서 `next lint` 명령이 제거되어 `eslint`를 직접 호출함)

이 저장소에는 아직 테스트 스위트가 구성되어 있지 않습니다 (Jest/Vitest/Playwright 설정 없음, `*.test.*`/`*.spec.*` 파일 없음).

## 아키텍처

- **Next.js 16.2.10, App Router, `src/` 디렉터리 없음** — `app/`이 저장소 루트에 위치하며, `@/*` 경로 별칭(tsconfig.json)도 `src/`가 아닌 루트를 가리킵니다. 라우트: `/`(`app/page.tsx`, 랜딩 페이지)와 `/showcase`(`app/showcase/page.tsx`, 이 스타터킷에 포함된 모든 shadcn/ui 컴포넌트를 보여주는 실시간 갤러리).
- **학습 데이터와 다른, 커스터마이즈된 Next.js이며 실제 breaking change가 존재함** — 위의 `@AGENTS.md` 참고. 확신이 없는 Next.js API(비동기 `params`/`searchParams`/`cookies()`/`headers()`, 이미지 설정, middleware vs. proxy, 캐싱 지시어 등)를 사용하기 전에는 기존 지식에 의존하지 말고 `node_modules/next/dist/docs/01-app/`, 특히 `02-guides/upgrading/version-16.md`를 확인할 것.
- **Tailwind CSS v4, CSS 기반 설정** — `tailwind.config.js/ts` 파일이 없으며, 모든 테마/설정은 `app/globals.css`에 있습니다. `components.json`도 이를 반영해 `"tailwind": {"config": ""}`로 되어 있습니다.
- **shadcn/ui가 Radix가 아닌 Base UI 기반** — `components.json`에서 `"style": "base-nova"`로 설정되어 있고, `components/ui/*`는 전통적인 Radix 기반 shadcn/ui가 아니라 `@base-ui/react` 위에 구축되어 있습니다. Radix의 `asChild` 패턴이 아니라 Base UI의 API 컨벤션(예: 다형적 렌더링을 위한 `render` prop, `Button`의 `nativeButton` — `app/page.tsx` 참고)을 사용해야 합니다. 새로운 shadcn 컴포넌트를 추가할 때는 shadcn 문서나 학습 데이터에 있는 Radix 스타일 예시가 아니라 이 Base UI 스타일에 맞출 것.
- **전역 프로바이더는 `app/layout.tsx`에 위치**: `ThemeProvider`(next-themes, class 기반, 기본값 system)가 `TooltipProvider`를 감싸고, 그 안에 페이지 트리가 들어갑니다. `SiteHeader`와 `Toaster`(sonner)도 `{children}`과 함께 루트에 마운트됩니다.
- **쇼케이스 페이지 패턴** (`app/showcase/`): `components/showcase/` 아래에 컴포넌트 카테고리별로 데모 컴포넌트가 하나씩 있습니다 (`forms-demo.tsx`, `overlays-demo.tsx`, `feedback-demo.tsx`, `layout-demo.tsx`, `data-display-demo.tsx`). 각각은 `ShowcaseSection`(id/title/description 래퍼) 안에서 렌더링되고 `ShowcaseNav`에서 앵커 링크로 연결됩니다. 스타터킷에 새 shadcn 컴포넌트를 추가할 때는 별도 페이지를 만들지 말고 이 section/nav 패턴에 데모를 연결할 것.
- **`lib/utils.ts`**는 모든 조건부 클래스 조합에 사용되는 표준 shadcn `cn()` 헬퍼(clsx + tailwind-merge)를 export합니다.
