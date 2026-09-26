import{n as s,r as t,t as r}from"./chunk-C9yOwMO6.js";import{$ as Lhe,$n as qEe,$t as aEe,A as Eh,An as j0,At as UG,Bt as Wl,C as DH,Cn as gj,Cr as wR,D as EEe,Dn as ie,Dt as Th,Er as xR,Et as Te,Ft as Vi,G as Jf,Gn as oH,Gt as ZU,H as IEe,Ht as Yi,I as G0,In as la,Ir as z0,Jn as ot,Ln as m$,Lt as Vr,M as FEe,Mn as k$1,Mr as y5,Mt as VEe,N as FI,Nn as k1,O as ER,Or as xu,Ot as Tr,P as Fe$1,Pn as kh,Qn as pe,Qt as _h,Rn as mD,Rt as W0,St as Se,T as Do$1,Tr as wn,U as Ih,Vn as mR,W as It,Wn as oEe,Wt as Z5,Y as Kt$1,Yn as p1,Zn as pR,Zt as _G,_t as Re$1,bt as SH,c as AH,cn as cge,cr as th,ct as Oe$1,d as BI,dn as d1,dt as Ou,en as b$,et as M5,fr as uge,gn as em,gr as vEe,hr as v5,ht as Q5,i as $R,in as bR,ir as rEe,it as NG,jn as jh,jt as Uhe,kn as iwe,kt as U0,l as B,ln as co$1,nn as bEe,on as c$,pn as da,pt as PI,q as K,qn as or,r as $0,st as OI,ut as Oo$1,vn as f1,vr as vR,vt as Rt,wn as h1,wr as wh,wt as TEe,y as Ch,yt as SEe,z as H0,zn as mEe}from"./main-IOSD5O26.js";function H(...o){if(o){let r=[];for(let t=0;t<o.length;t++){let e=o[t];if(!e)continue;let n=typeof e;if(n===`string`||n===`number`)r.push(e);else if(n===`object`){let i=Array.isArray(e)?[H(...e)]:Object.entries(e).map(([s,a])=>a?s:void 0);r=i.length?r.concat(i.filter(s=>!!s)):r}}return r.join(` `).trim()}}function io({skipUndefined:o=!1},...r$1){return r$1?.reduce((t,e={})=>{for(let n in e){let i=e[n];if(!(o&&i===void 0))if(n===`style`)t.style=r(r({},t.style),e.style);else if(n===`class`||n===`className`)t[n]=H(t[n],e[n]);else if(PI(i)){let s=t[n];t[n]=s?(...a)=>{s(...a),i(...a)}:i}else t[n]=i}return t},{})}function Xt(...o){return io({skipUndefined:!1},...o)}var Dt={};function pt(o=`pui_id_`){return Object.hasOwn(Dt,o)||(Dt[o]=0),Dt[o]++,`${o}${Dt[o]}`}var Fe=(()=>{class o extends k1{name=`common`;static ɵfac=(()=>{let t;return function(n){return(t||(t=th(o)))(n||o)}})();static ɵprov=K({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var R=new B(`PARENT_INSTANCE`);var k=(()=>{class o{document=k$1(Re$1);platformId=k$1(Vr);el=k$1(wn);injector=k$1(Se);cd=k$1(da);renderer=k$1(or);config=k$1(UG);$parentInstance=k$1(R,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=k$1(Fe);baseStyle=k$1(k1);scopedStyleEl;parent=this.$params.parent;cn=H;_themeScopedListener;themeChangeListenerMap=new Map;dt=kh();unstyled=kh();pt=kh();ptOptions=kh();$attrSelector=pt(`pc`);get $name(){return this.componentName||`UnknownComponent`}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=ie(void 0);directiveUnstyled=ie(void 0);$unstyled=xu(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=xu(()=>It(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,t=>It(t,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,t=>this._getOptionValue(t,this.$hostName||this.$name,this.$params)||It(t,this.$params))}get $style(){return r(r({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let t=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:t}}}onInit(){}onChanges(t){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){Vi(t=>{this.document&&!uge(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener(`_themeScopedListener`,this._themeScopedListener)):this._unloadScopedThemeStyles()),t(()=>{this._offThemeChangeListener(`_themeScopedListener`)})}),Vi(t=>{this.document&&!uge(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener(`_loadCoreStyles`,this._loadCoreStyles))),t(()=>{this._offThemeChangeListener(`_loadCoreStyles`)})}),this._hook(`onBeforeInit`)}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook(`onInit`)}ngOnChanges(t){this.onChanges(t),this._hook(`onChanges`,t)}ngDoCheck(){this.onDoCheck(),this._hook(`onDoCheck`)}ngAfterContentInit(){this.onAfterContentInit(),this._hook(`onAfterContentInit`)}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook(`onAfterContentChecked`)}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,``),this.onAfterViewInit(),this._hook(`onAfterViewInit`)}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook(`onAfterViewChecked`)}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook(`onDestroy`)}_mergeProps(t,...e){return PI(t)?t(...e):Xt(...e)}_getHostInstance(t){return t?this.$hostName?this.$name===this.$hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0}_getPropValue(t){return this[t]||this._getHostInstance(this)?.[t]}_getOptionValue(t,e=``,n={}){return FI(t,e,n)}_hook(t,...e){if(!this.$hostName){let n=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${t}`),i=this._useDefaultPT(this._getOptionValue,`hooks.${t}`);n?.(...e),i?.(...e)}}_load(){iwe.isStyleNameLoaded(`base`)||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),iwe.setLoadedStyleName(`base`)),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener(`_load`,()=>this._load())}_loadGlobalStyles(){let t=this._useGlobalPT(this._getOptionValue,`global.css`,this.$params);Fe$1(t)&&this.baseStyle.load(t,r({name:`global`},this.$styleOptions))}_loadCoreStyles(){!iwe.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),iwe.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()===`none`)){if(!ot.isStyleNameLoaded(`common`)){let{primitive:t,semantic:e,global:n,style:i}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,r({name:`primitive-variables`},this.$styleOptions)),this.baseStyle.load(e?.css,r({name:`semantic-variables`},this.$styleOptions)),this.baseStyle.load(n?.css,r({name:`global-variables`},this.$styleOptions)),this.baseStyle.loadBaseStyle(r({name:`global-style`},this.$styleOptions),i),ot.setLoadedStyleName(`common`)}if(!ot.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:t,style:e}=this.$style?.getComponentTheme?.()||{};this.$style?.load(t,r({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(r({name:`${this.$style?.name}-style`},this.$styleOptions),e),ot.setLoadedStyleName(this.$style?.name)}if(!ot.isStyleNameLoaded(`layer-order`)){let t=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,r({name:`layer-order`,first:!0},this.$styleOptions)),ot.setLoadedStyleName(`layer-order`)}}}_loadScopedThemeStyles(t){let{css:e}=this.$style?.getPresetTheme?.(t,`[${this.$attrSelector}]`)||{},n=this.$style?.load(e,r({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t,e=()=>{}){this._offThemeChangeListener(t),iwe.clearLoadedStyleNames();let n=e.bind(this);this.themeChangeListenerMap.set(t,n),Tr.on(`theme:change`,n)}_removeThemeListeners(){this._offThemeChangeListener(`_themeScopedListener`),this._offThemeChangeListener(`_loadCoreStyles`),this._offThemeChangeListener(`_load`)}_offThemeChangeListener(t){this.themeChangeListenerMap.has(t)&&(Tr.off(`theme:change`,this.themeChangeListenerMap.get(t)),this.themeChangeListenerMap.delete(t))}_getPTValue(t={},e=``,n={},i=!0){let s$1=/./g.test(e)&&!!n[e.split(`.`)[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue(`ptOptions`)?.()||this.config?.ptOptions?.()||{},u=i?s$1?this._useGlobalPT(this._getPTClassValue,e,n):this._useDefaultPT(this._getPTClassValue,e,n):void 0,d=s$1?void 0:this._usePT(this._getPT(t,this.$hostName||this.$name),this._getPTClassValue,e,s(r({},n),{global:u||{}})),b=this._getPTDatasets(e);return a||!a&&d?l?this._mergeProps(l,u,d,b):r(r(r({},u),d),b):r(r({},d),b)}_getPTDatasets(t=``){let e=`data-pc-`,n=t===`root`&&Fe$1(this.$pt()?.[`data-pc-section`]);return t!==`transition`&&s(r({},t===`root`&&s(r({[`${e}name`]:OI(n?this.$pt()?.[`data-pc-section`]:this.$name)},n&&{[`${e}extend`]:OI(this.$name)}),{[`${this.$attrSelector}`]:``})),{[`${e}section`]:OI(t.includes(`.`)?t.split(`.`).at(-1)??``:t)})}_getPTClassValue(t,e,n){let i=this._getOptionValue(t,e,n);return co$1(i)||d1(i)?{class:i}:i}_getPT(t,e=``,n){let i=(s,a=!1)=>{let l=n?n(s):s,u=OI(e),d=OI(this.$hostName||this.$name);return(a?u!==d?l?.[u]:void 0:l?.[u])??l};return t?.hasOwnProperty(`_usept`)?{_usept:t._usept,originalValue:i(t.originalValue),value:i(t.value)}:i(t,!0)}_usePT(t,e,n,i){let s=a=>e?.call(this,a,n,i);if(t?.hasOwnProperty(`_usept`)){let{mergeSections:a=!0,mergeProps:l=!1}=t._usept||this.config?.ptOptions()||{},u=s(t.originalValue),d=s(t.value);return u===void 0&&d===void 0?void 0:co$1(d)?d:co$1(u)?u:a||!a&&d?l?this._mergeProps(l,u,d):r(r({},u),d):d}return s(t)}_useGlobalPT(t,e,n){return this._usePT(this.$globalPT,t,e,n)}_useDefaultPT(t,e,n){return this._usePT(this.$defaultPT,t,e,n)}ptm(t=``,e={}){return this._getPTValue(this.$pt(),t,r(r({},this.$params),e))}ptms(t,e={}){return t.reduce((n,i)=>(n=Xt(n,this.ptm(i,e))||{},n),{})}ptmo(t={},e=``,n={}){return this._getPTValue(t,e,r({instance:this},n),!1)}cx(t,e={}){return this.$unstyled()?void 0:H(this._getOptionValue(this.$style.classes,t,r(r({},this.$params),e)))}sx(t=``,e=!0,n={}){if(e){let i=this._getOptionValue(this.$style.inlineStyles,t,r(r({},this.$params),n));return r(r({},this._getOptionValue(this.baseComponentStyle.inlineStyles,t,r(r({},this.$params),n))),i)}}static ɵfac=function(e){return new(e||o)};static ɵdir=Kt$1({type:o,inputs:{dt:[1,`dt`],unstyled:[1,`unstyled`],pt:[1,`pt`],ptOptions:[1,`ptOptions`]},features:[m$([Fe,k1]),Oo$1]})}return o})();var Yt=(()=>{class o{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=` `+e)}static addMultipleClasses(t,e){if(t&&e)if(t.classList){let n=e.trim().split(` `);for(let i=0;i<n.length;i++)t.classList.add(n[i])}else{let n=e.split(` `);for(let i=0;i<n.length;i++)t.className+=` `+n[i]}}static removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp(`(^|\\b)`+e.split(` `).join(`|`)+`(\\b|$)`,`gi`),` `))}static removeMultipleClasses(t,e){t&&e&&[e].flat().filter(Boolean).forEach(n=>n.split(` `).forEach(i=>this.removeClass(t,i)))}static hasClass(t,e){return t&&e?t.classList?t.classList.contains(e):new RegExp(`(^| )`+e+`( |$)`,`gi`).test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}static find(t,e){return Array.from(t.querySelectorAll(e))}static findSingle(t,e){return this.isElement(t)?t.querySelector(e):null}static index(t){let e=t.parentNode.childNodes,n=0;for(var i=0;i<e.length;i++){if(e[i]==t)return n;e[i].nodeType==1&&n++}return-1}static indexWithinGroup(t,e){let n=t.parentNode?t.parentNode.childNodes:[],i=0;for(var s=0;s<n.length;s++){if(n[s]==t)return i;n[s].attributes&&n[s].attributes[e]&&n[s].nodeType==1&&i++}return-1}static appendOverlay(t,e,n=`self`){n!==`self`&&t&&e&&this.appendChild(t,e)}static alignOverlay(t,e,n=`self`,i=!0){t&&e&&(i&&(t.style.minWidth=`${o.getOuterWidth(e)}px`),n===`self`?this.relativePosition(t,e):this.absolutePosition(t,e))}static relativePosition(t,e,n=!0){let i=z=>{if(z)return getComputedStyle(z).getPropertyValue(`position`)===`relative`?z:i(z.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=e.offsetHeight,l=e.getBoundingClientRect(),u=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),b=this.getViewport(),f=i(t)?.getBoundingClientRect()||{top:-1*u,left:-1*d},y,S,Z=`top`;l.top+a+s.height>b.height?(y=l.top-f.top-s.height,Z=`bottom`,l.top+y<0&&(y=-1*l.top)):(y=a+l.top-f.top,Z=`top`);let st=l.left+s.width-b.width,ht=l.left-f.left;if(s.width>b.width?S=(l.left-f.left)*-1:st>0?S=ht-st:S=l.left-f.left,t.style.top=y+`px`,t.style.left=S+`px`,t.style.transformOrigin=Z,n){let z=BI(/-anchor-gutter$/)?.value;t.style.marginTop=Z===`bottom`?`calc(${z??`2px`} * -1)`:z??``}}static absolutePosition(t,e,n=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=i.height,a=i.width,l=e.offsetHeight,u=e.offsetWidth,d=e.getBoundingClientRect(),b=this.getWindowScrollTop(),m=this.getWindowScrollLeft(),f=this.getViewport(),y,S;d.top+l+s>f.height?(y=d.top+b-s,t.style.transformOrigin=`bottom`,y<0&&(y=b)):(y=l+d.top+b,t.style.transformOrigin=`top`),d.left+a>f.width?S=Math.max(0,d.left+m+u-a):S=d.left+m,t.style.top=y+`px`,t.style.left=S+`px`,n&&(t.style.marginTop=origin===`bottom`?`calc(var(--p-anchor-gutter) * -1)`:`calc(var(--p-anchor-gutter))`)}static getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))}static getScrollableParents(t){let e=[];if(t){let n=this.getParents(t),i=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return i.test(l.getPropertyValue(`overflow`))||i.test(l.getPropertyValue(`overflowX`))||i.test(l.getPropertyValue(`overflowY`))};for(let a of n){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(`,`);for(let d of u){let b=this.findSingle(a,d);b&&s(b)&&e.push(b)}}a.nodeType!==9&&s(a)&&e.push(a)}}return e}static getHiddenElementOuterHeight(t){t.style.visibility=`hidden`,t.style.display=`block`;let e=t.offsetHeight;return t.style.display=`none`,t.style.visibility=`visible`,e}static getHiddenElementOuterWidth(t){t.style.visibility=`hidden`,t.style.display=`block`;let e=t.offsetWidth;return t.style.display=`none`,t.style.visibility=`visible`,e}static getHiddenElementDimensions(t){let e={};return t.style.visibility=`hidden`,t.style.display=`block`,e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display=`none`,t.style.visibility=`visible`,e}static scrollInView(t,e){let n=getComputedStyle(t).getPropertyValue(`borderTopWidth`),i=n?parseFloat(n):0,s=getComputedStyle(t).getPropertyValue(`paddingTop`),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),d=e.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-i-a,b=t.scrollTop,m=t.clientHeight,f=this.getOuterHeight(e);d<0?t.scrollTop=b+d:d+f>m&&(t.scrollTop=b+d-m+f)}static fadeIn(t,e){t.style.opacity=0;let n=+new Date,i=0,s=function(){i=+t.style.opacity.replace(`,`,`.`)+(new Date().getTime()-n)/e,t.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(t,e){var n=1,i=50,a=i/e;let l=setInterval(()=>{n=n-a,n<=0&&(n=0,clearInterval(l)),t.style.opacity=n},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,e){var n=Element.prototype;return(n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1}).call(t,e)}static getOuterWidth(t,e){let n=t.offsetWidth;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n}static getHorizontalPadding(t){let e=getComputedStyle(t);return parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)}static getHorizontalMargin(t){let e=getComputedStyle(t);return parseFloat(e.marginLeft)+parseFloat(e.marginRight)}static innerWidth(t){let e=t.offsetWidth,n=getComputedStyle(t);return e+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}static width(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}static getInnerHeight(t){let e=t.offsetHeight,n=getComputedStyle(t);return e+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),e}static getOuterHeight(t,e){let n=t.offsetHeight;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}static getHeight(t){let e=t.offsetHeight,n=getComputedStyle(t);return e-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),e}static getWidth(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),e}static getViewport(){let t=window,e=document,n=e.documentElement,i=e.getElementsByTagName(`body`)[0];return{width:t.innerWidth||n.clientWidth||i.clientWidth,height:t.innerHeight||n.clientHeight||i.clientHeight}}static getOffset(t){var e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,e){let n=t.parentNode;if(!n)throw`Can't replace element`;return n.replaceChild(e,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent;if(t.indexOf(`MSIE `)>0)return!0;if(t.indexOf(`Trident/`)>0){t.indexOf(`rv:`);return!0}return t.indexOf(`Edge/`)>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return`ontouchstart`in window||navigator.maxTouchPoints>0}static appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e&&e.el&&e.el.nativeElement)e.el.nativeElement.appendChild(t);else throw`Cannot append `+e+` to `+t}static removeChild(t,e){if(this.isElement(e))e.removeChild(t);else if(e.el&&e.el.nativeElement)e.el.nativeElement.removeChild(t);else throw`Cannot remove `+t+` from `+e}static removeElement(t){`remove`in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement==`object`?t instanceof HTMLElement:t&&typeof t==`object`&&t!==null&&t.nodeType===1&&typeof t.nodeName==`string`}static calculateScrollbarWidth(t){if(t){let e=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let e=document.createElement(`div`);e.className=`p-scrollbar-measure`,document.body.appendChild(e);let n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement(`div`);t.className=`p-scrollbar-measure`,document.body.appendChild(t);let e=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e}static invokeElementMethod(t,e,n){t[e].apply(t,n)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf(`compatible`)<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||``,version:e[2]||`0`}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t==`number`&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<`u`&&t.nodeName&&t.parentNode}static focus(t,e){t&&document.activeElement!==t&&t.focus(e)}static getFocusableSelectorString(t=``){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,e=``){let n=this.find(t,this.getFocusableSelectorString(e)),i=[];for(let s of n){let a=getComputedStyle(s);this.isVisible(s)&&a.display!=`none`&&a.visibility!=`hidden`&&i.push(s)}return i}static getFocusableElement(t,e=``){let n=this.findSingle(t,this.getFocusableSelectorString(e));if(n){let i=getComputedStyle(n);if(this.isVisible(n)&&i.display!=`none`&&i.visibility!=`hidden`)return n}return null}static getFirstFocusableElement(t,e=``){let n=this.getFocusableElements(t,e);return n.length>0?n[0]:null}static getLastFocusableElement(t,e){let n=this.getFocusableElements(t,e);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(t,e=!1){let n=o.getFocusableElements(t),i=0;if(n&&n.length>0){let s=n.indexOf(n[0].ownerDocument.activeElement);e?s==-1||s===0?i=n.length-1:i=s-1:s!=-1&&s!==n.length-1&&(i=s+1)}return n[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,e){if(!t)return null;switch(t){case`document`:return document;case`window`:return window;case`@next`:return e?.nextElementSibling;case`@prev`:return e?.previousElementSibling;case`@parent`:return e?.parentElement;case`@grandparent`:return e?.parentElement?.parentElement;default:let n=typeof t;if(n===`string`)return document.querySelector(t);if(n===`object`&&t.hasOwnProperty(`nativeElement`))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}static getAttribute(t,e){if(t){let n=t.getAttribute(e);return isNaN(n)?n===`true`||n===`false`?n===`true`:n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t=`p-overflow-hidden`){document.body.style.setProperty(`--scrollbar-width`,this.calculateBodyScrollbarWidth()+`px`),this.addClass(document.body,t)}static unblockBodyScroll(t=`p-overflow-hidden`){document.body.style.removeProperty(`--scrollbar-width`),this.removeClass(document.body,t)}static createElement(t,e={},...n){if(t){let i=document.createElement(t);return this.setAttributes(i,e),i.append(...n),i}}static setAttribute(t,e=``,n){this.isElement(t)&&n!==null&&n!==void 0&&t.setAttribute(e,n)}static setAttributes(t,e={}){if(this.isElement(t)){let n=(i,s)=>{let a=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let d=typeof u;if(d===`string`||d===`number`)l.push(u);else if(d===`object`){let b=Array.isArray(u)?n(i,u):Object.entries(u).map(([m,f])=>i===`style`&&(f||f===0)?`${m.replace(/([a-z])([A-Z])/g,`$1-$2`).toLowerCase()}:${f}`:f?m:void 0);l=b.length?l.concat(b.filter(m=>!!m)):l}}return l},a)};Object.entries(e).forEach(([i,s])=>{if(s!=null){let a=i.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):i===`pBind`?this.setAttributes(t,s):(s=i===`class`?[...new Set(n(`class`,s))].join(` `).trim():i===`style`?n(`style`,s).join(`;`).trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=s),t.setAttribute(i,s))}})}}static isFocusableElement(t,e=``){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}}return o})();function bn(){rEe({variableName:qEe(`scrollbar.width`).name})}function hn(){oEe({variableName:qEe(`scrollbar.width`).name})}var $e=class{element;listener;scrollableParents;constructor(r,t=()=>{}){this.element=r,this.listener=t}bindScrollListener(){this.scrollableParents=Yt.getScrollableParents(this.element);for(let r=0;r<this.scrollableParents.length;r++)this.scrollableParents[r].addEventListener(`scroll`,this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let r=0;r<this.scrollableParents.length;r++)this.scrollableParents[r].removeEventListener(`scroll`,this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Oe=(()=>{class o extends k{autofocus=!1;focused=!1;platformId=k$1(Vr);document=k$1(Re$1);host=k$1(wn);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute(`autofocus`):this.host.nativeElement.setAttribute(`autofocus`,!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){cge(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=Yt.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static ɵfac=(()=>{let t;return function(n){return(t||(t=th(o)))(n||o)}})();static ɵdir=Kt$1({type:o,selectors:[[``,`pAutoFocus`,``]],inputs:{autofocus:[0,`pAutoFocus`,`autofocus`]},features:[pR]})}return o})();var w=(()=>{class o{el;renderer;pBind=kh(void 0);_attrs=ie(void 0);attrs=xu(()=>this._attrs()||this.pBind());styles=xu(()=>this.attrs()?.style);classes=xu(()=>H(this.attrs()?.class));listeners=[];constructor(t$1,e){this.el=t$1,this.renderer=e,Vi(()=>{let a=this.attrs()||{},{style:n,class:i}=a,s=t(a,[`style`,`class`]);for(let[l,u]of Object.entries(s))if(l.startsWith(`on`)&&typeof u==`function`){let d=l.slice(2).toLowerCase();if(!this.listeners.some(b=>b.eventName===d)){let b=this.renderer.listen(this.el.nativeElement,d,u);this.listeners.push({eventName:d,unlisten:b})}}else u==null?this.renderer.removeAttribute(this.el.nativeElement,l):(this.renderer.setAttribute(this.el.nativeElement,l,u.toString()),l in this.el.nativeElement&&(this.el.nativeElement[l]=u))})}ngOnDestroy(){this.clearListeners()}setAttrs(t){em(this._attrs(),t)||this._attrs.set(t)}clearListeners(){this.listeners.forEach(({unlisten:t})=>t()),this.listeners=[]}static ɵfac=function(e){return new(e||o)(pe(wn),pe(or))};static ɵdir=Kt$1({type:o,selectors:[[``,`pBind`,``]],hostVars:4,hostBindings:function(e,n){e&2&&(Q5(n.styles()),Z5(n.classes()))},inputs:{pBind:[1,`pBind`]}})}return o})();var kt=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=Yi({type:o});static ɵinj=Do$1({})}return o})();var so=`
    
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }


    /* For Optimus (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`;var ro={root:({instance:o})=>{let r=typeof o.value==`function`?o.value():o.value,t=typeof o.size==`function`?o.size():o.size,e=typeof o.badgeSize==`function`?o.badgeSize():o.badgeSize,n=typeof o.severity==`function`?o.severity():o.severity;return[`p-badge p-component`,{"p-badge-circle":Fe$1(r)&&String(r).length===1,"p-badge-dot":Wl(r),"p-badge-sm":t===`small`||e===`small`,"p-badge-lg":t===`large`||e===`large`,"p-badge-xl":t===`xlarge`||e===`xlarge`,"p-badge-info":n===`info`,"p-badge-success":n===`success`,"p-badge-warn":n===`warn`,"p-badge-danger":n===`danger`,"p-badge-secondary":n===`secondary`,"p-badge-contrast":n===`contrast`}]}};var Ve=(()=>{class o extends k1{name=`badge`;style=so;classes=ro;static ɵfac=(()=>{let t;return function(n){return(t||(t=th(o)))(n||o)}})();static ɵprov=K({token:o,factory:o.ɵfac})}return o})();var He=new B(`BADGE_INSTANCE`);var Kt=(()=>{class o extends k{componentName=`Badge`;$pcBadge=k$1(He,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k$1(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=kh();badgeSize=kh();size=kh();severity=kh();value=kh();badgeDisabled=kh(!1,{transform:Ou});_componentStyle=k$1(Ve);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static ɵfac=(()=>{let t;return function(n){return(t||(t=th(o)))(n||o)}})();static ɵcmp=la({type:o,selectors:[[`p-badge`]],hostVars:5,hostBindings:function(e,n){e&2&&(_h(`data-p`,n.dataP),Z5(n.cn(n.cx(`root`),n.styleClass())),xR(`display`,n.badgeDisabled()?`none`:null))},inputs:{styleClass:[1,`styleClass`],badgeSize:[1,`badgeSize`],size:[1,`size`],severity:[1,`severity`],value:[1,`value`],badgeDisabled:[1,`badgeDisabled`]},features:[m$([Ve,{provide:He,useExisting:o},{provide:R,useExisting:o}]),ZU([w]),pR],decls:1,vars:1,template:function(e,n){e&1&&c$(0),e&2&&$R(n.value())},dependencies:[jh,VEe,kt],encapsulation:2})}return o})();var je=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=Yi({type:o});static ɵinj=Do$1({imports:[Kt,VEe,VEe]})}return o})();var lo=[`*`];var co={root:`p-fluid`};var Re=(()=>{class o extends k1{name=`fluid`;classes=co;static ɵfac=(()=>{let t;return function(n){return(t||(t=th(o)))(n||o)}})();static ɵprov=K({token:o,factory:o.ɵfac})}return o})();var We=new B(`FLUID_INSTANCE`);var Ue=(()=>{class o extends k{componentName=`Fluid`;$pcFluid=k$1(We,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k$1(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}_componentStyle=k$1(Re);static ɵfac=(()=>{let t;return function(n){return(t||(t=th(o)))(n||o)}})();static ɵcmp=la({type:o,selectors:[[`p-fluid`]],hostVars:2,hostBindings:function(e,n){e&2&&Z5(n.cx(`root`))},features:[m$([Re,{provide:We,useExisting:o},{provide:R,useExisting:o}]),ZU([w]),pR],ngContentSelectors:lo,decls:1,vars:0,template:function(e,n){e&1&&(Ih(),Th(0))},dependencies:[jh],encapsulation:2})}return o})();var uo=[`*`];var po=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`;var qe=(()=>{class o extends k1{name=`baseicon`;css=po;static ɵfac=(()=>{let t;return function(n){return(t||(t=th(o)))(n||o)}})();static ɵprov=K({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var _t=(()=>{class o extends k{spin=!1;_componentStyle=k$1(qe);getClassNames(){return H(`p-icon`,{"p-icon-spin":this.spin})}static ɵfac=(()=>{let t;return function(n){return(t||(t=th(o)))(n||o)}})();static ɵcmp=la({type:o,selectors:[[`ng-component`]],hostAttrs:[`width`,`14`,`height`,`14`,`viewBox`,`0 0 14 14`,`fill`,`none`,`xmlns`,`http://www.w3.org/2000/svg`],hostVars:2,hostBindings:function(e,n){e&2&&Z5(n.getClassNames())},inputs:{spin:[2,`spin`,`spin`,Ou]},features:[m$([qe]),pR],ngContentSelectors:uo,decls:1,vars:0,template:function(e,n){e&1&&(Ih(),Th(0))},encapsulation:2})}return o})();var Ge=(()=>{class o extends _t{pathId;onInit(){this.pathId=`url(#`+pt()+`)`}static ɵfac=(()=>{let t;return function(n){return(t||(t=th(o)))(n||o)}})();static ɵcmp=la({type:o,selectors:[[``,`data-p-icon`,`spinner`]],features:[pR],decls:5,vars:2,consts:[[`d`,`M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z`,`fill`,`currentColor`],[3,`id`],[`width`,`14`,`height`,`14`,`fill`,`white`]],template:function(e,n){e&1&&(mD(),U0(0,`g`),bR(1,`path`,0),$0(),U0(2,`defs`)(3,`clipPath`,1),bR(4,`rect`,2),$0()()),e&2&&(_h(`clip-path`,n.pathId),gj(3),wR(`id`,n.pathId))},encapsulation:2,changeDetection:1})}return o})();var yi=(()=>{class o extends _t{static ɵfac=(()=>{let t;return function(n){return(t||(t=th(o)))(n||o)}})();static ɵcmp=la({type:o,selectors:[[``,`data-p-icon`,`times`]],features:[pR],decls:1,vars:0,consts:[[`d`,`M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z`,`fill`,`currentColor`]],template:function(e,n){e&1&&(mD(),bR(0,`path`,0))},encapsulation:2,changeDetection:1})}return o})();var bo=`
    
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }


    /* For Optimus */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var ho={root:`p-ink`};var Ze=(()=>{class o extends k1{name=`ripple`;style=bo;classes=ho;static ɵfac=(()=>{let t;return function(n){return(t||(t=th(o)))(n||o)}})();static ɵprov=K({token:o,factory:o.ɵfac})}return o})();var Xe=(()=>{class o extends k{componentName=`Ripple`;zone=k$1(Te);_componentStyle=k$1(Ze);animationListener;mouseDownListener;timeout;constructor(){super(),Vi(()=>{cge(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,`mousedown`,this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(t){let e=this.getInk();if(!e||this.document.defaultView?.getComputedStyle(e,null).display===`none`)return;if(!this.$unstyled()&&h1(e,`p-ink-active`),e.setAttribute(`data-p-ink-active`,`false`),!mEe(e)&&!bEe(e)){let a=Math.max(aEe(this.el.nativeElement),NG(this.el.nativeElement));e.style.height=a+`px`,e.style.width=a+`px`}let n=vEe(this.el.nativeElement),i=t.pageX-n.left+this.document.body.scrollTop-bEe(e)/2,s=t.pageY-n.top+this.document.body.scrollLeft-mEe(e)/2;this.renderer.setStyle(e,`top`,s+`px`),this.renderer.setStyle(e,`left`,i+`px`),!this.$unstyled()&&f1(e,`p-ink-active`),e.setAttribute(`data-p-ink-active`,`true`),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&h1(a,`p-ink-active`),a.setAttribute(`data-p-ink-active`,`false`))},401)}getInk(){let t=this.el.nativeElement.children;for(let e=0;e<t.length;e++)if(typeof t[e].className==`string`&&t[e].className.indexOf(`p-ink`)!==-1)return t[e];return null}resetInk(){let t=this.getInk();t&&(!this.$unstyled()&&h1(t,`p-ink-active`),t.setAttribute(`data-p-ink-active`,`false`))}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&h1(t.currentTarget,`p-ink-active`),t.currentTarget.setAttribute(`data-p-ink-active`,`false`)}create(){let t=this.renderer.createElement(`span`);this.renderer.addClass(t,`p-ink`),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,`data-p-ink`,`true`),this.renderer.setAttribute(t,`data-p-ink-active`,`false`),this.renderer.setAttribute(t,`aria-hidden`,`true`),this.renderer.setAttribute(t,`role`,`presentation`),this.animationListener||(this.animationListener=this.renderer.listen(t,`animationend`,this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,TEe(t))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static ɵfac=function(e){return new(e||o)};static ɵdir=Kt$1({type:o,selectors:[[``,`pRipple`,``]],hostAttrs:[1,`p-ripple`],features:[m$([Ze]),pR]})}return o})();var _i=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=Yi({type:o});static ɵinj=Do$1({})}return o})();var Ye=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var fo=[`content`];var go=[`loadingicon`];var mo=[`icon`];var vo=[`*`];var to=(o,r)=>({class:o,pt:r});function yo(o,r){o&1&&ER(0)}function Co(o,r){if(o&1&&Eh(0,`span`,7),o&2){let t=M5(3);Z5(t.cn(t.cx(`loadingIcon`),`pi-spin`,t.loadingIcon||t.buttonProps?.loadingIcon)),vR(`pBind`,t.ptm(`loadingIcon`)),_h(`aria-hidden`,!0)}}function So(o,r){if(o&1&&(mD(),Eh(0,`svg`,8)),o&2){let t=M5(3);Z5(t.cn(t.cx(`loadingIcon`),t.cx(`spinnerIcon`))),vR(`pBind`,t.ptm(`loadingIcon`))(`spin`,!0),_h(`aria-hidden`,!0)}}function Eo(o,r){if(o&1&&(H0(0),mR(1,Co,1,4,`span`,3)(2,So,1,5,`svg`,6),z0()),o&2){let t=M5(2);gj(),vR(`ngIf`,t.loadingIcon||t.buttonProps?.loadingIcon),gj(),vR(`ngIf`,!(t.loadingIcon||t.buttonProps?.loadingIcon))}}function wo(o,r){}function xo(o,r){if(o&1&&mR(0,wo,0,0,`ng-template`,9),o&2){let t=M5(2);vR(`ngIf`,t.loadingIconTemplate||t._loadingIconTemplate)}}function Io(o,r){if(o&1&&(H0(0),mR(1,Eo,3,2,`ng-container`,2)(2,xo,1,1,null,5),z0()),o&2){let t=M5();gj(),vR(`ngIf`,!t.loadingIconTemplate&&!t._loadingIconTemplate),gj(),vR(`ngTemplateOutlet`,t.loadingIconTemplate||t._loadingIconTemplate)(`ngTemplateOutletContext`,b$(3,to,t.cx(`loadingIcon`),t.ptm(`loadingIcon`)))}}function To(o,r){if(o&1&&Eh(0,`span`,7),o&2){let t=M5(2);Z5(t.cn(t.cx(`icon`),t.icon||t.buttonProps?.icon)),vR(`pBind`,t.ptm(`icon`)),_h(`data-p`,t.dataIconP)}}function Mo(o,r){}function Do(o,r){if(o&1&&mR(0,Mo,0,0,`ng-template`,9),o&2){let t=M5(2);vR(`ngIf`,!t.icon&&(t.iconTemplate||t._iconTemplate))}}function ko(o,r){if(o&1&&(H0(0),mR(1,To,1,4,`span`,3)(2,Do,1,1,null,5),z0()),o&2){let t=M5();gj(),vR(`ngIf`,(t.icon||t.buttonProps?.icon)&&!t.iconTemplate&&!t._iconTemplate),gj(),vR(`ngTemplateOutlet`,t.iconTemplate||t._iconTemplate)(`ngTemplateOutletContext`,b$(3,to,t.cx(`icon`),t.ptm(`icon`)))}}function Bo(o,r){if(o&1&&(Jf(0,`span`,7),c$(1),j0()),o&2){let t=M5();Z5(t.cx(`label`)),vR(`pBind`,t.ptm(`label`)),_h(`aria-hidden`,(t.icon||t.buttonProps?.icon)&&!(t.label||t.buttonProps?.label))(`data-p`,t.dataLabelP),gj(),$R(t.label||t.buttonProps?.label)}}function _o(o,r){if(o&1&&Eh(0,`p-badge`,10),o&2){let t=M5();vR(`value`,t.badge||t.buttonProps?.badge)(`severity`,t.badgeSeverity||t.buttonProps?.badgeSeverity)(`pt`,t.ptm(`pcBadge`))(`unstyled`,t.unstyled())}}var No={root:({instance:o})=>[`p-button p-component`,{"p-button-icon-only":o.hasIcon&&!o.label&&!o.buttonProps?.label&&!o.badge,"p-button-vertical":(o.iconPos===`top`||o.iconPos===`bottom`)&&o.label,"p-button-loading":o.loading||o.buttonProps?.loading,"p-button-link":o.link||o.buttonProps?.link,[`p-button-${o.severity||o.buttonProps?.severity}`]:o.severity||o.buttonProps?.severity,"p-button-raised":o.raised||o.buttonProps?.raised,"p-button-rounded":o.rounded||o.buttonProps?.rounded,"p-button-text":o.text||o.variant===`text`||o.buttonProps?.text||o.buttonProps?.variant===`text`,"p-button-outlined":o.outlined||o.variant===`outlined`||o.buttonProps?.outlined||o.buttonProps?.variant===`outlined`,"p-button-sm":o.size===`small`||o.buttonProps?.size===`small`,"p-button-lg":o.size===`large`||o.buttonProps?.size===`large`,"p-button-plain":o.plain||o.buttonProps?.plain,"p-button-fluid":o.hasFluid}],loadingIcon:`p-button-loading-icon`,icon:({instance:o})=>[`p-button-icon`,{[`p-button-icon-${o.iconPos||o.buttonProps?.iconPos}`]:o.label||o.buttonProps?.label,"p-button-icon-left":(o.iconPos===`left`||o.buttonProps?.iconPos===`left`)&&o.label||o.buttonProps?.label,"p-button-icon-right":(o.iconPos===`right`||o.buttonProps?.iconPos===`right`)&&o.label||o.buttonProps?.label,"p-button-icon-top":(o.iconPos===`top`||o.buttonProps?.iconPos===`top`)&&o.label||o.buttonProps?.label,"p-button-icon-bottom":(o.iconPos===`bottom`||o.buttonProps?.iconPos===`bottom`)&&o.label||o.buttonProps?.label},o.icon,o.buttonProps?.icon],spinnerIcon:({instance:o})=>Object.entries(o.cx(`icon`)).filter(([,r])=>!!r).reduce((r,[t])=>r+` ${t}`,`p-button-loading-icon`),label:`p-button-label`};var Ke=(()=>{class o extends k1{name=`button`;style=Ye;classes=No;static ɵfac=(()=>{let t;return function(n){return(t||(t=th(o)))(n||o)}})();static ɵprov=K({token:o,factory:o.ɵfac})}return o})();var Je=new B(`BUTTON_INSTANCE`);var as=(()=>{class o extends k{componentName=`Button`;hostName=``;$pcButton=k$1(Je,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k$1(w,{self:!0});_componentStyle=k$1(Ke);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}type=`button`;badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity=`secondary`;ariaLabel;autofocus;iconPos=`left`;icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=kh(void 0,{transform:Ou});onClick=new Rt;onFocus=new Rt;onBlur=new Rt;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=k$1(Ue,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case`content`:this._contentTemplate=t.template;break;case`icon`:this._iconTemplate=t.template;break;case`loadingicon`:this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant===`outlined`,text:this.text||this.variant===`text`,link:this.link,vertical:(this.iconPos===`top`||this.iconPos===`bottom`)&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static ɵfac=(()=>{let t;return function(n){return(t||(t=th(o)))(n||o)}})();static ɵcmp=la({type:o,selectors:[[`p-button`]],contentQueries:function(e,n,i){if(e&1&&Ch(i,fo,5)(i,go,5)(i,mo,5)(i,FEe,4),e&2){let s;W0(s=G0())&&(n.contentTemplate=s.first),W0(s=G0())&&(n.loadingIconTemplate=s.first),W0(s=G0())&&(n.iconTemplate=s.first),W0(s=G0())&&(n.templates=s)}},inputs:{hostName:`hostName`,type:`type`,badge:`badge`,disabled:[2,`disabled`,`disabled`,Ou],raised:[2,`raised`,`raised`,Ou],rounded:[2,`rounded`,`rounded`,Ou],text:[2,`text`,`text`,Ou],plain:[2,`plain`,`plain`,Ou],outlined:[2,`outlined`,`outlined`,Ou],link:[2,`link`,`link`,Ou],tabindex:[2,`tabindex`,`tabindex`,oH],size:`size`,variant:`variant`,style:`style`,styleClass:`styleClass`,badgeClass:`badgeClass`,badgeSeverity:`badgeSeverity`,ariaLabel:`ariaLabel`,autofocus:[2,`autofocus`,`autofocus`,Ou],iconPos:`iconPos`,icon:`icon`,label:`label`,loading:[2,`loading`,`loading`,Ou],loadingIcon:`loadingIcon`,severity:`severity`,buttonProps:`buttonProps`,fluid:[1,`fluid`]},outputs:{onClick:`onClick`,onFocus:`onFocus`,onBlur:`onBlur`},features:[m$([Ke,{provide:Je,useExisting:o},{provide:R,useExisting:o}]),ZU([w]),pR],ngContentSelectors:vo,decls:7,vars:17,consts:[[`pRipple`,``,3,`click`,`focus`,`blur`,`ngStyle`,`disabled`,`pAutoFocus`,`pBind`],[4,`ngTemplateOutlet`],[4,`ngIf`],[3,`class`,`pBind`,4,`ngIf`],[3,`value`,`severity`,`pt`,`unstyled`,4,`ngIf`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`spinner`,3,`class`,`pBind`,`spin`,4,`ngIf`],[3,`pBind`],[`data-p-icon`,`spinner`,3,`pBind`,`spin`],[3,`ngIf`],[3,`value`,`severity`,`pt`,`unstyled`]],template:function(e,n){e&1&&(Ih(),Jf(0,`button`,0),wh(`click`,function(s){return n.onClick.emit(s)})(`focus`,function(s){return n.onFocus.emit(s)})(`blur`,function(s){return n.onBlur.emit(s)}),Th(1),mR(2,yo,1,0,`ng-container`,1)(3,Io,3,6,`ng-container`,2)(4,ko,3,6,`ng-container`,2)(5,Bo,2,6,`span`,3)(6,_o,1,4,`p-badge`,4),j0()),e&2&&(Z5(n.cn(n.cx(`root`),n.styleClass,n.buttonProps?.styleClass)),vR(`ngStyle`,n.style||n.buttonProps?.style)(`disabled`,n.disabled||n.loading||n.buttonProps?.disabled)(`pAutoFocus`,n.autofocus||n.buttonProps?.autofocus)(`pBind`,n.ptm(`root`)),_h(`type`,n.type||n.buttonProps?.type)(`aria-label`,n.ariaLabel||n.buttonProps?.ariaLabel)(`tabindex`,n.tabindex||n.buttonProps?.tabindex)(`data-p`,n.dataP)(`data-p-disabled`,n.disabled||n.loading||n.buttonProps?.disabled)(`data-p-severity`,n.severity||n.buttonProps?.severity),gj(2),vR(`ngTemplateOutlet`,n.contentTemplate||n._contentTemplate),gj(),vR(`ngIf`,n.loading||n.buttonProps?.loading),gj(),vR(`ngIf`,!(n.loading||n.buttonProps?.loading)),gj(),vR(`ngIf`,!n.contentTemplate&&!n._contentTemplate&&(n.label||n.buttonProps?.label)),gj(),vR(`ngIf`,!n.contentTemplate&&!n._contentTemplate&&(n.badge||n.buttonProps?.badge)))},dependencies:[jh,DH,AH,SH,Xe,Oe,Ge,je,Kt,VEe,w],encapsulation:2})}return o})();var Jt=`animation`;var te=`transition`;function Po(o){return o?o.disabled||!!(o.safe&&EEe()):!1}function Lo(o,r$2){return o?r(r({},o),Object.entries(r$2).reduce((t,[e,n])=>(t[e]=o[e]??n,t),{})):r$2}function Ao(o){let{name:r,enterClass:t,leaveClass:e}=o||{};return{enter:{from:t?.from||`${r}-enter-from`,to:t?.to||`${r}-enter-to`,active:t?.active||`${r}-enter-active`},leave:{from:e?.from||`${r}-leave-from`,to:e?.to||`${r}-leave-to`,active:e?.active||`${r}-leave-active`}}}function Fo(o){return{enter:{onBefore:o?.onBeforeEnter,onStart:o?.onEnter,onAfter:o?.onAfterEnter,onCancelled:o?.onEnterCancelled},leave:{onBefore:o?.onBeforeLeave,onStart:o?.onLeave,onAfter:o?.onAfterLeave,onCancelled:o?.onLeaveCancelled}}}function $o(o,r){let t=window.getComputedStyle(o),e=f=>{let y=t[`${f}Delay`],S=t[`${f}Duration`];return[y.split(`, `).map(_G),S.split(`, `).map(_G)]},[n,i]=e(te),[s,a]=e(Jt),l=Math.max(...i.map((f,y)=>f+n[y])),u=Math.max(...a.map((f,y)=>f+s[y])),d,b=0,m=0;return r===`transition`?l>0&&(d=te,b=l,m=i.length):r===`animation`?u>0&&(d=Jt,b=u,m=a.length):(b=Math.max(l,u),d=b>0?l>u?te:Jt:void 0,m=d?d===`transition`?i.length:a.length:0),{type:d,timeout:b,count:m}}function Nt(o,r){return typeof o==`number`?o:typeof o==`object`&&o[r]!=null?o[r]:null}function Oo(o,r=!0,t=!1){if(!r&&!t)return;let e=p1(o);r&&SEe(o,`--pui-motion-height`,e.height+`px`),t&&SEe(o,`--pui-motion-width`,e.width+`px`)}var zo={name:`p`,safe:!0,disabled:!1,enter:!0,leave:!0,autoHeight:!0,autoWidth:!1};function ee(o,r){if(!o)throw Error(`Element is required.`);let t={},e=!1,n={},i=null,s={},a=d=>{if(Object.assign(t,Lo(d,zo)),!t.enter&&!t.leave)throw Error(`Enter or leave must be true.`);s=Fo(t),e=Po(t),n=Ao(t),i=null},l=async d=>{i?.();let{onBefore:b,onStart:m,onAfter:f,onCancelled:y}=s[d]||{},S={element:o};if(e){b?.(S),m?.(S),f?.(S);return}let{from:Z,active:st,to:ht}=n[d]||{};return Oo(o,t.autoHeight,t.autoWidth),b?.(S),f1(o,Z),f1(o,st),o.offsetHeight,h1(o,Z),f1(o,ht),m?.(S),new Promise(z=>{let no=Nt(t.duration,d),ne=()=>{h1(o,[ht,st]),i=null};i=()=>{ne(),y?.(S),z()},Ho(o,t.type,no,()=>{ne(),f?.(S),z()})})};a(r);let u={enter:()=>t.enter?l(`enter`):Promise.resolve(),leave:()=>t.leave?l(`leave`):Promise.resolve(),cancel:()=>{i?.(),i=null},update:(d,b)=>{if(!d)throw Error(`Element is required.`);o=d,u.cancel(),a(b)}};return t.appear&&u.enter(),u}var Vo=0;function Ho(o,r,t,e){let n=o._motionEndId=++Vo,i=()=>{n===o._motionEndId&&e()};if(t!=null)return setTimeout(i,t);let{type:s,timeout:a,count:l}=$o(o,r);if(!s){e();return}let u=s+`end`,d=0,b=()=>{o.removeEventListener(u,m,!0),i()},m=f=>{f.target===o&&++d>=l&&b()};o.addEventListener(u,m,{capture:!0,once:!0}),setTimeout(()=>{d<l&&b()},a+1)}var jo=[`*`];function Ro(o,r){o&1&&Th(0)}var Pt=new WeakMap;function bt(o,r){if(o)switch(Pt.has(o)||Pt.set(o,{display:o.style.display,visibility:o.style.visibility,maxHeight:o.style.maxHeight,overflow:o.style.overflow}),r){case`display`:o.style.display=`none`;break;case`visibility`:o.style.visibility=`hidden`,o.style.maxHeight=`0`,o.style.overflow=`hidden`;break}}function Lt(o,r){if(!o)return;let t=Pt.get(o)??o.style;switch(r){case`display`:o.style.display=t?.display||``;break;case`visibility`:o.style.visibility=t?.visibility||``,o.style.maxHeight=t?.maxHeight||``,o.style.overflow=t?.overflow||``;break}Pt.delete(o)}var Wo=`
    .p-motion {
        display: block;
    }
`;var Uo={root:`p-motion`};var oe=(()=>{class o extends k1{name=`motion`;style=Wo;classes=Uo;static ɵfac=(()=>{let t;return function(n){return(t||(t=th(o)))(n||o)}})();static ɵprov=K({token:o,factory:o.ɵfac})}return o})();var eo=new B(`MOTION_INSTANCE`);var qo=(()=>{class o extends k{$pcMotion=k$1(eo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k$1(w,{self:!0});onAfterViewChecked(){let e=this.options()?.root||{};this.bindDirectiveInstance.setAttrs(r(r({},this.ptms([`host`,`root`])),e))}_componentStyle=k$1(oe);visible=kh(!1);mountOnEnter=kh(!0);unmountOnLeave=kh(!0);name=kh(void 0);type=kh(void 0);safe=kh(void 0);disabled=kh(!1);appear=kh(!1);enter=kh(!0);leave=kh(!0);duration=kh(void 0);hideStrategy=kh(`display`);enterFromClass=kh(void 0);enterToClass=kh(void 0);enterActiveClass=kh(void 0);leaveFromClass=kh(void 0);leaveToClass=kh(void 0);leaveActiveClass=kh(void 0);options=kh({});onBeforeEnter=Lhe();onEnter=Lhe();onAfterEnter=Lhe();onEnterCancelled=Lhe();onBeforeLeave=Lhe();onLeave=Lhe();onAfterLeave=Lhe();onLeaveCancelled=Lhe();motionOptions=xu(()=>{let t=this.options();return{name:t.name??this.name(),type:t.type??this.type(),safe:t.safe??this.safe(),disabled:t.disabled??this.disabled(),appear:!1,enter:t.enter??this.enter(),leave:t.leave??this.leave(),duration:t.duration??this.duration(),enterClass:{from:t.enterClass?.from??(t.name?void 0:this.enterFromClass()),to:t.enterClass?.to??(t.name?void 0:this.enterToClass()),active:t.enterClass?.active??(t.name?void 0:this.enterActiveClass())},leaveClass:{from:t.leaveClass?.from??(t.name?void 0:this.leaveFromClass()),to:t.leaveClass?.to??(t.name?void 0:this.leaveToClass()),active:t.leaveClass?.active??(t.name?void 0:this.leaveActiveClass())},onBeforeEnter:t.onBeforeEnter??this.handleBeforeEnter,onEnter:t.onEnter??this.handleEnter,onAfterEnter:t.onAfterEnter??this.handleAfterEnter,onEnterCancelled:t.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:t.onBeforeLeave??this.handleBeforeLeave,onLeave:t.onLeave??this.handleLeave,onAfterLeave:t.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:t.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;rendered=ie(!1);handleBeforeEnter=t=>!this.destroyed&&this.onBeforeEnter.emit(t);handleEnter=t=>!this.destroyed&&this.onEnter.emit(t);handleAfterEnter=t=>!this.destroyed&&this.onAfterEnter.emit(t);handleEnterCancelled=t=>!this.destroyed&&this.onEnterCancelled.emit(t);handleBeforeLeave=t=>!this.destroyed&&this.onBeforeLeave.emit(t);handleLeave=t=>!this.destroyed&&this.onLeave.emit(t);handleAfterLeave=t=>!this.destroyed&&this.onAfterLeave.emit(t);handleLeaveCancelled=t=>!this.destroyed&&this.onLeaveCancelled.emit(t);constructor(){super(),Vi(()=>{let t=this.hideStrategy();this.isInitialMount?(bt(this.$el,t),this.rendered.set(this.visible()&&this.mountOnEnter()||!this.mountOnEnter())):this.visible()&&!this.rendered()&&(bt(this.$el,t),this.rendered.set(!0))}),Vi(()=>{this.motion||(this.motion=ee(this.$el,this.motionOptions()))}),Uhe(async()=>{if(!this.$el)return;let t=this.isInitialMount&&this.visible()&&this.appear(),e=this.hideStrategy();this.visible()?(await IEe(),Lt(this.$el,e),(t||!this.isInitialMount)&&(this.applyMotionDuration(`enter`),this.motion?.enter())):this.isInitialMount||(await IEe(),this.applyMotionDuration(`leave`),this.motion?.leave()?.then(async()=>{this.$el&&!this.cancelled&&!this.visible()&&(bt(this.$el,e),this.unmountOnLeave()&&(await IEe(),this.cancelled||this.rendered.set(!1)))})),this.isInitialMount=!1})}applyMotionDuration(t){let e=Oe$1(this.motionOptions),n=Nt(e.duration,t);if(n==null||!this.$el)return;let i=this.$el,s=`${n}ms`;e.type===`transition`?i.style.transitionDuration=s:i.style.animationDuration=s}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,Lt(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static ɵfac=function(e){return new(e||o)};static ɵcmp=la({type:o,selectors:[[`p-motion`]],hostVars:2,hostBindings:function(e,n){e&2&&Z5(n.cx(`root`))},inputs:{visible:[1,`visible`],mountOnEnter:[1,`mountOnEnter`],unmountOnLeave:[1,`unmountOnLeave`],name:[1,`name`],type:[1,`type`],safe:[1,`safe`],disabled:[1,`disabled`],appear:[1,`appear`],enter:[1,`enter`],leave:[1,`leave`],duration:[1,`duration`],hideStrategy:[1,`hideStrategy`],enterFromClass:[1,`enterFromClass`],enterToClass:[1,`enterToClass`],enterActiveClass:[1,`enterActiveClass`],leaveFromClass:[1,`leaveFromClass`],leaveToClass:[1,`leaveToClass`],leaveActiveClass:[1,`leaveActiveClass`],options:[1,`options`]},outputs:{onBeforeEnter:`onBeforeEnter`,onEnter:`onEnter`,onAfterEnter:`onAfterEnter`,onEnterCancelled:`onEnterCancelled`,onBeforeLeave:`onBeforeLeave`,onLeave:`onLeave`,onAfterLeave:`onAfterLeave`,onLeaveCancelled:`onLeaveCancelled`},features:[m$([oe,{provide:eo,useExisting:o},{provide:R,useExisting:o}]),ZU([w]),pR],ngContentSelectors:jo,decls:1,vars:1,template:function(e,n){e&1&&(Ih(),y5(0,Ro,1,0)),e&2&&v5(n.rendered()?0:-1)},dependencies:[jh,kt],encapsulation:2,changeDetection:1})}return o})();var oo=new B(`MOTION_DIRECTIVE_INSTANCE`);var Is=(()=>{class o extends k{$pcMotionDirective=k$1(oo,{optional:!0,skipSelf:!0})??void 0;visible=kh(!1,{alias:`pMotion`});name=kh(void 0,{alias:`pMotionName`});type=kh(void 0,{alias:`pMotionType`});safe=kh(void 0,{alias:`pMotionSafe`});disabled=kh(!1,{alias:`pMotionDisabled`});appear=kh(!1,{alias:`pMotionAppear`});enter=kh(!0,{alias:`pMotionEnter`});leave=kh(!0,{alias:`pMotionLeave`});duration=kh(void 0,{alias:`pMotionDuration`});hideStrategy=kh(`display`,{alias:`pMotionHideStrategy`});enterFromClass=kh(void 0,{alias:`pMotionEnterFromClass`});enterToClass=kh(void 0,{alias:`pMotionEnterToClass`});enterActiveClass=kh(void 0,{alias:`pMotionEnterActiveClass`});leaveFromClass=kh(void 0,{alias:`pMotionLeaveFromClass`});leaveToClass=kh(void 0,{alias:`pMotionLeaveToClass`});leaveActiveClass=kh(void 0,{alias:`pMotionLeaveActiveClass`});options=kh({},{alias:`pMotionOptions`});onBeforeEnter=Lhe({alias:`pMotionOnBeforeEnter`});onEnter=Lhe({alias:`pMotionOnEnter`});onAfterEnter=Lhe({alias:`pMotionOnAfterEnter`});onEnterCancelled=Lhe({alias:`pMotionOnEnterCancelled`});onBeforeLeave=Lhe({alias:`pMotionOnBeforeLeave`});onLeave=Lhe({alias:`pMotionOnLeave`});onAfterLeave=Lhe({alias:`pMotionOnAfterLeave`});onLeaveCancelled=Lhe({alias:`pMotionOnLeaveCancelled`});motionOptions=xu(()=>{let t=this.options()??{};return{name:t.name??this.name(),type:t.type??this.type(),safe:t.safe??this.safe(),disabled:t.disabled??this.disabled(),appear:!1,enter:t.enter??this.enter(),leave:t.leave??this.leave(),duration:t.duration??this.duration(),enterClass:{from:t.enterClass?.from??(t.name?void 0:this.enterFromClass()),to:t.enterClass?.to??(t.name?void 0:this.enterToClass()),active:t.enterClass?.active??(t.name?void 0:this.enterActiveClass())},leaveClass:{from:t.leaveClass?.from??(t.name?void 0:this.leaveFromClass()),to:t.leaveClass?.to??(t.name?void 0:this.leaveToClass()),active:t.leaveClass?.active??(t.name?void 0:this.leaveActiveClass())},onBeforeEnter:t.onBeforeEnter??this.handleBeforeEnter,onEnter:t.onEnter??this.handleEnter,onAfterEnter:t.onAfterEnter??this.handleAfterEnter,onEnterCancelled:t.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:t.onBeforeLeave??this.handleBeforeLeave,onLeave:t.onLeave??this.handleLeave,onAfterLeave:t.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:t.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;handleBeforeEnter=t=>!this.destroyed&&this.onBeforeEnter.emit(t);handleEnter=t=>!this.destroyed&&this.onEnter.emit(t);handleAfterEnter=t=>!this.destroyed&&this.onAfterEnter.emit(t);handleEnterCancelled=t=>!this.destroyed&&this.onEnterCancelled.emit(t);handleBeforeLeave=t=>!this.destroyed&&this.onBeforeLeave.emit(t);handleLeave=t=>!this.destroyed&&this.onLeave.emit(t);handleAfterLeave=t=>!this.destroyed&&this.onAfterLeave.emit(t);handleLeaveCancelled=t=>!this.destroyed&&this.onLeaveCancelled.emit(t);constructor(){super(),Vi(()=>{this.motion||(this.motion=ee(this.$el,this.motionOptions()))}),Uhe(()=>{if(!this.$el)return;let t=this.isInitialMount&&this.visible()&&this.appear(),e=this.hideStrategy();this.visible()?(Lt(this.$el,e),(t||!this.isInitialMount)&&(this.applyMotionDuration(`enter`),this.motion?.enter())):this.isInitialMount?bt(this.$el,e):(this.applyMotionDuration(`leave`),this.motion?.leave()?.then(()=>{this.$el&&!this.cancelled&&!this.visible()&&bt(this.$el,e)})),this.isInitialMount=!1})}applyMotionDuration(t){let e=Oe$1(this.motionOptions),n=Nt(e.duration,t);if(n==null||!this.$el)return;let i=this.$el,s=`${n}ms`;e.type===`transition`?i.style.transitionDuration=s:i.style.animationDuration=s}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,Lt(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static ɵfac=function(e){return new(e||o)};static ɵdir=Kt$1({type:o,selectors:[[``,`pMotion`,``]],inputs:{visible:[1,`pMotion`,`visible`],name:[1,`pMotionName`,`name`],type:[1,`pMotionType`,`type`],safe:[1,`pMotionSafe`,`safe`],disabled:[1,`pMotionDisabled`,`disabled`],appear:[1,`pMotionAppear`,`appear`],enter:[1,`pMotionEnter`,`enter`],leave:[1,`pMotionLeave`,`leave`],duration:[1,`pMotionDuration`,`duration`],hideStrategy:[1,`pMotionHideStrategy`,`hideStrategy`],enterFromClass:[1,`pMotionEnterFromClass`,`enterFromClass`],enterToClass:[1,`pMotionEnterToClass`,`enterToClass`],enterActiveClass:[1,`pMotionEnterActiveClass`,`enterActiveClass`],leaveFromClass:[1,`pMotionLeaveFromClass`,`leaveFromClass`],leaveToClass:[1,`pMotionLeaveToClass`,`leaveToClass`],leaveActiveClass:[1,`pMotionLeaveActiveClass`,`leaveActiveClass`],options:[1,`pMotionOptions`,`options`]},outputs:{onBeforeEnter:`pMotionOnBeforeEnter`,onEnter:`pMotionOnEnter`,onAfterEnter:`pMotionOnAfterEnter`,onEnterCancelled:`pMotionOnEnterCancelled`,onBeforeLeave:`pMotionOnBeforeLeave`,onLeave:`pMotionOnLeave`,onAfterLeave:`pMotionOnAfterLeave`,onLeaveCancelled:`pMotionOnLeaveCancelled`},features:[m$([oe,{provide:oo,useExisting:o},{provide:R,useExisting:o}]),pR]})}return o})();var Ts=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=Yi({type:o});static ɵinj=Do$1({imports:[qo]})}return o})();export{pt as _,R as a,yi as b,Xe as c,_t as d,as as f,kt as g,k as h,Oe as i,Yt as l,hn as m,Ge as n,Ts as o,bn as p,Is as r,Ue as s,$e as t,_i as u,qo as v,w as y};