import{t as r}from"./chunk-C9yOwMO6.js";import{$ as Oi,$n as sR,An as mh,At as X8,B as Kf,Ct as V$,D as H_e,E as Gt,En as lR,Et as W_e,F as JU,Ft as Y_e,G as MU,Gn as qpe,Gt as aH,I as K,K as M_e,Kn as rR,L as KB,Lt as ZA,N as JC,O as I0,Pn as nR,Pt as YP,Q as Oh,Qn as sH,Qt as d1,R as KP,Rt as ZU,Ut as _n,Vt as _he,W as Lr,Wn as qi,Wt as aEe,Xn as sEe,Xt as cG,Zt as cH,_t as The,an as eR,at as QP,bn as k,br as yh,bt as Ul,c as At,cn as h5,cr as vh,ct as R0,dt as SR,er as se,g as D0,gr as xe$1,gt as Th,hn as iR,ht as Te$1,i as A0,ir as uR,j as J5,k as Io,l as B,ln as hh,lr as w0,m as C0,mt as T0,n as $5,pr as x5,pt as Su,q as Me$1,qt as bh,rt as Q5,st as Qf,tt as Pe$1,ut as Ru,xr as z_e,yr as yR,yt as U_e,z as K_e,zt as Z_e}from"./main-QXIKUO2F.js";import{a as b,c as ht,l as qt,o as bt$1,r as Gt$1,t as At$1,u as yt}from"./chunk-YOtBFCyM.js";var ue=(()=>{class t extends At$1{autofocus=!1;focused=!1;platformId=k(Lr);document=k(xe$1);host=k(_n);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute(`autofocus`):this.host.nativeElement.setAttribute(`autofocus`,!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){qpe(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=bt$1.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static ɵfac=(()=>{let e;return function(o){return(e||(e=Qf(t)))(o||t)}})();static ɵdir=Gt({type:t,selectors:[[``,`pAutoFocus`,``]],inputs:{autofocus:[0,`pAutoFocus`,`autofocus`]},features:[ZA]})}return t})();var we=`
    
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
`;var _e={root:({instance:t})=>{let i=typeof t.value==`function`?t.value():t.value,e=typeof t.size==`function`?t.size():t.size,n=typeof t.badgeSize==`function`?t.badgeSize():t.badgeSize,o=typeof t.severity==`function`?t.severity():t.severity;return[`p-badge p-component`,{"p-badge-circle":Pe$1(i)&&String(i).length===1,"p-badge-dot":Ul(i),"p-badge-sm":e===`small`||n===`small`,"p-badge-lg":e===`large`||n===`large`,"p-badge-xl":e===`xlarge`||n===`xlarge`,"p-badge-info":o===`info`,"p-badge-success":o===`success`,"p-badge-warn":o===`warn`,"p-badge-danger":o===`danger`,"p-badge-secondary":o===`secondary`,"p-badge-contrast":o===`contrast`}]}};var pe=(()=>{class t extends d1{name=`badge`;style=we;classes=_e;static ɵfac=(()=>{let e;return function(o){return(e||(e=Qf(t)))(o||t)}})();static ɵprov=K({token:t,factory:t.ɵfac})}return t})();var be=new B(`BADGE_INSTANCE`);var Bt=(()=>{class t extends At$1{componentName=`Badge`;$pcBadge=k(be,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k(qt,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=Th();badgeSize=Th();size=Th();severity=Th();value=Th();badgeDisabled=Th(!1,{transform:Ru});_componentStyle=k(pe);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static ɵfac=(()=>{let e;return function(o){return(e||(e=Qf(t)))(o||t)}})();static ɵcmp=hh({type:t,selectors:[[`p-badge`]],hostVars:5,hostBindings:function(n,o){n&2&&(mh(`data-p`,o.dataP),x5(o.cn(o.cx(`root`),o.styleClass())),yR(`display`,o.badgeDisabled()?`none`:null))},inputs:{styleClass:[1,`styleClass`],badgeSize:[1,`badgeSize`],size:[1,`size`],severity:[1,`severity`],value:[1,`value`],badgeDisabled:[1,`badgeDisabled`]},features:[Q5([pe,{provide:be,useExisting:t},{provide:yt,useExisting:t}]),MU([qt]),ZA],decls:1,vars:1,template:function(n,o){n&1&&$5(0),n&2&&SR(o.value())},dependencies:[Oh,aEe,Gt$1],encapsulation:2})}return t})();var ge=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=qi({type:t});static ɵinj=Io({imports:[Bt,aEe,aEe]})}return t})();var Ae=[`*`];var Le={root:`p-fluid`};var he=(()=>{class t extends d1{name=`fluid`;classes=Le;static ɵfac=(()=>{let e;return function(o){return(e||(e=Qf(t)))(o||t)}})();static ɵprov=K({token:t,factory:t.ɵfac})}return t})();var fe=new B(`FLUID_INSTANCE`);var me=(()=>{class t extends At$1{componentName=`Fluid`;$pcFluid=k(fe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k(qt,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}_componentStyle=k(he);static ɵfac=(()=>{let e;return function(o){return(e||(e=Qf(t)))(o||t)}})();static ɵcmp=hh({type:t,selectors:[[`p-fluid`]],hostVars:2,hostBindings:function(n,o){n&2&&x5(o.cx(`root`))},features:[Q5([he,{provide:fe,useExisting:t},{provide:yt,useExisting:t}]),MU([qt]),ZA],ngContentSelectors:Ae,decls:1,vars:0,template:function(n,o){n&1&&(uR(),lR(0))},dependencies:[Oh],encapsulation:2})}return t})();var Pe=[`*`];var Fe=`
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
`;var ve=(()=>{class t extends d1{name=`baseicon`;css=Fe;static ɵfac=(()=>{let e;return function(o){return(e||(e=Qf(t)))(o||t)}})();static ɵprov=K({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var ut=(()=>{class t extends At$1{spin=!1;_componentStyle=k(ve);getClassNames(){return b(`p-icon`,{"p-icon-spin":this.spin})}static ɵfac=(()=>{let e;return function(o){return(e||(e=Qf(t)))(o||t)}})();static ɵcmp=hh({type:t,selectors:[[`ng-component`]],hostAttrs:[`width`,`14`,`height`,`14`,`viewBox`,`0 0 14 14`,`fill`,`none`,`xmlns`,`http://www.w3.org/2000/svg`],hostVars:2,hostBindings:function(n,o){n&2&&x5(o.getClassNames())},inputs:{spin:[2,`spin`,`spin`,Ru]},features:[Q5([ve]),ZA],ngContentSelectors:Pe,decls:1,vars:0,template:function(n,o){n&1&&(uR(),lR(0))},encapsulation:2})}return t})();var ye=(()=>{class t extends ut{pathId;onInit(){this.pathId=`url(#`+ht()+`)`}static ɵfac=(()=>{let e;return function(o){return(e||(e=Qf(t)))(o||t)}})();static ɵcmp=hh({type:t,selectors:[[``,`data-p-icon`,`spinner`]],features:[ZA],decls:5,vars:2,consts:[[`d`,`M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z`,`fill`,`currentColor`],[3,`id`],[`width`,`14`,`height`,`14`,`fill`,`white`]],template:function(n,o){n&1&&(JC(),I0(0,`g`),rR(1,`path`,0),T0(),I0(2,`defs`)(3,`clipPath`,1),rR(4,`rect`,2),T0()()),n&2&&(mh(`clip-path`,o.pathId),KB(3),sR(`id`,o.pathId))},encapsulation:2,changeDetection:1})}return t})();var mn=(()=>{class t extends ut{static ɵfac=(()=>{let e;return function(o){return(e||(e=Qf(t)))(o||t)}})();static ɵcmp=hh({type:t,selectors:[[``,`data-p-icon`,`times`]],features:[ZA],decls:1,vars:0,consts:[[`d`,`M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z`,`fill`,`currentColor`]],template:function(n,o){n&1&&(JC(),rR(0,`path`,0))},encapsulation:2,changeDetection:1})}return t})();var Oe=`
    
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
`;var ze={root:`p-ink`};var ke=(()=>{class t extends d1{name=`ripple`;style=Oe;classes=ze;static ɵfac=(()=>{let e;return function(o){return(e||(e=Qf(t)))(o||t)}})();static ɵprov=K({token:t,factory:t.ɵfac})}return t})();var xe=(()=>{class t extends At$1{componentName=`Ripple`;zone=k(Te$1);_componentStyle=k(ke);animationListener;mouseDownListener;timeout;constructor(){super(),Oi(()=>{qpe(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,`mousedown`,this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display===`none`)return;if(!this.$unstyled()&&YP(n,`p-ink-active`),n.setAttribute(`data-p-ink-active`,`false`),!U_e(n)&&!z_e(n)){let h=Math.max(M_e(this.el.nativeElement),cG(this.el.nativeElement));n.style.height=h+`px`,n.style.width=h+`px`}let o=H_e(this.el.nativeElement),s=e.pageX-o.left+this.document.body.scrollTop-z_e(n)/2,a=e.pageY-o.top+this.document.body.scrollLeft-U_e(n)/2;this.renderer.setStyle(n,`top`,a+`px`),this.renderer.setStyle(n,`left`,s+`px`),!this.$unstyled()&&KP(n,`p-ink-active`),n.setAttribute(`data-p-ink-active`,`true`),this.timeout=setTimeout(()=>{let h=this.getInk();h&&(!this.$unstyled()&&YP(h,`p-ink-active`),h.setAttribute(`data-p-ink-active`,`false`))},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className==`string`&&e[n].className.indexOf(`p-ink`)!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&YP(e,`p-ink-active`),e.setAttribute(`data-p-ink-active`,`false`))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&YP(e.currentTarget,`p-ink-active`),e.currentTarget.setAttribute(`data-p-ink-active`,`false`)}create(){let e=this.renderer.createElement(`span`);this.renderer.addClass(e,`p-ink`),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,`data-p-ink`,`true`),this.renderer.setAttribute(e,`data-p-ink-active`,`false`),this.renderer.setAttribute(e,`aria-hidden`,`true`),this.renderer.setAttribute(e,`role`,`presentation`),this.animationListener||(this.animationListener=this.renderer.listen(e,`animationend`,this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Y_e(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static ɵfac=function(n){return new(n||t)};static ɵdir=Gt({type:t,selectors:[[``,`pRipple`,``]],hostAttrs:[1,`p-ripple`],features:[Q5([ke]),ZA]})}return t})();var Me=`
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
`;var $e=[`content`];var je=[`loadingicon`];var Ue=[`icon`];var Ve=[`*`];var De=(t,i)=>({class:t,pt:i});function He(t,i){t&1&&iR(0)}function Re(t,i){if(t&1&&yh(0,`span`,7),t&2){let e=h5(3);x5(e.cn(e.cx(`loadingIcon`),`pi-spin`,e.loadingIcon||e.buttonProps?.loadingIcon)),nR(`pBind`,e.ptm(`loadingIcon`)),mh(`aria-hidden`,!0)}}function Qe(t,i){if(t&1&&(JC(),yh(0,`svg`,8)),t&2){let e=h5(3);x5(e.cn(e.cx(`loadingIcon`),e.cx(`spinnerIcon`))),nR(`pBind`,e.ptm(`loadingIcon`))(`spin`,!0),mh(`aria-hidden`,!0)}}function qe(t,i){if(t&1&&(C0(0),eR(1,Re,1,4,`span`,3)(2,Qe,1,5,`svg`,6),D0()),t&2){let e=h5(2);KB(),nR(`ngIf`,e.loadingIcon||e.buttonProps?.loadingIcon),KB(),nR(`ngIf`,!(e.loadingIcon||e.buttonProps?.loadingIcon))}}function Ge(t,i){}function We(t,i){if(t&1&&eR(0,Ge,0,0,`ng-template`,9),t&2){let e=h5(2);nR(`ngIf`,e.loadingIconTemplate||e._loadingIconTemplate)}}function Ze(t,i){if(t&1&&(C0(0),eR(1,qe,3,2,`ng-container`,2)(2,We,1,1,null,5),D0()),t&2){let e=h5();KB(),nR(`ngIf`,!e.loadingIconTemplate&&!e._loadingIconTemplate),KB(),nR(`ngTemplateOutlet`,e.loadingIconTemplate||e._loadingIconTemplate)(`ngTemplateOutletContext`,J5(3,De,e.cx(`loadingIcon`),e.ptm(`loadingIcon`)))}}function Xe(t,i){if(t&1&&yh(0,`span`,7),t&2){let e=h5(2);x5(e.cn(e.cx(`icon`),e.icon||e.buttonProps?.icon)),nR(`pBind`,e.ptm(`icon`)),mh(`data-p`,e.dataIconP)}}function Ye(t,i){}function Je(t,i){if(t&1&&eR(0,Ye,0,0,`ng-template`,9),t&2){let e=h5(2);nR(`ngIf`,!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Ke(t,i){if(t&1&&(C0(0),eR(1,Xe,1,4,`span`,3)(2,Je,1,1,null,5),D0()),t&2){let e=h5();KB(),nR(`ngIf`,(e.icon||e.buttonProps?.icon)&&!e.iconTemplate&&!e._iconTemplate),KB(),nR(`ngTemplateOutlet`,e.iconTemplate||e._iconTemplate)(`ngTemplateOutletContext`,J5(3,De,e.cx(`icon`),e.ptm(`icon`)))}}function to(t,i){if(t&1&&(Kf(0,`span`,7),$5(1),w0()),t&2){let e=h5();x5(e.cx(`label`)),nR(`pBind`,e.ptm(`label`)),mh(`aria-hidden`,(e.icon||e.buttonProps?.icon)&&!(e.label||e.buttonProps?.label))(`data-p`,e.dataLabelP),KB(),SR(e.label||e.buttonProps?.label)}}function eo(t,i){if(t&1&&yh(0,`p-badge`,10),t&2){let e=h5();nR(`value`,e.badge||e.buttonProps?.badge)(`severity`,e.badgeSeverity||e.buttonProps?.badgeSeverity)(`pt`,e.ptm(`pcBadge`))(`unstyled`,e.unstyled())}}var oo={root:({instance:t})=>[`p-button p-component`,{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos===`top`||t.iconPos===`bottom`)&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant===`text`||t.buttonProps?.text||t.buttonProps?.variant===`text`,"p-button-outlined":t.outlined||t.variant===`outlined`||t.buttonProps?.outlined||t.buttonProps?.variant===`outlined`,"p-button-sm":t.size===`small`||t.buttonProps?.size===`small`,"p-button-lg":t.size===`large`||t.buttonProps?.size===`large`,"p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:`p-button-loading-icon`,icon:({instance:t})=>[`p-button-icon`,{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos===`left`||t.buttonProps?.iconPos===`left`)&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos===`right`||t.buttonProps?.iconPos===`right`)&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos===`top`||t.buttonProps?.iconPos===`top`)&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos===`bottom`||t.buttonProps?.iconPos===`bottom`)&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx(`icon`)).filter(([,i])=>!!i).reduce((i,[e])=>i+` ${e}`,`p-button-loading-icon`),label:`p-button-label`};var Ie=(()=>{class t extends d1{name=`button`;style=Me;classes=oo;static ɵfac=(()=>{let e;return function(o){return(e||(e=Qf(t)))(o||t)}})();static ɵprov=K({token:t,factory:t.ɵfac})}return t})();var Ee=new B(`BUTTON_INSTANCE`);var ii=(()=>{class t extends At$1{componentName=`Button`;hostName=``;$pcButton=k(Ee,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k(qt,{self:!0});_componentStyle=k(Ie);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}type=`button`;badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity=`secondary`;ariaLabel;autofocus;iconPos=`left`;icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=Th(void 0,{transform:Ru});onClick=new At;onFocus=new At;onBlur=new At;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=k(me,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case`content`:this._contentTemplate=e.template;break;case`icon`:this._iconTemplate=e.template;break;case`loadingicon`:this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant===`outlined`,text:this.text||this.variant===`text`,link:this.link,vertical:(this.iconPos===`top`||this.iconPos===`bottom`)&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static ɵfac=(()=>{let e;return function(o){return(e||(e=Qf(t)))(o||t)}})();static ɵcmp=hh({type:t,selectors:[[`p-button`]],contentQueries:function(n,o,s){if(n&1&&bh(s,$e,5)(s,je,5)(s,Ue,5)(s,sEe,4),n&2){let a;A0(a=R0())&&(o.contentTemplate=a.first),A0(a=R0())&&(o.loadingIconTemplate=a.first),A0(a=R0())&&(o.iconTemplate=a.first),A0(a=R0())&&(o.templates=a)}},inputs:{hostName:`hostName`,type:`type`,badge:`badge`,disabled:[2,`disabled`,`disabled`,Ru],raised:[2,`raised`,`raised`,Ru],rounded:[2,`rounded`,`rounded`,Ru],text:[2,`text`,`text`,Ru],plain:[2,`plain`,`plain`,Ru],outlined:[2,`outlined`,`outlined`,Ru],link:[2,`link`,`link`,Ru],tabindex:[2,`tabindex`,`tabindex`,V$],size:`size`,variant:`variant`,style:`style`,styleClass:`styleClass`,badgeClass:`badgeClass`,badgeSeverity:`badgeSeverity`,ariaLabel:`ariaLabel`,autofocus:[2,`autofocus`,`autofocus`,Ru],iconPos:`iconPos`,icon:`icon`,label:`label`,loading:[2,`loading`,`loading`,Ru],loadingIcon:`loadingIcon`,severity:`severity`,buttonProps:`buttonProps`,fluid:[1,`fluid`]},outputs:{onClick:`onClick`,onFocus:`onFocus`,onBlur:`onBlur`},features:[Q5([Ie,{provide:Ee,useExisting:t},{provide:yt,useExisting:t}]),MU([qt]),ZA],ngContentSelectors:Ve,decls:7,vars:17,consts:[[`pRipple`,``,3,`click`,`focus`,`blur`,`ngStyle`,`disabled`,`pAutoFocus`,`pBind`],[4,`ngTemplateOutlet`],[4,`ngIf`],[3,`class`,`pBind`,4,`ngIf`],[3,`value`,`severity`,`pt`,`unstyled`,4,`ngIf`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`spinner`,3,`class`,`pBind`,`spin`,4,`ngIf`],[3,`pBind`],[`data-p-icon`,`spinner`,3,`pBind`,`spin`],[3,`ngIf`],[3,`value`,`severity`,`pt`,`unstyled`]],template:function(n,o){n&1&&(uR(),Kf(0,`button`,0),vh(`click`,function(a){return o.onClick.emit(a)})(`focus`,function(a){return o.onFocus.emit(a)})(`blur`,function(a){return o.onBlur.emit(a)}),lR(1),eR(2,He,1,0,`ng-container`,1)(3,Ze,3,6,`ng-container`,2)(4,Ke,3,6,`ng-container`,2)(5,to,2,6,`span`,3)(6,eo,1,4,`p-badge`,4),w0()),n&2&&(x5(o.cn(o.cx(`root`),o.styleClass,o.buttonProps?.styleClass)),nR(`ngStyle`,o.style||o.buttonProps?.style)(`disabled`,o.disabled||o.loading||o.buttonProps?.disabled)(`pAutoFocus`,o.autofocus||o.buttonProps?.autofocus)(`pBind`,o.ptm(`root`)),mh(`type`,o.type||o.buttonProps?.type)(`aria-label`,o.ariaLabel||o.buttonProps?.ariaLabel)(`tabindex`,o.tabindex||o.buttonProps?.tabindex)(`data-p`,o.dataP)(`data-p-disabled`,o.disabled||o.loading||o.buttonProps?.disabled)(`data-p-severity`,o.severity||o.buttonProps?.severity),KB(2),nR(`ngTemplateOutlet`,o.contentTemplate||o._contentTemplate),KB(),nR(`ngIf`,o.loading||o.buttonProps?.loading),KB(),nR(`ngIf`,!(o.loading||o.buttonProps?.loading)),KB(),nR(`ngIf`,!o.contentTemplate&&!o._contentTemplate&&(o.label||o.buttonProps?.label)),KB(),nR(`ngIf`,!o.contentTemplate&&!o._contentTemplate&&(o.badge||o.buttonProps?.badge)))},dependencies:[Oh,sH,cH,aH,xe,ue,ye,ge,Bt,aEe,qt],encapsulation:2})}return t})();var Tt=`animation`;var St=`transition`;function no(t){return t?t.disabled||!!(t.safe&&W_e()):!1}function io(t,i){return t?r(r({},t),Object.entries(i).reduce((e,[n,o])=>(e[n]=t[n]??o,e),{})):i}function ro(t){let{name:i,enterClass:e,leaveClass:n}=t||{};return{enter:{from:e?.from||`${i}-enter-from`,to:e?.to||`${i}-enter-to`,active:e?.active||`${i}-enter-active`},leave:{from:n?.from||`${i}-leave-from`,to:n?.to||`${i}-leave-to`,active:n?.active||`${i}-leave-active`}}}function ao(t){return{enter:{onBefore:t?.onBeforeEnter,onStart:t?.onEnter,onAfter:t?.onAfterEnter,onCancelled:t?.onEnterCancelled},leave:{onBefore:t?.onBeforeLeave,onStart:t?.onLeave,onAfter:t?.onAfterLeave,onCancelled:t?.onLeaveCancelled}}}function so(t,i){let e=window.getComputedStyle(t),n=D=>{let R=e[`${D}Delay`],_=e[`${D}Duration`];return[R.split(`, `).map(X8),_.split(`, `).map(X8)]},[o,s]=n(St),[a,h]=n(Tt),T=Math.max(...s.map((D,R)=>D+o[R])),E=Math.max(...h.map((D,R)=>D+a[R])),p,k=0,S=0;return i===`transition`?T>0&&(p=St,k=T,S=s.length):i===`animation`?E>0&&(p=Tt,k=E,S=h.length):(k=Math.max(T,E),p=k>0?T>E?St:Tt:void 0,S=p?p===`transition`?s.length:h.length:0),{type:p,timeout:k,count:S}}function ct(t,i){return typeof t==`number`?t:typeof t==`object`&&t[i]!=null?t[i]:null}function lo(t,i=!0,e=!1){if(!i&&!e)return;let n=QP(t);i&&Z_e(t,`--pui-motion-height`,n.height+`px`),e&&Z_e(t,`--pui-motion-width`,n.width+`px`)}var uo={name:`p`,safe:!0,disabled:!1,enter:!0,leave:!0,autoHeight:!0,autoWidth:!1};function wt(t,i){if(!t)throw Error(`Element is required.`);let e={},n=!1,o={},s=null,a={},h=p=>{if(Object.assign(e,io(p,uo)),!e.enter&&!e.leave)throw Error(`Enter or leave must be true.`);a=ao(e),n=no(e),o=ro(e),s=null},T=async p=>{s?.();let{onBefore:k,onStart:S,onAfter:D,onCancelled:R}=a[p]||{},_={element:t};if(n){k?.(_),S?.(_),D?.(_);return}let{from:Nt,active:At,to:Lt}=o[p]||{};return lo(t,e.autoHeight,e.autoWidth),k?.(_),KP(t,Nt),KP(t,At),t.offsetHeight,YP(t,Nt),KP(t,Lt),S?.(_),new Promise(Pt=>{let Se=ct(e.duration,p),Ft=()=>{YP(t,[Lt,At]),s=null};s=()=>{Ft(),R?.(_),Pt()},po(t,e.type,Se,()=>{Ft(),D?.(_),Pt()})})};h(i);let E={enter:()=>e.enter?T(`enter`):Promise.resolve(),leave:()=>e.leave?T(`leave`):Promise.resolve(),cancel:()=>{s?.(),s=null},update:(p,k)=>{if(!p)throw Error(`Element is required.`);t=p,E.cancel(),h(k)}};return e.appear&&E.enter(),E}var co=0;function po(t,i,e,n){let o=t._motionEndId=++co,s=()=>{o===t._motionEndId&&n()};if(e!=null)return setTimeout(s,e);let{type:a,timeout:h,count:T}=so(t,i);if(!a){n();return}let E=a+`end`,p=0,k=()=>{t.removeEventListener(E,S,!0),s()},S=D=>{D.target===t&&++p>=T&&k()};t.addEventListener(E,S,{capture:!0,once:!0}),setTimeout(()=>{p<T&&k()},h+1)}var bo=[`*`];function go(t,i){t&1&&lR(0)}var pt=new WeakMap;function et(t,i){if(t)switch(pt.has(t)||pt.set(t,{display:t.style.display,visibility:t.style.visibility,maxHeight:t.style.maxHeight,overflow:t.style.overflow}),i){case`display`:t.style.display=`none`;break;case`visibility`:t.style.visibility=`hidden`,t.style.maxHeight=`0`,t.style.overflow=`hidden`;break}}function bt(t,i){if(!t)return;let e=pt.get(t)??t.style;switch(i){case`display`:t.style.display=e?.display||``;break;case`visibility`:t.style.visibility=e?.visibility||``,t.style.maxHeight=e?.maxHeight||``,t.style.overflow=e?.overflow||``;break}pt.delete(t)}var ho=`
    .p-motion {
        display: block;
    }
`;var fo={root:`p-motion`};var _t=(()=>{class t extends d1{name=`motion`;style=ho;classes=fo;static ɵfac=(()=>{let e;return function(o){return(e||(e=Qf(t)))(o||t)}})();static ɵprov=K({token:t,factory:t.ɵfac})}return t})();var Be=new B(`MOTION_INSTANCE`);var mo=(()=>{class t extends At$1{$pcMotion=k(Be,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k(qt,{self:!0});onAfterViewChecked(){let n=this.options()?.root||{};this.bindDirectiveInstance.setAttrs(r(r({},this.ptms([`host`,`root`])),n))}_componentStyle=k(_t);visible=Th(!1);mountOnEnter=Th(!0);unmountOnLeave=Th(!0);name=Th(void 0);type=Th(void 0);safe=Th(void 0);disabled=Th(!1);appear=Th(!1);enter=Th(!0);leave=Th(!0);duration=Th(void 0);hideStrategy=Th(`display`);enterFromClass=Th(void 0);enterToClass=Th(void 0);enterActiveClass=Th(void 0);leaveFromClass=Th(void 0);leaveToClass=Th(void 0);leaveActiveClass=Th(void 0);options=Th({});onBeforeEnter=_he();onEnter=_he();onAfterEnter=_he();onEnterCancelled=_he();onBeforeLeave=_he();onLeave=_he();onAfterLeave=_he();onLeaveCancelled=_he();motionOptions=Su(()=>{let e=this.options();return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;rendered=se(!1);handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),Oi(()=>{let e=this.hideStrategy();this.isInitialMount?(et(this.$el,e),this.rendered.set(this.visible()&&this.mountOnEnter()||!this.mountOnEnter())):this.visible()&&!this.rendered()&&(et(this.$el,e),this.rendered.set(!0))}),Oi(()=>{this.motion||(this.motion=wt(this.$el,this.motionOptions()))}),The(async()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(await K_e(),bt(this.$el,n),(e||!this.isInitialMount)&&(this.applyMotionDuration(`enter`),this.motion?.enter())):this.isInitialMount||(await K_e(),this.applyMotionDuration(`leave`),this.motion?.leave()?.then(async()=>{this.$el&&!this.cancelled&&!this.visible()&&(et(this.$el,n),this.unmountOnLeave()&&(await K_e(),this.cancelled||this.rendered.set(!1)))})),this.isInitialMount=!1})}applyMotionDuration(e){let n=Me$1(this.motionOptions),o=ct(n.duration,e);if(o==null||!this.$el)return;let s=this.$el,a=`${o}ms`;n.type===`transition`?s.style.transitionDuration=a:s.style.animationDuration=a}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,bt(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static ɵfac=function(n){return new(n||t)};static ɵcmp=hh({type:t,selectors:[[`p-motion`]],hostVars:2,hostBindings:function(n,o){n&2&&x5(o.cx(`root`))},inputs:{visible:[1,`visible`],mountOnEnter:[1,`mountOnEnter`],unmountOnLeave:[1,`unmountOnLeave`],name:[1,`name`],type:[1,`type`],safe:[1,`safe`],disabled:[1,`disabled`],appear:[1,`appear`],enter:[1,`enter`],leave:[1,`leave`],duration:[1,`duration`],hideStrategy:[1,`hideStrategy`],enterFromClass:[1,`enterFromClass`],enterToClass:[1,`enterToClass`],enterActiveClass:[1,`enterActiveClass`],leaveFromClass:[1,`leaveFromClass`],leaveToClass:[1,`leaveToClass`],leaveActiveClass:[1,`leaveActiveClass`],options:[1,`options`]},outputs:{onBeforeEnter:`onBeforeEnter`,onEnter:`onEnter`,onAfterEnter:`onAfterEnter`,onEnterCancelled:`onEnterCancelled`,onBeforeLeave:`onBeforeLeave`,onLeave:`onLeave`,onAfterLeave:`onAfterLeave`,onLeaveCancelled:`onLeaveCancelled`},features:[Q5([_t,{provide:Be,useExisting:t},{provide:yt,useExisting:t}]),MU([qt]),ZA],ngContentSelectors:bo,decls:1,vars:1,template:function(n,o){n&1&&(uR(),ZU(0,go,1,0)),n&2&&JU(o.rendered()?0:-1)},dependencies:[Oh,Gt$1],encapsulation:2,changeDetection:1})}return t})();var Te=new B(`MOTION_DIRECTIVE_INSTANCE`);var xi=(()=>{class t extends At$1{$pcMotionDirective=k(Te,{optional:!0,skipSelf:!0})??void 0;visible=Th(!1,{alias:`pMotion`});name=Th(void 0,{alias:`pMotionName`});type=Th(void 0,{alias:`pMotionType`});safe=Th(void 0,{alias:`pMotionSafe`});disabled=Th(!1,{alias:`pMotionDisabled`});appear=Th(!1,{alias:`pMotionAppear`});enter=Th(!0,{alias:`pMotionEnter`});leave=Th(!0,{alias:`pMotionLeave`});duration=Th(void 0,{alias:`pMotionDuration`});hideStrategy=Th(`display`,{alias:`pMotionHideStrategy`});enterFromClass=Th(void 0,{alias:`pMotionEnterFromClass`});enterToClass=Th(void 0,{alias:`pMotionEnterToClass`});enterActiveClass=Th(void 0,{alias:`pMotionEnterActiveClass`});leaveFromClass=Th(void 0,{alias:`pMotionLeaveFromClass`});leaveToClass=Th(void 0,{alias:`pMotionLeaveToClass`});leaveActiveClass=Th(void 0,{alias:`pMotionLeaveActiveClass`});options=Th({},{alias:`pMotionOptions`});onBeforeEnter=_he({alias:`pMotionOnBeforeEnter`});onEnter=_he({alias:`pMotionOnEnter`});onAfterEnter=_he({alias:`pMotionOnAfterEnter`});onEnterCancelled=_he({alias:`pMotionOnEnterCancelled`});onBeforeLeave=_he({alias:`pMotionOnBeforeLeave`});onLeave=_he({alias:`pMotionOnLeave`});onAfterLeave=_he({alias:`pMotionOnAfterLeave`});onLeaveCancelled=_he({alias:`pMotionOnLeaveCancelled`});motionOptions=Su(()=>{let e=this.options()??{};return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),Oi(()=>{this.motion||(this.motion=wt(this.$el,this.motionOptions()))}),The(()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(bt(this.$el,n),(e||!this.isInitialMount)&&(this.applyMotionDuration(`enter`),this.motion?.enter())):this.isInitialMount?et(this.$el,n):(this.applyMotionDuration(`leave`),this.motion?.leave()?.then(()=>{this.$el&&!this.cancelled&&!this.visible()&&et(this.$el,n)})),this.isInitialMount=!1})}applyMotionDuration(e){let n=Me$1(this.motionOptions),o=ct(n.duration,e);if(o==null||!this.$el)return;let s=this.$el,a=`${o}ms`;n.type===`transition`?s.style.transitionDuration=a:s.style.animationDuration=a}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,bt(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static ɵfac=function(n){return new(n||t)};static ɵdir=Gt({type:t,selectors:[[``,`pMotion`,``]],inputs:{visible:[1,`pMotion`,`visible`],name:[1,`pMotionName`,`name`],type:[1,`pMotionType`,`type`],safe:[1,`pMotionSafe`,`safe`],disabled:[1,`pMotionDisabled`,`disabled`],appear:[1,`pMotionAppear`,`appear`],enter:[1,`pMotionEnter`,`enter`],leave:[1,`pMotionLeave`,`leave`],duration:[1,`pMotionDuration`,`duration`],hideStrategy:[1,`pMotionHideStrategy`,`hideStrategy`],enterFromClass:[1,`pMotionEnterFromClass`,`enterFromClass`],enterToClass:[1,`pMotionEnterToClass`,`enterToClass`],enterActiveClass:[1,`pMotionEnterActiveClass`,`enterActiveClass`],leaveFromClass:[1,`pMotionLeaveFromClass`,`leaveFromClass`],leaveToClass:[1,`pMotionLeaveToClass`,`leaveToClass`],leaveActiveClass:[1,`pMotionLeaveActiveClass`,`leaveActiveClass`],options:[1,`pMotionOptions`,`options`]},outputs:{onBeforeEnter:`pMotionOnBeforeEnter`,onEnter:`pMotionOnEnter`,onAfterEnter:`pMotionOnAfterEnter`,onEnterCancelled:`pMotionOnEnterCancelled`,onBeforeLeave:`pMotionOnBeforeLeave`,onLeave:`pMotionOnLeave`,onAfterLeave:`pMotionOnAfterLeave`,onLeaveCancelled:`pMotionOnLeaveCancelled`},features:[Q5([_t,{provide:Te,useExisting:t},{provide:yt,useExisting:t}]),ZA]})}return t})();var Mi=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=qi({type:t});static ɵinj=Io({imports:[mo]})}return t})();export{mo as a,xe as c,mn as i,xi as l,ii as n,ue as o,me as r,ut as s,Mi as t,ye as u};