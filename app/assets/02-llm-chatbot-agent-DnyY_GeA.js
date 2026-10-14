import{n as e}from"./vendor-react-BH_RQ4nt.js";var t=e();function n(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,LearningObjective:a,Step:o,StepList:s,SummaryBox:c}=n;return r||i(`Callout`,!0),a||i(`LearningObjective`,!0),o||i(`Step`,!0),s||i(`StepList`,!0),c||i(`SummaryBox`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:`LLM, 챗봇, 에이전트`}),`
`,(0,t.jsx)(n.p,{children:`LLM은 문장을 이해하고 생성하는 AI 모델입니다. 챗봇은 LLM을 대화 형태로 사용하는 방식이고, 에이전트는 LLM이 도구를 사용해 실제 작업을 진행하는 방식입니다.`}),`
`,(0,t.jsx)(a,{items:[`LLM, 챗봇, 에이전트를 구분한다`,`AI CLI가 왜 에이전트에 가까운지 이해한다`,`대답을 받는 사용과 작업을 맡기는 사용을 구분한다`]}),`
`,(0,t.jsx)(n.h2,{id:`관계-한눈에-보기`,"data-toc-id":`관계-한눈에-보기`,"data-toc-slug":`관계-한눈에-보기`,"data-toc-depth":`0`,children:`관계 한눈에 보기`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-mermaid`,children:`flowchart TD
  AI[AI] --> LLM[LLM]
  LLM --> Chatbot[챗봇]
  LLM --> Agent[에이전트]
  Chatbot --> Answer[질문에 답함]
  Agent --> Plan[작업 계획]
  Agent --> Read[파일 읽기]
  Agent --> Edit[파일 수정]
  Agent --> Run[명령 실행]
  Agent --> Report[결과 보고]
`})}),`
`,(0,t.jsx)(n.h2,{id:`llm`,"data-toc-id":`llm`,"data-toc-slug":`llm`,"data-toc-depth":`0`,children:`LLM`}),`
`,(0,t.jsx)(n.p,{children:`LLM은 Large Language Model의 줄임말입니다. 아주 많은 텍스트 패턴을 학습한 뒤, 사용자가 입력한 문장과 현재 맥락을 바탕으로 다음에 올 내용을 생성합니다.`}),`
`,(0,t.jsx)(n.p,{children:`LLM은 "정답 데이터베이스"가 아닙니다. 질문에 대해 가장 그럴듯한 설명이나 코드를 만들 수 있지만, 실제 프로젝트 파일이나 최신 상황을 확인하지 않으면 틀릴 수 있습니다.`}),`
`,(0,t.jsx)(n.h2,{id:`챗봇`,"data-toc-id":`챗봇`,"data-toc-slug":`챗봇`,"data-toc-depth":`0`,children:`챗봇`}),`
`,(0,t.jsx)(n.p,{children:`챗봇은 LLM을 대화 화면에서 사용하는 형태입니다. 사용자가 질문하면 답하고, 다시 질문하면 이어서 답합니다. 보통 설명, 비교, 요약, 아이디어 정리에 적합합니다.`}),`
`,(0,t.jsx)(n.p,{children:`챗봇은 기본적으로 조언자에 가깝습니다. 실제 파일을 직접 수정하거나 테스트를 실행하는 능력은 제한적이거나 별도 도구가 필요합니다.`}),`
`,(0,t.jsx)(n.h2,{id:`에이전트`,"data-toc-id":`에이전트`,"data-toc-slug":`에이전트`,"data-toc-depth":`0`,children:`에이전트`}),`
`,(0,t.jsx)(n.p,{children:`에이전트는 목표를 받고 여러 단계를 진행하는 AI 사용 방식입니다. 에이전트는 필요한 정보를 찾고, 파일을 읽고, 수정하고, 명령을 실행하고, 결과를 보고할 수 있습니다.`}),`
`,(0,t.jsx)(n.p,{children:`AI CLI의 핵심은 에이전트 방식입니다. 터미널 안에서 프로젝트를 대상으로 일하기 때문에, "질문에 답하기"보다 "작업을 단계적으로 진행하기"가 중요합니다.`}),`
`,(0,t.jsx)(n.h2,{id:`비교`,"data-toc-id":`비교`,"data-toc-slug":`비교`,"data-toc-depth":`0`,children:`비교`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`구분`}),(0,t.jsx)(n.th,{children:`챗봇`}),(0,t.jsx)(n.th,{children:`에이전트`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`중심`}),(0,t.jsx)(n.td,{children:`대화와 답변`}),(0,t.jsx)(n.td,{children:`목표 달성과 작업`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`입력`}),(0,t.jsx)(n.td,{children:`질문, 설명 요청`}),(0,t.jsx)(n.td,{children:`목표, 범위, 검증 기준`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`출력`}),(0,t.jsx)(n.td,{children:`답변, 예시, 코드 조각`}),(0,t.jsx)(n.td,{children:`변경 파일, 실행 결과, 보고`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`주의점`}),(0,t.jsx)(n.td,{children:`틀린 설명`}),(0,t.jsx)(n.td,{children:`실제 파일 변경과 명령 실행`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`좋은 사용법`}),(0,t.jsx)(n.td,{children:`물어보고 이해하기`}),(0,t.jsx)(n.td,{children:`작게 맡기고 검증하기`})]})]})]}),`
`,(0,t.jsx)(r,{variant:`tip`,title:`실무 감각`,children:(0,t.jsx)(n.p,{children:`챗봇에게는 "이게 뭔지 설명해줘"가 잘 맞고, 에이전트에게는 "이 범위 안에서 수정하고 이 테스트로 검증해줘"가 잘 맞습니다.`})}),`
`,(0,t.jsx)(n.h2,{id:`실습`,"data-toc-id":`실습`,"data-toc-slug":`실습`,"data-toc-depth":`0`,children:`실습`}),`
`,(0,t.jsx)(n.p,{children:`같은 문제를 챗봇에게 물을 때와 에이전트에게 맡길 때로 나누어 각각 한 문장씩 작성합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`상황: 테스트 하나가 실패하고 있다.

챗봇용 질문: (이게 무엇인지 이해하기 위한 질문)
에이전트용 요청: (목표 + 범위 + 검증 기준)
`})}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인 항목`}),(0,t.jsx)(n.th,{children:`통과 기준`}),(0,t.jsx)(n.th,{children:`통과하지 못하면`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`챗봇용 질문`}),(0,t.jsx)(n.td,{children:`설명이나 원인 이해를 요청하는 문장이다`}),(0,t.jsxs)(n.td,{children:[`비교 표의 `,(0,t.jsx)(n.code,{children:`입력`}),` 행을 다시 읽습니다`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`에이전트용 요청`}),(0,t.jsx)(n.td,{children:`목표, 수정 범위, 검증 명령이 모두 들어 있다`}),(0,t.jsx)(n.td,{children:`검증 기준이 빠지지 않았는지부터 확인합니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`구분 설명`}),(0,t.jsx)(n.td,{children:`두 문장이 왜 다른지 한 문장으로 말할 수 있다`}),(0,t.jsx)(n.td,{children:`챗봇은 답변, 에이전트는 작업이라는 차이부터 정리합니다`})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`완료-기준`,"data-toc-id":`완료-기준`,"data-toc-slug":`완료-기준`,"data-toc-depth":`0`,children:`완료 기준`}),`
`,(0,t.jsxs)(s,{children:[(0,t.jsx)(o,{number:1,title:`LLM 설명`,children:(0,t.jsx)(n.p,{children:`LLM을 문장을 생성하는 모델이라고 설명할 수 있습니다.`})}),(0,t.jsx)(o,{number:2,title:`챗봇 구분`,children:(0,t.jsx)(n.p,{children:`챗봇은 대답 중심이라는 점을 설명할 수 있습니다.`})}),(0,t.jsx)(o,{number:3,title:`에이전트 구분`,children:(0,t.jsx)(n.p,{children:`에이전트는 목표를 받아 도구로 작업을 진행한다는 점을 설명할 수 있습니다.`})})]}),`
`,(0,t.jsx)(c,{title:`핵심 요약`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`LLM은 문장을 생성하는 모델입니다`}),`
`,(0,t.jsx)(n.li,{children:`챗봇은 LLM을 대화로 사용하는 방식입니다`}),`
`,(0,t.jsx)(n.li,{children:`에이전트는 LLM이 도구를 사용해 실제 작업을 진행하는 방식입니다`}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};