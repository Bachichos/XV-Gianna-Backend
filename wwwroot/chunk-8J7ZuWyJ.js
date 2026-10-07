import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{$i as xwe,Ar as dk,At as G$,Bi as tk,Bn as V,Br as f$,Ci as q,Dn as S5,Ei as qj,En as S$,Er as cb,Gn as W$,Gt as K$,Hn as VD,Ht as JH,In as Uh,Ir as eIe,It as H1,Jt as KR,Kn as W5,Li as tIe,Lr as eb,Lt as HR,Mi as sb,Mn as U$,Ni as ss,Nr as e4,Nt as GG,Oi as r$,Pi as t4,Pn as UR,Qt as Lwe,Ri as tb,Rn as Uu,Si as pk,Tt as F1,Ui as uh,Un as VR,Ur as gk,Wt as Jwe,Xi as xh,Xt as LR,Yn as Wi$1,Yr as iIe,Zt as Lh,ar as YG,bi as ob,ci as me,dt as CD,ei as jR,en as MH,fi as nH,fn as P1,fr as Zl,gi as nb,gn as Q$,hr as _a,ji as rb,jt as G5,ki as rIe,kr as dh,kt as G,ln as Oh,lt as C$,mi as nL,mn as Ph,na as zR,nn as Mh,nr as Y$,oi as lf,on as Nh,pi as nIe,pn as PU,qi as we,qt as KG,ri as kt$1,si as lm,sn as Nwe,st as Be,tn as MU,tt as A,ui as n4,un as Owe,ut as CA,vt as DD,wr as c$,wt as F$,xn as Qh,xr as ab,yi as oIe,yr as aN}from"./main-GCJZYAJC.js";import{_ as pt,a as R,b as yi$1,d as _t,g as kt$2,h as k,i as Oe,l as Yt$1,m as hn$1,s as Ue,y as w}from"./chunk-B55awZGC.js";import{T as wn$1,c as Ie,g as Un$1,h as U,i as Fn$1,p as Sn$1,u as Qt,v as Xn$1}from"./chunk-D5_dOhqW.js";import{c as ei$1,i as Xt$1,l as ti$1,n as Ut$1,o as Zt$1,s as ai$1,t as Qt$1,u as ui$1}from"./chunk-CuUy6gUK.js";var kt=(()=>{class t extends _t{static ɵfac=(()=>{let e;return function(i){return(e||(e=dh(t)))(i||t)}})();static ɵcmp=_a({type:t,selectors:[[``,`data-p-icon`,`minus`]],features:[LR],decls:1,vars:0,consts:[[`d`,`M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z`,`fill`,`currentColor`]],template:function(n,i){n&1&&(VD(),UR(0,`path`,0))},encapsulation:2,changeDetection:1})}return t})();var Ot=`
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
`;var Gt=[`icon`];var qt=[`input`];var jt=(t,r,e)=>({checked:t,class:r,dataP:e});function Ut(t,r){if(t&1&&xh(0,`span`,8),t&2){let e=c$(3);S$(e.cx(`icon`)),jR(`ngClass`,e.checkboxIcon)(`pBind`,e.ptm(`icon`)),Nh(`data-p`,e.dataP)}}function Wt(t,r){if(t&1&&(VD(),xh(0,`svg`,9)),t&2){let e=c$(3);S$(e.cx(`icon`)),jR(`pBind`,e.ptm(`icon`)),Nh(`data-p`,e.dataP)}}function Zt(t,r){if(t&1&&(rb(0),VR(1,Ut,1,5,`span`,6)(2,Wt,1,4,`svg`,7),ob()),t&2){let e=c$(2);qj(),jR(`ngIf`,e.checkboxIcon),qj(),jR(`ngIf`,!e.checkboxIcon)}}function Xt(t,r){if(t&1&&(VD(),xh(0,`svg`,10)),t&2){let e=c$(2);S$(e.cx(`icon`)),jR(`pBind`,e.ptm(`icon`)),Nh(`data-p`,e.dataP)}}function Yt(t,r){if(t&1&&(rb(0),VR(1,Zt,3,2,`ng-container`,3)(2,Xt,1,4,`svg`,5),ob()),t&2){let e=c$();qj(),jR(`ngIf`,e.checked),qj(),jR(`ngIf`,e._indeterminate())}}function Jt(t,r){}function ei(t,r){t&1&&VR(0,Jt,0,0,`ng-template`)}var ti=`
    ${Ot}

    /* For Optimus */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`;var ii={root:({instance:t})=>[`p-checkbox p-component`,{"p-checkbox-checked p-highlight":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()===`filled`,"p-checkbox-sm p-inputfield-sm":t.size()===`small`,"p-checkbox-lg p-inputfield-lg":t.size()===`large`}],box:`p-checkbox-box`,input:`p-checkbox-input`,icon:`p-checkbox-icon`};var wt=(()=>{class t extends nL{name=`checkbox`;style=ti;classes=ii;static ɵfac=(()=>{let e;return function(i){return(e||(e=dh(t)))(i||t)}})();static ɵprov=q({token:t,factory:t.ɵfac})}return t})();var Mt=new V(`CHECKBOX_INSTANCE`);var ni={provide:Ie,useExisting:lf(()=>Ee),multi:!0};var Ee=(()=>{class t extends Ut$1{componentName=`Checkbox`;hostName=``;value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=Uh();size=Uh();onChange=new kt$1;onFocus=new kt$1;onBlur=new kt$1;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:GG(this.value,this.modelValue())}_indeterminate=G(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=A(wt);bindDirectiveInstance=A(w,{self:!0});$pcCheckbox=A(Mt,{optional:!0,skipSelf:!0})??void 0;$variant=ss(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case`icon`:this._checkboxIconTemplate=e.template;break;case`checkboxicon`:this._checkboxIconTemplate=e.template;break}})}onChanges(e){e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}updateModel(e){let n,i=this.injector.get(U,null,{optional:!0,self:!0}),o=i&&!this.formControl?i.value:this.modelValue();this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=o.filter(l=>!lm(l,this.value)):n=o?[...o,this.value]:[this.value],this.onModelChange(n),this.writeModelValue(n),this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,n){n(e),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()})}static ɵfac=(()=>{let e;return function(i){return(e||(e=dh(t)))(i||t)}})();static ɵcmp=_a({type:t,selectors:[[`p-checkbox`],[`p-checkBox`],[`p-check-box`]],contentQueries:function(n,i,o){if(n&1&&Lh(o,Gt,4)(o,rIe,4),n&2){let l;sb(l=ab())&&(i.checkboxIconTemplate=l.first),sb(l=ab())&&(i.templates=l)}},viewQuery:function(n,i){if(n&1&&KR(qt,5),n&2){let o;sb(o=ab())&&(i.inputViewChild=o.first)}},hostVars:6,hostBindings:function(n,i){n&2&&(Nh(`data-p-highlight`,i.checked)(`data-p-checked`,i.checked)(`data-p-disabled`,i.$disabled())(`data-p`,i.dataP),S$(i.cn(i.cx(`root`),i.styleClass)))},inputs:{hostName:`hostName`,value:`value`,binary:[2,`binary`,`binary`,Uu],ariaLabelledBy:`ariaLabelledBy`,ariaLabel:`ariaLabel`,tabindex:[2,`tabindex`,`tabindex`,MH],inputId:`inputId`,inputStyle:`inputStyle`,styleClass:`styleClass`,inputClass:`inputClass`,indeterminate:[2,`indeterminate`,`indeterminate`,Uu],formControl:`formControl`,checkboxIcon:`checkboxIcon`,readonly:[2,`readonly`,`readonly`,Uu],autofocus:[2,`autofocus`,`autofocus`,Uu],trueValue:`trueValue`,falseValue:`falseValue`,variant:[1,`variant`],size:[1,`size`]},outputs:{onChange:`onChange`,onFocus:`onFocus`,onBlur:`onBlur`},features:[W$([ni,wt,{provide:Mt,useExisting:t},{provide:R,useExisting:t}]),S5([w]),LR],decls:5,vars:26,consts:[[`input`,``],[`type`,`checkbox`,3,`focus`,`blur`,`change`,`checked`,`pBind`],[3,`pBind`],[4,`ngIf`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`minus`,3,`class`,`pBind`,4,`ngIf`],[3,`class`,`ngClass`,`pBind`,4,`ngIf`],[`data-p-icon`,`check`,3,`class`,`pBind`,4,`ngIf`],[3,`ngClass`,`pBind`],[`data-p-icon`,`check`,3,`pBind`],[`data-p-icon`,`minus`,3,`pBind`]],template:function(n,i){n&1&&(uh(0,`input`,1,0),Mh(`focus`,function(l){return i.onInputFocus(l)})(`blur`,function(l){return i.onInputBlur(l)})(`change`,function(l){return i.handleChange(l)}),eb(),uh(2,`div`,2),VR(3,Yt,3,2,`ng-container`,3)(4,ei,1,0,null,4),eb()),n&2&&(C$(i.inputStyle),S$(i.cn(i.cx(`input`),i.inputClass)),jR(`checked`,i.checked)(`pBind`,i.ptm(`input`)),Nh(`id`,i.inputId)(`value`,i.value)(`name`,i.name())(`tabindex`,i.tabindex)(`required`,i.required()?``:void 0)(`readonly`,i.readonly?``:void 0)(`disabled`,i.$disabled()?``:void 0)(`aria-labelledby`,i.ariaLabelledBy)(`aria-label`,i.ariaLabel),qj(2),S$(i.cx(`box`)),jR(`pBind`,i.ptm(`box`)),Nh(`data-p`,i.dataP),qj(),jR(`ngIf`,!i.checkboxIconTemplate&&!i._checkboxIconTemplate),qj(),jR(`ngTemplateOutlet`,i.checkboxIconTemplate||i._checkboxIconTemplate)(`ngTemplateOutletContext`,Q$(22,jt,i.checked,i.cx(`icon`),i.dataP)))},dependencies:[Qh,JH,e4,n4,oIe,Xt$1,kt,kt$2,w],encapsulation:2})}return t})();var Bt=(()=>{class t extends _t{pathId;onInit(){this.pathId=`url(#`+pt()+`)`}static ɵfac=(()=>{let e;return function(i){return(e||(e=dh(t)))(i||t)}})();static ɵcmp=_a({type:t,selectors:[[``,`data-p-icon`,`times-circle`]],features:[LR],decls:5,vars:2,consts:[[`fill-rule`,`evenodd`,`clip-rule`,`evenodd`,`d`,`M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z`,`fill`,`currentColor`],[3,`id`],[`width`,`14`,`height`,`14`,`fill`,`white`]],template:function(n,i){n&1&&(VD(),tb(0,`g`),UR(1,`path`,0),nb(),tb(2,`defs`)(3,`clipPath`,1),UR(4,`rect`,2),nb()()),n&2&&(Nh(`clip-path`,i.pathId),qj(3),zR(`id`,i.pathId))},encapsulation:2,changeDetection:1})}return t})();var Dt=`
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
`;var oi=[`removeicon`];var li=[`*`];function ai(t,r){if(t&1){let e=r$();uh(0,`img`,4),Mh(`error`,function(i){CD(e);return DD(c$().imageError(i))}),eb()}if(t&2){let e=c$();S$(e.cx(`image`)),jR(`pBind`,e.ptm(`image`))(`src`,e.image,CA)(`alt`,e.alt)}}function ri(t,r){if(t&1&&xh(0,`span`,6),t&2){let e=c$(2);S$(e.icon),jR(`pBind`,e.ptm(`icon`))(`ngClass`,e.cx(`icon`))}}function si(t,r){if(t&1&&VR(0,ri,1,4,`span`,5),t&2)jR(`ngIf`,c$().icon)}function ci(t,r){if(t&1&&(uh(0,`div`,7),F$(1),eb()),t&2){let e=c$();S$(e.cx(`label`)),jR(`pBind`,e.ptm(`label`)),qj(),dk(e.label)}}function pi(t,r){if(t&1){let e=r$();uh(0,`span`,11),Mh(`click`,function(i){CD(e);return DD(c$(3).close(i))})(`keydown`,function(i){CD(e);return DD(c$(3).onKeydown(i))}),eb()}if(t&2){let e=c$(3);S$(e.removeIcon),jR(`pBind`,e.ptm(`removeIcon`))(`ngClass`,e.cx(`removeIcon`)),Nh(`tabindex`,e.disabled?-1:0)(`aria-label`,e.removeAriaLabel)}}function di(t,r){if(t&1){let e=r$();VD(),uh(0,`svg`,12),Mh(`click`,function(i){CD(e);return DD(c$(3).close(i))})(`keydown`,function(i){CD(e);return DD(c$(3).onKeydown(i))}),eb()}if(t&2){let e=c$(3);S$(e.cx(`removeIcon`)),jR(`pBind`,e.ptm(`removeIcon`)),Nh(`tabindex`,e.disabled?-1:0)(`aria-label`,e.removeAriaLabel)}}function ui(t,r){if(t&1&&(rb(0),VR(1,pi,1,6,`span`,9)(2,di,1,5,`svg`,10),ob()),t&2){let e=c$(2);qj(),jR(`ngIf`,e.removeIcon),qj(),jR(`ngIf`,!e.removeIcon)}}function mi(t,r){}function hi(t,r){t&1&&VR(0,mi,0,0,`ng-template`)}function _i(t,r){if(t&1){let e=r$();uh(0,`span`,13),Mh(`click`,function(i){CD(e);return DD(c$(2).close(i))})(`keydown`,function(i){CD(e);return DD(c$(2).onKeydown(i))}),VR(1,hi,1,0,null,14),eb()}if(t&2){let e=c$(2);S$(e.cx(`removeIcon`)),jR(`pBind`,e.ptm(`removeIcon`)),Nh(`tabindex`,e.disabled?-1:0)(`aria-label`,e.removeAriaLabel),qj(),jR(`ngTemplateOutlet`,e.removeIconTemplate||e._removeIconTemplate)}}function fi(t,r){if(t&1&&(rb(0),VR(1,ui,3,2,`ng-container`,3)(2,_i,2,6,`span`,8),ob()),t&2){let e=c$();qj(),jR(`ngIf`,!e.removeIconTemplate&&!e._removeIconTemplate),qj(),jR(`ngIf`,e.removeIconTemplate||e._removeIconTemplate)}}var gi={root:({instance:t})=>({display:t.visible?null:`none`})};var bi={root:({instance:t})=>[`p-chip p-component`,{"p-disabled":t.disabled}],image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`};var At=(()=>{class t extends nL{name=`chip`;style=Dt;classes=bi;inlineStyles=gi;static ɵfac=(()=>{let e;return function(i){return(e||(e=dh(t)))(i||t)}})();static ɵprov=q({token:t,factory:t.ɵfac})}return t})();var Pt=new V(`CHIP_INSTANCE`);var zt=(()=>{class t extends k{componentName=`Chip`;$pcChip=A(Pt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=A(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label;icon;image;alt;styleClass;disabled=!1;removable=!1;removeIcon;onRemove=new kt$1;onImageError=new kt$1;visible=!0;get removeAriaLabel(){return this.config.getTranslation(iIe.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e==`object`&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}_chipProps;_componentStyle=A(At);removeIconTemplate;templates;_removeIconTemplate;onAfterContentInit(){this.templates.forEach(e=>{e.getType()===`removeicon`?this._removeIconTemplate=e.template:this._removeIconTemplate=e.template})}onChanges(e){if(e.chipProps&&e.chipProps.currentValue){let{currentValue:n}=e.chipProps;n.label!==void 0&&(this.label=n.label),n.icon!==void 0&&(this.icon=n.icon),n.image!==void 0&&(this.image=n.image),n.alt!==void 0&&(this.alt=n.alt),n.styleClass!==void 0&&(this.styleClass=n.styleClass),n.removable!==void 0&&(this.removable=n.removable),n.removeIcon!==void 0&&(this.removeIcon=n.removeIcon)}}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key===`Enter`||e.key===`Backspace`)&&this.close(e)}imageError(e){this.onImageError.emit(e)}get dataP(){return this.cn({removable:this.removable})}static ɵfac=(()=>{let e;return function(i){return(e||(e=dh(t)))(i||t)}})();static ɵcmp=_a({type:t,selectors:[[`p-chip`]],contentQueries:function(n,i,o){if(n&1&&Lh(o,oi,4)(o,rIe,4),n&2){let l;sb(l=ab())&&(i.removeIconTemplate=l.first),sb(l=ab())&&(i.templates=l)}},hostVars:6,hostBindings:function(n,i){n&2&&(Nh(`aria-label`,i.label)(`data-p`,i.dataP),C$(i.sx(`root`)),S$(i.cn(i.cx(`root`),i.styleClass)))},inputs:{label:`label`,icon:`icon`,image:`image`,alt:`alt`,styleClass:`styleClass`,disabled:[2,`disabled`,`disabled`,Uu],removable:[2,`removable`,`removable`,Uu],removeIcon:`removeIcon`,chipProps:`chipProps`},outputs:{onRemove:`onRemove`,onImageError:`onImageError`},features:[W$([At,{provide:Pt,useExisting:t},{provide:R,useExisting:t}]),S5([w]),LR],ngContentSelectors:li,decls:6,vars:4,consts:[[`iconTemplate`,``],[3,`pBind`,`class`,`src`,`alt`,`error`,4,`ngIf`,`ngIfElse`],[3,`pBind`,`class`,4,`ngIf`],[4,`ngIf`],[3,`error`,`pBind`,`src`,`alt`],[3,`pBind`,`class`,`ngClass`,4,`ngIf`],[3,`pBind`,`ngClass`],[3,`pBind`],[`role`,`button`,3,`pBind`,`class`,`click`,`keydown`,4,`ngIf`],[`role`,`button`,3,`pBind`,`class`,`ngClass`,`click`,`keydown`,4,`ngIf`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`pBind`,`class`,`click`,`keydown`,4,`ngIf`],[`role`,`button`,3,`click`,`keydown`,`pBind`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`click`,`keydown`,`pBind`],[`role`,`button`,3,`click`,`keydown`,`pBind`],[4,`ngTemplateOutlet`]],template:function(n,i){if(n&1&&(Oh(),Ph(0),VR(1,ai,1,5,`img`,1)(2,si,1,1,`ng-template`,null,0,nH)(4,ci,2,4,`div`,2)(5,fi,3,2,`ng-container`,3)),n&2){let o=f$(3);qj(),jR(`ngIf`,i.image)(`ngIfElse`,o),qj(3),jR(`ngIf`,i.label),qj(),jR(`ngIf`,i.removable)}},dependencies:[Qh,JH,e4,n4,Bt,oIe,w],encapsulation:2})}return t})();var Nt=`
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
`;var Ht=t=>({$implicit:t});var xi=(t,r)=>({checked:t,class:r});function yi(t,r){}function vi(t,r){t&1&&VR(0,yi,0,0,`ng-template`)}function Ci(t,r){if(t&1&&VR(0,vi,1,0,null,3),t&2){let e=r.class,n=c$(2);jR(`ngTemplateOutlet`,n.itemCheckboxIconTemplate)(`ngTemplateOutletContext`,Y$(2,xi,n.selected,e))}}function Ii(t,r){t&1&&(rb(0),VR(1,Ci,1,5,`ng-template`,null,0,nH),ob())}function Ti(t,r){if(t&1&&(uh(0,`span`),F$(1),eb()),t&2){let e=c$();qj(),dk(e.label??`empty`)}}function Si(t,r){t&1&&HR(0)}var ki=[`item`];var Oi=[`group`];var wi=[`loader`];var Mi=[`header`];var Vi=[`filter`];var Ei=[`footer`];var Fi=[`emptyfilter`];var Li=[`empty`];var Bi=[`selecteditems`];var Di=[`loadingicon`];var Ai=[`filtericon`];var Pi=[`removetokenicon`];var zi=[`chipicon`];var Ni=[`clearicon`];var Ri=[`dropdownicon`];var Hi=[`itemcheckboxicon`];var Ki=[`headercheckboxicon`];var $i=[`overlay`];var Qi=[`filterInput`];var Gi=[`focusInput`];var qi=[`items`];var ji=[`scroller`];var Ui=[`lastHiddenFocusableEl`];var Wi=[`firstHiddenFocusableEl`];var Zi=[`headerCheckbox`];var Xi=[[[`p-header`]],[[`p-footer`]]];var Yi=[`p-header`,`p-footer`];var Ji=()=>({class:`p-multiselect-chip-icon`});var en=(t,r)=>({$implicit:t,removeChip:r});var tn=t=>({dataP:t});var Kt=t=>({options:t});var nn=(t,r,e)=>({checked:t,partialSelected:r,class:e});var Le=t=>({height:t});var $t=(t,r)=>({$implicit:t,options:r});var on=()=>({});function ln(t,r){if(t&1&&(rb(0),F$(1),ob()),t&2){let e=c$(2);qj(),dk(e.label()||`empty`)}}function an(t,r){if(t&1&&F$(0),t&2)cb(` `,c$(3).getSelectedItemsLabel(),` `)}function rn(t,r){t&1&&HR(0)}function sn(t,r){if(t&1){let e=r$();uh(0,`span`,27),Mh(`click`,function(i){CD(e);let o=c$(4).$implicit;return DD(c$(4).removeOption(o,i))}),VR(1,rn,1,0,`ng-container`,28),eb()}if(t&2){let e=c$(8);S$(e.cx(`chipIcon`)),jR(`pBind`,e.ptm(`chipIcon`)),Nh(`aria-hidden`,!0),qj(),jR(`ngTemplateOutlet`,e.chipIconTemplate||e._chipIconTemplate||e.removeTokenIconTemplate||e._removeTokenIconTemplate)(`ngTemplateOutletContext`,G$(6,Ji))}}function cn(t,r){if(t&1&&(rb(0),VR(1,sn,2,7,`span`,26),ob()),t&2){let e=c$(7);qj(),jR(`ngIf`,e.chipIconTemplate||e._chipIconTemplate||e.removeTokenIconTemplate||e._removeTokenIconTemplate)}}function pn(t,r){if(t&1&&VR(0,cn,2,1,`ng-container`,20),t&2){let e=c$(6);jR(`ngIf`,!e.$disabled()&&!e.readonly)}}function dn(t,r){t&1&&(rb(0),VR(1,pn,1,1,`ng-template`,null,5,nH),ob())}function un(t,r){if(t&1){let e=r$();uh(0,`div`,19,4)(2,`p-chip`,25),Mh(`onRemove`,function(i){let o=CD(e).$implicit;return DD(c$(4).removeOption(o,i))}),VR(3,dn,3,0,`ng-container`,20),eb()()}if(t&2){let e=r.$implicit,n=c$(4);S$(n.cx(`chipItem`)),jR(`pBind`,n.ptm(`chipItem`)),qj(2),S$(n.cx(`pcChip`)),jR(`pt`,n.ptm(`pcChip`))(`unstyled`,n.unstyled())(`label`,n.getLabelByValue(e))(`removable`,!n.$disabled()&&!n.readonly)(`removeIcon`,n.chipIcon),qj(),jR(`ngIf`,n.chipIconTemplate||n._chipIconTemplate||n.removeTokenIconTemplate||n._removeTokenIconTemplate)}}function mn(t,r){if(t&1&&VR(0,un,4,11,`div`,24),t&2)jR(`ngForOf`,c$(3).chipSelectedItems())}function hn(t,r){if(t&1&&(rb(0),F$(1),ob()),t&2){let e=c$(3);qj(),dk(e.placeholder()||`empty`)}}function _n(t,r){if(t&1&&(rb(0),W5(1,an,1,1)(2,mn,1,1,`div`,23),VR(3,hn,2,1,`ng-container`,20),ob()),t&2){let e=c$(2);qj(),G5(e.chipSelectedItems()&&e.chipSelectedItems().length===e.maxSelectedLabels?1:2),qj(2),jR(`ngIf`,!e.modelValue()||e.modelValue().length===0)}}function fn(t,r){if(t&1&&(rb(0),VR(1,ln,2,1,`ng-container`,20)(2,_n,4,2,`ng-container`,20),ob()),t&2){let e=c$();qj(),jR(`ngIf`,e.display===`comma`),qj(),jR(`ngIf`,e.display===`chip`)}}function gn(t,r){t&1&&HR(0)}function bn(t,r){if(t&1&&(rb(0),F$(1),ob()),t&2){let e=c$(2);qj(),dk(e.placeholder()||`empty`)}}function xn(t,r){if(t&1&&(rb(0),VR(1,gn,1,0,`ng-container`,28)(2,bn,2,1,`ng-container`,20),ob()),t&2){let e=c$();qj(),jR(`ngTemplateOutlet`,e.selectedItemsTemplate||e._selectedItemsTemplate)(`ngTemplateOutletContext`,Y$(3,en,e.selectedOptions,e.removeOption.bind(e))),qj(),jR(`ngIf`,!e.modelValue()||e.modelValue().length===0)}}function yn(t,r){if(t&1){let e=r$();VD(),uh(0,`svg`,31),Mh(`click`,function(i){CD(e);return DD(c$(2).clear(i))}),eb()}if(t&2){let e=c$(2);S$(e.cx(`clearIcon`)),jR(`pBind`,e.ptm(`clearIcon`)),Nh(`aria-hidden`,!0)}}function vn(t,r){}function Cn(t,r){t&1&&VR(0,vn,0,0,`ng-template`)}function In(t,r){if(t&1){let e=r$();uh(0,`span`,27),Mh(`click`,function(i){CD(e);return DD(c$(2).clear(i))}),VR(1,Cn,1,0,null,32),eb()}if(t&2){let e=c$(2);S$(e.cx(`clearIcon`)),jR(`pBind`,e.ptm(`clearIcon`)),Nh(`aria-hidden`,!0),qj(),jR(`ngTemplateOutlet`,e.clearIconTemplate||e._clearIconTemplate)}}function Tn(t,r){if(t&1&&(rb(0),VR(1,yn,1,4,`svg`,29)(2,In,2,5,`span`,30),ob()),t&2){let e=c$();qj(),jR(`ngIf`,!e.clearIconTemplate&&!e._clearIconTemplate),qj(),jR(`ngIf`,e.clearIconTemplate||e._clearIconTemplate)}}function Sn(t,r){t&1&&HR(0)}function kn(t,r){if(t&1&&(rb(0),VR(1,Sn,1,0,`ng-container`,32),ob()),t&2){let e=c$(2);qj(),jR(`ngTemplateOutlet`,e.loadingIconTemplate||e._loadingIconTemplate)}}function On(t,r){if(t&1&&xh(0,`span`,19),t&2){let e=c$(3);S$(e.cn(e.cx(`loadingIcon`),`pi-spin `+e.loadingIcon)),jR(`pBind`,e.ptm(`loadingIcon`)),Nh(`aria-hidden`,!0)}}function wn(t,r){if(t&1&&xh(0,`span`,19),t&2){let e=c$(3);S$(e.cn(e.cx(`loadingIcon`),`pi pi-spinner pi-spin`)),jR(`pBind`,e.ptm(`loadingIcon`)),Nh(`aria-hidden`,!0)}}function Mn(t,r){if(t&1&&(rb(0),VR(1,On,1,4,`span`,33)(2,wn,1,4,`span`,33),ob()),t&2){let e=c$(2);qj(),jR(`ngIf`,e.loadingIcon),qj(),jR(`ngIf`,!e.loadingIcon)}}function Vn(t,r){if(t&1&&(rb(0),VR(1,kn,2,1,`ng-container`,20)(2,Mn,3,2,`ng-container`,20),ob()),t&2){let e=c$();qj(),jR(`ngIf`,e.loadingIconTemplate||e._loadingIconTemplate),qj(),jR(`ngIf`,!e.loadingIconTemplate&&!e._loadingIconTemplate)}}function En(t,r){if(t&1&&xh(0,`span`,36),t&2){let e=c$(3);S$(e.cx(`dropdownIcon`)),jR(`pBind`,e.ptm(`dropdownIcon`))(`ngClass`,e.dropdownIcon),Nh(`aria-hidden`,!0)(`data-p`,e.dropdownIconDataP)}}function Fn(t,r){if(t&1&&(VD(),xh(0,`svg`,37)),t&2){let e=c$(3);S$(e.cx(`dropdownIcon`)),jR(`pBind`,e.ptm(`dropdownIcon`)),Nh(`aria-hidden`,!0)(`data-p`,e.dropdownIconDataP)}}function Ln(t,r){if(t&1&&(rb(0),VR(1,En,1,6,`span`,34)(2,Fn,1,5,`svg`,35),ob()),t&2){let e=c$(2);qj(),jR(`ngIf`,e.dropdownIcon),qj(),jR(`ngIf`,!e.dropdownIcon)}}function Bn(t,r){}function Dn(t,r){t&1&&VR(0,Bn,0,0,`ng-template`)}function An(t,r){if(t&1&&(uh(0,`span`,19),VR(1,Dn,1,0,null,28),eb()),t&2){let e=c$(2);S$(e.cx(`dropdownIcon`)),jR(`pBind`,e.ptm(`dropdownIcon`)),Nh(`aria-hidden`,!0),qj(),jR(`ngTemplateOutlet`,e.dropdownIconTemplate||e._dropdownIconTemplate)(`ngTemplateOutletContext`,K$(6,tn,e.dropdownIconDataP))}}function Pn(t,r){if(t&1&&VR(0,Ln,3,2,`ng-container`,20)(1,An,2,8,`span`,33),t&2){let e=c$();jR(`ngIf`,!e.dropdownIconTemplate&&!e._dropdownIconTemplate),qj(),jR(`ngIf`,e.dropdownIconTemplate||e._dropdownIconTemplate)}}function zn(t,r){t&1&&HR(0)}function Nn(t,r){t&1&&HR(0)}function Rn(t,r){if(t&1&&(rb(0),VR(1,Nn,1,0,`ng-container`,28),ob()),t&2){let e=c$(3);qj(),jR(`ngTemplateOutlet`,e.filterTemplate||e._filterTemplate)(`ngTemplateOutletContext`,K$(2,Kt,e.filterOptions))}}function Hn(t,r){if(t&1&&(VD(),xh(0,`svg`,45)),t&2){let e=c$().class,n=c$(5);S$(e),jR(`pBind`,n.getHeaderCheckboxPTOptions(`pcHeaderCheckbox.icon`))}}function Kn(t,r){}function $n(t,r){t&1&&VR(0,Kn,0,0,`ng-template`)}function Qn(t,r){if(t&1&&VR(0,Hn,1,3,`svg`,44)(1,$n,1,0,null,28),t&2){let e=r.class,n=c$(5);jR(`ngIf`,!n.headerCheckboxIconTemplate&&!n._headerCheckboxIconTemplate&&n.allSelected()),qj(),jR(`ngTemplateOutlet`,n.headerCheckboxIconTemplate||n._headerCheckboxIconTemplate)(`ngTemplateOutletContext`,Q$(3,nn,n.allSelected(),n.partialSelected(),e))}}function Gn(t,r){if(t&1){let e=r$();uh(0,`p-checkbox`,43,10),Mh(`onChange`,function(i){CD(e);return DD(c$(4).onToggleAll(i))}),VR(2,Qn,2,7,`ng-template`,null,11,nH),eb(),MU()}if(t&2){let e=c$(4);jR(`pt`,e.getHeaderCheckboxPTOptions(`pcHeaderCheckbox`))(`ngModel`,e.allSelected())(`ariaLabel`,e.toggleAllAriaLabel)(`binary`,!0)(`variant`,e.$variant())(`disabled`,e.$disabled())(`unstyled`,e.unstyled()),PU()}}function qn(t,r){if(t&1&&(VD(),xh(0,`svg`,50)),t&2)jR(`pBind`,c$(5).ptm(`filterIcon`))}function jn(t,r){}function Un(t,r){t&1&&VR(0,jn,0,0,`ng-template`)}function Wn(t,r){if(t&1&&(uh(0,`span`,51),VR(1,Un,1,0,null,32),eb()),t&2){let e=c$(5);jR(`pBind`,e.ptm(`filterIcon`)),qj(),jR(`ngTemplateOutlet`,e.filterIconTemplate||e._filterIconTemplate)}}function Zn(t,r){if(t&1){let e=r$();uh(0,`p-iconfield`,46)(1,`input`,47,12),Mh(`input`,function(i){CD(e);return DD(c$(4).onFilterInputChange(i))})(`keydown`,function(i){CD(e);return DD(c$(4).onFilterKeyDown(i))})(`click`,function(i){CD(e);return DD(c$(4).onInputClick(i))})(`blur`,function(i){CD(e);return DD(c$(4).onFilterBlur(i))}),eb(),uh(3,`p-inputicon`,46),VR(4,qn,1,1,`svg`,48)(5,Wn,2,2,`span`,49),eb()()}if(t&2){let e=c$(4);S$(e.cx(`pcFilterContainer`)),jR(`pt`,e.ptm(`pcFilterContainer`))(`unstyled`,e.unstyled()),qj(),S$(e.cx(`pcFilter`)),jR(`pt`,e.ptm(`pcFilter`))(`variant`,e.$variant())(`value`,e._filterValue()||``)(`unstyled`,e.unstyled()),Nh(`autocomplete`,e.autocomplete)(`aria-owns`,e.id+`_list`)(`aria-activedescendant`,e.focusedOptionId)(`disabled`,e.$disabled()?``:void 0)(`placeholder`,e.filterPlaceHolder)(`aria-label`,e.ariaFilterLabel),qj(2),jR(`pt`,e.ptm(`pcFilterIconContainer`))(`unstyled`,e.unstyled()),qj(),jR(`ngIf`,!e.filterIconTemplate&&!e._filterIconTemplate),qj(),jR(`ngIf`,e.filterIconTemplate||e._filterIconTemplate)}}function Xn(t,r){if(t&1&&VR(0,Gn,4,7,`p-checkbox`,41)(1,Zn,6,20,`p-iconfield`,42),t&2){let e=c$(3);jR(`ngIf`,e.showToggleAll&&!e.selectionLimit),qj(),jR(`ngIf`,e.filter)}}function Yn(t,r){if(t&1&&(uh(0,`div`,19),Ph(1),VR(2,Rn,2,4,`ng-container`,21)(3,Xn,2,2,`ng-template`,null,9,nH),eb()),t&2){let e=f$(4),n=c$(2);S$(n.cx(`header`)),jR(`pBind`,n.ptm(`header`)),qj(2),jR(`ngIf`,n.filterTemplate||n._filterTemplate)(`ngIfElse`,e)}}function Jn(t,r){t&1&&HR(0)}function eo(t,r){if(t&1&&VR(0,Jn,1,0,`ng-container`,28),t&2){let e=r.$implicit,n=r.options;c$(2);jR(`ngTemplateOutlet`,f$(9))(`ngTemplateOutletContext`,Y$(2,$t,e,n))}}function to(t,r){t&1&&HR(0)}function io(t,r){if(t&1&&VR(0,to,1,0,`ng-container`,28),t&2){let e=r.options,n=c$(4);jR(`ngTemplateOutlet`,n.loaderTemplate||n._loaderTemplate)(`ngTemplateOutletContext`,K$(2,Kt,e))}}function no(t,r){t&1&&(rb(0),VR(1,io,1,4,`ng-template`,null,14,nH),ob())}function oo(t,r){if(t&1){let e=r$();uh(0,`p-scroller`,52,13),Mh(`onLazyLoad`,function(i){CD(e);return DD(c$(2).onLazyLoad.emit(i))}),VR(2,eo,1,5,`ng-template`,null,3,nH)(4,no,3,0,`ng-container`,20),eb()}if(t&2){let e=c$(2);C$(K$(9,Le,e.scrollHeight)),jR(`items`,e.visibleOptions())(`itemSize`,e.virtualScrollItemSize)(`autoSize`,!0)(`tabindex`,-1)(`lazy`,e.lazy)(`options`,e.virtualScrollOptions),qj(4),jR(`ngIf`,e.loaderTemplate||e._loaderTemplate)}}function lo(t,r){t&1&&HR(0)}function ao(t,r){if(t&1&&(rb(0),VR(1,lo,1,0,`ng-container`,28),ob()),t&2){c$();let e=f$(9),n=c$();qj(),jR(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,Y$(3,$t,n.visibleOptions(),G$(2,on)))}}function ro(t,r){if(t&1&&(uh(0,`span`),F$(1),eb()),t&2){let e=c$(2).$implicit,n=c$(3);qj(),dk(n.getOptionGroupLabel(e.optionGroup))}}function so(t,r){if(t&1&&HR(0,58),t&2){let e=c$(2).$implicit;jR(`ngTemplateOutlet`,c$(3).groupTemplate)(`ngTemplateOutletContext`,K$(2,Ht,e.optionGroup))}}function co(t,r){if(t&1&&(rb(0),uh(1,`li`,56),VR(2,ro,2,1,`span`,20)(3,so,1,4,`ng-container`,57),eb(),ob()),t&2){let e=c$(),n=e.$implicit,i=e.index,o=c$().options,l=c$(2);qj(),S$(l.cx(`optionGroup`)),jR(`pBind`,l.ptm(`optionGroup`))(`ngStyle`,K$(7,Le,o.itemSize+`px`)),Nh(`id`,l.id+`_`+l.getOptionIndex(i,o)),qj(),jR(`ngIf`,!l.groupTemplate&&n.optionGroup),qj(),jR(`ngIf`,n.optionGroup&&l.groupTemplate)}}function po(t,r){if(t&1){let e=r$();rb(0),uh(1,`li`,59),Mh(`onClick`,function(i){CD(e);let o=c$().index,l=c$().options,u=c$(2);return DD(u.onOptionSelect(i,!1,u.getOptionIndex(o,l)))})(`onMouseEnter`,function(i){CD(e);let o=c$().index,l=c$().options,u=c$(2);return DD(u.onOptionMouseEnter(i,u.getOptionIndex(o,l)))}),eb(),ob()}if(t&2){let e=c$(),n=e.$implicit,i=e.index,o=c$().options,l=c$(2);qj(),jR(`pBind`,l.getPTOptions(n,l.getItemOptions,i,`option`))(`id`,l.id+`_`+l.getOptionIndex(i,o))(`option`,n)(`selected`,l.isSelected(n))(`label`,l.getOptionLabel(n))(`disabled`,l.isOptionDisabled(n))(`template`,l.itemTemplate||l._itemTemplate)(`itemCheckboxIconTemplate`,l.itemCheckboxIconTemplate||l._itemCheckboxIconTemplate)(`itemSize`,o.itemSize)(`focused`,l.focusedOptionIndex()===l.getOptionIndex(i,o))(`ariaPosInset`,l.getAriaPosInset(l.getOptionIndex(i,o)))(`ariaSetSize`,l.ariaSetSize)(`variant`,l.$variant())(`highlightOnSelect`,l.highlightOnSelect)(`pt`,l.pt)(`unstyled`,l.unstyled())}}function uo(t,r){if(t&1&&VR(0,co,4,9,`ng-container`,20)(1,po,2,16,`ng-container`,20),t&2){let e=r.$implicit,n=c$(3);jR(`ngIf`,n.isOptionGroup(e)),qj(),jR(`ngIf`,!n.isOptionGroup(e))}}function mo(t,r){if(t&1&&F$(0),t&2)cb(` `,c$(4).emptyFilterMessageLabel,` `)}function ho(t,r){t&1&&HR(0)}function _o(t,r){if(t&1&&VR(0,ho,1,0,`ng-container`,32),t&2){let e=c$(4);jR(`ngTemplateOutlet`,e.emptyFilterTemplate||e._emptyFilterTemplate||e.emptyTemplate||e._emptyFilterTemplate)}}function fo(t,r){if(t&1&&(uh(0,`li`,56),W5(1,mo,1,1)(2,_o,1,1,`ng-container`),eb()),t&2){let e=c$().options,n=c$(2);S$(n.cx(`emptyMessage`)),jR(`pBind`,n.ptm(`emptyMessage`))(`ngStyle`,K$(5,Le,e.itemSize+`px`)),qj(),G5(!n.emptyFilterTemplate&&!n._emptyFilterTemplate&&!n.emptyTemplate&&!n._emptyTemplate?1:2)}}function go(t,r){if(t&1&&F$(0),t&2)cb(` `,c$(4).emptyMessageLabel,` `)}function bo(t,r){t&1&&HR(0)}function xo(t,r){if(t&1&&VR(0,bo,1,0,`ng-container`,32),t&2){let e=c$(4);jR(`ngTemplateOutlet`,e.emptyTemplate||e._emptyTemplate)}}function yo(t,r){if(t&1&&(uh(0,`li`,56),W5(1,go,1,1)(2,xo,1,1,`ng-container`),eb()),t&2){let e=c$().options,n=c$(2);S$(n.cx(`emptyMessage`)),jR(`pBind`,n.ptm(`emptyMessage`))(`ngStyle`,K$(5,Le,e.itemSize+`px`)),qj(),G5(!n.emptyTemplate&&!n._emptyTemplate?1:2)}}function vo(t,r){if(t&1&&(uh(0,`ul`,53,15),VR(2,uo,2,2,`ng-template`,54)(3,fo,3,7,`li`,55)(4,yo,3,7,`li`,55),eb()),t&2){let e=r.$implicit,n=r.options,i=c$(2);C$(n.contentStyle),S$(i.cn(i.cx(`list`),n.contentStyleClass)),jR(`pBind`,i.ptm(`list`)),Nh(`aria-label`,i.listLabel),qj(2),jR(`ngForOf`,e),qj(),jR(`ngIf`,i.hasFilter()&&i.isEmpty()),qj(),jR(`ngIf`,!i.hasFilter()&&i.isEmpty())}}function Co(t,r){t&1&&HR(0)}function Io(t,r){if(t&1&&(uh(0,`div`),Ph(1,1),VR(2,Co,1,0,`ng-container`,32),eb()),t&2){let e=c$(2);qj(2),jR(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}function To(t,r){if(t&1){let e=r$();uh(0,`div`,38)(1,`span`,39,6),Mh(`focus`,function(i){CD(e);return DD(c$().onFirstHiddenFocus(i))}),eb(),VR(3,zn,1,0,`ng-container`,32)(4,Yn,5,5,`div`,33),uh(5,`div`,19),VR(6,oo,5,11,`p-scroller`,40)(7,ao,2,6,`ng-container`,20)(8,vo,5,9,`ng-template`,null,7,nH),eb(),VR(10,Io,3,1,`div`,20),uh(11,`span`,39,8),Mh(`focus`,function(i){CD(e);return DD(c$().onLastHiddenFocus(i))}),eb()()}if(t&2){let e=c$();S$(e.cn(e.cx(`overlay`),e.panelStyleClass)),jR(`pBind`,e.ptm(`overlay`))(`ngStyle`,e.panelStyle),Nh(`data-p`,e.overlayDataP)(`id`,e.id+`_list`),qj(),jR(`pBind`,e.ptm(`firstHiddenFocusableEl`)),Nh(`tabindex`,0)(`data-p-hidden-accessible`,!0)(`data-p-hidden-focusable`,!0),qj(2),jR(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate),qj(),jR(`ngIf`,e.showHeader),qj(),S$(e.cx(`listContainer`)),tk(`max-height`,e.virtualScroll?`auto`:e.scrollHeight||`auto`),jR(`pBind`,e.ptm(`listContainer`)),qj(),jR(`ngIf`,e.virtualScroll),qj(),jR(`ngIf`,!e.virtualScroll),qj(3),jR(`ngIf`,e.footerFacet||e.footerTemplate||e._footerTemplate),qj(),jR(`pBind`,e.ptm(`lastHiddenFocusableEl`)),Nh(`tabindex`,0)(`data-p-hidden-accessible`,!0)(`data-p-hidden-focusable`,!0)}}var So=`
    ${Nt}

    /* For Optimus */
   .p-multiselect.ng-invalid.ng-dirty {
        border-color: dt('multiselect.invalid.border.color');
    }
    p-multiSelect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
    p-multi-select.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
    p-multiselect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder {
        color: dt('multiselect.invalid.placeholder.color');
    }
`;var ko={root:({instance:t})=>({position:t.$appendTo()===`self`?`relative`:void 0})};var Oo={root:({instance:t})=>[`p-multiselect p-component p-inputwrapper`,{"p-multiselect p-component p-inputwrapper":!0,"p-multiselect-display-chip":t.display===`chip`,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()===`filled`,"p-focus":t.focused,"p-inputwrapper-filled":t.$filled(),"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-multiselect-open":t.overlayVisible,"p-multiselect-fluid":t.hasFluid,"p-multiselect-sm p-inputfield-sm":t.size()===`small`,"p-multiselect-lg p-inputfield-lg":t.size()===`large`}],labelContainer:`p-multiselect-label-container`,label:({instance:t})=>({"p-multiselect-label":!0,"p-placeholder":t.label()===t.placeholder(),"p-multiselect-label-empty":!t.placeholder()&&!t.defaultLabel&&(!t.modelValue()||t.modelValue().length===0)}),chipItem:`p-multiselect-chip-item`,pcChip:`p-multiselect-chip`,chipIcon:`p-multiselect-chip-icon`,dropdown:`p-multiselect-dropdown`,loadingIcon:`p-multiselect-loading-icon`,dropdownIcon:`p-multiselect-dropdown-icon`,overlay:`p-multiselect-overlay p-component-overlay p-component`,header:`p-multiselect-header`,pcFilterContainer:`p-multiselect-filter-container`,pcFilter:`p-multiselect-filter`,listContainer:`p-multiselect-list-container`,list:`p-multiselect-list`,optionGroup:`p-multiselect-option-group`,option:({instance:t})=>({"p-multiselect-option":!0,"p-multiselect-option-selected":t.selected&&t.highlightOnSelect,"p-disabled":t.disabled,"p-focus":t.focused}),emptyMessage:`p-multiselect-empty-message`,clearIcon:`p-multiselect-clear-icon`};var Fe=(()=>{class t extends nL{name=`multiselect`;style=So;classes=Oo;inlineStyles=ko;static ɵfac=(()=>{let e;return function(i){return(e||(e=dh(t)))(i||t)}})();static ɵprov=q({token:t,factory:t.ɵfac})}return t})();var Rt=new V(`MULTISELECT_INSTANCE`);var wo=new V(`MULTISELECT_ITEM_INSTANCE`);var Mo={provide:Ie,useExisting:lf(()=>Eo),multi:!0};var Vo=(()=>{class t extends k{$pcMultiSelectItem=A(wo,{optional:!0,skipSelf:!0})??void 0;hostName=`MultiSelect`;getPTOptions(e){return this.ptm(e,{context:{selected:this.selected,focused:this.focused,disabled:this.disabled}})}option;selected;label;disabled;itemSize;focused;ariaPosInset;ariaSetSize;variant;template;checkIconTemplate;itemCheckboxIconTemplate;highlightOnSelect;onClick=new kt$1;onMouseEnter=new kt$1;_componentStyle=A(Fe);onOptionClick(e){this.onClick.emit({originalEvent:e,option:this.option,selected:this.selected}),e.stopPropagation(),e.preventDefault()}onOptionMouseEnter(e){this.onMouseEnter.emit({originalEvent:e,option:this.option,selected:this.selected})}static ɵfac=(()=>{let e;return function(i){return(e||(e=dh(t)))(i||t)}})();static ɵcmp=_a({type:t,selectors:[[`li`,`pMultiSelectItem`,``]],hostAttrs:[`role`,`option`],hostVars:13,hostBindings:function(n,i){n&1&&Mh(`click`,function(l){return i.onOptionClick(l)})(`mouseenter`,function(l){return i.onOptionMouseEnter(l)}),n&2&&(Nh(`aria-label`,i.label)(`aria-setsize`,i.ariaSetSize)(`aria-posinset`,i.ariaPosInset)(`aria-selected`,i.selected)(`data-p-selected`,i.selected)(`data-p-focused`,i.focused)(`data-p-highlight`,i.selected)(`data-p-disabled`,i.disabled)(`aria-checked`,i.selected),S$(i.cx(`option`)),tk(`height`,i.itemSize,`px`))},inputs:{option:`option`,selected:[2,`selected`,`selected`,Uu],label:`label`,disabled:[2,`disabled`,`disabled`,Uu],itemSize:[2,`itemSize`,`itemSize`,MH],focused:[2,`focused`,`focused`,Uu],ariaPosInset:`ariaPosInset`,ariaSetSize:`ariaSetSize`,variant:`variant`,template:`template`,checkIconTemplate:`checkIconTemplate`,itemCheckboxIconTemplate:`itemCheckboxIconTemplate`,highlightOnSelect:[2,`highlightOnSelect`,`highlightOnSelect`,Uu]},outputs:{onClick:`onClick`,onMouseEnter:`onMouseEnter`},features:[W$([Fe]),LR],decls:4,vars:13,consts:[[`icon`,``],[3,`ngModel`,`binary`,`tabindex`,`variant`,`ariaLabel`,`pt`,`unstyled`],[4,`ngIf`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,i){n&1&&(uh(0,`p-checkbox`,1),VR(1,Ii,3,0,`ng-container`,2),eb(),MU(),VR(2,Ti,2,1,`span`,2)(3,Si,1,0,`ng-container`,3)),n&2&&(jR(`ngModel`,i.selected)(`binary`,!0)(`tabindex`,-1)(`variant`,i.variant)(`ariaLabel`,i.label)(`pt`,i.getPTOptions(`pcOptionCheckbox`))(`unstyled`,i.unstyled()),PU(),qj(),jR(`ngIf`,i.itemCheckboxIconTemplate),qj(),jR(`ngIf`,!i.template),qj(),jR(`ngTemplateOutlet`,i.template)(`ngTemplateOutletContext`,K$(11,Ht,i.option)))},dependencies:[Qh,e4,n4,Ee,Sn$1,wn$1,Qt,oIe],encapsulation:2,changeDetection:1})}return t})();var Eo=(()=>{class t extends Ut$1{zone;filterService;overlayService;componentName=`MultiSelect`;id;ariaLabel;styleClass;panelStyle;panelStyleClass;inputId;readonly;group;filter=!0;filterPlaceHolder;filterLocale;overlayVisible=!1;tabindex=0;dataKey;ariaLabelledBy;set displaySelectedLabel(e){this._displaySelectedLabel=e}get displaySelectedLabel(){return this._displaySelectedLabel}set maxSelectedLabels(e){this._maxSelectedLabels=e}get maxSelectedLabels(){return this._maxSelectedLabels}selectionLimit;selectedItemsLabel;showToggleAll=!0;emptyFilterMessage=``;emptyMessage=``;resetFilterOnHide=!1;dropdownIcon;chipIcon;optionLabel;optionValue;optionDisabled;optionGroupLabel=`label`;optionGroupChildren=`items`;showHeader=!0;filterBy;scrollHeight=`200px`;lazy=!1;virtualScroll;loading=!1;virtualScrollItemSize;loadingIcon;virtualScrollOptions;overlayOptions;ariaFilterLabel;filterMatchMode=`contains`;tooltip=``;tooltipPosition=`right`;tooltipPositionStyle=`absolute`;tooltipStyleClass;autofocusFilter=!1;display=`comma`;autocomplete=`off`;showClear=!1;autofocus;set placeholder(e){this._placeholder.set(e)}get placeholder(){return this._placeholder.asReadonly()}get options(){return this._options()}set options(e){P1(this._options(),e)||this._options.set(e||[])}get filterValue(){return this._filterValue()}set filterValue(e){this._filterValue.set(e)}get selectAll(){return this._selectAll}set selectAll(e){this._selectAll=e}focusOnHover=!0;filterFields;selectOnFocus=!1;autoOptionFocus=!1;highlightOnSelect=!0;size=Uh();variant=Uh();fluid=Uh(void 0,{transform:Uu});appendTo=Uh(void 0);motionOptions=Uh(void 0);onChange=new kt$1;onFilter=new kt$1;onFocus=new kt$1;onBlur=new kt$1;onClick=new kt$1;onClear=new kt$1;onPanelShow=new kt$1;onPanelHide=new kt$1;onLazyLoad=new kt$1;onRemove=new kt$1;onSelectAllChange=new kt$1;overlayViewChild;filterInputChild;focusInputViewChild;itemsViewChild;scroller;lastHiddenFocusableElementOnOverlay;firstHiddenFocusableElementOnOverlay;headerCheckboxViewChild;footerFacet;headerFacet;_componentStyle=A(Fe);bindDirectiveInstance=A(w,{self:!0});searchValue;searchTimeout;_selectAll=null;_placeholder=G(void 0);_disableTooltip=!1;value;_filteredOptions;focus;filtered;itemTemplate;groupTemplate;loaderTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;selectedItemsTemplate;loadingIconTemplate;filterIconTemplate;removeTokenIconTemplate;chipIconTemplate;clearIconTemplate;dropdownIconTemplate;itemCheckboxIconTemplate;headerCheckboxIconTemplate;templates;_itemTemplate;_groupTemplate;_loaderTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_selectedItemsTemplate;_loadingIconTemplate;_filterIconTemplate;_removeTokenIconTemplate;_chipIconTemplate;_clearIconTemplate;_dropdownIconTemplate;_itemCheckboxIconTemplate;_headerCheckboxIconTemplate;$variant=ss(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());$appendTo=ss(()=>this.appendTo()||this.config.overlayAppendTo());$pcMultiSelect=A(Rt,{optional:!0,skipSelf:!0})??void 0;pcFluid=A(Ue,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case`item`:this._itemTemplate=e.template;break;case`group`:this._groupTemplate=e.template;break;case`selectedItems`:case`selecteditems`:this._selectedItemsTemplate=e.template;break;case`header`:this._headerTemplate=e.template;break;case`filter`:this._filterTemplate=e.template;break;case`emptyfilter`:this._emptyFilterTemplate=e.template;break;case`empty`:this._emptyTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;case`loader`:this._loaderTemplate=e.template;break;case`headercheckboxicon`:this._headerCheckboxIconTemplate=e.template;break;case`loadingicon`:this._loadingIconTemplate=e.template;break;case`filtericon`:this._filterIconTemplate=e.template;break;case`removetokenicon`:this._removeTokenIconTemplate=e.template;break;case`clearicon`:this._clearIconTemplate=e.template;break;case`dropdownicon`:this._dropdownIconTemplate=e.template;break;case`itemcheckboxicon`:this._itemCheckboxIconTemplate=e.template;break;case`chipicon`:this._chipIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}headerCheckboxFocus;filterOptions;preventModelTouched;focused=!1;itemsWrapper;_displaySelectedLabel=!0;_maxSelectedLabels=3;modelValue=G(null);_filterValue=G(null);_options=G([]);startRangeIndex=G(-1);focusedOptionIndex=G(-1);selectedOptions;clickInProgress=!1;get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(iIe.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(iIe.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.modelValue()!==``&&Be(this.modelValue())&&this.showClear&&!this.$disabled()&&!this.readonly&&this.$filled()}get toggleAllAriaLabel(){return this.config.translation.aria?this.config.translation.aria[this.allSelected()?`selectAll`:`unselectAll`]:void 0}get listLabel(){return this.config.getTranslation(iIe.ARIA).listLabel}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}visibleOptions=ss(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),n=F1(e)&&Fn$1.isObject(e[0]);if(this._filterValue()){let i;if(n?i=this.filterService.filter(e,this.searchFields(),this._filterValue(),this.filterMatchMode,this.filterLocale):i=e.filter(o=>o.toString().toLocaleLowerCase().includes(this._filterValue().toLocaleLowerCase())),this.group){let o=this.options||[],l=[];return o.forEach(u=>{let me=this.getOptionGroupChildren(u).filter(Qt=>i.includes(Qt));me.length>0&&l.push(s(r({},u),{[typeof this.optionGroupChildren==`string`?this.optionGroupChildren:`items`]:[...me]}))}),this.flatOptions(l)}return i}return e});label=ss(()=>{let e,n=this.modelValue();if(n&&n?.length&&this.displaySelectedLabel){if(Be(this.maxSelectedLabels)&&n?.length>(this.maxSelectedLabels||0))return this.getSelectedItemsLabel();e=``;for(let i=0;i<n.length;i++)i!==0&&(e+=`, `),e+=this.getLabelByValue(n[i])}else e=this.placeholder()||``;return e});chipSelectedItems=ss(()=>Be(this.maxSelectedLabels)&&this.modelValue()&&this.modelValue()?.length>(this.maxSelectedLabels||0)?this.modelValue()?.slice(0,this.maxSelectedLabels):this.modelValue());constructor(e,n,i){super(),this.zone=e,this.filterService=n,this.overlayService=i,Wi$1(()=>{let o=this.modelValue(),l=this.getAllVisibleAndNonVisibleOptions();l&&Be(l)&&(this.optionValue&&this.optionLabel&&o?this.selectedOptions=l.filter(u=>o.includes(u[this.optionLabel])||o.includes(u[this.optionValue])):this.selectedOptions=o,this.cd.markForCheck())})}onInit(){this.id=this.id||pt(`pn_id_`),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}maxSelectionLimitReached(){return this.selectionLimit&&this.modelValue()&&this.modelValue().length===this.selectionLimit}onAfterViewInit(){this.overlayVisible&&this.show()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`])),this.filtered&&(this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild?.alignOverlay()},1)}),this.filtered=!1)}flatOptions(e){return(e||[]).reduce((n,i,o)=>{n.push({optionGroup:i,group:!0,index:o});let l=this.getOptionGroupChildren(i);return l&&l.forEach(u=>n.push(u)),n},[])}autoUpdateModel(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()){this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());let e=this.getOptionValue(this.visibleOptions()[this.focusedOptionIndex()]);this.onOptionSelect({originalEvent:null,option:[e]})}}updateModel(e,n){this.value=e,this.onModelChange(e),this.writeValue(e)}onInputClick(e){e.stopPropagation(),e.preventDefault(),this.focusedOptionIndex.set(-1)}onOptionSelect(e,n=!1,i=-1){let{originalEvent:o,option:l}=e;if(this.$disabled()||this.isOptionDisabled(l))return;let u=this.isSelected(l),x=[];u?x=this.modelValue().filter(me=>!lm(me,this.getOptionValue(l),this.equalityKey()||``)):x=[...this.modelValue()||[],this.getOptionValue(l)],this.updateModel(x,o),i!==-1&&this.focusedOptionIndex.set(i),n&&xwe(this.focusInputViewChild?.nativeElement),this.onChange.emit({originalEvent:e,value:x,itemValue:l})}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}onOptionSelectRange(e,n=-1,i=-1){if(n===-1&&(n=this.findNearestSelectedOptionIndex(i,!0)),i===-1&&(i=this.findNearestSelectedOptionIndex(n)),n!==-1&&i!==-1){let o=Math.min(n,i),l=Math.max(n,i),u=this.visibleOptions().slice(o,l+1).filter(x=>this.isValidOption(x)).map(x=>this.getOptionValue(x));this.updateModel(u,e)}}searchFields(){return(this.filterBy||this.optionLabel||`label`).split(`,`)}findNearestSelectedOptionIndex(e,n=!1){let i=-1;return this.hasSelectedOption()&&(n?(i=this.findPrevSelectedOptionIndex(e),i=i===-1?this.findNextSelectedOptionIndex(e):i):(i=this.findNextSelectedOptionIndex(e),i=i===-1?this.findPrevSelectedOptionIndex(e):i)),i>-1?i:e}findPrevSelectedOptionIndex(e){let n=this.hasSelectedOption()&&e>0?KG(this.visibleOptions().slice(0,e),i=>this.isValidSelectedOption(i)):-1;return n>-1?n:-1}findFirstFocusedOptionIndex(){let e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findFirstSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextSelectedOptionIndex(e){let n=this.hasSelectedOption()&&e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidSelectedOption(i)):-1;return n>-1?n+e+1:-1}equalityKey(){return this.optionValue?null:this.dataKey}hasSelectedOption(){return Be(this.modelValue())}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isOptionGroup(e){return e&&(this.group||this.optionGroupLabel)&&e.optionGroup&&e.group}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.maxSelectionLimitReached()&&!this.isSelected(e)?!0:this.optionDisabled?Zl(e,this.optionDisabled):e&&e.disabled!==void 0?e.disabled:!1}isSelected(e){let n=this.getOptionValue(e);return(this.modelValue()||[]).some(i=>lm(i,n,this.equalityKey()||``))}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale))}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}getLabelByValue(e){let i=(this.group?this.flatOptions(this._options()):this._options()||[]).find(o=>!this.isOptionGroup(o)&&lm(this.getOptionValue(o),e,this.equalityKey()||``));return i?this.getOptionLabel(i):null}getSelectedItemsLabel(){let e=/{(.*?)}/,n=this.selectedItemsLabel?this.selectedItemsLabel:this.config.getTranslation(iIe.SELECTION_MESSAGE);return e.test(n)?n.replace(n.match(e)[0],this.modelValue().length+``):n}getOptionLabel(e){return this.optionLabel?Zl(e,this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?Zl(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}getOptionGroupLabel(e){return this.optionGroupLabel?Zl(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return e?this.optionGroupChildren?Zl(e,this.optionGroupChildren):e.items:[]}onKeyDown(e){if(this.$disabled()){e.preventDefault();return}let n=e.metaKey||e.ctrlKey;switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`Space`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`ShiftLeft`:case`ShiftRight`:this.onShiftKey();break;default:if(e.code===`KeyA`&&n){let i=this.visibleOptions().filter(o=>this.isValidOption(o)).map(o=>this.getOptionValue(o));this.updateModel(i,e),e.preventDefault();break}!n&&YG(e.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(e,e.key),e.preventDefault());break}}onFilterKeyDown(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e,!0);break;case`ArrowLeft`:case`ArrowRight`:this.onArrowLeftKey(e,!0);break;case`Home`:this.onHomeKey(e,!0);break;case`End`:this.onEndKey(e,!0);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e,!0);break;default:break}}onArrowLeftKey(e,n=!1){n&&this.focusedOptionIndex.set(-1)}onArrowDownKey(e){let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex(),n),this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show(),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e,n=!1){if(e.altKey&&!n)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,i,this.startRangeIndex()),this.changeFocusedOptionIndex(e,i),!this.overlayVisible&&this.show(),e.preventDefault()}e.stopPropagation()}onHomeKey(e,n=!1){let{currentTarget:i}=e;if(n){let o=i.value.length;i.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex.set(-1)}else{let o=e.metaKey||e.ctrlKey,l=this.findFirstOptionIndex();e.shiftKey&&o&&this.onOptionSelectRange(e,l,this.startRangeIndex()),this.changeFocusedOptionIndex(e,l),!this.overlayVisible&&this.show()}e.preventDefault()}onEndKey(e,n=!1){let{currentTarget:i}=e;if(n){let o=i.value.length;i.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex.set(-1)}else{let o=e.metaKey||e.ctrlKey,l=this.findLastFocusedOptionIndex();e.shiftKey&&o&&this.onOptionSelectRange(e,this.startRangeIndex(),l),this.changeFocusedOptionIndex(e,l),!this.overlayVisible&&this.show()}e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){this.overlayVisible?this.focusedOptionIndex()!==-1&&(e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex()):this.onOptionSelect({originalEvent:e,option:this.visibleOptions()[this.focusedOptionIndex()]})):this.onArrowDownKey(e),e.preventDefault()}onEscapeKey(e){this.overlayVisible&&(this.hide(!0),e.stopPropagation(),e.preventDefault())}onTabKey(e,n=!1){n||(this.overlayVisible&&this.hasFocusableElements()?(xwe(e.shiftKey?this.lastHiddenFocusableElementOnOverlay?.nativeElement:this.firstHiddenFocusableElementOnOverlay?.nativeElement),e.preventDefault()):this.overlayVisible&&this.hide(this.filter))}onShiftKey(){this.startRangeIndex.set(this.focusedOptionIndex())}onContainerClick(e){if(!(this.$disabled()||this.loading||this.readonly||e.target?.isSameNode?.(this.focusInputViewChild?.nativeElement))){if(!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(e.target)){if(this.clickInProgress)return;this.clickInProgress=!0,setTimeout(()=>{this.clickInProgress=!1},150),this.overlayVisible?this.hide(!0):this.show(!0)}this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),this.onClick.emit(e),this.cd.detectChanges()}}onFirstHiddenFocus(e){xwe(e.relatedTarget===this.focusInputViewChild?.nativeElement?Owe(this.overlayViewChild?.overlayViewChild?.nativeElement,`:not([data-p-hidden-focusable="true"])`):this.focusInputViewChild?.nativeElement)}onInputFocus(e){this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit({originalEvent:e})}onInputBlur(e){this.focused=!1,this.onBlur.emit({originalEvent:e}),this.preventModelTouched||this.onModelTouched(),this.preventModelTouched=!1}onFilterInputChange(e){let n=e.target.value;this._filterValue.set(n),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller?.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild?.alignOverlay()})}onLastHiddenFocus(e){xwe(e.relatedTarget===this.focusInputViewChild?.nativeElement?Lwe(this.overlayViewChild?.overlayViewChild?.nativeElement,`:not([data-p-hidden-focusable="true"])`):this.focusInputViewChild?.nativeElement)}onOptionMouseEnter(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)}onFilterBlur(e){this.focusedOptionIndex.set(-1)}onToggleAll(e){if(!(this.$disabled()||this.readonly)){if(this.selectAll!=null)this.onSelectAllChange.emit({originalEvent:e,checked:!this.allSelected()});else{let n=this.getAllVisibleAndNonVisibleOptions().filter(x=>this.isSelected(x)&&(this.optionDisabled?Zl(x,this.optionDisabled):x&&x.disabled!==void 0?x.disabled:!1)),i=this.allSelected()?this.visibleOptions().filter(x=>!this.isValidOption(x)&&this.isSelected(x)):this.visibleOptions().filter(x=>this.isSelected(x)||this.isValidOption(x)),l=[...this.filter&&!this.allSelected()?this.getAllVisibleAndNonVisibleOptions().filter(x=>this.isSelected(x)&&this.isValidOption(x)):[],...n,...i].map(x=>this.getOptionValue(x)),u=[...new Set(l)];this.updateModel(u,e),(!u.length||u.length===this.getAllVisibleAndNonVisibleOptions().length)&&this.onSelectAllChange.emit({originalEvent:e,checked:!!u.length})}this.partialSelected()&&(this.selectedOptions=[],this.cd.markForCheck()),this.onChange.emit({originalEvent:e,value:this.value}),Yt$1.focus(this.headerCheckboxViewChild?.inputViewChild?.nativeElement),this.headerCheckboxFocus=!0,e.originalEvent.preventDefault(),e.originalEvent.stopPropagation()}}changeFocusedOptionIndex(e,n){this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView())}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let i=Nwe(this.itemsViewChild.nativeElement,`li[id="${n}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:`nearest`,inline:`nearest`}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}allSelected(){return this.selectAll!==null?this.selectAll:Be(this.visibleOptions())&&this.visibleOptions().every(e=>this.isOptionGroup(e)||this.isOptionDisabled(e)||this.isSelected(e))}partialSelected(){return this.selectedOptions&&this.selectedOptions.length>0&&this.selectedOptions.length<(this.options?.length||0)}show(e){this.overlayVisible=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex();this.focusedOptionIndex.set(n),e&&xwe(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}hide(e){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.filter&&this.resetFilterOnHide&&this.resetFilter(),this.overlayOptions?.mode===`modal`&&hn$1(),e&&xwe(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayBeforeEnter(e){if(this.itemsWrapper=Nwe(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?`[data-pc-name="virtualscroller"]`:`[data-pc-section="listcontainer"]`),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let n=this.modelValue()?this.focusedOptionIndex():-1;n!==-1&&this.scroller?.scrollToIndex(n)}else{let n=Nwe(this.itemsWrapper,`[data-pc-section="option"][data-p-selected="true"]`);n&&n.scrollIntoView({block:`nearest`,inline:`nearest`})}this.filterInputChild&&this.filterInputChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&this.filterInputChild.nativeElement.focus()),this.onPanelShow.emit(e)}onOverlayAfterLeave(e){this.itemsWrapper=null,this.onModelTouched(),this.onPanelHide.emit(e)}resetFilter(){this.filterInputChild&&this.filterInputChild.nativeElement&&(this.filterInputChild.nativeElement.value=``),this._filterValue.set(null),this._filteredOptions=null}onOverlayHide(e){this.focusedOptionIndex.set(-1),this.filter&&this.resetFilterOnHide&&this.resetFilter()}close(e){this.hide(),e.preventDefault(),e.stopPropagation()}clear(e){this.value=[],this.updateModel(null,e),this.selectedOptions=[],this.onClear.emit(),this._disableTooltip=!0,e.stopPropagation()}labelContainerMouseLeave(){this._disableTooltip&&(this._disableTooltip=!1)}removeOption(e,n){let i=this.modelValue().filter(o=>!lm(o,e,this.equalityKey()||``));this.updateModel(i,n),this.onChange.emit({originalEvent:n,value:i,itemValue:e}),this.onRemove.emit({newValue:i,removed:e}),n&&n.stopPropagation()}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?KG(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return n>-1?n:e}findLastSelectedOptionIndex(){return this.hasSelectedOption()?KG(this.visibleOptions(),e=>this.isValidSelectedOption(e)):-1}findLastFocusedOptionIndex(){let e=this.findLastSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findLastOptionIndex(){return KG(this.visibleOptions(),e=>this.isValidOption(e))}searchOptions(e,n){this.searchValue=(this.searchValue||``)+n;let i=-1,o=!1;return this.focusedOptionIndex()!==-1?(i=this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(l=>this.isOptionMatched(l)),i=i===-1?this.visibleOptions().slice(0,this.focusedOptionIndex()).findIndex(l=>this.isOptionMatched(l)):i+this.focusedOptionIndex()):i=this.visibleOptions().findIndex(l=>this.isOptionMatched(l)),i!==-1&&(o=!0),i===-1&&this.focusedOptionIndex()===-1&&(i=this.findFirstFocusedOptionIndex()),i!==-1&&this.changeFocusedOptionIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue=``,this.searchTimeout=null},500),o}hasFocusableElements(){return H1(this.overlayViewChild?.overlayViewChild?.nativeElement,`:not([data-p-hidden-focusable="true"])`).length>0}hasFilter(){return this._filterValue()&&this._filterValue().trim().length>0}get containerDataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.size()]:this.size()})}get labelDataP(){return this.cn({placeholder:this.label===this.placeholder,clearable:this.showClear,disabled:this.disabled,[this.size()]:this.size(),"has-chip":this.display===`chip`&&this.value&&this.value.length&&(this.maxSelectedLabels?this.value.length<=this.maxSelectedLabels:!0),empty:!this.placeholder&&!this.$filled})}get dropdownIconDataP(){return this.cn({[this.size()]:this.size()})}get overlayDataP(){return this.cn({[`overlay-`+this.appendTo]:`overlay-`+this.appendTo})}writeControlValue(e,n){this.value=e,n(e),this.cd.markForCheck()}getHeaderCheckboxPTOptions(e){return this.ptm(e,{context:{selected:this.allSelected()}})}getPTOptions(e,n,i,o){return this.ptm(o,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(i,n),disabled:this.isOptionDisabled(e)}})}static ɵfac=function(n){return new(n||t)(me(we),me(Jwe),me(eIe))};static ɵcmp=_a({type:t,selectors:[[`p-multiSelect`],[`p-multiselect`],[`p-multi-select`]],contentQueries:function(n,i,o){if(n&1&&Lh(o,nIe,5)(o,tIe,5)(o,ki,4)(o,Oi,4)(o,wi,4)(o,Mi,4)(o,Vi,4)(o,Ei,4)(o,Fi,4)(o,Li,4)(o,Bi,4)(o,Di,4)(o,Ai,4)(o,Pi,4)(o,zi,4)(o,Ni,4)(o,Ri,4)(o,Hi,4)(o,Ki,4)(o,rIe,4),n&2){let l;sb(l=ab())&&(i.footerFacet=l.first),sb(l=ab())&&(i.headerFacet=l.first),sb(l=ab())&&(i.itemTemplate=l.first),sb(l=ab())&&(i.groupTemplate=l.first),sb(l=ab())&&(i.loaderTemplate=l.first),sb(l=ab())&&(i.headerTemplate=l.first),sb(l=ab())&&(i.filterTemplate=l.first),sb(l=ab())&&(i.footerTemplate=l.first),sb(l=ab())&&(i.emptyFilterTemplate=l.first),sb(l=ab())&&(i.emptyTemplate=l.first),sb(l=ab())&&(i.selectedItemsTemplate=l.first),sb(l=ab())&&(i.loadingIconTemplate=l.first),sb(l=ab())&&(i.filterIconTemplate=l.first),sb(l=ab())&&(i.removeTokenIconTemplate=l.first),sb(l=ab())&&(i.chipIconTemplate=l.first),sb(l=ab())&&(i.clearIconTemplate=l.first),sb(l=ab())&&(i.dropdownIconTemplate=l.first),sb(l=ab())&&(i.itemCheckboxIconTemplate=l.first),sb(l=ab())&&(i.headerCheckboxIconTemplate=l.first),sb(l=ab())&&(i.templates=l)}},viewQuery:function(n,i){if(n&1&&KR($i,5)(Qi,5)(Gi,5)(qi,5)(ji,5)(Ui,5)(Wi,5)(Zi,5),n&2){let o;sb(o=ab())&&(i.overlayViewChild=o.first),sb(o=ab())&&(i.filterInputChild=o.first),sb(o=ab())&&(i.focusInputViewChild=o.first),sb(o=ab())&&(i.itemsViewChild=o.first),sb(o=ab())&&(i.scroller=o.first),sb(o=ab())&&(i.lastHiddenFocusableElementOnOverlay=o.first),sb(o=ab())&&(i.firstHiddenFocusableElementOnOverlay=o.first),sb(o=ab())&&(i.headerCheckboxViewChild=o.first)}},hostVars:6,hostBindings:function(n,i){n&1&&Mh(`click`,function(l){return i.onContainerClick(l)}),n&2&&(Nh(`id`,i.id)(`data-p`,i.containerDataP),C$(i.sx(`root`)),S$(i.cn(i.cx(`root`),i.styleClass)))},inputs:{id:`id`,ariaLabel:`ariaLabel`,styleClass:`styleClass`,panelStyle:`panelStyle`,panelStyleClass:`panelStyleClass`,inputId:`inputId`,readonly:[2,`readonly`,`readonly`,Uu],group:[2,`group`,`group`,Uu],filter:[2,`filter`,`filter`,Uu],filterPlaceHolder:`filterPlaceHolder`,filterLocale:`filterLocale`,overlayVisible:[2,`overlayVisible`,`overlayVisible`,Uu],tabindex:[2,`tabindex`,`tabindex`,MH],dataKey:`dataKey`,ariaLabelledBy:`ariaLabelledBy`,displaySelectedLabel:`displaySelectedLabel`,maxSelectedLabels:`maxSelectedLabels`,selectionLimit:[2,`selectionLimit`,`selectionLimit`,MH],selectedItemsLabel:`selectedItemsLabel`,showToggleAll:[2,`showToggleAll`,`showToggleAll`,Uu],emptyFilterMessage:`emptyFilterMessage`,emptyMessage:`emptyMessage`,resetFilterOnHide:[2,`resetFilterOnHide`,`resetFilterOnHide`,Uu],dropdownIcon:`dropdownIcon`,chipIcon:`chipIcon`,optionLabel:`optionLabel`,optionValue:`optionValue`,optionDisabled:`optionDisabled`,optionGroupLabel:`optionGroupLabel`,optionGroupChildren:`optionGroupChildren`,showHeader:[2,`showHeader`,`showHeader`,Uu],filterBy:`filterBy`,scrollHeight:`scrollHeight`,lazy:[2,`lazy`,`lazy`,Uu],virtualScroll:[2,`virtualScroll`,`virtualScroll`,Uu],loading:[2,`loading`,`loading`,Uu],virtualScrollItemSize:[2,`virtualScrollItemSize`,`virtualScrollItemSize`,MH],loadingIcon:`loadingIcon`,virtualScrollOptions:`virtualScrollOptions`,overlayOptions:`overlayOptions`,ariaFilterLabel:`ariaFilterLabel`,filterMatchMode:`filterMatchMode`,tooltip:`tooltip`,tooltipPosition:`tooltipPosition`,tooltipPositionStyle:`tooltipPositionStyle`,tooltipStyleClass:`tooltipStyleClass`,autofocusFilter:[2,`autofocusFilter`,`autofocusFilter`,Uu],display:`display`,autocomplete:`autocomplete`,showClear:[2,`showClear`,`showClear`,Uu],autofocus:[2,`autofocus`,`autofocus`,Uu],placeholder:`placeholder`,options:`options`,filterValue:`filterValue`,selectAll:`selectAll`,focusOnHover:[2,`focusOnHover`,`focusOnHover`,Uu],filterFields:`filterFields`,selectOnFocus:[2,`selectOnFocus`,`selectOnFocus`,Uu],autoOptionFocus:[2,`autoOptionFocus`,`autoOptionFocus`,Uu],highlightOnSelect:[2,`highlightOnSelect`,`highlightOnSelect`,Uu],size:[1,`size`],variant:[1,`variant`],fluid:[1,`fluid`],appendTo:[1,`appendTo`],motionOptions:[1,`motionOptions`]},outputs:{onChange:`onChange`,onFilter:`onFilter`,onFocus:`onFocus`,onBlur:`onBlur`,onClick:`onClick`,onClear:`onClear`,onPanelShow:`onPanelShow`,onPanelHide:`onPanelHide`,onLazyLoad:`onLazyLoad`,onRemove:`onRemove`,onSelectAllChange:`onSelectAllChange`},features:[W$([Mo,Fe,{provide:Rt,useExisting:t},{provide:R,useExisting:t}]),S5([w]),LR],ngContentSelectors:Yi,decls:16,vars:51,consts:[[`focusInput`,``],[`elseBlock`,``],[`overlay`,``],[`content`,``],[`token`,``],[`removeicon`,``],[`firstHiddenFocusableEl`,``],[`buildInItems`,``],[`lastHiddenFocusableEl`,``],[`builtInFilterElement`,``],[`headerCheckbox`,``],[`icon`,``],[`filterInput`,``],[`scroller`,``],[`loader`,``],[`items`,``],[1,`p-hidden-accessible`,3,`pBind`],[`role`,`combobox`,3,`focus`,`blur`,`keydown`,`pTooltip`,`pTooltipUnstyled`,`tooltipPosition`,`positionStyle`,`tooltipStyleClass`,`pAutoFocus`,`pBind`],[3,`mouseleave`,`pBind`,`pTooltip`,`pTooltipUnstyled`,`tooltipDisabled`,`tooltipPosition`,`positionStyle`,`tooltipStyleClass`],[3,`pBind`],[4,`ngIf`],[4,`ngIf`,`ngIfElse`],[3,`visibleChange`,`onBeforeEnter`,`onAfterLeave`,`onHide`,`hostAttrSelector`,`visible`,`options`,`target`,`appendTo`,`unstyled`,`pt`,`motionOptions`],[3,`pBind`,`class`],[3,`pBind`,`class`,4,`ngFor`,`ngForOf`],[3,`onRemove`,`pt`,`unstyled`,`label`,`removable`,`removeIcon`],[3,`class`,`pBind`,`click`,4,`ngIf`],[3,`click`,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`times`,3,`pBind`,`class`,`click`,4,`ngIf`],[3,`pBind`,`class`,`click`,4,`ngIf`],[`data-p-icon`,`times`,3,`click`,`pBind`],[4,`ngTemplateOutlet`],[3,`pBind`,`class`,4,`ngIf`],[3,`pBind`,`class`,`ngClass`,4,`ngIf`],[`data-p-icon`,`chevron-down`,3,`pBind`,`class`,4,`ngIf`],[3,`pBind`,`ngClass`],[`data-p-icon`,`chevron-down`,3,`pBind`],[3,`pBind`,`ngStyle`],[`role`,`presentation`,1,`p-hidden-accessible`,`p-hidden-focusable`,3,`focus`,`pBind`],[3,`items`,`style`,`itemSize`,`autoSize`,`tabindex`,`lazy`,`options`,`onLazyLoad`,4,`ngIf`],[3,`pt`,`ngModel`,`ariaLabel`,`binary`,`variant`,`disabled`,`unstyled`,`onChange`,4,`ngIf`],[3,`pt`,`class`,`unstyled`,4,`ngIf`],[3,`onChange`,`pt`,`ngModel`,`ariaLabel`,`binary`,`variant`,`disabled`,`unstyled`],[`data-p-icon`,`check`,3,`class`,`pBind`,4,`ngIf`],[`data-p-icon`,`check`,3,`pBind`],[3,`pt`,`unstyled`],[`pInputText`,``,`type`,`text`,`role`,`searchbox`,3,`input`,`keydown`,`click`,`blur`,`pt`,`variant`,`value`,`unstyled`],[`data-p-icon`,`search`,3,`pBind`,4,`ngIf`],[`class`,`p-multiselect-filter-icon`,3,`pBind`,4,`ngIf`],[`data-p-icon`,`search`,3,`pBind`],[1,`p-multiselect-filter-icon`,3,`pBind`],[3,`onLazyLoad`,`items`,`itemSize`,`autoSize`,`tabindex`,`lazy`,`options`],[`role`,`listbox`,`aria-multiselectable`,`true`,3,`pBind`],[`ngFor`,``,3,`ngForOf`],[`role`,`option`,3,`pBind`,`class`,`ngStyle`,4,`ngIf`],[`role`,`option`,3,`pBind`,`ngStyle`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`,4,`ngIf`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`pMultiSelectItem`,``,`pRipple`,``,3,`onClick`,`onMouseEnter`,`pBind`,`id`,`option`,`selected`,`label`,`disabled`,`template`,`itemCheckboxIconTemplate`,`itemSize`,`focused`,`ariaPosInset`,`ariaSetSize`,`variant`,`highlightOnSelect`,`pt`,`unstyled`]],template:function(n,i){if(n&1){let o=r$();Oh(Xi),uh(0,`div`,16)(1,`input`,17,0),Mh(`focus`,function(u){return i.onInputFocus(u)})(`blur`,function(u){return i.onInputBlur(u)})(`keydown`,function(u){return i.onKeyDown(u)}),eb()(),uh(3,`div`,18),Mh(`mouseleave`,function(){return i.labelContainerMouseLeave()}),uh(4,`div`,19),VR(5,fn,3,2,`ng-container`,20)(6,xn,3,6,`ng-container`,20),eb()(),VR(7,Tn,3,2,`ng-container`,20),uh(8,`div`,19),VR(9,Vn,3,2,`ng-container`,21)(10,Pn,2,2,`ng-template`,null,1,nH),eb(),uh(12,`p-overlay`,22,2),gk(`visibleChange`,function(u){return CD(o),U$(i.overlayVisible,u)||(i.overlayVisible=u),DD(u)}),Mh(`onBeforeEnter`,function(u){return i.onOverlayBeforeEnter(u)})(`onAfterLeave`,function(u){return i.onOverlayAfterLeave(u)})(`onHide`,function(u){return i.onOverlayHide(u)}),VR(14,To,13,24,`ng-template`,null,3,nH),eb()}if(n&2){let o=f$(11);jR(`pBind`,i.ptm(`hiddenInputContainer`)),Nh(`data-p-hidden-accessible`,!0),qj(),jR(`pTooltip`,i.tooltip)(`pTooltipUnstyled`,i.unstyled())(`tooltipPosition`,i.tooltipPosition)(`positionStyle`,i.tooltipPositionStyle)(`tooltipStyleClass`,i.tooltipStyleClass)(`pAutoFocus`,i.autofocus)(`pBind`,i.ptm(`hiddenInput`)),Nh(`aria-disabled`,i.$disabled())(`id`,i.inputId)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledBy)(`aria-haspopup`,`listbox`)(`aria-expanded`,i.overlayVisible??!1)(`aria-controls`,i.overlayVisible?i.id+`_list`:null)(`tabindex`,i.$disabled()?-1:i.tabindex)(`aria-activedescendant`,i.focused?i.focusedOptionId:void 0)(`value`,i.modelValue())(`name`,i.name())(`required`,i.required()?``:void 0)(`disabled`,i.$disabled()?``:void 0),qj(2),S$(i.cx(`labelContainer`)),jR(`pBind`,i.ptm(`labelContainer`))(`pTooltip`,i.tooltip)(`pTooltipUnstyled`,i.unstyled())(`tooltipDisabled`,i._disableTooltip)(`tooltipPosition`,i.tooltipPosition)(`positionStyle`,i.tooltipPositionStyle)(`tooltipStyleClass`,i.tooltipStyleClass),qj(),S$(i.cx(`label`)),jR(`pBind`,i.ptm(`label`)),Nh(`data-p`,i.labelDataP),qj(),jR(`ngIf`,!i.selectedItemsTemplate&&!i._selectedItemsTemplate),qj(),jR(`ngIf`,i.selectedItemsTemplate||i._selectedItemsTemplate),qj(),jR(`ngIf`,i.isVisibleClearIcon),qj(),S$(i.cx(`dropdown`)),jR(`pBind`,i.ptm(`dropdown`)),qj(),jR(`ngIf`,i.loading)(`ngIfElse`,o),qj(3),jR(`hostAttrSelector`,i.$attrSelector),pk(`visible`,i.overlayVisible),jR(`options`,i.overlayOptions)(`target`,`@parent`)(`appendTo`,i.$appendTo())(`unstyled`,i.unstyled())(`pt`,i.ptm(`pcOverlay`))(`motionOptions`,i.motionOptions())}},dependencies:[Qh,JH,aN,e4,n4,t4,Vo,ai$1,oIe,Xn$1,ui$1,Oe,Xt$1,ti$1,yi$1,ei$1,Qt$1,Zt$1,Un$1,zt,Ee,Sn$1,wn$1,Qt,kt$2,w],encapsulation:2})}return t})();export{Eo as t};