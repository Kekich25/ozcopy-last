(self.webpackChunk_ozon_ozon_ru=self.webpackChunk_ozon_ozon_ru||[]).push([["ui-kit-button"],{"320bc":function(e,t,n){!function(){"use strict";n("63271");var t={349:function(e){function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},t.apply(this,arguments)}var n=["attrs","props","domProps"],r=["class","style","directives"],i=["on","nativeOn"],o=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}};e.exports=function(e){return e.reduce((function(e,a){for(var l in a)if(e[l])if(-1!==n.indexOf(l))e[l]=t({},e[l],a[l]);else if(-1!==r.indexOf(l))e[l]=[].concat(e[l]instanceof Array?e[l]:[e[l]],a[l]instanceof Array?a[l]:[a[l]]);else if(-1!==i.indexOf(l))for(var c in a[l])e[l][c]=e[l][c]?[].concat(e[l][c]instanceof Array?e[l][c]:[e[l][c]],a[l][c]instanceof Array?a[l][c]:[a[l][c]]):a[l][c];else if("hook"===l)for(var d in a[l])e[l][d]=e[l][d]?o(e[l][d],a[l][d]):a[l][d];else e[l]=a[l];else e[l]=a[l];return e}),{})}},93:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.OzButton=void 0;var a=n(693);Object.defineProperty(t,"OzButton",{enumerable:!0,get:function(){return o(a).default}}),i(n(238),t)},238:function(e,t,n){n.r(t),n.d(t,{THEMES:function(){return r},TYPES:function(){return i},LAYOUTS:function(){return o},ICON_POSITIONS:function(){return a},TEXT_ALIGN:function(){return l}});var r={primary:"primary",success:"success",inline:"inline",inlineDanger:"inlineDanger",secondary:"secondary",secondaryAlt:"secondaryAlt",secondaryDark:"secondaryDark",secondaryDanger:"secondaryDanger",deleteWhite:"deleteWhite",secondarySuccess:"secondarySuccess",secondaryConfirmedWhite:"secondaryConfirmedWhite",secondaryWhite:"secondaryWhite",secondaryClear:"secondaryClear",tab:"tab",tabActive:"tabActive",parandja:"parandja",empty:"empty",material:"material",delivery:"delivery",primaryExpress:"primaryExpress",videoControl:"videoControl",fresh:"fresh",secondaryFresh:"secondaryFresh",secondaryFreshWhite:"secondaryFreshWhite",white:"white",gradient:"gradient",trustFactor:"trustFactor"},i={BUTTON:"button",SUBMIT:"submit",RESET:"reset",FAKE_LINK:"fakeLink",FAKE_BUTTON:"fakeButton"},o={HORIZONTAL:"horizontal",VERTICAL:"vertical"},a={LEFT:"left",RIGHT:"right"},l={LEFT:"left",CENTER:"center",RIGHT:"right"}},693:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var o=r(349),i=r.n(o);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=n("ba613"),f=r(238),s=n("0e0ed"),u=r.n(s);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e,t,n){var r,i=e.fillAuto,o=e.theme,a=e.fillVertical;return[n,t.root,(r={},c(r,t.fillWidth,e.fill&&o!==f.THEMES.inline),c(r,t.fillHeight,a&&o!==f.THEMES.inline),c(r,t.auto,i),c(r,t.themeMaterial,o===f.THEMES.material),r)]},S=function(e,t){var n,r=e.theme,i=e.fill,o=e.wrap,a=e.disabled,l=e.loading,s=e.disableInteractive,u=e.fillAuto,d=e.whiteBackground;return[t.button,(n={},c(n,t.fillHeight,e.fillVertical&&r!==f.THEMES.inline),c(n,t.fillWidth,i&&r!==f.THEMES.inline),c(n,t.fillAuto,u),c(n,t.noWrap,!o),c(n,t.disabled,a),c(n,t.loading,l),c(n,t.disableInteractive,s),c(n,t.whiteBackground,d&&(r===f.THEMES.secondary||r===f.THEMES.secondaryDanger||r===f.THEMES.secondaryFresh||r===f.THEMES.secondarySuccess)),n)]},b=function(e){return(e.secondLine||e.secondLineText)&&[d.SIZES.XXL,d.SIZES.XL].includes(e.size)},g=function(e,t){var n,r=e.theme,i=e.size,o=e.disabled,a=e.noMinWidth,s=e.noMinHeight,l=e.fontWeightNormal,y=e.text,p=e.iconPosition,h=e.fill,g=e.fillAuto,S=e.secondLine,v=e.secondLineText,m=e.textAlign,_=e.isAccessibilityMode;return[t.innerButton,(n={},c(n,t.vertical,e.layout===f.LAYOUTS.VERTICAL),c(n,t["theme".concat(u()(r))],r&&r!==f.THEMES.primary),c(n,t["size".concat(u()(i))],i&&i!==d.SIZES.M),c(n,t.disabled,o),c(n,t.noMinWidth,a),c(n,t.noMinHeight,s),c(n,t.fontWeightNormal,l),c(n,t.iconReverse,y.length&&p===f.ICON_POSITIONS.RIGHT),c(n,t.emptyText,!y.length),c(n,t.fillWidth,h&&r!==f.THEMES.inline),c(n,t.fillAuto,g),c(n,t.secondLine,b({secondLine:S,secondLineText:v,size:i})),c(n,t[m],m!==f.TEXT_ALIGN.CENTER&&r===f.THEMES.inline&&m),c(n,t.modAlly,_),n)]},v=function(e){var t=e.size;return{borderRadius:e.borderRadius||(t===d.SIZES.M||t===d.SIZES.L)&&"8px"||t===d.SIZES.XL&&"10px"||t===d.SIZES.XXL&&"12px"}},m={name:"OzButton",functional:!0,inject:{isAccessibilityMode:{default:!1}},props:{size:{type:String,default:d.SIZES.M,validator:function(e){return Object.values(d.SIZES).includes(e)}},theme:{type:String,default:f.THEMES.primary,validator:function(e){return Object.values(f.THEMES).includes(e)}},type:{type:String,default:f.TYPES.BUTTON,validator:function(e){return Object.values(f.TYPES).includes(e)}},fill:{type:Boolean,default:!1},fillVertical:{type:Boolean,default:!1},fillAuto:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disableInteractive:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},borderRadius:{type:String,default:void 0},noMinWidth:{type:Boolean,default:!1},noMinHeight:{type:Boolean,default:!1},fontWeightNormal:{type:Boolean,default:!1},text:{type:String,default:""},icon:{type:[Object,Function],default:function(){return{}}},iconPosition:{type:String,default:f.ICON_POSITIONS.LEFT,validator:function(e){return Object.values(f.ICON_POSITIONS).includes(e)}},iconColor:{type:String,default:""},iconRotate:{type:Number,default:0},gradientStart:{type:String,default:void 0},gradientEnd:{type:String,default:void 0},gradientText:{type:String,default:void 0},whiteBackground:{type:Boolean,default:!1},secondLine:{type:String,default:""},secondLineText:{type:String,default:""},layout:{type:String,default:f.LAYOUTS.HORIZONTAL,validator:function(e){return Object.values(f.LAYOUTS).includes(e)}},wrap:{type:Boolean,default:!0},textAlign:{type:String,default:f.TEXT_ALIGN.CENTER,validator:function(e){return Object.values(f.TEXT_ALIGN).includes(e)}},tabIndex:{type:String,default:"0"},href:{type:String,default:void 0},target:{type:String,default:void 0},ariaLabel:{type:String,default:""},title:{type:String,default:""},testInfo:{type:Object,default:function(){return{}}}},render:function(e,t){var n,r,o=t.props,l=t.$style,s=t.data,u=t._v,c=t.listeners,y=t.scopedSlots,m=(r=(n=o).type,n.disableInteractive||r===f.TYPES.FAKE_BUTTON?"div":r!==f.TYPES.FAKE_LINK&&!n.href||n.disabled?"button":"a"),_="button"===m?"span":"div",E=s.ref||null,O=s.attrs||{},T=s.directives||[],I=[],A=[];o.isAccessibilityMode=t.injections.isAccessibilityMode,T.forEach((function(e){"qa"!==e.name?A.push(e):I.push(e)}));var x=o.testInfo.automatizationId;x&&I.push({name:"qa",value:{id:x}});var L=o.icon,j=[];o.text&&j.push(u(o.text));var M,B,N,H,P=(y.content||function(){})(),C="string"==typeof P?[u(P)]:P,W=[].concat(a((0,d.isValidIcon)(o.icon)?[e(L,{class:l.icon,style:(M=o,B=M.iconColor,N=M.iconRotate,H=B?{color:(0,d.getColorByNameOrHex)(B)}:{},N&&(H.transform="rotate(".concat(N,"deg)")),H)})]:[]),[e(_,{class:l.textBlock},[].concat(j,a(b(o)?[e(_,{class:l.secondLineText},[u(o.secondLine||o.secondLineText)])]:[])))]),k={class:g(o,l),style:h({},v(o))};if(o.theme===f.THEMES.gradient&&o.gradientStart&&o.gradientEnd){var w="linear-gradient(to right, ".concat((0,d.getColorByNameOrHex)(o.gradientStart)," 0%,").concat((0,d.getColorByNameOrHex)(o.gradientEnd)," 100%)");k.style=h(h({},k.style),h({background:w},o.gradientText?{color:(0,d.getColorByNameOrHex)(o.gradientText)}:{})),k.on={mouseenter:function(e){e.preventDefault(),e.target.style.background="linear-gradient(".concat((0,d.getColorByNameOrHex)("ozButtonGradientHoverOverlay"),", ").concat((0,d.getColorByNameOrHex)("ozButtonGradientHoverOverlay"),"), ").concat(w)},mouseleave:function(e){e.preventDefault(),e.target.style.background=w}}}var F={attrs:o.type!==f.TYPES.FAKE_LINK&&!o.href||o.disabled?h({tabindex:o.disableInteractive?-1:o.tabIndex,disabled:o.disabled||o.disableInteractive,type:o.type,role:o.type===f.TYPES.FAKE_BUTTON?"button":void 0},o.ariaLabel?{"aria-label":o.ariaLabel}:{}):h({href:o.href},o.target?{target:o.target}:{}),class:S(o,l),style:v(o),on:h(h({},c),{},{click:function(e){o.type===f.TYPES.FAKE_LINK&&e.preventDefault(),c.click&&c.click(e)}}),directives:I};return o.title&&(F.attrs.title=o.title),e("div",i()([{class:p(o,l,s.class),style:s.style,ref:E},{attributes:O},{},{directives:A}]),[e(m,i()([{},F]),[e(_,i()([{},k]),a(C||W))])])}},_={root:"_4-a",auto:"_4-a0",button:"_4-a1",whiteBackground:"_4-a2",innerButton:"_4-a3",fontWeightNormal:"_4-a4",sizeL:"_4-a5",sizeXl:"_4-a6",sizeXxl:"_4-a7",themeSuccess:"_4-a8",themePrimaryExpress:"_4-a9",themeSecondary:"_4-b",themeSecondaryWhite:"_4-b0",themeSecondaryClear:"_4-b1",themeSecondaryDark:"_4-b2",themeSecondaryAlt:"_4-b3",themeInline:"_4-b4",left:"_4-b5",right:"_4-b6",disabled:"_4-b7",themeInlineDanger:"_4-b8",themeMaterial:"_4-b9",themeParandja:"_4-c",themeSecondaryDanger:"_4-c0",themeDeleteWhite:"_4-c1",themeSecondarySuccess:"_4-c2",themeSecondaryConfirmedWhite:"_4-c3",themeDelivery:"_4-c4",themeVideoControl:"_4-c5",themeEmpty:"_4-c6",themeFresh:"_4-c7",themeSecondaryFresh:"_4-c8",themeSecondaryFreshWhite:"_4-c9",themeWhite:"_4-d",themeGradient:"_4-d0",themeTrustFactor:"_4-d1",noMinWidth:"_4-d2",noMinHeight:"_4-d3",themeTabActive:"_4-d4",themeTab:"_4-d5",vertical:"_4-d6",icon:"_4-d7",modAlly:"_4-d8",emptyText:"_4-d9",iconReverse:"_4-e",secondLine:"_4-e0",textBlock:"_4-e1",secondLineText:"_4-e2",disableInteractive:"_4-e3",loading:"_4-e4",blink:"_4-e5",noWrap:"_4-e6",fillHeight:"_4-e7",fillWidth:"_4-e8",fillAuto:"_4-e9"},E=function(e,t,n,r,i,o,a,l){var c,d="function"==typeof e?e.options:e;if(i&&(c=i),c)if(d.functional){d._injectStyles=c;var s=d.render;d.render=function(e,t){return c.call(t),s(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:d}}(m,0,0,0,(function(e){this.$style=_.locals||_})).exports}},r={};function o(e){var i=r[e];if(void 0!==i)return i.exports;var n=r[e]={exports:{}};return t[e].call(n.exports,n,n.exports,o),n.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l=o(93);e.exports=l}()},63271:function(e,t,n){"use strict";n.r(t)}}]);