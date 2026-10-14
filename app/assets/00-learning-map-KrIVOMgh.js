import{n as e}from"./vendor-react-BH_RQ4nt.js";var t=e();function n(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,LearningObjective:a,Step:o,StepList:s,SummaryBox:c}=n;return r||i(`Callout`,!0),a||i(`LearningObjective`,!0),o||i(`Step`,!0),s||i(`StepList`,!0),c||i(`SummaryBox`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:`처음 시작하기 전에: 학습 지도`}),`
`,(0,t.jsxs)(n.p,{children:[`이 가이드는 `,(0,t.jsx)(n.strong,{children:`공통 기초 → 작업 루틴 → 도구별 실습`}),` 순서로 설계되었습니다. 현재 커리큘럼은 Codex, Antigravity CLI, Claude Code를 다루며, 어떤 도구를 쓰더라도 먼저 같은 기초를 이해해야 합니다.`]}),`
`,(0,t.jsx)(a,{items:[`AI CLI 학습의 전체 순서를 이해한다`,`공통 기초와 도구별 실습의 차이를 구분한다`,`각 단계의 완료 기준을 보고 다음 단계로 넘어갈 수 있다`]}),`
`,(0,t.jsx)(n.h2,{id:`전체-학습-흐름`,"data-toc-id":`전체-학습-흐름`,"data-toc-slug":`전체-학습-흐름`,"data-toc-depth":`0`,children:`전체 학습 흐름`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-mermaid`,children:`flowchart TD
  A[AI 기초] --> B[LLM, 챗봇, 에이전트]
  B --> C[터미널과 CLI]
  C --> D[파일, 폴더, 프로젝트 루트]
  D --> E[프롬프트, 컨텍스트, 토큰]
  E --> F[AI CLI가 일하는 방식]
  F --> G[효율적인 AI CLI 작업 루틴]
  G --> H[Markdown과 구조화된 요청]
  H --> I[CLI 공통 시작하기]
  I --> J[Codex, Antigravity, Claude 도구별 실습]
`})}),`
`,(0,t.jsx)(n.h2,{id:`추천-학습-순서`,"data-toc-id":`추천-학습-순서`,"data-toc-slug":`추천-학습-순서`,"data-toc-depth":`0`,children:`추천 학습 순서`}),`
`,(0,t.jsxs)(s,{children:[(0,t.jsxs)(o,{number:1,title:`공통 기초 이해`,children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`완료 기준`})}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`AI, LLM, 챗봇, 에이전트를 구분할 수 있음`}),`
`,(0,t.jsx)(n.li,{children:`터미널, 셸, CLI를 구분할 수 있음`}),`
`]})]}),(0,t.jsxs)(o,{number:2,title:`프로젝트 맥락 이해`,children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`완료 기준`})}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`프로젝트 루트가 무엇인지 설명 가능`}),`
`,(0,t.jsx)(n.li,{children:`AI CLI를 어디에서 실행해야 하는지 판단 가능`}),`
`]})]}),(0,t.jsxs)(o,{number:3,title:`요청과 맥락 다루기`,children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`완료 기준`})}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`목표, 범위, 검증 기준이 들어간 요청 작성 가능`}),`
`,(0,t.jsx)(n.li,{children:`긴 로그나 큰 파일을 한 번에 던지면 왜 비효율적인지 설명 가능`}),`
`]})]}),(0,t.jsxs)(o,{number:4,title:`작업 루틴 이해`,children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`완료 기준`})}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`파일 읽기, 파일 수정, 명령 실행이 결과 품질에 주는 차이를 설명 가능`}),`
`,(0,t.jsx)(n.li,{children:`작은 작업 단위와 확인 결과가 왜 중요한지 설명 가능`}),`
`]})]}),(0,t.jsxs)(o,{number:5,title:`CLI 공통 시작하기와 도구별 실습`,children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`완료 기준`})}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`선택한 CLI의 버전 확인 가능`}),`
`,(0,t.jsx)(n.li,{children:`작은 읽기 전용 요청 1개 성공`}),`
`,(0,t.jsx)(n.li,{children:`작은 변경 1개를 검증까지 완료`}),`
`]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`지금-어디부터-시작할까`,"data-toc-id":`지금-어디부터-시작할까`,"data-toc-slug":`지금-어디부터-시작할까`,"data-toc-depth":`0`,children:`지금 어디부터 시작할까?`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`현재 상태`}),(0,t.jsx)(n.th,{children:`먼저 볼 챕터`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`AI 자체가 막연함`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`AI는 무엇인가`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`ChatGPT와 AI CLI 차이가 헷갈림`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`LLM, 챗봇, 에이전트`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`터미널이 낯설음`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`터미널과 CLI 기초`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`프로젝트 폴더 구조가 헷갈림`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`파일, 폴더, 프로젝트 루트`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`좋은 질문을 못 쓰겠음`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`프롬프트, 컨텍스트, 토큰`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`AI CLI가 실제로 어떻게 일하는지 궁금함`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`AI CLI가 일하는 방식`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`실전 작업 흐름이 필요함`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`효율적인 AI CLI 작업 루틴`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`요구사항을 깔끔하게 전달하고 싶음`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`Markdown과 구조화된 요청`})})]})]})]}),`
`,(0,t.jsx)(r,{variant:`tip`,title:`학습 원칙`,children:(0,t.jsx)(n.p,{children:`각 챕터는 개념 설명을 먼저 읽고, Mermaid 그림으로 구조를 확인한 뒤, 완료 기준을 스스로 말할 수 있으면 다음 단계로 넘어가세요.`})}),`
`,(0,t.jsx)(n.h2,{id:`실습`,"data-toc-id":`실습`,"data-toc-slug":`실습`,"data-toc-depth":`0`,children:`실습`}),`
`,(0,t.jsx)(n.p,{children:`지금 자신의 상태를 한 줄로 적고, 다음에 읽을 챕터 하나를 고릅니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인 항목`}),(0,t.jsx)(n.th,{children:`통과 기준`}),(0,t.jsx)(n.th,{children:`통과하지 못하면`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`현재 상태 한 줄`}),(0,t.jsx)(n.td,{children:`"터미널이 낯설다"처럼 구체적인 문장으로 적었다`}),(0,t.jsxs)(n.td,{children:[`위 표의 `,(0,t.jsx)(n.code,{children:`현재 상태`}),` 열에서 가장 가까운 문장을 그대로 가져옵니다`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`다음 챕터 1개`}),(0,t.jsx)(n.td,{children:`챕터 이름을 하나만 지목했다`}),(0,t.jsx)(n.td,{children:`여러 개가 끌리면 목록에서 더 위에 있는 챕터를 먼저 선택합니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`완료 판단 기준`}),(0,t.jsx)(n.td,{children:`그 챕터의 완료 기준을 미리 읽고 말할 수 있다`}),(0,t.jsx)(n.td,{children:`챕터 끝의 완료 기준을 먼저 읽고 시작합니다`})]})]})]}),`
`,(0,t.jsx)(c,{title:`핵심 요약`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`공통 기초를 먼저 배우고 도구별 실습으로 넘어갑니다`}),`
`,(0,t.jsx)(n.li,{children:`AI CLI 학습은 개념, 프로젝트 맥락, 작업 루틴을 함께 배워야 합니다`}),`
`,(0,t.jsx)(n.li,{children:`완료 기준을 말할 수 없으면 다음 도구 실습에서 막힐 가능성이 큽니다`}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};