import{n as e}from"./vendor-react-BH_RQ4nt.js";var t=e();function n(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,LearningObjective:a,Step:o,StepList:s,SummaryBox:c}=n;return r||i(`Callout`,!0),a||i(`LearningObjective`,!0),o||i(`Step`,!0),s||i(`StepList`,!0),c||i(`SummaryBox`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:`AI CLI가 일하는 방식`}),`
`,(0,t.jsx)(n.p,{children:`AI CLI는 모델 하나만으로 움직이지 않습니다. 모델이 실제 작업 결과를 만들려면 파일 읽기, 검색, 명령 실행, 브라우저 조작 같은 도구와 이를 연결하는 실행 환경이 필요합니다.`}),`
`,(0,t.jsx)(a,{items:[`AI CLI의 도구 사용 구조를 이해한다`,`하네스를 모델과 도구를 연결하는 실행 환경으로 설명할 수 있다`,`작업 품질을 높이기 위해 실행 결과를 다시 맥락으로 사용하는 흐름을 이해한다`]}),`
`,(0,t.jsx)(n.h2,{id:`전체-구조`,"data-toc-id":`전체-구조`,"data-toc-slug":`전체-구조`,"data-toc-depth":`0`,children:`전체 구조`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-mermaid`,children:`flowchart TD
  User[사용자] --> Harness[하네스]
  Harness --> Model[AI 모델]
  Harness --> Tools[도구]
  Harness --> Context[작업 맥락]
  Tools --> Read[파일 읽기]
  Tools --> Write[파일 수정]
  Tools --> Run[명령 실행]
  Tools --> Search[검색]
  Tools --> Browser[브라우저 조작]
  Context --> Result[결과 요약]
`})}),`
`,(0,t.jsx)(n.h2,{id:`도구`,"data-toc-id":`도구`,"data-toc-slug":`도구`,"data-toc-depth":`0`,children:`도구`}),`
`,(0,t.jsx)(n.p,{children:`도구는 AI가 실제 작업을 하기 위해 사용하는 기능입니다. 모델은 문장을 생성하지만, 파일을 읽거나 명령을 실행하려면 별도 도구가 필요합니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`도구`}),(0,t.jsx)(n.th,{children:`할 수 있는 일`}),(0,t.jsx)(n.th,{children:`결과 품질에 주는 영향`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`파일 읽기`}),(0,t.jsx)(n.td,{children:`코드와 문서 확인`}),(0,t.jsx)(n.td,{children:`근거 있는 답변`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`검색`}),(0,t.jsx)(n.td,{children:`관련 파일 찾기`}),(0,t.jsx)(n.td,{children:`누락 감소`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`파일 수정`}),(0,t.jsx)(n.td,{children:`코드와 문서 변경`}),(0,t.jsx)(n.td,{children:`실제 산출물 생성`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`명령 실행`}),(0,t.jsx)(n.td,{children:`테스트, 빌드, 스크립트 실행`}),(0,t.jsx)(n.td,{children:`결과 확인`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`브라우저 조작`}),(0,t.jsx)(n.td,{children:`화면 확인, 폼 입력, 스크린샷`}),(0,t.jsx)(n.td,{children:`UI 작업 검증`})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`하네스`,"data-toc-id":`하네스`,"data-toc-slug":`하네스`,"data-toc-depth":`0`,children:`하네스`}),`
`,(0,t.jsx)(n.p,{children:`하네스는 AI 모델이 실제 컴퓨터에서 일할 수 있게 도구, 로그, 실행 결과, 현재 작업 맥락을 묶어주는 작업대입니다.`}),`
`,(0,t.jsx)(n.p,{children:`하네스는 사용자의 요청을 모델에 전달하고, 모델이 도구를 사용해 얻은 결과를 다시 모델에게 전달합니다. 이 반복 덕분에 AI CLI는 추측만 하는 대신 실제 파일과 실행 결과를 근거로 다음 답변을 개선할 수 있습니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-mermaid`,children:`sequenceDiagram
  participant U as 사용자
  participant H as 하네스
  participant M as 모델
  participant T as 도구
  U->>H: 작업 요청
  H->>M: 요청과 현재 맥락 전달
  M->>H: 파일 읽기/수정/명령 실행 요청
  H->>T: 도구 실행
  T->>H: 실행 결과 반환
  H->>M: 결과 전달
  M->>U: 다음 작업 또는 완료 보고
`})}),`
`,(0,t.jsx)(n.h2,{id:`작업-맥락`,"data-toc-id":`작업-맥락`,"data-toc-slug":`작업-맥락`,"data-toc-depth":`0`,children:`작업 맥락`}),`
`,(0,t.jsx)(n.p,{children:`AI CLI 품질은 어떤 맥락을 받았는지에 크게 좌우됩니다. 같은 요청이라도 현재 폴더, 관련 파일, 실패 로그, 기대 출력이 포함되면 결과가 훨씬 구체적입니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`맥락`}),(0,t.jsx)(n.th,{children:`예시`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`현재 위치`}),(0,t.jsx)(n.td,{children:`프로젝트 루트, 작업 브랜치`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`관련 파일`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`README.md`}),`, `,(0,t.jsx)(n.code,{children:`src/`}),`, 테스트 파일`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`실행 결과`}),(0,t.jsx)(n.td,{children:`테스트 실패 로그, 빌드 결과`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`기대 출력`}),(0,t.jsx)(n.td,{children:`표, 단계별 설명, 수정 diff`})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`결과를-다시-개선하기`,"data-toc-id":`결과를-다시-개선하기`,"data-toc-slug":`결과를-다시-개선하기`,"data-toc-depth":`0`,children:`결과를 다시 개선하기`}),`
`,(0,t.jsx)(n.p,{children:`처음 답변이 모호하면 도구를 더 쓰게 하거나 출력 형식을 다시 지정합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`관련 파일을 먼저 찾아서 근거 파일명과 함께 다시 설명해줘.
`})}),`
`,(0,t.jsx)(r,{variant:`tip`,title:`좋은 결과를 만드는 요청`,children:(0,t.jsx)(n.p,{children:`도구를 사용하는 AI CLI에는 "무엇을 할지"뿐 아니라 "어떤 근거를 보고 판단할지"를 함께 알려주는 것이 좋습니다.`})}),`
`,(0,t.jsx)(n.h2,{id:`실습`,"data-toc-id":`실습`,"data-toc-slug":`실습`,"data-toc-depth":`0`,children:`실습`}),`
`,(0,t.jsx)(n.p,{children:`요청 하나를 정하고, 에이전트가 어떤 도구를 어떤 순서로 사용할지 미리 예측합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`요청: README에 적힌 테스트 명령이 실제로 동작하는지 확인해줘

예측: 1) ? 2) ? 3) ?
`})}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인 항목`}),(0,t.jsx)(n.th,{children:`통과 기준`}),(0,t.jsx)(n.th,{children:`통과하지 못하면`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`도구 순서`}),(0,t.jsx)(n.td,{children:`파일 읽기 → 명령 실행 → 결과 보고 순서로 예측했다`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`도구`}),` 절의 목록을 다시 읽습니다`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`승인 지점`}),(0,t.jsx)(n.td,{children:`명령 실행 단계에서 승인이 필요하다고 지목했다`}),(0,t.jsx)(n.td,{children:`하네스가 승인을 요구하는 이유를 확인합니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`확인 방법`}),(0,t.jsx)(n.td,{children:`실제 세션에서 표시되는 도구 호출과 비교할 계획이 있다`}),(0,t.jsx)(n.td,{children:`세션을 열어 같은 요청을 보내고 표시되는 단계를 봅니다`})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`완료-기준`,"data-toc-id":`완료-기준`,"data-toc-slug":`완료-기준`,"data-toc-depth":`0`,children:`완료 기준`}),`
`,(0,t.jsxs)(s,{children:[(0,t.jsx)(o,{number:1,title:`도구 설명`,children:(0,t.jsx)(n.p,{children:`AI가 파일을 읽고 수정하고 명령을 실행하려면 도구가 필요하다고 설명할 수 있습니다.`})}),(0,t.jsx)(o,{number:2,title:`하네스 설명`,children:(0,t.jsx)(n.p,{children:`하네스를 모델, 도구, 실행 로그, 작업 맥락을 묶는 실행 환경이라고 설명할 수 있습니다.`})}),(0,t.jsx)(o,{number:3,title:`맥락 설명`,children:(0,t.jsx)(n.p,{children:`파일, 로그, 기대 출력이 결과 품질에 어떤 영향을 주는지 설명할 수 있습니다.`})})]}),`
`,(0,t.jsx)(c,{title:`핵심 요약`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`모델은 문장을 만들고, 도구는 실제 작업을 수행합니다`}),`
`,(0,t.jsx)(n.li,{children:`하네스는 모델과 도구를 연결하는 실행 환경입니다`}),`
`,(0,t.jsx)(n.li,{children:`좋은 맥락과 실행 결과를 반복해서 제공하면 AI CLI 결과가 더 구체적입니다`}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};