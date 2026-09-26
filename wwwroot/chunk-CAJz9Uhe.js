import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{$t as aEe,A as Eh,An as j0,Ar as y$,B as HR,Bn as mF,C as DH,Cn as gj,Cr as wR,Dn as ie,Dt as Th,E as E5,Er as xR,Et as Te,F as Fhe,Fr as yG,Ft as Vi$1,G as Jf,Gn as oH,Gt as ZU,Hn as nD,I as G0,In as la$1,Ir as z0,It as Vk,J as K0,Jt as _5,Kn as oU,Kt as Zd,Ln as m$,Lr as zCe,M as FEe,Mn as k,Mr as y5,Mt as VEe,Nn as k1,O as ER,Or as xu,P as Fe,Pn as kh,Pr as yEe,Pt as Vhe,Q as LEe,Qn as pe,Qt as _h,R as Go$1,Rn as mD,Rt as W0,S as DG,Sn as gEe,Tn as hEe,Tr as wn$1,U as Ih,Un as oA,Vn as mR,Wt as Z5,Xn as pEe,Y as Kt,Z as L5,Zn as pR,_ as CR,_r as vG,b as D$,br as w5,bt as SH,c as AH,cn as cge,cr as th,dn as d1,dt as Ou,en as b$,er as qR,et as M5,f as Bhe,ft as PEe,g as CH,gn as em,gr as vEe,hn as e4,hr as v5,ht as Q5,i as $R,in as bR,j as F5,jn as jh,jr as y1,kt as U0,l as B,lr as u1,nn as bEe,nr as rA,nt as MR,on as c$,or as sU,ot as OEe,pr as v$,q as K,qt as _$,r as $0,rn as bG,rr as rD,s as A5,t as p,tn as b5,tr as ql$1,tt as MEe,u as BEe,un as d$,vr as vR,vt as Rt,w as DR,wr as wh,xt as SR,y as Ch,yn as fEe,z as H0,zt as WR}from"./main-IOSD5O26.js";import{_ as pt,a as R,b as yi,c as Xe,d as _t$1,f as as,g as kt$1,h as k$1,i as Oe,l as Yt,m as hn$1,s as Ue$1,u as _i,y as w}from"./chunk-mYroLZjS.js";import{a as En$1,b as wn$2,g as kn$1,h as Yt$1,i as Dn$1,l as No$1,m as Xn$1,n as Ae,o as In$1,p as U,s as Io$1,u as On,y as vt}from"./chunk-4eosx-BX.js";import{a as Zt,c as ti,i as Xt,l as ui,n as Ut,o as ai,r as Wo$1,s as ei,t as Qt}from"./chunk-7cdHutUa.js";import{i as l}from"./chunk-BQH1MTHh.js";var Mi=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`;var ki=(()=>{class i extends _t$1{static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵcmp=la$1({type:i,selectors:[[``,`data-p-icon`,`chevron-left`]],features:[pR],decls:1,vars:0,consts:[[`d`,`M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z`,`fill`,`currentColor`]],template:function(n,t){n&1&&(mD(),bR(0,`path`,0))},encapsulation:2,changeDetection:1})}return i})();var Ei=(()=>{class i extends _t$1{static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵcmp=la$1({type:i,selectors:[[``,`data-p-icon`,`chevron-right`]],features:[pR],decls:1,vars:0,consts:[[`d`,`M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z`,`fill`,`currentColor`]],template:function(n,t){n&1&&(mD(),bR(0,`path`,0))},encapsulation:2,changeDetection:1})}return i})();var Oi=(()=>{class i extends _t$1{static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵcmp=la$1({type:i,selectors:[[``,`data-p-icon`,`minus`]],features:[pR],decls:1,vars:0,consts:[[`d`,`M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z`,`fill`,`currentColor`]],template:function(n,t){n&1&&(mD(),bR(0,`path`,0))},encapsulation:2,changeDetection:1})}return i})();var Vi=(()=>{class i extends _t$1{pathId;onInit(){this.pathId=`url(#`+pt()+`)`}static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵcmp=la$1({type:i,selectors:[[``,`data-p-icon`,`times-circle`]],features:[pR],decls:5,vars:2,consts:[[`fill-rule`,`evenodd`,`clip-rule`,`evenodd`,`d`,`M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z`,`fill`,`currentColor`],[3,`id`],[`width`,`14`,`height`,`14`,`fill`,`white`]],template:function(n,t){n&1&&(mD(),U0(0,`g`),bR(1,`path`,0),$0(),U0(2,`defs`)(3,`clipPath`,1),bR(4,`rect`,2),$0()()),n&2&&(_h(`clip-path`,t.pathId),gj(3),wR(`id`,t.pathId))},encapsulation:2,changeDetection:1})}return i})();var Ge=[`*`];var Pn=[`previcon`];var Fn=[`nexticon`];var qi=[`content`];var Bn=[`prevButton`];var Ln=[`nextButton`];var Nn=[`inkbar`];var Dn=[`tabs`];function An(i,a){i&1&&ER(0)}function zn(i,a){if(i&1&&mR(0,An,1,0,`ng-container`,11),i&2){let e=M5(2);vR(`ngTemplateOutlet`,e.prevIconTemplate||e._prevIconTemplate)}}function Rn(i,a){i&1&&(mD(),Eh(0,`svg`,10))}function jn(i,a){if(i&1){let e=A5();Jf(0,`button`,9,3),wh(`click`,function(){nD(e);return rD(M5().onPrevButtonClick())}),y5(2,zn,1,1,`ng-container`)(3,Rn,1,0,`:svg:svg`,10),j0()}if(i&2){let e=M5();Z5(e.cx(`prevButton`)),vR(`pBind`,e.ptm(`prevButton`)),_h(`aria-label`,e.prevButtonAriaLabel)(`tabindex`,e.tabindex())(`data-pc-group-section`,`navigator`),gj(2),v5(e.prevIconTemplate||e._prevIconTemplate?2:3)}}function qn(i,a){i&1&&ER(0)}function Hn(i,a){if(i&1&&mR(0,qn,1,0,`ng-container`,11),i&2){let e=M5(2);vR(`ngTemplateOutlet`,e.nextIconTemplate||e._nextIconTemplate)}}function Wn(i,a){i&1&&(mD(),Eh(0,`svg`,12))}function $n(i,a){if(i&1){let e=A5();Jf(0,`button`,9,4),wh(`click`,function(){nD(e);return rD(M5().onNextButtonClick())}),y5(2,Hn,1,1,`ng-container`)(3,Wn,1,0,`:svg:svg`,12),j0()}if(i&2){let e=M5();Z5(e.cx(`nextButton`)),vR(`pBind`,e.ptm(`nextButton`)),_h(`aria-label`,e.nextButtonAriaLabel)(`tabindex`,e.tabindex())(`data-pc-group-section`,`navigator`),gj(2),v5(e.nextIconTemplate||e._nextIconTemplate?2:3)}}function Kn(i,a){i&1&&Th(0)}function Qn(i,a){i&1&&ER(0)}function Gn(i,a){if(i&1&&mR(0,Qn,1,0,`ng-container`,1),i&2){let e=M5(),n=F5(1);vR(`ngTemplateOutlet`,e.content()?e.content():n)}}var Un={root:({instance:i})=>[`p-tabs p-component`,{"p-tabs-scrollable":i.scrollable()}]};var Pi=(()=>{class i extends k1{name=`tabs`;style=Mi;classes=Un;static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵprov=K({token:i,factory:i.ɵfac})}return i})();var Fi=new B(`TABS_INSTANCE`);var Ue=(()=>{class i extends k$1{componentName=`Tabs`;$pcTabs=k(Fi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}value=Fhe(void 0);scrollable=kh(!1,{transform:Ou});lazy=kh(!1,{transform:Ou});selectOnFocus=kh(!1,{transform:Ou});showNavigators=kh(!0,{transform:Ou});tabindex=kh(0,{transform:oH});id=ie(pt(`pn_id_`));_componentStyle=k(Pi);updateValue(e){this.value.update(()=>e)}static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵcmp=la$1({type:i,selectors:[[`p-tabs`]],hostVars:3,hostBindings:function(n,t){n&2&&(_h(`id`,t.id()),Z5(t.cx(`root`)))},inputs:{value:[1,`value`],scrollable:[1,`scrollable`],lazy:[1,`lazy`],selectOnFocus:[1,`selectOnFocus`],showNavigators:[1,`showNavigators`],tabindex:[1,`tabindex`]},outputs:{value:`valueChange`},features:[m$([Pi,{provide:Fi,useExisting:i},{provide:R,useExisting:i}]),ZU([w]),pR],ngContentSelectors:Ge,decls:1,vars:0,template:function(n,t){n&1&&(Ih(),Th(0))},dependencies:[jh,kt$1],encapsulation:2})}return i})();var Zn={root:({instance:i})=>[`p-tab`,{"p-tab-active":i.active(),"p-disabled":i.disabled()}]};var Bi=(()=>{class i extends k1{name=`tab`;classes=Zn;static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵprov=K({token:i,factory:i.ɵfac})}return i})();var Xn={root:`p-tablist`,content:`p-tablist-content p-tablist-viewport`,tabList:`p-tablist-tab-list`,activeBar:`p-tablist-active-bar`,prevButton:`p-tablist-prev-button p-tablist-nav-button`,nextButton:`p-tablist-next-button p-tablist-nav-button`};var Li=(()=>{class i extends k1{name=`tablist`;classes=Xn;static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵprov=K({token:i,factory:i.ɵfac})}return i})();var Ni=new B(`TABLIST_INSTANCE`);var Ct=(()=>{class i extends k$1{componentName=`TabList`;$pcTabList=k(Ni,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=k(Zd(()=>Ue));isPrevButtonEnabled=ie(!1);isNextButtonEnabled=ie(!1);resizeObserver;showNavigators=xu(()=>this.pcTabs.showNavigators());tabindex=xu(()=>this.pcTabs.tabindex());scrollable=xu(()=>this.pcTabs.scrollable());_componentStyle=k(Li);constructor(){super(),Vi$1(()=>{this.pcTabs.value(),cge(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config?.translation?.aria?.previous}get nextButtonAriaLabel(){return this.config?.translation?.aria?.next}onAfterViewInit(){this.showNavigators()&&cge(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case`previcon`:this._prevIconTemplate=e.template;break;case`nexticon`:this._nextIconTemplate=e.template;break}})}onDestroy(){this.unbindResizeObserver()}onScroll(e){this.showNavigators()&&this.updateButtonState(),e.preventDefault()}onPrevButtonClick(){let e=this.content.nativeElement,n=bEe(e),t=Math.abs(e.scrollLeft)-n,o=t<=0?0:t;e.scrollLeft=DG(e)?-1*o:o}onNextButtonClick(){let e=this.content.nativeElement,n=bEe(e)-this.getVisibleButtonWidths(),t=e.scrollLeft+n,o=e.scrollWidth-n,r=t>=o?o:t;e.scrollLeft=DG(e)?-1*r:r}updateButtonState(){let e=this.content?.nativeElement,n=this.el?.nativeElement,{scrollWidth:t,offsetWidth:o}=e,r=Math.abs(e.scrollLeft),T=bEe(e);this.isPrevButtonEnabled.set(r!==0),this.isNextButtonEnabled.set(n.offsetWidth>=o&&Math.abs(r-t+T)>1)}updateInkBar(){let e=this.content?.nativeElement,n=this.inkbar?.nativeElement,t=this.tabs?.nativeElement,o=fEe(e,`[data-pc-name="tab"][data-p-active="true"]`);n&&(n.style.width=aEe(o)+`px`,n.style.left=vEe(o).left-vEe(t).left+`px`)}getVisibleButtonWidths(){return[this.prevButton?.nativeElement,this.nextButton?.nativeElement].reduce((t,o)=>o?t+bEe(o):t,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static ɵfac=function(n){return new(n||i)};static ɵcmp=la$1({type:i,selectors:[[`p-tablist`]],contentQueries:function(n,t,o){if(n&1&&Ch(o,Pn,4)(o,Fn,4)(o,FEe,4),n&2){let r;W0(r=G0())&&(t.prevIconTemplate=r.first),W0(r=G0())&&(t.nextIconTemplate=r.first),W0(r=G0())&&(t.templates=r)}},viewQuery:function(n,t){if(n&1&&CR(qi,5)(Bn,5)(Ln,5)(Nn,5)(Dn,5),n&2){let o;W0(o=G0())&&(t.content=o.first),W0(o=G0())&&(t.prevButton=o.first),W0(o=G0())&&(t.nextButton=o.first),W0(o=G0())&&(t.inkbar=o.first),W0(o=G0())&&(t.tabs=o.first)}},hostVars:2,hostBindings:function(n,t){n&2&&Z5(t.cx(`root`))},features:[m$([Li,{provide:Ni,useExisting:i},{provide:R,useExisting:i}]),ZU([w]),pR],ngContentSelectors:Ge,decls:9,vars:11,consts:[[`content`,``],[`tabs`,``],[`inkbar`,``],[`prevButton`,``],[`nextButton`,``],[`type`,`button`,`pRipple`,``,3,`pBind`,`class`],[3,`scroll`,`pBind`],[`role`,`tablist`,3,`pBind`],[`role`,`presentation`,3,`pBind`],[`type`,`button`,`pRipple`,``,3,`click`,`pBind`],[`data-p-icon`,`chevron-left`],[4,`ngTemplateOutlet`],[`data-p-icon`,`chevron-right`]],template:function(n,t){n&1&&(Ih(),y5(0,jn,4,7,`button`,5),Jf(1,`div`,6,0),wh(`scroll`,function(r){return t.onScroll(r)}),Jf(3,`div`,7,1),Th(5),Eh(6,`span`,8,2),j0()(),y5(8,$n,4,7,`button`,5)),n&2&&(v5(t.showNavigators()&&t.isPrevButtonEnabled()?0:-1),gj(),Z5(t.cx(`content`)),vR(`pBind`,t.ptm(`content`)),gj(2),Z5(t.cx(`tabList`)),vR(`pBind`,t.ptm(`tabList`)),gj(3),Z5(t.cx(`activeBar`)),vR(`pBind`,t.ptm(`activeBar`)),gj(2),v5(t.showNavigators()&&t.isNextButtonEnabled()?8:-1))},dependencies:[jh,AH,ki,Ei,_i,Xe,VEe,kt$1,w],encapsulation:2})}return i})();var Di=new B(`TAB_INSTANCE`);var Hi=(()=>{class i extends k$1{componentName=`Tab`;$pcTab=k(Di,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}value=Fhe();disabled=kh(!1,{transform:Ou});pcTabs=k(Zd(()=>Ue));pcTabList=k(Zd(()=>Ct));el=k(wn$1);_componentStyle=k(Bi);ripple=xu(()=>this.config.ripple());id=xu(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=xu(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=xu(()=>em(this.pcTabs.value(),this.value()));tabindex=xu(()=>this.disabled()?-1:this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(e){this.disabled()||this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(e){this.disabled()||this.changeActiveValue()}onKeyDown(e){switch(e.code){case`ArrowRight`:this.onArrowRightKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(e);break;default:break}e.stopPropagation()}onAfterViewInit(){this.bindMutationObserver()}onArrowRightKey(e){let n=this.findNextTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onHomeKey(e),e.preventDefault()}onArrowLeftKey(e){let n=this.findPrevTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let n=this.findFirstTab();this.changeFocusedTab(e,n),e.preventDefault()}onEndKey(e){let n=this.findLastTab();this.changeFocusedTab(e,n),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.findLastTab()),e.preventDefault()}onPageUpKey(e){this.scrollInView(this.findFirstTab()),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}findNextTab(e,n=!1){let t=n?e:e.nextElementSibling;return t?pEe(t,`data-p-disabled`)||pEe(t,`data-pc-section`)===`activebar`?this.findNextTab(t):t:null}findPrevTab(e,n=!1){let t=n?e:e.previousElementSibling;return t?pEe(t,`data-p-disabled`)||pEe(t,`data-pc-section`)===`activebar`?this.findPrevTab(t):t:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(e,n){hEe(n),this.scrollInView(n)}scrollInView(e){e?.scrollIntoView?.({block:`nearest`})}bindMutationObserver(){cge(this.platformId)&&(this.mutationObserver=new MutationObserver(e=>{e.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver?.disconnect()}onDestroy(){this.mutationObserver&&this.unbindMutationObserver()}static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵcmp=la$1({type:i,selectors:[[`p-tab`]],hostVars:10,hostBindings:function(n,t){n&1&&wh(`focus`,function(r){return t.onFocus(r)})(`click`,function(r){return t.onClick(r)})(`keydown`,function(r){return t.onKeyDown(r)}),n&2&&(_h(`id`,t.id())(`aria-controls`,t.ariaControls())(`role`,`tab`)(`aria-selected`,t.active())(`aria-disabled`,t.disabled())(`data-p-disabled`,t.disabled())(`data-p-active`,t.active())(`tabindex`,t.tabindex()),Z5(t.cx(`root`)))},inputs:{value:[1,`value`],disabled:[1,`disabled`]},outputs:{value:`valueChange`},features:[m$([Bi,{provide:Di,useExisting:i},{provide:R,useExisting:i}]),ZU([Xe,w]),pR],ngContentSelectors:Ge,decls:1,vars:0,template:function(n,t){n&1&&(Ih(),Th(0))},dependencies:[jh,VEe,kt$1],encapsulation:2})}return i})();var Yn={root:({instance:i})=>[`p-tabpanel`,{"p-tabpanel-active":i.active()}]};var Ai=(()=>{class i extends k1{name=`tabpanel`;classes=Yn;static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵprov=K({token:i,factory:i.ɵfac})}return i})();var zi=new B(`TABPANEL_INSTANCE`);var Wi=(()=>{class i extends k$1{componentName=`TabPanel`;$pcTabPanel=k(zi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k(w,{self:!0});pcTabs=k(Zd(()=>Ue));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}lazy=kh(!1,{transform:Ou});value=Fhe(void 0);content=Bhe(`content`);id=xu(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=xu(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=xu(()=>em(this.pcTabs.value(),this.value()));isLazyEnabled=xu(()=>this.pcTabs.lazy()||this.lazy());hasBeenRendered=!1;shouldRender=xu(()=>!this.isLazyEnabled()||this.hasBeenRendered?!0:this.active()?(this.hasBeenRendered=!0,!0):!1);_componentStyle=k(Ai);static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵcmp=la$1({type:i,selectors:[[`p-tabpanel`]],contentQueries:function(n,t,o){n&1&&DR(o,t.content,qi,5),n&2&&L5()},hostVars:7,hostBindings:function(n,t){n&2&&(wR(`hidden`,!t.active()),_h(`id`,t.id())(`role`,`tabpanel`)(`aria-labelledby`,t.ariaLabelledby())(`data-p-active`,t.active()),Z5(t.cx(`root`)))},inputs:{lazy:[1,`lazy`],value:[1,`value`]},outputs:{value:`valueChange`},features:[m$([Ai,{provide:zi,useExisting:i},{provide:R,useExisting:i}]),ZU([w]),pR],ngContentSelectors:Ge,decls:3,vars:1,consts:[[`defaultContent`,``],[4,`ngTemplateOutlet`]],template:function(n,t){n&1&&(Ih(),mR(0,Kn,1,0,`ng-template`,null,0,D$),y5(2,Gn,1,1,`ng-container`)),n&2&&(gj(2),v5(t.shouldRender()?2:-1))},dependencies:[AH,kt$1],encapsulation:2})}return i})();var Jn={root:`p-tabpanels`};var Ri=(()=>{class i extends k1{name=`tabpanels`;classes=Jn;static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵprov=K({token:i,factory:i.ɵfac})}return i})();var ji=new B(`TABPANELS_INSTANCE`);var $i=(()=>{class i extends k$1{componentName=`TabPanels`;$pcTabPanels=k(ji,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k(w,{self:!0});_componentStyle=k(Ri);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵcmp=la$1({type:i,selectors:[[`p-tabpanels`]],hostVars:3,hostBindings:function(n,t){n&2&&(_h(`role`,`presentation`),Z5(t.cx(`root`)))},features:[m$([Ri,{provide:ji,useExisting:i},{provide:R,useExisting:i}]),ZU([w]),pR],ngContentSelectors:Ge,decls:1,vars:0,template:function(n,t){n&1&&(Ih(),Th(0))},dependencies:[jh,kt$1],encapsulation:2})}return i})();var eo=`
    
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }


    /* For Optimus */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`;var to={root:({instance:i})=>[`p-textarea p-component`,{"p-filled":i.$filled(),"p-textarea-resizable ":i.autoResize,"p-variant-filled":i.$variant()===`filled`,"p-textarea-fluid":i.hasFluid,"p-inputfield-sm p-textarea-sm":i.pSize===`small`,"p-textarea-lg p-inputfield-lg":i.pSize===`large`,"p-invalid":i.invalid()}]};var Qi=(()=>{class i extends k1{name=`textarea`;style=eo;classes=to;static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵprov=K({token:i,factory:i.ɵfac})}return i})();var Gi=new B(`TEXTAREA_INSTANCE`);var Ui=(()=>{class i extends wn$2{componentName=`Textarea`;bindDirectiveInstance=k(w,{self:!0});$pcTextarea=k(Gi,{optional:!0,skipSelf:!0})??void 0;pTextareaPT=kh();pTextareaUnstyled=kh();autoResize;pSize;variant=kh();fluid=kh(void 0,{transform:Ou});invalid=kh(void 0,{transform:Ou});$variant=xu(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=new Rt;ngControlSubscription;_componentStyle=k(Qi);ngControl=k(U,{optional:!0,self:!0});pcFluid=k(Ue$1,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}constructor(){super(),Vi$1(()=>{let e=this.pTextareaPT();e&&this.directivePT.set(e)}),Vi$1(()=>{this.pTextareaUnstyled()&&this.directiveUnstyled.set(this.pTextareaUnstyled())})}onInit(){this.ngControl&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}onAfterViewInit(){this.autoResize&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`])),this.autoResize&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(e){this.writeModelValue(e.target?.value),this.updateState()}resize(e){this.el.nativeElement.style.height=`auto`,this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+`px`,parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY=`scroll`,this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow=`hidden`,this.onResize.emit(e||{})}updateState(){this.autoResize&&this.resize()}onDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static ɵfac=function(n){return new(n||i)};static ɵdir=Kt({type:i,selectors:[[``,`pTextarea`,``],[``,`pInputTextarea`,``]],hostVars:2,hostBindings:function(n,t){n&1&&wh(`input`,function(r){return t.onInput(r)}),n&2&&Z5(t.cx(`root`))},inputs:{pTextareaPT:[1,`pTextareaPT`],pTextareaUnstyled:[1,`pTextareaUnstyled`],autoResize:[2,`autoResize`,`autoResize`,Ou],pSize:`pSize`,variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`]},outputs:{onResize:`onResize`},features:[m$([Qi,{provide:Gi,useExisting:i},{provide:R,useExisting:i}]),ZU([w]),pR]})}return i})();var Zi=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var io=[`icon`];var no=[`input`];var oo=(i,a,e)=>({checked:i,class:a,dataP:e});function ao(i,a){if(i&1&&Eh(0,`span`,8),i&2){let e=M5(3);Z5(e.cx(`icon`)),vR(`ngClass`,e.checkboxIcon)(`pBind`,e.ptm(`icon`)),_h(`data-p`,e.dataP)}}function ro(i,a){if(i&1&&(mD(),Eh(0,`svg`,9)),i&2){let e=M5(3);Z5(e.cx(`icon`)),vR(`pBind`,e.ptm(`icon`)),_h(`data-p`,e.dataP)}}function lo(i,a){if(i&1&&(H0(0),mR(1,ao,1,5,`span`,6)(2,ro,1,4,`svg`,7),z0()),i&2){let e=M5(2);gj(),vR(`ngIf`,e.checkboxIcon),gj(),vR(`ngIf`,!e.checkboxIcon)}}function so(i,a){if(i&1&&(mD(),Eh(0,`svg`,10)),i&2){let e=M5(2);Z5(e.cx(`icon`)),vR(`pBind`,e.ptm(`icon`)),_h(`data-p`,e.dataP)}}function co(i,a){if(i&1&&(H0(0),mR(1,lo,3,2,`ng-container`,3)(2,so,1,4,`svg`,5),z0()),i&2){let e=M5();gj(),vR(`ngIf`,e.checked),gj(),vR(`ngIf`,e._indeterminate())}}function po(i,a){}function uo(i,a){i&1&&mR(0,po,0,0,`ng-template`)}var mo=`
    ${Zi}

    /* For Optimus */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`;var go={root:({instance:i})=>[`p-checkbox p-component`,{"p-checkbox-checked p-highlight":i.checked,"p-disabled":i.$disabled(),"p-invalid":i.invalid(),"p-variant-filled":i.$variant()===`filled`,"p-checkbox-sm p-inputfield-sm":i.size()===`small`,"p-checkbox-lg p-inputfield-lg":i.size()===`large`}],box:`p-checkbox-box`,input:`p-checkbox-input`,icon:`p-checkbox-icon`};var Xi=(()=>{class i extends k1{name=`checkbox`;style=mo;classes=go;static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵprov=K({token:i,factory:i.ɵfac})}return i})();var Yi=new B(`CHECKBOX_INSTANCE`);var _o={provide:Ae,useExisting:Zd(()=>ut),multi:!0};var ut=(()=>{class i extends Ut{componentName=`Checkbox`;hostName=``;value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=kh();size=kh();onChange=new Rt;onFocus=new Rt;onBlur=new Rt;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:yG(this.value,this.modelValue())}_indeterminate=ie(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=k(Xi);bindDirectiveInstance=k(w,{self:!0});$pcCheckbox=k(Yi,{optional:!0,skipSelf:!0})??void 0;$variant=xu(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case`icon`:this._checkboxIconTemplate=e.template;break;case`checkboxicon`:this._checkboxIconTemplate=e.template;break}})}onChanges(e){e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}updateModel(e){let n,t=this.injector.get(U,null,{optional:!0,self:!0}),o=t&&!this.formControl?t.value:this.modelValue();this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=o.filter(r=>!em(r,this.value)):n=o?[...o,this.value]:[this.value],this.onModelChange(n),this.writeModelValue(n),this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,n){n(e),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()})}static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵcmp=la$1({type:i,selectors:[[`p-checkbox`],[`p-checkBox`],[`p-check-box`]],contentQueries:function(n,t,o){if(n&1&&Ch(o,io,4)(o,FEe,4),n&2){let r;W0(r=G0())&&(t.checkboxIconTemplate=r.first),W0(r=G0())&&(t.templates=r)}},viewQuery:function(n,t){if(n&1&&CR(no,5),n&2){let o;W0(o=G0())&&(t.inputViewChild=o.first)}},hostVars:6,hostBindings:function(n,t){n&2&&(_h(`data-p-highlight`,t.checked)(`data-p-checked`,t.checked)(`data-p-disabled`,t.$disabled())(`data-p`,t.dataP),Z5(t.cn(t.cx(`root`),t.styleClass)))},inputs:{hostName:`hostName`,value:`value`,binary:[2,`binary`,`binary`,Ou],ariaLabelledBy:`ariaLabelledBy`,ariaLabel:`ariaLabel`,tabindex:[2,`tabindex`,`tabindex`,oH],inputId:`inputId`,inputStyle:`inputStyle`,styleClass:`styleClass`,inputClass:`inputClass`,indeterminate:[2,`indeterminate`,`indeterminate`,Ou],formControl:`formControl`,checkboxIcon:`checkboxIcon`,readonly:[2,`readonly`,`readonly`,Ou],autofocus:[2,`autofocus`,`autofocus`,Ou],trueValue:`trueValue`,falseValue:`falseValue`,variant:[1,`variant`],size:[1,`size`]},outputs:{onChange:`onChange`,onFocus:`onFocus`,onBlur:`onBlur`},features:[m$([_o,Xi,{provide:Yi,useExisting:i},{provide:R,useExisting:i}]),ZU([w]),pR],decls:5,vars:26,consts:[[`input`,``],[`type`,`checkbox`,3,`focus`,`blur`,`change`,`checked`,`pBind`],[3,`pBind`],[4,`ngIf`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`minus`,3,`class`,`pBind`,4,`ngIf`],[3,`class`,`ngClass`,`pBind`,4,`ngIf`],[`data-p-icon`,`check`,3,`class`,`pBind`,4,`ngIf`],[3,`ngClass`,`pBind`],[`data-p-icon`,`check`,3,`pBind`],[`data-p-icon`,`minus`,3,`pBind`]],template:function(n,t){n&1&&(Jf(0,`input`,1,0),wh(`focus`,function(r){return t.onInputFocus(r)})(`blur`,function(r){return t.onInputBlur(r)})(`change`,function(r){return t.handleChange(r)}),j0(),Jf(2,`div`,2),mR(3,co,3,2,`ng-container`,3)(4,uo,1,0,null,4),j0()),n&2&&(Q5(t.inputStyle),Z5(t.cn(t.cx(`input`),t.inputClass)),vR(`checked`,t.checked)(`pBind`,t.ptm(`input`)),_h(`id`,t.inputId)(`value`,t.value)(`name`,t.name())(`tabindex`,t.tabindex)(`required`,t.required()?``:void 0)(`readonly`,t.readonly?``:void 0)(`disabled`,t.$disabled()?``:void 0)(`aria-labelledby`,t.ariaLabelledBy)(`aria-label`,t.ariaLabel),gj(2),Z5(t.cx(`box`)),vR(`pBind`,t.ptm(`box`)),_h(`data-p`,t.dataP),gj(),vR(`ngIf`,!t.checkboxIconTemplate&&!t._checkboxIconTemplate),gj(),vR(`ngTemplateOutlet`,t.checkboxIconTemplate||t._checkboxIconTemplate)(`ngTemplateOutletContext`,_$(22,oo,t.checked,t.cx(`icon`),t.dataP)))},dependencies:[jh,CH,DH,AH,VEe,Xt,Oi,kt$1,w],encapsulation:2})}return i})();var Ji=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var ho=[`removeicon`];var fo=[`*`];function bo(i,a){if(i&1){let e=A5();Jf(0,`img`,4),wh(`error`,function(t){nD(e);return rD(M5().imageError(t))}),j0()}if(i&2){let e=M5();Z5(e.cx(`image`)),vR(`pBind`,e.ptm(`image`))(`src`,e.image,rA)(`alt`,e.alt)}}function vo(i,a){if(i&1&&Eh(0,`span`,6),i&2){let e=M5(2);Z5(e.icon),vR(`pBind`,e.ptm(`icon`))(`ngClass`,e.cx(`icon`))}}function yo(i,a){if(i&1&&mR(0,vo,1,4,`span`,5),i&2)vR(`ngIf`,M5().icon)}function xo(i,a){if(i&1&&(Jf(0,`div`,7),c$(1),j0()),i&2){let e=M5();Z5(e.cx(`label`)),vR(`pBind`,e.ptm(`label`)),gj(),$R(e.label)}}function Co(i,a){if(i&1){let e=A5();Jf(0,`span`,11),wh(`click`,function(t){nD(e);return rD(M5(3).close(t))})(`keydown`,function(t){nD(e);return rD(M5(3).onKeydown(t))}),j0()}if(i&2){let e=M5(3);Z5(e.removeIcon),vR(`pBind`,e.ptm(`removeIcon`))(`ngClass`,e.cx(`removeIcon`)),_h(`tabindex`,e.disabled?-1:0)(`aria-label`,e.removeAriaLabel)}}function To(i,a){if(i&1){let e=A5();mD(),Jf(0,`svg`,12),wh(`click`,function(t){nD(e);return rD(M5(3).close(t))})(`keydown`,function(t){nD(e);return rD(M5(3).onKeydown(t))}),j0()}if(i&2){let e=M5(3);Z5(e.cx(`removeIcon`)),vR(`pBind`,e.ptm(`removeIcon`)),_h(`tabindex`,e.disabled?-1:0)(`aria-label`,e.removeAriaLabel)}}function wo(i,a){if(i&1&&(H0(0),mR(1,Co,1,6,`span`,9)(2,To,1,5,`svg`,10),z0()),i&2){let e=M5(2);gj(),vR(`ngIf`,e.removeIcon),gj(),vR(`ngIf`,!e.removeIcon)}}function So(i,a){}function Io(i,a){i&1&&mR(0,So,0,0,`ng-template`)}function Mo(i,a){if(i&1){let e=A5();Jf(0,`span`,13),wh(`click`,function(t){nD(e);return rD(M5(2).close(t))})(`keydown`,function(t){nD(e);return rD(M5(2).onKeydown(t))}),mR(1,Io,1,0,null,14),j0()}if(i&2){let e=M5(2);Z5(e.cx(`removeIcon`)),vR(`pBind`,e.ptm(`removeIcon`)),_h(`tabindex`,e.disabled?-1:0)(`aria-label`,e.removeAriaLabel),gj(),vR(`ngTemplateOutlet`,e.removeIconTemplate||e._removeIconTemplate)}}function ko(i,a){if(i&1&&(H0(0),mR(1,wo,3,2,`ng-container`,3)(2,Mo,2,6,`span`,8),z0()),i&2){let e=M5();gj(),vR(`ngIf`,!e.removeIconTemplate&&!e._removeIconTemplate),gj(),vR(`ngIf`,e.removeIconTemplate||e._removeIconTemplate)}}var Eo={root:({instance:i})=>({display:i.visible?null:`none`})};var Oo={root:({instance:i})=>[`p-chip p-component`,{"p-disabled":i.disabled}],image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`};var en=(()=>{class i extends k1{name=`chip`;style=Ji;classes=Oo;inlineStyles=Eo;static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵprov=K({token:i,factory:i.ɵfac})}return i})();var tn=new B(`CHIP_INSTANCE`);var nn=(()=>{class i extends k$1{componentName=`Chip`;$pcChip=k(tn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label;icon;image;alt;styleClass;disabled=!1;removable=!1;removeIcon;onRemove=new Rt;onImageError=new Rt;visible=!0;get removeAriaLabel(){return this.config.getTranslation(BEe.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e==`object`&&Object.entries(e).forEach(([n,t])=>this[`_${n}`]!==t&&(this[`_${n}`]=t))}_chipProps;_componentStyle=k(en);removeIconTemplate;templates;_removeIconTemplate;onAfterContentInit(){this.templates.forEach(e=>{e.getType()===`removeicon`?this._removeIconTemplate=e.template:this._removeIconTemplate=e.template})}onChanges(e){if(e.chipProps&&e.chipProps.currentValue){let{currentValue:n}=e.chipProps;n.label!==void 0&&(this.label=n.label),n.icon!==void 0&&(this.icon=n.icon),n.image!==void 0&&(this.image=n.image),n.alt!==void 0&&(this.alt=n.alt),n.styleClass!==void 0&&(this.styleClass=n.styleClass),n.removable!==void 0&&(this.removable=n.removable),n.removeIcon!==void 0&&(this.removeIcon=n.removeIcon)}}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key===`Enter`||e.key===`Backspace`)&&this.close(e)}imageError(e){this.onImageError.emit(e)}get dataP(){return this.cn({removable:this.removable})}static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵcmp=la$1({type:i,selectors:[[`p-chip`]],contentQueries:function(n,t,o){if(n&1&&Ch(o,ho,4)(o,FEe,4),n&2){let r;W0(r=G0())&&(t.removeIconTemplate=r.first),W0(r=G0())&&(t.templates=r)}},hostVars:6,hostBindings:function(n,t){n&2&&(_h(`aria-label`,t.label)(`data-p`,t.dataP),Q5(t.sx(`root`)),Z5(t.cn(t.cx(`root`),t.styleClass)))},inputs:{label:`label`,icon:`icon`,image:`image`,alt:`alt`,styleClass:`styleClass`,disabled:[2,`disabled`,`disabled`,Ou],removable:[2,`removable`,`removable`,Ou],removeIcon:`removeIcon`,chipProps:`chipProps`},outputs:{onRemove:`onRemove`,onImageError:`onImageError`},features:[m$([en,{provide:tn,useExisting:i},{provide:R,useExisting:i}]),ZU([w]),pR],ngContentSelectors:fo,decls:6,vars:4,consts:[[`iconTemplate`,``],[3,`pBind`,`class`,`src`,`alt`,`error`,4,`ngIf`,`ngIfElse`],[3,`pBind`,`class`,4,`ngIf`],[4,`ngIf`],[3,`error`,`pBind`,`src`,`alt`],[3,`pBind`,`class`,`ngClass`,4,`ngIf`],[3,`pBind`,`ngClass`],[3,`pBind`],[`role`,`button`,3,`pBind`,`class`,`click`,`keydown`,4,`ngIf`],[`role`,`button`,3,`pBind`,`class`,`ngClass`,`click`,`keydown`,4,`ngIf`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`pBind`,`class`,`click`,`keydown`,4,`ngIf`],[`role`,`button`,3,`click`,`keydown`,`pBind`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`click`,`keydown`,`pBind`],[`role`,`button`,3,`click`,`keydown`,`pBind`],[4,`ngTemplateOutlet`]],template:function(n,t){if(n&1&&(Ih(),Th(0),mR(1,bo,1,5,`img`,1)(2,yo,1,1,`ng-template`,null,0,D$)(4,xo,2,4,`div`,2)(5,ko,3,2,`ng-container`,3)),n&2){let o=F5(3);gj(),vR(`ngIf`,t.image)(`ngIfElse`,o),gj(3),vR(`ngIf`,t.label),gj(),vR(`ngIf`,t.removable)}},dependencies:[jh,CH,DH,AH,Vi,VEe,w],encapsulation:2})}return i})();var on=`
    .p-multiselect {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('multiselect.background');
        border: 1px solid dt('multiselect.border.color');
        transition:
            background dt('multiselect.transition.duration'),
            color dt('multiselect.transition.duration'),
            border-color dt('multiselect.transition.duration'),
            outline-color dt('multiselect.transition.duration'),
            box-shadow dt('multiselect.transition.duration');
        border-radius: dt('multiselect.border.radius');
        outline-color: transparent;
        box-shadow: dt('multiselect.shadow');
    }

    .p-multiselect:not(.p-disabled):hover {
        border-color: dt('multiselect.hover.border.color');
    }

    .p-multiselect:not(.p-disabled).p-focus {
        border-color: dt('multiselect.focus.border.color');
        box-shadow: dt('multiselect.focus.ring.shadow');
        outline: dt('multiselect.focus.ring.width') dt('multiselect.focus.ring.style') dt('multiselect.focus.ring.color');
        outline-offset: dt('multiselect.focus.ring.offset');
    }

    .p-multiselect.p-variant-filled {
        background: dt('multiselect.filled.background');
    }

    .p-multiselect.p-variant-filled:not(.p-disabled):hover {
        background: dt('multiselect.filled.hover.background');
    }

    .p-multiselect.p-variant-filled.p-focus {
        background: dt('multiselect.filled.focus.background');
    }

    .p-multiselect.p-invalid {
        border-color: dt('multiselect.invalid.border.color');
    }

    .p-multiselect.p-disabled {
        opacity: 1;
        background: dt('multiselect.disabled.background');
    }

    .p-multiselect-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('multiselect.dropdown.color');
        width: dt('multiselect.dropdown.width');
        border-start-end-radius: dt('multiselect.border.radius');
        border-end-end-radius: dt('multiselect.border.radius');
    }

    .p-multiselect-clear-icon {
        align-self: center;
        color: dt('multiselect.clear.icon.color');
        inset-inline-end: dt('multiselect.dropdown.width');
    }

    .p-multiselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }

    .p-multiselect-label {
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: dt('multiselect.padding.y') dt('multiselect.padding.x');
        color: dt('multiselect.color');
    }

    .p-multiselect-display-chip .p-multiselect-label {
        display: flex;
        align-items: center;
        gap: calc(dt('multiselect.padding.y') / 2);
    }

    .p-multiselect-label.p-placeholder {
        color: dt('multiselect.placeholder.color');
    }

    .p-multiselect.p-invalid .p-multiselect-label.p-placeholder {
        color: dt('multiselect.invalid.placeholder.color');
    }

    .p-multiselect.p-disabled .p-multiselect-label {
        color: dt('multiselect.disabled.color');
    }

    .p-multiselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-multiselect-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('multiselect.overlay.background');
        color: dt('multiselect.overlay.color');
        border: 1px solid dt('multiselect.overlay.border.color');
        border-radius: dt('multiselect.overlay.border.radius');
        box-shadow: dt('multiselect.overlay.shadow');
        min-width: 100%;
    }

    .p-multiselect-header {
        display: flex;
        align-items: center;
        padding: dt('multiselect.list.header.padding');
    }

    .p-multiselect-header .p-checkbox {
        margin-inline-end: dt('multiselect.option.gap');
    }

    .p-multiselect-filter-container {
        flex: 1 1 auto;
    }

    .p-multiselect-filter {
        width: 100%;
    }

    .p-multiselect-list-container {
        overflow: auto;
    }

    .p-multiselect-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('multiselect.list.padding');
        display: flex;
        flex-direction: column;
        gap: dt('multiselect.list.gap');
    }

    .p-multiselect-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: dt('multiselect.option.gap');
        padding: dt('multiselect.option.padding');
        border: 0 none;
        color: dt('multiselect.option.color');
        background: transparent;
        transition:
            background dt('multiselect.transition.duration'),
            color dt('multiselect.transition.duration'),
            border-color dt('multiselect.transition.duration'),
            box-shadow dt('multiselect.transition.duration'),
            outline-color dt('multiselect.transition.duration');
        border-radius: dt('multiselect.option.border.radius');
    }

    .p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {
        background: dt('multiselect.option.focus.background');
        color: dt('multiselect.option.focus.color');
    }

    .p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled):hover {
        background: dt('multiselect.option.focus.background');
        color: dt('multiselect.option.focus.color');
    }

    .p-multiselect-option.p-multiselect-option-selected {
        background: dt('multiselect.option.selected.background');
        color: dt('multiselect.option.selected.color');
    }

    .p-multiselect-option.p-multiselect-option-selected.p-focus {
        background: dt('multiselect.option.selected.focus.background');
        color: dt('multiselect.option.selected.focus.color');
    }

    .p-multiselect-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('multiselect.option.group.padding');
        background: dt('multiselect.option.group.background');
        color: dt('multiselect.option.group.color');
        font-weight: dt('multiselect.option.group.font.weight');
    }

    .p-multiselect-empty-message {
        padding: dt('multiselect.empty.message.padding');
    }

    .p-multiselect-label .p-chip {
        padding-block-start: calc(dt('multiselect.padding.y') / 2);
        padding-block-end: calc(dt('multiselect.padding.y') / 2);
        border-radius: dt('multiselect.chip.border.radius');
    }

    .p-multiselect-label:has(.p-chip) {
        padding: calc(dt('multiselect.padding.y') / 2) calc(dt('multiselect.padding.x') / 2);
    }

    .p-multiselect-fluid {
        display: flex;
        width: 100%;
    }

    .p-multiselect-sm .p-multiselect-label {
        font-size: dt('multiselect.sm.font.size');
        padding-block: dt('multiselect.sm.padding.y');
        padding-inline: dt('multiselect.sm.padding.x');
    }

    .p-multiselect-sm .p-multiselect-dropdown .p-icon {
        font-size: dt('multiselect.sm.font.size');
        width: dt('multiselect.sm.font.size');
        height: dt('multiselect.sm.font.size');
    }

    .p-multiselect-lg .p-multiselect-label {
        font-size: dt('multiselect.lg.font.size');
        padding-block: dt('multiselect.lg.padding.y');
        padding-inline: dt('multiselect.lg.padding.x');
    }

    .p-multiselect-lg .p-multiselect-dropdown .p-icon {
        font-size: dt('multiselect.lg.font.size');
        width: dt('multiselect.lg.font.size');
        height: dt('multiselect.lg.font.size');
    }

    .p-floatlabel-in .p-multiselect-filter {
        padding-block-start: dt('multiselect.padding.y');
        padding-block-end: dt('multiselect.padding.y');
    }
`;var ln=i=>({$implicit:i});var Vo=(i,a)=>({checked:i,class:a});function Po(i,a){}function Fo(i,a){i&1&&mR(0,Po,0,0,`ng-template`)}function Bo(i,a){if(i&1&&mR(0,Fo,1,0,null,3),i&2){let e=a.class,n=M5(2);vR(`ngTemplateOutlet`,n.itemCheckboxIconTemplate)(`ngTemplateOutletContext`,b$(2,Vo,n.selected,e))}}function Lo(i,a){i&1&&(H0(0),mR(1,Bo,1,5,`ng-template`,null,0,D$),z0())}function No(i,a){if(i&1&&(Jf(0,`span`),c$(1),j0()),i&2){let e=M5();gj(),$R(e.label??`empty`)}}function Do(i,a){i&1&&ER(0)}var Ao=[`item`];var zo=[`group`];var Ro=[`loader`];var jo=[`header`];var qo=[`filter`];var Ho=[`footer`];var Wo=[`emptyfilter`];var $o=[`empty`];var Ko=[`selecteditems`];var Qo=[`loadingicon`];var Go=[`filtericon`];var Uo=[`removetokenicon`];var Zo=[`chipicon`];var Xo=[`clearicon`];var Yo=[`dropdownicon`];var Jo=[`itemcheckboxicon`];var ea=[`headercheckboxicon`];var ta=[`overlay`];var ia=[`filterInput`];var na=[`focusInput`];var oa=[`items`];var aa=[`scroller`];var ra=[`lastHiddenFocusableEl`];var la=[`firstHiddenFocusableEl`];var sa=[`headerCheckbox`];var ca=[[[`p-header`]],[[`p-footer`]]];var da=[`p-header`,`p-footer`];var pa=()=>({class:`p-multiselect-chip-icon`});var ua=(i,a)=>({$implicit:i,removeChip:a});var ma=i=>({dataP:i});var sn=i=>({options:i});var ga=(i,a,e)=>({checked:i,partialSelected:a,class:e});var gt=i=>({height:i});var cn=(i,a)=>({$implicit:i,options:a});var _a=()=>({});function ha(i,a){if(i&1&&(H0(0),c$(1),z0()),i&2){let e=M5(2);gj(),$R(e.label()||`empty`)}}function fa(i,a){if(i&1&&c$(0),i&2)K0(` `,M5(3).getSelectedItemsLabel(),` `)}function ba(i,a){i&1&&ER(0)}function va(i,a){if(i&1){let e=A5();Jf(0,`span`,27),wh(`click`,function(t){nD(e);let o=M5(4).$implicit;return rD(M5(4).removeOption(o,t))}),mR(1,ba,1,0,`ng-container`,28),j0()}if(i&2){let e=M5(8);Z5(e.cx(`chipIcon`)),vR(`pBind`,e.ptm(`chipIcon`)),_h(`aria-hidden`,!0),gj(),vR(`ngTemplateOutlet`,e.chipIconTemplate||e._chipIconTemplate||e.removeTokenIconTemplate||e._removeTokenIconTemplate)(`ngTemplateOutletContext`,y$(6,pa))}}function ya(i,a){if(i&1&&(H0(0),mR(1,va,2,7,`span`,26),z0()),i&2){let e=M5(7);gj(),vR(`ngIf`,e.chipIconTemplate||e._chipIconTemplate||e.removeTokenIconTemplate||e._removeTokenIconTemplate)}}function xa(i,a){if(i&1&&mR(0,ya,2,1,`ng-container`,20),i&2){let e=M5(6);vR(`ngIf`,!e.$disabled()&&!e.readonly)}}function Ca(i,a){i&1&&(H0(0),mR(1,xa,1,1,`ng-template`,null,5,D$),z0())}function Ta(i,a){if(i&1){let e=A5();Jf(0,`div`,19,4)(2,`p-chip`,25),wh(`onRemove`,function(t){let o=nD(e).$implicit;return rD(M5(4).removeOption(o,t))}),mR(3,Ca,3,0,`ng-container`,20),j0()()}if(i&2){let e=a.$implicit,n=M5(4);Z5(n.cx(`chipItem`)),vR(`pBind`,n.ptm(`chipItem`)),gj(2),Z5(n.cx(`pcChip`)),vR(`pt`,n.ptm(`pcChip`))(`unstyled`,n.unstyled())(`label`,n.getLabelByValue(e))(`removable`,!n.$disabled()&&!n.readonly)(`removeIcon`,n.chipIcon),gj(),vR(`ngIf`,n.chipIconTemplate||n._chipIconTemplate||n.removeTokenIconTemplate||n._removeTokenIconTemplate)}}function wa(i,a){if(i&1&&mR(0,Ta,4,11,`div`,24),i&2)vR(`ngForOf`,M5(3).chipSelectedItems())}function Sa(i,a){if(i&1&&(H0(0),c$(1),z0()),i&2){let e=M5(3);gj(),$R(e.placeholder()||`empty`)}}function Ia(i,a){if(i&1&&(H0(0),y5(1,fa,1,1)(2,wa,1,1,`div`,23),mR(3,Sa,2,1,`ng-container`,20),z0()),i&2){let e=M5(2);gj(),v5(e.chipSelectedItems()&&e.chipSelectedItems().length===e.maxSelectedLabels?1:2),gj(2),vR(`ngIf`,!e.modelValue()||e.modelValue().length===0)}}function Ma(i,a){if(i&1&&(H0(0),mR(1,ha,2,1,`ng-container`,20)(2,Ia,4,2,`ng-container`,20),z0()),i&2){let e=M5();gj(),vR(`ngIf`,e.display===`comma`),gj(),vR(`ngIf`,e.display===`chip`)}}function ka(i,a){i&1&&ER(0)}function Ea(i,a){if(i&1&&(H0(0),c$(1),z0()),i&2){let e=M5(2);gj(),$R(e.placeholder()||`empty`)}}function Oa(i,a){if(i&1&&(H0(0),mR(1,ka,1,0,`ng-container`,28)(2,Ea,2,1,`ng-container`,20),z0()),i&2){let e=M5();gj(),vR(`ngTemplateOutlet`,e.selectedItemsTemplate||e._selectedItemsTemplate)(`ngTemplateOutletContext`,b$(3,ua,e.selectedOptions,e.removeOption.bind(e))),gj(),vR(`ngIf`,!e.modelValue()||e.modelValue().length===0)}}function Va(i,a){if(i&1){let e=A5();mD(),Jf(0,`svg`,31),wh(`click`,function(t){nD(e);return rD(M5(2).clear(t))}),j0()}if(i&2){let e=M5(2);Z5(e.cx(`clearIcon`)),vR(`pBind`,e.ptm(`clearIcon`)),_h(`aria-hidden`,!0)}}function Pa(i,a){}function Fa(i,a){i&1&&mR(0,Pa,0,0,`ng-template`)}function Ba(i,a){if(i&1){let e=A5();Jf(0,`span`,27),wh(`click`,function(t){nD(e);return rD(M5(2).clear(t))}),mR(1,Fa,1,0,null,32),j0()}if(i&2){let e=M5(2);Z5(e.cx(`clearIcon`)),vR(`pBind`,e.ptm(`clearIcon`)),_h(`aria-hidden`,!0),gj(),vR(`ngTemplateOutlet`,e.clearIconTemplate||e._clearIconTemplate)}}function La(i,a){if(i&1&&(H0(0),mR(1,Va,1,4,`svg`,29)(2,Ba,2,5,`span`,30),z0()),i&2){let e=M5();gj(),vR(`ngIf`,!e.clearIconTemplate&&!e._clearIconTemplate),gj(),vR(`ngIf`,e.clearIconTemplate||e._clearIconTemplate)}}function Na(i,a){i&1&&ER(0)}function Da(i,a){if(i&1&&(H0(0),mR(1,Na,1,0,`ng-container`,32),z0()),i&2){let e=M5(2);gj(),vR(`ngTemplateOutlet`,e.loadingIconTemplate||e._loadingIconTemplate)}}function Aa(i,a){if(i&1&&Eh(0,`span`,19),i&2){let e=M5(3);Z5(e.cn(e.cx(`loadingIcon`),`pi-spin `+e.loadingIcon)),vR(`pBind`,e.ptm(`loadingIcon`)),_h(`aria-hidden`,!0)}}function za(i,a){if(i&1&&Eh(0,`span`,19),i&2){let e=M5(3);Z5(e.cn(e.cx(`loadingIcon`),`pi pi-spinner pi-spin`)),vR(`pBind`,e.ptm(`loadingIcon`)),_h(`aria-hidden`,!0)}}function Ra(i,a){if(i&1&&(H0(0),mR(1,Aa,1,4,`span`,33)(2,za,1,4,`span`,33),z0()),i&2){let e=M5(2);gj(),vR(`ngIf`,e.loadingIcon),gj(),vR(`ngIf`,!e.loadingIcon)}}function ja(i,a){if(i&1&&(H0(0),mR(1,Da,2,1,`ng-container`,20)(2,Ra,3,2,`ng-container`,20),z0()),i&2){let e=M5();gj(),vR(`ngIf`,e.loadingIconTemplate||e._loadingIconTemplate),gj(),vR(`ngIf`,!e.loadingIconTemplate&&!e._loadingIconTemplate)}}function qa(i,a){if(i&1&&Eh(0,`span`,36),i&2){let e=M5(3);Z5(e.cx(`dropdownIcon`)),vR(`pBind`,e.ptm(`dropdownIcon`))(`ngClass`,e.dropdownIcon),_h(`aria-hidden`,!0)(`data-p`,e.dropdownIconDataP)}}function Ha(i,a){if(i&1&&(mD(),Eh(0,`svg`,37)),i&2){let e=M5(3);Z5(e.cx(`dropdownIcon`)),vR(`pBind`,e.ptm(`dropdownIcon`)),_h(`aria-hidden`,!0)(`data-p`,e.dropdownIconDataP)}}function Wa(i,a){if(i&1&&(H0(0),mR(1,qa,1,6,`span`,34)(2,Ha,1,5,`svg`,35),z0()),i&2){let e=M5(2);gj(),vR(`ngIf`,e.dropdownIcon),gj(),vR(`ngIf`,!e.dropdownIcon)}}function $a(i,a){}function Ka(i,a){i&1&&mR(0,$a,0,0,`ng-template`)}function Qa(i,a){if(i&1&&(Jf(0,`span`,19),mR(1,Ka,1,0,null,28),j0()),i&2){let e=M5(2);Z5(e.cx(`dropdownIcon`)),vR(`pBind`,e.ptm(`dropdownIcon`)),_h(`aria-hidden`,!0),gj(),vR(`ngTemplateOutlet`,e.dropdownIconTemplate||e._dropdownIconTemplate)(`ngTemplateOutletContext`,v$(6,ma,e.dropdownIconDataP))}}function Ga(i,a){if(i&1&&mR(0,Wa,3,2,`ng-container`,20)(1,Qa,2,8,`span`,33),i&2){let e=M5();vR(`ngIf`,!e.dropdownIconTemplate&&!e._dropdownIconTemplate),gj(),vR(`ngIf`,e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Ua(i,a){i&1&&ER(0)}function Za(i,a){i&1&&ER(0)}function Xa(i,a){if(i&1&&(H0(0),mR(1,Za,1,0,`ng-container`,28),z0()),i&2){let e=M5(3);gj(),vR(`ngTemplateOutlet`,e.filterTemplate||e._filterTemplate)(`ngTemplateOutletContext`,v$(2,sn,e.filterOptions))}}function Ya(i,a){if(i&1&&(mD(),Eh(0,`svg`,45)),i&2){let e=M5().class,n=M5(5);Z5(e),vR(`pBind`,n.getHeaderCheckboxPTOptions(`pcHeaderCheckbox.icon`))}}function Ja(i,a){}function er(i,a){i&1&&mR(0,Ja,0,0,`ng-template`)}function tr(i,a){if(i&1&&mR(0,Ya,1,3,`svg`,44)(1,er,1,0,null,28),i&2){let e=a.class,n=M5(5);vR(`ngIf`,!n.headerCheckboxIconTemplate&&!n._headerCheckboxIconTemplate&&n.allSelected()),gj(),vR(`ngTemplateOutlet`,n.headerCheckboxIconTemplate||n._headerCheckboxIconTemplate)(`ngTemplateOutletContext`,_$(3,ga,n.allSelected(),n.partialSelected(),e))}}function ir(i,a){if(i&1){let e=A5();Jf(0,`p-checkbox`,43,10),wh(`onChange`,function(t){nD(e);return rD(M5(4).onToggleAll(t))}),mR(2,tr,2,7,`ng-template`,null,11,D$),j0(),oU()}if(i&2){let e=M5(4);vR(`pt`,e.getHeaderCheckboxPTOptions(`pcHeaderCheckbox`))(`ngModel`,e.allSelected())(`ariaLabel`,e.toggleAllAriaLabel)(`binary`,!0)(`variant`,e.$variant())(`disabled`,e.$disabled())(`unstyled`,e.unstyled()),sU()}}function nr(i,a){if(i&1&&(mD(),Eh(0,`svg`,50)),i&2)vR(`pBind`,M5(5).ptm(`filterIcon`))}function or(i,a){}function ar(i,a){i&1&&mR(0,or,0,0,`ng-template`)}function rr(i,a){if(i&1&&(Jf(0,`span`,51),mR(1,ar,1,0,null,32),j0()),i&2){let e=M5(5);vR(`pBind`,e.ptm(`filterIcon`)),gj(),vR(`ngTemplateOutlet`,e.filterIconTemplate||e._filterIconTemplate)}}function lr(i,a){if(i&1){let e=A5();Jf(0,`p-iconfield`,46)(1,`input`,47,12),wh(`input`,function(t){nD(e);return rD(M5(4).onFilterInputChange(t))})(`keydown`,function(t){nD(e);return rD(M5(4).onFilterKeyDown(t))})(`click`,function(t){nD(e);return rD(M5(4).onInputClick(t))})(`blur`,function(t){nD(e);return rD(M5(4).onFilterBlur(t))}),j0(),Jf(3,`p-inputicon`,46),mR(4,nr,1,1,`svg`,48)(5,rr,2,2,`span`,49),j0()()}if(i&2){let e=M5(4);Z5(e.cx(`pcFilterContainer`)),vR(`pt`,e.ptm(`pcFilterContainer`))(`unstyled`,e.unstyled()),gj(),Z5(e.cx(`pcFilter`)),vR(`pt`,e.ptm(`pcFilter`))(`variant`,e.$variant())(`value`,e._filterValue()||``)(`unstyled`,e.unstyled()),_h(`autocomplete`,e.autocomplete)(`aria-owns`,e.id+`_list`)(`aria-activedescendant`,e.focusedOptionId)(`disabled`,e.$disabled()?``:void 0)(`placeholder`,e.filterPlaceHolder)(`aria-label`,e.ariaFilterLabel),gj(2),vR(`pt`,e.ptm(`pcFilterIconContainer`))(`unstyled`,e.unstyled()),gj(),vR(`ngIf`,!e.filterIconTemplate&&!e._filterIconTemplate),gj(),vR(`ngIf`,e.filterIconTemplate||e._filterIconTemplate)}}function sr(i,a){if(i&1&&mR(0,ir,4,7,`p-checkbox`,41)(1,lr,6,20,`p-iconfield`,42),i&2){let e=M5(3);vR(`ngIf`,e.showToggleAll&&!e.selectionLimit),gj(),vR(`ngIf`,e.filter)}}function cr(i,a){if(i&1&&(Jf(0,`div`,19),Th(1),mR(2,Xa,2,4,`ng-container`,21)(3,sr,2,2,`ng-template`,null,9,D$),j0()),i&2){let e=F5(4),n=M5(2);Z5(n.cx(`header`)),vR(`pBind`,n.ptm(`header`)),gj(2),vR(`ngIf`,n.filterTemplate||n._filterTemplate)(`ngIfElse`,e)}}function dr(i,a){i&1&&ER(0)}function pr(i,a){if(i&1&&mR(0,dr,1,0,`ng-container`,28),i&2){let e=a.$implicit,n=a.options;M5(2);vR(`ngTemplateOutlet`,F5(9))(`ngTemplateOutletContext`,b$(2,cn,e,n))}}function ur(i,a){i&1&&ER(0)}function mr(i,a){if(i&1&&mR(0,ur,1,0,`ng-container`,28),i&2){let e=a.options,n=M5(4);vR(`ngTemplateOutlet`,n.loaderTemplate||n._loaderTemplate)(`ngTemplateOutletContext`,v$(2,sn,e))}}function gr(i,a){i&1&&(H0(0),mR(1,mr,1,4,`ng-template`,null,14,D$),z0())}function _r(i,a){if(i&1){let e=A5();Jf(0,`p-scroller`,52,13),wh(`onLazyLoad`,function(t){nD(e);return rD(M5(2).onLazyLoad.emit(t))}),mR(2,pr,1,5,`ng-template`,null,3,D$)(4,gr,3,0,`ng-container`,20),j0()}if(i&2){let e=M5(2);Q5(v$(9,gt,e.scrollHeight)),vR(`items`,e.visibleOptions())(`itemSize`,e.virtualScrollItemSize)(`autoSize`,!0)(`tabindex`,-1)(`lazy`,e.lazy)(`options`,e.virtualScrollOptions),gj(4),vR(`ngIf`,e.loaderTemplate||e._loaderTemplate)}}function hr(i,a){i&1&&ER(0)}function fr(i,a){if(i&1&&(H0(0),mR(1,hr,1,0,`ng-container`,28),z0()),i&2){M5();let e=F5(9),n=M5();gj(),vR(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,b$(3,cn,n.visibleOptions(),y$(2,_a)))}}function br(i,a){if(i&1&&(Jf(0,`span`),c$(1),j0()),i&2){let e=M5(2).$implicit,n=M5(3);gj(),$R(n.getOptionGroupLabel(e.optionGroup))}}function vr(i,a){if(i&1&&ER(0,58),i&2){let e=M5(2).$implicit;vR(`ngTemplateOutlet`,M5(3).groupTemplate)(`ngTemplateOutletContext`,v$(2,ln,e.optionGroup))}}function yr(i,a){if(i&1&&(H0(0),Jf(1,`li`,56),mR(2,br,2,1,`span`,20)(3,vr,1,4,`ng-container`,57),j0(),z0()),i&2){let e=M5(),n=e.$implicit,t=e.index,o=M5().options,r=M5(2);gj(),Z5(r.cx(`optionGroup`)),vR(`pBind`,r.ptm(`optionGroup`))(`ngStyle`,v$(7,gt,o.itemSize+`px`)),_h(`id`,r.id+`_`+r.getOptionIndex(t,o)),gj(),vR(`ngIf`,!r.groupTemplate&&n.optionGroup),gj(),vR(`ngIf`,n.optionGroup&&r.groupTemplate)}}function xr(i,a){if(i&1){let e=A5();H0(0),Jf(1,`li`,59),wh(`onClick`,function(t){nD(e);let o=M5().index,r=M5().options,T=M5(2);return rD(T.onOptionSelect(t,!1,T.getOptionIndex(o,r)))})(`onMouseEnter`,function(t){nD(e);let o=M5().index,r=M5().options,T=M5(2);return rD(T.onOptionMouseEnter(t,T.getOptionIndex(o,r)))}),j0(),z0()}if(i&2){let e=M5(),n=e.$implicit,t=e.index,o=M5().options,r=M5(2);gj(),vR(`pBind`,r.getPTOptions(n,r.getItemOptions,t,`option`))(`id`,r.id+`_`+r.getOptionIndex(t,o))(`option`,n)(`selected`,r.isSelected(n))(`label`,r.getOptionLabel(n))(`disabled`,r.isOptionDisabled(n))(`template`,r.itemTemplate||r._itemTemplate)(`itemCheckboxIconTemplate`,r.itemCheckboxIconTemplate||r._itemCheckboxIconTemplate)(`itemSize`,o.itemSize)(`focused`,r.focusedOptionIndex()===r.getOptionIndex(t,o))(`ariaPosInset`,r.getAriaPosInset(r.getOptionIndex(t,o)))(`ariaSetSize`,r.ariaSetSize)(`variant`,r.$variant())(`highlightOnSelect`,r.highlightOnSelect)(`pt`,r.pt)(`unstyled`,r.unstyled())}}function Cr(i,a){if(i&1&&mR(0,yr,4,9,`ng-container`,20)(1,xr,2,16,`ng-container`,20),i&2){let e=a.$implicit,n=M5(3);vR(`ngIf`,n.isOptionGroup(e)),gj(),vR(`ngIf`,!n.isOptionGroup(e))}}function Tr(i,a){if(i&1&&c$(0),i&2)K0(` `,M5(4).emptyFilterMessageLabel,` `)}function wr(i,a){i&1&&ER(0)}function Sr(i,a){if(i&1&&mR(0,wr,1,0,`ng-container`,32),i&2){let e=M5(4);vR(`ngTemplateOutlet`,e.emptyFilterTemplate||e._emptyFilterTemplate||e.emptyTemplate||e._emptyFilterTemplate)}}function Ir(i,a){if(i&1&&(Jf(0,`li`,56),y5(1,Tr,1,1)(2,Sr,1,1,`ng-container`),j0()),i&2){let e=M5().options,n=M5(2);Z5(n.cx(`emptyMessage`)),vR(`pBind`,n.ptm(`emptyMessage`))(`ngStyle`,v$(5,gt,e.itemSize+`px`)),gj(),v5(!n.emptyFilterTemplate&&!n._emptyFilterTemplate&&!n.emptyTemplate&&!n._emptyTemplate?1:2)}}function Mr(i,a){if(i&1&&c$(0),i&2)K0(` `,M5(4).emptyMessageLabel,` `)}function kr(i,a){i&1&&ER(0)}function Er(i,a){if(i&1&&mR(0,kr,1,0,`ng-container`,32),i&2){let e=M5(4);vR(`ngTemplateOutlet`,e.emptyTemplate||e._emptyTemplate)}}function Or(i,a){if(i&1&&(Jf(0,`li`,56),y5(1,Mr,1,1)(2,Er,1,1,`ng-container`),j0()),i&2){let e=M5().options,n=M5(2);Z5(n.cx(`emptyMessage`)),vR(`pBind`,n.ptm(`emptyMessage`))(`ngStyle`,v$(5,gt,e.itemSize+`px`)),gj(),v5(!n.emptyTemplate&&!n._emptyTemplate?1:2)}}function Vr(i,a){if(i&1&&(Jf(0,`ul`,53,15),mR(2,Cr,2,2,`ng-template`,54)(3,Ir,3,7,`li`,55)(4,Or,3,7,`li`,55),j0()),i&2){let e=a.$implicit,n=a.options,t=M5(2);Q5(n.contentStyle),Z5(t.cn(t.cx(`list`),n.contentStyleClass)),vR(`pBind`,t.ptm(`list`)),_h(`aria-label`,t.listLabel),gj(2),vR(`ngForOf`,e),gj(),vR(`ngIf`,t.hasFilter()&&t.isEmpty()),gj(),vR(`ngIf`,!t.hasFilter()&&t.isEmpty())}}function Pr(i,a){i&1&&ER(0)}function Fr(i,a){if(i&1&&(Jf(0,`div`),Th(1,1),mR(2,Pr,1,0,`ng-container`,32),j0()),i&2){let e=M5(2);gj(2),vR(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}function Br(i,a){if(i&1){let e=A5();Jf(0,`div`,38)(1,`span`,39,6),wh(`focus`,function(t){nD(e);return rD(M5().onFirstHiddenFocus(t))}),j0(),mR(3,Ua,1,0,`ng-container`,32)(4,cr,5,5,`div`,33),Jf(5,`div`,19),mR(6,_r,5,11,`p-scroller`,40)(7,fr,2,6,`ng-container`,20)(8,Vr,5,9,`ng-template`,null,7,D$),j0(),mR(10,Fr,3,1,`div`,20),Jf(11,`span`,39,8),wh(`focus`,function(t){nD(e);return rD(M5().onLastHiddenFocus(t))}),j0()()}if(i&2){let e=M5();Z5(e.cn(e.cx(`overlay`),e.panelStyleClass)),vR(`pBind`,e.ptm(`overlay`))(`ngStyle`,e.panelStyle),_h(`data-p`,e.overlayDataP)(`id`,e.id+`_list`),gj(),vR(`pBind`,e.ptm(`firstHiddenFocusableEl`)),_h(`tabindex`,0)(`data-p-hidden-accessible`,!0)(`data-p-hidden-focusable`,!0),gj(2),vR(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate),gj(),vR(`ngIf`,e.showHeader),gj(),Z5(e.cx(`listContainer`)),xR(`max-height`,e.virtualScroll?`auto`:e.scrollHeight||`auto`),vR(`pBind`,e.ptm(`listContainer`)),gj(),vR(`ngIf`,e.virtualScroll),gj(),vR(`ngIf`,!e.virtualScroll),gj(3),vR(`ngIf`,e.footerFacet||e.footerTemplate||e._footerTemplate),gj(),vR(`pBind`,e.ptm(`lastHiddenFocusableEl`)),_h(`tabindex`,0)(`data-p-hidden-accessible`,!0)(`data-p-hidden-focusable`,!0)}}var Lr=`
    ${on}

    /* For Optimus */
   .p-multiselect.ng-invalid.ng-dirty {
        border-color: dt('multiselect.invalid.border.color');
    }
    p-multiSelect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
    p-multi-select.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
    p-multiselect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder {
        color: dt('multiselect.invalid.placeholder.color');
    }
`;var Nr={root:({instance:i})=>({position:i.$appendTo()===`self`?`relative`:void 0})};var Dr={root:({instance:i})=>[`p-multiselect p-component p-inputwrapper`,{"p-multiselect p-component p-inputwrapper":!0,"p-multiselect-display-chip":i.display===`chip`,"p-disabled":i.$disabled(),"p-invalid":i.invalid(),"p-variant-filled":i.$variant()===`filled`,"p-focus":i.focused,"p-inputwrapper-filled":i.$filled(),"p-inputwrapper-focus":i.focused||i.overlayVisible,"p-multiselect-open":i.overlayVisible,"p-multiselect-fluid":i.hasFluid,"p-multiselect-sm p-inputfield-sm":i.size()===`small`,"p-multiselect-lg p-inputfield-lg":i.size()===`large`}],labelContainer:`p-multiselect-label-container`,label:({instance:i})=>({"p-multiselect-label":!0,"p-placeholder":i.label()===i.placeholder(),"p-multiselect-label-empty":!i.placeholder()&&!i.defaultLabel&&(!i.modelValue()||i.modelValue().length===0)}),chipItem:`p-multiselect-chip-item`,pcChip:`p-multiselect-chip`,chipIcon:`p-multiselect-chip-icon`,dropdown:`p-multiselect-dropdown`,loadingIcon:`p-multiselect-loading-icon`,dropdownIcon:`p-multiselect-dropdown-icon`,overlay:`p-multiselect-overlay p-component-overlay p-component`,header:`p-multiselect-header`,pcFilterContainer:`p-multiselect-filter-container`,pcFilter:`p-multiselect-filter`,listContainer:`p-multiselect-list-container`,list:`p-multiselect-list`,optionGroup:`p-multiselect-option-group`,option:({instance:i})=>({"p-multiselect-option":!0,"p-multiselect-option-selected":i.selected&&i.highlightOnSelect,"p-disabled":i.disabled,"p-focus":i.focused}),emptyMessage:`p-multiselect-empty-message`,clearIcon:`p-multiselect-clear-icon`};var mt=(()=>{class i extends k1{name=`multiselect`;style=Lr;classes=Dr;inlineStyles=Nr;static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵprov=K({token:i,factory:i.ɵfac})}return i})();var an=new B(`MULTISELECT_INSTANCE`);var Ar=new B(`MULTISELECT_ITEM_INSTANCE`);var zr={provide:Ae,useExisting:Zd(()=>Tt),multi:!0};var Rr=(()=>{class i extends k$1{$pcMultiSelectItem=k(Ar,{optional:!0,skipSelf:!0})??void 0;hostName=`MultiSelect`;getPTOptions(e){return this.ptm(e,{context:{selected:this.selected,focused:this.focused,disabled:this.disabled}})}option;selected;label;disabled;itemSize;focused;ariaPosInset;ariaSetSize;variant;template;checkIconTemplate;itemCheckboxIconTemplate;highlightOnSelect;onClick=new Rt;onMouseEnter=new Rt;_componentStyle=k(mt);onOptionClick(e){this.onClick.emit({originalEvent:e,option:this.option,selected:this.selected}),e.stopPropagation(),e.preventDefault()}onOptionMouseEnter(e){this.onMouseEnter.emit({originalEvent:e,option:this.option,selected:this.selected})}static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵcmp=la$1({type:i,selectors:[[`li`,`pMultiSelectItem`,``]],hostAttrs:[`role`,`option`],hostVars:13,hostBindings:function(n,t){n&1&&wh(`click`,function(r){return t.onOptionClick(r)})(`mouseenter`,function(r){return t.onOptionMouseEnter(r)}),n&2&&(_h(`aria-label`,t.label)(`aria-setsize`,t.ariaSetSize)(`aria-posinset`,t.ariaPosInset)(`aria-selected`,t.selected)(`data-p-selected`,t.selected)(`data-p-focused`,t.focused)(`data-p-highlight`,t.selected)(`data-p-disabled`,t.disabled)(`aria-checked`,t.selected),Z5(t.cx(`option`)),xR(`height`,t.itemSize,`px`))},inputs:{option:`option`,selected:[2,`selected`,`selected`,Ou],label:`label`,disabled:[2,`disabled`,`disabled`,Ou],itemSize:[2,`itemSize`,`itemSize`,oH],focused:[2,`focused`,`focused`,Ou],ariaPosInset:`ariaPosInset`,ariaSetSize:`ariaSetSize`,variant:`variant`,template:`template`,checkIconTemplate:`checkIconTemplate`,itemCheckboxIconTemplate:`itemCheckboxIconTemplate`,highlightOnSelect:[2,`highlightOnSelect`,`highlightOnSelect`,Ou]},outputs:{onClick:`onClick`,onMouseEnter:`onMouseEnter`},features:[m$([mt]),pR],decls:4,vars:13,consts:[[`icon`,``],[3,`ngModel`,`binary`,`tabindex`,`variant`,`ariaLabel`,`pt`,`unstyled`],[4,`ngIf`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,t){n&1&&(Jf(0,`p-checkbox`,1),mR(1,Lo,3,0,`ng-container`,2),j0(),oU(),mR(2,No,2,1,`span`,2)(3,Do,1,0,`ng-container`,3)),n&2&&(vR(`ngModel`,t.selected)(`binary`,!0)(`tabindex`,-1)(`variant`,t.variant)(`ariaLabel`,t.label)(`pt`,t.getPTOptions(`pcOptionCheckbox`))(`unstyled`,t.unstyled()),sU(),gj(),vR(`ngIf`,t.itemCheckboxIconTemplate),gj(),vR(`ngIf`,!t.template),gj(),vR(`ngTemplateOutlet`,t.template)(`ngTemplateOutletContext`,v$(11,ln,t.option)))},dependencies:[jh,DH,AH,ut,En$1,Dn$1,Yt$1,VEe],encapsulation:2,changeDetection:1})}return i})();var Tt=(()=>{class i extends Ut{zone;filterService;overlayService;componentName=`MultiSelect`;id;ariaLabel;styleClass;panelStyle;panelStyleClass;inputId;readonly;group;filter=!0;filterPlaceHolder;filterLocale;overlayVisible=!1;tabindex=0;dataKey;ariaLabelledBy;set displaySelectedLabel(e){this._displaySelectedLabel=e}get displaySelectedLabel(){return this._displaySelectedLabel}set maxSelectedLabels(e){this._maxSelectedLabels=e}get maxSelectedLabels(){return this._maxSelectedLabels}selectionLimit;selectedItemsLabel;showToggleAll=!0;emptyFilterMessage=``;emptyMessage=``;resetFilterOnHide=!1;dropdownIcon;chipIcon;optionLabel;optionValue;optionDisabled;optionGroupLabel=`label`;optionGroupChildren=`items`;showHeader=!0;filterBy;scrollHeight=`200px`;lazy=!1;virtualScroll;loading=!1;virtualScrollItemSize;loadingIcon;virtualScrollOptions;overlayOptions;ariaFilterLabel;filterMatchMode=`contains`;tooltip=``;tooltipPosition=`right`;tooltipPositionStyle=`absolute`;tooltipStyleClass;autofocusFilter=!1;display=`comma`;autocomplete=`off`;showClear=!1;autofocus;set placeholder(e){this._placeholder.set(e)}get placeholder(){return this._placeholder.asReadonly()}get options(){return this._options()}set options(e){u1(this._options(),e)||this._options.set(e||[])}get filterValue(){return this._filterValue()}set filterValue(e){this._filterValue.set(e)}get selectAll(){return this._selectAll}set selectAll(e){this._selectAll=e}focusOnHover=!0;filterFields;selectOnFocus=!1;autoOptionFocus=!1;highlightOnSelect=!0;size=kh();variant=kh();fluid=kh(void 0,{transform:Ou});appendTo=kh(void 0);motionOptions=kh(void 0);onChange=new Rt;onFilter=new Rt;onFocus=new Rt;onBlur=new Rt;onClick=new Rt;onClear=new Rt;onPanelShow=new Rt;onPanelHide=new Rt;onLazyLoad=new Rt;onRemove=new Rt;onSelectAllChange=new Rt;overlayViewChild;filterInputChild;focusInputViewChild;itemsViewChild;scroller;lastHiddenFocusableElementOnOverlay;firstHiddenFocusableElementOnOverlay;headerCheckboxViewChild;footerFacet;headerFacet;_componentStyle=k(mt);bindDirectiveInstance=k(w,{self:!0});searchValue;searchTimeout;_selectAll=null;_placeholder=ie(void 0);_disableTooltip=!1;value;_filteredOptions;focus;filtered;itemTemplate;groupTemplate;loaderTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;selectedItemsTemplate;loadingIconTemplate;filterIconTemplate;removeTokenIconTemplate;chipIconTemplate;clearIconTemplate;dropdownIconTemplate;itemCheckboxIconTemplate;headerCheckboxIconTemplate;templates;_itemTemplate;_groupTemplate;_loaderTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_selectedItemsTemplate;_loadingIconTemplate;_filterIconTemplate;_removeTokenIconTemplate;_chipIconTemplate;_clearIconTemplate;_dropdownIconTemplate;_itemCheckboxIconTemplate;_headerCheckboxIconTemplate;$variant=xu(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());$appendTo=xu(()=>this.appendTo()||this.config.overlayAppendTo());$pcMultiSelect=k(an,{optional:!0,skipSelf:!0})??void 0;pcFluid=k(Ue$1,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case`item`:this._itemTemplate=e.template;break;case`group`:this._groupTemplate=e.template;break;case`selectedItems`:case`selecteditems`:this._selectedItemsTemplate=e.template;break;case`header`:this._headerTemplate=e.template;break;case`filter`:this._filterTemplate=e.template;break;case`emptyfilter`:this._emptyFilterTemplate=e.template;break;case`empty`:this._emptyTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;case`loader`:this._loaderTemplate=e.template;break;case`headercheckboxicon`:this._headerCheckboxIconTemplate=e.template;break;case`loadingicon`:this._loadingIconTemplate=e.template;break;case`filtericon`:this._filterIconTemplate=e.template;break;case`removetokenicon`:this._removeTokenIconTemplate=e.template;break;case`clearicon`:this._clearIconTemplate=e.template;break;case`dropdownicon`:this._dropdownIconTemplate=e.template;break;case`itemcheckboxicon`:this._itemCheckboxIconTemplate=e.template;break;case`chipicon`:this._chipIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}headerCheckboxFocus;filterOptions;preventModelTouched;focused=!1;itemsWrapper;_displaySelectedLabel=!0;_maxSelectedLabels=3;modelValue=ie(null);_filterValue=ie(null);_options=ie([]);startRangeIndex=ie(-1);focusedOptionIndex=ie(-1);selectedOptions;clickInProgress=!1;get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(BEe.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(BEe.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.modelValue()!==``&&Fe(this.modelValue())&&this.showClear&&!this.$disabled()&&!this.readonly&&this.$filled()}get toggleAllAriaLabel(){return this.config.translation.aria?this.config.translation.aria[this.allSelected()?`selectAll`:`unselectAll`]:void 0}get listLabel(){return this.config.getTranslation(BEe.ARIA).listLabel}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}visibleOptions=xu(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),n=d1(e)&&On.isObject(e[0]);if(this._filterValue()){let t;if(n?t=this.filterService.filter(e,this.searchFields(),this._filterValue(),this.filterMatchMode,this.filterLocale):t=e.filter(o=>o.toString().toLocaleLowerCase().includes(this._filterValue().toLocaleLowerCase())),this.group){let o=this.options||[],r$1=[];return o.forEach(T=>{let Ze=this.getOptionGroupChildren(T).filter(On=>t.includes(On));Ze.length>0&&r$1.push(s(r({},T),{[typeof this.optionGroupChildren==`string`?this.optionGroupChildren:`items`]:[...Ze]}))}),this.flatOptions(r$1)}return t}return e});label=xu(()=>{let e,n=this.modelValue();if(n&&n?.length&&this.displaySelectedLabel){if(Fe(this.maxSelectedLabels)&&n?.length>(this.maxSelectedLabels||0))return this.getSelectedItemsLabel();e=``;for(let t=0;t<n.length;t++)t!==0&&(e+=`, `),e+=this.getLabelByValue(n[t])}else e=this.placeholder()||``;return e});chipSelectedItems=xu(()=>Fe(this.maxSelectedLabels)&&this.modelValue()&&this.modelValue()?.length>(this.maxSelectedLabels||0)?this.modelValue()?.slice(0,this.maxSelectedLabels):this.modelValue());constructor(e,n,t){super(),this.zone=e,this.filterService=n,this.overlayService=t,Vi$1(()=>{let o=this.modelValue(),r=this.getAllVisibleAndNonVisibleOptions();r&&Fe(r)&&(this.optionValue&&this.optionLabel&&o?this.selectedOptions=r.filter(T=>o.includes(T[this.optionLabel])||o.includes(T[this.optionValue])):this.selectedOptions=o,this.cd.markForCheck())})}onInit(){this.id=this.id||pt(`pn_id_`),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}maxSelectionLimitReached(){return this.selectionLimit&&this.modelValue()&&this.modelValue().length===this.selectionLimit}onAfterViewInit(){this.overlayVisible&&this.show()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`])),this.filtered&&(this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild?.alignOverlay()},1)}),this.filtered=!1)}flatOptions(e){return(e||[]).reduce((n,t,o)=>{n.push({optionGroup:t,group:!0,index:o});let r=this.getOptionGroupChildren(t);return r&&r.forEach(T=>n.push(T)),n},[])}autoUpdateModel(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()){this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());let e=this.getOptionValue(this.visibleOptions()[this.focusedOptionIndex()]);this.onOptionSelect({originalEvent:null,option:[e]})}}updateModel(e,n){this.value=e,this.onModelChange(e),this.writeValue(e)}onInputClick(e){e.stopPropagation(),e.preventDefault(),this.focusedOptionIndex.set(-1)}onOptionSelect(e,n=!1,t=-1){let{originalEvent:o,option:r}=e;if(this.$disabled()||this.isOptionDisabled(r))return;let T=this.isSelected(r),L=[];T?L=this.modelValue().filter(Ze=>!em(Ze,this.getOptionValue(r),this.equalityKey()||``)):L=[...this.modelValue()||[],this.getOptionValue(r)],this.updateModel(L,o),t!==-1&&this.focusedOptionIndex.set(t),n&&hEe(this.focusInputViewChild?.nativeElement),this.onChange.emit({originalEvent:e,value:L,itemValue:r})}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}onOptionSelectRange(e,n=-1,t=-1){if(n===-1&&(n=this.findNearestSelectedOptionIndex(t,!0)),t===-1&&(t=this.findNearestSelectedOptionIndex(n)),n!==-1&&t!==-1){let o=Math.min(n,t),r=Math.max(n,t),T=this.visibleOptions().slice(o,r+1).filter(L=>this.isValidOption(L)).map(L=>this.getOptionValue(L));this.updateModel(T,e)}}searchFields(){return(this.filterBy||this.optionLabel||`label`).split(`,`)}findNearestSelectedOptionIndex(e,n=!1){let t=-1;return this.hasSelectedOption()&&(n?(t=this.findPrevSelectedOptionIndex(e),t=t===-1?this.findNextSelectedOptionIndex(e):t):(t=this.findNextSelectedOptionIndex(e),t=t===-1?this.findPrevSelectedOptionIndex(e):t)),t>-1?t:e}findPrevSelectedOptionIndex(e){let n=this.hasSelectedOption()&&e>0?vG(this.visibleOptions().slice(0,e),t=>this.isValidSelectedOption(t)):-1;return n>-1?n:-1}findFirstFocusedOptionIndex(){let e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findFirstSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextSelectedOptionIndex(e){let n=this.hasSelectedOption()&&e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(t=>this.isValidSelectedOption(t)):-1;return n>-1?n+e+1:-1}equalityKey(){return this.optionValue?null:this.dataKey}hasSelectedOption(){return Fe(this.modelValue())}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isOptionGroup(e){return e&&(this.group||this.optionGroupLabel)&&e.optionGroup&&e.group}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.maxSelectionLimitReached()&&!this.isSelected(e)?!0:this.optionDisabled?ql$1(e,this.optionDisabled):e&&e.disabled!==void 0?e.disabled:!1}isSelected(e){let n=this.getOptionValue(e);return(this.modelValue()||[]).some(t=>em(t,n,this.equalityKey()||``))}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale))}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}getLabelByValue(e){let t=(this.group?this.flatOptions(this._options()):this._options()||[]).find(o=>!this.isOptionGroup(o)&&em(this.getOptionValue(o),e,this.equalityKey()||``));return t?this.getOptionLabel(t):null}getSelectedItemsLabel(){let e=/{(.*?)}/,n=this.selectedItemsLabel?this.selectedItemsLabel:this.config.getTranslation(BEe.SELECTION_MESSAGE);return e.test(n)?n.replace(n.match(e)[0],this.modelValue().length+``):n}getOptionLabel(e){return this.optionLabel?ql$1(e,this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?ql$1(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}getOptionGroupLabel(e){return this.optionGroupLabel?ql$1(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return e?this.optionGroupChildren?ql$1(e,this.optionGroupChildren):e.items:[]}onKeyDown(e){if(this.$disabled()){e.preventDefault();return}let n=e.metaKey||e.ctrlKey;switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`Space`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`ShiftLeft`:case`ShiftRight`:this.onShiftKey();break;default:if(e.code===`KeyA`&&n){let t=this.visibleOptions().filter(o=>this.isValidOption(o)).map(o=>this.getOptionValue(o));this.updateModel(t,e),e.preventDefault();break}!n&&bG(e.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(e,e.key),e.preventDefault());break}}onFilterKeyDown(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e,!0);break;case`ArrowLeft`:case`ArrowRight`:this.onArrowLeftKey(e,!0);break;case`Home`:this.onHomeKey(e,!0);break;case`End`:this.onEndKey(e,!0);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e,!0);break;default:break}}onArrowLeftKey(e,n=!1){n&&this.focusedOptionIndex.set(-1)}onArrowDownKey(e){let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex(),n),this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show(),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e,n=!1){if(e.altKey&&!n)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let t=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,t,this.startRangeIndex()),this.changeFocusedOptionIndex(e,t),!this.overlayVisible&&this.show(),e.preventDefault()}e.stopPropagation()}onHomeKey(e,n=!1){let{currentTarget:t}=e;if(n){let o=t.value.length;t.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex.set(-1)}else{let o=e.metaKey||e.ctrlKey,r=this.findFirstOptionIndex();e.shiftKey&&o&&this.onOptionSelectRange(e,r,this.startRangeIndex()),this.changeFocusedOptionIndex(e,r),!this.overlayVisible&&this.show()}e.preventDefault()}onEndKey(e,n=!1){let{currentTarget:t}=e;if(n){let o=t.value.length;t.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex.set(-1)}else{let o=e.metaKey||e.ctrlKey,r=this.findLastFocusedOptionIndex();e.shiftKey&&o&&this.onOptionSelectRange(e,this.startRangeIndex(),r),this.changeFocusedOptionIndex(e,r),!this.overlayVisible&&this.show()}e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){this.overlayVisible?this.focusedOptionIndex()!==-1&&(e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex()):this.onOptionSelect({originalEvent:e,option:this.visibleOptions()[this.focusedOptionIndex()]})):this.onArrowDownKey(e),e.preventDefault()}onEscapeKey(e){this.overlayVisible&&(this.hide(!0),e.stopPropagation(),e.preventDefault())}onTabKey(e,n=!1){n||(this.overlayVisible&&this.hasFocusableElements()?(hEe(e.shiftKey?this.lastHiddenFocusableElementOnOverlay?.nativeElement:this.firstHiddenFocusableElementOnOverlay?.nativeElement),e.preventDefault()):this.overlayVisible&&this.hide(this.filter))}onShiftKey(){this.startRangeIndex.set(this.focusedOptionIndex())}onContainerClick(e){if(!(this.$disabled()||this.loading||this.readonly||e.target?.isSameNode?.(this.focusInputViewChild?.nativeElement))){if(!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(e.target)){if(this.clickInProgress)return;this.clickInProgress=!0,setTimeout(()=>{this.clickInProgress=!1},150),this.overlayVisible?this.hide(!0):this.show(!0)}this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),this.onClick.emit(e),this.cd.detectChanges()}}onFirstHiddenFocus(e){hEe(e.relatedTarget===this.focusInputViewChild?.nativeElement?gEe(this.overlayViewChild?.overlayViewChild?.nativeElement,`:not([data-p-hidden-focusable="true"])`):this.focusInputViewChild?.nativeElement)}onInputFocus(e){this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit({originalEvent:e})}onInputBlur(e){this.focused=!1,this.onBlur.emit({originalEvent:e}),this.preventModelTouched||this.onModelTouched(),this.preventModelTouched=!1}onFilterInputChange(e){let n=e.target.value;this._filterValue.set(n),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller?.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild?.alignOverlay()})}onLastHiddenFocus(e){hEe(e.relatedTarget===this.focusInputViewChild?.nativeElement?yEe(this.overlayViewChild?.overlayViewChild?.nativeElement,`:not([data-p-hidden-focusable="true"])`):this.focusInputViewChild?.nativeElement)}onOptionMouseEnter(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)}onFilterBlur(e){this.focusedOptionIndex.set(-1)}onToggleAll(e){if(!(this.$disabled()||this.readonly)){if(this.selectAll!=null)this.onSelectAllChange.emit({originalEvent:e,checked:!this.allSelected()});else{let n=this.getAllVisibleAndNonVisibleOptions().filter(L=>this.isSelected(L)&&(this.optionDisabled?ql$1(L,this.optionDisabled):L&&L.disabled!==void 0?L.disabled:!1)),t=this.allSelected()?this.visibleOptions().filter(L=>!this.isValidOption(L)&&this.isSelected(L)):this.visibleOptions().filter(L=>this.isSelected(L)||this.isValidOption(L)),r=[...this.filter&&!this.allSelected()?this.getAllVisibleAndNonVisibleOptions().filter(L=>this.isSelected(L)&&this.isValidOption(L)):[],...n,...t].map(L=>this.getOptionValue(L)),T=[...new Set(r)];this.updateModel(T,e),(!T.length||T.length===this.getAllVisibleAndNonVisibleOptions().length)&&this.onSelectAllChange.emit({originalEvent:e,checked:!!T.length})}this.partialSelected()&&(this.selectedOptions=[],this.cd.markForCheck()),this.onChange.emit({originalEvent:e,value:this.value}),Yt.focus(this.headerCheckboxViewChild?.inputViewChild?.nativeElement),this.headerCheckboxFocus=!0,e.originalEvent.preventDefault(),e.originalEvent.stopPropagation()}}changeFocusedOptionIndex(e,n){this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView())}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let t=fEe(this.itemsViewChild.nativeElement,`li[id="${n}"]`);t?t.scrollIntoView&&t.scrollIntoView({block:`nearest`,inline:`nearest`}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}allSelected(){return this.selectAll!==null?this.selectAll:Fe(this.visibleOptions())&&this.visibleOptions().every(e=>this.isOptionGroup(e)||this.isOptionDisabled(e)||this.isSelected(e))}partialSelected(){return this.selectedOptions&&this.selectedOptions.length>0&&this.selectedOptions.length<(this.options?.length||0)}show(e){this.overlayVisible=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex();this.focusedOptionIndex.set(n),e&&hEe(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}hide(e){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.filter&&this.resetFilterOnHide&&this.resetFilter(),this.overlayOptions?.mode===`modal`&&hn$1(),e&&hEe(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayBeforeEnter(e){if(this.itemsWrapper=fEe(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?`[data-pc-name="virtualscroller"]`:`[data-pc-section="listcontainer"]`),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let n=this.modelValue()?this.focusedOptionIndex():-1;n!==-1&&this.scroller?.scrollToIndex(n)}else{let n=fEe(this.itemsWrapper,`[data-pc-section="option"][data-p-selected="true"]`);n&&n.scrollIntoView({block:`nearest`,inline:`nearest`})}this.filterInputChild&&this.filterInputChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&this.filterInputChild.nativeElement.focus()),this.onPanelShow.emit(e)}onOverlayAfterLeave(e){this.itemsWrapper=null,this.onModelTouched(),this.onPanelHide.emit(e)}resetFilter(){this.filterInputChild&&this.filterInputChild.nativeElement&&(this.filterInputChild.nativeElement.value=``),this._filterValue.set(null),this._filteredOptions=null}onOverlayHide(e){this.focusedOptionIndex.set(-1),this.filter&&this.resetFilterOnHide&&this.resetFilter()}close(e){this.hide(),e.preventDefault(),e.stopPropagation()}clear(e){this.value=[],this.updateModel(null,e),this.selectedOptions=[],this.onClear.emit(),this._disableTooltip=!0,e.stopPropagation()}labelContainerMouseLeave(){this._disableTooltip&&(this._disableTooltip=!1)}removeOption(e,n){let t=this.modelValue().filter(o=>!em(o,e,this.equalityKey()||``));this.updateModel(t,n),this.onChange.emit({originalEvent:n,value:t,itemValue:e}),this.onRemove.emit({newValue:t,removed:e}),n&&n.stopPropagation()}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(t=>this.isValidOption(t)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?vG(this.visibleOptions().slice(0,e),t=>this.isValidOption(t)):-1;return n>-1?n:e}findLastSelectedOptionIndex(){return this.hasSelectedOption()?vG(this.visibleOptions(),e=>this.isValidSelectedOption(e)):-1}findLastFocusedOptionIndex(){let e=this.findLastSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findLastOptionIndex(){return vG(this.visibleOptions(),e=>this.isValidOption(e))}searchOptions(e,n){this.searchValue=(this.searchValue||``)+n;let t=-1,o=!1;return this.focusedOptionIndex()!==-1?(t=this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(r=>this.isOptionMatched(r)),t=t===-1?this.visibleOptions().slice(0,this.focusedOptionIndex()).findIndex(r=>this.isOptionMatched(r)):t+this.focusedOptionIndex()):t=this.visibleOptions().findIndex(r=>this.isOptionMatched(r)),t!==-1&&(o=!0),t===-1&&this.focusedOptionIndex()===-1&&(t=this.findFirstFocusedOptionIndex()),t!==-1&&this.changeFocusedOptionIndex(e,t),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue=``,this.searchTimeout=null},500),o}hasFocusableElements(){return y1(this.overlayViewChild?.overlayViewChild?.nativeElement,`:not([data-p-hidden-focusable="true"])`).length>0}hasFilter(){return this._filterValue()&&this._filterValue().trim().length>0}get containerDataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.size()]:this.size()})}get labelDataP(){return this.cn({placeholder:this.label===this.placeholder,clearable:this.showClear,disabled:this.disabled,[this.size()]:this.size(),"has-chip":this.display===`chip`&&this.value&&this.value.length&&(this.maxSelectedLabels?this.value.length<=this.maxSelectedLabels:!0),empty:!this.placeholder&&!this.$filled})}get dropdownIconDataP(){return this.cn({[this.size()]:this.size()})}get overlayDataP(){return this.cn({[`overlay-`+this.appendTo]:`overlay-`+this.appendTo})}writeControlValue(e,n){this.value=e,n(e),this.cd.markForCheck()}getHeaderCheckboxPTOptions(e){return this.ptm(e,{context:{selected:this.allSelected()}})}getPTOptions(e,n,t,o){return this.ptm(o,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(t,n),disabled:this.isOptionDisabled(e)}})}static ɵfac=function(n){return new(n||i)(pe(Te),pe(MEe),pe(OEe))};static ɵcmp=la$1({type:i,selectors:[[`p-multiSelect`],[`p-multiselect`],[`p-multi-select`]],contentQueries:function(n,t,o){if(n&1&&Ch(o,LEe,5)(o,PEe,5)(o,Ao,4)(o,zo,4)(o,Ro,4)(o,jo,4)(o,qo,4)(o,Ho,4)(o,Wo,4)(o,$o,4)(o,Ko,4)(o,Qo,4)(o,Go,4)(o,Uo,4)(o,Zo,4)(o,Xo,4)(o,Yo,4)(o,Jo,4)(o,ea,4)(o,FEe,4),n&2){let r;W0(r=G0())&&(t.footerFacet=r.first),W0(r=G0())&&(t.headerFacet=r.first),W0(r=G0())&&(t.itemTemplate=r.first),W0(r=G0())&&(t.groupTemplate=r.first),W0(r=G0())&&(t.loaderTemplate=r.first),W0(r=G0())&&(t.headerTemplate=r.first),W0(r=G0())&&(t.filterTemplate=r.first),W0(r=G0())&&(t.footerTemplate=r.first),W0(r=G0())&&(t.emptyFilterTemplate=r.first),W0(r=G0())&&(t.emptyTemplate=r.first),W0(r=G0())&&(t.selectedItemsTemplate=r.first),W0(r=G0())&&(t.loadingIconTemplate=r.first),W0(r=G0())&&(t.filterIconTemplate=r.first),W0(r=G0())&&(t.removeTokenIconTemplate=r.first),W0(r=G0())&&(t.chipIconTemplate=r.first),W0(r=G0())&&(t.clearIconTemplate=r.first),W0(r=G0())&&(t.dropdownIconTemplate=r.first),W0(r=G0())&&(t.itemCheckboxIconTemplate=r.first),W0(r=G0())&&(t.headerCheckboxIconTemplate=r.first),W0(r=G0())&&(t.templates=r)}},viewQuery:function(n,t){if(n&1&&CR(ta,5)(ia,5)(na,5)(oa,5)(aa,5)(ra,5)(la,5)(sa,5),n&2){let o;W0(o=G0())&&(t.overlayViewChild=o.first),W0(o=G0())&&(t.filterInputChild=o.first),W0(o=G0())&&(t.focusInputViewChild=o.first),W0(o=G0())&&(t.itemsViewChild=o.first),W0(o=G0())&&(t.scroller=o.first),W0(o=G0())&&(t.lastHiddenFocusableElementOnOverlay=o.first),W0(o=G0())&&(t.firstHiddenFocusableElementOnOverlay=o.first),W0(o=G0())&&(t.headerCheckboxViewChild=o.first)}},hostVars:6,hostBindings:function(n,t){n&1&&wh(`click`,function(r){return t.onContainerClick(r)}),n&2&&(_h(`id`,t.id)(`data-p`,t.containerDataP),Q5(t.sx(`root`)),Z5(t.cn(t.cx(`root`),t.styleClass)))},inputs:{id:`id`,ariaLabel:`ariaLabel`,styleClass:`styleClass`,panelStyle:`panelStyle`,panelStyleClass:`panelStyleClass`,inputId:`inputId`,readonly:[2,`readonly`,`readonly`,Ou],group:[2,`group`,`group`,Ou],filter:[2,`filter`,`filter`,Ou],filterPlaceHolder:`filterPlaceHolder`,filterLocale:`filterLocale`,overlayVisible:[2,`overlayVisible`,`overlayVisible`,Ou],tabindex:[2,`tabindex`,`tabindex`,oH],dataKey:`dataKey`,ariaLabelledBy:`ariaLabelledBy`,displaySelectedLabel:`displaySelectedLabel`,maxSelectedLabels:`maxSelectedLabels`,selectionLimit:[2,`selectionLimit`,`selectionLimit`,oH],selectedItemsLabel:`selectedItemsLabel`,showToggleAll:[2,`showToggleAll`,`showToggleAll`,Ou],emptyFilterMessage:`emptyFilterMessage`,emptyMessage:`emptyMessage`,resetFilterOnHide:[2,`resetFilterOnHide`,`resetFilterOnHide`,Ou],dropdownIcon:`dropdownIcon`,chipIcon:`chipIcon`,optionLabel:`optionLabel`,optionValue:`optionValue`,optionDisabled:`optionDisabled`,optionGroupLabel:`optionGroupLabel`,optionGroupChildren:`optionGroupChildren`,showHeader:[2,`showHeader`,`showHeader`,Ou],filterBy:`filterBy`,scrollHeight:`scrollHeight`,lazy:[2,`lazy`,`lazy`,Ou],virtualScroll:[2,`virtualScroll`,`virtualScroll`,Ou],loading:[2,`loading`,`loading`,Ou],virtualScrollItemSize:[2,`virtualScrollItemSize`,`virtualScrollItemSize`,oH],loadingIcon:`loadingIcon`,virtualScrollOptions:`virtualScrollOptions`,overlayOptions:`overlayOptions`,ariaFilterLabel:`ariaFilterLabel`,filterMatchMode:`filterMatchMode`,tooltip:`tooltip`,tooltipPosition:`tooltipPosition`,tooltipPositionStyle:`tooltipPositionStyle`,tooltipStyleClass:`tooltipStyleClass`,autofocusFilter:[2,`autofocusFilter`,`autofocusFilter`,Ou],display:`display`,autocomplete:`autocomplete`,showClear:[2,`showClear`,`showClear`,Ou],autofocus:[2,`autofocus`,`autofocus`,Ou],placeholder:`placeholder`,options:`options`,filterValue:`filterValue`,selectAll:`selectAll`,focusOnHover:[2,`focusOnHover`,`focusOnHover`,Ou],filterFields:`filterFields`,selectOnFocus:[2,`selectOnFocus`,`selectOnFocus`,Ou],autoOptionFocus:[2,`autoOptionFocus`,`autoOptionFocus`,Ou],highlightOnSelect:[2,`highlightOnSelect`,`highlightOnSelect`,Ou],size:[1,`size`],variant:[1,`variant`],fluid:[1,`fluid`],appendTo:[1,`appendTo`],motionOptions:[1,`motionOptions`]},outputs:{onChange:`onChange`,onFilter:`onFilter`,onFocus:`onFocus`,onBlur:`onBlur`,onClick:`onClick`,onClear:`onClear`,onPanelShow:`onPanelShow`,onPanelHide:`onPanelHide`,onLazyLoad:`onLazyLoad`,onRemove:`onRemove`,onSelectAllChange:`onSelectAllChange`},features:[m$([zr,mt,{provide:an,useExisting:i},{provide:R,useExisting:i}]),ZU([w]),pR],ngContentSelectors:da,decls:16,vars:51,consts:[[`focusInput`,``],[`elseBlock`,``],[`overlay`,``],[`content`,``],[`token`,``],[`removeicon`,``],[`firstHiddenFocusableEl`,``],[`buildInItems`,``],[`lastHiddenFocusableEl`,``],[`builtInFilterElement`,``],[`headerCheckbox`,``],[`icon`,``],[`filterInput`,``],[`scroller`,``],[`loader`,``],[`items`,``],[1,`p-hidden-accessible`,3,`pBind`],[`role`,`combobox`,3,`focus`,`blur`,`keydown`,`pTooltip`,`pTooltipUnstyled`,`tooltipPosition`,`positionStyle`,`tooltipStyleClass`,`pAutoFocus`,`pBind`],[3,`mouseleave`,`pBind`,`pTooltip`,`pTooltipUnstyled`,`tooltipDisabled`,`tooltipPosition`,`positionStyle`,`tooltipStyleClass`],[3,`pBind`],[4,`ngIf`],[4,`ngIf`,`ngIfElse`],[3,`visibleChange`,`onBeforeEnter`,`onAfterLeave`,`onHide`,`hostAttrSelector`,`visible`,`options`,`target`,`appendTo`,`unstyled`,`pt`,`motionOptions`],[3,`pBind`,`class`],[3,`pBind`,`class`,4,`ngFor`,`ngForOf`],[3,`onRemove`,`pt`,`unstyled`,`label`,`removable`,`removeIcon`],[3,`class`,`pBind`,`click`,4,`ngIf`],[3,`click`,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`times`,3,`pBind`,`class`,`click`,4,`ngIf`],[3,`pBind`,`class`,`click`,4,`ngIf`],[`data-p-icon`,`times`,3,`click`,`pBind`],[4,`ngTemplateOutlet`],[3,`pBind`,`class`,4,`ngIf`],[3,`pBind`,`class`,`ngClass`,4,`ngIf`],[`data-p-icon`,`chevron-down`,3,`pBind`,`class`,4,`ngIf`],[3,`pBind`,`ngClass`],[`data-p-icon`,`chevron-down`,3,`pBind`],[3,`pBind`,`ngStyle`],[`role`,`presentation`,1,`p-hidden-accessible`,`p-hidden-focusable`,3,`focus`,`pBind`],[3,`items`,`style`,`itemSize`,`autoSize`,`tabindex`,`lazy`,`options`,`onLazyLoad`,4,`ngIf`],[3,`pt`,`ngModel`,`ariaLabel`,`binary`,`variant`,`disabled`,`unstyled`,`onChange`,4,`ngIf`],[3,`pt`,`class`,`unstyled`,4,`ngIf`],[3,`onChange`,`pt`,`ngModel`,`ariaLabel`,`binary`,`variant`,`disabled`,`unstyled`],[`data-p-icon`,`check`,3,`class`,`pBind`,4,`ngIf`],[`data-p-icon`,`check`,3,`pBind`],[3,`pt`,`unstyled`],[`pInputText`,``,`type`,`text`,`role`,`searchbox`,3,`input`,`keydown`,`click`,`blur`,`pt`,`variant`,`value`,`unstyled`],[`data-p-icon`,`search`,3,`pBind`,4,`ngIf`],[`class`,`p-multiselect-filter-icon`,3,`pBind`,4,`ngIf`],[`data-p-icon`,`search`,3,`pBind`],[1,`p-multiselect-filter-icon`,3,`pBind`],[3,`onLazyLoad`,`items`,`itemSize`,`autoSize`,`tabindex`,`lazy`,`options`],[`role`,`listbox`,`aria-multiselectable`,`true`,3,`pBind`],[`ngFor`,``,3,`ngForOf`],[`role`,`option`,3,`pBind`,`class`,`ngStyle`,4,`ngIf`],[`role`,`option`,3,`pBind`,`ngStyle`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`,4,`ngIf`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`pMultiSelectItem`,``,`pRipple`,``,3,`onClick`,`onMouseEnter`,`pBind`,`id`,`option`,`selected`,`label`,`disabled`,`template`,`itemCheckboxIconTemplate`,`itemSize`,`focused`,`ariaPosInset`,`ariaSetSize`,`variant`,`highlightOnSelect`,`pt`,`unstyled`]],template:function(n,t){if(n&1){let o=A5();Ih(ca),Jf(0,`div`,16)(1,`input`,17,0),wh(`focus`,function(T){return t.onInputFocus(T)})(`blur`,function(T){return t.onInputBlur(T)})(`keydown`,function(T){return t.onKeyDown(T)}),j0()(),Jf(3,`div`,18),wh(`mouseleave`,function(){return t.labelContainerMouseLeave()}),Jf(4,`div`,19),mR(5,Ma,3,2,`ng-container`,20)(6,Oa,3,6,`ng-container`,20),j0()(),mR(7,La,3,2,`ng-container`,20),Jf(8,`div`,19),mR(9,ja,3,2,`ng-container`,21)(10,Ga,2,2,`ng-template`,null,1,D$),j0(),Jf(12,`p-overlay`,22,2),WR(`visibleChange`,function(T){return nD(o),d$(t.overlayVisible,T)||(t.overlayVisible=T),rD(T)}),wh(`onBeforeEnter`,function(T){return t.onOverlayBeforeEnter(T)})(`onAfterLeave`,function(T){return t.onOverlayAfterLeave(T)})(`onHide`,function(T){return t.onOverlayHide(T)}),mR(14,Br,13,24,`ng-template`,null,3,D$),j0()}if(n&2){let o=F5(11);vR(`pBind`,t.ptm(`hiddenInputContainer`)),_h(`data-p-hidden-accessible`,!0),gj(),vR(`pTooltip`,t.tooltip)(`pTooltipUnstyled`,t.unstyled())(`tooltipPosition`,t.tooltipPosition)(`positionStyle`,t.tooltipPositionStyle)(`tooltipStyleClass`,t.tooltipStyleClass)(`pAutoFocus`,t.autofocus)(`pBind`,t.ptm(`hiddenInput`)),_h(`aria-disabled`,t.$disabled())(`id`,t.inputId)(`aria-label`,t.ariaLabel)(`aria-labelledby`,t.ariaLabelledBy)(`aria-haspopup`,`listbox`)(`aria-expanded`,t.overlayVisible??!1)(`aria-controls`,t.overlayVisible?t.id+`_list`:null)(`tabindex`,t.$disabled()?-1:t.tabindex)(`aria-activedescendant`,t.focused?t.focusedOptionId:void 0)(`value`,t.modelValue())(`name`,t.name())(`required`,t.required()?``:void 0)(`disabled`,t.$disabled()?``:void 0),gj(2),Z5(t.cx(`labelContainer`)),vR(`pBind`,t.ptm(`labelContainer`))(`pTooltip`,t.tooltip)(`pTooltipUnstyled`,t.unstyled())(`tooltipDisabled`,t._disableTooltip)(`tooltipPosition`,t.tooltipPosition)(`positionStyle`,t.tooltipPositionStyle)(`tooltipStyleClass`,t.tooltipStyleClass),gj(),Z5(t.cx(`label`)),vR(`pBind`,t.ptm(`label`)),_h(`data-p`,t.labelDataP),gj(),vR(`ngIf`,!t.selectedItemsTemplate&&!t._selectedItemsTemplate),gj(),vR(`ngIf`,t.selectedItemsTemplate||t._selectedItemsTemplate),gj(),vR(`ngIf`,t.isVisibleClearIcon),gj(),Z5(t.cx(`dropdown`)),vR(`pBind`,t.ptm(`dropdown`)),gj(),vR(`ngIf`,t.loading)(`ngIfElse`,o),gj(3),vR(`hostAttrSelector`,t.$attrSelector),qR(`visible`,t.overlayVisible),vR(`options`,t.overlayOptions)(`target`,`@parent`)(`appendTo`,t.$appendTo())(`unstyled`,t.unstyled())(`pt`,t.ptm(`pcOverlay`))(`motionOptions`,t.motionOptions())}},dependencies:[jh,CH,Vk,DH,AH,SH,Rr,ai,VEe,kn$1,ui,Oe,Xt,ti,yi,ei,Qt,Zt,In$1,nn,ut,En$1,Dn$1,Yt$1,kt$1,w],encapsulation:2})}return i})();var dn=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var jr=[`icon`];var qr=[`content`];var mn=i=>({$implicit:i});function Hr(i,a){i&1&&ER(0)}function Wr(i,a){if(i&1&&Eh(0,`span`,0),i&2){let e=M5(3);Z5(e.cn(e.cx(`icon`),e.checked?e.onIcon:e.offIcon,e.iconPos===`left`?e.cx(`iconLeft`):e.cx(`iconRight`))),vR(`pBind`,e.ptm(`icon`))}}function $r(i,a){if(i&1&&y5(0,Wr,1,3,`span`,2),i&2){let e=M5(2);v5(e.onIcon||e.offIcon?0:-1)}}function Kr(i,a){i&1&&ER(0)}function Qr(i,a){if(i&1&&mR(0,Kr,1,0,`ng-container`,1),i&2){let e=M5(2);vR(`ngTemplateOutlet`,e.iconTemplate||e._iconTemplate)(`ngTemplateOutletContext`,v$(2,mn,e.checked))}}function Gr(i,a){if(i&1&&(y5(0,$r,1,1)(1,Qr,1,4,`ng-container`),Jf(2,`span`,0),c$(3),j0()),i&2){let e=M5();v5(e.iconTemplate?1:0),gj(2),Z5(e.cx(`label`)),vR(`pBind`,e.ptm(`label`)),gj(),$R(e.checked?e.hasOnLabel?e.onLabel:`\xA0`:e.hasOffLabel?e.offLabel:`\xA0`)}}var Ur=`
    ${dn}

    /* For Optimus (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`;var Zr={root:({instance:i})=>[`p-togglebutton p-component`,{"p-togglebutton-checked":i.checked,"p-invalid":i.invalid(),"p-disabled":i.$disabled(),"p-togglebutton-sm p-inputfield-sm":i.size===`small`,"p-togglebutton-lg p-inputfield-lg":i.size===`large`,"p-togglebutton-fluid":i.fluid()}],content:`p-togglebutton-content`,icon:`p-togglebutton-icon`,iconLeft:`p-togglebutton-icon-left`,iconRight:`p-togglebutton-icon-right`,label:`p-togglebutton-label`};var pn=(()=>{class i extends k1{name=`togglebutton`;style=Ur;classes=Zr;static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵprov=K({token:i,factory:i.ɵfac})}return i})();var un=new B(`TOGGLEBUTTON_INSTANCE`);var Xr={provide:Ae,useExisting:Zd(()=>wt),multi:!0};var wt=(()=>{class i extends Ut{componentName=`ToggleButton`;$pcToggleButton=k(un,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}onKeyDown(e){switch(e.code){case`Enter`:this.toggle(e),e.preventDefault();break;case`Space`:this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel=`Yes`;offLabel=`No`;onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos=`left`;autofocus;size;allowEmpty;fluid=kh(void 0,{transform:Ou});onChange=new Rt;iconTemplate;contentTemplate;templates;checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=k(pn);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.offLabel&&this.offLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case`icon`:this._iconTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,n){this.checked=e,n(e),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.active,invalid:this.invalid(),[this.size]:this.size})}static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵcmp=la$1({type:i,selectors:[[`p-toggleButton`],[`p-togglebutton`],[`p-toggle-button`]],contentQueries:function(n,t,o){if(n&1&&Ch(o,jr,4)(o,qr,4)(o,FEe,4),n&2){let r;W0(r=G0())&&(t.iconTemplate=r.first),W0(r=G0())&&(t.contentTemplate=r.first),W0(r=G0())&&(t.templates=r)}},hostVars:11,hostBindings:function(n,t){n&1&&wh(`keydown`,function(r){return t.onKeyDown(r)})(`click`,function(r){return t.toggle(r)}),n&2&&(_h(`aria-labelledby`,t.ariaLabelledBy)(`aria-label`,t.ariaLabel)(`aria-pressed`,t.checked?`true`:`false`)(`role`,`button`)(`tabindex`,t.tabindex!==void 0?t.tabindex:t.$disabled()?-1:0)(`data-pc-name`,`togglebutton`)(`data-p-checked`,t.active)(`data-p-disabled`,t.$disabled())(`data-p`,t.dataP),Z5(t.cn(t.cx(`root`),t.styleClass)))},inputs:{onLabel:`onLabel`,offLabel:`offLabel`,onIcon:`onIcon`,offIcon:`offIcon`,ariaLabel:`ariaLabel`,ariaLabelledBy:`ariaLabelledBy`,styleClass:`styleClass`,inputId:`inputId`,tabindex:[2,`tabindex`,`tabindex`,oH],iconPos:`iconPos`,autofocus:[2,`autofocus`,`autofocus`,Ou],size:`size`,allowEmpty:`allowEmpty`,fluid:[1,`fluid`]},outputs:{onChange:`onChange`},features:[m$([Xr,pn,{provide:un,useExisting:i},{provide:R,useExisting:i}]),ZU([Xe,w]),pR],decls:3,vars:9,consts:[[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`pBind`]],template:function(n,t){n&1&&(Jf(0,`span`,0),mR(1,Hr,1,0,`ng-container`,1),y5(2,Gr,4,5),j0()),n&2&&(Z5(t.cx(`content`)),vR(`pBind`,t.ptm(`content`)),_h(`data-p`,t.dataP),gj(),vR(`ngTemplateOutlet`,t.contentTemplate||t._contentTemplate)(`ngTemplateOutletContext`,v$(7,mn,t.checked)),gj(),v5(t.contentTemplate?-1:2))},dependencies:[jh,AH,VEe,kt$1,w],encapsulation:2})}return i})();var gn=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var Yr=[`item`];var Jr=(i,a)=>({$implicit:i,index:a});function el(i,a){return this.getOptionLabel(a)}function tl(i,a){i&1&&ER(0)}function il(i,a){if(i&1&&mR(0,tl,1,0,`ng-container`,3),i&2){let e=M5(2),n=e.$implicit,t=e.$index,o=M5();vR(`ngTemplateOutlet`,o.itemTemplate||o._itemTemplate)(`ngTemplateOutletContext`,b$(2,Jr,n,t))}}function nl(i,a){i&1&&mR(0,il,1,5,`ng-template`,null,0,D$)}function ol(i,a){if(i&1){let e=A5();Jf(0,`p-togglebutton`,2),wh(`onChange`,function(t){let o=nD(e),r=o.$implicit,T=o.$index;return rD(M5().onOptionSelect(t,r,T))}),y5(1,nl,2,0),j0(),oU()}if(i&2){let e=a.$implicit,n=M5();vR(`autofocus`,n.autofocus)(`styleClass`,n.styleClass)(`ngModel`,n.isSelected(e))(`onLabel`,n.getOptionLabel(e))(`offLabel`,n.getOptionLabel(e))(`disabled`,n.$disabled()||n.isOptionDisabled(e))(`allowEmpty`,n.getAllowEmpty())(`size`,n.size())(`fluid`,n.fluid())(`pt`,n.ptm(`pcToggleButton`))(`unstyled`,n.unstyled()),sU(),gj(),v5(n.itemTemplate||n._itemTemplate?1:-1)}}var al=`
    ${gn}

    /* For Optimus */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`;var rl={root:({instance:i})=>[`p-selectbutton p-component`,{"p-invalid":i.invalid(),"p-selectbutton-fluid":i.fluid()}]};var _n=(()=>{class i extends k1{name=`selectbutton`;style=al;classes=rl;static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵprov=K({token:i,factory:i.ɵfac})}return i})();var hn=new B(`SELECTBUTTON_INSTANCE`);var ll={provide:Ae,useExisting:Zd(()=>St),multi:!0};var St=(()=>{class i extends Ut{componentName=`SelectButton`;options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=kh();fluid=kh(void 0,{transform:Ou});onOptionClick=new Rt;onChange=new Rt;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=k(_n);$pcSelectButton=k(hn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?ql$1(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?ql$1(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?ql$1(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,n,t){if(this.$disabled()||this.isOptionDisabled(n))return;let o=this.isSelected(n);if(o&&this.unselectable)return;let r=this.getOptionValue(n),T;if(this.multiple)o?T=this.value.filter(L=>!em(L,r,this.equalityKey||void 0)):T=this.value?[...this.value,r]:[r];else{if(o&&!this.allowEmpty)return;T=o?null:r}this.focusedIndex=t,this.value=T,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:n,index:t})}changeTabIndexes(e,n){let t,o;for(let r=0;r<=this.el.nativeElement.children.length-1;r++)this.el.nativeElement.children[r].getAttribute(`tabindex`)===`0`&&(t={elem:this.el.nativeElement.children[r],index:r});n===`prev`?t.index===0?o=this.el.nativeElement.children.length-1:o=t.index-1:t.index===this.el.nativeElement.children.length-1?o=0:o=t.index+1,this.focusedIndex=o,this.el.nativeElement.children[o].focus()}onFocus(e,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(n=>!em(n,this.getOptionValue(e),this.dataKey))}isSelected(e){let n=!1,t=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let o of this.value)if(em(o,t,this.dataKey)){n=!0;break}}}else n=em(this.getOptionValue(e),this.value,this.equalityKey||void 0);return n}templates;onAfterContentInit(){this.templates.forEach(e=>{e.getType()===`item`&&(this._itemTemplate=e.template)})}writeControlValue(e,n){this.value=e,n(this.value),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid()})}static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵcmp=la$1({type:i,selectors:[[`p-selectButton`],[`p-selectbutton`],[`p-select-button`]],contentQueries:function(n,t,o){if(n&1&&Ch(o,Yr,4)(o,FEe,4),n&2){let r;W0(r=G0())&&(t.itemTemplate=r.first),W0(r=G0())&&(t.templates=r)}},hostVars:5,hostBindings:function(n,t){n&2&&(_h(`role`,`group`)(`aria-labelledby`,t.ariaLabelledBy)(`data-p`,t.dataP),Z5(t.cx(`root`)))},inputs:{options:`options`,optionLabel:`optionLabel`,optionValue:`optionValue`,optionDisabled:`optionDisabled`,unselectable:[2,`unselectable`,`unselectable`,Ou],tabindex:[2,`tabindex`,`tabindex`,oH],multiple:[2,`multiple`,`multiple`,Ou],allowEmpty:[2,`allowEmpty`,`allowEmpty`,Ou],styleClass:`styleClass`,ariaLabelledBy:`ariaLabelledBy`,dataKey:`dataKey`,autofocus:[2,`autofocus`,`autofocus`,Ou],size:[1,`size`],fluid:[1,`fluid`]},outputs:{onOptionClick:`onOptionClick`,onChange:`onChange`},features:[m$([ll,_n,{provide:hn,useExisting:i},{provide:R,useExisting:i}]),ZU([w]),pR],decls:2,vars:0,consts:[[`content`,``],[3,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[3,`onChange`,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,t){n&1&&E5(0,ol,2,12,`p-togglebutton`,1,el,!0),n&2&&w5(t.options)},dependencies:[wt,En$1,Dn$1,Yt$1,jh,AH,VEe,kt$1],encapsulation:2})}return i})();var fn=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`;var sl=[`handle`];var cl=[`input`];var dl=i=>({checked:i});function pl(i,a){i&1&&ER(0)}function ul(i,a){if(i&1&&mR(0,pl,1,0,`ng-container`,3),i&2){let e=M5();vR(`ngTemplateOutlet`,e.handleTemplate||e._handleTemplate)(`ngTemplateOutletContext`,v$(2,dl,e.checked()))}}var ml=`
    ${fn}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`;var gl={root:{position:`relative`}};var _l={root:({instance:i})=>[`p-toggleswitch p-component`,{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":i.checked(),"p-disabled":i.$disabled(),"p-invalid":i.invalid()}],input:`p-toggleswitch-input`,slider:`p-toggleswitch-slider`,handle:`p-toggleswitch-handle`};var bn=(()=>{class i extends k1{name=`toggleswitch`;style=ml;classes=_l;inlineStyles=gl;static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵprov=K({token:i,factory:i.ɵfac})}return i})();var vn=new B(`TOGGLESWITCH_INSTANCE`);var hl={provide:Ae,useExisting:Zd(()=>It),multi:!0};var It=(()=>{class i extends Ut{componentName=`ToggleSwitch`;$pcToggleSwitch=k(vn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass;tabindex;inputId;readonly;trueValue=!0;falseValue=!1;ariaLabel;size=kh();ariaLabelledBy;autofocus;onChange=new Rt;input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=k(bn);templates;onHostClick(e){this.onClick(e)}onAfterContentInit(){this.templates.forEach(e=>{e.getType()===`handle`?this._handleTemplate=e.template:this._handleTemplate=e.template})}onClick(e){!this.$disabled()&&!this.readonly&&(this.writeModelValue(this.checked()?this.falseValue:this.trueValue),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:e,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue}writeControlValue(e,n){n(e),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.checked(),disabled:this.$disabled(),invalid:this.invalid()})}static ɵfac=(()=>{let e;return function(t){return(e||(e=th(i)))(t||i)}})();static ɵcmp=la$1({type:i,selectors:[[`p-toggleswitch`],[`p-toggleSwitch`],[`p-toggle-switch`]],contentQueries:function(n,t,o){if(n&1&&Ch(o,sl,4)(o,FEe,4),n&2){let r;W0(r=G0())&&(t.handleTemplate=r.first),W0(r=G0())&&(t.templates=r)}},viewQuery:function(n,t){if(n&1&&CR(cl,5),n&2){let o;W0(o=G0())&&(t.input=o.first)}},hostVars:7,hostBindings:function(n,t){n&1&&wh(`click`,function(r){return t.onHostClick(r)}),n&2&&(_h(`data-p-checked`,t.checked())(`data-p-disabled`,t.$disabled())(`data-p`,t.dataP),Q5(t.sx(`root`)),Z5(t.cn(t.cx(`root`),t.styleClass)))},inputs:{styleClass:`styleClass`,tabindex:[2,`tabindex`,`tabindex`,oH],inputId:`inputId`,readonly:[2,`readonly`,`readonly`,Ou],trueValue:`trueValue`,falseValue:`falseValue`,ariaLabel:`ariaLabel`,size:[1,`size`],ariaLabelledBy:`ariaLabelledBy`,autofocus:[2,`autofocus`,`autofocus`,Ou]},outputs:{onChange:`onChange`},features:[m$([hl,bn,{provide:vn,useExisting:i},{provide:R,useExisting:i}]),ZU([w]),pR],decls:5,vars:22,consts:[[`input`,``],[`type`,`checkbox`,`role`,`switch`,3,`focus`,`blur`,`checked`,`pAutoFocus`,`pBind`],[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,t){n&1&&(Jf(0,`input`,1,0),wh(`focus`,function(){return t.onFocus()})(`blur`,function(){return t.onBlur()}),j0(),Jf(2,`div`,2)(3,`div`,2),y5(4,ul,1,4,`ng-container`),j0()()),n&2&&(Z5(t.cx(`input`)),vR(`checked`,t.checked())(`pAutoFocus`,t.autofocus)(`pBind`,t.ptm(`input`)),_h(`id`,t.inputId)(`required`,t.required()?``:void 0)(`disabled`,t.$disabled()?``:void 0)(`aria-checked`,t.checked())(`aria-labelledby`,t.ariaLabelledBy)(`aria-label`,t.ariaLabel)(`name`,t.name())(`tabindex`,t.tabindex),gj(2),Z5(t.cx(`slider`)),vR(`pBind`,t.ptm(`slider`)),_h(`data-p`,t.dataP),gj(),Z5(t.cx(`handle`)),vR(`pBind`,t.ptm(`handle`)),_h(`data-p`,t.dataP),gj(),v5(t.handleTemplate||t._handleTemplate?4:-1))},dependencies:[jh,AH,Oe,VEe,kt$1,w],encapsulation:2})}return i})();var yn={sobre:{pista:`Tocá el sobre para abrir`},presentacion:{antetitulo:`Mis 15 años`},invitacion:{frase:`Tenemos el agrado de invitarte`},cuenta:{antetitulo:`Falta muy poco`,hoy_antetitulo:`Llegó el día`,hoy_titulo:`¡Es hoy!`,hoy_pie:`Te esperamos a las {hora}.`,despues_titulo:`Gracias por acompañarnos`,despues_pie:`Fue una noche inolvidable.`},programa:{titulo:`El programa`},informacion:{titulo:`Información importante`},ubicacion:{titulo:`Dónde`,boton_maps:`Google Maps`,boton_waze:`Waze`},agendar:{titulo:`Agendá la fecha`,nota:`Guardala en tu calendario para que no se te pase.`,boton_google:`Google Calendar`,boton_otro:`Otro calendario`,calendario:`Te esperamos para celebrar juntos.`},regalo:{titulo:`Regalo`},confirmacion:{titulo:`¿Asistirás?`,instruccion:`Marcá, por cada persona, si viene o no.`,boton:`Confirmar`,gracias:`¡Gracias por responder!`,cambios:`Si algo cambia, escribinos y lo resolvemos.`,cancelada:`Esta invitación fue dada de baja. Si creés que es un error, escribinos.`,cerrado:`Las confirmaciones ya cerraron el {cierre}. Escribinos por WhatsApp y vemos qué podemos hacer.`,sin_enviar:`Esta invitación todavía no fue enviada.`,dieta_persona:`¿Tiene alguna alergia, intolerancia o dieta especial?`,dieta_general:`¿Alguien tiene alguna alergia, intolerancia o dieta especial?`,dieta_ejemplo:`Por ejemplo: celiaquía, frutos secos, vegetariana.`,pase_titulo:`Tu pase para la entrada`,pase_texto:`Mostrá este código en la puerta del salón: con él recibimos a todo tu grupo.`,pase_nota:`Guardá una captura de pantalla, por si esa noche no tenés señal.`},estados:{cargando:`Abriendo la invitación…`,personal_titulo:`Esta invitación es personal`,personal_texto:`Buscá el link que te llegó por WhatsApp: cada invitación tiene el suyo.`,no_encontrada_titulo:`No encontramos esta invitación`,no_encontrada_texto:`Puede que el link esté incompleto. Probá abrirlo de nuevo desde el mensaje original, o escribinos.`,error_titulo:`No pudimos cargar la invitación`,error_texto:`Revisá tu conexión y volvé a intentar.`,reintentar:`Reintentar`}};var qe=[{id:`sobre`,nombre:`Sobre`,textos:{pista:`Pista para abrirlo`}},{id:`presentacion`,nombre:`Presentación`,textos:{antetitulo:`Antetítulo, sobre el nombre`}},{id:`invitacion`,nombre:`Invitación`,textos:{frase:`Frase de invitación`}},{id:`cuenta`,nombre:`Cuenta regresiva`,textos:{antetitulo:`Antetítulo, sobre el reloj`,hoy_antetitulo:`El día de la fiesta: antetítulo`,hoy_titulo:`El día de la fiesta: título`,hoy_pie:`El día de la fiesta: pie`,despues_titulo:`Después de la fiesta: título`,despues_pie:`Después de la fiesta: pie`}},{id:`programa`,nombre:`Programa`,textos:{titulo:`Título`}},{id:`informacion`,nombre:`Información importante`,textos:{titulo:`Título`}},{id:`ubicacion`,nombre:`Dónde`,textos:{titulo:`Título`,boton_maps:`Botón de Google Maps`,boton_waze:`Botón de Waze`}},{id:`agendar`,nombre:`Agendá la fecha`,textos:{titulo:`Título`,nota:`Nota`,boton_google:`Botón de Google Calendar`,boton_otro:`Botón de otro calendario`,calendario:`Descripción en el calendario del invitado`}},{id:`regalo`,nombre:`Regalo`,textos:{titulo:`Título`}},{id:`confirmacion`,nombre:`¿Asistirás?`,textos:{titulo:`Título`,instruccion:`Instrucción, sobre las personas`,boton:`Botón para confirmar`,gracias:`Ya respondieron: agradecimiento`,cambios:`Ya respondieron: nota de cambios`,cancelada:`Tarjeta cancelada`,cerrado:`Confirmaciones cerradas`,sin_enviar:`Tarjeta todavía no enviada`,dieta_persona:`Pregunta de alergias, por persona`,dieta_general:`Pregunta de alergias, general`,dieta_ejemplo:`Ejemplos de alergias`,pase_titulo:`Pase para la entrada: título`,pase_texto:`Pase para la entrada: texto`,pase_nota:`Pase para la entrada: nota`}},{id:`estados`,nombre:`Pantallas de carga y de error`,textos:{cargando:`Mientras carga`,personal_titulo:`Link sin código: título`,personal_texto:`Link sin código: texto`,no_encontrada_titulo:`Tarjeta no encontrada: título`,no_encontrada_texto:`Tarjeta no encontrada: texto`,error_titulo:`Error de conexión: título`,error_texto:`Error de conexión: texto`,reintentar:`Botón de reintentar`}}];var xn=i=>zCe.includes(i);var Cn={"{hora}":`la hora de la fiesta`,"{cierre}":`el último día para confirmar`};var Tn=i=>i.match(/\{\w+\}/g)??[];var wn=[{etiqueta:`Estrella (sin dibujo)`,valor:``},{etiqueta:`Puerta`,valor:`puerta`},{etiqueta:`Corona`,valor:`corona`},{etiqueta:`Notas musicales`,valor:`notas`},{etiqueta:`Plato y cubiertos`,valor:`cena`},{etiqueta:`Torta`,valor:`torta`},{etiqueta:`Bola de espejos`,valor:`bola`}];var Sn=[{etiqueta:`Argentina`,valor:`America/Argentina/Buenos_Aires`},{etiqueta:`Uruguay`,valor:`America/Montevideo`},{etiqueta:`Chile`,valor:`America/Santiago`},{etiqueta:`México`,valor:`America/Mexico_City`},{etiqueta:`España`,valor:`Europe/Madrid`}];var Mt=(i,a)=>{let e=Object.fromEntries(new Intl.DateTimeFormat(`en-CA`,{timeZone:a,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`,hourCycle:`h23`}).formatToParts(new Date(i)).map(n=>[n.type,n.value]));return{dia:`${e.year}-${e.month}-${e.day}`,hora:`${e.hour}:${e.minute}`}};var fl=(i,a)=>{let e=new Intl.DateTimeFormat(`en-US`,{timeZone:a,timeZoneName:`longOffset`}).formatToParts(i).find(t=>t.type===`timeZoneName`)?.value??`GMT`,n=/GMT([+-]\d{2}):?(\d{2})?/.exec(e);return n?`${n[1]}:${n[2]??`00`}`:`+00:00`};var kt=(i,a,e)=>{return`${i}T${a}:00${fl(new Date(`${i}T${a}:00Z`),e)}`};var Et=i=>{let a=new Date(`${i}T00:00:00Z`);return a.setUTCDate(a.getUTCDate()+1),a.toISOString().replace(`.000Z`,`Z`)};var In=i=>new Date(new Date(i).getTime()-1).toISOString().slice(0,10);var _t=i=>yn[i];var Mn=i=>{let a=i.evento,e=Mt(a.fecha,a.zona),n=Mt(a.termina,a.zona),t={};for(let{id:o}of qe){let r=i.secciones[o]??{};t[o]={visible:r.visible??!0,textos:Object.fromEntries(Object.keys(_t(o)).map(T=>[T,r.textos?.[T]??``]))}}return{festejada:a.festejada,titulo:a.titulo,zona:a.zona,fecha_dia:e.dia,fecha_hora:e.hora,termina_dia:n.dia,termina_hora:n.hora,ultimo_dia:In(a.cierre),salon:r({},a.salon),link_largo:``,programa:a.programa.map(o=>({hora:o.hora,titulo:o.titulo,icono:o.icono??``})),informacion:a.informacion.map(o=>r({},o)),regalo:{para:a.regalo.visible_para===`todos`?`todos`:`algunas`,categorias:Array.isArray(a.regalo.visible_para)?[...a.regalo.visible_para]:[],texto:a.regalo.texto,alias:a.regalo.alias,cbu:a.regalo.cbu,titular:a.regalo.titular},alergias:a.confirmacion.alergias,categorias:a.categorias.map(o=>({nombre:o})),mensajes:r({},a.mensajes),secciones:t,tema:i.tema.id}};var Ot=i=>{let a={};for(let{id:e}of qe){let n=Object.fromEntries(Object.entries(i.secciones[e].textos).map(([o,r])=>[o,r.trim()]).filter(([o,r])=>r!==``&&r!==_t(e)[o])),t={};zCe.includes(e)&&(t.visible=i.secciones[e].visible),Object.keys(n).length&&(t.textos=n),Object.keys(t).length&&(a[e]=t)}return{evento:{festejada:i.festejada.trim(),titulo:i.titulo.trim(),fecha:kt(i.fecha_dia,i.fecha_hora,i.zona),termina:kt(i.termina_dia,i.termina_hora,i.zona),cierre:Et(i.ultimo_dia),cierre_ms:new Date(Et(i.ultimo_dia)).getTime(),zona:i.zona,salon:s(r({},i.salon),{latitud:Number(i.salon.latitud),longitud:Number(i.salon.longitud)}),programa:i.programa.map(e=>({hora:e.hora,titulo:e.titulo.trim(),icono:e.icono})),informacion:i.informacion.map(e=>({titulo:e.titulo.trim(),texto:e.texto.trim()})),regalo:{visible_para:i.regalo.para===`todos`?`todos`:i.regalo.categorias,texto:i.regalo.texto.trim(),alias:i.regalo.alias.trim(),cbu:i.regalo.cbu.trim(),titular:i.regalo.titular.trim()},confirmacion:{alergias:i.alergias},categorias:i.categorias.map(e=>e.nombre.trim()),mensajes:{invitacion:i.mensajes.invitacion.trim(),recordatorio:i.mensajes.recordatorio.trim()}},secciones:a,tema:{id:i.tema}}};var kn=[{id:`noche-de-gala`,nombre:`Noche de gala`,descripcion:`Azul marino y plata, con estrellas. Secciones de noche y de papel alternadas.`},{id:`rosa-y-oro`,nombre:`Rosa y oro`,descripcion:`Bordó profundo y oro rosado, sobre marfil. Romántico y cálido.`},{id:`esmeralda-y-champagne`,nombre:`Esmeralda y champagne`,descripcion:`Verde bosque y champagne, con títulos en mayúsculas grabadas. Elegante y clásico.`}];var bl=[`previa`];var vl=(i,a)=>a.clave;var Vt=(i,a)=>a.id;function yl(i,a){i&1&&(Jf(0,`p`,5),c$(1,`Cargando…`),j0())}function xl(i,a){i&1&&(Jf(0,`p`,6),c$(1,`No pudimos leer la configuración. Revise la conexión y vuelva a intentar.`),j0())}function Cl(i,a){if(i&1&&(Jf(0,`small`,46),c$(1),j0()),i&2){let e=M5(2);gj(),$R(e.coordenadas_aviso())}}function Tl(i,a){if(i&1){let e=A5();Jf(0,`li`,53)(1,`span`,78),c$(2),j0(),Jf(3,`input`,79),WR(`ngModelChange`,function(t){let o=nD(e).$implicit;return d$(o.hora,t)||(o.hora=t),rD(t)}),j0(),oU(),Jf(4,`input`,80),WR(`ngModelChange`,function(t){let o=nD(e).$implicit;return d$(o.titulo,t)||(o.titulo=t),rD(t)}),j0(),oU(),Jf(5,`p-select`,81),WR(`ngModelChange`,function(t){let o=nD(e).$implicit;return d$(o.icono,t)||(o.icono=t),rD(t)}),j0(),oU(),Jf(6,`span`,82)(7,`button`,83),wh(`click`,function(){let t=nD(e).$index,o=M5(2);return rD(o.mover(o.b.programa,t,-1))}),Eh(8,`i`,84),j0(),Jf(9,`button`,85),wh(`click`,function(){let t=nD(e).$index,o=M5(2);return rD(o.mover(o.b.programa,t,1))}),Eh(10,`i`,86),j0(),Jf(11,`button`,87),wh(`click`,function(){let t=nD(e).$index,o=M5(2);return rD(o.quitar(o.b.programa,t))}),Eh(12,`i`,88),j0()()()}if(i&2){let e=a.$implicit,n=a.$index,t=a.$count,o=M5(2);gj(2),K0(`Momento `,n+1),gj(),qR(`ngModel`,e.hora),_h(`aria-label`,`Hora del momento `+(n+1)),sU(),gj(),qR(`ngModel`,e.titulo),_h(`aria-label`,`Qué pasa en el momento `+(n+1)),sU(),gj(),vR(`options`,o.iconos),qR(`ngModel`,e.icono),vR(`ariaLabel`,`Ícono del momento `+(n+1)),sU(),gj(2),vR(`disabled`,n===0),gj(2),vR(`disabled`,n===t-1)}}function wl(i,a){if(i&1){let e=A5();Jf(0,`li`,56)(1,`span`,78),c$(2),j0(),Jf(3,`input`,89),WR(`ngModelChange`,function(t){let o=nD(e).$implicit;return d$(o.titulo,t)||(o.titulo=t),rD(t)}),j0(),oU(),Jf(4,`textarea`,90),WR(`ngModelChange`,function(t){let o=nD(e).$implicit;return d$(o.texto,t)||(o.texto=t),rD(t)}),j0(),oU(),Jf(5,`span`,82)(6,`button`,83),wh(`click`,function(){let t=nD(e).$index,o=M5(2);return rD(o.mover(o.b.informacion,t,-1))}),Eh(7,`i`,84),j0(),Jf(8,`button`,85),wh(`click`,function(){let t=nD(e).$index,o=M5(2);return rD(o.mover(o.b.informacion,t,1))}),Eh(9,`i`,86),j0(),Jf(10,`button`,87),wh(`click`,function(){let t=nD(e).$index,o=M5(2);return rD(o.quitar(o.b.informacion,t))}),Eh(11,`i`,88),j0()()()}if(i&2){let e=a.$implicit,n=a.$index,t=a.$count;gj(2),K0(`Bloque `,n+1),gj(),qR(`ngModel`,e.titulo),_h(`aria-label`,`Título del bloque `+(n+1)),sU(),gj(),qR(`ngModel`,e.texto),_h(`aria-label`,`Texto del bloque `+(n+1)),sU(),gj(2),vR(`disabled`,n===0),gj(2),vR(`disabled`,n===t-1)}}function Sl(i,a){if(i&1){let e=A5();Jf(0,`p-multiselect`,91),WR(`ngModelChange`,function(t){nD(e);let o=M5(2);return d$(o.b.regalo.categorias,t)||(o.b.regalo.categorias=t),rD(t)}),j0(),oU(),Jf(1,`small`),c$(2,`Solo las tarjetas de estas categorías ven la sección.`),j0()}if(i&2){let e=M5(2);vR(`options`,e.nombres_categorias()),qR(`ngModel`,e.b.regalo.categorias),sU()}}function Il(i,a){if(i&1){let e=A5();Jf(0,`li`,66)(1,`span`,78),c$(2),j0(),Jf(3,`input`,92),WR(`ngModelChange`,function(t){let o=nD(e).$implicit;return d$(o.nombre,t)||(o.nombre=t),rD(t)}),j0(),oU(),Jf(4,`span`,82)(5,`button`,83),wh(`click`,function(){let t=nD(e).$index,o=M5(2);return rD(o.mover(o.b.categorias,t,-1))}),Eh(6,`i`,84),j0(),Jf(7,`button`,85),wh(`click`,function(){let t=nD(e).$index,o=M5(2);return rD(o.mover(o.b.categorias,t,1))}),Eh(8,`i`,86),j0(),Jf(9,`button`,93),wh(`click`,function(){let t=nD(e).$index,o=M5(2);return rD(o.quitar(o.b.categorias,t))}),Eh(10,`i`,88),j0()()()}if(i&2){let e=a.$implicit,n=a.$index,t=a.$count,o=M5(2);gj(2),K0(`Categoría `,n+1),gj(),qR(`ngModel`,e.nombre),_h(`aria-label`,`Categoría `+(n+1)),sU(),gj(2),vR(`disabled`,n===0),gj(2),vR(`disabled`,n===t-1),gj(2),vR(`disabled`,o.b.categorias.length===1)}}function Ml(i,a){if(i&1&&(Jf(0,`tr`)(1,`td`)(2,`code`),c$(3),j0()(),Jf(4,`td`),c$(5),j0(),Jf(6,`td`),c$(7),j0()()),i&2){let e=a.$implicit;gj(3),$R(`{`+e.clave+`}`),gj(2),$R(e.que),gj(2),$R(e.donde)}}function kl(i,a){if(i&1){let e=A5();Jf(0,`button`,98),wh(`click`,function(){nD(e);let t=M5().$implicit,o=M5(2);return rD(o.b.mensajes[t.id]=o.por_defecto_mensaje(t.id))}),c$(1,`Volver al de fábrica`),j0()}}function El(i,a){i&1&&(Jf(0,`small`,46),Eh(1,`i`,99),c$(2,` Falta `),Jf(3,`code`),c$(4),j0(),c$(5,`: sin eso, el invitado no recibe su invitación. `),j0()),i&2&&(gj(4),HR(``,`{`,`link`,`}`))}function Ol(i,a){if(i&1){let e=A5();Jf(0,`div`,19)(1,`div`,94)(2,`label`,95),c$(3),j0(),y5(4,kl,2,0,`button`,96),j0(),Jf(5,`textarea`,97),WR(`ngModelChange`,function(t){let o=nD(e).$implicit,r=M5(2);return d$(r.b.mensajes[o.id],t)||(r.b.mensajes[o.id]=t),rD(t)}),j0(),oU(),y5(6,El,6,2,`small`,46),Jf(7,`small`),c$(8),j0()()}if(i&2){let e=a.$implicit,n=M5(2);gj(2),vR(`for`,`m-`+e.id),gj(),$R(e.etiqueta),gj(),v5(n.b.mensajes[e.id]!==n.por_defecto_mensaje(e.id)?4:-1),gj(),vR(`id`,`m-`+e.id),qR(`ngModel`,n.b.mensajes[e.id]),sU(),gj(),v5(n.b.mensajes[e.id].includes(`{link}`)?-1:6),gj(2),$R(e.ayuda)}}function Vl(i,a){if(i&1){let e=A5();Jf(0,`label`,50)(1,`p-toggleswitch`,51),WR(`ngModelChange`,function(t){nD(e);let o=M5().$implicit,r=M5(2);return d$(r.b.secciones[o.id].visible,t)||(r.b.secciones[o.id].visible=t),rD(t)}),j0(),oU(),c$(2),j0()}if(i&2){let e=M5().$implicit,n=M5(2);gj(),qR(`ngModel`,n.b.secciones[e.id].visible),sU(),gj(),K0(` `,n.b.secciones[e.id].visible?`Se muestra`:`No se muestra`,` `)}}function Pl(i,a){if(i&1&&(Jf(0,`small`,46),Eh(1,`i`,99),c$(2,` Falta `),Jf(3,`code`),c$(4),j0(),c$(5),j0()),i&2){let e=a,n=M5(4);gj(4),$R(e),gj(),K0(`: sin eso, no se muestra `,n.marcadores[e],`. `)}}function Fl(i,a){if(i&1){let e=A5();Jf(0,`div`,19)(1,`label`,95),c$(2),j0(),Jf(3,`input`,101),WR(`ngModelChange`,function(t){let o=nD(e).$implicit,r=M5().$implicit,T=M5(2);return d$(T.b.secciones[r.id].textos[o],t)||(T.b.secciones[r.id].textos[o]=t),rD(t)}),j0(),oU(),y5(4,Pl,6,2,`small`,46),j0()}if(i&2){let e,n=a.$implicit,t=M5().$implicit,o=M5(2);gj(),vR(`for`,`t-`+t.id+`-`+n),gj(),$R(t.textos[n]),gj(),vR(`id`,`t-`+t.id+`-`+n),qR(`ngModel`,o.b.secciones[t.id].textos[n]),vR(`placeholder`,o.por_defecto(t.id,n)),sU(),gj(),v5((e=o.falta_marcador(t.id,n))?4:-1,e)}}function Bl(i,a){if(i&1&&(Jf(0,`section`,17)(1,`div`,49)(2,`h2`),c$(3),j0(),y5(4,Vl,3,2,`label`,50),j0(),Jf(5,`div`,100),E5(6,Fl,5,6,`div`,19,_5),j0()()),i&2){let e=a.$implicit,n=M5(2);gj(3),$R(e.nombre),gj(),v5(n.es_opcional(e.id)?4:-1),gj(2),w5(n.claves(e.textos))}}function Ll(i,a){if(i&1){let e=A5();Jf(0,`label`,102)(1,`input`,103),WR(`ngModelChange`,function(t){nD(e);let o=M5(2);return d$(o.b.tema,t)||(o.b.tema=t),rD(t)}),j0(),oU(),Jf(2,`span`,104),c$(3),j0(),Jf(4,`span`,105),c$(5),j0()()}if(i&2){let e=a.$implicit,n=M5(2);MR(`tema--elegido`,n.b.tema===e.id),gj(),vR(`value`,e.id),qR(`ngModel`,n.b.tema),sU(),gj(2),$R(e.nombre),gj(2),$R(e.descripcion)}}function Nl(i,a){i&1&&c$(0,` Vista previa, sin guardar. Tocá el sobre para abrirla. `)}function Dl(i,a){i&1&&c$(0,` Abriendo la vista previa… `)}function Al(i,a){i&1&&(Jf(0,`strong`,108),c$(1),j0()),i&2&&(gj(),$R(a))}function zl(i,a){i&1&&(Jf(0,`small`,112),c$(1),j0()),i&2&&(gj(),$R(a))}function Rl(i,a){if(i&1){let e=A5();Jf(0,`span`),Eh(1,`i`,107),c$(2,` Hay cambios sin guardar. `),y5(3,Al,2,1,`strong`,108),j0(),Jf(4,`span`,109)(5,`p-button`,110),wh(`onClick`,function(){nD(e);return rD(M5(3).descartar())}),j0(),Jf(6,`p-button`,111),wh(`onClick`,function(){nD(e);return rD(M5(3).guardar())}),j0()(),y5(7,zl,2,1,`small`,112)}if(i&2){let e,n,t=M5(3);gj(3),v5((e=t.error_guardar())?3:-1,e),gj(2),vR(`text`,!0)(`disabled`,t.guardando()),gj(),vR(`loading`,t.guardando())(`disabled`,!!t.problema()),gj(),v5((n=t.problema())?7:-1,n)}}function jl(i,a){i&1&&(Jf(0,`span`),Eh(1,`i`,113),c$(2,` Guardado. La invitación ya lo muestra.`),j0())}function ql(i,a){if(i&1&&(Jf(0,`div`,106),y5(1,Rl,8,6)(2,jl,3,0,`span`),j0()),i&2){let e=M5(2);MR(`barra--guardado`,!e.sucio()&&e.guardado()),gj(),v5(e.sucio()?1:2)}}function Hl(i,a){if(i&1){let e=A5();Jf(0,`div`,7)(1,`p-select`,8),wh(`ngModelChange`,function(t){nD(e);return rD(M5().pestana.set(t))}),j0(),oU(),Jf(2,`p-tabs`,9),wh(`valueChange`,function(t){nD(e);return rD(M5().pestana.set(t))}),Jf(3,`p-tablist`,10)(4,`p-tab`,11),c$(5,`Fiesta`),j0(),Jf(6,`p-tab`,12),c$(7,`Programa e información`),j0(),Jf(8,`p-tab`,13),c$(9,`Regalo`),j0(),Jf(10,`p-tab`,14),c$(11,`Tarjetas y mensajes`),j0(),Jf(12,`p-tab`,15),c$(13,`Secciones y textos`),j0(),Jf(14,`p-tab`,16),c$(15,`Tema`),j0()(),Jf(16,`p-tabpanels`)(17,`p-tabpanel`,11)(18,`section`,17)(19,`h2`),c$(20,`La fiesta`),j0(),Jf(21,`div`,18)(22,`div`,19)(23,`label`,20),c$(24,`A quién se festeja`),j0(),Jf(25,`input`,21),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.festejada,t)||(o.b.festejada=t),rD(t)}),j0(),oU(),Jf(26,`small`),c$(27,`El nombre grande de la presentación.`),j0()(),Jf(28,`div`,19)(29,`label`,22),c$(30,`Título del evento`),j0(),Jf(31,`input`,23),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.titulo,t)||(o.b.titulo=t),rD(t)}),j0(),oU(),Jf(32,`small`),c$(33,`Así aparece en el calendario de cada invitado.`),j0()()()(),Jf(34,`section`,17)(35,`h2`),c$(36,`Cuándo`),j0(),Jf(37,`div`,18)(38,`div`,19)(39,`label`,24),c$(40,`Dónde es la fiesta (zona horaria)`),j0(),Jf(41,`p-select`,25),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.zona,t)||(o.b.zona=t),rD(t)}),j0(),oU(),Jf(42,`small`),c$(43,`Fecha y hora se muestran como en ese lugar, aunque el invitado esté de viaje.`),j0()(),Jf(44,`div`,19)(45,`label`,26),c$(46,`Empieza`),j0(),Jf(47,`div`,27)(48,`input`,28),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.fecha_dia,t)||(o.b.fecha_dia=t),rD(t)}),j0(),oU(),Jf(49,`input`,29),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.fecha_hora,t)||(o.b.fecha_hora=t),rD(t)}),j0(),oU(),j0()(),Jf(50,`div`,19)(51,`label`,30),c$(52,`Termina`),j0(),Jf(53,`div`,27)(54,`input`,31),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.termina_dia,t)||(o.b.termina_dia=t),rD(t)}),j0(),oU(),Jf(55,`input`,32),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.termina_hora,t)||(o.b.termina_hora=t),rD(t)}),j0(),oU(),j0(),Jf(56,`small`),c$(57,`Hace falta para agendar el evento.`),j0()(),Jf(58,`div`,19)(59,`label`,33),c$(60,`Último día para confirmar`),j0(),Jf(61,`input`,34),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.ultimo_dia,t)||(o.b.ultimo_dia=t),rD(t)}),j0(),oU(),Jf(62,`small`),c$(63,`Hasta ese día, inclusive, los invitados pueden responder. Después, la invitación ya no deja confirmar: lo controla la regla de seguridad de Firebase, que toma esta misma fecha.`),j0()()()(),Jf(64,`section`,17)(65,`h2`),c$(66,`Dónde`),j0(),Jf(67,`div`,18)(68,`div`,19)(69,`label`,35),c$(70,`Nombre del lugar`),j0(),Jf(71,`input`,36),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.salon.nombre,t)||(o.b.salon.nombre=t),rD(t)}),j0(),oU(),j0(),Jf(72,`div`,19)(73,`label`,37),c$(74,`Dirección`),j0(),Jf(75,`input`,38),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.salon.direccion,t)||(o.b.salon.direccion=t),rD(t)}),j0(),oU(),j0(),Jf(76,`div`,39)(77,`label`,40),c$(78,`Link de Google Maps`),j0(),Jf(79,`input`,41),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.salon.maps,t)||(o.b.salon.maps=t),rD(t)}),j0(),oU(),Jf(80,`small`),c$(81,`El que se comparte desde la app: abre la ficha del lugar, con fotos y reseñas.`),j0()(),Jf(82,`div`,39)(83,`label`,42),c$(84,`Coordenadas, para Waze`),j0(),Jf(85,`div`,27)(86,`input`,43),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.salon.latitud,t)||(o.b.salon.latitud=t),rD(t)}),j0(),oU(),Jf(87,`input`,44),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.salon.longitud,t)||(o.b.salon.longitud=t),rD(t)}),j0(),oU(),j0(),Jf(88,`input`,45),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.link_largo,t)||(o.b.link_largo=t),rD(t)}),wh(`ngModelChange`,function(t){nD(e);return rD(M5().sacar_coordenadas(t))}),j0(),oU(),y5(89,Cl,2,1,`small`,46),Jf(90,`small`),c$(91,`Waze no entiende los links de Google: necesita las coordenadas del mismo lugar.`),j0()()()(),Jf(92,`section`,17)(93,`h2`),c$(94,`Confirmación`),j0(),Jf(95,`div`,19)(96,`label`,47),c$(97,`Dónde se pregunta por alergias, intolerancias y dietas`),j0(),Jf(98,`p-select`,48),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.alergias,t)||(o.b.alergias=t),rD(t)}),j0(),oU(),Jf(99,`small`),c$(100,`En las dos formas es obligatoria para poder confirmar.`),j0()()()(),Jf(101,`p-tabpanel`,12)(102,`section`,17)(103,`div`,49)(104,`h2`),c$(105,`Programa`),j0(),Jf(106,`label`,50)(107,`p-toggleswitch`,51),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.secciones.programa.visible,t)||(o.b.secciones.programa.visible=t),rD(t)}),j0(),oU(),c$(108),j0()(),Jf(109,`ol`,52),E5(110,Tl,13,10,`li`,53,b5),j0(),Jf(112,`button`,54),wh(`click`,function(){nD(e);return rD(M5().b.programa.push({hora:``,titulo:``,icono:``}))}),Eh(113,`i`,55),c$(114,` Agregar momento `),j0()(),Jf(115,`section`,17)(116,`div`,49)(117,`h2`),c$(118,`Información importante`),j0(),Jf(119,`label`,50)(120,`p-toggleswitch`,51),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.secciones.informacion.visible,t)||(o.b.secciones.informacion.visible=t),rD(t)}),j0(),oU(),c$(121),j0()(),Jf(122,`p`,5),c$(123,`Un título corto y una o dos líneas: más largo, en un teléfono, deja de leerse. `),Jf(124,`code`),c$(125),j0(),c$(126,` se reemplaza por el último día para confirmar.`),j0(),Jf(127,`ol`,52),E5(128,wl,12,7,`li`,56,b5),j0(),Jf(130,`button`,54),wh(`click`,function(){nD(e);return rD(M5().b.informacion.push({titulo:``,texto:``}))}),Eh(131,`i`,55),c$(132,` Agregar bloque `),j0()()(),Jf(133,`p-tabpanel`,13)(134,`section`,17)(135,`div`,49)(136,`h2`),c$(137,`Regalo`),j0(),Jf(138,`label`,50)(139,`p-toggleswitch`,51),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.secciones.regalo.visible,t)||(o.b.secciones.regalo.visible=t),rD(t)}),j0(),oU(),c$(140),j0()(),Jf(141,`div`,19)(142,`label`),c$(143,`Quiénes lo ven`),j0(),Jf(144,`p-selectbutton`,57),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.regalo.para,t)||(o.b.regalo.para=t),rD(t)}),j0(),oU(),y5(145,Sl,3,2),j0(),Jf(146,`div`,19)(147,`label`,58),c$(148,`Texto`),j0(),Jf(149,`textarea`,59),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.regalo.texto,t)||(o.b.regalo.texto=t),rD(t)}),j0(),oU(),j0(),Jf(150,`div`,18)(151,`div`,19)(152,`label`,60),c$(153,`Alias`),j0(),Jf(154,`input`,61),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.regalo.alias,t)||(o.b.regalo.alias=t),rD(t)}),j0(),oU(),j0(),Jf(155,`div`,19)(156,`label`,62),c$(157,`CBU o CVU`),j0(),Jf(158,`input`,63),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.regalo.cbu,t)||(o.b.regalo.cbu=t),rD(t)}),j0(),oU(),j0(),Jf(159,`div`,19)(160,`label`,64),c$(161,`Titular`),j0(),Jf(162,`input`,65),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.regalo.titular,t)||(o.b.regalo.titular=t),rD(t)}),j0(),oU(),j0()()()(),Jf(163,`p-tabpanel`,14)(164,`section`,17)(165,`h2`),c$(166,`Categorías de tarjetas`),j0(),Jf(167,`p`,5),c$(168,`Sirven para filtrar las tarjetas, para las estadísticas y para elegir quién ve el regalo. Cambiar el nombre de una no cambia las tarjetas que ya la tienen: esas se editan desde Tarjetas.`),j0(),Jf(169,`ol`,52),E5(170,Il,11,6,`li`,66,b5),j0(),Jf(172,`button`,54),wh(`click`,function(){nD(e);return rD(M5().b.categorias.push({nombre:``}))}),Eh(173,`i`,55),c$(174,` Agregar categoría `),j0()(),Jf(175,`section`,17)(176,`h2`),c$(177,`Mensajes de WhatsApp`),j0(),Jf(178,`p`,5),c$(179,`Lo que va entre llaves se completa solo, para cada tarjeta. Para cambiar lo que dice, cambie el dato de origen:`),j0(),Jf(180,`table`,67)(181,`thead`)(182,`tr`)(183,`th`),c$(184,`En el mensaje`),j0(),Jf(185,`th`),c$(186,`Qué se pone`),j0(),Jf(187,`th`),c$(188,`Dónde se cambia`),j0()()(),Jf(189,`tbody`),E5(190,Ml,8,3,`tr`,null,vl),j0()(),Jf(192,`div`,18),E5(193,Ol,9,7,`div`,19,Vt),j0()()(),Jf(195,`p-tabpanel`,15)(196,`p`,68),c$(197,` Cada campo muestra en gris el texto que viene de fábrica. Déjelo vacío para usar ese; escriba para cambiarlo. Lo que va entre llaves, como `),Jf(198,`code`),c$(199),j0(),c$(200,`, se completa solo: puede moverlo dentro de la frase, pero no borrarlo. `),j0(),E5(201,Bl,8,2,`section`,17,Vt),j0(),Jf(203,`p-tabpanel`,16)(204,`section`,17)(205,`div`)(206,`h2`),c$(207,`Tema`),j0(),Jf(208,`p`,5),c$(209,`Los temas son de fábrica: cada uno trae sus colores, sus tipografías y sus adornos, probados para que todo se lea bien.`),j0(),Jf(210,`div`,69),E5(211,Ll,6,6,`label`,70,Vt),j0(),Jf(213,`div`,19)(214,`label`,71),c$(215,`Antetítulo, sobre el nombre`),j0(),Jf(216,`input`,72),WR(`ngModelChange`,function(t){nD(e);let o=M5();return d$(o.b.secciones.presentacion.textos.antetitulo,t)||(o.b.secciones.presentacion.textos.antetitulo=t),rD(t)}),j0(),oU(),Jf(217,`small`),c$(218,`El nombre se cambia en la pestaña Fiesta. Todo se ve al instante en la vista previa.`),j0()()()()()()(),Jf(219,`aside`,73)(220,`figure`,74)(221,`div`,75)(222,`iframe`,76,0),wh(`load`,function(){nD(e);return rD(M5().enviar_vista_previa(!0))}),j0()(),Jf(224,`figcaption`,5),y5(225,Nl,1,0)(226,Dl,1,0),j0()()()(),y5(227,ql,3,3,`div`,77)}if(i&2){let e=M5();MR(`con-previa--sin`,!e.ver_previa()),gj(),vR(`options`,e.pestanas)(`ngModel`,e.pestana()),sU(),gj(),vR(`value`,e.pestana()),gj(23),qR(`ngModel`,e.b.festejada),sU(),gj(6),qR(`ngModel`,e.b.titulo),sU(),gj(10),vR(`options`,e.zonas),qR(`ngModel`,e.b.zona),sU(),gj(7),qR(`ngModel`,e.b.fecha_dia),sU(),gj(),qR(`ngModel`,e.b.fecha_hora),sU(),gj(5),qR(`ngModel`,e.b.termina_dia),sU(),gj(),qR(`ngModel`,e.b.termina_hora),sU(),gj(6),qR(`ngModel`,e.b.ultimo_dia),sU(),gj(10),qR(`ngModel`,e.b.salon.nombre),sU(),gj(4),qR(`ngModel`,e.b.salon.direccion),sU(),gj(4),qR(`ngModel`,e.b.salon.maps),sU(),gj(7),qR(`ngModel`,e.b.salon.latitud),sU(),gj(),qR(`ngModel`,e.b.salon.longitud),sU(),gj(),qR(`ngModel`,e.b.link_largo),sU(),gj(),v5(e.coordenadas_aviso()?89:-1),gj(9),vR(`options`,e.opciones_alergias),qR(`ngModel`,e.b.alergias),sU(),gj(9),qR(`ngModel`,e.b.secciones.programa.visible),sU(),gj(),K0(` `,e.b.secciones.programa.visible?`Se muestra`:`No se muestra`,` `),gj(2),w5(e.b.programa),gj(10),qR(`ngModel`,e.b.secciones.informacion.visible),sU(),gj(),K0(` `,e.b.secciones.informacion.visible?`Se muestra`:`No se muestra`,` `),gj(4),HR(``,`{`,`cierre`,`}`),gj(3),w5(e.b.informacion),gj(11),qR(`ngModel`,e.b.secciones.regalo.visible),sU(),gj(),K0(` `,e.b.secciones.regalo.visible?`Se muestra`:`No se muestra`,` `),gj(4),vR(`options`,e.opciones_regalo),qR(`ngModel`,e.b.regalo.para),vR(`allowEmpty`,!1),sU(),gj(),v5(e.b.regalo.para===`algunas`?145:-1),gj(4),qR(`ngModel`,e.b.regalo.texto),sU(),gj(5),qR(`ngModel`,e.b.regalo.alias),sU(),gj(4),qR(`ngModel`,e.b.regalo.cbu),sU(),gj(4),qR(`ngModel`,e.b.regalo.titular),sU(),gj(8),w5(e.b.categorias),gj(20),w5(e.marcadores_mensaje),gj(3),w5(e.mensajes),gj(6),HR(``,`{`,`hora`,`}`),gj(2),w5(e.secciones),gj(10),w5(e.temas),gj(5),qR(`ngModel`,e.b.secciones.presentacion.textos.antetitulo),vR(`placeholder`,e.por_defecto(`presentacion`,`antetitulo`)),sU(),gj(3),vR(`hidden`,!e.ver_previa()),gj(3),vR(`src`,e.url_vista_previa,oA),gj(3),v5(e.vista_previa_lista()?225:226),gj(2),v5(e.sucio()||e.guardado()?227:-1)}}var Pt=location.hostname===`localhost`?`http://localhost:5173`:l;var En=class i{servicio=k(p);estado=ie(`cargando`);pestana=ie(`fiesta`);pestanas=[{etiqueta:`Fiesta`,valor:`fiesta`},{etiqueta:`Programa e información`,valor:`programa`},{etiqueta:`Regalo`,valor:`regalo`},{etiqueta:`Tarjetas y mensajes`,valor:`mensajes`},{etiqueta:`Secciones y textos`,valor:`secciones`},{etiqueta:`Tema`,valor:`tema`}];b;inicial=``;guardando=ie(!1);guardado=ie(!1);error_guardar=ie(null);coordenadas_aviso=ie(null);previa=Vhe(`previa`);url_vista_previa=k(e4).bypassSecurityTrustResourceUrl(`${Pt}/?vista-previa`);vista_previa_lista=ie(!1);ver_previa=ie(!0);ultimo_enviado=``;reloj;al_recibir=a=>{a.origin!==new URL(Pt).origin||a.data?.tipo!==`xv-vista-previa-lista`||(this.vista_previa_lista.set(!0),this.enviar_vista_previa(!0))};enviar_vista_previa=(a=!1)=>{let e=this.previa()?.nativeElement.contentWindow;if(!e||!this.b)return;let n;try{n=JSON.stringify(Ot(this.b))}catch{return}!a&&n===this.ultimo_enviado||(this.ultimo_enviado=n,e.postMessage({tipo:`xv-configuracion`,configuracion:JSON.parse(n)},new URL(Pt).origin))};zonas=Sn;iconos=wn;secciones=qe;temas=kn;nombres_categorias=()=>this.b.categorias.map(a=>a.nombre.trim()).filter(Boolean);mensajes=[{id:`invitacion`,etiqueta:`Invitación`,ayuda:`Se manda una sola vez, desde Tarjetas, con el botón Enviar.`},{id:`recordatorio`,etiqueta:`Recordatorio`,ayuda:`Para quien todavía no respondió. Se manda desde Estadísticas, las veces que haga falta.`}];marcadores_mensaje=[{clave:`nombre`,que:`A quién va la tarjeta, por ejemplo "Familia Pérez".`,donde:`En cada tarjeta: Tarjetas de invitados → editar → "Nombre de la invitación".`},{clave:`link`,que:`El link personal de la invitación de esa tarjeta. No puede faltar.`,donde:`No se cambia: se arma solo para cada tarjeta.`},{clave:`festejada`,que:`A quién se festeja.`,donde:`Configuración → Fiesta → "A quién se festeja".`},{clave:`fecha`,que:`El día de la fiesta, por ejemplo "Sábado 3 de abril de 2027".`,donde:`Configuración → Fiesta → Cuándo → "Empieza".`},{clave:`cierre`,que:`El último día para confirmar, por ejemplo "13 de marzo".`,donde:`Configuración → Fiesta → Cuándo → "Último día para confirmar".`}];por_defecto_mensaje=a=>mF.evento.mensajes[a];marcadores=Cn;es_opcional=xn;claves=a=>Object.keys(a);opciones_alergias=[{etiqueta:`En la tarjeta de cada persona que viene`,valor:`por_persona`},{etiqueta:`Una sola pregunta general, abajo`,valor:`general`}];opciones_regalo=[{etiqueta:`Todos`,valor:`todos`},{etiqueta:`Algunas categorías`,valor:`algunas`}];async ngOnInit(){window.addEventListener(`message`,this.al_recibir),this.reloj=setInterval(()=>this.enviar_vista_previa(),300);try{this.cargar(await this.servicio.leer()),this.estado.set(`lista`)}catch(a){console.error(`[configuracion]`,a),this.estado.set(`error`)}}ngOnDestroy(){window.removeEventListener(`message`,this.al_recibir),clearInterval(this.reloj)}cargar=a=>{this.b=Mn(a),this.inicial=JSON.stringify(this.b)};sucio=()=>JSON.stringify(this.b)!==this.inicial;por_defecto=(a,e)=>_t(a)[e]??``;falta_marcador=(a,e)=>{let n=this.b.secciones[a].textos[e]?.trim();return n?Tn(this.por_defecto(a,e)).find(t=>!n.includes(t))??null:null};problema=()=>{let a=this.b;if(!a.festejada.trim())return`Falta a quién se festeja.`;if(!a.fecha_dia||!a.fecha_hora)return`Falta la fecha y hora de inicio.`;if(!a.termina_dia||!a.termina_hora)return`Falta cuándo termina.`;if(!a.ultimo_dia)return`Falta el último día para confirmar.`;if(!Number.isFinite(Number(a.salon.latitud))||!Number.isFinite(Number(a.salon.longitud)))return`Las coordenadas tienen que ser números.`;let e=a.categorias.map(n=>n.nombre.trim());if(e.some(n=>!n))return`Hay una categoría sin nombre.`;if(new Set(e).size!==e.length)return`Hay dos categorías con el mismo nombre.`;if(!a.mensajes.invitacion.includes(`{link}`)||!a.mensajes.recordatorio.includes(`{link}`))return`A un mensaje de WhatsApp le falta {link}.`;if(a.regalo.para===`algunas`&&!a.regalo.categorias.length)return`Elija al menos una categoría para el regalo.`;for(let n of qe)for(let t of Object.keys(n.textos))if(this.falta_marcador(n.id,t))return`En "${n.nombre}" hay un texto al que le falta un dato entre llaves.`;return null};sacar_coordenadas=a=>{if(this.coordenadas_aviso.set(null),!a.trim())return;let e=/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/.exec(a),n=/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/.exec(a),t=e??n;t?(this.b.salon.latitud=Number(t[1]),this.b.salon.longitud=Number(t[2]),this.b.link_largo=``):/goo\.gl|maps\.app/.test(a)?this.coordenadas_aviso.set(`Ese es el link corto. Ábralo en el navegador, copie el link largo de la barra de direcciones y péguelo acá.`):this.coordenadas_aviso.set(`No encontramos coordenadas en ese link.`)};mover=(a,e,n)=>{let t=e+n;t<0||t>=a.length||([a[e],a[t]]=[a[t],a[e]])};quitar=(a,e)=>a.splice(e,1);descartar=()=>{this.b=JSON.parse(this.inicial),this.error_guardar.set(null),this.guardado.set(!1)};guardar=async()=>{if(!(this.guardando()||this.problema())){this.guardando.set(!0),this.error_guardar.set(null);try{let a=Ot(this.b);await Promise.all([this.servicio.guardar(`evento`,a.evento),this.servicio.guardar(`secciones`,a.secciones),this.servicio.guardar(`tema`,a.tema)]),this.cargar(a),Go$1.configuracion.set(a),this.guardado.set(!0)}catch(a){console.error(`[configuracion]`,a),this.error_guardar.set(`No se pudo guardar. Revise la conexión y vuelva a intentar.`)}finally{this.guardando.set(!1)}}};static ɵfac=function(e){return new(e||i)};static ɵcmp=la$1({type:i,selectors:[[`app-configuracion`]],viewQuery:function(e,n){e&1&&SR(n.previa,bl,5),e&2&&L5()},decls:13,vars:7,consts:[[`previa`,``],[1,`cabecera`],[1,`cabecera__resumen`],[`type`,`button`,1,`ver-previa`,3,`click`],[`aria-hidden`,`true`,1,`pi`],[1,`tenue`],[`role`,`alert`,1,`aviso`,`aviso--error`],[1,`con-previa`],[`optionLabel`,`etiqueta`,`optionValue`,`valor`,`ariaLabel`,`Parte de la configuración`,1,`pestanas-movil`,3,`ngModelChange`,`options`,`ngModel`],[3,`valueChange`,`value`],[1,`pestanas-escritorio`],[`value`,`fiesta`],[`value`,`programa`],[`value`,`regalo`],[`value`,`mensajes`],[`value`,`secciones`],[`value`,`tema`],[1,`panel`],[1,`grilla`],[1,`campo`],[`for`,`c-festejada`],[`pInputText`,``,`id`,`c-festejada`,`placeholder`,`Ej. Gianna`,3,`ngModelChange`,`ngModel`],[`for`,`c-titulo`],[`pInputText`,``,`id`,`c-titulo`,`placeholder`,`Ej. Los 15 de Gianna`,3,`ngModelChange`,`ngModel`],[`for`,`c-zona`],[`inputId`,`c-zona`,`optionLabel`,`etiqueta`,`optionValue`,`valor`,3,`ngModelChange`,`options`,`ngModel`],[`for`,`c-fecha-dia`],[1,`fila`],[`pInputText`,``,`id`,`c-fecha-dia`,`type`,`date`,3,`ngModelChange`,`ngModel`],[`pInputText`,``,`type`,`time`,`aria-label`,`Hora de inicio`,3,`ngModelChange`,`ngModel`],[`for`,`c-termina-dia`],[`pInputText`,``,`id`,`c-termina-dia`,`type`,`date`,3,`ngModelChange`,`ngModel`],[`pInputText`,``,`type`,`time`,`aria-label`,`Hora de fin`,3,`ngModelChange`,`ngModel`],[`for`,`c-cierre`],[`pInputText`,``,`id`,`c-cierre`,`type`,`date`,3,`ngModelChange`,`ngModel`],[`for`,`c-salon`],[`pInputText`,``,`id`,`c-salon`,3,`ngModelChange`,`ngModel`],[`for`,`c-direccion`],[`pInputText`,``,`id`,`c-direccion`,3,`ngModelChange`,`ngModel`],[1,`campo`,`campo--ancho`],[`for`,`c-maps`],[`pInputText`,``,`id`,`c-maps`,`placeholder`,`https://maps.app.goo.gl/…`,3,`ngModelChange`,`ngModel`],[`for`,`c-coordenadas`],[`pInputText`,``,`id`,`c-coordenadas`,`type`,`number`,`step`,`any`,`aria-label`,`Latitud`,3,`ngModelChange`,`ngModel`],[`pInputText`,``,`type`,`number`,`step`,`any`,`aria-label`,`Longitud`,3,`ngModelChange`,`ngModel`],[`pInputText`,``,`placeholder`,`O pegue acá el link largo de Google Maps y se completan solas`,1,`pegar`,3,`ngModelChange`,`ngModel`],[1,`advertencia`],[`for`,`c-alergias`],[`inputId`,`c-alergias`,`optionLabel`,`etiqueta`,`optionValue`,`valor`,3,`ngModelChange`,`options`,`ngModel`],[1,`panel__cabecera`],[1,`interruptor`],[3,`ngModelChange`,`ngModel`],[1,`lista`],[1,`lista__fila`,`lista__fila--programa`],[`type`,`button`,1,`agregar`,3,`click`],[`aria-hidden`,`true`,1,`pi`,`pi-plus`],[1,`lista__fila`,`lista__fila--info`],[`optionLabel`,`etiqueta`,`optionValue`,`valor`,3,`ngModelChange`,`options`,`ngModel`,`allowEmpty`],[`for`,`c-regalo-texto`],[`pTextarea`,``,`id`,`c-regalo-texto`,`rows`,`5`,3,`ngModelChange`,`ngModel`],[`for`,`c-alias`],[`pInputText`,``,`id`,`c-alias`,3,`ngModelChange`,`ngModel`],[`for`,`c-cbu`],[`pInputText`,``,`id`,`c-cbu`,`inputmode`,`numeric`,3,`ngModelChange`,`ngModel`],[`for`,`c-titular`],[`pInputText`,``,`id`,`c-titular`,3,`ngModelChange`,`ngModel`],[1,`lista__fila`,`lista__fila--categoria`],[1,`marcadores`],[1,`tenue`,`intro`],[`role`,`radiogroup`,`aria-label`,`Tema de la invitación`,1,`temas`],[1,`tema`,3,`tema--elegido`],[`for`,`c-previa-antetitulo`],[`pInputText`,``,`id`,`c-previa-antetitulo`,3,`ngModelChange`,`ngModel`,`placeholder`],[1,`previa`,3,`hidden`],[1,`telefono`],[1,`telefono__pantalla`],[`title`,`Vista previa de la invitación`,3,`load`,`src`],[`role`,`status`,1,`barra`,3,`barra--guardado`],[1,`lista__numero`],[`pInputText`,``,`type`,`time`,3,`ngModelChange`,`ngModel`],[`pInputText`,``,`placeholder`,`Ej. Recepción`,3,`ngModelChange`,`ngModel`],[`optionLabel`,`etiqueta`,`optionValue`,`valor`,3,`ngModelChange`,`options`,`ngModel`,`ariaLabel`],[1,`lista__acciones`],[`type`,`button`,`aria-label`,`Subir`,1,`icono`,3,`click`,`disabled`],[1,`pi`,`pi-arrow-up`],[`type`,`button`,`aria-label`,`Bajar`,1,`icono`,3,`click`,`disabled`],[1,`pi`,`pi-arrow-down`],[`type`,`button`,`aria-label`,`Quitar`,1,`icono`,`icono--quitar`,3,`click`],[1,`pi`,`pi-trash`],[`pInputText`,``,`placeholder`,`Ej. Código de vestimenta`,3,`ngModelChange`,`ngModel`],[`pTextarea`,``,`rows`,`2`,3,`ngModelChange`,`ngModel`],[`placeholder`,`Elija las categorías`,`display`,`chip`,`ariaLabel`,`Categorías que ven el regalo`,3,`ngModelChange`,`options`,`ngModel`],[`pInputText`,``,`placeholder`,`Ej. Familia`,3,`ngModelChange`,`ngModel`],[`type`,`button`,`aria-label`,`Quitar`,1,`icono`,`icono--quitar`,3,`click`,`disabled`],[1,`campo__cabecera`],[3,`for`],[`type`,`button`,1,`restaurar`],[`pTextarea`,``,`rows`,`9`,3,`ngModelChange`,`id`,`ngModel`],[`type`,`button`,1,`restaurar`,3,`click`],[`aria-hidden`,`true`,1,`pi`,`pi-exclamation-triangle`],[1,`textos`],[`pInputText`,``,3,`ngModelChange`,`id`,`ngModel`,`placeholder`],[1,`tema`],[`type`,`radio`,`name`,`tema`,3,`ngModelChange`,`value`,`ngModel`],[1,`tema__nombre`],[1,`tema__descripcion`],[`role`,`status`,1,`barra`],[`aria-hidden`,`true`,1,`pi`,`pi-pencil`],[1,`barra__error`],[1,`barra__acciones`],[`label`,`Descartar`,`severity`,`secondary`,3,`onClick`,`text`,`disabled`],[`label`,`Guardar`,`icon`,`pi pi-check`,3,`onClick`,`loading`,`disabled`],[1,`barra__problema`],[`aria-hidden`,`true`,1,`pi`,`pi-check`]],template:function(e,n){e&1&&(Jf(0,`xv-layout`)(1,`header`,1)(2,`div`)(3,`h1`),c$(4,`Configuración`),j0(),Jf(5,`p`,2),c$(6,`Los datos de la fiesta, los textos de cada sección y el tema de la invitación.`),j0()(),Jf(7,`button`,3),wh(`click`,function(){return n.ver_previa.set(!n.ver_previa())}),Eh(8,`i`,4),c$(9),j0()(),y5(10,yl,2,0,`p`,5)(11,xl,2,0,`p`,6)(12,Hl,228,47),j0()),e&2&&(gj(7),_h(`aria-pressed`,n.ver_previa()),gj(),MR(`pi-eye`,!n.ver_previa())(`pi-eye-slash`,n.ver_previa()),gj(),K0(` `,n.ver_previa()?`Ocultar vista previa`:`Ver vista previa`,` `),gj(),v5(n.estado()===`cargando`?10:n.estado()===`error`?11:12))},dependencies:[Xn$1,En$1,vt,Io$1,No$1,Dn$1,Yt$1,Ue,Ct,Hi,$i,Wi,In$1,Ui,Wo$1,Tt,St,It,as],styles:[`.cabecera[_ngcontent-%COMP%]{margin-bottom:1.5rem}.cabecera__resumen[_ngcontent-%COMP%], .tenue[_ngcontent-%COMP%]{margin-top:.5rem;color:var(--%NS%xv-texto-tenue);font-size:var(--%NS%xv-texto-sm)}.intro[_ngcontent-%COMP%]{margin:1.25rem 0 1rem;max-width:46rem}.aviso--error[_ngcontent-%COMP%]{padding:.75rem 1rem;border:1px solid #e4b9b9;border-radius:3px;background:#fbf1f1;color:#8f2c2c}code[_ngcontent-%COMP%]{padding:.05rem .3rem;border-radius:3px;background:var(--%NS%xv-plata-brillo);font-size:.9em}.con-previa[_ngcontent-%COMP%]{padding-bottom:5rem}.pestanas-movil[_ngcontent-%COMP%]{display:none;width:100%;margin-bottom:.5rem}@media(max-width:40rem){.pestanas-movil[_ngcontent-%COMP%]{display:flex}.pestanas-escritorio[_ngcontent-%COMP%]{display:none}}.panel[_ngcontent-%COMP%]{margin-top:1.25rem;padding:1.4rem 1.5rem;background:var(--%NS%xv-superficie);border:1px solid var(--%NS%xv-borde);border-radius:3px}.panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:var(--%NS%xv-texto-xl)}.panel__cabecera[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:.5rem 1rem;margin-bottom:.75rem}.panel__cabecera[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:0}@media(max-width:40rem){.panel[_ngcontent-%COMP%]:has(>.panel__cabecera>.interruptor){position:relative}.panel__cabecera[_ngcontent-%COMP%] > .interruptor[_ngcontent-%COMP%]{position:absolute;top:.85rem;right:.9rem;gap:.45rem;font-size:var(--%NS%xv-texto-xs)}.panel__cabecera[_ngcontent-%COMP%]:has(>.interruptor)   h2[_ngcontent-%COMP%]{padding-top:1.6rem}}.grilla[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.6rem}.campo[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.45rem;min-width:0}.panel[_ngcontent-%COMP%] > .campo[_ngcontent-%COMP%] + .campo[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%] > .campo[_ngcontent-%COMP%] + .grilla[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%] > .grilla[_ngcontent-%COMP%] + .campo[_ngcontent-%COMP%]{margin-top:1.6rem}.campo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:var(--%NS%xv-texto-sm);font-weight:var(--%NS%xv-peso-medio);color:var(--%NS%xv-texto)}.campo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .campo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .campo[_ngcontent-%COMP%]   p-select[_ngcontent-%COMP%], .campo[_ngcontent-%COMP%]   p-multiselect[_ngcontent-%COMP%]{width:100%}.campo[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:var(--%NS%xv-texto-xs);color:var(--%NS%xv-texto-tenue);line-height:var(--%NS%xv-interlinea-compacta)}.campo[_ngcontent-%COMP%]   .advertencia[_ngcontent-%COMP%], .advertencia[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:.4rem;color:#8a6115}.advertencia[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%]{font-size:.8rem}.fila[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.6rem}.fila[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.pegar[_ngcontent-%COMP%]{margin-top:.15rem}.interruptor[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.6rem;font-size:var(--%NS%xv-texto-sm);color:var(--%NS%xv-texto-tenue);cursor:pointer}.lista[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.6rem;margin:.5rem 0 0;padding:0;list-style:none}.lista__fila[_ngcontent-%COMP%]{display:grid;align-items:start;gap:.5rem}.lista__fila--programa[_ngcontent-%COMP%]{grid-template-columns:7.5rem 1fr 13rem auto}.lista__fila--info[_ngcontent-%COMP%]{grid-template-columns:14rem 1fr auto}.lista__fila--categoria[_ngcontent-%COMP%]{grid-template-columns:1fr auto}.lista__numero[_ngcontent-%COMP%]{display:none}@media(max-width:50rem){.lista[_ngcontent-%COMP%]{gap:.9rem}.lista__fila--programa[_ngcontent-%COMP%], .lista__fila--info[_ngcontent-%COMP%], .lista__fila--categoria[_ngcontent-%COMP%]{grid-template-columns:1fr auto;gap:.6rem;padding:.8rem .9rem .95rem;background:var(--%NS%xv-fondo);border:1px solid var(--%NS%xv-borde);border-radius:4px}.lista__fila[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{grid-column:1/-1}.lista__numero[_ngcontent-%COMP%]{display:block;grid-column:1;grid-row:1;align-self:center;font-size:var(--%NS%xv-texto-xs);font-weight:var(--%NS%xv-peso-medio);letter-spacing:.08em;text-transform:uppercase;color:var(--%NS%xv-texto-tenue)}.lista__fila[_ngcontent-%COMP%] > .lista__acciones[_ngcontent-%COMP%]{grid-column:2;grid-row:1}.icono[_ngcontent-%COMP%]{width:2.2rem;height:2.2rem}}.lista__fila[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .lista__fila[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .lista__fila[_ngcontent-%COMP%]   p-select[_ngcontent-%COMP%]{width:100%}.lista__acciones[_ngcontent-%COMP%]{display:flex;gap:.25rem}.icono[_ngcontent-%COMP%]{display:grid;place-items:center;width:2.4rem;height:2.4rem;background:var(--%NS%xv-superficie);border:1px solid var(--%NS%xv-borde);border-radius:3px;color:var(--%NS%xv-texto-tenue);cursor:pointer}.icono[_ngcontent-%COMP%]:hover:not(:disabled){border-color:var(--%NS%xv-borde-fuerte);color:var(--%NS%p-primary-color, #5279a2)}.icono[_ngcontent-%COMP%]:disabled{opacity:.35;cursor:default}.icono--%NS%quitar[_ngcontent-%COMP%]:hover:not(:disabled){color:#8f2c2c;border-color:#e4bdbd}.agregar[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.45rem;margin-top:.9rem;padding:.45rem .9rem;background:none;border:1px dashed var(--%NS%xv-borde-fuerte);border-radius:3px;color:var(--%NS%p-primary-700, #374e6b);font-size:var(--%NS%xv-texto-sm);cursor:pointer}.agregar[_ngcontent-%COMP%]:hover{background:var(--%NS%p-primary-50, #f3f6fa)}.marcadores[_ngcontent-%COMP%]{width:100%;margin:.4rem 0 1.6rem;border-collapse:collapse;font-size:var(--%NS%xv-texto-sm)}.marcadores[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.5rem .75rem;border-bottom:1px solid var(--%NS%xv-borde-fuerte);text-align:left;font-size:var(--%NS%xv-texto-xs);font-weight:var(--%NS%xv-peso-medio);letter-spacing:.08em;text-transform:uppercase;color:var(--%NS%xv-texto-tenue)}.marcadores[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.6rem .75rem;border-bottom:1px solid var(--%NS%xv-borde);vertical-align:top}.marcadores[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{white-space:nowrap}.marcadores[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{color:var(--%NS%xv-texto-tenue)}.campo__cabecera[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:space-between;gap:1rem}.restaurar[_ngcontent-%COMP%]{padding:0;background:none;border:0;color:var(--%NS%p-primary-color, #5279a2);font-size:var(--%NS%xv-texto-xs);text-decoration:underline;text-underline-offset:3px;cursor:pointer}.campo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{font-family:var(--%NS%xv-ui);line-height:var(--%NS%xv-interlinea-texto)}.textos[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.6rem}.temas[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(15rem,1fr));gap:.8rem;margin:1rem 0}.tema[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.3rem;padding:1rem 1.1rem;border:1px solid var(--%NS%xv-borde);border-radius:3px;cursor:pointer}.tema[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;opacity:0;pointer-events:none}.tema--elegido[_ngcontent-%COMP%]{border-color:var(--%NS%p-primary-color, #5279a2);box-shadow:0 0 0 1px var(--%NS%p-primary-color, #5279a2);background:var(--%NS%p-primary-50, #f3f6fa)}.tema[_ngcontent-%COMP%]:has(input:focus-visible){outline:2px solid var(--%NS%p-primary-color, #5279a2);outline-offset:2px}.tema__nombre[_ngcontent-%COMP%]{font-family:var(--%NS%xv-display);font-size:var(--%NS%xv-texto-lg)}.tema__descripcion[_ngcontent-%COMP%]{font-size:var(--%NS%xv-texto-xs);color:var(--%NS%xv-texto-tenue)}.cabecera[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:1rem}.ver-previa[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.45rem;padding:.5rem .95rem;background:var(--%NS%xv-superficie);border:1px solid var(--%NS%xv-borde-fuerte);border-radius:3px;color:var(--%NS%p-primary-700, #374e6b);font-size:var(--%NS%xv-texto-sm);cursor:pointer}.ver-previa[_ngcontent-%COMP%]:hover{background:var(--%NS%p-primary-50, #f3f6fa)}.con-previa[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:start;gap:2rem}.con-previa--sin[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr)}.previa[_ngcontent-%COMP%]{position:sticky;top:1rem}@media(max-width:64rem){.con-previa[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr)}.previa[_ngcontent-%COMP%]{position:static;order:-1;justify-self:center}}.telefono[_ngcontent-%COMP%]{--%NS%escala: .62;margin:0;display:flex;flex-direction:column;align-items:center;gap:.6rem}.telefono__pantalla[_ngcontent-%COMP%]{width:calc(390px * var(--%NS%escala));height:calc(844px * var(--%NS%escala));overflow:hidden;border:8px solid #1c2735;border-radius:28px;background:#081427;box-shadow:0 18px 40px -18px #1c27358c;box-sizing:content-box}.telefono[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:390px;height:844px;border:0;transform:scale(var(--%NS%escala));transform-origin:0 0}.telefono[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{margin:0;font-size:var(--%NS%xv-texto-xs)}.barra[_ngcontent-%COMP%]{position:fixed;right:1.5rem;bottom:1.25rem;z-index:10;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.5rem 1.5rem;max-width:min(40rem,100vw - 3rem);padding:.7rem .9rem .7rem 1.2rem;background:var(--%NS%xv-superficie);border:1px solid var(--%NS%xv-borde-fuerte);border-radius:4px;box-shadow:0 10px 30px -12px #1c273559;font-size:var(--%NS%xv-texto-sm)}.barra[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%]{margin-right:.35rem;font-size:.85rem}.barra--guardado[_ngcontent-%COMP%]{border-color:#a9d8c2;background:#e6f4ee;color:#1d6b4a}.barra__acciones[_ngcontent-%COMP%]{display:flex;gap:.4rem}.barra__problema[_ngcontent-%COMP%], .barra__error[_ngcontent-%COMP%]{flex-basis:100%;color:#8f2c2c;font-size:var(--%NS%xv-texto-xs)}`]})};export{En as ConfiguracionPage};