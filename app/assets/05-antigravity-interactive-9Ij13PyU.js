import{n as e}from"./vendor-react-BH_RQ4nt.js";var t=e();function n(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,LearningObjective:a,Step:o,StepList:s,SummaryBox:c}=n;return r||i(`Callout`,!0),a||i(`LearningObjective`,!0),o||i(`Step`,!0),s||i(`StepList`,!0),c||i(`SummaryBox`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:`Antigravity 대화형 사용법`}),`
`,(0,t.jsxs)(n.p,{children:[`이 챕터는 `,(0,t.jsx)(n.code,{children:`agy`}),` 대화형 세션에서 실제로 작업을 맡길 때의 흐름을 다룹니다. 프로젝트 루트, 작은 범위, 검증 요청 원칙은 공통교육을 기준으로 삼습니다.`]}),`
`,(0,t.jsx)(a,{items:[`대화형 세션을 프로젝트 루트에서 시작한다`,`파일 수정 전 계획과 권한 승인을 확인한다`,`작업 후 검증 결과와 남은 위험을 보고받는다`]}),`
`,(0,t.jsx)(n.h2,{id:`세션-시작`,"data-toc-id":`세션-시작`,"data-toc-slug":`세션-시작`,"data-toc-depth":`0`,children:`세션 시작`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`cd path/to/your-project
git status --short
agy
`})}),`
`,(0,t.jsx)(n.p,{children:`처음에는 현재 저장소 상태를 기준으로 읽기 전용 요청을 보냅니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`먼저 README, package.json, 테스트 설정만 읽고 이 프로젝트의 실행 방법을 요약해줘. 아직 수정하지 마.
`})}),`
`,(0,t.jsx)(n.h2,{id:`파일과-폴더-범위-지정`,"data-toc-id":`파일과-폴더-범위-지정`,"data-toc-slug":`파일과-폴더-범위-지정`,"data-toc-depth":`0`,children:`파일과 폴더 범위 지정`}),`
`,(0,t.jsx)(n.p,{children:`큰 저장소에서는 범위를 명시합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`범위는 src/components/search 와 관련 테스트로 제한해줘. 다른 폴더는 필요한 경우 읽기만 하고 수정 전 물어봐.
`})}),`
`,(0,t.jsx)(n.h2,{id:`권한-승인-판단`,"data-toc-id":`권한-승인-판단`,"data-toc-slug":`권한-승인-판단`,"data-toc-depth":`0`,children:`권한 승인 판단`}),`
`,(0,t.jsx)(n.p,{children:`Antigravity CLI는 파일 수정이나 명령 실행 전에 권한 확인을 요구할 수 있습니다. 승인 전에는 다음을 확인합니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인`}),(0,t.jsx)(n.th,{children:`이유`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`어떤 파일을 바꾸는가`}),(0,t.jsx)(n.td,{children:`범위 이탈 방지`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`어떤 명령을 실행하는가`}),(0,t.jsx)(n.td,{children:`삭제, 배포, 외부 호출 방지`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`원복 방법이 있는가`}),(0,t.jsx)(n.td,{children:`실패 시 복구 가능성 확보`})]})]})]}),`
`,(0,t.jsx)(r,{variant:`warning`,title:`자동 승인 금지`,children:(0,t.jsxs)(n.p,{children:[`학습 중에는 `,(0,t.jsx)(n.code,{children:`--dangerously-skip-permissions`}),`를 기본값으로 사용하지 마세요. 권한 요청을 읽고 판단하는 과정 자체가 중요한 안전 장치입니다.`]})}),`
`,(0,t.jsx)(n.h2,{id:`artifacts와-task-검토`,"data-toc-id":`artifacts와-task-검토`,"data-toc-slug":`artifacts와-task-검토`,"data-toc-depth":`0`,children:`Artifacts와 task 검토`}),`
`,(0,t.jsx)(n.p,{children:`Antigravity CLI는 큰 작업에서 구현 계획, 작업 목록, 검증 산출물 같은 artifact를 만들 수 있습니다. artifact가 표시되면 바로 승인하지 말고 다음을 확인합니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인`}),(0,t.jsx)(n.th,{children:`질문`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`계획`}),(0,t.jsx)(n.td,{children:`요구사항과 범위가 맞는가`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`작업 목록`}),(0,t.jsx)(n.td,{children:`한 번에 너무 큰 변경을 하지 않는가`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`검증`}),(0,t.jsx)(n.td,{children:`실행 가능한 테스트나 수동 확인이 포함되는가`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`위험`}),(0,t.jsx)(n.td,{children:`배포, push, 외부 서비스 호출이 섞여 있지 않은가`})]})]})]}),`
`,(0,t.jsxs)(n.p,{children:[`세션 안에서 `,(0,t.jsx)(n.code,{children:`/artifact`}),`로 Artifact Review 패널을 열어 생성된 계획과 산출물을 확인하고, 맞지 않으면 수정 요청 후 다시 검토합니다. 리뷰를 언제 요구할지는 `,(0,t.jsx)(n.code,{children:`settings.json`}),`의 `,(0,t.jsx)(n.code,{children:`artifactReviewPolicy`}),`(`,(0,t.jsx)(n.code,{children:`asks-for-review`}),`, `,(0,t.jsx)(n.code,{children:`agent-decides`}),`, `,(0,t.jsx)(n.code,{children:`always-proceed`}),`)가 정합니다. 학습 단계에서는 기본값 `,(0,t.jsx)(n.code,{children:`asks-for-review`}),`를 유지하세요.`]}),`
`,(0,t.jsx)(n.h2,{id:`설정과-권한-확인`,"data-toc-id":`설정과-권한-확인`,"data-toc-slug":`설정과-권한-확인`,"data-toc-depth":`0`,children:`설정과 권한 확인`}),`
`,(0,t.jsx)(n.p,{children:`작업을 맡기기 전에 현재 모델, 권한, 설정 위치를 확인합니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`명령`}),(0,t.jsx)(n.th,{children:`확인할 것`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`/model`})}),(0,t.jsx)(n.td,{children:`현재 적용 모델`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`/permissions`})}),(0,t.jsx)(n.td,{children:`tool permission mode와 승인 범위`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`/config`}),` 또는 `,(0,t.jsx)(n.code,{children:`/settings`})]}),(0,t.jsx)(n.td,{children:`설정 편집 overlay에서 현재 값`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`/context`})}),(0,t.jsx)(n.td,{children:`지금까지 쌓인 컨텍스트 사용량`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`/help`})}),(0,t.jsx)(n.td,{children:`현재 세션에서 사용할 수 있는 명령과 단축키`})]})]})]}),`
`,(0,t.jsx)(n.p,{children:`설정 화면에서 권한을 넓히는 변경을 하려면, 먼저 어떤 tool과 경로가 추가로 허용되는지 확인합니다.`}),`
`,(0,t.jsx)(n.h2,{id:`shell-mode에서-읽기-전용-확인`,"data-toc-id":`shell-mode에서-읽기-전용-확인`,"data-toc-slug":`shell-mode에서-읽기-전용-확인`,"data-toc-depth":`0`,children:`Shell mode에서 읽기 전용 확인`}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`!`}),` shell mode는 편하지만 위험 명령도 바로 실행될 수 있습니다. 처음에는 읽기 전용 명령으로만 연습합니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`!
pwd
git diff --stat
!
`})}),`
`,(0,t.jsxs)(n.p,{children:[`예상 결과는 현재 폴더와 변경 통계 출력입니다. 확인 프롬프트에서는 `,(0,t.jsx)(n.code,{children:`y`}),`로 승인, `,(0,t.jsx)(n.code,{children:`n`}),`으로 거부하며, `,(0,t.jsx)(n.code,{children:`A`}),`는 이후 요청까지 모두 승인하므로 학습 중에는 사용하지 않습니다. `,(0,t.jsx)(n.code,{children:`rm`}),`, `,(0,t.jsx)(n.code,{children:`git push`}),`, `,(0,t.jsx)(n.code,{children:`deploy`}),`, 외부 API 호출 명령은 shell mode에서 직접 실행하지 않습니다.`]}),`
`,(0,t.jsx)(n.h2,{id:`완료-보고-요청`,"data-toc-id":`완료-보고-요청`,"data-toc-slug":`완료-보고-요청`,"data-toc-depth":`0`,children:`완료 보고 요청`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`변경 파일, 실행한 검증 명령, 실패하거나 생략한 검증, 남은 위험을 정리해줘.
`})}),`
`,(0,t.jsx)(n.h2,{id:`실습`,"data-toc-id":`실습`,"data-toc-slug":`실습`,"data-toc-depth":`0`,children:`실습`}),`
`,(0,t.jsx)(n.p,{children:`대화형 세션에서 범위를 좁힌 요청 하나를 끝까지 진행합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`1) 먼저 이 저장소 구조를 요약해줘. 아직 수정하지 마.
2) <파일 하나>만 대상으로 <한 가지>를 바꿔줘.
3) 무엇을 바꿨고 어떤 명령으로 확인했는지 알려줘.
`})}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인 항목`}),(0,t.jsx)(n.th,{children:`통과 기준`}),(0,t.jsx)(n.th,{children:`통과하지 못하면`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`범위 지정`}),(0,t.jsx)(n.td,{children:`요청에 대상 파일이 명시되어 있다`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`파일과 폴더 범위 지정`}),` 절의 방법을 사용합니다`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`승인 판단`}),(0,t.jsx)(n.td,{children:`승인 요청이 왔을 때 승인/거부 근거를 말할 수 있다`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`권한 승인 판단`}),` 절의 기준을 다시 읽습니다`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`변경 확인`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`/diff`}),`로 변경 범위를 직접 확인했다`]}),(0,t.jsx)(n.td,{children:`확인 전에는 다음 요청으로 넘어가지 않습니다`})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`완료-기준`,"data-toc-id":`완료-기준`,"data-toc-slug":`완료-기준`,"data-toc-depth":`0`,children:`완료 기준`}),`
`,(0,t.jsxs)(s,{children:[(0,t.jsx)(o,{number:1,title:`루트 실행`,children:(0,t.jsxs)(n.p,{children:[`프로젝트 루트에서 `,(0,t.jsx)(n.code,{children:`git status --short`}),`를 확인한 뒤 `,(0,t.jsx)(n.code,{children:`agy`}),`를 실행할 수 있습니다.`]})}),(0,t.jsx)(o,{number:2,title:`범위 지정`,children:(0,t.jsx)(n.p,{children:`수정 범위와 읽기 범위를 나누어 요청할 수 있습니다.`})}),(0,t.jsx)(o,{number:3,title:`승인 판단`,children:(0,t.jsx)(n.p,{children:`파일 수정과 명령 실행 승인 전에 위험을 확인할 수 있습니다.`})}),(0,t.jsx)(o,{number:4,title:`검증 보고`,children:(0,t.jsx)(n.p,{children:`작업 완료 보고에 변경 파일, 검증, 남은 위험을 포함하도록 요청할 수 있습니다.`})}),(0,t.jsx)(o,{number:5,title:`Artifact 검토`,children:(0,t.jsx)(n.p,{children:`Antigravity가 만든 계획과 task artifact를 승인 전 검토할 수 있습니다.`})}),(0,t.jsx)(o,{number:6,title:`설정 확인`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`/model`}),`, `,(0,t.jsx)(n.code,{children:`/permissions`}),`, `,(0,t.jsx)(n.code,{children:`/config`}),` 또는 `,(0,t.jsx)(n.code,{children:`/settings`}),`로 현재 실행 조건을 확인할 수 있습니다.`]})}),(0,t.jsx)(o,{number:7,title:`Shell mode 제한`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`!`}),` shell mode에서 읽기 전용 확인과 위험 명령을 구분할 수 있습니다.`]})})]}),`
`,(0,t.jsx)(c,{title:`핵심 요약`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`agy`}),` 대화형 세션은 프로젝트 루트에서 시작합니다`]}),`
`,(0,t.jsx)(n.li,{children:`첫 요청은 읽기 전용 탐색으로 시작합니다`}),`
`,(0,t.jsx)(n.li,{children:`수정과 명령 실행 권한은 파일, 명령, 원복 가능성을 보고 승인합니다`}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`/model`}),`, `,(0,t.jsx)(n.code,{children:`/permissions`}),`, `,(0,t.jsx)(n.code,{children:`/config`}),` 또는 `,(0,t.jsx)(n.code,{children:`/settings`}),`로 현재 실행 조건을 확인합니다`]}),`
`,(0,t.jsx)(n.li,{children:`완료 보고에는 검증 결과와 생략한 검증이 포함되어야 합니다`}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};