import{n as e}from"./vendor-react-BH_RQ4nt.js";var t=e();function n(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,LearningObjective:a,Step:o,StepList:s,SummaryBox:c}=n;return r||i(`Callout`,!0),a||i(`LearningObjective`,!0),o||i(`Step`,!0),s||i(`StepList`,!0),c||i(`SummaryBox`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:`프롬프트, 컨텍스트, 토큰`}),`
`,(0,t.jsx)(n.p,{children:`프롬프트는 AI에게 주는 요청입니다. 컨텍스트는 AI가 참고하는 배경 정보입니다. 토큰은 AI가 글을 처리하는 작은 조각 단위입니다.`}),`
`,(0,t.jsx)(a,{items:[`프롬프트, 컨텍스트, 토큰을 구분한다`,`좋은 프롬프트의 구조를 이해한다`,`긴 파일과 긴 로그를 다룰 때 토큰을 의식한다`]}),`
`,(0,t.jsx)(n.h2,{id:`세-개념의-관계`,"data-toc-id":`세-개념의-관계`,"data-toc-slug":`세-개념의-관계`,"data-toc-depth":`0`,children:`세 개념의 관계`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-mermaid`,children:`flowchart LR
  Prompt[프롬프트] --> Model[AI 모델]
  Context[컨텍스트] --> Model
  Files[파일 내용] --> Context
  Logs[명령 결과] --> Context
  History[이전 대화] --> Context
  Model --> Answer[응답 또는 작업]
  Context -.사용량.-> Token[토큰]
  Answer -.사용량.-> Token
`})}),`
`,(0,t.jsx)(n.h2,{id:`프롬프트`,"data-toc-id":`프롬프트`,"data-toc-slug":`프롬프트`,"data-toc-depth":`0`,children:`프롬프트`}),`
`,(0,t.jsx)(n.p,{children:`프롬프트는 AI에게 주는 질문이나 지시문입니다. AI CLI에서는 단순 질문보다 작업 계약에 가깝게 작성하는 것이 좋습니다.`}),`
`,(0,t.jsx)(n.p,{children:`나쁜 프롬프트는 모호합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`이거 고쳐줘.
`})}),`
`,(0,t.jsx)(n.p,{children:`좋은 프롬프트는 목표, 범위, 검증 기준을 포함합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`목표: 로그인 버튼에 로딩 상태를 추가
범위: LoginButton 컴포넌트만 수정
검증: 기존 테스트 통과 확인
`})}),`
`,(0,t.jsx)(n.h2,{id:`컨텍스트`,"data-toc-id":`컨텍스트`,"data-toc-slug":`컨텍스트`,"data-toc-depth":`0`,children:`컨텍스트`}),`
`,(0,t.jsx)(n.p,{children:`컨텍스트는 AI가 답변하거나 작업할 때 참고하는 정보입니다. 현재 대화, 사용자가 붙여준 설명, AI가 읽은 파일, 명령 실행 결과가 모두 컨텍스트가 됩니다.`}),`
`,(0,t.jsx)(n.p,{children:`AI가 프로젝트 전체를 자동으로 완벽히 아는 것은 아닙니다. 필요한 파일을 읽게 하고, 중요한 제약 조건을 명시해야 합니다.`}),`
`,(0,t.jsx)(n.h2,{id:`토큰`,"data-toc-id":`토큰`,"data-toc-slug":`토큰`,"data-toc-depth":`0`,children:`토큰`}),`
`,(0,t.jsx)(n.p,{children:`토큰은 AI가 텍스트를 처리하는 작은 단위입니다. 한국어 한 글자, 영어 단어 일부, 기호 등이 토큰으로 쪼개질 수 있습니다.`}),`
`,(0,t.jsx)(n.p,{children:`토큰이 중요한 이유는 세 가지입니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`이유`}),(0,t.jsx)(n.th,{children:`영향`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`입력 한도`}),(0,t.jsx)(n.td,{children:`너무 긴 파일이나 대화는 한 번에 다 못 볼 수 있음`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`속도`}),(0,t.jsx)(n.td,{children:`토큰이 많을수록 느려질 수 있음`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`비용`}),(0,t.jsx)(n.td,{children:`사용 환경에 따라 비용과 연결될 수 있음`})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`좋은-요청-구조`,"data-toc-id":`좋은-요청-구조`,"data-toc-slug":`좋은-요청-구조`,"data-toc-depth":`0`,children:`좋은 요청 구조`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`요소`}),(0,t.jsx)(n.th,{children:`질문`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`목표`}),(0,t.jsx)(n.td,{children:`무엇이 끝나야 하는가`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`맥락`}),(0,t.jsx)(n.td,{children:`왜 필요한가, 어떤 배경이 있는가`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`범위`}),(0,t.jsx)(n.td,{children:`어디까지 수정해도 되는가`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`검증`}),(0,t.jsx)(n.td,{children:`무엇으로 성공을 확인할 것인가`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`보고`}),(0,t.jsx)(n.td,{children:`완료 후 무엇을 알려줘야 하는가`})]})]})]}),`
`,(0,t.jsx)(r,{variant:`warning`,title:`긴 로그를 줄이는 습관`,children:(0,t.jsx)(n.p,{children:`긴 로그 전체를 붙이기보다 실패한 명령, 핵심 에러 메시지, 재현 조건을 먼저 전달하세요. 필요하면 AI에게 추가 로그를 읽게 하면 됩니다.`})}),`
`,(0,t.jsx)(n.h2,{id:`실습`,"data-toc-id":`실습`,"data-toc-slug":`실습`,"data-toc-depth":`0`,children:`실습`}),`
`,(0,t.jsx)(n.p,{children:`아래 나쁜 요청을 좋은 요청으로 고쳐 작성합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`나쁜 요청: 로그인 좀 고쳐줘

좋은 요청: (목표 / 범위 / 검증 기준 / 제약을 각각 한 줄로)
`})}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인 항목`}),(0,t.jsx)(n.th,{children:`통과 기준`}),(0,t.jsx)(n.th,{children:`통과하지 못하면`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`목표`}),(0,t.jsx)(n.td,{children:`무엇이 끝나야 완료인지 한 문장으로 적혔다`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`좋은 요청 구조`}),` 절의 목표 항목을 다시 읽습니다`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`범위`}),(0,t.jsx)(n.td,{children:`수정해도 되는 파일이나 폴더가 지정되어 있다`}),(0,t.jsx)(n.td,{children:`범위가 없으면 에이전트가 엉뚱한 파일을 고칠 수 있습니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`검증 기준`}),(0,t.jsx)(n.td,{children:`확인에 사용할 명령이나 결과가 적혀 있다`}),(0,t.jsx)(n.td,{children:`테스트 명령이나 화면 동작 중 하나를 정합니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`길이 판단`}),(0,t.jsx)(n.td,{children:`불필요한 파일 전체 붙여넣기를 피했다고 말할 수 있다`}),(0,t.jsx)(n.td,{children:`토큰 절에서 맥락이 길어질 때의 문제를 다시 확인합니다`})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`완료-기준`,"data-toc-id":`완료-기준`,"data-toc-slug":`완료-기준`,"data-toc-depth":`0`,children:`완료 기준`}),`
`,(0,t.jsxs)(s,{children:[(0,t.jsx)(o,{number:1,title:`프롬프트 설명`,children:(0,t.jsx)(n.p,{children:`프롬프트를 AI에게 주는 작업 요청이라고 설명할 수 있습니다.`})}),(0,t.jsx)(o,{number:2,title:`컨텍스트 설명`,children:(0,t.jsx)(n.p,{children:`컨텍스트를 AI가 참고하는 파일, 대화, 명령 결과라고 설명할 수 있습니다.`})}),(0,t.jsx)(o,{number:3,title:`토큰 설명`,children:(0,t.jsx)(n.p,{children:`토큰을 AI가 텍스트를 처리하는 작은 조각 단위라고 설명할 수 있습니다.`})})]}),`
`,(0,t.jsx)(c,{title:`핵심 요약`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`프롬프트는 요청입니다`}),`
`,(0,t.jsx)(n.li,{children:`컨텍스트는 참고자료입니다`}),`
`,(0,t.jsx)(n.li,{children:`토큰은 AI가 처리하는 텍스트 조각입니다`}),`
`,(0,t.jsx)(n.li,{children:`좋은 요청은 목표, 맥락, 범위, 검증, 보고 방식을 포함합니다`}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};