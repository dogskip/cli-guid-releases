import{n as e}from"./vendor-react-BH_RQ4nt.js";var t=e();function n(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,LearningObjective:a,Step:o,StepList:s,SummaryBox:c}=n;return r||i(`Callout`,!0),a||i(`LearningObjective`,!0),o||i(`Step`,!0),s||i(`StepList`,!0),c||i(`SummaryBox`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:`AGENTS.md로 프로젝트 규칙 설정`}),`
`,(0,t.jsxs)(n.p,{children:[`Codex에게 같은 규칙을 매번 말로 전달하지 않고, `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),` 파일에 한 번 적어두면 Codex 세션 시작마다 자동으로 적용됩니다. `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),`는 여러 코딩 에이전트가 함께 참고할 수 있는 공개 형식이지만, 도구마다 전용 지침 파일이 따로 있을 수 있으므로 지원 범위를 확인해야 합니다.`]}),`
`,(0,t.jsx)(a,{items:[`AGENTS.md가 무엇이고 왜 필요한지 설명할 수 있다`,"`/init` 명령어로 AGENTS.md 초안을 생성할 수 있다",`config.toml과 AGENTS.md의 역할 차이를 구분할 수 있다`,`민감정보를 AGENTS.md에 적으면 안 되는 이유를 설명할 수 있다`]}),`
`,(0,t.jsx)(n.h2,{id:`agents-md란`,"data-toc-id":`agents-md란`,"data-toc-slug":`agents-md란`,"data-toc-depth":`0`,children:`AGENTS.md란?`}),`
`,(0,t.jsxs)(n.p,{children:[`AGENTS.md는 Codex가 읽는 `,(0,t.jsx)(n.strong,{children:`지침 파일`}),`입니다. 프로젝트 루트뿐 아니라 전역 Codex 홈과 하위 디렉터리에 둘 수 있으며, Codex에게 항상 지켜야 할 규칙, 기술 스택, 응답 언어 등을 기록합니다.`]}),`
`,(0,t.jsx)(n.p,{children:`한 번 작성해두면:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`매 세션마다 "한국어로 답해줘"라고 말할 필요가 없음`}),`
`,(0,t.jsx)(n.li,{children:`팀원 모두가 같은 규칙을 공유`}),`
`,(0,t.jsx)(n.li,{children:`Codex 외에도 여러 AI 코딩 도구에서 같은 프로젝트 규칙을 참고 가능`}),`
`]}),`
`,(0,t.jsx)(n.h2,{id:`codex가-agents-md를-찾는-순서`,"data-toc-id":`codex가-agents-md를-찾는-순서`,"data-toc-slug":`codex가-agents-md를-찾는-순서`,"data-toc-depth":`0`,children:`Codex가 AGENTS.md를 찾는 순서`}),`
`,(0,t.jsx)(n.p,{children:`Codex는 세션을 시작할 때 instruction chain을 한 번 구성합니다. 지침이 예상과 다르게 적용되면 파일 내용보다 먼저 위치와 우선순위를 확인합니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`범위`}),(0,t.jsx)(n.th,{children:`위치`}),(0,t.jsx)(n.th,{children:`적용 방식`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`Global`}),(0,t.jsxs)(n.td,{children:[`Codex home(`,(0,t.jsx)(n.code,{children:`~/.codex`}),`, `,(0,t.jsx)(n.code,{children:`CODEX_HOME`}),`으로 변경 가능)의 `,(0,t.jsx)(n.code,{children:`AGENTS.override.md`}),` 또는 `,(0,t.jsx)(n.code,{children:`AGENTS.md`})]}),(0,t.jsx)(n.td,{children:`모든 저장소에 적용되는 개인 기본값`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`Project root`}),(0,t.jsxs)(n.td,{children:[`저장소 루트의 `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),` 또는 `,(0,t.jsx)(n.code,{children:`AGENTS.override.md`})]}),(0,t.jsx)(n.td,{children:`저장소 전체 공통 규칙`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`Nested directory`}),(0,t.jsxs)(n.td,{children:[`하위 폴더의 `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),` 또는 `,(0,t.jsx)(n.code,{children:`AGENTS.override.md`})]}),(0,t.jsx)(n.td,{children:`해당 폴더 아래 작업에 더 가까운 규칙`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`Fallback filename`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`project_doc_fallback_filenames`}),`에 등록한 파일`]}),(0,t.jsx)(n.td,{children:`기존 팀 가이드 파일을 Codex 지침으로 재사용`})]})]})]}),`
`,(0,t.jsxs)(n.p,{children:[`같은 위치에 `,(0,t.jsx)(n.code,{children:`AGENTS.override.md`}),`가 있으면 `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),`보다 우선하고, 한 디렉터리에서는 최대 한 파일만 포함됩니다. Codex는 project root(기본적으로 `,(0,t.jsx)(n.code,{children:`.git`}),`이 있는 디렉터리)에서 현재 작업 디렉터리 방향으로 내려가며 파일을 이어 붙이므로, 가까운 하위 디렉터리 지침이 뒤에 붙어 더 강한 맥락이 됩니다.`]}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`관련 설정`}),(0,t.jsx)(n.th,{children:`기본값`}),(0,t.jsx)(n.th,{children:`의미`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`project_doc_max_bytes`})}),(0,t.jsx)(n.td,{children:`32 KiB`}),(0,t.jsx)(n.td,{children:`합쳐진 지침의 크기 상한. 넘으면 이후 파일이 빠짐`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`project_root_markers`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`.git`})}),(0,t.jsx)(n.td,{children:`project root로 인정할 표식`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`project_doc_fallback_filenames`})}),(0,t.jsx)(n.td,{children:`없음`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`AGENTS.md`}),` 대신 읽을 기존 가이드 파일 이름`]})]})]})]}),`
`,(0,t.jsx)(n.p,{children:`지침이 잘려 보이면 파일 내용을 늘리기 전에 상한과 빈 파일 여부를 먼저 확인합니다. 상한에 걸렸다면 값을 올리거나 지침을 하위 디렉터리로 나눕니다.`}),`
`,(0,t.jsx)(r,{variant:`info`,title:`캐시를 지우는 방식이 아닙니다`,children:(0,t.jsxs)(n.p,{children:[`Codex는 새 실행 또는 새 TUI 세션에서 instruction chain을 다시 만듭니다. 지침이 오래된 것처럼 보이면 캐시 삭제보다 Codex를 해당 디렉터리에서 다시 시작하고, `,(0,t.jsx)(n.code,{children:`AGENTS.override.md`}),`나 fallback 파일이 끼어 있는지 확인하세요.`]})}),`
`,(0,t.jsx)(n.h2,{id:`agents-md-만들기`,"data-toc-id":`agents-md-만들기`,"data-toc-slug":`agents-md-만들기`,"data-toc-depth":`0`,children:`AGENTS.md 만들기`}),`
`,(0,t.jsxs)(n.h3,{id:`방법-1-init-명령어로-생성`,"data-toc-id":`방법-1-init-명령어로-생성`,"data-toc-slug":`방법-1-init-명령어로-생성`,"data-toc-depth":`1`,children:[`방법 1: `,(0,t.jsx)(n.code,{children:`/init`}),` 명령어로 생성`]}),`
`,(0,t.jsxs)(n.p,{children:[`세션 안에서 `,(0,t.jsx)(n.code,{children:`/init`}),`을 입력하면 Codex가 프로젝트 구조를 분석해 AGENTS.md 초안을 만들어줍니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`codex
# 세션 안에서
/init
`})}),`
`,(0,t.jsx)(n.h3,{id:`방법-2-직접-생성`,"data-toc-id":`방법-2-직접-생성`,"data-toc-slug":`방법-2-직접-생성`,"data-toc-depth":`1`,children:`방법 2: 직접 생성`}),`
`,(0,t.jsxs)(n.p,{children:[`프로젝트 루트에 직접 `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),` 파일을 만들어도 됩니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`touch AGENTS.md
`})}),`
`,(0,t.jsx)(n.h2,{id:`config-toml과-agents-md의-역할-차이`,"data-toc-id":`config-toml과-agents-md의-역할-차이`,"data-toc-slug":`config-toml과-agents-md의-역할-차이`,"data-toc-depth":`0`,children:`config.toml과 AGENTS.md의 역할 차이`}),`
`,(0,t.jsxs)(n.p,{children:[`같은 설정 파일이라도 `,(0,t.jsx)(n.code,{children:`config.toml`}),`과 `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),`는 역할이 완전히 다릅니다.`]}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`항목`}),(0,t.jsx)(n.th,{children:`AGENTS.md`}),(0,t.jsx)(n.th,{children:`config.toml`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`응답 언어`}),(0,t.jsx)(n.td,{children:`✅ "한국어로 답해줘"`}),(0,t.jsx)(n.td,{children:`❌`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`코딩 규칙`}),(0,t.jsx)(n.td,{children:`✅ "함수명은 camelCase"`}),(0,t.jsx)(n.td,{children:`❌`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`기술 스택`}),(0,t.jsx)(n.td,{children:`✅ "React 19, Vitest"`}),(0,t.jsx)(n.td,{children:`❌`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`작업 규칙`}),(0,t.jsx)(n.td,{children:`✅ "수정 전 먼저 읽어줘"`}),(0,t.jsx)(n.td,{children:`❌`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`주의 명령`}),(0,t.jsx)(n.td,{children:`✅ "배포는 실행하지 마"`}),(0,t.jsx)(n.td,{children:`❌`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`모델 선택`}),(0,t.jsx)(n.td,{children:`❌`}),(0,t.jsxs)(n.td,{children:[`✅ `,(0,t.jsx)(n.code,{children:`model = "<model-id>"`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`승인 방식`}),(0,t.jsx)(n.td,{children:`❌`}),(0,t.jsxs)(n.td,{children:[`✅ `,(0,t.jsx)(n.code,{children:`approval_policy = "on-request"`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`MCP 서버`}),(0,t.jsx)(n.td,{children:`❌`}),(0,t.jsxs)(n.td,{children:[`✅ `,(0,t.jsx)(n.code,{children:`mcp_servers.fetch`})]})]})]})]}),`
`,(0,t.jsxs)(n.p,{children:[`한 줄로: `,(0,t.jsx)(n.strong,{children:`AGENTS.md는 사람의 규칙`}),`, `,(0,t.jsx)(n.strong,{children:`config.toml은 기계의 설정`}),`입니다.`]}),`
`,(0,t.jsx)(n.h2,{id:`agents-md-작성-예시`,"data-toc-id":`agents-md-작성-예시`,"data-toc-slug":`agents-md-작성-예시`,"data-toc-depth":`0`,children:`AGENTS.md 작성 예시`}),`
`,(0,t.jsx)(n.p,{children:`다음은 실제 프로젝트에서 사용할 수 있는 완전한 예시입니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-markdown`,children:`# Project Guide

## 응답 언어
- 한국어로 답한다

## 기술 스택
- Frontend: React 19, TypeScript
- Backend: Express, Node.js
- Test: Vitest, Playwright
- Package manager: pnpm

## 작업 규칙
- 수정 전 관련 파일을 먼저 조회한다
- 변경 계획을 짧게 제안한 후 승인을 받는다
- 테스트를 실행할 수 없으면 이유를 보고한다
- 완료 보고에는 변경 파일, 검증 결과, 남은 위험을 포함한다
- 비밀값은 절대 출력하지 않는다

## 금지 명령
- 삭제, 배포, 원격 push, 외부 서비스 호출은 실행하지 말고 먼저 물어봐
`})}),`
`,(0,t.jsx)(r,{variant:`tip`,title:`작성 Tip`,children:(0,t.jsx)(n.p,{children:`처음에는 응답 언어와 금지 명령 2~3개만 적어도 효과가 있습니다. 프로젝트가 커지면서 점차 추가하세요.`})}),`
`,(0,t.jsx)(n.h2,{id:`agents-md가-잘-적용되었는지-확인하기`,"data-toc-id":`agents-md가-잘-적용되었는지-확인하기`,"data-toc-slug":`agents-md가-잘-적용되었는지-확인하기`,"data-toc-depth":`0`,children:`AGENTS.md가 잘 적용되었는지 확인하기`}),`
`,(0,t.jsx)(n.p,{children:`AGENTS.md를 작성한 후 Codex를 다시 시작하면 새 규칙이 적용됩니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`codex
`})}),`
`,(0,t.jsx)(n.p,{children:`Codex에게 간단한 질문을 던져 AGENTS.md의 지침이 적용되는지 확인하세요.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`이 프로젝트의 기술 스택을 말해줘.
`})}),`
`,(0,t.jsxs)(n.p,{children:[`AGENTS.md에 적은 기술 스택을 기반으로 답변한다면 정상 동작입니다. 적용되지 않았다면 AGENTS.md가 프로젝트 루트에 있는지, 파일명이 정확한지(`,(0,t.jsx)(n.code,{children:`AGENTS.md`}),`, 대소문자 구분) 확인하세요.`]}),`
`,(0,t.jsx)(n.h2,{id:`여러-도구와-함께-쓸-때`,"data-toc-id":`여러-도구와-함께-쓸-때`,"data-toc-slug":`여러-도구와-함께-쓸-때`,"data-toc-depth":`0`,children:`여러 도구와 함께 쓸 때`}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`AGENTS.md`}),`는 공개 형식이므로 여러 AI 코딩 도구가 프로젝트 공통 규칙을 조회하는 기준점으로 삼을 수 있습니다. 다만 "모든 도구가 같은 방식으로, 같은 우선순위로 조회한다"는 뜻은 아닙니다.`]}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`도구`}),(0,t.jsx)(n.th,{children:`권장 운용`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:`Codex CLI`})}),(0,t.jsxs)(n.td,{children:[`세션 시작 시 `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),` 자동 로드`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:`Claude Code`})}),(0,t.jsxs)(n.td,{children:[`Claude는 `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),`를 직접 자동 로드한다고 가정하지 않음. `,(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`에서 `,(0,t.jsx)(n.code,{children:`@AGENTS.md`}),`로 import하거나 symlink하고, Claude 전용 지침은 `,(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`, `,(0,t.jsx)(n.code,{children:`.claude/CLAUDE.md`}),`, `,(0,t.jsx)(n.code,{children:`.claude/rules/`}),`에 둠`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:`Cursor`})}),(0,t.jsxs)(n.td,{children:[`Cursor 전용 규칙은 `,(0,t.jsx)(n.code,{children:`.cursor/rules/`}),`에 두고, 공통 원칙만 `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),`와 중복 없이 맞춤`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:`GitHub Copilot Coding Agent`})}),(0,t.jsxs)(n.td,{children:[`공통 작업 규칙을 `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),`에 두되, 저장소/조직 정책에 따른 별도 instructions와 충돌하지 않게 점검`]})]})]})]}),`
`,(0,t.jsx)(r,{variant:`warning`,title:`전용 파일을 지우지 마세요`,children:(0,t.jsxs)(n.p,{children:[`Claude Code를 사용하는 프로젝트라면 `,(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`와 `,(0,t.jsx)(n.code,{children:`.claude/rules/`}),`가 실제 세션 지침의 핵심 위치입니다. `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),`가 있다고 해서 전용 파일을 없애기보다, 공통 규칙은 `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),`, 도구별 세부 운용은 각 도구의 전용 파일에 두는 편이 drift를 줄입니다.`]})}),`
`,(0,t.jsxs)(n.p,{children:[`Claude Code와 공통 규칙을 공유하려면 `,(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`에 다음처럼 import를 명시합니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-markdown`,children:`# Claude Project Guide

@AGENTS.md

## Claude 전용 운영
- \`/plan\`으로 큰 변경 전 계획을 확인한다.
- Claude 전용 hooks, skills, MCP 설정은 \`.claude/\` 아래 문서를 따른다.
`})}),`
`,(0,t.jsx)(n.h2,{id:`넣지-말아야-할-것`,"data-toc-id":`넣지-말아야-할-것`,"data-toc-slug":`넣지-말아야-할-것`,"data-toc-depth":`0`,children:`넣지 말아야 할 것`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`넣으면 안 되는 값`}),(0,t.jsx)(n.th,{children:`이유`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[`API 키 (`,(0,t.jsx)(n.code,{children:`sk-...`}),`)`]}),(0,t.jsx)(n.td,{children:`Git에 커밋되면 계정 유출`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`액세스 토큰`}),(0,t.jsx)(n.td,{children:`외부 서비스 권한 유출`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`비밀번호`}),(0,t.jsx)(n.td,{children:`계정 탈취 위험`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`데이터베이스 접속 문자열`}),(0,t.jsx)(n.td,{children:`전체 데이터 유출 위험`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`인증서 원문`}),(0,t.jsx)(n.td,{children:`서명/배포 권한 유출`})]})]})]}),`
`,(0,t.jsx)(r,{variant:`warning`,title:`AGENTS.md에 API 키를 절대 적지 마세요`,children:(0,t.jsxs)(n.p,{children:[`AGENTS.md는 Git에 커밋됩니다. API 키, 토큰, 비밀번호는 `,(0,t.jsx)(n.code,{children:`.env`}),` 파일이나 시크릿 저장소에 보관하고 AGENTS.md에는 "API 키는 환경변수에서 읽어와"라고만 적으세요.`]})}),`
`,(0,t.jsx)(n.h2,{id:`실습`,"data-toc-id":`실습`,"data-toc-slug":`실습`,"data-toc-depth":`0`,children:`실습`}),`
`,(0,t.jsx)(n.p,{children:`현재 프로젝트에 지침 파일이 있는지 확인하고, 없다면 초안을 만들게 합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`ls
`})}),`
`,(0,t.jsx)(n.p,{children:`세션 안에서 아래 요청을 보냅니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`이 저장소를 보고 AGENTS.md 초안을 제안해줘. 응답 언어, 기술 스택, 검증 명령, 금지 명령만 담아줘. 파일은 아직 만들지 마.
`})}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인 항목`}),(0,t.jsx)(n.th,{children:`통과 기준`}),(0,t.jsx)(n.th,{children:`통과하지 못하면`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`초안 항목`}),(0,t.jsx)(n.td,{children:`응답 언어, 기술 스택, 검증 명령, 금지 명령이 모두 있다`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`AGENTS.md 작성 예시`}),` 절의 항목과 맞춰 봅니다`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`근거`}),(0,t.jsx)(n.td,{children:`제안된 검증 명령이 실제 저장소에 존재한다`}),(0,t.jsx)(n.td,{children:`없는 명령이 나오면 실제 스크립트 이름으로 고칩니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`분리`}),(0,t.jsx)(n.td,{children:`개인 설정이 아니라 팀 공통 규칙만 담겼다`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`넣지 말아야 할 것`}),` 절을 다시 읽습니다`]})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`완료-기준`,"data-toc-id":`완료-기준`,"data-toc-slug":`완료-기준`,"data-toc-depth":`0`,children:`완료 기준`}),`
`,(0,t.jsxs)(s,{children:[(0,t.jsx)(o,{number:1,title:`AGENTS.md의 목적`,children:(0,t.jsx)(n.p,{children:`AGENTS.md가 "매번 같은 규칙을 말하지 않게 해주는 지침 파일"임을 설명할 수 있습니다.`})}),(0,t.jsx)(o,{number:2,title:`/init 사용`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`/init`}),` 명령어로 AGENTS.md 초안을 생성할 수 있습니다.`]})}),(0,t.jsx)(o,{number:3,title:`역할 구분`,children:(0,t.jsx)(n.p,{children:`config.toml(시스템 설정)과 AGENTS.md(사람의 규칙)의 차이를 설명할 수 있습니다.`})}),(0,t.jsx)(o,{number:4,title:`민감정보 보호`,children:(0,t.jsx)(n.p,{children:`API 키와 토큰을 AGENTS.md에 적으면 안 되는 이유와 대체 방법(.env)을 설명할 수 있습니다.`})})]}),`
`,(0,t.jsx)(c,{title:`핵심 요약`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`AGENTS.md는 프로젝트 규칙을 담은 지침 파일로, 매번 같은 말을 반복하지 않게 해줍니다`}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`/init`}),` 명령어로 자동 생성하거나 직접 파일을 만들 수 있습니다`]}),`
`,(0,t.jsx)(n.li,{children:`config.toml은 기계 설정, AGENTS.md는 사람의 규칙이라는 역할 차이가 있습니다`}),`
`,(0,t.jsx)(n.li,{children:`API 키, 토큰 등 민감정보는 절대 AGENTS.md에 적지 않습니다`}),`
`,(0,t.jsxs)(n.li,{children:[`Codex는 global, project, nested AGENTS 지침을 합치며 `,(0,t.jsx)(n.code,{children:`AGENTS.override.md`}),`가 같은 위치의 기본 파일보다 우선합니다`]}),`
`,(0,t.jsxs)(n.li,{children:[`여러 도구를 함께 쓸 때는 `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),`를 공통 규칙으로 두고 도구별 전용 파일과 역할을 나눕니다`]}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};