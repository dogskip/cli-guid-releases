import{n as e}from"./vendor-react-BH_RQ4nt.js";var t=e();function n(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,LearningObjective:a,Step:o,StepList:s,SummaryBox:c}=n;return r||i(`Callout`,!0),a||i(`LearningObjective`,!0),o||i(`Step`,!0),s||i(`StepList`,!0),c||i(`SummaryBox`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:`효율적인 AI CLI 작업 루틴`}),`
`,(0,t.jsx)(n.p,{children:`AI CLI는 목표가 작고 맥락이 분명할수록 결과가 좋아집니다. 효율적인 사용의 핵심은 작은 작업 단위, 명확한 출력 기준, 반복 개선입니다.`}),`
`,(0,t.jsx)(a,{items:[`AI CLI 작업의 기본 루프를 설명한다`,`작업 전후 확인 흐름을 이해한다`,`결과 보고에서 확인해야 할 항목을 안다`]}),`
`,(0,t.jsx)(n.h2,{id:`기본-루프`,"data-toc-id":`기본-루프`,"data-toc-slug":`기본-루프`,"data-toc-depth":`0`,children:`기본 루프`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-mermaid`,children:`flowchart TD
  A[현재 상태 확인] --> B[목표와 범위 지정]
  B --> C[관련 파일 읽기]
  C --> D[작은 변경]
  D --> E[테스트 또는 빌드]
  E --> F[diff 확인]
  F --> G[결과 보고]
  G --> H{다음 작업?}
  H -->|예| B
  H -->|아니오| I[종료]
`})}),`
`,(0,t.jsx)(n.h2,{id:`1-현재-상태-확인`,"data-toc-id":`1-현재-상태-확인`,"data-toc-slug":`1-현재-상태-확인`,"data-toc-depth":`0`,children:`1. 현재 상태 확인`}),`
`,(0,t.jsx)(n.p,{children:`작업 전에는 현재 프로젝트 상태를 확인합니다. AI가 같은 파일을 반복해서 다시 읽지 않아도 되도록 현재 위치와 변경사항을 먼저 정리합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`git status --short
`})}),`
`,(0,t.jsx)(n.h2,{id:`2-목표와-범위-지정`,"data-toc-id":`2-목표와-범위-지정`,"data-toc-slug":`2-목표와-범위-지정`,"data-toc-depth":`0`,children:`2. 목표와 범위 지정`}),`
`,(0,t.jsx)(n.p,{children:`AI에게는 넓은 목표보다 작은 작업 계약이 좋습니다. 목표, 범위, 출력 형식, 확인 방법을 함께 주면 결과가 빨리 안정됩니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`목표: 검색 결과 클릭 시 해당 섹션으로 이동하게 해줘.
범위: 검색 관련 컴포넌트와 테스트만 수정해줘.
검증: 관련 테스트를 실행하고 결과를 알려줘.
출력: 변경 파일, 핵심 변경, 확인 결과 순서로 정리해줘.
`})}),`
`,(0,t.jsx)(n.h2,{id:`3-관련-파일-읽기`,"data-toc-id":`3-관련-파일-읽기`,"data-toc-slug":`3-관련-파일-읽기`,"data-toc-depth":`0`,children:`3. 관련 파일 읽기`}),`
`,(0,t.jsx)(n.p,{children:`AI가 바로 수정하기 전에 관련 파일을 읽게 하는 것이 좋습니다. 어떤 파일을 읽었고 왜 관련이 있는지 먼저 설명하게 하면 잘못된 추측을 줄일 수 있습니다.`}),`
`,(0,t.jsx)(n.h2,{id:`4-작은-변경`,"data-toc-id":`4-작은-변경`,"data-toc-slug":`4-작은-변경`,"data-toc-depth":`0`,children:`4. 작은 변경`}),`
`,(0,t.jsx)(n.p,{children:`한 번에 큰 기능 전체를 맡기지 말고, 검증 가능한 작은 단위로 나눕니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`나쁜 단위`}),(0,t.jsx)(n.th,{children:`좋은 단위`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`로그인 시스템 전체 고쳐줘`}),(0,t.jsx)(n.td,{children:`로그인 버튼 로딩 상태만 추가해줘`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`성능 개선해줘`}),(0,t.jsx)(n.td,{children:`검색 결과 렌더링이 느린 원인만 찾아줘`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`UI 예쁘게 바꿔줘`}),(0,t.jsx)(n.td,{children:`헤더의 브랜드 아이콘 크기만 정리해줘`})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`5-테스트-또는-빌드`,"data-toc-id":`5-테스트-또는-빌드`,"data-toc-slug":`5-테스트-또는-빌드`,"data-toc-depth":`0`,children:`5. 테스트 또는 빌드`}),`
`,(0,t.jsx)(n.p,{children:`변경 후에는 성공 기준을 명령으로 확인합니다. 테스트가 없으면 빌드, 타입 체크, 수동 확인 기준이라도 필요합니다.`}),`
`,(0,t.jsx)(n.h2,{id:`6-diff-확인`,"data-toc-id":`6-diff-확인`,"data-toc-slug":`6-diff-확인`,"data-toc-depth":`0`,children:`6. diff 확인`}),`
`,(0,t.jsx)(n.p,{children:`AI가 바꾼 내용을 사람이 확인합니다. diff를 보면 요청과 무관한 변경이 섞였는지, 설명과 실제 변경이 일치하는지 알 수 있습니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`git diff --stat
git diff
`})}),`
`,(0,t.jsx)(n.h2,{id:`7-결과-보고`,"data-toc-id":`7-결과-보고`,"data-toc-slug":`7-결과-보고`,"data-toc-depth":`0`,children:`7. 결과 보고`}),`
`,(0,t.jsx)(n.p,{children:`완료 보고에는 최소 네 가지가 있어야 합니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`항목`}),(0,t.jsx)(n.th,{children:`이유`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`변경 파일`}),(0,t.jsx)(n.td,{children:`영향 범위를 확인`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`실행한 검증`}),(0,t.jsx)(n.td,{children:`성공 기준 확인`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`생략한 검증`}),(0,t.jsx)(n.td,{children:`추가 확인 필요 여부 판단`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`다음 개선점`}),(0,t.jsx)(n.td,{children:`이어서 할 작업 판단`})]})]})]}),`
`,(0,t.jsx)(r,{variant:`success`,title:`가장 중요한 습관`,children:(0,t.jsx)(n.p,{children:`AI CLI는 "한 번에 끝내는 도구"가 아니라 "작게 맡기고 결과를 비교하며 개선하는 도구"로 써야 합니다.`})}),`
`,(0,t.jsx)(n.h2,{id:`실습`,"data-toc-id":`실습`,"data-toc-slug":`실습`,"data-toc-depth":`0`,children:`실습`}),`
`,(0,t.jsx)(n.p,{children:`파일을 바꾸지 않은 상태에서 작업 루프의 앞 세 단계만 직접 실행합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`git status --short
git diff --stat
`})}),`
`,(0,t.jsx)(n.p,{children:`이어서 아래 요청을 그대로 붙여 넣습니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`지금 저장소 상태를 요약하고, 내가 작은 변경을 시작해도 되는지 판단해줘. 아직 파일은 수정하지 마.
`})}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인 항목`}),(0,t.jsx)(n.th,{children:`통과 기준`}),(0,t.jsx)(n.th,{children:`통과하지 못하면`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`현재 상태 확인`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`git status --short`}),` 결과를 스스로 설명할 수 있다`]}),(0,t.jsx)(n.td,{children:`모르는 변경이 있으면 먼저 팀에 확인합니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`범위 선언`}),(0,t.jsx)(n.td,{children:`다음에 바꿀 파일을 하나로 좁혀 말할 수 있다`}),(0,t.jsx)(n.td,{children:`목표와 범위 절을 다시 읽습니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`응답 판정`}),(0,t.jsx)(n.td,{children:`답변이 파일을 수정하지 않고 판단만 했다`}),(0,t.jsx)(n.td,{children:`요청 문장에 수정 금지 조건이 들어갔는지 확인합니다`})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`완료-기준`,"data-toc-id":`완료-기준`,"data-toc-slug":`완료-기준`,"data-toc-depth":`0`,children:`완료 기준`}),`
`,(0,t.jsxs)(s,{children:[(0,t.jsx)(o,{number:1,title:`작업 루프 설명`,children:(0,t.jsx)(n.p,{children:`현재 상태 확인, 범위 지정, 작은 변경, 검증, diff 확인, 보고 순서를 설명할 수 있습니다.`})}),(0,t.jsx)(o,{number:2,title:`효율적인 요청 작성`,children:(0,t.jsx)(n.p,{children:`목표, 범위, 출력 형식, 확인 방법이 포함된 요청을 작성할 수 있습니다.`})}),(0,t.jsx)(o,{number:3,title:`완료 판단`,children:(0,t.jsx)(n.p,{children:`검증 결과와 diff를 보고 작업이 끝났는지 판단해야 한다는 점을 이해합니다.`})})]}),`
`,(0,t.jsx)(c,{title:`핵심 요약`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`AI CLI 작업은 작게 나누고 반복 개선해야 합니다`}),`
`,(0,t.jsx)(n.li,{children:`작업 전에는 현재 상태를 확인하고, 작업 후에는 diff를 확인합니다`}),`
`,(0,t.jsx)(n.li,{children:`완료 보고에는 변경 파일, 확인 결과, 생략한 검증, 다음 개선점이 필요합니다`}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};