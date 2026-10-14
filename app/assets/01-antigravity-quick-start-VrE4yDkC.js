import{n as e}from"./vendor-react-BH_RQ4nt.js";var t=e();function n(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,LearningObjective:a,Step:o,StepList:s,SummaryBox:c}=n;return r||i(`Callout`,!0),a||i(`LearningObjective`,!0),o||i(`Step`,!0),s||i(`StepList`,!0),c||i(`SummaryBox`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:`Antigravity CLI 시작하기`}),`
`,(0,t.jsxs)(n.p,{children:[`Antigravity CLI는 터미널에서 실행하는 Google Antigravity의 에이전트 CLI입니다. 명령어 이름은 `,(0,t.jsx)(n.code,{children:`agy`}),`입니다. 이 챕터에서는 설치 자체보다 `,(0,t.jsx)(n.strong,{children:`설치 확인, 로그인, 안전한 첫 요청`}),`까지 익힙니다.`]}),`
`,(0,t.jsx)(a,{items:[`운영체제에 맞는 공식 installer 명령을 확인한다`,`Antigravity CLI 실행 파일과 버전을 확인한다`,`처음 실행 시 인증과 workspace trust 흐름을 이해한다`,"`agy`와 `agy --print`의 차이를 구분한다",`현재 설치본의 help와 update 명령을 확인한다`]}),`
`,(0,t.jsx)(n.h2,{id:`1단계-설치`,"data-toc-id":`1단계-설치`,"data-toc-slug":`1단계-설치`,"data-toc-depth":`0`,children:`1단계: 설치`}),`
`,(0,t.jsx)(n.p,{children:`macOS와 Linux에서는 공식 installer를 사용할 수 있습니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`curl -fsSL https://antigravity.google/cli/install.sh | bash
`})}),`
`,(0,t.jsx)(n.p,{children:`Windows PowerShell에서는 다음 명령을 사용합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-powershell`,children:`irm https://antigravity.google/cli/install.ps1 | iex
`})}),`
`,(0,t.jsx)(n.p,{children:`Windows CMD에서는 다음 형식을 사용합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-cmd`,children:`curl -fsSL https://antigravity.google/cli/install.cmd -o install.cmd && install.cmd && del install.cmd
`})}),`
`,(0,t.jsx)(n.p,{children:`기본 설치 위치는 운영체제별로 다릅니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`운영체제`}),(0,t.jsx)(n.th,{children:`기본 설치 위치`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`macOS, Linux`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`~/.local/bin/agy`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`Windows`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`C:\\Users\\<username>\\AppData\\Local\\agy\\bin`})})]})]})]}),`
`,(0,t.jsx)(n.p,{children:`installer가 PATH를 자동으로 추가하지 못하면 안내 문구에 따라 위 설치 위치를 셸 profile에 추가합니다.`}),`
`,(0,t.jsx)(n.h2,{id:`2단계-설치-확인`,"data-toc-id":`2단계-설치-확인`,"data-toc-slug":`2단계-설치-확인`,"data-toc-depth":`0`,children:`2단계: 설치 확인`}),`
`,(0,t.jsx)(n.p,{children:`설치가 되어 있는지 먼저 확인합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`command -v agy
agy --version
agy --help
`})}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`command -v agy`}),`가 아무것도 출력하지 않으면 Antigravity CLI가 PATH에 등록되지 않은 상태입니다. 공식 설치 문서를 기준으로 설치하거나, 이미 설치했다면 `,(0,t.jsx)(n.code,{children:`agy install`}),`로 셸 경로 설정을 다시 확인합니다.`]}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`명령`}),(0,t.jsx)(n.th,{children:`예상 결과`}),(0,t.jsx)(n.th,{children:`실패하면`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`command -v agy`})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`agy`}),` 실행 파일 경로 출력`]}),(0,t.jsx)(n.td,{children:`installer가 안내한 PATH 추가 문구 확인`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`agy --version`})}),(0,t.jsx)(n.td,{children:`버전 문자열 출력`}),(0,t.jsxs)(n.td,{children:[`설치 위치, 터미널 재시작, `,(0,t.jsx)(n.code,{children:`agy install --help`}),` 확인`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`agy --help`})}),(0,t.jsx)(n.td,{children:`wrapper 옵션과 하위 명령 출력`}),(0,t.jsx)(n.td,{children:`공식 문서와 현재 설치본 help를 우선 비교`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`agy update --help`})}),(0,t.jsx)(n.td,{children:`업데이트 명령 도움말`}),(0,t.jsx)(n.td,{children:`설치 방식과 권한 확인`})]})]})]}),`
`,(0,t.jsx)(r,{variant:`warning`,title:`설치 문서는 최신 공식 문서 기준`,children:(0,t.jsxs)(n.p,{children:[`Antigravity CLI는 전환 초기의 도구라 설치 방식과 옵션이 바뀔 수 있습니다. 설치 명령은 오래된 블로그보다 공식 Antigravity 문서와 `,(0,t.jsx)(n.code,{children:`agy --help`}),`를 우선하세요.`]})}),`
`,(0,t.jsx)(n.h2,{id:`3단계-첫-실행과-인증`,"data-toc-id":`3단계-첫-실행과-인증`,"data-toc-slug":`3단계-첫-실행과-인증`,"data-toc-depth":`0`,children:`3단계: 첫 실행과 인증`}),`
`,(0,t.jsxs)(n.p,{children:[`프로젝트 루트에서 `,(0,t.jsx)(n.code,{children:`agy`}),`를 실행합니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`cd path/to/your-project
git status --short
agy
`})}),`
`,(0,t.jsx)(n.p,{children:`처음 실행하면 초기 설정이 순서대로 진행됩니다.`}),`
`,(0,t.jsxs)(s,{children:[(0,t.jsx)(o,{number:1,title:`Color Scheme 선택`,children:(0,t.jsxs)(n.p,{children:[`터미널 테마에 맞는 색 구성을 고릅니다. 나중에 `,(0,t.jsx)(n.code,{children:`/config`}),`에서 바꿀 수 있습니다.`]})}),(0,t.jsx)(o,{number:2,title:`Rendering Mode 선택`,children:(0,t.jsx)(n.p,{children:`Alt-Screen과 Inline 중 하나를 고릅니다. 스크롤백을 유지하려면 Inline이 편합니다.`})}),(0,t.jsx)(o,{number:3,title:`Workspace Trust 확인`,children:(0,t.jsx)(n.p,{children:`현재 저장소를 신뢰할지 확인합니다. 신뢰하면 파일 인덱싱이 시작되므로, 읽기·수정·명령 실행 권한을 줄 프로젝트인지 먼저 판단하세요.`})})]}),`
`,(0,t.jsx)(n.p,{children:`로그인 방식은 계정과 조직 정책에 따라 달라질 수 있으므로, 표시된 인증 URL과 코드 흐름을 그대로 따릅니다.`}),`
`,(0,t.jsx)(n.h2,{id:`4단계-안전한-첫-요청`,"data-toc-id":`4단계-안전한-첫-요청`,"data-toc-slug":`4단계-안전한-첫-요청`,"data-toc-depth":`0`,children:`4단계: 안전한 첫 요청`}),`
`,(0,t.jsx)(n.p,{children:`첫 요청은 파일 변경 없는 탐색으로 시작합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`이 프로젝트의 주요 폴더, 실행 명령, 테스트 명령을 요약해줘. 아직 파일은 수정하지 마.
`})}),`
`,(0,t.jsx)(n.h2,{id:`5단계-1회성-실행`,"data-toc-id":`5단계-1회성-실행`,"data-toc-slug":`5단계-1회성-실행`,"data-toc-depth":`0`,children:`5단계: 1회성 실행`}),`
`,(0,t.jsxs)(n.p,{children:[`짧은 질문은 `,(0,t.jsx)(n.code,{children:`--print`}),` 또는 `,(0,t.jsx)(n.code,{children:`-p`}),`로 실행할 수 있습니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`agy --print "이 프로젝트 구조를 요약해줘"
agy --prompt "이 프로젝트 구조를 요약해줘"
`})}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`--print`}),`, `,(0,t.jsx)(n.code,{children:`-p`}),`, `,(0,t.jsx)(n.code,{children:`--prompt`}),`는 자동화와 짧은 확인에 적합하고, 여러 턴 작업은 `,(0,t.jsx)(n.code,{children:`agy`}),` 대화형 실행이 더 적합합니다. 오래 걸리는 print 작업은 `,(0,t.jsx)(n.code,{children:`--print-timeout`}),`으로 대기 시간을 조정할 수 있습니다.`]}),`
`,(0,t.jsx)(n.h2,{id:`문제-해결`,"data-toc-id":`문제-해결`,"data-toc-slug":`문제-해결`,"data-toc-depth":`0`,children:`문제 해결`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`증상`}),(0,t.jsx)(n.th,{children:`먼저 볼 것`}),(0,t.jsx)(n.th,{children:`다음 조치`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`agy: command not found`})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`command -v agy`}),`, PATH, installer 출력`]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`agy install --help`}),` 또는 installer 재실행`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`로그인 화면이 반복됨`}),(0,t.jsx)(n.td,{children:`브라우저 로그인, 터미널 환경, SSH 여부`}),(0,t.jsx)(n.td,{children:`표시된 인증 URL과 코드 흐름 확인`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`workspace trust가 헷갈림`}),(0,t.jsxs)(n.td,{children:[`현재 `,(0,t.jsx)(n.code,{children:`pwd`}),`, 저장소 소유자, Git 상태`]}),(0,t.jsx)(n.td,{children:`신뢰할 수 없는 폴더에서는 실행 중단`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`--print`}),`가 오래 걸림`]}),(0,t.jsx)(n.td,{children:`작업 범위, 네트워크/API 호출 여부`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`--print-timeout`}),` 또는 대화형 `,(0,t.jsx)(n.code,{children:`agy`}),`로 전환`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`로그 파일을 남겨야 함`}),(0,t.jsxs)(n.td,{children:[`현재 설치본의 `,(0,t.jsx)(n.code,{children:`--log-file`}),` 지원 여부`]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`agy --help`}),`에서 옵션 확인 후 경로 지정`]})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`실습`,"data-toc-id":`실습`,"data-toc-slug":`실습`,"data-toc-depth":`0`,children:`실습`}),`
`,(0,t.jsx)(n.p,{children:`설치 상태를 확인하고, 파일을 바꾸지 않는 1회성 요청을 실행합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`command -v agy
agy --version
`})}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`agy --print "이 프로젝트의 주요 폴더와 실행 명령을 요약해줘"
`})}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인 항목`}),(0,t.jsx)(n.th,{children:`통과 기준`}),(0,t.jsx)(n.th,{children:`통과하지 못하면`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`command -v agy`})}),(0,t.jsx)(n.td,{children:`실행 파일 경로가 출력된다`}),(0,t.jsx)(n.td,{children:`installer가 안내한 PATH 문구를 셸 profile에 추가합니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`agy --version`})}),(0,t.jsx)(n.td,{children:`버전 문자열이 출력된다`}),(0,t.jsx)(n.td,{children:`터미널을 새로 열고 다시 확인합니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`--print`}),` 응답`]}),(0,t.jsx)(n.td,{children:`실제 폴더 이름을 인용한 요약이 돌아온다`}),(0,t.jsxs)(n.td,{children:[`프로젝트 루트에서 실행했는지 `,(0,t.jsx)(n.code,{children:`pwd`}),`로 확인합니다`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`대기 시간`}),(0,t.jsx)(n.td,{children:`응답이 너무 오래 걸리지 않는다`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`--print-timeout`}),`을 늘리거나 대화형 `,(0,t.jsx)(n.code,{children:`agy`}),`로 전환합니다`]})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`완료-기준`,"data-toc-id":`완료-기준`,"data-toc-slug":`완료-기준`,"data-toc-depth":`0`,children:`완료 기준`}),`
`,(0,t.jsxs)(s,{children:[(0,t.jsx)(o,{number:1,title:`설치`,children:(0,t.jsx)(n.p,{children:`운영체제에 맞는 공식 installer 명령을 찾고 실행할 수 있습니다.`})}),(0,t.jsx)(o,{number:2,title:`버전 확인`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`agy --version`}),`과 `,(0,t.jsx)(n.code,{children:`agy --help`}),`가 정상 동작합니다.`]})}),(0,t.jsx)(o,{number:3,title:`첫 세션 실행`,children:(0,t.jsxs)(n.p,{children:[`프로젝트 루트에서 `,(0,t.jsx)(n.code,{children:`agy`}),`를 열고 인증 또는 trust 확인을 완료했습니다.`]})}),(0,t.jsx)(o,{number:4,title:`읽기 전용 요청`,children:(0,t.jsx)(n.p,{children:`파일 수정 없는 프로젝트 요약 요청을 실행했습니다.`})}),(0,t.jsx)(o,{number:5,title:`실행 방식 구분`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`agy`}),`는 대화형, `,(0,t.jsx)(n.code,{children:`agy --print`}),`는 1회성 실행이라는 차이를 설명할 수 있습니다.`]})}),(0,t.jsx)(o,{number:6,title:`실패 원인 분류`,children:(0,t.jsx)(n.p,{children:`설치, PATH, 인증, workspace trust 문제를 구분해 다음 확인 명령을 고를 수 있습니다.`})})]}),`
`,(0,t.jsx)(c,{title:`핵심 요약`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Antigravity CLI의 기본 명령은 `,(0,t.jsx)(n.code,{children:`agy`}),`입니다`]}),`
`,(0,t.jsx)(n.li,{children:`macOS/Linux는 공식 shell installer, Windows는 PowerShell 또는 CMD installer를 사용합니다`}),`
`,(0,t.jsxs)(n.li,{children:[`시작 전 `,(0,t.jsx)(n.code,{children:`command -v agy`}),`, `,(0,t.jsx)(n.code,{children:`agy --version`}),`, `,(0,t.jsx)(n.code,{children:`agy --help`}),`로 현재 설치 상태를 확인합니다`]}),`
`,(0,t.jsx)(n.li,{children:`첫 요청은 읽기 전용 프로젝트 탐색으로 시작합니다`}),`
`,(0,t.jsxs)(n.li,{children:[`짧은 단발 작업은 `,(0,t.jsx)(n.code,{children:`agy --print`}),`, `,(0,t.jsx)(n.code,{children:`agy --prompt`}),`, 여러 턴 작업은 `,(0,t.jsx)(n.code,{children:`agy`}),`를 사용합니다`]}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};