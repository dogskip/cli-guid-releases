import{n as e}from"./vendor-react-BH_RQ4nt.js";var t=e();function n(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,LearningObjective:a,Step:o,StepList:s,SummaryBox:c}=n;return r||i(`Callout`,!0),a||i(`LearningObjective`,!0),o||i(`Step`,!0),s||i(`StepList`,!0),c||i(`SummaryBox`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:`Markdown과 구조화된 요청`}),`
`,(0,t.jsx)(n.p,{children:`Markdown은 제목, 목록, 코드 블록을 텍스트 기호로 표현하는 문서 형식입니다. AI CLI에서는 Markdown을 알면 요구사항, 로그, 코드, 체크리스트를 훨씬 정확하게 전달할 수 있습니다.`}),`
`,(0,t.jsx)(a,{items:[`Markdown이 AI CLI에서 유용한 이유를 이해한다`,`제목, 목록, 코드 블록을 구분해 작성할 수 있다`,`요청을 구조화해 AI가 덜 추측하게 만든다`]}),`
`,(0,t.jsx)(n.h2,{id:`왜-markdown인가`,"data-toc-id":`왜-markdown인가`,"data-toc-slug":`왜-markdown인가`,"data-toc-depth":`0`,children:`왜 Markdown인가`}),`
`,(0,t.jsx)(n.p,{children:`Markdown은 사람이 읽기 쉽고, AI도 구조를 파악하기 쉽습니다. 워드 문서처럼 숨은 서식이 많지 않고, Git에서도 변경 내용을 비교하기 좋습니다.`}),`
`,(0,t.jsx)(n.h2,{id:`최소-문법`,"data-toc-id":`최소-문법`,"data-toc-slug":`최소-문법`,"data-toc-depth":`0`,children:`최소 문법`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`목적`}),(0,t.jsx)(n.th,{children:`문법`}),(0,t.jsx)(n.th,{children:`예시`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`큰 제목`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`#`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`# 로그인 기능`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`중간 제목`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`##`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`## 요구사항`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`목록`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`-`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`- 이메일 검증`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`강조`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`**텍스트**`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`**필수**`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`코드`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"```"})}),(0,t.jsx)(n.td,{children:`코드 블록`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`인용`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`>`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`> 에러 메시지`})})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`나쁜-요청과-좋은-요청`,"data-toc-id":`나쁜-요청과-좋은-요청`,"data-toc-slug":`나쁜-요청과-좋은-요청`,"data-toc-depth":`0`,children:`나쁜 요청과 좋은 요청`}),`
`,(0,t.jsx)(n.p,{children:`나쁜 요청은 AI가 범위와 성공 기준을 추측하게 만듭니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`로그인 좀 만들어줘. 에러도 처리하고 예쁘게 해줘.
`})}),`
`,(0,t.jsx)(n.p,{children:`좋은 요청은 목표, 요구사항, 제약, 검증 기준을 분리합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-markdown`,children:`# 목표
README에 설치 명령어 섹션을 추가

## 요구사항
- npm install 명령어를 코드 블록으로 표시
- 시스템 요구사항을 목록으로 정리

## 범위
- README.md만 수정, 다른 파일은 건드리지 않음

## 검증
- 파일이 올바르게 렌더링되는지 확인
`})}),`
`,(0,t.jsx)(n.h2,{id:`코드와-로그-전달`,"data-toc-id":`코드와-로그-전달`,"data-toc-slug":`코드와-로그-전달`,"data-toc-depth":`0`,children:`코드와 로그 전달`}),`
`,(0,t.jsx)(n.p,{children:`코드나 에러 로그는 일반 문장과 섞지 말고 코드 블록에 넣습니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-markdown`,children:"아래 에러의 원인을 찾아줘.\n\n```text\nTypeError: Cannot read properties of undefined\n```\n"})}),`
`,(0,t.jsx)(r,{variant:`warning`,title:`긴 내용은 나눠서 전달`,children:(0,t.jsx)(n.p,{children:`큰 파일 전체나 긴 로그 전체를 한 번에 붙이지 마세요. 실패한 명령, 핵심 에러, 관련 파일부터 전달하고 필요하면 추가로 읽게 하세요.`})}),`
`,(0,t.jsx)(n.h2,{id:`실습`,"data-toc-id":`실습`,"data-toc-slug":`실습`,"data-toc-depth":`0`,children:`실습`}),`
`,(0,t.jsx)(n.p,{children:`방금 배운 형식으로 요청서 하나를 완성합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`## 요구사항
-

## 범위
-

## 검증
-
`})}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인 항목`}),(0,t.jsx)(n.th,{children:`통과 기준`}),(0,t.jsx)(n.th,{children:`통과하지 못하면`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`세 항목`}),(0,t.jsx)(n.td,{children:`요구사항, 범위, 검증이 모두 채워졌다`}),(0,t.jsx)(n.td,{children:`빈 항목이 있으면 그 항목부터 한 줄씩 채웁니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`코드 전달`}),(0,t.jsx)(n.td,{children:`로그나 코드를 붙일 때 코드 블록으로 감쌌다`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`코드와 로그 전달`}),` 절의 예시를 다시 봅니다`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`판정 가능성`}),(0,t.jsx)(n.td,{children:`검증 항목만 보고 완료 여부를 판단할 수 있다`}),(0,t.jsx)(n.td,{children:`검증을 명령이나 눈으로 확인할 결과로 바꿔 적습니다`})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`완료-기준`,"data-toc-id":`완료-기준`,"data-toc-slug":`완료-기준`,"data-toc-depth":`0`,children:`완료 기준`}),`
`,(0,t.jsxs)(s,{children:[(0,t.jsx)(o,{number:1,title:`구조화`,children:(0,t.jsx)(n.p,{children:`AI 요청을 제목, 요구사항, 범위, 검증 기준으로 나눠 작성할 수 있습니다.`})}),(0,t.jsx)(o,{number:2,title:`코드 블록`,children:(0,t.jsx)(n.p,{children:`코드와 로그를 코드 블록으로 감싸 전달할 수 있습니다.`})}),(0,t.jsx)(o,{number:3,title:`추측 줄이기`,children:(0,t.jsx)(n.p,{children:`Markdown 구조가 AI의 추측을 줄이는 이유를 설명할 수 있습니다.`})})]}),`
`,(0,t.jsx)(c,{title:`핵심 요약`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Markdown은 AI CLI가 읽기 쉬운 공통 문서 형식입니다`}),`
`,(0,t.jsx)(n.li,{children:`제목, 목록, 코드 블록만 알아도 요청 품질이 올라갑니다`}),`
`,(0,t.jsx)(n.li,{children:`좋은 요청은 목표, 요구사항, 범위, 검증 기준을 분리합니다`}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};