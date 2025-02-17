(self.webpackChunk_rc_component_switch=self.webpackChunk_rc_component_switch||[]).push([[904],{41491:function(d,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=n;function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},1732:function(d,a){"use strict";var n;n={value:!0},a.Z=void 0;const e={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(o){const{keyCode:c}=o;if(o.altKey&&!o.ctrlKey||o.metaKey||c>=e.F1&&c<=e.F12)return!1;switch(c){case e.ALT:case e.CAPS_LOCK:case e.CONTEXT_MENU:case e.CTRL:case e.DOWN:case e.END:case e.ESC:case e.HOME:case e.INSERT:case e.LEFT:case e.MAC_FF_META:case e.META:case e.NUMLOCK:case e.NUM_CENTER:case e.PAGE_DOWN:case e.PAGE_UP:case e.PAUSE:case e.PRINT_SCREEN:case e.RIGHT:case e.SHIFT:case e.UP:case e.WIN_KEY:case e.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(o){if(o>=e.ZERO&&o<=e.NINE||o>=e.NUM_ZERO&&o<=e.NUM_MULTIPLY||o>=e.A&&o<=e.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&o===0)return!0;switch(o){case e.SPACE:case e.QUESTION_MARK:case e.NUM_PLUS:case e.NUM_MINUS:case e.NUM_PERIOD:case e.NUM_DIVISION:case e.SEMICOLON:case e.DASH:case e.EQUALS:case e.COMMA:case e.PERIOD:case e.SLASH:case e.APOSTROPHE:case e.SINGLE_QUOTE:case e.OPEN_SQUARE_BRACKET:case e.BACKSLASH:case e.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};var _=a.Z=e},17486:function(d,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=u(n(96162));function _(r){if(typeof WeakMap!="function")return null;var l=new WeakMap,s=new WeakMap;return(_=function(f){return f?s:l})(r)}function u(r,l){if(!l&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var s=_(l);if(s&&s.has(r))return s.get(r);var f={__proto__:null},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in r)if(i!=="default"&&Object.prototype.hasOwnProperty.call(r,i)){var E=t?Object.getOwnPropertyDescriptor(r,i):null;E&&(E.get||E.set)?Object.defineProperty(f,i,E):f[i]=r[i]}return f.default=r,s&&s.set(r,f),f}function o(r){const l=e.useRef();return l.current=r,e.useCallback((...f)=>{var t;return(t=l.current)==null?void 0:t.call(l,...f)},[])}var c=a.default=o},45589:function(d,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.useLayoutUpdateEffect=a.default=void 0;var e=c(n(96162)),_=u(n(41491));function u(t){return t&&t.__esModule?t:{default:t}}function o(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,E=new WeakMap;return(o=function(h){return h?E:i})(t)}function c(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var E=o(i);if(E&&E.has(t))return E.get(t);var h={__proto__:null},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var I in t)if(I!=="default"&&Object.prototype.hasOwnProperty.call(t,I)){var p=v?Object.getOwnPropertyDescriptor(t,I):null;p&&(p.get||p.set)?Object.defineProperty(h,I,p):h[I]=t[I]}return h.default=t,E&&E.set(t,h),h}const r=(0,_.default)()?e.useLayoutEffect:e.useEffect,l=(t,i)=>{const E=e.useRef(!0);r(()=>t(E.current),i),r(()=>(E.current=!1,()=>{E.current=!0}),[])},s=(t,i)=>{l(E=>{if(!E)return t()},i)};a.useLayoutUpdateEffect=s;var f=a.default=l},99217:function(d,a,n){"use strict";var e;e={value:!0},a.Z=l;var _=c(n(17486)),u=n(45589),o=c(n(68624));function c(s){return s&&s.__esModule?s:{default:s}}function r(s){return s!==void 0}function l(s,f){const{defaultValue:t,value:i,onChange:E,postState:h}=f||{},[v,I]=(0,o.default)(()=>r(i)?i:r(t)?typeof t=="function"?t():t:typeof s=="function"?s():s),p=i!==void 0?i:v,m=h?h(p):p,U=(0,_.default)(E),[M,N]=(0,o.default)([p]);(0,u.useLayoutUpdateEffect)(()=>{const x=M[0];v!==x&&U(v,x)},[M]),(0,u.useLayoutUpdateEffect)(()=>{r(i)||I(i)},[i]);const R=(0,_.default)((x,P)=>{I(x,P),N([p],P)});return[m,R]}},68624:function(d,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=o;var e=u(n(96162));function _(c){if(typeof WeakMap!="function")return null;var r=new WeakMap,l=new WeakMap;return(_=function(s){return s?l:r})(c)}function u(c,r){if(!r&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var l=_(r);if(l&&l.has(c))return l.get(c);var s={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in c)if(t!=="default"&&Object.prototype.hasOwnProperty.call(c,t)){var i=f?Object.getOwnPropertyDescriptor(c,t):null;i&&(i.get||i.set)?Object.defineProperty(s,t,i):s[t]=c[t]}return s.default=c,l&&l.set(c,s),s}function o(c){const r=e.useRef(!1),[l,s]=e.useState(c);e.useEffect(()=>(r.current=!1,()=>{r.current=!0}),[]);function f(t,i){i&&r.current||s(t)}return[l,f]}},84431:function(d,a,n){"use strict";var e;n.r(a),n.d(a,{demos:function(){return t}});var _=n(7557),u=n.n(_),o=n(41498),c=n.n(o),r=n(96162),l=n(62795),s=n(63484),f=n(25240),t={"docs-demo-simple-demo-simple":{component:r.memo(r.lazy(function(){return n.e(433).then(n.bind(n,88338))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(99818).Z},react:{type:"NPM",value:"16.14.0"},"@rc-component/switch":{type:"NPM",value:"1.0.0"},"../../assets/index.less":{type:"FILE",value:n(25866).Z}},entry:"index.tsx"},context:{"../../assets/index.less":f,react:e||(e=n.t(r,2)),"@rc-component/switch":s,"/Users/jilin/projects/antd/rc-switch/assets/index.less":f},renderOpts:{compile:function(){var i=c()(u()().mark(function h(){var v,I=arguments;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(439).then(n.bind(n,56439));case 2:return m.abrupt("return",(v=m.sent).default.apply(v,I));case 3:case"end":return m.stop()}},h)}));function E(){return i.apply(this,arguments)}return E}()}}}},81059:function(d,a,n){"use strict";n.r(a),n.d(a,{demos:function(){return u}});var e=n(96162),_=n(8210),u={}},63484:function(d,a,n){"use strict";n.r(a);var e=n(95582),_=n.n(e),u=n(85573),o=n.n(u),c=n(79800),r=n.n(c),l=n(39647),s=n.n(l),f=n(96162),t=n(92310),i=n.n(t),E=n(99217),h=n(1732),v=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown","styles","classNames"],I=f.forwardRef(function(p,m){var U=p.prefixCls,M=U===void 0?"rc-switch":U,N=p.className,R=p.checked,x=p.defaultChecked,P=p.disabled,L=p.loadingIcon,K=p.checkedChildren,W=p.unCheckedChildren,w=p.onClick,D=p.onChange,T=p.onKeyDown,C=p.styles,b=p.classNames,F=s()(p,v),k=(0,E.Z)(!1,{value:R,defaultValue:x}),j=r()(k,2),y=j[0],B=j[1];function S(O,A){var g=y;return P||(g=O,B(g),D==null||D(g,A)),g}function H(O){O.which===h.Z.LEFT?S(!1,O):O.which===h.Z.RIGHT&&S(!0,O),T==null||T(O)}function G(O){var A=S(!y,O);w==null||w(A,O)}var Z=i()(M,N,o()(o()({},"".concat(M,"-checked"),y),"".concat(M,"-disabled"),P));return f.createElement("button",_()({},F,{type:"button",role:"switch","aria-checked":y,disabled:P,className:Z,ref:m,onKeyDown:H,onClick:G}),L,f.createElement("span",{className:"".concat(M,"-inner")},f.createElement("span",{className:i()("".concat(M,"-inner-checked"),b==null?void 0:b.content),style:C==null?void 0:C.content},K),f.createElement("span",{className:i()("".concat(M,"-inner-unchecked"),b==null?void 0:b.content),style:C==null?void 0:C.content},W)))});I.displayName="Switch",a.default=I},25240:function(d,a,n){"use strict";n.r(a)},9037:function(d,a,n){"use strict";n.r(a),n.d(a,{texts:function(){return _}});var e=n(62795);const _=[]},99944:function(d,a,n){"use strict";n.r(a),n.d(a,{texts:function(){return _}});var e=n(8210);const _=[{value:"Switch ui component for react.",paraId:0,tocIndex:0},{value:`import Switch from 'rc-switch';

export default () => <Switch />;
`,paraId:1,tocIndex:2},{value:"IE / Edge",paraId:2,tocIndex:3},{value:"Firefox",paraId:2,tocIndex:3},{value:"Chrome",paraId:2,tocIndex:3},{value:"Safari",paraId:2,tocIndex:3},{value:"Electron",paraId:2,tocIndex:3},{value:"IE11, Edge",paraId:2,tocIndex:3},{value:"last 2 versions",paraId:2,tocIndex:3},{value:"last 2 versions",paraId:2,tocIndex:3},{value:"last 2 versions",paraId:2,tocIndex:3},{value:"last 2 versions",paraId:2,tocIndex:3},{value:"Property",paraId:3,tocIndex:4},{value:"Type",paraId:3,tocIndex:4},{value:"Default",paraId:3,tocIndex:4},{value:"Description",paraId:3,tocIndex:4},{value:"prefixCls",paraId:3,tocIndex:4},{value:"String",paraId:3,tocIndex:4},{value:"rc-switch",paraId:3,tocIndex:4},{value:"className",paraId:3,tocIndex:4},{value:"String",paraId:3,tocIndex:4},{value:"''",paraId:3,tocIndex:4},{value:"additional class name of root node",paraId:3,tocIndex:4},{value:"checked",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"whether switch is checked",paraId:3,tocIndex:4},{value:"defaultChecked",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"whether switch is checked on init",paraId:3,tocIndex:4},{value:"onChange",paraId:3,tocIndex:4},{value:"Function(checked, event)",paraId:3,tocIndex:4},{value:"called when switch is checked or unchecked",paraId:3,tocIndex:4},{value:"tabIndex",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4},{value:"tab-index of switch node",paraId:3,tocIndex:4},{value:"onClick",paraId:3,tocIndex:4},{value:"Function(checked, event)",paraId:3,tocIndex:4},{value:"called when switch is clicked",paraId:3,tocIndex:4},{value:"autoFocus",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"get focus when mounts",paraId:3,tocIndex:4},{value:"disabled",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"whether switch is disabled",paraId:3,tocIndex:4},{value:"loadingIcon",paraId:3,tocIndex:4},{value:"React.ReactNode",paraId:3,tocIndex:4},{value:"specific the extra node. generally used in loading icon.",paraId:3,tocIndex:4},{value:`npm install
npm start
`,paraId:4,tocIndex:5},{value:"Online demo: ",paraId:5,tocIndex:5},{value:"http://react-component.github.io/switch/",paraId:5,tocIndex:5},{value:"rc-switch is released under the MIT license.",paraId:6,tocIndex:6}]},25866:function(d,a){"use strict";a.Z=`@switchPrefixCls: rc-switch;

@duration: .3s;

.@{switchPrefixCls} {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 44px;
  height: 22px;
  line-height: 20px;
  padding: 0;
  vertical-align: middle;
  border-radius: 20px 20px;
  border: 1px solid #ccc;
  background-color: #ccc;
  cursor: pointer;
  transition: all @duration cubic-bezier(0.35, 0, 0.25, 1);
  overflow: hidden;

  &-inner-checked,
  &-inner-unchecked {
    color:#fff;
    font-size: 12px;
    position: absolute;
    top: 0;
    transition: left @duration cubic-bezier(0.35, 0, 0.25, 1);
  }

  &-inner-checked {
    left: 6px - 20px;
  }

  &-inner-unchecked {
    left: 24px;
  }

  &:after{
    position: absolute;
    width: 18px;
    height: 18px;
    left: 2px;
    top: 1px;
    border-radius: 50% 50%;
    background-color: #fff;
    content: " ";
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    transform: scale(1);
    transition: left @duration cubic-bezier(0.35, 0, 0.25, 1);
    animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
    animation-duration: @duration;
    animation-name: rcSwitchOff;
  }

  &:hover:after {
    transform: scale(1.1);
    animation-name: rcSwitchOn;
  }

  &:focus {
    box-shadow: 0 0 0 2px tint(#2db7f5, 80%);
    outline: none;
  }

  &-checked {
    border: 1px solid #87d068;
    background-color: #87d068;

    .@{switchPrefixCls}-inner-checked {
      left: 6px;
    }

    .@{switchPrefixCls}-inner-unchecked {
      left: 44px;
    }

    &:after{
      left: 22px;
    }
  }

  &-disabled{
    cursor: no-drop;
    background: #ccc;
    border-color: #ccc;

    &:after{
      background: #9e9e9e;
      animation-name: none;
      cursor: no-drop;
    }

    &:hover:after{
      transform: scale(1);
      animation-name: none;
    }
  }

  &-label {
    display: inline-block;
    line-height: 20px;
    font-size: 14px;
    padding-left: 10px;
    vertical-align: middle;
    white-space: normal;
    pointer-events: none;
    user-select: text;
  }
}

@keyframes rcSwitchOn {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1.1);
  }
}

@keyframes rcSwitchOff {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
`},99818:function(d,a){"use strict";a.Z=`import '../../assets/index.less';
import React, { useState } from 'react';
import type { SwitchChangeEventHandler } from '@rc-component/switch';
import Switch from '@rc-component/switch';

const onChange: SwitchChangeEventHandler = (value, event) => {
  // eslint-disable-next-line no-console
  console.log(\`switch checked: \${value}\`, event);
};

export default () => {
  const [disabled, setDisabled] = useState(false);

  const toggle = () => {
    setDisabled((prev) => !prev);
  };

  return (
    <div style={{ margin: 20 }}>
      <Switch onChange={onChange} disabled={disabled} checkedChildren="\u5F00" unCheckedChildren="\u5173" />
      <div style={{ marginTop: 20 }}>
        <button type="button" onClick={toggle}>
          toggle disabled
        </button>
      </div>
    </div>
  );
};
`},95582:function(d){function a(){return d.exports=a=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var _=arguments[e];for(var u in _)Object.prototype.hasOwnProperty.call(_,u)&&(n[u]=_[u])}return n},d.exports.__esModule=!0,d.exports.default=d.exports,a.apply(this,arguments)}d.exports=a,d.exports.__esModule=!0,d.exports.default=d.exports},39647:function(d,a,n){var e=n(32890);function _(u,o){if(u==null)return{};var c=e(u,o),r,l;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(u);for(l=0;l<s.length;l++)r=s[l],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(u,r)&&(c[r]=u[r])}return c}d.exports=_,d.exports.__esModule=!0,d.exports.default=d.exports},32890:function(d){function a(n,e){if(n==null)return{};var _={},u=Object.keys(n),o,c;for(c=0;c<u.length;c++)o=u[c],!(e.indexOf(o)>=0)&&(_[o]=n[o]);return _}d.exports=a,d.exports.__esModule=!0,d.exports.default=d.exports}}]);
