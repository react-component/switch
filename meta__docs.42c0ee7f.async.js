(self.webpackChunk_rc_component_switch=self.webpackChunk_rc_component_switch||[]).push([[904],{10763:function(o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},65306:function(o,t){"use strict";var n;n={value:!0},t.Z=void 0;const e={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(r){const{keyCode:u}=r;if(r.altKey&&!r.ctrlKey||r.metaKey||u>=e.F1&&u<=e.F12)return!1;switch(u){case e.ALT:case e.CAPS_LOCK:case e.CONTEXT_MENU:case e.CTRL:case e.DOWN:case e.END:case e.ESC:case e.HOME:case e.INSERT:case e.LEFT:case e.MAC_FF_META:case e.META:case e.NUMLOCK:case e.NUM_CENTER:case e.PAGE_DOWN:case e.PAGE_UP:case e.PAUSE:case e.PRINT_SCREEN:case e.RIGHT:case e.SHIFT:case e.UP:case e.WIN_KEY:case e.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(r){if(r>=e.ZERO&&r<=e.NINE||r>=e.NUM_ZERO&&r<=e.NUM_MULTIPLY||r>=e.A&&r<=e.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&r===0)return!0;switch(r){case e.SPACE:case e.QUESTION_MARK:case e.NUM_PLUS:case e.NUM_MINUS:case e.NUM_PERIOD:case e.NUM_DIVISION:case e.SEMICOLON:case e.DASH:case e.EQUALS:case e.COMMA:case e.PERIOD:case e.SLASH:case e.APOSTROPHE:case e.SINGLE_QUOTE:case e.OPEN_SQUARE_BRACKET:case e.BACKSLASH:case e.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};var l=t.Z=e},96607:function(o,t,n){"use strict";var e;e={value:!0},t.Z=u;var l=n(67294),s=r(n(19831));function r(d){return d&&d.__esModule?d:{default:d}}function u(d,f){const[m,x]=(0,l.useState)(d),a=f!==void 0?f:m;return(0,s.default)(p=>{p||x(f)},[f]),[a,x]}},19831:function(o,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useLayoutUpdateEffect=t.default=void 0;var e=u(n(67294)),l=s(n(10763));function s(a){return a&&a.__esModule?a:{default:a}}function r(a){if(typeof WeakMap!="function")return null;var p=new WeakMap,I=new WeakMap;return(r=function(v){return v?I:p})(a)}function u(a,p){if(!p&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var I=r(p);if(I&&I.has(a))return I.get(a);var v={__proto__:null},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var O in a)if(O!=="default"&&Object.prototype.hasOwnProperty.call(a,O)){var h=N?Object.getOwnPropertyDescriptor(a,O):null;h&&(h.get||h.set)?Object.defineProperty(v,O,h):v[O]=a[O]}return v.default=a,I&&I.set(a,v),v}const d=(0,l.default)()?e.useLayoutEffect:e.useEffect,f=(a,p)=>{const I=e.useRef(!0);d(()=>a(I.current),p),d(()=>(I.current=!1,()=>{I.current=!0}),[])},m=(a,p)=>{f(I=>{if(!I)return a()},p)};t.useLayoutUpdateEffect=m;var x=t.default=f},19128:function(o,t,n){"use strict";var e;n.r(t),n.d(t,{demos:function(){return x}});var l=n(15009),s=n.n(l),r=n(99289),u=n.n(r),d=n(67294),f=n(89462),m=n(69945),x={"docs-demo-simple-demo-simple":{component:d.memo(d.lazy(function(){return n.e(433).then(n.bind(n,23527))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(25133).Z},react:{type:"NPM",value:"16.14.0"},"@rc-component/switch":{type:"NPM",value:"1.0.3"},"../../assets/index.less":{type:"FILE",value:n(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":m,react:e||(e=n.t(d,2)),"@rc-component/switch":f,"/Users/afc163/Projects/switch/assets/index.less":m},renderOpts:{compile:function(){var a=u()(s()().mark(function I(){var v,N=arguments;return s()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,n.e(250).then(n.bind(n,90250));case 2:return h.abrupt("return",(v=h.sent).default.apply(v,N));case 3:case"end":return h.stop()}},I)}));function p(){return a.apply(this,arguments)}return p}()}}}},11171:function(o,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return l}});var e=n(67294),l={}},89462:function(o,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var e=n(67333),l=n.n(e),s=n(9783),r=n.n(s),u=n(5574),d=n.n(u),f=n(13769),m=n.n(f),x=n(67294);function a(c){var _,E,i="";if(typeof c=="string"||typeof c=="number")i+=c;else if(typeof c=="object")if(Array.isArray(c)){var P=c.length;for(_=0;_<P;_++)c[_]&&(E=a(c[_]))&&(i&&(i+=" "),i+=E)}else for(E in c)c[E]&&(i&&(i+=" "),i+=E);return i}function p(){for(var c,_,E=0,i="",P=arguments.length;E<P;E++)(c=arguments[E])&&(_=a(c))&&(i&&(i+=" "),i+=_);return i}var I=null,v=n(96607),N=n(65306),O=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown","styles","classNames"],h=x.forwardRef(function(c,_){var E=c.prefixCls,i=E===void 0?"rc-switch":E,P=c.className,F=c.checked,b=c.defaultChecked,U=c.disabled,k=c.loadingIcon,W=c.checkedChildren,j=c.unCheckedChildren,T=c.onClick,w=c.onChange,R=c.onKeyDown,M=c.styles,g=c.classNames,H=m()(c,O),B=(0,v.Z)(b!=null?b:!1,F),D=d()(B,2),y=D[0],G=D[1];function A(C,L){var S=y;return U||(S=C,G(S),w==null||w(S,L)),S}function Z(C){C.which===N.Z.LEFT?A(!1,C):C.which===N.Z.RIGHT&&A(!0,C),R==null||R(C)}function Q(C){var L=A(!y,C);T==null||T(L,C)}var V=p(i,P,r()(r()({},"".concat(i,"-checked"),y),"".concat(i,"-disabled"),U));return x.createElement("button",l()({},H,{type:"button",role:"switch","aria-checked":y,disabled:U,className:V,ref:_,onKeyDown:Z,onClick:Q}),k,x.createElement("span",{className:"".concat(i,"-inner")},x.createElement("span",{className:p("".concat(i,"-inner-checked"),g==null?void 0:g.content),style:M==null?void 0:M.content},W),x.createElement("span",{className:p("".concat(i,"-inner-unchecked"),g==null?void 0:g.content),style:M==null?void 0:M.content},j)))});h.displayName="Switch";var K=h},69945:function(o,t,n){"use strict";n.r(t)},49726:function(o,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return e}});const e=[]},51446:function(o,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return e}});const e=[{value:"Switch ui component for react.",paraId:0,tocIndex:0},{value:`import Switch from 'rc-switch';

export default () => <Switch />;
`,paraId:1,tocIndex:2},{value:"IE / Edge",paraId:2,tocIndex:3},{value:"Firefox",paraId:2,tocIndex:3},{value:"Chrome",paraId:2,tocIndex:3},{value:"Safari",paraId:2,tocIndex:3},{value:"Electron",paraId:2,tocIndex:3},{value:"IE11, Edge",paraId:2,tocIndex:3},{value:"last 2 versions",paraId:2,tocIndex:3},{value:"last 2 versions",paraId:2,tocIndex:3},{value:"last 2 versions",paraId:2,tocIndex:3},{value:"last 2 versions",paraId:2,tocIndex:3},{value:"Property",paraId:3,tocIndex:4},{value:"Type",paraId:3,tocIndex:4},{value:"Default",paraId:3,tocIndex:4},{value:"Description",paraId:3,tocIndex:4},{value:"prefixCls",paraId:3,tocIndex:4},{value:"String",paraId:3,tocIndex:4},{value:"rc-switch",paraId:3,tocIndex:4},{value:"className",paraId:3,tocIndex:4},{value:"String",paraId:3,tocIndex:4},{value:"''",paraId:3,tocIndex:4},{value:"additional class name of root node",paraId:3,tocIndex:4},{value:"checked",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"whether switch is checked",paraId:3,tocIndex:4},{value:"defaultChecked",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"whether switch is checked on init",paraId:3,tocIndex:4},{value:"onChange",paraId:3,tocIndex:4},{value:"Function(checked, event)",paraId:3,tocIndex:4},{value:"called when switch is checked or unchecked",paraId:3,tocIndex:4},{value:"tabIndex",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4},{value:"tab-index of switch node",paraId:3,tocIndex:4},{value:"onClick",paraId:3,tocIndex:4},{value:"Function(checked, event)",paraId:3,tocIndex:4},{value:"called when switch is clicked",paraId:3,tocIndex:4},{value:"autoFocus",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"get focus when mounts",paraId:3,tocIndex:4},{value:"disabled",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"whether switch is disabled",paraId:3,tocIndex:4},{value:"loadingIcon",paraId:3,tocIndex:4},{value:"React.ReactNode",paraId:3,tocIndex:4},{value:"specific the extra node. generally used in loading icon.",paraId:3,tocIndex:4},{value:`npm install
npm start
`,paraId:4,tocIndex:5},{value:"Online demo: ",paraId:5,tocIndex:5},{value:"http://react-component.github.io/switch/",paraId:5,tocIndex:5},{value:"rc-switch is released under the MIT license.",paraId:6,tocIndex:6}]},86834:function(o,t){"use strict";t.Z=`@switchPrefixCls: rc-switch;

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
`},25133:function(o,t){"use strict";t.Z=`import '../../assets/index.less';
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
`},67333:function(o){function t(){return o.exports=t=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(n[s]=l[s])}return n},o.exports.__esModule=!0,o.exports.default=o.exports,t.apply(this,arguments)}o.exports=t,o.exports.__esModule=!0,o.exports.default=o.exports},13769:function(o,t,n){var e=n(48541);function l(s,r){if(s==null)return{};var u=e(s,r),d,f;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(s);for(f=0;f<m.length;f++)d=m[f],!(r.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(s,d)&&(u[d]=s[d])}return u}o.exports=l,o.exports.__esModule=!0,o.exports.default=o.exports},48541:function(o){function t(n,e){if(n==null)return{};var l={},s=Object.keys(n),r,u;for(u=0;u<s.length;u++)r=s[u],!(e.indexOf(r)>=0)&&(l[r]=n[r]);return l}o.exports=t,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
