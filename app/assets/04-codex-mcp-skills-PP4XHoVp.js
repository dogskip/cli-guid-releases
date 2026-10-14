import{n as e}from"./vendor-react-BH_RQ4nt.js";var t=e();function n(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,LearningObjective:a,Step:o,StepList:s,SummaryBox:c}=n;return r||i(`Callout`,!0),a||i(`LearningObjective`,!0),o||i(`Step`,!0),s||i(`StepList`,!0),c||i(`SummaryBox`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:`Codex MCP & Skills 설정`}),`
`,(0,t.jsxs)(n.p,{children:[`Skills와 MCP의 개념 자체는 `,(0,t.jsx)(n.a,{href:`?chapter=mcp-skills-common`,children:`MCP & Skills 공통 가이드`}),`에서 다룹니다. 이 챕터는 `,(0,t.jsx)(n.strong,{children:`Codex CLI에서 MCP와 Skills를 설정하는 구체적인 방법`}),`만 설명합니다.`]}),`
`,(0,t.jsx)(a,{items:["`codex mcp` CLI와 config.toml 편집 방식의 차이를 안다",`사용자 config와 프로젝트 config 중 어디에 MCP를 둘지 판단한다`,"`/mcp` 명령어로 등록된 MCP 도구를 확인할 수 있다",`Skills, Plugins, MCP의 경계를 Codex 기준으로 구분한다`]}),`
`,(0,t.jsx)(n.h2,{id:`mcp-서버-등록`,"data-toc-id":`mcp-서버-등록`,"data-toc-slug":`mcp-서버-등록`,"data-toc-depth":`0`,children:`MCP 서버 등록`}),`
`,(0,t.jsx)(n.p,{children:`Codex MCP는 우선 현재 설치본의 MCP 명령을 확인한 뒤 등록합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`codex mcp --help
codex mcp list
`})}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`명령`}),(0,t.jsx)(n.th,{children:`용도`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`codex mcp list`})}),(0,t.jsx)(n.td,{children:`등록된 서버 목록`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`codex mcp get <name>`})}),(0,t.jsx)(n.td,{children:`특정 서버 설정 확인`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`codex mcp add <name> -- <command>`})}),(0,t.jsx)(n.td,{children:`STDIO 서버 등록`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`codex mcp remove <name>`})}),(0,t.jsx)(n.td,{children:`서버 등록 해제`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`codex mcp login <name>`}),` / `,(0,t.jsx)(n.code,{children:`codex mcp logout <name>`})]}),(0,t.jsx)(n.td,{children:`OAuth 서버 로그인과 로그아웃`})]})]})]}),`
`,(0,t.jsxs)(n.p,{children:[`STDIO 서버는 `,(0,t.jsx)(n.code,{children:`--`}),` 뒤에 실제 실행 명령을 적고, 환경변수는 `,(0,t.jsx)(n.code,{children:`--env`}),`로 넘깁니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`codex mcp add <server-name> --env VAR1=VALUE1 -- <stdio server-command>
codex mcp add context7 -- npx -y @upstash/context7-mcp
`})}),`
`,(0,t.jsxs)(n.p,{children:[`가능하면 `,(0,t.jsx)(n.code,{children:`codex mcp add`}),` 계열 명령으로 등록하고, 팀이 공유해야 하는 설정인지 개인 로컬 설정인지 먼저 결정합니다.`]}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`위치`}),(0,t.jsx)(n.th,{children:`사용할 때`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`~/.codex/config.toml`})}),(0,t.jsx)(n.td,{children:`개인 계정, 개인 토큰, 모든 프로젝트에 사용하는 MCP`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`.codex/config.toml`})}),(0,t.jsx)(n.td,{children:`신뢰한 프로젝트에서 팀이 공유할 MCP`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[`CLI `,(0,t.jsx)(n.code,{children:`--config`})]}),(0,t.jsx)(n.td,{children:`한 번만 임시로 덮어쓸 설정`})]})]})]}),`
`,(0,t.jsx)(r,{variant:`warning`,title:`프로젝트 config는 신뢰한 저장소에서만`,children:(0,t.jsxs)(n.p,{children:[`Codex는 신뢰하지 않은 프로젝트의 `,(0,t.jsx)(n.code,{children:`.codex/`}),` 설정을 건너뜁니다. 외부 저장소에서 받은 프로젝트 config는 MCP 명령, URL, 환경변수 요구사항을 먼저 읽고 신뢰 여부를 판단하세요.`]})}),`
`,(0,t.jsx)(n.h2,{id:`config-toml-직접-편집`,"data-toc-id":`config-toml-직접-편집`,"data-toc-slug":`config-toml-직접-편집`,"data-toc-depth":`0`,children:`config.toml 직접 편집`}),`
`,(0,t.jsxs)(n.p,{children:[`CLI로 등록하기 어렵거나 팀 문서에 명시된 구성이 있다면 `,(0,t.jsx)(n.code,{children:`config.toml`}),`을 직접 편집할 수 있습니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-toml`,children:`[mcp_servers.fetch]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-fetch"]

[mcp_servers.memory]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-memory"]
`})}),`
`,(0,t.jsx)(n.p,{children:`각 STDIO MCP 서버는 주로 다음 항목을 가집니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`항목`}),(0,t.jsx)(n.th,{children:`필수`}),(0,t.jsx)(n.th,{children:`설명`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`command`})}),(0,t.jsx)(n.td,{children:`예`}),(0,t.jsxs)(n.td,{children:[`실행할 명령어 (`,(0,t.jsx)(n.code,{children:`npx`}),`, `,(0,t.jsx)(n.code,{children:`node`}),`, `,(0,t.jsx)(n.code,{children:`python`}),`, `,(0,t.jsx)(n.code,{children:`uvx`}),` 등)`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`args`})}),(0,t.jsx)(n.td,{children:`아니오`}),(0,t.jsx)(n.td,{children:`명령어에 전달할 인자 목록`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`env`})}),(0,t.jsx)(n.td,{children:`아니오`}),(0,t.jsx)(n.td,{children:`서버에 직접 설정할 환경변수`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`env_vars`})}),(0,t.jsx)(n.td,{children:`아니오`}),(0,t.jsx)(n.td,{children:`Codex 환경에서 읽어 MCP 서버로 전달할 환경변수 이름 목록`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`cwd`})}),(0,t.jsx)(n.td,{children:`아니오`}),(0,t.jsx)(n.td,{children:`서버를 시작할 작업 디렉터리`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`startup_timeout_sec`})}),(0,t.jsx)(n.td,{children:`아니오`}),(0,t.jsx)(n.td,{children:`서버 시작 대기 시간`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`tool_timeout_sec`})}),(0,t.jsx)(n.td,{children:`아니오`}),(0,t.jsx)(n.td,{children:`서버 tool 실행 대기 시간`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`enabled`})}),(0,t.jsx)(n.td,{children:`아니오`}),(0,t.jsx)(n.td,{children:`서버를 지우지 않고 비활성화`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`required`})}),(0,t.jsx)(n.td,{children:`아니오`}),(0,t.jsx)(n.td,{children:`서버 초기화 실패 시 Codex 시작 실패 처리`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`enabled_tools`}),` / `,(0,t.jsx)(n.code,{children:`disabled_tools`})]}),(0,t.jsx)(n.td,{children:`아니오`}),(0,t.jsx)(n.td,{children:`MCP tool allowlist/denylist`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`default_tools_approval_mode`})}),(0,t.jsx)(n.td,{children:`아니오`}),(0,t.jsxs)(n.td,{children:[`서버 tool 기본 승인 방식 (`,(0,t.jsx)(n.code,{children:`auto`}),`, `,(0,t.jsx)(n.code,{children:`prompt`}),`, `,(0,t.jsx)(n.code,{children:`approve`}),`)`]})]})]})]}),`
`,(0,t.jsxs)(n.p,{children:[`환경변수 값 자체를 공유 config에 기록하기보다 `,(0,t.jsx)(n.code,{children:`env_vars`}),`나 `,(0,t.jsx)(n.code,{children:`bearer_token_env_var`}),`처럼 이름만 참조하는 방식이 안전합니다.`]}),`
`,(0,t.jsx)(n.h2,{id:`원격-mcp-서버`,"data-toc-id":`원격-mcp-서버`,"data-toc-slug":`원격-mcp-서버`,"data-toc-depth":`0`,children:`원격 MCP 서버`}),`
`,(0,t.jsx)(n.p,{children:`로컬 프로세스가 아니라 원격 주소로 연결하는 MCP는 Streamable HTTP 서버로 등록합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-toml`,children:`[mcp_servers.docs]
url = "https://example.com/mcp"
bearer_token_env_var = "DOCS_MCP_TOKEN"
http_headers = { "X-Region" = "us-east-1" }
`})}),`
`,(0,t.jsx)(n.p,{children:`Streamable HTTP 서버는 인증과 헤더 관련 키를 따로 가집니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`항목`}),(0,t.jsx)(n.th,{children:`설명`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`url`})}),(0,t.jsx)(n.td,{children:`서버 주소`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`auth`})}),(0,t.jsx)(n.td,{children:`설정된 bearer token 이후에 시도할 인증 방식`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`bearer_token_env_var`})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`Authorization`}),`에 보낼 토큰의 환경변수 이름`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`http_headers`})}),(0,t.jsx)(n.td,{children:`고정 값 헤더 map`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`env_http_headers`})}),(0,t.jsx)(n.td,{children:`값을 환경변수에서 읽는 헤더 map`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`http_headers_helper`})}),(0,t.jsx)(n.td,{children:`헤더 JSON을 출력하는 로컬 명령`})]})]})]}),`
`,(0,t.jsx)(n.p,{children:`원격 MCP는 bearer token이나 OAuth를 사용할 수 있습니다. OAuth를 지원하는 서버는 등록 후 다음 명령으로 로그인합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`codex mcp login docs
`})}),`
`,(0,t.jsxs)(n.p,{children:[`OAuth callback port나 URL을 고정해야 하는 환경에서는 top-level `,(0,t.jsx)(n.code,{children:`mcp_oauth_callback_port`}),`, `,(0,t.jsx)(n.code,{children:`mcp_oauth_callback_url`}),`을 사용합니다.`]}),`
`,(0,t.jsx)(r,{variant:`warning`,title:`토큰은 config에 직접 기록하지 않습니다`,children:(0,t.jsxs)(n.p,{children:[`토큰 원문은 `,(0,t.jsx)(n.code,{children:`config.toml`}),`에 넣지 말고 환경변수 이름만 적습니다. 저장소에 공유되는 `,(0,t.jsx)(n.code,{children:`.codex/config.toml`}),`에는 개인 토큰, 로컬 절대 경로, 사내 비밀 URL을 넣지 않습니다.`]})}),`
`,(0,t.jsx)(n.h2,{id:`mcp-서버-확인`,"data-toc-id":`mcp-서버-확인`,"data-toc-slug":`mcp-서버-확인`,"data-toc-depth":`0`,children:`MCP 서버 확인`}),`
`,(0,t.jsx)(n.p,{children:`등록된 MCP 서버와 제공되는 도구 목록은 세션 안에서 확인할 수 있습니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`/mcp
/mcp verbose
`})}),`
`,(0,t.jsx)(n.p,{children:`문제가 있으면 터미널에서 CLI 상태도 함께 확인합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`codex mcp list
codex doctor
`})}),`
`,(0,t.jsx)(n.h2,{id:`plugin으로-제공되는-mcp`,"data-toc-id":`plugin으로-제공되는-mcp`,"data-toc-slug":`plugin으로-제공되는-mcp`,"data-toc-depth":`0`,children:`Plugin으로 제공되는 MCP`}),`
`,(0,t.jsxs)(n.p,{children:[`Codex plugin은 Skills, app 연결, MCP 서버를 한 묶음으로 배포할 수 있습니다. plugin이 제공하는 MCP는 사용자가 직접 `,(0,t.jsx)(n.code,{children:`command`}),`를 적는 일반 MCP와 다르게 plugin manifest에서 시작 정보를 가져옵니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`codex plugin --help
codex
# 세션 안에서
/plugins
`})}),`
`,(0,t.jsx)(n.p,{children:`plugin-bundled MCP도 완전히 자동 신뢰되는 것은 아닙니다. 사용자 config에서는 plugin MCP의 on/off와 tool 정책을 따로 좁힐 수 있습니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-toml`,children:`[plugins."sample@test".mcp_servers.sample]
enabled = true
default_tools_approval_mode = "prompt"
enabled_tools = ["read", "search"]

[plugins."sample@test".mcp_servers.sample.tools.search]
approval_mode = "approve"
`})}),`
`,(0,t.jsx)(r,{variant:`warning`,title:`Plugin은 설치와 연결을 나눠 봅니다`,children:(0,t.jsxs)(n.p,{children:[`Plugin 설치는 기능 묶음을 추가하는 일이고, app 로그인이나 MCP 인증은 별도일 수 있습니다. 설치 직후 바로 외부 데이터 접근이 되는지 단정하지 말고 `,(0,t.jsx)(n.code,{children:`/plugins`}),`, `,(0,t.jsx)(n.code,{children:`/mcp`}),`, 인증 프롬프트를 함께 확인하세요.`]})}),`
`,(0,t.jsx)(n.h2,{id:`자주-사용하는-mcp-서버`,"data-toc-id":`자주-사용하는-mcp-서버`,"data-toc-slug":`자주-사용하는-mcp-서버`,"data-toc-depth":`0`,children:`자주 사용하는 MCP 서버`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`서버`}),(0,t.jsx)(n.th,{children:`용도`}),(0,t.jsx)(n.th,{children:`등록 전 확인`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`Filesystem`}),(0,t.jsx)(n.td,{children:`허용된 경로의 파일 읽기/쓰기`}),(0,t.jsx)(n.td,{children:`경로 범위와 쓰기 권한`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`Fetch`}),(0,t.jsx)(n.td,{children:`HTTP 요청, 웹 페이지 읽기`}),(0,t.jsx)(n.td,{children:`외부 네트워크 허용 여부`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`Memory`}),(0,t.jsx)(n.td,{children:`세션을 넘는 지식 저장`}),(0,t.jsx)(n.td,{children:`저장 위치와 개인정보 포함 여부`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`Playwright`}),(0,t.jsx)(n.td,{children:`브라우저 자동화, UI 테스트`}),(0,t.jsx)(n.td,{children:`브라우저 설치와 실행 권한`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`사내 API`}),(0,t.jsx)(n.td,{children:`이슈, 배포, 문서 조회`}),(0,t.jsx)(n.td,{children:`토큰, 감사 로그, 데이터 반출 정책`})]})]})]}),`
`,(0,t.jsx)(r,{variant:`tip`,title:`처음엔 최소 구성으로`,children:(0,t.jsx)(n.p,{children:`Filesystem, Fetch 같은 핵심 MCP 1~2개로 시작하세요. 모든 서버를 한 번에 등록하면 시작 속도가 느려지고 불필요한 컨텍스트를 소비할 수 있습니다.`})}),`
`,(0,t.jsx)(n.h2,{id:`skills-사용`,"data-toc-id":`skills-사용`,"data-toc-slug":`skills-사용`,"data-toc-depth":`0`,children:`Skills 사용`}),`
`,(0,t.jsxs)(n.p,{children:[`Skills는 Codex의 작업 절차를 정의합니다. 공통 가이드에서 배운 `,(0,t.jsx)(n.strong,{children:`Check → Plan → Act → Verify`}),` 4단계 흐름을 Codex에서 그대로 사용할 수 있습니다.`]}),`
`,(0,t.jsxs)(n.p,{children:[`세션 안에서 `,(0,t.jsx)(n.code,{children:`/skills`}),` 명령어로 사용 가능한 Skills 목록을 확인하거나, 프롬프트에서 `,(0,t.jsx)(n.code,{children:`$`}),`로 특정 skill을 직접 언급할 수 있습니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-text`,children:`/skills
$skill-creator
`})}),`
`,(0,t.jsxs)(n.p,{children:[`Skills는 `,(0,t.jsx)(n.code,{children:`SKILL.md`}),`가 들어 있는 폴더로 작성하며, 필요한 경우 `,(0,t.jsx)(n.code,{children:`scripts/`}),`, `,(0,t.jsx)(n.code,{children:`references/`}),`, `,(0,t.jsx)(n.code,{children:`assets/`}),`를 함께 둡니다. Codex는 처음부터 모든 skill 본문을 다 넣지 않고, 이름과 설명을 보고 필요할 때 본문을 읽는 progressive disclosure 방식을 사용합니다.`]}),`
`,(0,t.jsxs)(n.p,{children:[`plugin도 skill을 포함할 수 있습니다. 이 경우 `,(0,t.jsx)(n.code,{children:`/skills`}),`에는 로컬 skill과 plugin 제공 skill이 함께 보일 수 있으므로, 같은 이름의 절차가 여러 곳에 있으면 출처를 확인한 뒤 사용합니다.`]}),`
`,(0,t.jsx)(r,{variant:`warning`,title:`Skills와 MCP의 경계`,children:(0,t.jsx)(n.p,{children:`Skills는 "어떻게 일할지"(절차), MCP는 "무엇을 연결할 수 있을지"(capability)입니다. 절차 문제를 MCP로 해결하려 하면 과설계가 되고, capability 문제를 Skills로 해결하려 하면 능력이 부족해집니다. 공통 가이드의 구분 기준을 다시 참고하세요.`})}),`
`,(0,t.jsx)(n.h2,{id:`실습`,"data-toc-id":`실습`,"data-toc-slug":`실습`,"data-toc-depth":`0`,children:`실습`}),`
`,(0,t.jsx)(n.p,{children:`MCP 등록 상태를 확인하고, 지금 필요한지 판단합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`codex mcp --help
codex mcp list
`})}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인 항목`}),(0,t.jsx)(n.th,{children:`통과 기준`}),(0,t.jsx)(n.th,{children:`통과하지 못하면`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`codex mcp list`})}),(0,t.jsx)(n.td,{children:`등록된 서버 목록 또는 빈 결과가 출력된다`}),(0,t.jsx)(n.td,{children:`빈 결과는 정상입니다. 오류라면 설치본과 config 위치를 확인합니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`등록 판단`}),(0,t.jsx)(n.td,{children:`지금 필요한 서버가 있는지 한 문장으로 답할 수 있다`}),(0,t.jsx)(n.td,{children:`필요한 외부 데이터가 없으면 등록하지 않습니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`경계 구분`}),(0,t.jsx)(n.td,{children:`Skills와 MCP가 각각 무엇을 담당하는지 말할 수 있다`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`Skills 사용`}),` 절을 다시 읽습니다`]})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`완료-기준`,"data-toc-id":`완료-기준`,"data-toc-slug":`완료-기준`,"data-toc-depth":`0`,children:`완료 기준`}),`
`,(0,t.jsxs)(s,{children:[(0,t.jsx)(o,{number:1,title:`MCP 등록 방식 선택`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`codex mcp`}),` CLI와 `,(0,t.jsx)(n.code,{children:`config.toml`}),` 직접 편집 중 현재 상황에 맞는 방식을 선택할 수 있습니다.`]})}),(0,t.jsx)(o,{number:2,title:`config 위치 판단`,children:(0,t.jsxs)(n.p,{children:[`개인 MCP는 `,(0,t.jsx)(n.code,{children:`~/.codex/config.toml`}),`, 팀 공유 MCP는 신뢰한 프로젝트의 `,(0,t.jsx)(n.code,{children:`.codex/config.toml`}),`에 둔다는 기준을 설명할 수 있습니다.`]})}),(0,t.jsx)(o,{number:3,title:`MCP 상태 확인`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`/mcp`}),`, `,(0,t.jsx)(n.code,{children:`/mcp verbose`}),`, `,(0,t.jsx)(n.code,{children:`codex mcp list`}),`로 등록된 MCP 서버와 도구를 확인할 수 있습니다.`]})}),(0,t.jsx)(o,{number:4,title:`Skills 확인`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`/skills`}),`와 `,(0,t.jsx)(n.code,{children:`$skill-name`}),` 방식으로 사용 가능한 Skills를 찾고 호출할 수 있습니다.`]})}),(0,t.jsx)(o,{number:5,title:`역할 구분`,children:(0,t.jsx)(n.p,{children:`Skills(절차), MCP(capability), Plugin(확장 묶음)의 차이를 설명할 수 있습니다.`})})]}),`
`,(0,t.jsx)(c,{title:`핵심 요약`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`MCP 서버는 `,(0,t.jsx)(n.code,{children:`codex mcp`}),` CLI 또는 `,(0,t.jsx)(n.code,{children:`config.toml`}),`로 등록합니다`]}),`
`,(0,t.jsxs)(n.li,{children:[`개인 설정은 `,(0,t.jsx)(n.code,{children:`~/.codex/config.toml`}),`, 팀 공유 설정은 신뢰한 프로젝트의 `,(0,t.jsx)(n.code,{children:`.codex/config.toml`}),`에 둡니다`]}),`
`,(0,t.jsx)(n.li,{children:`원격 MCP는 Streamable HTTP, bearer token, OAuth 같은 연결 방식을 구분해야 합니다`}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`/mcp`}),`와 `,(0,t.jsx)(n.code,{children:`codex mcp list`}),`로 등록 상태를 확인합니다`]}),`
`,(0,t.jsxs)(n.li,{children:[`Plugin은 Skills, app, MCP를 묶을 수 있으며 `,(0,t.jsx)(n.code,{children:`/plugins`}),`와 `,(0,t.jsx)(n.code,{children:`codex plugin`}),`으로 관리합니다`]}),`
`,(0,t.jsxs)(n.li,{children:[`Skills는 `,(0,t.jsx)(n.code,{children:`/skills`}),` 또는 `,(0,t.jsx)(n.code,{children:`$skill-name`}),`으로 확인하고 호출하며, MCP와 역할이 다릅니다`]}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};