const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-terminal-ydmEJDml.js","assets/rolldown-runtime-QTnfLwEv.js","assets/vendor-terminal-BrP-ENHg.css"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{i as t,n}from"./vendor-react-BH_RQ4nt.js";import{r}from"./vendor-mermaid-parser-CaX-NL4v.js";import{L as i,U as a,V as o,Y as s,_ as c,a as l,c as u,d,f,g as p,i as m,l as h,n as g,o as _,p as v,r as ee,s as y,t as te,u as ne}from"./index-C-qr-C7P.js";import"./vendor-terminal-ydmEJDml.js";var re=s(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),b=e(t(),1),x=n();function S(e){return e.replace(/\u001b\[200~/g,``).replace(/\u001b\[201~/g,``)}function C(){return Promise.all([r(()=>import(`./vendor-terminal-ydmEJDml.js`).then(e=>e.t),__vite__mapDeps([0,1,2])),r(()=>import(`./vendor-terminal-ydmEJDml.js`).then(e=>e.n),__vite__mapDeps([0,1,2]))]).then(([e,t])=>{let n=e.Terminal,r=t.FitAddon,i=new n({convertEol:!1,disableStdin:!0,fontFamily:`var(--font-mono)`,theme:{background:`#12151e`,foreground:`#e8ecf2`,cursor:`#74c0fc`,cursorAccent:`#12151e`,selectionBackground:`rgba(116, 192, 252, 0.25)`,selectionForeground:`#ffffff`,black:`#1a1d29`,red:`#ff6b6b`,green:`#69db7c`,yellow:`#ffd43b`,blue:`#74c0fc`,magenta:`#da77f2`,cyan:`#66d9e8`,white:`#e8ecf2`,brightBlack:`#5a6078`,brightRed:`#ff8787`,brightGreen:`#8ce99a`,brightYellow:`#ffe066`,brightBlue:`#a5d8ff`,brightMagenta:`#e599f7`,brightCyan:`#99e9f2`,brightWhite:`#ffffff`}}),a=new r;return i.loadAddon(a),{terminal:i,fitAddon:a}})}function ie({sessionId:e,initialOutput:t,outputResetToken:n,fontSize:r,onInput:i,onResize:a,onReadyChange:o,onError:s,onStreamReady:c}){let l=(0,b.useRef)(null),[u,d]=(0,b.useState)(null),f=(0,b.useRef)(null),p=(0,b.useRef)(null),m=(0,b.useRef)(t),h=(0,b.useRef)(n),g=(0,b.useRef)(t),_=(0,b.useRef)(null),[v,ee]=(0,b.useState)(0);m.current=t;let y=(0,b.useCallback)(e=>{l.current=e,e&&d(e)},[]);return(0,b.useEffect)(()=>{let e=!1;if(u)return C().then(({terminal:t,fitAddon:n})=>{if(e||!l.current){t.dispose();return}if(f.current=t,p.current=n,t.options.fontSize=r,t.open(l.current),n.fit(),a?.(t.cols,t.rows),o?.(!0),m.current&&t.write(m.current),g.current=m.current,ee(e=>e+1),typeof ResizeObserver<`u`){let e=new ResizeObserver(()=>{n.fit(),a?.(t.cols,t.rows)});e.observe(l.current),_.current=e}}).catch(e=>{o?.(!1),s?.(e)}),()=>{e=!0,_.current?.disconnect(),_.current=null,p.current=null,f.current?.dispose(),f.current=null,c?.(null),o?.(!1)}},[u,s,o,a,c]),(0,b.useEffect)(()=>{f.current&&(f.current.options.fontSize=r,p.current?.fit(),a?.(f.current.cols,f.current.rows))},[r,a]),(0,b.useEffect)(()=>{f.current&&h.current!==n&&(h.current=n,f.current.reset(),m.current&&f.current.write(m.current),g.current=m.current)},[n,v]),(0,b.useEffect)(()=>{if(!f.current)return;if(e){g.current=t;return}if(g.current===t)return;if(!t.startsWith(g.current)){f.current.reset(),t&&f.current.write(t),g.current=t;return}let n=t.slice(g.current.length);f.current.write(n),g.current=t},[t,e,v]),(0,b.useEffect)(()=>{if(!f.current)return;let t=f.current,n=l.current,r=!!(e&&i);if(t.options.disableStdin=!r,!e){c?.(null);return}let a=!1,o=()=>{t.focus()},u=r?t.onData(e=>{let t=S(e);t&&Promise.resolve(i?.(t)).catch(e=>{a||s?.(e)})}):null;return n?.addEventListener(`pointerdown`,o),r&&o(),c?.(e=>{f.current?.write(e)}),()=>{a=!0,n?.removeEventListener(`pointerdown`,o),u?.dispose(),c?.(null)}},[s,i,c,e,v]),(0,x.jsx)(`div`,{className:`terminal-emulator`,ref:y,"data-testid":`terminal-emulator`})}var w=180,ae=320,T=.75,oe=75,se=`다음 세션부터 적용`;function ce(e){return e.replace(/(^|[\r\n])[ \t]*\|[ \t]*(?=([\r\n]|$))/g,`$1`)}function E(e){let t=typeof window>`u`?1/0:window.innerHeight,n=Math.floor(t*T);return Math.min(Math.max(e,w),n)}function D(){let{isOpen:e,session:t,outputBuffer:n,outputResetToken:r,isRunning:s,error:S,appendOutput:C,clearOutput:w,closePanel:T,setError:D,setRunning:O,setSession:k,executionHistory:le,clearExecutionHistory:ue}=p(),{terminalFontSize:de,preferredTerminalProfileId:A,setPreferredTerminalProfileId:j}=i(),M=(0,b.useRef)(null),N=(0,b.useRef)(!0),P=(0,b.useRef)(null),F=(0,b.useRef)(null),fe=(0,b.useRef)(t),pe=(0,b.useRef)(null),I=(0,b.useRef)(``),L=(0,b.useRef)(null),[R,z]=(0,b.useState)(()=>E(ae)),[B,V]=(0,b.useState)(!1),[me,he]=(0,b.useState)(!1),[ge,H]=(0,b.useState)(0),[U,_e]=(0,b.useState)(!1),[W,ve]=(0,b.useState)(()=>g()),[ye,G]=(0,b.useState)(!1),[be,K]=(0,b.useState)(null),xe=!t&&n.includes(`[브라우저 미리보기]`);(0,b.useEffect)(()=>{fe.current=t},[t]),(0,b.useEffect)(()=>()=>{N.current=!1},[]);let Se=(0,b.useCallback)(()=>{C(I.current),I.current=``,L.current=null},[C]),Ce=(0,b.useCallback)(e=>{e&&(I.current=`${I.current}${e}`,L.current===null&&(L.current=window.setTimeout(()=>{Se()},oe)))},[Se]),q=(0,b.useCallback)(()=>{L.current!==null&&(window.clearTimeout(L.current),L.current=null),I.current=``},[]),J=(0,b.useCallback)(()=>{F.current!==null&&(window.clearTimeout(F.current),F.current=null)},[]),Y=(0,b.useCallback)(()=>{J(),F.current=window.setTimeout(()=>{O(!1),F.current=null},1200)},[J,O]),X=(0,b.useCallback)(async()=>{try{let e=await d();if(!N.current)return;H(e.length)}catch(e){if(!N.current)return;D(y(e))}},[D]);(0,b.useEffect)(()=>()=>{J(),L.current!==null&&(window.clearTimeout(L.current),L.current=null),I.current&&=(C(I.current),``)},[C,J]),(0,b.useEffect)(()=>{if(!e)return;let t=!0,n=null;return _(e=>{if(!t)return;let n=fe.current,r=!!(n&&e.terminalId===n.id);if(!n||r){let t=ce(e.data);r&&(O(!0),Y(),pe.current?.(t)),Ce(t)}}).then(e=>{n=e}).catch(e=>{D(y(e))}),()=>{t=!1,n?.()}},[e,Ce,Y,D,O]),(0,b.useEffect)(()=>{e||(he(!1),_e(!1),G(!1),K(null))},[e]),(0,b.useEffect)(()=>{if(!e)return;let t=!0;return G(!0),K(W.length>0?te:null),ee(ne).then(e=>{if(!t||!N.current||(ve(e.profiles),G(!1),K(e.statusMessage),e.error&&D(y(e.error)),e.profiles.length===0))return;let n=m(e.profiles,A);n&&n!==A&&j(n)}),()=>{t=!1}},[e,A,D,j,W.length]),(0,b.useEffect)(()=>{e&&X()},[e,X,t?.id]),(0,b.useEffect)(()=>{if(!s){J();return}return Y(),J},[J,s,Y]),(0,b.useEffect)(()=>{!M.current||U||(M.current.scrollTop=M.current.scrollHeight)},[me,n,U]);let we=(0,b.useCallback)((e,n)=>{t&&f(t.id,e,n).catch(e=>{D(`터미널 크기 조절 실패: ${String(e)}`)})},[t,D]),Te=(0,b.useCallback)(async e=>{if(t)try{S&&D(null),await v(t.id,e)}catch(e){D(y(e))}},[S,t,D]),Ee=(0,b.useCallback)(e=>{D(y(e))},[D]),De=(0,b.useCallback)(e=>{pe.current=e},[]);(0,b.useEffect)(()=>{let e=()=>{z(e=>E(e))};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]);let Z=(0,b.useCallback)(()=>{P.current=null,V(!1)},[]),Q=(0,b.useCallback)(e=>{let t=P.current,n=t.startY-e;z(E(t.initialHeight+n))},[]);(0,b.useEffect)(()=>{if(!B)return;let e=e=>{Q(e.clientY)},t=e=>{e.touches.length!==0&&Q(e.touches[0].clientY)};return window.addEventListener(`mousemove`,e),window.addEventListener(`touchmove`,t,{passive:!0}),window.addEventListener(`mouseup`,Z),window.addEventListener(`touchend`,Z),()=>{window.removeEventListener(`mousemove`,e),window.removeEventListener(`touchmove`,t),window.removeEventListener(`mouseup`,Z),window.removeEventListener(`touchend`,Z)}},[Q,B,Z]);let $=(0,b.useCallback)(e=>{P.current={startY:e,initialHeight:R},V(!0)},[R]),Oe=(0,b.useCallback)(()=>{q(),w()},[q,w]),ke=(0,b.useCallback)(async()=>{try{let e=await d();await Promise.all(e.map(e=>u(e.id).catch(e=>{throw e}))),q(),w(),J(),O(!1),k(null),H(0),D(null)}catch(e){D(y(e))}},[q,w,J,D,O,k]),Ae=(0,b.useCallback)(async()=>{try{D(null);let e=W.find(e=>e.isDefault)?.id??W[0]?.id??null,t=W.some(e=>e.id===A)?A:e,n=await h(t?{profileId:t}:{});if(l(n.id)){C(`[브라우저 미리보기] 데스크톱 앱(Tauri)에서만 실제 세션을 시작할 수 있습니다.
`),k(null),O(!1),await X();return}n.profileId!==A&&j(n.profileId),k(n),O(!1),await X()}catch(e){D(y(e))}},[C,A,X,D,j,O,k,W]),je=(0,b.useCallback)(async()=>{if(t){try{await u(t.id)}catch(e){D(y(e));return}k(null)}q(),w(),J(),O(!1),T(),await X()},[q,w,J,T,X,t,D,O,k]);if(!e)return null;let Me=W.find(e=>e.id===A)?.id??W.find(e=>e.isDefault)?.id??W[0]?.id??``;return(0,x.jsxs)(`section`,{className:`terminal-panel${B?` resizing`:``}`,"aria-label":`터미널 패널`,style:{height:`${R}px`},children:[(0,x.jsx)(`div`,{className:`terminal-resize-handle`,role:`separator`,"aria-label":`터미널 크기 조절`,"aria-orientation":`horizontal`,onMouseDown:e=>{e.preventDefault(),$(e.clientY)},onTouchStart:e=>{e.touches.length!==0&&$(e.touches[0].clientY)},children:(0,x.jsx)(`span`,{className:`terminal-resize-grip`})}),(0,x.jsxs)(`header`,{className:`terminal-header`,children:[(0,x.jsxs)(`div`,{className:`terminal-title`,children:[(0,x.jsx)(a,{size:16}),(0,x.jsx)(`span`,{children:`통합 터미널`}),t?(0,x.jsx)(`small`,{children:t.shell}):null]}),(0,x.jsxs)(`div`,{className:`terminal-actions`,children:[(0,x.jsxs)(`div`,{className:`terminal-profile-control`,children:[(0,x.jsx)(`label`,{htmlFor:`terminal-profile-select`,children:`셸`}),W.length>0?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`select`,{id:`terminal-profile-select`,"aria-label":`터미널 종류 선택`,className:`terminal-profile-select`,value:Me,disabled:ye,onChange:e=>{j(e.target.value)},children:W.map(e=>(0,x.jsx)(`option`,{value:e.id,children:`${e.label} - ${e.shell}${e.isRecommended?` (권장)`:``}`},e.id))}),(0,x.jsx)(`span`,{className:`terminal-profile-hint`,children:be??(t?se:null)})]}):(0,x.jsx)(`span`,{className:`terminal-profile-hint`,children:ye?`셸 조회 중...`:be??`데스크톱 앱에서 셸 감지`})]}),t?null:(0,x.jsx)(`button`,{className:`terminal-btn terminal-btn-text terminal-btn-start`,onClick:()=>{Ae()},"aria-label":`세션 시작`,title:`세션 시작`,type:`button`,children:`세션 시작`}),(0,x.jsx)(`button`,{className:`terminal-btn terminal-btn-text`,onClick:()=>_e(e=>!e),"aria-label":U?`실행 이력 숨기기`:`실행 이력 보기`,title:U?`실행 이력 숨기기`:`실행 이력 보기`,type:`button`,children:`이력`}),(0,x.jsx)(`button`,{className:`terminal-btn`,onClick:Oe,"aria-label":`터미널 출력 지우기`,title:`출력 지우기`,children:(0,x.jsx)(re,{size:14})}),(0,x.jsx)(`button`,{className:`terminal-btn`,onClick:()=>{je()},"aria-label":`터미널 닫기`,title:`닫기`,children:(0,x.jsx)(o,{size:14})})]})]}),(0,x.jsx)(`div`,{className:`terminal-body`,ref:M,children:U?(0,x.jsxs)(`section`,{className:`terminal-history`,role:`region`,"aria-label":`실행 이력`,children:[(0,x.jsxs)(`header`,{className:`terminal-history-header`,children:[(0,x.jsx)(`strong`,{children:`실행 이력`}),(0,x.jsx)(`button`,{type:`button`,className:`terminal-btn terminal-btn-text`,onClick:ue,"aria-label":`실행 이력 지우기`,children:`이력 지우기`})]}),le.length===0?(0,x.jsx)(c,{title:`실행 이력이 없습니다.`,description:`콘텐츠 코드 블록 실행/취소 내역이 이곳에 표시됩니다.`}):(0,x.jsx)(`ul`,{className:`terminal-history-list`,children:le.map(e=>(0,x.jsxs)(`li`,{className:`terminal-history-item ${e.status}`,children:[(0,x.jsxs)(`div`,{className:`terminal-history-meta`,children:[(0,x.jsx)(`span`,{children:e.status===`confirmed`?`실행`:e.status===`cancelled`?`취소`:`실패`}),(0,x.jsx)(`time`,{children:new Date(e.executedAt).toLocaleTimeString()})]}),(0,x.jsx)(`code`,{children:e.command}),e.errorMessage?(0,x.jsx)(`small`,{children:e.errorMessage}):null]},e.id))})]}):(0,x.jsxs)(x.Fragment,{children:[S?(0,x.jsx)(`p`,{className:`terminal-error`,children:S}):null,t||n?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(ie,{sessionId:t?.id??null,initialOutput:n,outputResetToken:r,fontSize:de,onInput:Te,onResize:we,onReadyChange:he,onError:Ee,onStreamReady:De}),!me&&n?(0,x.jsx)(`pre`,{children:n}):null]}):(0,x.jsx)(`p`,{className:`terminal-placeholder`,children:`출력이 없습니다.`})]})}),(0,x.jsxs)(`footer`,{className:`terminal-footer`,children:[(0,x.jsx)(`span`,{children:xe?`브라우저 미리보기`:s?`실행 중...`:`대기 중`}),(0,x.jsx)(`span`,{children:t?t.cwd:xe?`데스크톱 앱에서 실행 가능`:`세션 없음`}),(0,x.jsxs)(`span`,{children:[`활성 세션 `,ge,`/3`]}),(0,x.jsx)(`button`,{type:`button`,className:`terminal-btn terminal-btn-text`,onClick:()=>{ke()},"aria-label":`활성 세션 정리`,children:`세션 정리`})]}),(0,x.jsx)(`style`,{children:`
        .terminal-panel {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, #1a1d29 0%, #12151e 100%);
          color: #e8ecf2;
          border-top: 1px solid #3d4256;
          z-index: 110;
          display: grid;
          grid-template-rows: auto auto 1fr auto;
          box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.35);
        }

        .terminal-panel.resizing {
          user-select: none;
          cursor: ns-resize;
        }

        .terminal-resize-handle {
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #262a3a 0%, #1e2230 100%);
          border-bottom: 1px solid #3d4256;
          cursor: ns-resize;
          touch-action: none;
        }

        .terminal-resize-grip {
          width: 56px;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(90deg, #4a5068 0%, #5a6078 50%, #4a5068 100%);
          transition: background 0.2s;
        }

        .terminal-resize-handle:hover .terminal-resize-grip {
          background: linear-gradient(90deg, #5a6078 0%, #74c0fc 50%, #5a6078 100%);
        }

        .terminal-header,
        .terminal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.6rem 1rem;
          background: linear-gradient(180deg, #262a3a 0%, #1e2230 100%);
          border-bottom: 1px solid #3d4256;
          font-size: 0.85rem;
        }

        .terminal-footer {
          border-top: 1px solid #3d4256;
          border-bottom: none;
          color: #8b92a8;
          font-size: 0.8rem;
        }

        .terminal-title {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #e8ecf2;
          font-weight: 500;
        }

        .terminal-title small {
          color: #74c0fc;
          font-weight: 600;
          font-size: 0.75rem;
          background: rgba(116, 192, 252, 0.12);
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
        }

        .terminal-actions {
          display: inline-flex;
          gap: 0.35rem;
          align-items: center;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .terminal-profile-control {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: #8b92a8;
          font-size: 0.78rem;
          margin-right: 0.35rem;
        }

        .terminal-profile-control label {
          font-weight: 600;
        }

        .terminal-profile-select {
          min-width: 220px;
          max-width: 280px;
          border: 1px solid #3d4256;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.04);
          color: #e8ecf2;
          padding: 0.38rem 0.55rem;
          font: inherit;
        }

        .terminal-profile-select:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .terminal-profile-hint {
          color: #8b92a8;
        }

        .terminal-btn {
          width: 28px;
          height: 28px;
          border: 1px solid #3d4256;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          color: #8b92a8;
          box-shadow: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .terminal-btn-text {
          width: auto;
          padding: 0 0.5rem;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .terminal-btn-start {
          padding: 0 0.7rem;
        }

        .terminal-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: #5a6078;
          color: #e8ecf2;
        }

        .terminal-body {
          position: relative;
          overflow: hidden;
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          font-family: var(--font-mono);
          font-size: 0.9rem;
        }

        .terminal-body pre {
          margin: 0;
          flex: 1;
          min-height: 0;
          overflow: auto;
          white-space: pre-wrap;
          word-break: break-word;
          color: #e8ecf2;
          background: transparent;
          padding: 0;
          line-height: 1.7;
        }

        .terminal-emulator {
          width: 100%;
          flex: 1;
          min-height: 0;
          overflow: hidden;
        }

        .terminal-placeholder {
          color: #5a6078;
          font-style: italic;
        }

        .terminal-error {
          color: #ff6b6b;
          margin-bottom: 0.75rem;
          padding: 0.5rem 0.75rem;
          background: rgba(255, 107, 107, 0.1);
          border-radius: 6px;
          border-left: 3px solid #ff6b6b;
        }

        .terminal-history {
          display: grid;
          gap: 0.75rem;
          min-height: 0;
        }

        .terminal-history-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .terminal-history-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 0.5rem;
          overflow-y: auto;
        }

        .terminal-history-item {
          border: 1px solid #3d4256;
          border-radius: 6px;
          padding: 0.55rem 0.65rem;
          display: grid;
          gap: 0.35rem;
          background: rgba(255, 255, 255, 0.02);
        }

        .terminal-history-item.confirmed {
          border-left: 3px solid #16a34a;
        }

        .terminal-history-item.cancelled {
          border-left: 3px solid #f59e0b;
        }

        .terminal-history-item.failed {
          border-left: 3px solid #dc2626;
        }

        .terminal-history-meta {
          display: flex;
          justify-content: space-between;
          color: #94a3b8;
          font-size: 0.78rem;
        }

        .terminal-history-item code {
          font-family: var(--font-mono);
          color: #e8ecf2;
          word-break: break-word;
        }

        .terminal-history-item small {
          color: #fca5a5;
          font-size: 0.75rem;
        }
      `})]})}export{D as TerminalPanel};