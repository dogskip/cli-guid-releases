import{n as e}from"./vendor-react-BH_RQ4nt.js";var t=e();function n(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,LearningObjective:a,Step:o,StepList:s,SummaryBox:c}=n;return r||i(`Callout`,!0),a||i(`LearningObjective`,!0),o||i(`Step`,!0),s||i(`StepList`,!0),c||i(`SummaryBox`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:`CLAUDE.md와 메모리`}),`
`,(0,t.jsxs)(n.p,{children:[`Claude Code는 새 세션을 시작할 때 이전 대화를 그대로 기억하지 않습니다. 대신 `,(0,t.jsxs)(n.strong,{children:[`사람이 작성한 `,(0,t.jsx)(n.code,{children:`CLAUDE.md`}),` 지침`]}),`과 `,(0,t.jsx)(n.strong,{children:`Claude가 정리한 auto memory`}),`를 통해 반복되는 맥락을 불러옵니다.`]}),`
`,(0,t.jsx)(a,{items:["`CLAUDE.md`, `.claude/rules/`, auto memory의 역할을 구분한다",`프로젝트 지침에 넣을 내용과 넣지 말아야 할 내용을 판단한다`,"`AGENTS.md`와 `CLAUDE.md`를 함께 운용하는 기준을 설명한다",`반복되는 작업 규칙을 짧고 검증 가능하게 작성한다`]}),`
`,(0,t.jsx)(n.h2,{id:`두-가지-메모리-방식`,"data-toc-id":`두-가지-메모리-방식`,"data-toc-slug":`두-가지-메모리-방식`,"data-toc-depth":`0`,children:`두 가지 메모리 방식`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`방식`}),(0,t.jsx)(n.th,{children:`누가 작성하나`}),(0,t.jsx)(n.th,{children:`담는 내용`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`, `,(0,t.jsx)(n.code,{children:`.claude/CLAUDE.md`})]}),(0,t.jsx)(n.td,{children:`사람`}),(0,t.jsx)(n.td,{children:`프로젝트 구조, 코딩 규칙, 테스트 명령, 금지 작업`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`CLAUDE.local.md`})}),(0,t.jsx)(n.td,{children:`사람`}),(0,t.jsx)(n.td,{children:`개인 project-specific 선호, gitignore 권장`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`.claude/rules/*.md`})}),(0,t.jsx)(n.td,{children:`사람`}),(0,t.jsx)(n.td,{children:`주제별 또는 경로별 세부 규칙`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`auto memory`}),(0,t.jsx)(n.td,{children:`Claude`}),(0,t.jsx)(n.td,{children:`반복적으로 배운 선호, 디버깅 힌트, 자주 사용하는 절차`})]})]})]}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`는 코드 리뷰 기준이나 팀 규칙처럼 사람이 명시적으로 관리해야 하는 내용을 담습니다. 규칙이 길어지면 `,(0,t.jsx)(n.code,{children:`.claude/rules/`}),`로 나눠 주제별 또는 경로별로 관리합니다. auto memory는 세션을 거치며 Claude가 배운 작업 힌트를 저장하는 용도입니다.`]}),`
`,(0,t.jsx)(r,{variant:`info`,title:`메모리는 권한 장치가 아닙니다`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`는 지침입니다. 배포 금지, 삭제 금지 같은 강한 통제가 필요하면 권한 설정, hooks, CI 게이트처럼 실행을 막는 장치를 함께 사용해야 합니다.`]})}),`
`,(0,t.jsx)(n.h2,{id:`언제-claude-md를-만들까`,"data-toc-id":`언제-claude-md를-만들까`,"data-toc-slug":`언제-claude-md를-만들까`,"data-toc-depth":`0`,children:`언제 CLAUDE.md를 만들까?`}),`
`,(0,t.jsxs)(n.p,{children:[`다음 상황이면 프로젝트 루트의 `,(0,t.jsx)(n.code,{children:`CLAUDE.md`}),` 또는 `,(0,t.jsx)(n.code,{children:`.claude/CLAUDE.md`}),`를 둡니다.`]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`매번 같은 테스트 명령을 알려줘야 함`}),`
`,(0,t.jsx)(n.li,{children:`코드 리뷰에서 반복되는 실수가 있음`}),`
`,(0,t.jsx)(n.li,{children:`프로젝트 구조나 빌드 방식이 일반적이지 않음`}),`
`,(0,t.jsx)(n.li,{children:`새 팀원이 봐도 같은 작업 규칙을 따라야 함`}),`
`]}),`
`,(0,t.jsxs)(n.p,{children:[`Claude 세션 안에서 `,(0,t.jsx)(n.code,{children:`/init`}),`을 사용하면 프로젝트를 읽고 초안을 만들 수 있습니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`claude
`})}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`/init
`})}),`
`,(0,t.jsx)(n.h2,{id:`작성-예시`,"data-toc-id":`작성-예시`,"data-toc-slug":`작성-예시`,"data-toc-depth":`0`,children:`작성 예시`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-markdown`,children:`# Claude Project Guide

## 응답 언어
- 한국어로 답한다.

## 작업 전 확인
- 먼저 \`git status --short\`를 확인한다.
- 관련 파일을 읽기 전에는 수정하지 않는다.
- 배포, push, 삭제, 외부 서비스 호출은 사용자 승인 없이 실행하지 않는다.

## 검증 명령
- 문서 변경: \`pnpm content:manifest:check\`, \`pnpm docs:consistency\`
- React 코드 변경: \`pnpm test:run\`, \`pnpm build\`
- Tauri 런타임 변경: \`pnpm test:rust\`, \`pnpm test:native:smoke\`

## 코드 스타일
- TypeScript는 double quotes와 semicolon을 사용한다.
- 기존 컴포넌트 구조와 테스트 패턴을 우선한다.
`})}),`
`,(0,t.jsx)(n.p,{children:`좋은 지침은 짧고 행동 기준이 분명합니다. "좋은 코드로 작성"보다 "수정 전 관련 테스트를 찾고, 실패하면 로그 핵심 원인을 보고"가 더 잘 작동합니다.`}),`
`,(0,t.jsx)(n.h2,{id:`import와-local-지침`,"data-toc-id":`import와-local-지침`,"data-toc-slug":`import와-local-지침`,"data-toc-depth":`0`,children:`Import와 local 지침`}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`CLAUDE.md`}),` 안에서 `,(0,t.jsx)(n.code,{children:`@path`}),`를 사용하면 해당 파일을 import합니다. 경로를 말로만 언급하고 싶다면 backtick으로 감싸서 `,(0,t.jsx)(n.code,{children:`@README`}),`처럼 literal text로 둡니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-markdown`,children:`See @README.md for project overview.
Use @package.json for available scripts.

## Personal notes
- @~/.claude/my-project-instructions.md
`})}),`
`,(0,t.jsxs)(n.p,{children:[`개인 sandbox URL, 선호 test data처럼 팀에 커밋하면 안 되는 project-specific 내용은 `,(0,t.jsx)(n.code,{children:`CLAUDE.local.md`}),`에 두고 `,(0,t.jsx)(n.code,{children:`.gitignore`}),`에 추가합니다. 여러 worktree에서 같은 개인 지침을 공유해야 하면 home directory의 별도 파일을 import합니다.`]}),`
`,(0,t.jsx)(n.h2,{id:`agents-md와의-관계`,"data-toc-id":`agents-md와의-관계`,"data-toc-slug":`agents-md와의-관계`,"data-toc-depth":`0`,children:`AGENTS.md와의 관계`}),`
`,(0,t.jsxs)(n.p,{children:[`이 가이드의 Codex 섹션에서는 `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),`를 프로젝트 공통 지침으로 다룹니다. 중요한 차이는 `,(0,t.jsxs)(n.strong,{children:[`Claude Code는 `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),`가 아니라 `,(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`를 조회한다는 점`]}),`입니다. Claude Code를 함께 사용한다면 다음 기준으로 나눌 수 있습니다.`]}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`파일`}),(0,t.jsx)(n.th,{children:`권장 내용`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`AGENTS.md`})}),(0,t.jsx)(n.td,{children:`여러 AI 도구가 공통으로 따라야 하는 규칙. Claude에는 직접 자동 로드된다고 가정하지 않음`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`, `,(0,t.jsx)(n.code,{children:`.claude/CLAUDE.md`})]}),(0,t.jsxs)(n.td,{children:[`Claude Code가 세션 시작 시 읽는 지침. 필요하면 `,(0,t.jsx)(n.code,{children:`@AGENTS.md`}),` import`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`.claude/rules/`})}),(0,t.jsx)(n.td,{children:`Claude Code 전용 세부 규칙, 경로별 규칙`})]})]})]}),`
`,(0,t.jsxs)(n.p,{children:[`공통 규칙을 여러 파일에 중복으로 길게 적으면 drift가 생깁니다. 공통 원칙은 `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),`, Claude 전용 사용법은 `,(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`, 세부 규칙은 `,(0,t.jsx)(n.code,{children:`.claude/rules/`}),`에 두는 방식이 관리하기 쉽습니다. 이때 `,(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`에서 `,(0,t.jsx)(n.code,{children:`@AGENTS.md`}),`를 import해야 Claude도 같은 공통 규칙을 읽습니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-markdown`,children:`@AGENTS.md

## Claude Code
- 큰 변경 전 \`/plan\`으로 계획을 먼저 확인한다.
- Claude 전용 settings, hooks, skills는 \`.claude/\` 문서를 따른다.
`})}),`
`,(0,t.jsxs)(n.p,{children:[`symlink로 `,(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`를 `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),`에 연결할 수도 있지만, Windows에서는 관리자 권한이나 Developer Mode가 필요할 수 있으므로 import가 더 안전한 기본값입니다.`]}),`
`,(0,t.jsxs)(n.h2,{id:`claude-rules-경로별-규칙`,"data-toc-id":`claude-rules-경로별-규칙`,"data-toc-slug":`claude-rules-경로별-규칙`,"data-toc-depth":`0`,children:[(0,t.jsx)(n.code,{children:`.claude/rules/`}),` 경로별 규칙`]}),`
`,(0,t.jsxs)(n.p,{children:[`규칙이 길거나 특정 영역에만 필요하면 `,(0,t.jsx)(n.code,{children:`.claude/rules/`}),`로 분리합니다. `,(0,t.jsx)(n.code,{children:`paths`}),` frontmatter가 없는 rule은 매 세션 로드되고, `,(0,t.jsx)(n.code,{children:`paths`}),`가 있으면 Claude가 해당 파일을 다룰 때 적용됩니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-markdown`,children:`---
paths:
  - "src/api/**/*.ts"
  - "tests/**/*.test.ts"
---

# API Rules
- 모든 API handler는 입력 검증을 포함한다.
- 테스트 변경 시 관련 fixture를 함께 확인한다.
`})}),`
`,(0,t.jsxs)(n.p,{children:[`항상 필요한 팀 규칙은 `,(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`, 특정 경로나 파일 타입에만 필요한 규칙은 `,(0,t.jsx)(n.code,{children:`.claude/rules/`}),`, 특정 작업에서만 필요한 절차는 Skill로 분리합니다.`]}),`
`,(0,t.jsx)(n.h2,{id:`메모리-관리-명령`,"data-toc-id":`메모리-관리-명령`,"data-toc-slug":`메모리-관리-명령`,"data-toc-depth":`0`,children:`메모리 관리 명령`}),`
`,(0,t.jsxs)(n.p,{children:[`세션 안에서는 `,(0,t.jsx)(n.code,{children:`/memory`}),`로 현재 메모리 관련 상태와 관리 기능을 확인합니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`/memory
`})}),`
`,(0,t.jsx)(n.p,{children:`메모리에 넣을 문장은 장기적으로 유지해도 되는 사실이어야 합니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`넣어도 좋은 내용`}),(0,t.jsx)(n.th,{children:`피해야 할 내용`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`프로젝트 테스트 명령`}),(0,t.jsx)(n.td,{children:`비밀번호, 토큰, API 키`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`반복되는 코드 리뷰 기준`}),(0,t.jsx)(n.td,{children:`임시 디버깅 로그 전체`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`팀이 선호하는 응답 형식`}),(0,t.jsx)(n.td,{children:`개인 식별 정보`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`자주 사용하는 작업 순서`}),(0,t.jsx)(n.td,{children:`오래된 장애 원인 추정`})]})]})]}),`
`,(0,t.jsxs)(n.p,{children:[`auto memory는 기본적으로 켜져 있을 수 있고, 프로젝트별 저장소는 `,(0,t.jsx)(n.code,{children:`~/.claude/projects/<project>/memory/`}),`입니다. git repository 안에서는 worktree와 하위 폴더가 같은 project memory directory를 공유할 수 있습니다.`]}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`파일`}),(0,t.jsx)(n.th,{children:`로드 방식`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`MEMORY.md`})}),(0,t.jsx)(n.td,{children:`첫 200 lines 또는 첫 25KB 중 먼저 도달하는 범위만 세션 시작 시 로드`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`topic file`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`debugging.md`}),`, `,(0,t.jsx)(n.code,{children:`api-conventions.md`}),`처럼 필요할 때 Claude가 읽음`]})]})]})]}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`/memory`}),`는 현재 로드된 `,(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`, `,(0,t.jsx)(n.code,{children:`CLAUDE.local.md`}),`, rules, auto memory 상태를 확인하고 auto memory folder를 여는 데 사용합니다.`]}),`
`,(0,t.jsx)(n.h2,{id:`실습`,"data-toc-id":`실습`,"data-toc-slug":`실습`,"data-toc-depth":`0`,children:`실습`}),`
`,(0,t.jsx)(n.p,{children:`프로젝트 지침 초안을 만들고, 개인 설정과 팀 규칙을 나눕니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`/init
`})}),`
`,(0,t.jsx)(n.p,{children:`생성된 초안을 보고 아래 기준으로 정리합니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인 항목`}),(0,t.jsx)(n.th,{children:`통과 기준`}),(0,t.jsx)(n.th,{children:`통과하지 못하면`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`초안 생성`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`CLAUDE.md`}),` 초안이 만들어졌다`]}),(0,t.jsxs)(n.td,{children:[`세션에서 `,(0,t.jsx)(n.code,{children:`/init`}),`이 보이지 않으면 `,(0,t.jsx)(n.code,{children:`/`}),` 목록을 확인합니다`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`내용 분류`}),(0,t.jsx)(n.td,{children:`팀 공통 규칙과 개인 취향을 나눠 표시했다`}),(0,t.jsx)(n.td,{children:`개인 취향은 프로젝트 파일에 넣지 않습니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`확인 방법`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`/memory`}),`로 현재 적용 중인 지침을 확인했다`]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`메모리 관리 명령`}),` 절을 다시 읽습니다`]})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`완료-기준`,"data-toc-id":`완료-기준`,"data-toc-slug":`완료-기준`,"data-toc-depth":`0`,children:`완료 기준`}),`
`,(0,t.jsxs)(s,{children:[(0,t.jsx)(o,{number:1,title:`역할 구분`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`, `,(0,t.jsx)(n.code,{children:`.claude/rules/`}),`, auto memory가 무엇을 저장하는지 구분합니다.`]})}),(0,t.jsx)(o,{number:2,title:`초안 생성`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`/init`}),`으로 프로젝트 지침 초안을 만들 수 있습니다.`]})}),(0,t.jsx)(o,{number:3,title:`공통 지침 분리`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`AGENTS.md`}),`, `,(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`, `,(0,t.jsx)(n.code,{children:`.claude/rules/`}),`를 중복 없이 나누고 `,(0,t.jsx)(n.code,{children:`@AGENTS.md`}),` import가 필요한 이유를 설명할 수 있습니다.`]})}),(0,t.jsx)(o,{number:4,title:`민감정보 보호`,children:(0,t.jsx)(n.p,{children:`메모리와 지침 파일에 넣으면 안 되는 값을 말할 수 있습니다.`})})]}),`
`,(0,t.jsx)(c,{title:`핵심 요약`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`와 `,(0,t.jsx)(n.code,{children:`.claude/rules/`}),`는 사람이 관리하는 프로젝트 지침입니다`]}),`
`,(0,t.jsxs)(n.li,{children:[`Claude Code는 `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),`를 직접 읽는 것이 아니라 `,(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`에서 `,(0,t.jsx)(n.code,{children:`@AGENTS.md`}),`로 import해야 공통 규칙을 함께 읽습니다`]}),`
`,(0,t.jsx)(n.li,{children:`auto memory는 Claude가 반복 작업에서 배운 힌트를 저장하는 방식입니다`}),`
`,(0,t.jsxs)(n.li,{children:[`auto memory의 기본 저장 위치는 `,(0,t.jsx)(n.code,{children:`~/.claude/projects/<project>/memory/`}),`이며, `,(0,t.jsx)(n.code,{children:`MEMORY.md`}),`는 시작 시 200 lines 또는 25KB까지만 로드됩니다`]}),`
`,(0,t.jsxs)(n.li,{children:[`공통 규칙은 `,(0,t.jsx)(n.code,{children:`AGENTS.md`}),`, Claude 전용 흐름은 `,(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`, 세부 규칙은 `,(0,t.jsx)(n.code,{children:`.claude/rules/`}),`로 나누면 drift를 줄일 수 있습니다`]}),`
`,(0,t.jsx)(n.li,{children:`메모리는 권한 장치가 아니므로 위험 작업은 별도 권한 설정과 hooks로 막아야 합니다`}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};