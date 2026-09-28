import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{$ as DR,$r as pwe,$t as OR,Ai as z5,Ar as k1,Bn as X0,Br as nb,Bt as M$,Cn as T$,Ct as HH,Di as xwe,Dt as J5,Gn as Yl,Gr as ok,Hn as Y,Ht as MR,I as $H,In as Vwe,It as LG,J as Be,Jr as p5,Kt as NR,Mi as zR,Nr as kh,Ot as K0,Pr as kt$1,Pt as L$,Qn as af,Qt as OG,Rr as me,Si as wU,Ti as xj,Tn as Te,U as Ah,Un as Y0,V as AR,Vt as M5,W as B,Wn as Y5,Wt as Mwe,Xr as pD,Xt as O5,Yn as _U,Yr as pA,Yt as O$,ai as re,bn as SD,bt as H1,cn as Pwe,dr as f$,ei as qH,en as Owe,gr as ga,gt as Fwe,hi as tb,hr as gD,ht as Fu,it as EH,ji as zH,jr as kR,kr as k,li as sh,ln as Q0,lr as ek,mn as Qk,nr as ch,oi as rk,or as dwe,ot as F$,pr as fwe,pt as Fh,qn as Z0,qr as p$,qt as Nh,rn as PG,sn as Pu,sr as eb,tn as P$,ui as sm,ut as FR,vn as Rh,vt as Gh,wi as xh,wn as T1,wt as Hi$1,xi as w1,xn as Sh,yt as H$,z as A$,zr as mwe,zt as Lwe}from"./main-BGSTO6NJ.js";import{_ as pt,a as R,b as yi$1,d as _t,g as kt$2,h as k$1,i as Oe,l as Yt$1,m as hn$1,s as Ue,y as w}from"./chunk-CGGHRCQE.js";import{c as Nn$1,d as Qt,f as Rn$1,g as U,l as Pn$1,m as Sn$1,s as Ie,w as wn$1}from"./chunk-Cwei2KlU.js";import{a as Zt$1,c as ti$1,i as Xt$1,l as ui$1,n as Ut$1,o as ai$1,s as ei$1,t as Qt$1}from"./chunk-PiAiIeE0.js";var kt=(()=>{class t extends _t{static ɵfac=(()=>{let e;return function(i){return(e||(e=ch(t)))(i||t)}})();static ɵcmp=ga({type:t,selectors:[[``,`data-p-icon`,`minus`]],features:[DR],decls:1,vars:0,consts:[[`d`,`M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z`,`fill`,`currentColor`]],template:function(n,i){n&1&&(SD(),NR(0,`path`,0))},encapsulation:2,changeDetection:1})}return t})();var Ot=`
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
`;var Gt=[`icon`];var qt=[`input`];var jt=(t,r,e)=>({checked:t,class:r,dataP:e});function Ut(t,r){if(t&1&&Ah(0,`span`,8),t&2){let e=Y5(3);p$(e.cx(`icon`)),kR(`ngClass`,e.checkboxIcon)(`pBind`,e.ptm(`icon`)),Sh(`data-p`,e.dataP)}}function Wt(t,r){if(t&1&&(SD(),Ah(0,`svg`,9)),t&2){let e=Y5(3);p$(e.cx(`icon`)),kR(`pBind`,e.ptm(`icon`)),Sh(`data-p`,e.dataP)}}function Zt(t,r){if(t&1&&(X0(0),AR(1,Ut,1,5,`span`,6)(2,Wt,1,4,`svg`,7),Z0()),t&2){let e=Y5(2);xj(),kR(`ngIf`,e.checkboxIcon),xj(),kR(`ngIf`,!e.checkboxIcon)}}function Xt(t,r){if(t&1&&(SD(),Ah(0,`svg`,10)),t&2){let e=Y5(2);p$(e.cx(`icon`)),kR(`pBind`,e.ptm(`icon`)),Sh(`data-p`,e.dataP)}}function Yt(t,r){if(t&1&&(X0(0),AR(1,Zt,3,2,`ng-container`,3)(2,Xt,1,4,`svg`,5),Z0()),t&2){let e=Y5();xj(),kR(`ngIf`,e.checked),xj(),kR(`ngIf`,e._indeterminate())}}function Jt(t,r){}function ei(t,r){t&1&&AR(0,Jt,0,0,`ng-template`)}var ti=`
    ${Ot}

    /* For Optimus */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`;var ii={root:({instance:t})=>[`p-checkbox p-component`,{"p-checkbox-checked p-highlight":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()===`filled`,"p-checkbox-sm p-inputfield-sm":t.size()===`small`,"p-checkbox-lg p-inputfield-lg":t.size()===`large`}],box:`p-checkbox-box`,input:`p-checkbox-input`,icon:`p-checkbox-icon`};var wt=(()=>{class t extends H1{name=`checkbox`;style=ti;classes=ii;static ɵfac=(()=>{let e;return function(i){return(e||(e=ch(t)))(i||t)}})();static ɵprov=Y({token:t,factory:t.ɵfac})}return t})();var Mt=new B(`CHECKBOX_INSTANCE`);var ni={provide:Ie,useExisting:af(()=>Ee),multi:!0};var Ee=(()=>{class t extends Ut$1{componentName=`Checkbox`;hostName=``;value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=Fh();size=Fh();onChange=new kt$1;onFocus=new kt$1;onBlur=new kt$1;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:OG(this.value,this.modelValue())}_indeterminate=re(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=k(wt);bindDirectiveInstance=k(w,{self:!0});$pcCheckbox=k(Mt,{optional:!0,skipSelf:!0})??void 0;$variant=Pu(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case`icon`:this._checkboxIconTemplate=e.template;break;case`checkboxicon`:this._checkboxIconTemplate=e.template;break}})}onChanges(e){e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}updateModel(e){let n,i=this.injector.get(U,null,{optional:!0,self:!0}),o=i&&!this.formControl?i.value:this.modelValue();this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=o.filter(l=>!sm(l,this.value)):n=o?[...o,this.value]:[this.value],this.onModelChange(n),this.writeModelValue(n),this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,n){n(e),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()})}static ɵfac=(()=>{let e;return function(i){return(e||(e=ch(t)))(i||t)}})();static ɵcmp=ga({type:t,selectors:[[`p-checkbox`],[`p-checkBox`],[`p-check-box`]],contentQueries:function(n,i,o){if(n&1&&xh(o,Gt,4)(o,Lwe,4),n&2){let l;eb(l=tb())&&(i.checkboxIconTemplate=l.first),eb(l=tb())&&(i.templates=l)}},viewQuery:function(n,i){if(n&1&&FR(qt,5),n&2){let o;eb(o=tb())&&(i.inputViewChild=o.first)}},hostVars:6,hostBindings:function(n,i){n&2&&(Sh(`data-p-highlight`,i.checked)(`data-p-checked`,i.checked)(`data-p-disabled`,i.$disabled())(`data-p`,i.dataP),p$(i.cn(i.cx(`root`),i.styleClass)))},inputs:{hostName:`hostName`,value:`value`,binary:[2,`binary`,`binary`,Fu],ariaLabelledBy:`ariaLabelledBy`,ariaLabel:`ariaLabel`,tabindex:[2,`tabindex`,`tabindex`,EH],inputId:`inputId`,inputStyle:`inputStyle`,styleClass:`styleClass`,inputClass:`inputClass`,indeterminate:[2,`indeterminate`,`indeterminate`,Fu],formControl:`formControl`,checkboxIcon:`checkboxIcon`,readonly:[2,`readonly`,`readonly`,Fu],autofocus:[2,`autofocus`,`autofocus`,Fu],trueValue:`trueValue`,falseValue:`falseValue`,variant:[1,`variant`],size:[1,`size`]},outputs:{onChange:`onChange`,onFocus:`onFocus`,onBlur:`onBlur`},features:[M$([ni,wt,{provide:Mt,useExisting:t},{provide:R,useExisting:t}]),p5([w]),DR],decls:5,vars:26,consts:[[`input`,``],[`type`,`checkbox`,3,`focus`,`blur`,`change`,`checked`,`pBind`],[3,`pBind`],[4,`ngIf`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`minus`,3,`class`,`pBind`,4,`ngIf`],[3,`class`,`ngClass`,`pBind`,4,`ngIf`],[`data-p-icon`,`check`,3,`class`,`pBind`,4,`ngIf`],[3,`ngClass`,`pBind`],[`data-p-icon`,`check`,3,`pBind`],[`data-p-icon`,`minus`,3,`pBind`]],template:function(n,i){n&1&&(sh(0,`input`,1,0),Rh(`focus`,function(l){return i.onInputFocus(l)})(`blur`,function(l){return i.onInputBlur(l)})(`change`,function(l){return i.handleChange(l)}),K0(),sh(2,`div`,2),AR(3,Yt,3,2,`ng-container`,3)(4,ei,1,0,null,4),K0()),n&2&&(f$(i.inputStyle),p$(i.cn(i.cx(`input`),i.inputClass)),kR(`checked`,i.checked)(`pBind`,i.ptm(`input`)),Sh(`id`,i.inputId)(`value`,i.value)(`name`,i.name())(`tabindex`,i.tabindex)(`required`,i.required()?``:void 0)(`readonly`,i.readonly?``:void 0)(`disabled`,i.$disabled()?``:void 0)(`aria-labelledby`,i.ariaLabelledBy)(`aria-label`,i.ariaLabel),xj(2),p$(i.cx(`box`)),kR(`pBind`,i.ptm(`box`)),Sh(`data-p`,i.dataP),xj(),kR(`ngIf`,!i.checkboxIconTemplate&&!i._checkboxIconTemplate),xj(),kR(`ngTemplateOutlet`,i.checkboxIconTemplate||i._checkboxIconTemplate)(`ngTemplateOutletContext`,F$(22,jt,i.checked,i.cx(`icon`),i.dataP)))},dependencies:[Gh,$H,HH,qH,Fwe,Xt$1,kt,kt$2,w],encapsulation:2})}return t})();var Bt=(()=>{class t extends _t{pathId;onInit(){this.pathId=`url(#`+pt()+`)`}static ɵfac=(()=>{let e;return function(i){return(e||(e=ch(t)))(i||t)}})();static ɵcmp=ga({type:t,selectors:[[``,`data-p-icon`,`times-circle`]],features:[DR],decls:5,vars:2,consts:[[`fill-rule`,`evenodd`,`clip-rule`,`evenodd`,`d`,`M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z`,`fill`,`currentColor`],[3,`id`],[`width`,`14`,`height`,`14`,`fill`,`white`]],template:function(n,i){n&1&&(SD(),Y0(0,`g`),NR(1,`path`,0),Q0(),Y0(2,`defs`)(3,`clipPath`,1),NR(4,`rect`,2),Q0()()),n&2&&(Sh(`clip-path`,i.pathId),xj(3),OR(`id`,i.pathId))},encapsulation:2,changeDetection:1})}return t})();var Dt=`
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
`;var oi=[`removeicon`];var li=[`*`];function ai(t,r){if(t&1){let e=z5();sh(0,`img`,4),Rh(`error`,function(i){pD(e);return gD(Y5().imageError(i))}),K0()}if(t&2){let e=Y5();p$(e.cx(`image`)),kR(`pBind`,e.ptm(`image`))(`src`,e.image,pA)(`alt`,e.alt)}}function ri(t,r){if(t&1&&Ah(0,`span`,6),t&2){let e=Y5(2);p$(e.icon),kR(`pBind`,e.ptm(`icon`))(`ngClass`,e.cx(`icon`))}}function si(t,r){if(t&1&&AR(0,ri,1,4,`span`,5),t&2)kR(`ngIf`,Y5().icon)}function ci(t,r){if(t&1&&(sh(0,`div`,7),T$(1),K0()),t&2){let e=Y5();p$(e.cx(`label`)),kR(`pBind`,e.ptm(`label`)),xj(),ek(e.label)}}function pi(t,r){if(t&1){let e=z5();sh(0,`span`,11),Rh(`click`,function(i){pD(e);return gD(Y5(3).close(i))})(`keydown`,function(i){pD(e);return gD(Y5(3).onKeydown(i))}),K0()}if(t&2){let e=Y5(3);p$(e.removeIcon),kR(`pBind`,e.ptm(`removeIcon`))(`ngClass`,e.cx(`removeIcon`)),Sh(`tabindex`,e.disabled?-1:0)(`aria-label`,e.removeAriaLabel)}}function di(t,r){if(t&1){let e=z5();SD(),sh(0,`svg`,12),Rh(`click`,function(i){pD(e);return gD(Y5(3).close(i))})(`keydown`,function(i){pD(e);return gD(Y5(3).onKeydown(i))}),K0()}if(t&2){let e=Y5(3);p$(e.cx(`removeIcon`)),kR(`pBind`,e.ptm(`removeIcon`)),Sh(`tabindex`,e.disabled?-1:0)(`aria-label`,e.removeAriaLabel)}}function ui(t,r){if(t&1&&(X0(0),AR(1,pi,1,6,`span`,9)(2,di,1,5,`svg`,10),Z0()),t&2){let e=Y5(2);xj(),kR(`ngIf`,e.removeIcon),xj(),kR(`ngIf`,!e.removeIcon)}}function mi(t,r){}function hi(t,r){t&1&&AR(0,mi,0,0,`ng-template`)}function _i(t,r){if(t&1){let e=z5();sh(0,`span`,13),Rh(`click`,function(i){pD(e);return gD(Y5(2).close(i))})(`keydown`,function(i){pD(e);return gD(Y5(2).onKeydown(i))}),AR(1,hi,1,0,null,14),K0()}if(t&2){let e=Y5(2);p$(e.cx(`removeIcon`)),kR(`pBind`,e.ptm(`removeIcon`)),Sh(`tabindex`,e.disabled?-1:0)(`aria-label`,e.removeAriaLabel),xj(),kR(`ngTemplateOutlet`,e.removeIconTemplate||e._removeIconTemplate)}}function fi(t,r){if(t&1&&(X0(0),AR(1,ui,3,2,`ng-container`,3)(2,_i,2,6,`span`,8),Z0()),t&2){let e=Y5();xj(),kR(`ngIf`,!e.removeIconTemplate&&!e._removeIconTemplate),xj(),kR(`ngIf`,e.removeIconTemplate||e._removeIconTemplate)}}var gi={root:({instance:t})=>({display:t.visible?null:`none`})};var bi={root:({instance:t})=>[`p-chip p-component`,{"p-disabled":t.disabled}],image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`};var At=(()=>{class t extends H1{name=`chip`;style=Dt;classes=bi;inlineStyles=gi;static ɵfac=(()=>{let e;return function(i){return(e||(e=ch(t)))(i||t)}})();static ɵprov=Y({token:t,factory:t.ɵfac})}return t})();var Pt=new B(`CHIP_INSTANCE`);var zt=(()=>{class t extends k$1{componentName=`Chip`;$pcChip=k(Pt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label;icon;image;alt;styleClass;disabled=!1;removable=!1;removeIcon;onRemove=new kt$1;onImageError=new kt$1;visible=!0;get removeAriaLabel(){return this.config.getTranslation(Vwe.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e==`object`&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}_chipProps;_componentStyle=k(At);removeIconTemplate;templates;_removeIconTemplate;onAfterContentInit(){this.templates.forEach(e=>{e.getType()===`removeicon`?this._removeIconTemplate=e.template:this._removeIconTemplate=e.template})}onChanges(e){if(e.chipProps&&e.chipProps.currentValue){let{currentValue:n}=e.chipProps;n.label!==void 0&&(this.label=n.label),n.icon!==void 0&&(this.icon=n.icon),n.image!==void 0&&(this.image=n.image),n.alt!==void 0&&(this.alt=n.alt),n.styleClass!==void 0&&(this.styleClass=n.styleClass),n.removable!==void 0&&(this.removable=n.removable),n.removeIcon!==void 0&&(this.removeIcon=n.removeIcon)}}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key===`Enter`||e.key===`Backspace`)&&this.close(e)}imageError(e){this.onImageError.emit(e)}get dataP(){return this.cn({removable:this.removable})}static ɵfac=(()=>{let e;return function(i){return(e||(e=ch(t)))(i||t)}})();static ɵcmp=ga({type:t,selectors:[[`p-chip`]],contentQueries:function(n,i,o){if(n&1&&xh(o,oi,4)(o,Lwe,4),n&2){let l;eb(l=tb())&&(i.removeIconTemplate=l.first),eb(l=tb())&&(i.templates=l)}},hostVars:6,hostBindings:function(n,i){n&2&&(Sh(`aria-label`,i.label)(`data-p`,i.dataP),f$(i.sx(`root`)),p$(i.cn(i.cx(`root`),i.styleClass)))},inputs:{label:`label`,icon:`icon`,image:`image`,alt:`alt`,styleClass:`styleClass`,disabled:[2,`disabled`,`disabled`,Fu],removable:[2,`removable`,`removable`,Fu],removeIcon:`removeIcon`,chipProps:`chipProps`},outputs:{onRemove:`onRemove`,onImageError:`onImageError`},features:[M$([At,{provide:Pt,useExisting:t},{provide:R,useExisting:t}]),p5([w]),DR],ngContentSelectors:li,decls:6,vars:4,consts:[[`iconTemplate`,``],[3,`pBind`,`class`,`src`,`alt`,`error`,4,`ngIf`,`ngIfElse`],[3,`pBind`,`class`,4,`ngIf`],[4,`ngIf`],[3,`error`,`pBind`,`src`,`alt`],[3,`pBind`,`class`,`ngClass`,4,`ngIf`],[3,`pBind`,`ngClass`],[3,`pBind`],[`role`,`button`,3,`pBind`,`class`,`click`,`keydown`,4,`ngIf`],[`role`,`button`,3,`pBind`,`class`,`ngClass`,`click`,`keydown`,4,`ngIf`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`pBind`,`class`,`click`,`keydown`,4,`ngIf`],[`role`,`button`,3,`click`,`keydown`,`pBind`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`click`,`keydown`,`pBind`],[`role`,`button`,3,`click`,`keydown`,`pBind`],[4,`ngTemplateOutlet`]],template:function(n,i){if(n&1&&(kh(),Nh(0),AR(1,ai,1,5,`img`,1)(2,si,1,1,`ng-template`,null,0,H$)(4,ci,2,4,`div`,2)(5,fi,3,2,`ng-container`,3)),n&2){let o=J5(3);xj(),kR(`ngIf`,i.image)(`ngIfElse`,o),xj(3),kR(`ngIf`,i.label),xj(),kR(`ngIf`,i.removable)}},dependencies:[Gh,$H,HH,qH,Bt,Fwe,w],encapsulation:2})}return t})();var Nt=`
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
`;var Ht=t=>({$implicit:t});var xi=(t,r)=>({checked:t,class:r});function yi(t,r){}function vi(t,r){t&1&&AR(0,yi,0,0,`ng-template`)}function Ci(t,r){if(t&1&&AR(0,vi,1,0,null,3),t&2){let e=r.class,n=Y5(2);kR(`ngTemplateOutlet`,n.itemCheckboxIconTemplate)(`ngTemplateOutletContext`,L$(2,xi,n.selected,e))}}function Ii(t,r){t&1&&(X0(0),AR(1,Ci,1,5,`ng-template`,null,0,H$),Z0())}function Ti(t,r){if(t&1&&(sh(0,`span`),T$(1),K0()),t&2){let e=Y5();xj(),ek(e.label??`empty`)}}function Si(t,r){t&1&&MR(0)}var ki=[`item`];var Oi=[`group`];var wi=[`loader`];var Mi=[`header`];var Vi=[`filter`];var Ei=[`footer`];var Fi=[`emptyfilter`];var Li=[`empty`];var Bi=[`selecteditems`];var Di=[`loadingicon`];var Ai=[`filtericon`];var Pi=[`removetokenicon`];var zi=[`chipicon`];var Ni=[`clearicon`];var Ri=[`dropdownicon`];var Hi=[`itemcheckboxicon`];var Ki=[`headercheckboxicon`];var $i=[`overlay`];var Qi=[`filterInput`];var Gi=[`focusInput`];var qi=[`items`];var ji=[`scroller`];var Ui=[`lastHiddenFocusableEl`];var Wi=[`firstHiddenFocusableEl`];var Zi=[`headerCheckbox`];var Xi=[[[`p-header`]],[[`p-footer`]]];var Yi=[`p-header`,`p-footer`];var Ji=()=>({class:`p-multiselect-chip-icon`});var en=(t,r)=>({$implicit:t,removeChip:r});var tn=t=>({dataP:t});var Kt=t=>({options:t});var nn=(t,r,e)=>({checked:t,partialSelected:r,class:e});var Le=t=>({height:t});var $t=(t,r)=>({$implicit:t,options:r});var on=()=>({});function ln(t,r){if(t&1&&(X0(0),T$(1),Z0()),t&2){let e=Y5(2);xj(),ek(e.label()||`empty`)}}function an(t,r){if(t&1&&T$(0),t&2)nb(` `,Y5(3).getSelectedItemsLabel(),` `)}function rn(t,r){t&1&&MR(0)}function sn(t,r){if(t&1){let e=z5();sh(0,`span`,27),Rh(`click`,function(i){pD(e);let o=Y5(4).$implicit;return gD(Y5(4).removeOption(o,i))}),AR(1,rn,1,0,`ng-container`,28),K0()}if(t&2){let e=Y5(8);p$(e.cx(`chipIcon`)),kR(`pBind`,e.ptm(`chipIcon`)),Sh(`aria-hidden`,!0),xj(),kR(`ngTemplateOutlet`,e.chipIconTemplate||e._chipIconTemplate||e.removeTokenIconTemplate||e._removeTokenIconTemplate)(`ngTemplateOutletContext`,O$(6,Ji))}}function cn(t,r){if(t&1&&(X0(0),AR(1,sn,2,7,`span`,26),Z0()),t&2){let e=Y5(7);xj(),kR(`ngIf`,e.chipIconTemplate||e._chipIconTemplate||e.removeTokenIconTemplate||e._removeTokenIconTemplate)}}function pn(t,r){if(t&1&&AR(0,cn,2,1,`ng-container`,20),t&2){let e=Y5(6);kR(`ngIf`,!e.$disabled()&&!e.readonly)}}function dn(t,r){t&1&&(X0(0),AR(1,pn,1,1,`ng-template`,null,5,H$),Z0())}function un(t,r){if(t&1){let e=z5();sh(0,`div`,19,4)(2,`p-chip`,25),Rh(`onRemove`,function(i){let o=pD(e).$implicit;return gD(Y5(4).removeOption(o,i))}),AR(3,dn,3,0,`ng-container`,20),K0()()}if(t&2){let e=r.$implicit,n=Y5(4);p$(n.cx(`chipItem`)),kR(`pBind`,n.ptm(`chipItem`)),xj(2),p$(n.cx(`pcChip`)),kR(`pt`,n.ptm(`pcChip`))(`unstyled`,n.unstyled())(`label`,n.getLabelByValue(e))(`removable`,!n.$disabled()&&!n.readonly)(`removeIcon`,n.chipIcon),xj(),kR(`ngIf`,n.chipIconTemplate||n._chipIconTemplate||n.removeTokenIconTemplate||n._removeTokenIconTemplate)}}function mn(t,r){if(t&1&&AR(0,un,4,11,`div`,24),t&2)kR(`ngForOf`,Y5(3).chipSelectedItems())}function hn(t,r){if(t&1&&(X0(0),T$(1),Z0()),t&2){let e=Y5(3);xj(),ek(e.placeholder()||`empty`)}}function _n(t,r){if(t&1&&(X0(0),M5(1,an,1,1)(2,mn,1,1,`div`,23),AR(3,hn,2,1,`ng-container`,20),Z0()),t&2){let e=Y5(2);xj(),O5(e.chipSelectedItems()&&e.chipSelectedItems().length===e.maxSelectedLabels?1:2),xj(2),kR(`ngIf`,!e.modelValue()||e.modelValue().length===0)}}function fn(t,r){if(t&1&&(X0(0),AR(1,ln,2,1,`ng-container`,20)(2,_n,4,2,`ng-container`,20),Z0()),t&2){let e=Y5();xj(),kR(`ngIf`,e.display===`comma`),xj(),kR(`ngIf`,e.display===`chip`)}}function gn(t,r){t&1&&MR(0)}function bn(t,r){if(t&1&&(X0(0),T$(1),Z0()),t&2){let e=Y5(2);xj(),ek(e.placeholder()||`empty`)}}function xn(t,r){if(t&1&&(X0(0),AR(1,gn,1,0,`ng-container`,28)(2,bn,2,1,`ng-container`,20),Z0()),t&2){let e=Y5();xj(),kR(`ngTemplateOutlet`,e.selectedItemsTemplate||e._selectedItemsTemplate)(`ngTemplateOutletContext`,L$(3,en,e.selectedOptions,e.removeOption.bind(e))),xj(),kR(`ngIf`,!e.modelValue()||e.modelValue().length===0)}}function yn(t,r){if(t&1){let e=z5();SD(),sh(0,`svg`,31),Rh(`click`,function(i){pD(e);return gD(Y5(2).clear(i))}),K0()}if(t&2){let e=Y5(2);p$(e.cx(`clearIcon`)),kR(`pBind`,e.ptm(`clearIcon`)),Sh(`aria-hidden`,!0)}}function vn(t,r){}function Cn(t,r){t&1&&AR(0,vn,0,0,`ng-template`)}function In(t,r){if(t&1){let e=z5();sh(0,`span`,27),Rh(`click`,function(i){pD(e);return gD(Y5(2).clear(i))}),AR(1,Cn,1,0,null,32),K0()}if(t&2){let e=Y5(2);p$(e.cx(`clearIcon`)),kR(`pBind`,e.ptm(`clearIcon`)),Sh(`aria-hidden`,!0),xj(),kR(`ngTemplateOutlet`,e.clearIconTemplate||e._clearIconTemplate)}}function Tn(t,r){if(t&1&&(X0(0),AR(1,yn,1,4,`svg`,29)(2,In,2,5,`span`,30),Z0()),t&2){let e=Y5();xj(),kR(`ngIf`,!e.clearIconTemplate&&!e._clearIconTemplate),xj(),kR(`ngIf`,e.clearIconTemplate||e._clearIconTemplate)}}function Sn(t,r){t&1&&MR(0)}function kn(t,r){if(t&1&&(X0(0),AR(1,Sn,1,0,`ng-container`,32),Z0()),t&2){let e=Y5(2);xj(),kR(`ngTemplateOutlet`,e.loadingIconTemplate||e._loadingIconTemplate)}}function On(t,r){if(t&1&&Ah(0,`span`,19),t&2){let e=Y5(3);p$(e.cn(e.cx(`loadingIcon`),`pi-spin `+e.loadingIcon)),kR(`pBind`,e.ptm(`loadingIcon`)),Sh(`aria-hidden`,!0)}}function wn(t,r){if(t&1&&Ah(0,`span`,19),t&2){let e=Y5(3);p$(e.cn(e.cx(`loadingIcon`),`pi pi-spinner pi-spin`)),kR(`pBind`,e.ptm(`loadingIcon`)),Sh(`aria-hidden`,!0)}}function Mn(t,r){if(t&1&&(X0(0),AR(1,On,1,4,`span`,33)(2,wn,1,4,`span`,33),Z0()),t&2){let e=Y5(2);xj(),kR(`ngIf`,e.loadingIcon),xj(),kR(`ngIf`,!e.loadingIcon)}}function Vn(t,r){if(t&1&&(X0(0),AR(1,kn,2,1,`ng-container`,20)(2,Mn,3,2,`ng-container`,20),Z0()),t&2){let e=Y5();xj(),kR(`ngIf`,e.loadingIconTemplate||e._loadingIconTemplate),xj(),kR(`ngIf`,!e.loadingIconTemplate&&!e._loadingIconTemplate)}}function En(t,r){if(t&1&&Ah(0,`span`,36),t&2){let e=Y5(3);p$(e.cx(`dropdownIcon`)),kR(`pBind`,e.ptm(`dropdownIcon`))(`ngClass`,e.dropdownIcon),Sh(`aria-hidden`,!0)(`data-p`,e.dropdownIconDataP)}}function Fn(t,r){if(t&1&&(SD(),Ah(0,`svg`,37)),t&2){let e=Y5(3);p$(e.cx(`dropdownIcon`)),kR(`pBind`,e.ptm(`dropdownIcon`)),Sh(`aria-hidden`,!0)(`data-p`,e.dropdownIconDataP)}}function Ln(t,r){if(t&1&&(X0(0),AR(1,En,1,6,`span`,34)(2,Fn,1,5,`svg`,35),Z0()),t&2){let e=Y5(2);xj(),kR(`ngIf`,e.dropdownIcon),xj(),kR(`ngIf`,!e.dropdownIcon)}}function Bn(t,r){}function Dn(t,r){t&1&&AR(0,Bn,0,0,`ng-template`)}function An(t,r){if(t&1&&(sh(0,`span`,19),AR(1,Dn,1,0,null,28),K0()),t&2){let e=Y5(2);p$(e.cx(`dropdownIcon`)),kR(`pBind`,e.ptm(`dropdownIcon`)),Sh(`aria-hidden`,!0),xj(),kR(`ngTemplateOutlet`,e.dropdownIconTemplate||e._dropdownIconTemplate)(`ngTemplateOutletContext`,P$(6,tn,e.dropdownIconDataP))}}function Pn(t,r){if(t&1&&AR(0,Ln,3,2,`ng-container`,20)(1,An,2,8,`span`,33),t&2){let e=Y5();kR(`ngIf`,!e.dropdownIconTemplate&&!e._dropdownIconTemplate),xj(),kR(`ngIf`,e.dropdownIconTemplate||e._dropdownIconTemplate)}}function zn(t,r){t&1&&MR(0)}function Nn(t,r){t&1&&MR(0)}function Rn(t,r){if(t&1&&(X0(0),AR(1,Nn,1,0,`ng-container`,28),Z0()),t&2){let e=Y5(3);xj(),kR(`ngTemplateOutlet`,e.filterTemplate||e._filterTemplate)(`ngTemplateOutletContext`,P$(2,Kt,e.filterOptions))}}function Hn(t,r){if(t&1&&(SD(),Ah(0,`svg`,45)),t&2){let e=Y5().class,n=Y5(5);p$(e),kR(`pBind`,n.getHeaderCheckboxPTOptions(`pcHeaderCheckbox.icon`))}}function Kn(t,r){}function $n(t,r){t&1&&AR(0,Kn,0,0,`ng-template`)}function Qn(t,r){if(t&1&&AR(0,Hn,1,3,`svg`,44)(1,$n,1,0,null,28),t&2){let e=r.class,n=Y5(5);kR(`ngIf`,!n.headerCheckboxIconTemplate&&!n._headerCheckboxIconTemplate&&n.allSelected()),xj(),kR(`ngTemplateOutlet`,n.headerCheckboxIconTemplate||n._headerCheckboxIconTemplate)(`ngTemplateOutletContext`,F$(3,nn,n.allSelected(),n.partialSelected(),e))}}function Gn(t,r){if(t&1){let e=z5();sh(0,`p-checkbox`,43,10),Rh(`onChange`,function(i){pD(e);return gD(Y5(4).onToggleAll(i))}),AR(2,Qn,2,7,`ng-template`,null,11,H$),K0(),_U()}if(t&2){let e=Y5(4);kR(`pt`,e.getHeaderCheckboxPTOptions(`pcHeaderCheckbox`))(`ngModel`,e.allSelected())(`ariaLabel`,e.toggleAllAriaLabel)(`binary`,!0)(`variant`,e.$variant())(`disabled`,e.$disabled())(`unstyled`,e.unstyled()),wU()}}function qn(t,r){if(t&1&&(SD(),Ah(0,`svg`,50)),t&2)kR(`pBind`,Y5(5).ptm(`filterIcon`))}function jn(t,r){}function Un(t,r){t&1&&AR(0,jn,0,0,`ng-template`)}function Wn(t,r){if(t&1&&(sh(0,`span`,51),AR(1,Un,1,0,null,32),K0()),t&2){let e=Y5(5);kR(`pBind`,e.ptm(`filterIcon`)),xj(),kR(`ngTemplateOutlet`,e.filterIconTemplate||e._filterIconTemplate)}}function Zn(t,r){if(t&1){let e=z5();sh(0,`p-iconfield`,46)(1,`input`,47,12),Rh(`input`,function(i){pD(e);return gD(Y5(4).onFilterInputChange(i))})(`keydown`,function(i){pD(e);return gD(Y5(4).onFilterKeyDown(i))})(`click`,function(i){pD(e);return gD(Y5(4).onInputClick(i))})(`blur`,function(i){pD(e);return gD(Y5(4).onFilterBlur(i))}),K0(),sh(3,`p-inputicon`,46),AR(4,qn,1,1,`svg`,48)(5,Wn,2,2,`span`,49),K0()()}if(t&2){let e=Y5(4);p$(e.cx(`pcFilterContainer`)),kR(`pt`,e.ptm(`pcFilterContainer`))(`unstyled`,e.unstyled()),xj(),p$(e.cx(`pcFilter`)),kR(`pt`,e.ptm(`pcFilter`))(`variant`,e.$variant())(`value`,e._filterValue()||``)(`unstyled`,e.unstyled()),Sh(`autocomplete`,e.autocomplete)(`aria-owns`,e.id+`_list`)(`aria-activedescendant`,e.focusedOptionId)(`disabled`,e.$disabled()?``:void 0)(`placeholder`,e.filterPlaceHolder)(`aria-label`,e.ariaFilterLabel),xj(2),kR(`pt`,e.ptm(`pcFilterIconContainer`))(`unstyled`,e.unstyled()),xj(),kR(`ngIf`,!e.filterIconTemplate&&!e._filterIconTemplate),xj(),kR(`ngIf`,e.filterIconTemplate||e._filterIconTemplate)}}function Xn(t,r){if(t&1&&AR(0,Gn,4,7,`p-checkbox`,41)(1,Zn,6,20,`p-iconfield`,42),t&2){let e=Y5(3);kR(`ngIf`,e.showToggleAll&&!e.selectionLimit),xj(),kR(`ngIf`,e.filter)}}function Yn(t,r){if(t&1&&(sh(0,`div`,19),Nh(1),AR(2,Rn,2,4,`ng-container`,21)(3,Xn,2,2,`ng-template`,null,9,H$),K0()),t&2){let e=J5(4),n=Y5(2);p$(n.cx(`header`)),kR(`pBind`,n.ptm(`header`)),xj(2),kR(`ngIf`,n.filterTemplate||n._filterTemplate)(`ngIfElse`,e)}}function Jn(t,r){t&1&&MR(0)}function eo(t,r){if(t&1&&AR(0,Jn,1,0,`ng-container`,28),t&2){let e=r.$implicit,n=r.options;Y5(2);kR(`ngTemplateOutlet`,J5(9))(`ngTemplateOutletContext`,L$(2,$t,e,n))}}function to(t,r){t&1&&MR(0)}function io(t,r){if(t&1&&AR(0,to,1,0,`ng-container`,28),t&2){let e=r.options,n=Y5(4);kR(`ngTemplateOutlet`,n.loaderTemplate||n._loaderTemplate)(`ngTemplateOutletContext`,P$(2,Kt,e))}}function no(t,r){t&1&&(X0(0),AR(1,io,1,4,`ng-template`,null,14,H$),Z0())}function oo(t,r){if(t&1){let e=z5();sh(0,`p-scroller`,52,13),Rh(`onLazyLoad`,function(i){pD(e);return gD(Y5(2).onLazyLoad.emit(i))}),AR(2,eo,1,5,`ng-template`,null,3,H$)(4,no,3,0,`ng-container`,20),K0()}if(t&2){let e=Y5(2);f$(P$(9,Le,e.scrollHeight)),kR(`items`,e.visibleOptions())(`itemSize`,e.virtualScrollItemSize)(`autoSize`,!0)(`tabindex`,-1)(`lazy`,e.lazy)(`options`,e.virtualScrollOptions),xj(4),kR(`ngIf`,e.loaderTemplate||e._loaderTemplate)}}function lo(t,r){t&1&&MR(0)}function ao(t,r){if(t&1&&(X0(0),AR(1,lo,1,0,`ng-container`,28),Z0()),t&2){Y5();let e=J5(9),n=Y5();xj(),kR(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,L$(3,$t,n.visibleOptions(),O$(2,on)))}}function ro(t,r){if(t&1&&(sh(0,`span`),T$(1),K0()),t&2){let e=Y5(2).$implicit,n=Y5(3);xj(),ek(n.getOptionGroupLabel(e.optionGroup))}}function so(t,r){if(t&1&&MR(0,58),t&2){let e=Y5(2).$implicit;kR(`ngTemplateOutlet`,Y5(3).groupTemplate)(`ngTemplateOutletContext`,P$(2,Ht,e.optionGroup))}}function co(t,r){if(t&1&&(X0(0),sh(1,`li`,56),AR(2,ro,2,1,`span`,20)(3,so,1,4,`ng-container`,57),K0(),Z0()),t&2){let e=Y5(),n=e.$implicit,i=e.index,o=Y5().options,l=Y5(2);xj(),p$(l.cx(`optionGroup`)),kR(`pBind`,l.ptm(`optionGroup`))(`ngStyle`,P$(7,Le,o.itemSize+`px`)),Sh(`id`,l.id+`_`+l.getOptionIndex(i,o)),xj(),kR(`ngIf`,!l.groupTemplate&&n.optionGroup),xj(),kR(`ngIf`,n.optionGroup&&l.groupTemplate)}}function po(t,r){if(t&1){let e=z5();X0(0),sh(1,`li`,59),Rh(`onClick`,function(i){pD(e);let o=Y5().index,l=Y5().options,u=Y5(2);return gD(u.onOptionSelect(i,!1,u.getOptionIndex(o,l)))})(`onMouseEnter`,function(i){pD(e);let o=Y5().index,l=Y5().options,u=Y5(2);return gD(u.onOptionMouseEnter(i,u.getOptionIndex(o,l)))}),K0(),Z0()}if(t&2){let e=Y5(),n=e.$implicit,i=e.index,o=Y5().options,l=Y5(2);xj(),kR(`pBind`,l.getPTOptions(n,l.getItemOptions,i,`option`))(`id`,l.id+`_`+l.getOptionIndex(i,o))(`option`,n)(`selected`,l.isSelected(n))(`label`,l.getOptionLabel(n))(`disabled`,l.isOptionDisabled(n))(`template`,l.itemTemplate||l._itemTemplate)(`itemCheckboxIconTemplate`,l.itemCheckboxIconTemplate||l._itemCheckboxIconTemplate)(`itemSize`,o.itemSize)(`focused`,l.focusedOptionIndex()===l.getOptionIndex(i,o))(`ariaPosInset`,l.getAriaPosInset(l.getOptionIndex(i,o)))(`ariaSetSize`,l.ariaSetSize)(`variant`,l.$variant())(`highlightOnSelect`,l.highlightOnSelect)(`pt`,l.pt)(`unstyled`,l.unstyled())}}function uo(t,r){if(t&1&&AR(0,co,4,9,`ng-container`,20)(1,po,2,16,`ng-container`,20),t&2){let e=r.$implicit,n=Y5(3);kR(`ngIf`,n.isOptionGroup(e)),xj(),kR(`ngIf`,!n.isOptionGroup(e))}}function mo(t,r){if(t&1&&T$(0),t&2)nb(` `,Y5(4).emptyFilterMessageLabel,` `)}function ho(t,r){t&1&&MR(0)}function _o(t,r){if(t&1&&AR(0,ho,1,0,`ng-container`,32),t&2){let e=Y5(4);kR(`ngTemplateOutlet`,e.emptyFilterTemplate||e._emptyFilterTemplate||e.emptyTemplate||e._emptyFilterTemplate)}}function fo(t,r){if(t&1&&(sh(0,`li`,56),M5(1,mo,1,1)(2,_o,1,1,`ng-container`),K0()),t&2){let e=Y5().options,n=Y5(2);p$(n.cx(`emptyMessage`)),kR(`pBind`,n.ptm(`emptyMessage`))(`ngStyle`,P$(5,Le,e.itemSize+`px`)),xj(),O5(!n.emptyFilterTemplate&&!n._emptyFilterTemplate&&!n.emptyTemplate&&!n._emptyTemplate?1:2)}}function go(t,r){if(t&1&&T$(0),t&2)nb(` `,Y5(4).emptyMessageLabel,` `)}function bo(t,r){t&1&&MR(0)}function xo(t,r){if(t&1&&AR(0,bo,1,0,`ng-container`,32),t&2){let e=Y5(4);kR(`ngTemplateOutlet`,e.emptyTemplate||e._emptyTemplate)}}function yo(t,r){if(t&1&&(sh(0,`li`,56),M5(1,go,1,1)(2,xo,1,1,`ng-container`),K0()),t&2){let e=Y5().options,n=Y5(2);p$(n.cx(`emptyMessage`)),kR(`pBind`,n.ptm(`emptyMessage`))(`ngStyle`,P$(5,Le,e.itemSize+`px`)),xj(),O5(!n.emptyTemplate&&!n._emptyTemplate?1:2)}}function vo(t,r){if(t&1&&(sh(0,`ul`,53,15),AR(2,uo,2,2,`ng-template`,54)(3,fo,3,7,`li`,55)(4,yo,3,7,`li`,55),K0()),t&2){let e=r.$implicit,n=r.options,i=Y5(2);f$(n.contentStyle),p$(i.cn(i.cx(`list`),n.contentStyleClass)),kR(`pBind`,i.ptm(`list`)),Sh(`aria-label`,i.listLabel),xj(2),kR(`ngForOf`,e),xj(),kR(`ngIf`,i.hasFilter()&&i.isEmpty()),xj(),kR(`ngIf`,!i.hasFilter()&&i.isEmpty())}}function Co(t,r){t&1&&MR(0)}function Io(t,r){if(t&1&&(sh(0,`div`),Nh(1,1),AR(2,Co,1,0,`ng-container`,32),K0()),t&2){let e=Y5(2);xj(2),kR(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}function To(t,r){if(t&1){let e=z5();sh(0,`div`,38)(1,`span`,39,6),Rh(`focus`,function(i){pD(e);return gD(Y5().onFirstHiddenFocus(i))}),K0(),AR(3,zn,1,0,`ng-container`,32)(4,Yn,5,5,`div`,33),sh(5,`div`,19),AR(6,oo,5,11,`p-scroller`,40)(7,ao,2,6,`ng-container`,20)(8,vo,5,9,`ng-template`,null,7,H$),K0(),AR(10,Io,3,1,`div`,20),sh(11,`span`,39,8),Rh(`focus`,function(i){pD(e);return gD(Y5().onLastHiddenFocus(i))}),K0()()}if(t&2){let e=Y5();p$(e.cn(e.cx(`overlay`),e.panelStyleClass)),kR(`pBind`,e.ptm(`overlay`))(`ngStyle`,e.panelStyle),Sh(`data-p`,e.overlayDataP)(`id`,e.id+`_list`),xj(),kR(`pBind`,e.ptm(`firstHiddenFocusableEl`)),Sh(`tabindex`,0)(`data-p-hidden-accessible`,!0)(`data-p-hidden-focusable`,!0),xj(2),kR(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate),xj(),kR(`ngIf`,e.showHeader),xj(),p$(e.cx(`listContainer`)),zR(`max-height`,e.virtualScroll?`auto`:e.scrollHeight||`auto`),kR(`pBind`,e.ptm(`listContainer`)),xj(),kR(`ngIf`,e.virtualScroll),xj(),kR(`ngIf`,!e.virtualScroll),xj(3),kR(`ngIf`,e.footerFacet||e.footerTemplate||e._footerTemplate),xj(),kR(`pBind`,e.ptm(`lastHiddenFocusableEl`)),Sh(`tabindex`,0)(`data-p-hidden-accessible`,!0)(`data-p-hidden-focusable`,!0)}}var So=`
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
`;var ko={root:({instance:t})=>({position:t.$appendTo()===`self`?`relative`:void 0})};var Oo={root:({instance:t})=>[`p-multiselect p-component p-inputwrapper`,{"p-multiselect p-component p-inputwrapper":!0,"p-multiselect-display-chip":t.display===`chip`,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()===`filled`,"p-focus":t.focused,"p-inputwrapper-filled":t.$filled(),"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-multiselect-open":t.overlayVisible,"p-multiselect-fluid":t.hasFluid,"p-multiselect-sm p-inputfield-sm":t.size()===`small`,"p-multiselect-lg p-inputfield-lg":t.size()===`large`}],labelContainer:`p-multiselect-label-container`,label:({instance:t})=>({"p-multiselect-label":!0,"p-placeholder":t.label()===t.placeholder(),"p-multiselect-label-empty":!t.placeholder()&&!t.defaultLabel&&(!t.modelValue()||t.modelValue().length===0)}),chipItem:`p-multiselect-chip-item`,pcChip:`p-multiselect-chip`,chipIcon:`p-multiselect-chip-icon`,dropdown:`p-multiselect-dropdown`,loadingIcon:`p-multiselect-loading-icon`,dropdownIcon:`p-multiselect-dropdown-icon`,overlay:`p-multiselect-overlay p-component-overlay p-component`,header:`p-multiselect-header`,pcFilterContainer:`p-multiselect-filter-container`,pcFilter:`p-multiselect-filter`,listContainer:`p-multiselect-list-container`,list:`p-multiselect-list`,optionGroup:`p-multiselect-option-group`,option:({instance:t})=>({"p-multiselect-option":!0,"p-multiselect-option-selected":t.selected&&t.highlightOnSelect,"p-disabled":t.disabled,"p-focus":t.focused}),emptyMessage:`p-multiselect-empty-message`,clearIcon:`p-multiselect-clear-icon`};var Fe=(()=>{class t extends H1{name=`multiselect`;style=So;classes=Oo;inlineStyles=ko;static ɵfac=(()=>{let e;return function(i){return(e||(e=ch(t)))(i||t)}})();static ɵprov=Y({token:t,factory:t.ɵfac})}return t})();var Rt=new B(`MULTISELECT_INSTANCE`);var wo=new B(`MULTISELECT_ITEM_INSTANCE`);var Mo={provide:Ie,useExisting:af(()=>Eo),multi:!0};var Vo=(()=>{class t extends k$1{$pcMultiSelectItem=k(wo,{optional:!0,skipSelf:!0})??void 0;hostName=`MultiSelect`;getPTOptions(e){return this.ptm(e,{context:{selected:this.selected,focused:this.focused,disabled:this.disabled}})}option;selected;label;disabled;itemSize;focused;ariaPosInset;ariaSetSize;variant;template;checkIconTemplate;itemCheckboxIconTemplate;highlightOnSelect;onClick=new kt$1;onMouseEnter=new kt$1;_componentStyle=k(Fe);onOptionClick(e){this.onClick.emit({originalEvent:e,option:this.option,selected:this.selected}),e.stopPropagation(),e.preventDefault()}onOptionMouseEnter(e){this.onMouseEnter.emit({originalEvent:e,option:this.option,selected:this.selected})}static ɵfac=(()=>{let e;return function(i){return(e||(e=ch(t)))(i||t)}})();static ɵcmp=ga({type:t,selectors:[[`li`,`pMultiSelectItem`,``]],hostAttrs:[`role`,`option`],hostVars:13,hostBindings:function(n,i){n&1&&Rh(`click`,function(l){return i.onOptionClick(l)})(`mouseenter`,function(l){return i.onOptionMouseEnter(l)}),n&2&&(Sh(`aria-label`,i.label)(`aria-setsize`,i.ariaSetSize)(`aria-posinset`,i.ariaPosInset)(`aria-selected`,i.selected)(`data-p-selected`,i.selected)(`data-p-focused`,i.focused)(`data-p-highlight`,i.selected)(`data-p-disabled`,i.disabled)(`aria-checked`,i.selected),p$(i.cx(`option`)),zR(`height`,i.itemSize,`px`))},inputs:{option:`option`,selected:[2,`selected`,`selected`,Fu],label:`label`,disabled:[2,`disabled`,`disabled`,Fu],itemSize:[2,`itemSize`,`itemSize`,EH],focused:[2,`focused`,`focused`,Fu],ariaPosInset:`ariaPosInset`,ariaSetSize:`ariaSetSize`,variant:`variant`,template:`template`,checkIconTemplate:`checkIconTemplate`,itemCheckboxIconTemplate:`itemCheckboxIconTemplate`,highlightOnSelect:[2,`highlightOnSelect`,`highlightOnSelect`,Fu]},outputs:{onClick:`onClick`,onMouseEnter:`onMouseEnter`},features:[M$([Fe]),DR],decls:4,vars:13,consts:[[`icon`,``],[3,`ngModel`,`binary`,`tabindex`,`variant`,`ariaLabel`,`pt`,`unstyled`],[4,`ngIf`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,i){n&1&&(sh(0,`p-checkbox`,1),AR(1,Ii,3,0,`ng-container`,2),K0(),_U(),AR(2,Ti,2,1,`span`,2)(3,Si,1,0,`ng-container`,3)),n&2&&(kR(`ngModel`,i.selected)(`binary`,!0)(`tabindex`,-1)(`variant`,i.variant)(`ariaLabel`,i.label)(`pt`,i.getPTOptions(`pcOptionCheckbox`))(`unstyled`,i.unstyled()),wU(),xj(),kR(`ngIf`,i.itemCheckboxIconTemplate),xj(),kR(`ngIf`,!i.template),xj(),kR(`ngTemplateOutlet`,i.template)(`ngTemplateOutletContext`,P$(11,Ht,i.option)))},dependencies:[Gh,HH,qH,Ee,Sn$1,wn$1,Qt,Fwe],encapsulation:2,changeDetection:1})}return t})();var Eo=(()=>{class t extends Ut$1{zone;filterService;overlayService;componentName=`MultiSelect`;id;ariaLabel;styleClass;panelStyle;panelStyleClass;inputId;readonly;group;filter=!0;filterPlaceHolder;filterLocale;overlayVisible=!1;tabindex=0;dataKey;ariaLabelledBy;set displaySelectedLabel(e){this._displaySelectedLabel=e}get displaySelectedLabel(){return this._displaySelectedLabel}set maxSelectedLabels(e){this._maxSelectedLabels=e}get maxSelectedLabels(){return this._maxSelectedLabels}selectionLimit;selectedItemsLabel;showToggleAll=!0;emptyFilterMessage=``;emptyMessage=``;resetFilterOnHide=!1;dropdownIcon;chipIcon;optionLabel;optionValue;optionDisabled;optionGroupLabel=`label`;optionGroupChildren=`items`;showHeader=!0;filterBy;scrollHeight=`200px`;lazy=!1;virtualScroll;loading=!1;virtualScrollItemSize;loadingIcon;virtualScrollOptions;overlayOptions;ariaFilterLabel;filterMatchMode=`contains`;tooltip=``;tooltipPosition=`right`;tooltipPositionStyle=`absolute`;tooltipStyleClass;autofocusFilter=!1;display=`comma`;autocomplete=`off`;showClear=!1;autofocus;set placeholder(e){this._placeholder.set(e)}get placeholder(){return this._placeholder.asReadonly()}get options(){return this._options()}set options(e){w1(this._options(),e)||this._options.set(e||[])}get filterValue(){return this._filterValue()}set filterValue(e){this._filterValue.set(e)}get selectAll(){return this._selectAll}set selectAll(e){this._selectAll=e}focusOnHover=!0;filterFields;selectOnFocus=!1;autoOptionFocus=!1;highlightOnSelect=!0;size=Fh();variant=Fh();fluid=Fh(void 0,{transform:Fu});appendTo=Fh(void 0);motionOptions=Fh(void 0);onChange=new kt$1;onFilter=new kt$1;onFocus=new kt$1;onBlur=new kt$1;onClick=new kt$1;onClear=new kt$1;onPanelShow=new kt$1;onPanelHide=new kt$1;onLazyLoad=new kt$1;onRemove=new kt$1;onSelectAllChange=new kt$1;overlayViewChild;filterInputChild;focusInputViewChild;itemsViewChild;scroller;lastHiddenFocusableElementOnOverlay;firstHiddenFocusableElementOnOverlay;headerCheckboxViewChild;footerFacet;headerFacet;_componentStyle=k(Fe);bindDirectiveInstance=k(w,{self:!0});searchValue;searchTimeout;_selectAll=null;_placeholder=re(void 0);_disableTooltip=!1;value;_filteredOptions;focus;filtered;itemTemplate;groupTemplate;loaderTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;selectedItemsTemplate;loadingIconTemplate;filterIconTemplate;removeTokenIconTemplate;chipIconTemplate;clearIconTemplate;dropdownIconTemplate;itemCheckboxIconTemplate;headerCheckboxIconTemplate;templates;_itemTemplate;_groupTemplate;_loaderTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_selectedItemsTemplate;_loadingIconTemplate;_filterIconTemplate;_removeTokenIconTemplate;_chipIconTemplate;_clearIconTemplate;_dropdownIconTemplate;_itemCheckboxIconTemplate;_headerCheckboxIconTemplate;$variant=Pu(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());$appendTo=Pu(()=>this.appendTo()||this.config.overlayAppendTo());$pcMultiSelect=k(Rt,{optional:!0,skipSelf:!0})??void 0;pcFluid=k(Ue,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case`item`:this._itemTemplate=e.template;break;case`group`:this._groupTemplate=e.template;break;case`selectedItems`:case`selecteditems`:this._selectedItemsTemplate=e.template;break;case`header`:this._headerTemplate=e.template;break;case`filter`:this._filterTemplate=e.template;break;case`emptyfilter`:this._emptyFilterTemplate=e.template;break;case`empty`:this._emptyTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;case`loader`:this._loaderTemplate=e.template;break;case`headercheckboxicon`:this._headerCheckboxIconTemplate=e.template;break;case`loadingicon`:this._loadingIconTemplate=e.template;break;case`filtericon`:this._filterIconTemplate=e.template;break;case`removetokenicon`:this._removeTokenIconTemplate=e.template;break;case`clearicon`:this._clearIconTemplate=e.template;break;case`dropdownicon`:this._dropdownIconTemplate=e.template;break;case`itemcheckboxicon`:this._itemCheckboxIconTemplate=e.template;break;case`chipicon`:this._chipIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}headerCheckboxFocus;filterOptions;preventModelTouched;focused=!1;itemsWrapper;_displaySelectedLabel=!0;_maxSelectedLabels=3;modelValue=re(null);_filterValue=re(null);_options=re([]);startRangeIndex=re(-1);focusedOptionIndex=re(-1);selectedOptions;clickInProgress=!1;get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(Vwe.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(Vwe.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.modelValue()!==``&&Be(this.modelValue())&&this.showClear&&!this.$disabled()&&!this.readonly&&this.$filled()}get toggleAllAriaLabel(){return this.config.translation.aria?this.config.translation.aria[this.allSelected()?`selectAll`:`unselectAll`]:void 0}get listLabel(){return this.config.getTranslation(Vwe.ARIA).listLabel}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}visibleOptions=Pu(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),n=T1(e)&&Pn$1.isObject(e[0]);if(this._filterValue()){let i;if(n?i=this.filterService.filter(e,this.searchFields(),this._filterValue(),this.filterMatchMode,this.filterLocale):i=e.filter(o=>o.toString().toLocaleLowerCase().includes(this._filterValue().toLocaleLowerCase())),this.group){let o=this.options||[],l=[];return o.forEach(u=>{let me=this.getOptionGroupChildren(u).filter(Qt=>i.includes(Qt));me.length>0&&l.push(s(r({},u),{[typeof this.optionGroupChildren==`string`?this.optionGroupChildren:`items`]:[...me]}))}),this.flatOptions(l)}return i}return e});label=Pu(()=>{let e,n=this.modelValue();if(n&&n?.length&&this.displaySelectedLabel){if(Be(this.maxSelectedLabels)&&n?.length>(this.maxSelectedLabels||0))return this.getSelectedItemsLabel();e=``;for(let i=0;i<n.length;i++)i!==0&&(e+=`, `),e+=this.getLabelByValue(n[i])}else e=this.placeholder()||``;return e});chipSelectedItems=Pu(()=>Be(this.maxSelectedLabels)&&this.modelValue()&&this.modelValue()?.length>(this.maxSelectedLabels||0)?this.modelValue()?.slice(0,this.maxSelectedLabels):this.modelValue());constructor(e,n,i){super(),this.zone=e,this.filterService=n,this.overlayService=i,Hi$1(()=>{let o=this.modelValue(),l=this.getAllVisibleAndNonVisibleOptions();l&&Be(l)&&(this.optionValue&&this.optionLabel&&o?this.selectedOptions=l.filter(u=>o.includes(u[this.optionLabel])||o.includes(u[this.optionValue])):this.selectedOptions=o,this.cd.markForCheck())})}onInit(){this.id=this.id||pt(`pn_id_`),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}maxSelectionLimitReached(){return this.selectionLimit&&this.modelValue()&&this.modelValue().length===this.selectionLimit}onAfterViewInit(){this.overlayVisible&&this.show()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`])),this.filtered&&(this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild?.alignOverlay()},1)}),this.filtered=!1)}flatOptions(e){return(e||[]).reduce((n,i,o)=>{n.push({optionGroup:i,group:!0,index:o});let l=this.getOptionGroupChildren(i);return l&&l.forEach(u=>n.push(u)),n},[])}autoUpdateModel(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()){this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());let e=this.getOptionValue(this.visibleOptions()[this.focusedOptionIndex()]);this.onOptionSelect({originalEvent:null,option:[e]})}}updateModel(e,n){this.value=e,this.onModelChange(e),this.writeValue(e)}onInputClick(e){e.stopPropagation(),e.preventDefault(),this.focusedOptionIndex.set(-1)}onOptionSelect(e,n=!1,i=-1){let{originalEvent:o,option:l}=e;if(this.$disabled()||this.isOptionDisabled(l))return;let u=this.isSelected(l),x=[];u?x=this.modelValue().filter(me=>!sm(me,this.getOptionValue(l),this.equalityKey()||``)):x=[...this.modelValue()||[],this.getOptionValue(l)],this.updateModel(x,o),i!==-1&&this.focusedOptionIndex.set(i),n&&fwe(this.focusInputViewChild?.nativeElement),this.onChange.emit({originalEvent:e,value:x,itemValue:l})}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}onOptionSelectRange(e,n=-1,i=-1){if(n===-1&&(n=this.findNearestSelectedOptionIndex(i,!0)),i===-1&&(i=this.findNearestSelectedOptionIndex(n)),n!==-1&&i!==-1){let o=Math.min(n,i),l=Math.max(n,i),u=this.visibleOptions().slice(o,l+1).filter(x=>this.isValidOption(x)).map(x=>this.getOptionValue(x));this.updateModel(u,e)}}searchFields(){return(this.filterBy||this.optionLabel||`label`).split(`,`)}findNearestSelectedOptionIndex(e,n=!1){let i=-1;return this.hasSelectedOption()&&(n?(i=this.findPrevSelectedOptionIndex(e),i=i===-1?this.findNextSelectedOptionIndex(e):i):(i=this.findNextSelectedOptionIndex(e),i=i===-1?this.findPrevSelectedOptionIndex(e):i)),i>-1?i:e}findPrevSelectedOptionIndex(e){let n=this.hasSelectedOption()&&e>0?PG(this.visibleOptions().slice(0,e),i=>this.isValidSelectedOption(i)):-1;return n>-1?n:-1}findFirstFocusedOptionIndex(){let e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findFirstSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextSelectedOptionIndex(e){let n=this.hasSelectedOption()&&e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidSelectedOption(i)):-1;return n>-1?n+e+1:-1}equalityKey(){return this.optionValue?null:this.dataKey}hasSelectedOption(){return Be(this.modelValue())}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isOptionGroup(e){return e&&(this.group||this.optionGroupLabel)&&e.optionGroup&&e.group}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.maxSelectionLimitReached()&&!this.isSelected(e)?!0:this.optionDisabled?Yl(e,this.optionDisabled):e&&e.disabled!==void 0?e.disabled:!1}isSelected(e){let n=this.getOptionValue(e);return(this.modelValue()||[]).some(i=>sm(i,n,this.equalityKey()||``))}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale))}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}getLabelByValue(e){let i=(this.group?this.flatOptions(this._options()):this._options()||[]).find(o=>!this.isOptionGroup(o)&&sm(this.getOptionValue(o),e,this.equalityKey()||``));return i?this.getOptionLabel(i):null}getSelectedItemsLabel(){let e=/{(.*?)}/,n=this.selectedItemsLabel?this.selectedItemsLabel:this.config.getTranslation(Vwe.SELECTION_MESSAGE);return e.test(n)?n.replace(n.match(e)[0],this.modelValue().length+``):n}getOptionLabel(e){return this.optionLabel?Yl(e,this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?Yl(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}getOptionGroupLabel(e){return this.optionGroupLabel?Yl(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return e?this.optionGroupChildren?Yl(e,this.optionGroupChildren):e.items:[]}onKeyDown(e){if(this.$disabled()){e.preventDefault();return}let n=e.metaKey||e.ctrlKey;switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`Space`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`ShiftLeft`:case`ShiftRight`:this.onShiftKey();break;default:if(e.code===`KeyA`&&n){let i=this.visibleOptions().filter(o=>this.isValidOption(o)).map(o=>this.getOptionValue(o));this.updateModel(i,e),e.preventDefault();break}!n&&LG(e.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(e,e.key),e.preventDefault());break}}onFilterKeyDown(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e,!0);break;case`ArrowLeft`:case`ArrowRight`:this.onArrowLeftKey(e,!0);break;case`Home`:this.onHomeKey(e,!0);break;case`End`:this.onEndKey(e,!0);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e,!0);break;default:break}}onArrowLeftKey(e,n=!1){n&&this.focusedOptionIndex.set(-1)}onArrowDownKey(e){let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex(),n),this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show(),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e,n=!1){if(e.altKey&&!n)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,i,this.startRangeIndex()),this.changeFocusedOptionIndex(e,i),!this.overlayVisible&&this.show(),e.preventDefault()}e.stopPropagation()}onHomeKey(e,n=!1){let{currentTarget:i}=e;if(n){let o=i.value.length;i.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex.set(-1)}else{let o=e.metaKey||e.ctrlKey,l=this.findFirstOptionIndex();e.shiftKey&&o&&this.onOptionSelectRange(e,l,this.startRangeIndex()),this.changeFocusedOptionIndex(e,l),!this.overlayVisible&&this.show()}e.preventDefault()}onEndKey(e,n=!1){let{currentTarget:i}=e;if(n){let o=i.value.length;i.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex.set(-1)}else{let o=e.metaKey||e.ctrlKey,l=this.findLastFocusedOptionIndex();e.shiftKey&&o&&this.onOptionSelectRange(e,this.startRangeIndex(),l),this.changeFocusedOptionIndex(e,l),!this.overlayVisible&&this.show()}e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){this.overlayVisible?this.focusedOptionIndex()!==-1&&(e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex()):this.onOptionSelect({originalEvent:e,option:this.visibleOptions()[this.focusedOptionIndex()]})):this.onArrowDownKey(e),e.preventDefault()}onEscapeKey(e){this.overlayVisible&&(this.hide(!0),e.stopPropagation(),e.preventDefault())}onTabKey(e,n=!1){n||(this.overlayVisible&&this.hasFocusableElements()?(fwe(e.shiftKey?this.lastHiddenFocusableElementOnOverlay?.nativeElement:this.firstHiddenFocusableElementOnOverlay?.nativeElement),e.preventDefault()):this.overlayVisible&&this.hide(this.filter))}onShiftKey(){this.startRangeIndex.set(this.focusedOptionIndex())}onContainerClick(e){if(!(this.$disabled()||this.loading||this.readonly||e.target?.isSameNode?.(this.focusInputViewChild?.nativeElement))){if(!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(e.target)){if(this.clickInProgress)return;this.clickInProgress=!0,setTimeout(()=>{this.clickInProgress=!1},150),this.overlayVisible?this.hide(!0):this.show(!0)}this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),this.onClick.emit(e),this.cd.detectChanges()}}onFirstHiddenFocus(e){fwe(e.relatedTarget===this.focusInputViewChild?.nativeElement?pwe(this.overlayViewChild?.overlayViewChild?.nativeElement,`:not([data-p-hidden-focusable="true"])`):this.focusInputViewChild?.nativeElement)}onInputFocus(e){this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit({originalEvent:e})}onInputBlur(e){this.focused=!1,this.onBlur.emit({originalEvent:e}),this.preventModelTouched||this.onModelTouched(),this.preventModelTouched=!1}onFilterInputChange(e){let n=e.target.value;this._filterValue.set(n),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller?.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild?.alignOverlay()})}onLastHiddenFocus(e){fwe(e.relatedTarget===this.focusInputViewChild?.nativeElement?mwe(this.overlayViewChild?.overlayViewChild?.nativeElement,`:not([data-p-hidden-focusable="true"])`):this.focusInputViewChild?.nativeElement)}onOptionMouseEnter(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)}onFilterBlur(e){this.focusedOptionIndex.set(-1)}onToggleAll(e){if(!(this.$disabled()||this.readonly)){if(this.selectAll!=null)this.onSelectAllChange.emit({originalEvent:e,checked:!this.allSelected()});else{let n=this.getAllVisibleAndNonVisibleOptions().filter(x=>this.isSelected(x)&&(this.optionDisabled?Yl(x,this.optionDisabled):x&&x.disabled!==void 0?x.disabled:!1)),i=this.allSelected()?this.visibleOptions().filter(x=>!this.isValidOption(x)&&this.isSelected(x)):this.visibleOptions().filter(x=>this.isSelected(x)||this.isValidOption(x)),l=[...this.filter&&!this.allSelected()?this.getAllVisibleAndNonVisibleOptions().filter(x=>this.isSelected(x)&&this.isValidOption(x)):[],...n,...i].map(x=>this.getOptionValue(x)),u=[...new Set(l)];this.updateModel(u,e),(!u.length||u.length===this.getAllVisibleAndNonVisibleOptions().length)&&this.onSelectAllChange.emit({originalEvent:e,checked:!!u.length})}this.partialSelected()&&(this.selectedOptions=[],this.cd.markForCheck()),this.onChange.emit({originalEvent:e,value:this.value}),Yt$1.focus(this.headerCheckboxViewChild?.inputViewChild?.nativeElement),this.headerCheckboxFocus=!0,e.originalEvent.preventDefault(),e.originalEvent.stopPropagation()}}changeFocusedOptionIndex(e,n){this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView())}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let i=dwe(this.itemsViewChild.nativeElement,`li[id="${n}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:`nearest`,inline:`nearest`}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}allSelected(){return this.selectAll!==null?this.selectAll:Be(this.visibleOptions())&&this.visibleOptions().every(e=>this.isOptionGroup(e)||this.isOptionDisabled(e)||this.isSelected(e))}partialSelected(){return this.selectedOptions&&this.selectedOptions.length>0&&this.selectedOptions.length<(this.options?.length||0)}show(e){this.overlayVisible=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex();this.focusedOptionIndex.set(n),e&&fwe(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}hide(e){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.filter&&this.resetFilterOnHide&&this.resetFilter(),this.overlayOptions?.mode===`modal`&&hn$1(),e&&fwe(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayBeforeEnter(e){if(this.itemsWrapper=dwe(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?`[data-pc-name="virtualscroller"]`:`[data-pc-section="listcontainer"]`),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let n=this.modelValue()?this.focusedOptionIndex():-1;n!==-1&&this.scroller?.scrollToIndex(n)}else{let n=dwe(this.itemsWrapper,`[data-pc-section="option"][data-p-selected="true"]`);n&&n.scrollIntoView({block:`nearest`,inline:`nearest`})}this.filterInputChild&&this.filterInputChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&this.filterInputChild.nativeElement.focus()),this.onPanelShow.emit(e)}onOverlayAfterLeave(e){this.itemsWrapper=null,this.onModelTouched(),this.onPanelHide.emit(e)}resetFilter(){this.filterInputChild&&this.filterInputChild.nativeElement&&(this.filterInputChild.nativeElement.value=``),this._filterValue.set(null),this._filteredOptions=null}onOverlayHide(e){this.focusedOptionIndex.set(-1),this.filter&&this.resetFilterOnHide&&this.resetFilter()}close(e){this.hide(),e.preventDefault(),e.stopPropagation()}clear(e){this.value=[],this.updateModel(null,e),this.selectedOptions=[],this.onClear.emit(),this._disableTooltip=!0,e.stopPropagation()}labelContainerMouseLeave(){this._disableTooltip&&(this._disableTooltip=!1)}removeOption(e,n){let i=this.modelValue().filter(o=>!sm(o,e,this.equalityKey()||``));this.updateModel(i,n),this.onChange.emit({originalEvent:n,value:i,itemValue:e}),this.onRemove.emit({newValue:i,removed:e}),n&&n.stopPropagation()}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?PG(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return n>-1?n:e}findLastSelectedOptionIndex(){return this.hasSelectedOption()?PG(this.visibleOptions(),e=>this.isValidSelectedOption(e)):-1}findLastFocusedOptionIndex(){let e=this.findLastSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findLastOptionIndex(){return PG(this.visibleOptions(),e=>this.isValidOption(e))}searchOptions(e,n){this.searchValue=(this.searchValue||``)+n;let i=-1,o=!1;return this.focusedOptionIndex()!==-1?(i=this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(l=>this.isOptionMatched(l)),i=i===-1?this.visibleOptions().slice(0,this.focusedOptionIndex()).findIndex(l=>this.isOptionMatched(l)):i+this.focusedOptionIndex()):i=this.visibleOptions().findIndex(l=>this.isOptionMatched(l)),i!==-1&&(o=!0),i===-1&&this.focusedOptionIndex()===-1&&(i=this.findFirstFocusedOptionIndex()),i!==-1&&this.changeFocusedOptionIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue=``,this.searchTimeout=null},500),o}hasFocusableElements(){return k1(this.overlayViewChild?.overlayViewChild?.nativeElement,`:not([data-p-hidden-focusable="true"])`).length>0}hasFilter(){return this._filterValue()&&this._filterValue().trim().length>0}get containerDataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.size()]:this.size()})}get labelDataP(){return this.cn({placeholder:this.label===this.placeholder,clearable:this.showClear,disabled:this.disabled,[this.size()]:this.size(),"has-chip":this.display===`chip`&&this.value&&this.value.length&&(this.maxSelectedLabels?this.value.length<=this.maxSelectedLabels:!0),empty:!this.placeholder&&!this.$filled})}get dropdownIconDataP(){return this.cn({[this.size()]:this.size()})}get overlayDataP(){return this.cn({[`overlay-`+this.appendTo]:`overlay-`+this.appendTo})}writeControlValue(e,n){this.value=e,n(e),this.cd.markForCheck()}getHeaderCheckboxPTOptions(e){return this.ptm(e,{context:{selected:this.allSelected()}})}getPTOptions(e,n,i,o){return this.ptm(o,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(i,n),disabled:this.isOptionDisabled(e)}})}static ɵfac=function(n){return new(n||t)(me(Te),me(xwe),me(Mwe))};static ɵcmp=ga({type:t,selectors:[[`p-multiSelect`],[`p-multiselect`],[`p-multi-select`]],contentQueries:function(n,i,o){if(n&1&&xh(o,Pwe,5)(o,Owe,5)(o,ki,4)(o,Oi,4)(o,wi,4)(o,Mi,4)(o,Vi,4)(o,Ei,4)(o,Fi,4)(o,Li,4)(o,Bi,4)(o,Di,4)(o,Ai,4)(o,Pi,4)(o,zi,4)(o,Ni,4)(o,Ri,4)(o,Hi,4)(o,Ki,4)(o,Lwe,4),n&2){let l;eb(l=tb())&&(i.footerFacet=l.first),eb(l=tb())&&(i.headerFacet=l.first),eb(l=tb())&&(i.itemTemplate=l.first),eb(l=tb())&&(i.groupTemplate=l.first),eb(l=tb())&&(i.loaderTemplate=l.first),eb(l=tb())&&(i.headerTemplate=l.first),eb(l=tb())&&(i.filterTemplate=l.first),eb(l=tb())&&(i.footerTemplate=l.first),eb(l=tb())&&(i.emptyFilterTemplate=l.first),eb(l=tb())&&(i.emptyTemplate=l.first),eb(l=tb())&&(i.selectedItemsTemplate=l.first),eb(l=tb())&&(i.loadingIconTemplate=l.first),eb(l=tb())&&(i.filterIconTemplate=l.first),eb(l=tb())&&(i.removeTokenIconTemplate=l.first),eb(l=tb())&&(i.chipIconTemplate=l.first),eb(l=tb())&&(i.clearIconTemplate=l.first),eb(l=tb())&&(i.dropdownIconTemplate=l.first),eb(l=tb())&&(i.itemCheckboxIconTemplate=l.first),eb(l=tb())&&(i.headerCheckboxIconTemplate=l.first),eb(l=tb())&&(i.templates=l)}},viewQuery:function(n,i){if(n&1&&FR($i,5)(Qi,5)(Gi,5)(qi,5)(ji,5)(Ui,5)(Wi,5)(Zi,5),n&2){let o;eb(o=tb())&&(i.overlayViewChild=o.first),eb(o=tb())&&(i.filterInputChild=o.first),eb(o=tb())&&(i.focusInputViewChild=o.first),eb(o=tb())&&(i.itemsViewChild=o.first),eb(o=tb())&&(i.scroller=o.first),eb(o=tb())&&(i.lastHiddenFocusableElementOnOverlay=o.first),eb(o=tb())&&(i.firstHiddenFocusableElementOnOverlay=o.first),eb(o=tb())&&(i.headerCheckboxViewChild=o.first)}},hostVars:6,hostBindings:function(n,i){n&1&&Rh(`click`,function(l){return i.onContainerClick(l)}),n&2&&(Sh(`id`,i.id)(`data-p`,i.containerDataP),f$(i.sx(`root`)),p$(i.cn(i.cx(`root`),i.styleClass)))},inputs:{id:`id`,ariaLabel:`ariaLabel`,styleClass:`styleClass`,panelStyle:`panelStyle`,panelStyleClass:`panelStyleClass`,inputId:`inputId`,readonly:[2,`readonly`,`readonly`,Fu],group:[2,`group`,`group`,Fu],filter:[2,`filter`,`filter`,Fu],filterPlaceHolder:`filterPlaceHolder`,filterLocale:`filterLocale`,overlayVisible:[2,`overlayVisible`,`overlayVisible`,Fu],tabindex:[2,`tabindex`,`tabindex`,EH],dataKey:`dataKey`,ariaLabelledBy:`ariaLabelledBy`,displaySelectedLabel:`displaySelectedLabel`,maxSelectedLabels:`maxSelectedLabels`,selectionLimit:[2,`selectionLimit`,`selectionLimit`,EH],selectedItemsLabel:`selectedItemsLabel`,showToggleAll:[2,`showToggleAll`,`showToggleAll`,Fu],emptyFilterMessage:`emptyFilterMessage`,emptyMessage:`emptyMessage`,resetFilterOnHide:[2,`resetFilterOnHide`,`resetFilterOnHide`,Fu],dropdownIcon:`dropdownIcon`,chipIcon:`chipIcon`,optionLabel:`optionLabel`,optionValue:`optionValue`,optionDisabled:`optionDisabled`,optionGroupLabel:`optionGroupLabel`,optionGroupChildren:`optionGroupChildren`,showHeader:[2,`showHeader`,`showHeader`,Fu],filterBy:`filterBy`,scrollHeight:`scrollHeight`,lazy:[2,`lazy`,`lazy`,Fu],virtualScroll:[2,`virtualScroll`,`virtualScroll`,Fu],loading:[2,`loading`,`loading`,Fu],virtualScrollItemSize:[2,`virtualScrollItemSize`,`virtualScrollItemSize`,EH],loadingIcon:`loadingIcon`,virtualScrollOptions:`virtualScrollOptions`,overlayOptions:`overlayOptions`,ariaFilterLabel:`ariaFilterLabel`,filterMatchMode:`filterMatchMode`,tooltip:`tooltip`,tooltipPosition:`tooltipPosition`,tooltipPositionStyle:`tooltipPositionStyle`,tooltipStyleClass:`tooltipStyleClass`,autofocusFilter:[2,`autofocusFilter`,`autofocusFilter`,Fu],display:`display`,autocomplete:`autocomplete`,showClear:[2,`showClear`,`showClear`,Fu],autofocus:[2,`autofocus`,`autofocus`,Fu],placeholder:`placeholder`,options:`options`,filterValue:`filterValue`,selectAll:`selectAll`,focusOnHover:[2,`focusOnHover`,`focusOnHover`,Fu],filterFields:`filterFields`,selectOnFocus:[2,`selectOnFocus`,`selectOnFocus`,Fu],autoOptionFocus:[2,`autoOptionFocus`,`autoOptionFocus`,Fu],highlightOnSelect:[2,`highlightOnSelect`,`highlightOnSelect`,Fu],size:[1,`size`],variant:[1,`variant`],fluid:[1,`fluid`],appendTo:[1,`appendTo`],motionOptions:[1,`motionOptions`]},outputs:{onChange:`onChange`,onFilter:`onFilter`,onFocus:`onFocus`,onBlur:`onBlur`,onClick:`onClick`,onClear:`onClear`,onPanelShow:`onPanelShow`,onPanelHide:`onPanelHide`,onLazyLoad:`onLazyLoad`,onRemove:`onRemove`,onSelectAllChange:`onSelectAllChange`},features:[M$([Mo,Fe,{provide:Rt,useExisting:t},{provide:R,useExisting:t}]),p5([w]),DR],ngContentSelectors:Yi,decls:16,vars:51,consts:[[`focusInput`,``],[`elseBlock`,``],[`overlay`,``],[`content`,``],[`token`,``],[`removeicon`,``],[`firstHiddenFocusableEl`,``],[`buildInItems`,``],[`lastHiddenFocusableEl`,``],[`builtInFilterElement`,``],[`headerCheckbox`,``],[`icon`,``],[`filterInput`,``],[`scroller`,``],[`loader`,``],[`items`,``],[1,`p-hidden-accessible`,3,`pBind`],[`role`,`combobox`,3,`focus`,`blur`,`keydown`,`pTooltip`,`pTooltipUnstyled`,`tooltipPosition`,`positionStyle`,`tooltipStyleClass`,`pAutoFocus`,`pBind`],[3,`mouseleave`,`pBind`,`pTooltip`,`pTooltipUnstyled`,`tooltipDisabled`,`tooltipPosition`,`positionStyle`,`tooltipStyleClass`],[3,`pBind`],[4,`ngIf`],[4,`ngIf`,`ngIfElse`],[3,`visibleChange`,`onBeforeEnter`,`onAfterLeave`,`onHide`,`hostAttrSelector`,`visible`,`options`,`target`,`appendTo`,`unstyled`,`pt`,`motionOptions`],[3,`pBind`,`class`],[3,`pBind`,`class`,4,`ngFor`,`ngForOf`],[3,`onRemove`,`pt`,`unstyled`,`label`,`removable`,`removeIcon`],[3,`class`,`pBind`,`click`,4,`ngIf`],[3,`click`,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`times`,3,`pBind`,`class`,`click`,4,`ngIf`],[3,`pBind`,`class`,`click`,4,`ngIf`],[`data-p-icon`,`times`,3,`click`,`pBind`],[4,`ngTemplateOutlet`],[3,`pBind`,`class`,4,`ngIf`],[3,`pBind`,`class`,`ngClass`,4,`ngIf`],[`data-p-icon`,`chevron-down`,3,`pBind`,`class`,4,`ngIf`],[3,`pBind`,`ngClass`],[`data-p-icon`,`chevron-down`,3,`pBind`],[3,`pBind`,`ngStyle`],[`role`,`presentation`,1,`p-hidden-accessible`,`p-hidden-focusable`,3,`focus`,`pBind`],[3,`items`,`style`,`itemSize`,`autoSize`,`tabindex`,`lazy`,`options`,`onLazyLoad`,4,`ngIf`],[3,`pt`,`ngModel`,`ariaLabel`,`binary`,`variant`,`disabled`,`unstyled`,`onChange`,4,`ngIf`],[3,`pt`,`class`,`unstyled`,4,`ngIf`],[3,`onChange`,`pt`,`ngModel`,`ariaLabel`,`binary`,`variant`,`disabled`,`unstyled`],[`data-p-icon`,`check`,3,`class`,`pBind`,4,`ngIf`],[`data-p-icon`,`check`,3,`pBind`],[3,`pt`,`unstyled`],[`pInputText`,``,`type`,`text`,`role`,`searchbox`,3,`input`,`keydown`,`click`,`blur`,`pt`,`variant`,`value`,`unstyled`],[`data-p-icon`,`search`,3,`pBind`,4,`ngIf`],[`class`,`p-multiselect-filter-icon`,3,`pBind`,4,`ngIf`],[`data-p-icon`,`search`,3,`pBind`],[1,`p-multiselect-filter-icon`,3,`pBind`],[3,`onLazyLoad`,`items`,`itemSize`,`autoSize`,`tabindex`,`lazy`,`options`],[`role`,`listbox`,`aria-multiselectable`,`true`,3,`pBind`],[`ngFor`,``,3,`ngForOf`],[`role`,`option`,3,`pBind`,`class`,`ngStyle`,4,`ngIf`],[`role`,`option`,3,`pBind`,`ngStyle`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`,4,`ngIf`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`pMultiSelectItem`,``,`pRipple`,``,3,`onClick`,`onMouseEnter`,`pBind`,`id`,`option`,`selected`,`label`,`disabled`,`template`,`itemCheckboxIconTemplate`,`itemSize`,`focused`,`ariaPosInset`,`ariaSetSize`,`variant`,`highlightOnSelect`,`pt`,`unstyled`]],template:function(n,i){if(n&1){let o=z5();kh(Xi),sh(0,`div`,16)(1,`input`,17,0),Rh(`focus`,function(u){return i.onInputFocus(u)})(`blur`,function(u){return i.onInputBlur(u)})(`keydown`,function(u){return i.onKeyDown(u)}),K0()(),sh(3,`div`,18),Rh(`mouseleave`,function(){return i.labelContainerMouseLeave()}),sh(4,`div`,19),AR(5,fn,3,2,`ng-container`,20)(6,xn,3,6,`ng-container`,20),K0()(),AR(7,Tn,3,2,`ng-container`,20),sh(8,`div`,19),AR(9,Vn,3,2,`ng-container`,21)(10,Pn,2,2,`ng-template`,null,1,H$),K0(),sh(12,`p-overlay`,22,2),ok(`visibleChange`,function(u){return pD(o),A$(i.overlayVisible,u)||(i.overlayVisible=u),gD(u)}),Rh(`onBeforeEnter`,function(u){return i.onOverlayBeforeEnter(u)})(`onAfterLeave`,function(u){return i.onOverlayAfterLeave(u)})(`onHide`,function(u){return i.onOverlayHide(u)}),AR(14,To,13,24,`ng-template`,null,3,H$),K0()}if(n&2){let o=J5(11);kR(`pBind`,i.ptm(`hiddenInputContainer`)),Sh(`data-p-hidden-accessible`,!0),xj(),kR(`pTooltip`,i.tooltip)(`pTooltipUnstyled`,i.unstyled())(`tooltipPosition`,i.tooltipPosition)(`positionStyle`,i.tooltipPositionStyle)(`tooltipStyleClass`,i.tooltipStyleClass)(`pAutoFocus`,i.autofocus)(`pBind`,i.ptm(`hiddenInput`)),Sh(`aria-disabled`,i.$disabled())(`id`,i.inputId)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledBy)(`aria-haspopup`,`listbox`)(`aria-expanded`,i.overlayVisible??!1)(`aria-controls`,i.overlayVisible?i.id+`_list`:null)(`tabindex`,i.$disabled()?-1:i.tabindex)(`aria-activedescendant`,i.focused?i.focusedOptionId:void 0)(`value`,i.modelValue())(`name`,i.name())(`required`,i.required()?``:void 0)(`disabled`,i.$disabled()?``:void 0),xj(2),p$(i.cx(`labelContainer`)),kR(`pBind`,i.ptm(`labelContainer`))(`pTooltip`,i.tooltip)(`pTooltipUnstyled`,i.unstyled())(`tooltipDisabled`,i._disableTooltip)(`tooltipPosition`,i.tooltipPosition)(`positionStyle`,i.tooltipPositionStyle)(`tooltipStyleClass`,i.tooltipStyleClass),xj(),p$(i.cx(`label`)),kR(`pBind`,i.ptm(`label`)),Sh(`data-p`,i.labelDataP),xj(),kR(`ngIf`,!i.selectedItemsTemplate&&!i._selectedItemsTemplate),xj(),kR(`ngIf`,i.selectedItemsTemplate||i._selectedItemsTemplate),xj(),kR(`ngIf`,i.isVisibleClearIcon),xj(),p$(i.cx(`dropdown`)),kR(`pBind`,i.ptm(`dropdown`)),xj(),kR(`ngIf`,i.loading)(`ngIfElse`,o),xj(3),kR(`hostAttrSelector`,i.$attrSelector),rk(`visible`,i.overlayVisible),kR(`options`,i.overlayOptions)(`target`,`@parent`)(`appendTo`,i.$appendTo())(`unstyled`,i.unstyled())(`pt`,i.ptm(`pcOverlay`))(`motionOptions`,i.motionOptions())}},dependencies:[Gh,$H,Qk,HH,qH,zH,Vo,ai$1,Fwe,Rn$1,ui$1,Oe,Xt$1,ti$1,yi$1,ei$1,Qt$1,Zt$1,Nn$1,zt,Ee,Sn$1,wn$1,Qt,kt$2,w],encapsulation:2})}return t})();export{Eo as t};