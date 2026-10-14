import{n as e}from"./vendor-react-BH_RQ4nt.js";var t=e();function n(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,LearningObjective:a,Step:o,StepList:s,SummaryBox:c}=n;return r||i(`Callout`,!0),a||i(`LearningObjective`,!0),o||i(`Step`,!0),s||i(`StepList`,!0),c||i(`SummaryBox`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:`Claude Code 시작하기`}),`
`,(0,t.jsxs)(n.p,{children:[`Claude Code는 터미널에서 프로젝트를 읽고, 수정하고, 명령을 실행할 수 있는 Anthropic의 코딩 에이전트입니다. 이 챕터에서는 설치 명령을 외우는 것보다 `,(0,t.jsx)(n.strong,{children:`현재 환경에서 실행 파일을 확인하고, 인증 후 안전한 첫 세션을 여는 흐름`}),`을 익힙니다.`]}),`
`,(0,t.jsx)(a,{items:[`Claude Code 실행 전 필요한 터미널과 프로젝트 환경을 확인한다`,`공식 시스템 요구사항과 계정 접근 조건을 확인한다`,`네이티브 설치 경로를 우선하고 실행 파일을 검증한다`,`Claude 계정 인증 후 읽기 전용 첫 요청을 실행한다`,`업데이트와 설치 문제 해결의 기준을 설명할 수 있다`]}),`
`,(0,t.jsx)(n.h2,{id:`1단계-사전-준비`,"data-toc-id":`1단계-사전-준비`,"data-toc-slug":`1단계-사전-준비`,"data-toc-depth":`0`,children:`1단계: 사전 준비`}),`
`,(0,t.jsx)(n.p,{children:`Claude Code는 로컬 터미널에서 실행됩니다. 설치 전 현재 셸과 프로젝트 루트를 먼저 확인합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`uname -a
git --version
pwd
`})}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인 항목`}),(0,t.jsx)(n.th,{children:`기준`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`운영체제`}),(0,t.jsx)(n.td,{children:`macOS, Windows, Linux, WSL 중 현재 환경을 명확히 구분`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`셸`}),(0,t.jsx)(n.td,{children:`Bash, Zsh, PowerShell, CMD 중 하나`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`프로젝트 폴더`}),(0,t.jsx)(n.td,{children:`실제 작업할 저장소 루트에서 실행`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`계정`}),(0,t.jsx)(n.td,{children:`Claude Code 사용 권한이 있는 Anthropic 계정 또는 조직 인증`})]})]})]}),`
`,(0,t.jsx)(n.p,{children:`공식 시스템 요구사항은 macOS 13+, Windows 10 1809+/Windows Server 2019+, Ubuntu 20.04+, Debian 10+, Alpine Linux 3.19+, 4GB 이상 RAM, x64 또는 ARM64 processor입니다. 네트워크 연결과 지원 국가/지역 조건도 확인해야 합니다.`}),`
`,(0,t.jsx)(r,{variant:`warning`,title:`Windows 환경 구분`,children:(0,t.jsx)(n.p,{children:`Windows에서는 네이티브 PowerShell/CMD와 WSL2 중 어디에서 실행하는지 먼저 정하세요. WSL2 프로젝트에서 작업한다면 WSL 터미널 안에서 설치와 실행을 맞추는 편이 안전합니다.`})}),`
`,(0,t.jsx)(n.h2,{id:`2단계-설치`,"data-toc-id":`2단계-설치`,"data-toc-slug":`2단계-설치`,"data-toc-depth":`0`,children:`2단계: 설치`}),`
`,(0,t.jsx)(n.p,{children:`신규 설치는 공식 문서가 권장하는 네이티브 설치 경로를 우선합니다. macOS, Linux, WSL에서는 다음 설치 스크립트를 사용할 수 있습니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`curl -fsSL https://claude.ai/install.sh | bash
`})}),`
`,(0,t.jsx)(n.p,{children:`Windows PowerShell에서는 다음 형식의 설치 스크립트를 사용할 수 있습니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-powershell`,children:`irm https://claude.ai/install.ps1 | iex
`})}),`
`,(0,t.jsx)(n.p,{children:`Windows CMD에서는 다음 형식을 사용합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-cmd`,children:`curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
`})}),`
`,(0,t.jsx)(n.p,{children:`설치 시 채널을 고르고 싶으면 installer에 인자를 넘깁니다. 이때 고른 채널이 이후 auto-update의 기본값이 됩니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`curl -fsSL https://claude.ai/install.sh | bash -s stable
`})}),`
`,(0,t.jsx)(n.p,{children:`패키지 매니저를 선호하는 환경에서는 Homebrew 또는 WinGet 설치도 사용할 수 있습니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`brew install --cask claude-code
winget install Anthropic.ClaudeCode
`})}),`
`,(0,t.jsxs)(n.p,{children:[`Homebrew는 cask 이름으로 채널이 갈립니다. `,(0,t.jsx)(n.code,{children:`claude-code`}),`는 stable(대략 1주 뒤처지고 큰 회귀가 있는 릴리즈를 건너뜀), `,(0,t.jsx)(n.code,{children:`claude-code@latest`}),`는 최신 채널입니다.`]}),`
`,(0,t.jsx)(n.p,{children:`Debian/Ubuntu, Fedora/RHEL, Alpine 환경에서는 공식 apt/dnf/apk repository 설치도 사용할 수 있습니다. package manager 설치는 일반적으로 Claude Code 자체 auto-update가 아니라 시스템 package upgrade 흐름을 따릅니다.`}),`
`,(0,t.jsx)(n.p,{children:`설치 후에는 현재 셸에서 실행 파일이 잡히는지 확인합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`command -v claude
claude --version
claude --help
claude doctor
`})}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`command -v claude`}),`가 비어 있으면 설치는 되었지만 PATH가 반영되지 않았을 수 있습니다. 터미널을 새로 열고, 그래도 실패하면 공식 setup 문서와 현재 셸의 PATH를 확인합니다.`]}),`
`,(0,t.jsx)(r,{variant:`info`,title:`npm 설치는 대체 경로`,children:(0,t.jsxs)(n.p,{children:[`Claude Code는 native installer를 우선 권장하지만, 조직 표준에 따라 `,(0,t.jsx)(n.code,{children:`npm install -g @anthropic-ai/claude-code`}),`를 사용할 수도 있습니다. v2.1.198 이후 npm 패키지는 Node.js 22 이상을 요구합니다. 더 낮은 버전에서는 설치 중 `,(0,t.jsx)(n.code,{children:`EBADENGINE`}),` 경고가 나오지만 설치 자체는 완료되며, 내려받은 native binary는 실행에 Node.js를 사용하지 않습니다. npm 전역 설치는 권한 문제를 만들 수 있으므로 `,(0,t.jsx)(n.code,{children:`sudo npm install -g`}),`를 기본 해결책으로 사용하지 않습니다.`]})}),`
`,(0,t.jsx)(n.h2,{id:`3단계-인증`,"data-toc-id":`3단계-인증`,"data-toc-slug":`3단계-인증`,"data-toc-depth":`0`,children:`3단계: 인증`}),`
`,(0,t.jsx)(n.p,{children:`처음 실행하면 로그인 또는 인증 흐름이 시작됩니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`claude
`})}),`
`,(0,t.jsxs)(n.p,{children:[`이미 세션 안에 있다면 `,(0,t.jsx)(n.code,{children:`/login`}),`으로 인증을 다시 시작할 수 있습니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`/login
`})}),`
`,(0,t.jsxs)(n.p,{children:[`인증 방식은 Pro, Max, Team, Enterprise, Anthropic Console, 조직 계정, 클라우드 제공자 연동 등 환경에 따라 달라질 수 있습니다. 무료 Claude.ai 플랜에는 Claude Code 접근 권한이 없습니다. 인증 상태는 현재 설치본의 도움말을 확인한 뒤 `,(0,t.jsx)(n.code,{children:`claude auth status --text`}),` 계열 명령으로 점검합니다.`]}),`
`,(0,t.jsx)(n.h2,{id:`4단계-첫-세션`,"data-toc-id":`4단계-첫-세션`,"data-toc-slug":`4단계-첫-세션`,"data-toc-depth":`0`,children:`4단계: 첫 세션`}),`
`,(0,t.jsx)(n.p,{children:`프로젝트 루트에서 시작합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`cd path/to/your-project
git status --short
claude
`})}),`
`,(0,t.jsx)(n.p,{children:`첫 요청은 파일 수정 없는 탐색으로 제한합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`이 프로젝트의 주요 폴더, 실행 명령, 테스트 명령을 요약해줘. 아직 파일은 수정하지 마.
`})}),`
`,(0,t.jsx)(n.p,{children:`Claude Code는 필요한 파일을 읽어 프로젝트를 이해하고, 파일을 수정해야 하는 작업에서는 승인 흐름을 거칩니다. 처음부터 "전부 고쳐줘"라고 맡기기보다 읽기 전용 탐색, 작은 변경, 검증 명령 순서로 진행하세요.`}),`
`,(0,t.jsx)(n.h2,{id:`5단계-업데이트`,"data-toc-id":`5단계-업데이트`,"data-toc-slug":`5단계-업데이트`,"data-toc-depth":`0`,children:`5단계: 업데이트`}),`
`,(0,t.jsx)(n.p,{children:`네이티브 설치는 자동 업데이트 흐름을 제공합니다. 수동 확인이 필요할 때는 현재 설치본의 CLI 도움말을 먼저 봅니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`claude --help
claude update
`})}),`
`,(0,t.jsxs)(n.p,{children:[`현재 CLI는 `,(0,t.jsx)(n.code,{children:`update`}),`와 `,(0,t.jsx)(n.code,{children:`upgrade`}),` alias를 제공할 수 있습니다. Homebrew, WinGet, apt/dnf/apk 설치는 기본적으로 각 package manager의 upgrade 명령을 따르며, native 설치는 release channel과 minimum version을 settings에서 제어할 수 있습니다.`]}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`상황`}),(0,t.jsx)(n.th,{children:`확인 기준`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`최신 기능을 빨리 받기`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`autoUpdatesChannel: "latest"`}),`(기본값) 또는 `,(0,t.jsx)(n.code,{children:`claude-code@latest`}),` cask`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`안정성 우선`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`autoUpdatesChannel: "stable"`}),` 또는 `,(0,t.jsx)(n.code,{children:`claude-code`}),` cask`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`다운그레이드 방지`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`minimumVersion`}),`으로 하한 고정`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`조직 버전 고정`}),(0,t.jsxs)(n.td,{children:[`managed settings의 `,(0,t.jsx)(n.code,{children:`requiredMinimumVersion`}),`, `,(0,t.jsx)(n.code,{children:`requiredMaximumVersion`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`auto-update 끄기`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`DISABLE_AUTOUPDATER`}),`(수동 `,(0,t.jsx)(n.code,{children:`claude update`}),`는 유지) 또는 `,(0,t.jsx)(n.code,{children:`DISABLE_UPDATES`}),`(모든 경로 차단)`]})]})]})]}),`
`,(0,t.jsx)(n.p,{children:`업데이트 후에는 버전과 도움말이 기대대로 바뀌었는지 다시 확인합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`claude --version
claude --help
claude doctor
`})}),`
`,(0,t.jsx)(n.h2,{id:`문제-해결`,"data-toc-id":`문제-해결`,"data-toc-slug":`문제-해결`,"data-toc-depth":`0`,children:`문제 해결`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`증상`}),(0,t.jsx)(n.th,{children:`확인 순서`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`claude: command not found`})}),(0,t.jsx)(n.td,{children:`PATH, 터미널 재시작, 설치 로그, 공식 setup 문서`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`로그인 실패`}),(0,t.jsx)(n.td,{children:`계정 권한, 무료 플랜 여부, 브라우저 로그인 상태, 조직 정책`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`claude doctor`}),` 경고`]}),(0,t.jsx)(n.td,{children:`auto-update 실패, PATH, package manager 설치 방식, trust dialog 여부`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`프로젝트 파일을 못 찾음`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`pwd`}),`, 프로젝트 루트, `,(0,t.jsx)(n.code,{children:`git status --short`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`Windows에서 파일 경로가 꼬임`}),(0,t.jsx)(n.td,{children:`네이티브 Windows와 WSL2 중 실행 위치 일치 여부`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`명령 옵션이 문서와 다름`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`claude --help`}),`, `,(0,t.jsx)(n.code,{children:`claude <command> --help`}),`, 공식 CLI reference`]})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`실습`,"data-toc-id":`실습`,"data-toc-slug":`실습`,"data-toc-depth":`0`,children:`실습`}),`
`,(0,t.jsx)(n.p,{children:`설치본을 진단하고, 파일을 바꾸지 않는 첫 요청을 실행합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`claude --version
claude doctor
`})}),`
`,(0,t.jsxs)(n.p,{children:[`이어서 프로젝트 루트에서 `,(0,t.jsx)(n.code,{children:`claude`}),`를 실행하고 아래 요청을 붙여 넣습니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`이 프로젝트의 주요 폴더, 실행 명령, 테스트 명령을 요약해줘. 파일은 수정하지 말아줘.
`})}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인 항목`}),(0,t.jsx)(n.th,{children:`통과 기준`}),(0,t.jsx)(n.th,{children:`통과하지 못하면`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`claude --version`})}),(0,t.jsx)(n.td,{children:`버전 문자열이 출력된다`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`command -v claude`}),`와 PATH 안내를 다시 확인합니다`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`claude doctor`})}),(0,t.jsx)(n.td,{children:`설치 상태 진단 결과가 출력된다`}),(0,t.jsx)(n.td,{children:`표시된 항목을 설치, 인증, 설정 중 하나로 분류합니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`응답 내용`}),(0,t.jsx)(n.td,{children:`답변이 실제 폴더 이름과 명령을 인용한다`}),(0,t.jsxs)(n.td,{children:[`프로젝트 루트에서 실행했는지 `,(0,t.jsx)(n.code,{children:`pwd`}),`로 확인합니다`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`파일 상태`}),(0,t.jsxs)(n.td,{children:[`요청 후에도 `,(0,t.jsx)(n.code,{children:`git status --short`}),` 결과가 그대로다`]}),(0,t.jsx)(n.td,{children:`수정 금지 조건이 요청에 들어갔는지 확인합니다`})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`완료-기준`,"data-toc-id":`완료-기준`,"data-toc-slug":`완료-기준`,"data-toc-depth":`0`,children:`완료 기준`}),`
`,(0,t.jsxs)(s,{children:[(0,t.jsx)(o,{number:1,title:`설치 확인`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`claude --version`}),`, `,(0,t.jsx)(n.code,{children:`claude --help`}),`, `,(0,t.jsx)(n.code,{children:`claude doctor`}),`가 정상 동작합니다.`]})}),(0,t.jsx)(o,{number:2,title:`인증 확인`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`claude`}),` 또는 `,(0,t.jsx)(n.code,{children:`/login`}),`으로 계정 인증을 완료했습니다.`]})}),(0,t.jsx)(o,{number:3,title:`안전한 첫 요청`,children:(0,t.jsx)(n.p,{children:`프로젝트 루트에서 파일 수정 없는 읽기 전용 요청을 실행했습니다.`})}),(0,t.jsx)(o,{number:4,title:`업데이트 기준 확인`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`claude update`}),`와 공식 setup 문서를 언제 확인해야 하는지 설명할 수 있습니다.`]})})]}),`
`,(0,t.jsx)(c,{title:`핵심 요약`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Claude Code의 기본 명령은 `,(0,t.jsx)(n.code,{children:`claude`}),`입니다`]}),`
`,(0,t.jsx)(n.li,{children:`신규 설치는 공식 네이티브 설치 경로를 우선합니다`}),`
`,(0,t.jsx)(n.li,{children:`실행 전 OS, RAM, 계정 접근 조건을 확인합니다`}),`
`,(0,t.jsx)(n.li,{children:`첫 세션은 프로젝트 루트에서 읽기 전용 탐색으로 시작합니다`}),`
`,(0,t.jsxs)(n.li,{children:[`설치와 옵션은 `,(0,t.jsx)(n.code,{children:`claude --help`}),`, `,(0,t.jsx)(n.code,{children:`claude doctor`}),`, 공식 setup 문서를 우선 확인합니다`]}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};