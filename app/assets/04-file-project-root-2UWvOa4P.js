import{n as e}from"./vendor-react-BH_RQ4nt.js";var t=e();function n(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,LearningObjective:a,Step:o,StepList:s,SummaryBox:c}=n;return r||i(`Callout`,!0),a||i(`LearningObjective`,!0),o||i(`Step`,!0),s||i(`StepList`,!0),c||i(`SummaryBox`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:`파일, 폴더, 프로젝트 루트`}),`
`,(0,t.jsx)(n.p,{children:`AI CLI를 제대로 쓰려면 프로젝트가 파일과 폴더로 구성되어 있고, 그 시작점이 프로젝트 루트라는 사실을 이해해야 합니다.`}),`
`,(0,t.jsx)(a,{items:[`파일, 폴더, 경로, 프로젝트 루트를 구분한다`,`AI CLI를 프로젝트 루트에서 실행해야 하는 이유를 이해한다`,`대표적인 프로젝트 파일의 역할을 파악한다`]}),`
`,(0,t.jsx)(n.h2,{id:`프로젝트는-폴더-구조입니다`,"data-toc-id":`프로젝트는-폴더-구조입니다`,"data-toc-slug":`프로젝트는-폴더-구조입니다`,"data-toc-depth":`0`,children:`프로젝트는 폴더 구조입니다`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-mermaid`,children:`flowchart TD
  Root[프로젝트 루트]
  Root --> Readme[README.md]
  Root --> Package[package.json]
  Root --> Src[src/]
  Root --> Tests[테스트 파일]
  Root --> Docs[docs/]
  Src --> App[앱 코드]
  Tests --> Spec[검증 코드]
`})}),`
`,(0,t.jsx)(n.h2,{id:`파일`,"data-toc-id":`파일`,"data-toc-slug":`파일`,"data-toc-depth":`0`,children:`파일`}),`
`,(0,t.jsx)(n.p,{children:`파일은 실제 내용이 들어 있는 단위입니다. 코드 파일, 문서 파일, 설정 파일, 테스트 파일이 모두 파일입니다.`}),`
`,(0,t.jsxs)(n.p,{children:[`예를 들어 `,(0,t.jsx)(n.code,{children:`README.md`}),`는 프로젝트를 설명하는 문서 파일이고, `,(0,t.jsx)(n.code,{children:`package.json`}),`은 JavaScript 프로젝트의 의존성과 실행 명령을 담는 설정 파일입니다.`]}),`
`,(0,t.jsx)(n.h2,{id:`폴더`,"data-toc-id":`폴더`,"data-toc-slug":`폴더`,"data-toc-depth":`0`,children:`폴더`}),`
`,(0,t.jsx)(n.p,{children:`폴더는 파일을 묶는 공간입니다. 프로젝트는 보통 역할에 따라 폴더를 나눕니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`폴더`}),(0,t.jsx)(n.th,{children:`흔한 역할`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`src/`})}),(0,t.jsx)(n.td,{children:`실제 앱 코드`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`docs/`})}),(0,t.jsx)(n.td,{children:`문서`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`test/`}),`, `,(0,t.jsx)(n.code,{children:`tests/`}),`, `,(0,t.jsx)(n.code,{children:`e2e/`})]}),(0,t.jsx)(n.td,{children:`테스트`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`scripts/`})}),(0,t.jsx)(n.td,{children:`자동화 스크립트`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`public/`})}),(0,t.jsx)(n.td,{children:`정적 자산`})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`경로`,"data-toc-id":`경로`,"data-toc-slug":`경로`,"data-toc-depth":`0`,children:`경로`}),`
`,(0,t.jsx)(n.p,{children:`경로는 파일이나 폴더의 위치입니다. AI CLI에게 작업을 맡길 때 경로를 정확히 말하면 불필요한 탐색과 실수를 줄일 수 있습니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`src/components/Header.tsx
docs/getting-started.md
package.json
`})}),`
`,(0,t.jsx)(n.h2,{id:`프로젝트-루트`,"data-toc-id":`프로젝트-루트`,"data-toc-slug":`프로젝트-루트`,"data-toc-depth":`0`,children:`프로젝트 루트`}),`
`,(0,t.jsxs)(n.p,{children:[`프로젝트 루트는 프로젝트의 가장 바깥 폴더입니다. 보통 `,(0,t.jsx)(n.code,{children:`README.md`}),`, `,(0,t.jsx)(n.code,{children:`package.json`}),`, `,(0,t.jsx)(n.code,{children:`.git`}),` 같은 핵심 파일이 있는 위치입니다.`]}),`
`,(0,t.jsx)(n.p,{children:`AI CLI는 프로젝트 루트에서 실행할 때 가장 많은 맥락을 얻습니다. 루트에서 실행하면 설정, 문서, 코드, 테스트를 같은 기준으로 읽을 수 있습니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-mermaid`,children:`flowchart LR
  Wrong[하위 폴더에서 실행] --> Limited[일부 파일만 보임]
  Right[프로젝트 루트에서 실행] --> Full[문서, 설정, 코드, 테스트를 함께 파악]
`})}),`
`,(0,t.jsx)(r,{variant:`tip`,title:`좋은 첫 요청`,children:(0,t.jsx)(n.p,{children:`프로젝트 루트에서 AI CLI를 연 뒤 "먼저 README, package.json, 테스트 설정을 읽고 실행 명령을 요약해줘"라고 요청하면 출발점이 안정됩니다.`})}),`
`,(0,t.jsx)(n.h2,{id:`실습`,"data-toc-id":`실습`,"data-toc-slug":`실습`,"data-toc-depth":`0`,children:`실습`}),`
`,(0,t.jsx)(n.p,{children:`현재 터미널이 프로젝트 루트에 있는지 직접 판정합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`pwd
ls
git status --short
`})}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인 항목`}),(0,t.jsx)(n.th,{children:`통과 기준`}),(0,t.jsx)(n.th,{children:`통과하지 못하면`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`루트 표시 파일`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`ls`}),` 결과에 `,(0,t.jsx)(n.code,{children:`.git`}),`, `,(0,t.jsx)(n.code,{children:`README.md`}),`, `,(0,t.jsx)(n.code,{children:`package.json`}),` 중 하나 이상이 보인다`]}),(0,t.jsx)(n.td,{children:`상위 폴더로 한 단계씩 올라가며 다시 확인합니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`git status --short`})}),(0,t.jsx)(n.td,{children:`명령이 오류 없이 끝난다`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`fatal: not a git repository`}),`가 나오면 아직 저장소 루트가 아닙니다`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`경로 설명`}),(0,t.jsx)(n.td,{children:`현재 경로가 절대 경로인지 상대 경로인지 말할 수 있다`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`경로`}),` 절을 다시 읽습니다`]})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`완료-기준`,"data-toc-id":`완료-기준`,"data-toc-slug":`완료-기준`,"data-toc-depth":`0`,children:`완료 기준`}),`
`,(0,t.jsxs)(s,{children:[(0,t.jsx)(o,{number:1,title:`루트 찾기`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`README.md`}),`나 `,(0,t.jsx)(n.code,{children:`package.json`}),`이 있는 프로젝트 시작 위치를 찾을 수 있습니다.`]})}),(0,t.jsx)(o,{number:2,title:`경로 말하기`,children:(0,t.jsx)(n.p,{children:`수정하고 싶은 파일을 경로로 표현할 수 있습니다.`})}),(0,t.jsx)(o,{number:3,title:`실행 위치 설명`,children:(0,t.jsx)(n.p,{children:`AI CLI를 프로젝트 루트에서 실행해야 하는 이유를 설명할 수 있습니다.`})})]}),`
`,(0,t.jsx)(c,{title:`핵심 요약`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`프로젝트는 파일과 폴더의 구조입니다`}),`
`,(0,t.jsx)(n.li,{children:`경로는 파일의 위치를 알려주는 주소입니다`}),`
`,(0,t.jsx)(n.li,{children:`AI CLI는 프로젝트 루트에서 실행할 때 가장 안정적으로 작동합니다`}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};