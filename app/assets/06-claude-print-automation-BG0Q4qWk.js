import{n as e}from"./vendor-react-BH_RQ4nt.js";var t=e();function n(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,LearningObjective:a,Step:o,StepList:s,SummaryBox:c}=n;return r||i(`Callout`,!0),a||i(`LearningObjective`,!0),o||i(`Step`,!0),s||i(`StepList`,!0),c||i(`SummaryBox`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:`Claude 비대화형 실행과 자동화`}),`
`,(0,t.jsxs)(n.p,{children:[`대화형 `,(0,t.jsx)(n.code,{children:`claude`}),`는 사람이 승인하며 진행합니다. `,(0,t.jsx)(n.code,{children:`claude -p`}),`는 `,(0,t.jsx)(n.strong,{children:`한 번 실행하고 결과를 출력한 뒤 종료`}),`합니다. 스크립트, 파이프, 예약 작업, CI가 여기에 해당합니다.`]}),`
`,(0,t.jsx)(a,{items:["대화형 실행과 `claude -p`를 언제 나누어 사용할지 판단한다","CI에서 `--bare`가 필요한 이유를 설명한다","파이프로 입력을 넘기고 `--output-format`으로 결과 형식을 고정한다","`--allowedTools`와 권한 모드로 승인 없는 실행을 안전하게 제한한다",`세션을 이어받아 여러 번의 비대화형 호출을 연결한다`]}),`
`,(0,t.jsx)(n.h2,{id:`두-실행-방식의-차이`,"data-toc-id":`두-실행-방식의-차이`,"data-toc-slug":`두-실행-방식의-차이`,"data-toc-depth":`0`,children:`두 실행 방식의 차이`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-mermaid`,children:`flowchart LR
  Start[실행할 작업] --> Q{사람이 중간에<br/>승인할 수 있나?}
  Q -->|가능| TUI[claude<br/>대화형]
  Q -->|불가능| Print[claude -p<br/>비대화형]
  TUI --> Review[화면에서 단계별 확인]
  Print --> Result[결과 출력 후 종료]
  Print --> Code[종료 코드로 성공 여부 전달]
`})}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`claude -p "auth 모듈이 무슨 일을 하는지 설명해줘"
`})}),`
`,(0,t.jsxs)(n.p,{children:[`성공하면 종료 코드 `,(0,t.jsx)(n.code,{children:`0`}),`, 실패하면 0이 아닌 값을 돌려주므로 스크립트가 성공 여부로 분기할 수 있습니다.`]}),`
`,(0,t.jsxs)(n.h2,{id:`ci에서는-bare`,"data-toc-id":`ci에서는-bare`,"data-toc-slug":`ci에서는-bare`,"data-toc-depth":`0`,children:[`CI에서는 `,(0,t.jsx)(n.code,{children:`--bare`})]}),`
`,(0,t.jsxs)(n.p,{children:[`옵션 없이 `,(0,t.jsx)(n.code,{children:`-p`}),`를 실행하면 대화형 세션과 똑같은 맥락을 불러옵니다. 작업 폴더의 hooks, skills, custom command, subagent, plugin, MCP 서버, auto memory, `,(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`가 모두 포함됩니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`claude --bare -p "README.md를 요약해줘" --allowedTools "Read"
`})}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`구분`}),(0,t.jsxs)(n.th,{children:[(0,t.jsx)(n.code,{children:`-p`}),`만 사용`]}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:`--bare -p`})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`프로젝트 지침`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`CLAUDE.md`}),`와 auto memory 포함`]}),(0,t.jsx)(n.td,{children:`제외`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`확장`}),(0,t.jsx)(n.td,{children:`hooks, plugin, MCP 서버 연결`}),(0,t.jsx)(n.td,{children:`제외`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`결과`}),(0,t.jsx)(n.td,{children:`기계마다 달라질 수 있음`}),(0,t.jsx)(n.td,{children:`어디서 실행해도 같은 조건`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`인증`}),(0,t.jsx)(n.td,{children:`구독 로그인 사용`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`ANTHROPIC_API_KEY`}),` 필요`]})]})]})]}),`
`,(0,t.jsx)(r,{variant:`warning`,title:`신뢰하지 않은 폴더에서 -p를 실행할 때`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`-p`}),` 세션에는 workspace trust 확인과 서버별 승인 화면이 없습니다. `,(0,t.jsx)(n.code,{children:`--bare`}),` 없이 실행하면 그 폴더의 `,(0,t.jsx)(n.code,{children:`.claude/settings.json`}),` hooks와 `,(0,t.jsx)(n.code,{children:`.mcp.json`}),` 서버가 그대로 동작합니다. 외부에서 받은 저장소를 검사할 때는 `,(0,t.jsx)(n.code,{children:`--bare`}),`를 기본값으로 두세요.`]})}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`--bare`}),`에서는 Bash, 파일 조회, 파일 수정 도구만 사용할 수 있습니다. 필요한 맥락은 옵션으로 직접 넘깁니다.`]}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`넣어야 할 것`}),(0,t.jsx)(n.th,{children:`옵션`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`시스템 프롬프트 추가`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`--append-system-prompt`}),`, `,(0,t.jsx)(n.code,{children:`--append-system-prompt-file`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`설정`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`--settings <파일 또는 JSON>`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`MCP 서버`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`--mcp-config <파일 또는 JSON>`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`custom agent`}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`--agents <JSON>`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`plugin`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`--plugin-dir <경로>`}),`, `,(0,t.jsx)(n.code,{children:`--plugin-url <URL>`})]})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`파이프로-입력-넘기기`,"data-toc-id":`파이프로-입력-넘기기`,"data-toc-slug":`파이프로-입력-넘기기`,"data-toc-depth":`0`,children:`파이프로 입력 넘기기`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`cat build-error.txt | claude -p "이 빌드 오류의 근본 원인을 간단히 설명해줘" > output.txt
`})}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`git diff main | claude -p "이 diff에서 오탈자만 찾아 파일명:줄번호 형식으로 알려줘"
`})}),`
`,(0,t.jsx)(r,{variant:`info`,title:`파이프 입력은 10MB까지`,children:(0,t.jsx)(n.p,{children:`stdin으로 넘기는 내용은 10MB로 제한됩니다. 넘으면 오류와 함께 0이 아닌 종료 코드로 끝납니다. 더 큰 입력은 파일로 저장한 뒤 프롬프트에서 경로를 가리키세요.`})}),`
`,(0,t.jsx)(n.h2,{id:`출력-형식-고정하기`,"data-toc-id":`출력-형식-고정하기`,"data-toc-slug":`출력-형식-고정하기`,"data-toc-depth":`0`,children:`출력 형식 고정하기`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`값`}),(0,t.jsx)(n.th,{children:`결과`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`--output-format text`})}),(0,t.jsx)(n.td,{children:`평문 출력 (기본값)`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`--output-format json`})}),(0,t.jsx)(n.td,{children:`결과, session ID, 사용량이 담긴 JSON`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`--output-format stream-json`})}),(0,t.jsx)(n.td,{children:`줄 단위 JSON으로 실시간 전달`})]})]})]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`claude -p "이 프로젝트를 요약해줘" --output-format json | jq -r '.result'
`})}),`
`,(0,t.jsxs)(n.p,{children:[`스키마를 지정하면 정해진 모양의 JSON을 받을 수 있습니다. 결과는 `,(0,t.jsx)(n.code,{children:`structured_output`}),` 필드에 담깁니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`claude -p "auth.py의 주요 함수 이름을 뽑아줘" \\
  --output-format json \\
  --json-schema '{"type":"object","properties":{"functions":{"type":"array","items":{"type":"string"}}},"required":["functions"]}'
`})}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`--output-format json`}),`으로 받으면 응답에 `,(0,t.jsx)(n.code,{children:`total_cost_usd`}),`와 모델별 비용 내역이 함께 들어옵니다. 호출 단위로 비용을 기록해야 하는 자동화에 사용할 수 있으며, 이 값은 추정치라 실제 청구액과 다를 수 있습니다.`]}),`
`,(0,t.jsx)(n.h2,{id:`권한과-도구-제한`,"data-toc-id":`권한과-도구-제한`,"data-toc-slug":`권한과-도구-제한`,"data-toc-depth":`0`,children:`권한과 도구 제한`}),`
`,(0,t.jsx)(n.p,{children:`비대화형 실행에는 승인 화면이 없습니다. 무엇을 허용할지 먼저 정해 두어야 합니다.`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`옵션`}),(0,t.jsx)(n.th,{children:`용도`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`--allowedTools "Bash,Read,Edit"`})}),(0,t.jsx)(n.td,{children:`지정한 도구만 승인 없이 사용`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`--allowedTools "Bash(git diff *)"`})}),(0,t.jsx)(n.td,{children:`명령 접두사 단위로 좁게 허용`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`--disallowedTools`})}),(0,t.jsx)(n.td,{children:`특정 도구나 패턴 거부`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`--permission-mode acceptEdits`})}),(0,t.jsx)(n.td,{children:`파일 수정을 승인 없이 진행`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`--permission-mode auto`})}),(0,t.jsx)(n.td,{children:`분류기가 대부분의 동작을 대신 판단`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`--permission-prompts none`})}),(0,t.jsx)(n.td,{children:`답할 사람이 없는 실행에서 승인 요청을 모두 거부 처리`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`--max-budget-usd`})}),(0,t.jsx)(n.td,{children:`이번 실행의 비용 상한`})]})]})]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`claude -p "테스트를 실행하고 실패를 고쳐줘" --allowedTools "Bash,Read,Edit"
`})}),`
`,(0,t.jsx)(r,{variant:`tip`,title:`접두사 허용에서 띄어쓰기가 중요합니다`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`Bash(git diff *)`}),`처럼 `,(0,t.jsx)(n.code,{children:`*`}),` 앞에 공백을 두면 `,(0,t.jsx)(n.code,{children:`git diff`}),`로 시작하는 명령만 허용합니다. 공백 없이 `,(0,t.jsx)(n.code,{children:`Bash(git diff*)`}),`로 적으면 `,(0,t.jsx)(n.code,{children:`git diff-index`}),` 같은 다른 명령까지 함께 허용됩니다.`]})}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`claude -p "의존성 버전을 올리고 테스트를 실행해줘" --permission-mode auto --permission-prompts none
`})}),`
`,(0,t.jsx)(n.h2,{id:`대화-이어가기`,"data-toc-id":`대화-이어가기`,"data-toc-slug":`대화-이어가기`,"data-toc-depth":`0`,children:`대화 이어가기`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`claude -p "이 저장소의 성능 문제를 검토해줘"
claude -p "이제 데이터베이스 질의에 집중해줘" --continue
`})}),`
`,(0,t.jsx)(n.p,{children:`여러 작업을 동시에 굴린다면 session ID를 저장해 두고 지정해서 이어갑니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`session_id=$(claude -p "검토를 시작해줘" --output-format json | jq -r '.session_id')
claude -p "그 검토를 계속해줘" --resume "$session_id"
`})}),`
`,(0,t.jsx)(n.h2,{id:`빌드-스크립트에-넣기`,"data-toc-id":`빌드-스크립트에-넣기`,"data-toc-slug":`빌드-스크립트에-넣기`,"data-toc-depth":`0`,children:`빌드 스크립트에 넣기`}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`package.json`}),`의 script로 감싸면 프로젝트 전용 검사 도구처럼 사용할 수 있습니다.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-json`,children:`{
  "scripts": {
    "lint:claude": "git diff main | claude -p \\"you are a typo linter. for each typo in this diff, report filename:line on one line and the issue on the next. return nothing else.\\""
  }
}
`})}),`
`,(0,t.jsx)(n.p,{children:`diff를 파이프로 넘기면 Claude가 diff를 조회하기 위한 Bash 권한을 따로 받을 필요가 없습니다.`}),`
`,(0,t.jsx)(n.h2,{id:`실습`,"data-toc-id":`실습`,"data-toc-slug":`실습`,"data-toc-depth":`0`,children:`실습`}),`
`,(0,t.jsx)(n.p,{children:`읽기만 하는 비대화형 호출을 한 번 실행하고 결과 형식을 확인합니다.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`claude --version
`})}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`git diff --stat | claude --bare -p "이 변경 통계를 한 문단으로 요약해줘" --allowedTools "Read"
`})}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`확인 항목`}),(0,t.jsx)(n.th,{children:`통과 기준`}),(0,t.jsx)(n.th,{children:`통과하지 못하면`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`종료`}),(0,t.jsx)(n.td,{children:`요약 출력 후 프롬프트가 돌아온다`}),(0,t.jsxs)(n.td,{children:[`대화형 화면이 열렸다면 `,(0,t.jsx)(n.code,{children:`-p`}),`가 빠졌습니다`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`인증`}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`--bare`}),`에서 오류 없이 실행된다`]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`--bare`}),`는 구독 로그인을 사용하지 않으므로 `,(0,t.jsx)(n.code,{children:`ANTHROPIC_API_KEY`}),`가 필요합니다`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`파일 상태`}),(0,t.jsxs)(n.td,{children:[`실행 후에도 `,(0,t.jsx)(n.code,{children:`git status --short`}),` 결과가 그대로다`]}),(0,t.jsx)(n.td,{children:`허용 도구에 수정 도구가 들어갔는지 확인합니다`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:`형식 판단`}),(0,t.jsxs)(n.td,{children:[`이 결과를 다음 단계로 넘기려면 어떤 `,(0,t.jsx)(n.code,{children:`--output-format`}),`이 필요한지 말할 수 있다`]}),(0,t.jsx)(n.td,{children:`출력 형식 표를 다시 읽습니다`})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`완료-기준`,"data-toc-id":`완료-기준`,"data-toc-slug":`완료-기준`,"data-toc-depth":`0`,children:`완료 기준`}),`
`,(0,t.jsxs)(s,{children:[(0,t.jsx)(o,{number:1,title:`실행 방식 구분`,children:(0,t.jsxs)(n.p,{children:[`사람이 승인할 수 있는 작업과 없는 작업을 나누어 `,(0,t.jsx)(n.code,{children:`claude`}),`와 `,(0,t.jsx)(n.code,{children:`claude -p`}),`를 선택할 수 있습니다.`]})}),(0,t.jsx)(o,{number:2,title:`재현성 확보`,children:(0,t.jsxs)(n.p,{children:[`CI에서 `,(0,t.jsx)(n.code,{children:`--bare`}),`가 필요한 이유를 프로젝트 지침과 확장 로딩 차이로 설명할 수 있습니다.`]})}),(0,t.jsx)(o,{number:3,title:`형식 고정`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`text`}),`, `,(0,t.jsx)(n.code,{children:`json`}),`, `,(0,t.jsx)(n.code,{children:`stream-json`}),` 중 목적에 맞는 출력 형식을 고를 수 있습니다.`]})}),(0,t.jsx)(o,{number:4,title:`권한 설계`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`--allowedTools`}),`로 필요한 도구만 허용하고, 접두사 허용의 띄어쓰기 규칙을 설명할 수 있습니다.`]})}),(0,t.jsx)(o,{number:5,title:`세션 연결`,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`--continue`}),`와 session ID를 사용해 여러 호출을 하나의 작업으로 이어갈 수 있습니다.`]})})]}),`
`,(0,t.jsx)(c,{title:`핵심 요약`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`claude -p`}),`는 한 번 실행하고 종료하며, 종료 코드로 성공 여부를 전달합니다`]}),`
`,(0,t.jsxs)(n.li,{children:[`CI와 스크립트에서는 `,(0,t.jsx)(n.code,{children:`--bare`}),`로 프로젝트 지침과 확장 로딩을 제외해 결과를 고정합니다`]}),`
`,(0,t.jsxs)(n.li,{children:[`신뢰하지 않은 폴더에서는 `,(0,t.jsx)(n.code,{children:`--bare`}),` 없이 실행하면 그 폴더의 hooks와 MCP 서버가 동작합니다`]}),`
`,(0,t.jsx)(n.li,{children:`파이프 입력은 10MB까지이며, 더 큰 입력은 파일 경로로 전달합니다`}),`
`,(0,t.jsxs)(n.li,{children:[`출력 형식은 `,(0,t.jsx)(n.code,{children:`--output-format`}),`과 `,(0,t.jsx)(n.code,{children:`--json-schema`}),`로 고정하고 `,(0,t.jsx)(n.code,{children:`jq`}),`로 필요한 값만 꺼냅니다`]}),`
`,(0,t.jsxs)(n.li,{children:[`권한은 `,(0,t.jsx)(n.code,{children:`--allowedTools`}),`로 좁게 시작하고, 답할 사람이 없으면 `,(0,t.jsx)(n.code,{children:`--permission-prompts none`}),`을 함께 사용합니다`]}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};