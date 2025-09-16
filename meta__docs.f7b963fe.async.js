(self.webpackChunk_rc_component_switch=self.webpackChunk_rc_component_switch||[]).push([[904],{10763:function(r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},65306:function(r,t){"use strict";var n;n={value:!0},t.Z=void 0;const e={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(s){const{keyCode:l}=s;if(s.altKey&&!s.ctrlKey||s.metaKey||l>=e.F1&&l<=e.F12)return!1;switch(l){case e.ALT:case e.CAPS_LOCK:case e.CONTEXT_MENU:case e.CTRL:case e.DOWN:case e.END:case e.ESC:case e.HOME:case e.INSERT:case e.LEFT:case e.MAC_FF_META:case e.META:case e.NUMLOCK:case e.NUM_CENTER:case e.PAGE_DOWN:case e.PAGE_UP:case e.PAUSE:case e.PRINT_SCREEN:case e.RIGHT:case e.SHIFT:case e.UP:case e.WIN_KEY:case e.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(s){if(s>=e.ZERO&&s<=e.NINE||s>=e.NUM_ZERO&&s<=e.NUM_MULTIPLY||s>=e.A&&s<=e.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&s===0)return!0;switch(s){case e.SPACE:case e.QUESTION_MARK:case e.NUM_PLUS:case e.NUM_MINUS:case e.NUM_PERIOD:case e.NUM_DIVISION:case e.SEMICOLON:case e.DASH:case e.EQUALS:case e.COMMA:case e.PERIOD:case e.SLASH:case e.APOSTROPHE:case e.SINGLE_QUOTE:case e.OPEN_SQUARE_BRACKET:case e.BACKSLASH:case e.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};var i=t.Z=e},96607:function(r,t,n){"use strict";var e;e={value:!0},t.Z=l;var i=n(67294),c=s(n(19831));function s(d){return d&&d.__esModule?d:{default:d}}function l(d,_){const[I,E]=(0,i.useState)(d),a=_!==void 0?_:I;return(0,c.default)(p=>{p||E(_)},[_]),[a,E]}},19831:function(r,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useLayoutUpdateEffect=t.default=void 0;var e=l(n(67294)),i=c(n(10763));function c(a){return a&&a.__esModule?a:{default:a}}function s(a){if(typeof WeakMap!="function")return null;var p=new WeakMap,u=new WeakMap;return(s=function(f){return f?u:p})(a)}function l(a,p){if(!p&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var u=s(p);if(u&&u.has(a))return u.get(a);var f={__proto__:null},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in a)if(h!=="default"&&Object.prototype.hasOwnProperty.call(a,h)){var o=C?Object.getOwnPropertyDescriptor(a,h):null;o&&(o.get||o.set)?Object.defineProperty(f,h,o):f[h]=a[h]}return f.default=a,u&&u.set(a,f),f}const d=(0,i.default)()?e.useLayoutEffect:e.useEffect,_=(a,p)=>{const u=e.useRef(!0);d(()=>a(u.current),p),d(()=>(u.current=!1,()=>{u.current=!0}),[])},I=(a,p)=>{_(u=>{if(!u)return a()},p)};t.useLayoutUpdateEffect=I;var E=t.default=_},19128:function(r,t,n){"use strict";var e;n.r(t),n.d(t,{demos:function(){return E}});var i=n(15009),c=n.n(i),s=n(99289),l=n.n(s),d=n(67294),_=n(27515),I=n(69945),E={"docs-demo-simple-demo-simple":{component:d.memo(d.lazy(function(){return n.e(433).then(n.bind(n,23527))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(25133).Z},react:{type:"NPM",value:"16.14.0"},"@rc-component/switch":{type:"NPM",value:"1.0.1"},"../../assets/index.less":{type:"FILE",value:n(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":I,react:e||(e=n.t(d,2)),"@rc-component/switch":_,"/Users/jilin/projects/antd/rc-switch/assets/index.less":I},renderOpts:{compile:function(){var a=l()(c()().mark(function u(){var f,C=arguments;return c()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(250).then(n.bind(n,90250));case 2:return o.abrupt("return",(f=o.sent).default.apply(f,C));case 3:case"end":return o.stop()}},u)}));function p(){return a.apply(this,arguments)}return p}()}}}},11171:function(r,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return i}});var e=n(67294),i={}},27515:function(r,t,n){"use strict";n.r(t);var e=n(67333),i=n.n(e),c=n(9783),s=n.n(c),l=n(5574),d=n.n(l),_=n(13769),I=n.n(_),E=n(67294),a=n(93967),p=n.n(a),u=n(96607),f=n(65306),C=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown","styles","classNames"],h=E.forwardRef(function(o,y){var D=o.prefixCls,v=D===void 0?"rc-switch":D,w=o.className,j=o.checked,P=o.defaultChecked,U=o.disabled,L=o.loadingIcon,K=o.checkedChildren,W=o.unCheckedChildren,N=o.onClick,T=o.onChange,R=o.onKeyDown,x=o.styles,O=o.classNames,F=I()(o,C),k=(0,u.Z)(P!=null?P:!1,j),A=d()(k,2),M=A[0],B=A[1];function g(m,S){var b=M;return U||(b=m,B(b),T==null||T(b,S)),b}function H(m){m.which===f.Z.LEFT?g(!1,m):m.which===f.Z.RIGHT&&g(!0,m),R==null||R(m)}function G(m){var S=g(!M,m);N==null||N(S,m)}var Z=p()(v,w,s()(s()({},"".concat(v,"-checked"),M),"".concat(v,"-disabled"),U));return E.createElement("button",i()({},F,{type:"button",role:"switch","aria-checked":M,disabled:U,className:Z,ref:y,onKeyDown:H,onClick:G}),L,E.createElement("span",{className:"".concat(v,"-inner")},E.createElement("span",{className:p()("".concat(v,"-inner-checked"),O==null?void 0:O.content),style:x==null?void 0:x.content},K),E.createElement("span",{className:p()("".concat(v,"-inner-unchecked"),O==null?void 0:O.content),style:x==null?void 0:x.content},W)))});h.displayName="Switch",t.default=h},69945:function(r,t,n){"use strict";n.r(t)},49726:function(r,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return e}});const e=[]},51446:function(r,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return e}});const e=[{value:"Switch ui component for react.",paraId:0,tocIndex:0},{value:`import Switch from 'rc-switch';

export default () => <Switch />;
`,paraId:1,tocIndex:2},{value:"IE / Edge",paraId:2,tocIndex:3},{value:"Firefox",paraId:2,tocIndex:3},{value:"Chrome",paraId:2,tocIndex:3},{value:"Safari",paraId:2,tocIndex:3},{value:"Electron",paraId:2,tocIndex:3},{value:"IE11, Edge",paraId:2,tocIndex:3},{value:"last 2 versions",paraId:2,tocIndex:3},{value:"last 2 versions",paraId:2,tocIndex:3},{value:"last 2 versions",paraId:2,tocIndex:3},{value:"last 2 versions",paraId:2,tocIndex:3},{value:"Property",paraId:3,tocIndex:4},{value:"Type",paraId:3,tocIndex:4},{value:"Default",paraId:3,tocIndex:4},{value:"Description",paraId:3,tocIndex:4},{value:"prefixCls",paraId:3,tocIndex:4},{value:"String",paraId:3,tocIndex:4},{value:"rc-switch",paraId:3,tocIndex:4},{value:"className",paraId:3,tocIndex:4},{value:"String",paraId:3,tocIndex:4},{value:"''",paraId:3,tocIndex:4},{value:"additional class name of root node",paraId:3,tocIndex:4},{value:"checked",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"whether switch is checked",paraId:3,tocIndex:4},{value:"defaultChecked",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"whether switch is checked on init",paraId:3,tocIndex:4},{value:"onChange",paraId:3,tocIndex:4},{value:"Function(checked, event)",paraId:3,tocIndex:4},{value:"called when switch is checked or unchecked",paraId:3,tocIndex:4},{value:"tabIndex",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4},{value:"tab-index of switch node",paraId:3,tocIndex:4},{value:"onClick",paraId:3,tocIndex:4},{value:"Function(checked, event)",paraId:3,tocIndex:4},{value:"called when switch is clicked",paraId:3,tocIndex:4},{value:"autoFocus",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"get focus when mounts",paraId:3,tocIndex:4},{value:"disabled",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"whether switch is disabled",paraId:3,tocIndex:4},{value:"loadingIcon",paraId:3,tocIndex:4},{value:"React.ReactNode",paraId:3,tocIndex:4},{value:"specific the extra node. generally used in loading icon.",paraId:3,tocIndex:4},{value:`npm install
npm start
`,paraId:4,tocIndex:5},{value:"Online demo: ",paraId:5,tocIndex:5},{value:"http://react-component.github.io/switch/",paraId:5,tocIndex:5},{value:"rc-switch is released under the MIT license.",paraId:6,tocIndex:6}]},86834:function(r,t){"use strict";t.Z=`@switchPrefixCls: rc-switch;

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
`},25133:function(r,t){"use strict";t.Z=`import '../../assets/index.less';
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
`},67333:function(r){function t(){return r.exports=t=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(n[c]=i[c])}return n},r.exports.__esModule=!0,r.exports.default=r.exports,t.apply(this,arguments)}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports},13769:function(r,t,n){var e=n(48541);function i(c,s){if(c==null)return{};var l=e(c,s),d,_;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(c);for(_=0;_<I.length;_++)d=I[_],!(s.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(c,d)&&(l[d]=c[d])}return l}r.exports=i,r.exports.__esModule=!0,r.exports.default=r.exports},48541:function(r){function t(n,e){if(n==null)return{};var i={},c=Object.keys(n),s,l;for(l=0;l<c.length;l++)s=c[l],!(e.indexOf(s)>=0)&&(i[s]=n[s]);return i}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports}}]);
