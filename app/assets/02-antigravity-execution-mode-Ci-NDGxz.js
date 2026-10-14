import{n as e}from"./vendor-react-BH_RQ4nt.js";var t=e();function n(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,LearningObjective:a,Step:o,StepList:s,SummaryBox:c}=n;return r||i(`Callout`,!0),a||i(`LearningObjective`,!0),o||i(`Step`,!0),s||i(`StepList`,!0),c||i(`SummaryBox`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:`Antigravity 실행 방식`}),`
`,(0,t.jsx)(n.p,{children:`공통 작업 루틴은 앞 장에서 배웠습니다. 이 챕터는 Antigravity CLI에서 어떤 실행 방식을 선택해야 하는지에 집중합니다.`}),`
`,(0,t.jsx)(a,{items:["`agy`, `agy --print`, `agy --prompt-interactive`의 차이를 구분한다",`이전 대화를 이어가는 옵션을 이해한다`,"`--mode plan`과 `--mode accept-edits`의 차이를 구분한다",`sandbox, permission mode, 권한 우회 옵션의 위험도를 구분한다`]}),`
`,(0,t.jsx)(n.h2,{id:`실행-방식-한눈에-보기`,"data-toc-id":`실행-방식-한눈에-보기`,"data-toc-slug":`실행-방식-한눈에-보기`,"data-toc-depth":`0`,children:`실행 방식 한눈에 보기`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-mermaid`,children:`flowchart TD
  Need{무엇을 하려는가}
  Need -->|여러 턴 작업| Interactive[agy]
  Need -->|짧은 질문/요약| Print[agy --print]
  Need -->|첫 질문 후 계속 대화| PromptInteractive[agy --prompt-interactive]
  Need -->|최근 대화 이어가기| Continue[agy --continue]
  Need -->|계획부터 받고 싶음| Plan[agy --mode plan]
  Need -->|제한된 실행 환경| Sandbox[agy --sandbox]
`})}),`
`,(0,t.jsx)(n.h2,{id:`기본-대화형-실행`,"data-toc-id":`기본-대화형-실행`,"data-toc-slug":`기본-대화형-실행`,"data-toc-depth":`0`,children:`기본 대화형 실행`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`agy
`})}),`
`,(0,t.jsx)(n.p,{children:`프로젝트 탐색, 코드 수정, 테스트 실행처럼 여러 단계가 필요한 작업에 사용합니다.`}),`
`,(0,t.jsx)(n.h2,{id:`1회성-실행`,"data-toc-id":`1회성-실행`,"data-toc-slug":`1회성-실행`,"data-toc-depth":`0`,children:`1회성 실행`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`agy --print "이 에러 로그의 핵심 원인을 요약해줘"
`})}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`--print`}),`는 한 번 요청하고 결과를 받은 뒤 종료하는 방식입니다. `,(0,t.jsx)(n.code,{children:`-p`}),`와 `,(0,t.jsx)(n.code,{children:`--prompt`}),`도 같은 목적의 별칭입니다.`]}),`
`,(0,t.jsx)(n.h2,{id:`첫-질문과-함께-대화-시작`,"data-toc-id":`첫-질문과-함께-대화-시작`,"data-toc-slug":`첫-질문과-함께-대화-시작`,"data-toc-depth":`0`,children:`첫 질문과 함께 대화 시작`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`agy --prompt-interactive "먼저 이 저장소 구조를 요약해줘"
`})}),`
`,(0,t.jsxs)(n.p,{children:[`첫 질문을 전달한 뒤 대화형 세션을 계속 이어갈 때 사용합니다. 짧은 별칭은 `,(0,t.jsx)(n.code,{children:`-i`}),`입니다.`]}),`
`,(0,t.jsx)(n.h2,{id:`이어서-실행하기`,"data-toc-id":`이어서-실행하기`,"data-toc-slug":`이어서-실행하기`,"data-toc-depth":`0`,children:`이어서 실행하기`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`agy --continue
`})}),`
`,(0,t.jsxs)(n.p,{children:[`최근 대화를 이어가려면 `,(0,t.jsx)(n.code,{children:`--continue`}),` 또는 `,(0,t.jsx)(n.code,{children:`-c`}),`를 사용합니다. 특정 대화 ID를 알고 있으면 `,(0,t.jsx)(n.code,{children:`--conversation <id>`}),`로 재개합니다.`]}),`
`,(0,t.jsx)(n.h2,{id:`실행-모드-선택`,"data-toc-id":`실행-모드-선택`,"data-toc-slug":`실행-모드-선택`,"data-toc-depth":`0`,children:`실행 모드 선택`}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`--mode`}),`는 이번 세션에서 에이전트가 어떻게 움직일지 정합니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`agy --mode plan
agy --mode accept-edits
`})}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`모드`}),(0,t.jsx)(n.th,{children:`의미`}),(0,t.jsx)(n.th,{children:`언제`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`plan`})}),(0,t.jsx)(n.td,{children:`계획 중심으로 먼저 정리`}),(0,t.jsx)(n.td,{children:`영향 범위가 불명확한 작업, 학습 기본값`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`accept-edits`})}),(0,t.jsx)(n.td,{children:`편집을 자동 수락하며 진행`}),(0,t.jsx)(n.td,{children:`변경 범위가 좁고 되돌릴 수 있을 때`})]})]})]}),`
`,(0,t.jsxs)(n.p,{children:[`세션 안에서는 `,(0,t.jsx)(n.code,{children:`/planning`}),`으로 multi-turn 계획 모드를 켜고, 빠른 처리가 필요하면 `,(0,t.jsx)(n.code,{children:`/fast`}),`로 계획 단계를 건너뛸 수 있습니다.`]}),`
`,(0,t.jsx)(n.h2,{id:`권한과-sandbox`,"data-toc-id":`권한과-sandbox`,"data-toc-slug":`권한과-sandbox`,"data-toc-depth":`0`,children:`권한과 sandbox`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`옵션`}),(0,t.jsx)(n.th,{children:`의미`}),(0,t.jsx)(n.th,{children:`주의`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`--sandbox`})}),(0,t.jsx)(n.td,{children:`터미널 제약이 있는 sandbox 모드`}),(0,t.jsx)(n.td,{children:`외부 명령/파일 접근 제약을 예상해야 함`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`--dangerously-skip-permissions`})}),(0,t.jsx)(n.td,{children:`도구 권한 요청을 자동 승인`}),(0,t.jsx)(n.td,{children:`학습/실무 기본값으로 사용하면 안 됨`})]})]})]}),`
`,(0,t.jsx)(r,{variant:`warning`,title:`권한 자동 승인은 위험합니다`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`--dangerously-skip-permissions`}),`는 승인 절차를 건너뜁니다. 삭제, 배포, 외부 서비스 호출이 섞인 작업에서는 사용하지 마세요.`]})}),`
`,(0,t.jsxs)(n.p,{children:[`Antigravity의 session permission mode는 버전과 정책에 따라 다를 수 있지만, 공식 CLI reference의 `,(0,t.jsx)(n.code,{children:`toolPermission`}),` preset 기준으로 다음 흐름을 구분합니다.`]}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`mode`}),(0,t.jsx)(n.th,{children:`의미`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`request-review`})}),(0,t.jsx)(n.td,{children:`tool 실행 전 사용자 검토를 요구하는 기본 학습 흐름`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`proceed-in-sandbox`})}),(0,t.jsx)(n.td,{children:`sandbox 안에서 가능한 작업은 진행`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`always-proceed`})}),(0,t.jsx)(n.td,{children:`승인 prompt를 크게 줄이는 공격적 흐름`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`strict`})}),(0,t.jsx)(n.td,{children:`더 좁은 권한으로 보수적으로 진행`})]})]})]}),`
`,(0,t.jsxs)(n.p,{children:[`학습자는 `,(0,t.jsx)(n.code,{children:`/permissions`}),`, `,(0,t.jsx)(n.code,{children:`/config`}),`, `,(0,t.jsx)(n.code,{children:`/settings`}),`에서 현재 세션의 실제 권한 상태를 먼저 확인해야 합니다.`]}),`
`,(0,t.jsx)(n.h2,{id:`세션-안-확인-명령`,"data-toc-id":`세션-안-확인-명령`,"data-toc-slug":`세션-안-확인-명령`,"data-toc-depth":`0`,children:`세션 안 확인 명령`}),`
`,(0,t.jsx)(n.p,{children:`대화형 세션 안에서는 현재 상태를 직접 확인하는 명령을 먼저 익힙니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`명령`}),(0,t.jsx)(n.th,{children:`용도`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`/model`})}),(0,t.jsx)(n.td,{children:`현재 모델 확인 또는 변경`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`/permissions`})}),(0,t.jsx)(n.td,{children:`권한 승인 방식 확인`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`/config`}),` 또는 `,(0,t.jsx)(n.code,{children:`/settings`})]}),(0,t.jsx)(n.td,{children:`설정 편집 overlay 열기`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`/context`})}),(0,t.jsx)(n.td,{children:`컨텍스트 사용량 확인`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`/diff`})}),(0,t.jsx)(n.td,{children:`변경, 턴, 커밋을 diff viewer로 확인`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`/tasks`})}),(0,t.jsx)(n.td,{children:`background 실행 로그 확인`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`/artifact`})}),(0,t.jsx)(n.td,{children:`생성된 계획, 작업 목록, 검증 산출물 검토`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`/exit`}),` 또는 `,(0,t.jsx)(n.code,{children:`/quit`})]}),(0,t.jsx)(n.td,{children:`세션 종료`})]})]})]}),`
`,(0,t.jsxs)(n.p,{children:[`명령 목록은 버전별로 달라질 수 있으므로 `,(0,t.jsx)(n.code,{children:`/help`}),` 또는 `,(0,t.jsx)(n.code,{children:`?`}),`를 함께 확인합니다. 전체 목록은 `,(0,t.jsx)(n.a,{href:`?chapter=antigravity-commands`,children:`Antigravity 명령어 레퍼런스`}),`에 있습니다.`]}),`
`,(0,t.jsx)(n.h2,{id:`shell-mode`,"data-toc-id":`shell-mode`,"data-toc-slug":`shell-mode`,"data-toc-depth":`0`,children:`Shell mode`}),`
`,(0,t.jsxs)(n.p,{children:[`Antigravity CLI는 세션 안에서 `,(0,t.jsx)(n.code,{children:`!`}),`로 shell mode를 전환할 수 있습니다. 이 모드는 일반 프롬프트와 달리 터미널 명령 실행에 가깝기 때문에, 학습 중에는 읽기 전용 명령부터 사용합니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`!
pwd
git status --short
!
`})}),`
`,(0,t.jsx)(n.p,{children:`예상 결과는 현재 경로와 Git 상태가 출력되는 것입니다. 삭제, 배포, 원격 push, 외부 서비스 호출 명령은 shell mode에서 바로 실행하지 않습니다.`}),`
`,(0,t.jsx)(n.h2,{id:`실습`,"data-toc-id":`실습`,"data-toc-slug":`실습`,"data-toc-depth":`0`,children:`실습`}),`
`,(0,t.jsx)(n.p,{children:`같은 요청을 실행 방식 두 가지로 보내고 차이를 비교합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`agy --print "이 저장소에서 테스트를 실행하는 명령을 알려줘"
`})}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`agy --mode plan
`})}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인 항목`}),(0,t.jsx)(n.th,{children:`통과 기준`}),(0,t.jsx)(n.th,{children:`통과하지 못하면`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`--print`}),` 결과`]}),(0,t.jsx)(n.td,{children:`한 번 답하고 종료된다`}),(0,t.jsx)(n.td,{children:`여러 턴이 필요한 작업이라면 대화형 실행이 맞습니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`--mode plan`})}),(0,t.jsx)(n.td,{children:`바로 수정하지 않고 계획부터 제시한다`}),(0,t.jsx)(n.td,{children:`실행 모드 선택 표에서 각 모드의 목적을 다시 확인합니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`선택 기준`}),(0,t.jsx)(n.td,{children:`두 방식을 언제 쓸지 한 문장으로 구분할 수 있다`}),(0,t.jsx)(n.td,{children:`자동화와 다단계 작업의 차이로 설명해 봅니다`})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`완료-기준`,"data-toc-id":`완료-기준`,"data-toc-slug":`완료-기준`,"data-toc-depth":`0`,children:`완료 기준`}),`
`,(0,t.jsxs)(s,{children:[(0,t.jsx)(o,{number:1,title:`실행 방식 선택`,children:(0,t.jsxs)(n.p,{children:[`여러 턴 작업에는 `,(0,t.jsx)(n.code,{children:`agy`}),`, 단발 질문에는 `,(0,t.jsx)(n.code,{children:`agy --print`}),`를 고를 수 있습니다.`]})}),(0,t.jsx)(o,{number:2,title:`대화 재개`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`agy --continue`}),`와 `,(0,t.jsx)(n.code,{children:`agy --conversation <id>`}),`의 차이를 설명할 수 있습니다.`]})}),(0,t.jsx)(o,{number:3,title:`권한 이해`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`--sandbox`}),`, `,(0,t.jsx)(n.code,{children:`--mode`}),`, session permission mode, `,(0,t.jsx)(n.code,{children:`--dangerously-skip-permissions`}),`의 위험 차이를 설명할 수 있습니다.`]})}),(0,t.jsx)(o,{number:4,title:`세션 상태 확인`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`/model`}),`, `,(0,t.jsx)(n.code,{children:`/permissions`}),`, `,(0,t.jsx)(n.code,{children:`/tasks`}),`, `,(0,t.jsx)(n.code,{children:`/artifact`}),`처럼 상태를 확인하는 명령의 용도를 설명할 수 있습니다.`]})}),(0,t.jsx)(o,{number:5,title:`Shell mode 안전 사용`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`!`}),` shell mode에서 읽기 전용 명령과 위험 명령을 구분할 수 있습니다.`]})})]}),`
`,(0,t.jsx)(c,{title:`핵심 요약`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`agy`}),`는 기본 대화형 실행입니다`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`agy --print`}),`는 1회성 실행, `,(0,t.jsx)(n.code,{children:`agy --prompt-interactive`}),`는 첫 질문 후 대화 지속입니다`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`--continue`}),`와 `,(0,t.jsx)(n.code,{children:`--conversation`}),`으로 이전 대화를 이어갈 수 있습니다`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`--mode plan`}),`은 계획 우선, `,(0,t.jsx)(n.code,{children:`--mode accept-edits`}),`는 편집 자동 수락입니다`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`/config`}),` 또는 `,(0,t.jsx)(n.code,{children:`/settings`}),`에서 현재 설정과 permission mode를 확인합니다`]}),`
`,(0,t.jsx)(n.li,{children:`권한 자동 승인은 위험하므로 기본 학습 흐름에 넣지 않습니다`}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};