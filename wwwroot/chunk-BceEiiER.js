import{Ar as dk,Bn as V,Ci as q,Dn as S5,Ei as qj,En as S$,Gn as W$,Gt as K$,In as Uh,Kn as W5,Lr as eb,Lt as HR,Mi as sb,Oi as r$,Rn as Uu,Ui as uh,Un as VR,Xi as xh,Xt as LR,Zn as X5,Zt as Lh,_n as Q5,dt as CD,ei as jR,en as MH,fi as nH,fr as Zl,hr as _a,jt as G5,ki as rIe,kr as dh,mi as nL,nn as Mh,nr as Y$,oi as lf,on as Nh,pn as PU,ri as kt,si as lm,tn as MU,tt as A,ui as n4,vt as DD,wr as c$,wt as F$,xn as Qh,xr as ab,yi as oIe}from"./main-GCJZYAJC.js";import{a as R,c as Xe,g as kt$1,y as w}from"./chunk-B55awZGC.js";import{T as wn,c as Ie,p as Sn,u as Qt$1}from"./chunk-D5_dOhqW.js";import{n as Ut$1}from"./chunk-CuUy6gUK.js";var pt=`
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
`;var Et=[`icon`];var Bt=[`content`];var mt=e=>({$implicit:e});function wt(e,a){e&1&&HR(0)}function Lt(e,a){if(e&1&&xh(0,`span`,0),e&2){let t=c$(3);S$(t.cn(t.cx(`icon`),t.checked?t.onIcon:t.offIcon,t.iconPos===`left`?t.cx(`iconLeft`):t.cx(`iconRight`))),jR(`pBind`,t.ptm(`icon`))}}function Ot(e,a){if(e&1&&W5(0,Lt,1,3,`span`,2),e&2){let t=c$(2);G5(t.onIcon||t.offIcon?0:-1)}}function St(e,a){e&1&&HR(0)}function It(e,a){if(e&1&&VR(0,St,1,0,`ng-container`,1),e&2){let t=c$(2);jR(`ngTemplateOutlet`,t.iconTemplate||t._iconTemplate)(`ngTemplateOutletContext`,K$(2,mt,t.checked))}}function Mt(e,a){if(e&1&&(W5(0,Ot,1,1)(1,It,1,4,`ng-container`),uh(2,`span`,0),F$(3),eb()),e&2){let t=c$();G5(t.iconTemplate?1:0),qj(2),S$(t.cx(`label`)),jR(`pBind`,t.ptm(`label`)),qj(),dk(t.checked?t.hasOnLabel?t.onLabel:`\xA0`:t.hasOffLabel?t.offLabel:`\xA0`)}}var Dt=`
    ${pt}

    /* For Optimus (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`;var Ft={root:({instance:e})=>[`p-togglebutton p-component`,{"p-togglebutton-checked":e.checked,"p-invalid":e.invalid(),"p-disabled":e.$disabled(),"p-togglebutton-sm p-inputfield-sm":e.size===`small`,"p-togglebutton-lg p-inputfield-lg":e.size===`large`,"p-togglebutton-fluid":e.fluid()}],content:`p-togglebutton-content`,icon:`p-togglebutton-icon`,iconLeft:`p-togglebutton-icon-left`,iconRight:`p-togglebutton-icon-right`,label:`p-togglebutton-label`};var bt=(()=>{class e extends nL{name=`togglebutton`;style=Dt;classes=Ft;static ɵfac=(()=>{let t;return function(o){return(t||(t=dh(e)))(o||e)}})();static ɵprov=q({token:e,factory:e.ɵfac})}return e})();var ft=new V(`TOGGLEBUTTON_INSTANCE`);var Nt={provide:Ie,useExisting:lf(()=>J),multi:!0};var J=(()=>{class e extends Ut$1{componentName=`ToggleButton`;$pcToggleButton=A(ft,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=A(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}onKeyDown(t){switch(t.code){case`Enter`:this.toggle(t),t.preventDefault();break;case`Space`:this.toggle(t),t.preventDefault();break}}toggle(t){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onLabel=`Yes`;offLabel=`No`;onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos=`left`;autofocus;size;allowEmpty;fluid=Uh(void 0,{transform:Uu});onChange=new kt;iconTemplate;contentTemplate;templates;checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=A(bt);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.offLabel&&this.offLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case`icon`:this._iconTemplate=t.template;break;case`content`:this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}writeControlValue(t,n){this.checked=t,n(t),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.active,invalid:this.invalid(),[this.size]:this.size})}static ɵfac=(()=>{let t;return function(o){return(t||(t=dh(e)))(o||e)}})();static ɵcmp=_a({type:e,selectors:[[`p-toggleButton`],[`p-togglebutton`],[`p-toggle-button`]],contentQueries:function(n,o,i){if(n&1&&Lh(i,Et,4)(i,Bt,4)(i,rIe,4),n&2){let l;sb(l=ab())&&(o.iconTemplate=l.first),sb(l=ab())&&(o.contentTemplate=l.first),sb(l=ab())&&(o.templates=l)}},hostVars:11,hostBindings:function(n,o){n&1&&Mh(`keydown`,function(l){return o.onKeyDown(l)})(`click`,function(l){return o.toggle(l)}),n&2&&(Nh(`aria-labelledby`,o.ariaLabelledBy)(`aria-label`,o.ariaLabel)(`aria-pressed`,o.checked?`true`:`false`)(`role`,`button`)(`tabindex`,o.tabindex!==void 0?o.tabindex:o.$disabled()?-1:0)(`data-pc-name`,`togglebutton`)(`data-p-checked`,o.active)(`data-p-disabled`,o.$disabled())(`data-p`,o.dataP),S$(o.cn(o.cx(`root`),o.styleClass)))},inputs:{onLabel:`onLabel`,offLabel:`offLabel`,onIcon:`onIcon`,offIcon:`offIcon`,ariaLabel:`ariaLabel`,ariaLabelledBy:`ariaLabelledBy`,styleClass:`styleClass`,inputId:`inputId`,tabindex:[2,`tabindex`,`tabindex`,MH],iconPos:`iconPos`,autofocus:[2,`autofocus`,`autofocus`,Uu],size:`size`,allowEmpty:`allowEmpty`,fluid:[1,`fluid`]},outputs:{onChange:`onChange`},features:[W$([Nt,bt,{provide:ft,useExisting:e},{provide:R,useExisting:e}]),S5([Xe,w]),LR],decls:3,vars:9,consts:[[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`pBind`]],template:function(n,o){n&1&&(uh(0,`span`,0),VR(1,wt,1,0,`ng-container`,1),W5(2,Mt,4,5),eb()),n&2&&(S$(o.cx(`content`)),jR(`pBind`,o.ptm(`content`)),Nh(`data-p`,o.dataP),qj(),jR(`ngTemplateOutlet`,o.contentTemplate||o._contentTemplate)(`ngTemplateOutletContext`,K$(7,mt,o.checked)),qj(),G5(o.contentTemplate?-1:2))},dependencies:[Qh,n4,oIe,kt$1,w],encapsulation:2})}return e})();var ht=`
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
`;var At=[`item`];var Vt=(e,a)=>({$implicit:e,index:a});function $t(e,a){return this.getOptionLabel(a)}function zt(e,a){e&1&&HR(0)}function Rt(e,a){if(e&1&&VR(0,zt,1,0,`ng-container`,3),e&2){let t=c$(2),n=t.$implicit,o=t.$index,i=c$();jR(`ngTemplateOutlet`,i.itemTemplate||i._itemTemplate)(`ngTemplateOutletContext`,Y$(2,Vt,n,o))}}function Pt(e,a){e&1&&VR(0,Rt,1,5,`ng-template`,null,0,nH)}function jt(e,a){if(e&1){let t=r$();uh(0,`p-togglebutton`,2),Mh(`onChange`,function(o){let i=CD(t),l=i.$implicit,m=i.$index;return DD(c$().onOptionSelect(o,l,m))}),W5(1,Pt,2,0),eb(),MU()}if(e&2){let t=a.$implicit,n=c$();jR(`autofocus`,n.autofocus)(`styleClass`,n.styleClass)(`ngModel`,n.isSelected(t))(`onLabel`,n.getOptionLabel(t))(`offLabel`,n.getOptionLabel(t))(`disabled`,n.$disabled()||n.isOptionDisabled(t))(`allowEmpty`,n.getAllowEmpty())(`size`,n.size())(`fluid`,n.fluid())(`pt`,n.ptm(`pcToggleButton`))(`unstyled`,n.unstyled()),PU(),qj(),G5(n.itemTemplate||n._itemTemplate?1:-1)}}var Ht=`
    ${ht}

    /* For Optimus */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`;var Kt={root:({instance:e})=>[`p-selectbutton p-component`,{"p-invalid":e.invalid(),"p-selectbutton-fluid":e.fluid()}]};var yt=(()=>{class e extends nL{name=`selectbutton`;style=Ht;classes=Kt;static ɵfac=(()=>{let t;return function(o){return(t||(t=dh(e)))(o||e)}})();static ɵprov=q({token:e,factory:e.ɵfac})}return e})();var _t=new V(`SELECTBUTTON_INSTANCE`);var Qt={provide:Ie,useExisting:lf(()=>Ut),multi:!0};var Ut=(()=>{class e extends Ut$1{componentName=`SelectButton`;options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(t){this._unselectable=t,this.allowEmpty=!t}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=Uh();fluid=Uh(void 0,{transform:Uu});onOptionClick=new kt;onChange=new kt;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=A(yt);$pcSelectButton=A(_t,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=A(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(t){return this.optionLabel?Zl(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?Zl(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?Zl(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}onOptionSelect(t,n,o){if(this.$disabled()||this.isOptionDisabled(n))return;let i=this.isSelected(n);if(i&&this.unselectable)return;let l=this.getOptionValue(n),m;if(this.multiple)i?m=this.value.filter(G=>!lm(G,l,this.equalityKey||void 0)):m=this.value?[...this.value,l]:[l];else{if(i&&!this.allowEmpty)return;m=i?null:l}this.focusedIndex=o,this.value=m,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:n,index:o})}changeTabIndexes(t,n){let o,i;for(let l=0;l<=this.el.nativeElement.children.length-1;l++)this.el.nativeElement.children[l].getAttribute(`tabindex`)===`0`&&(o={elem:this.el.nativeElement.children[l],index:l});n===`prev`?o.index===0?i=this.el.nativeElement.children.length-1:i=o.index-1:o.index===this.el.nativeElement.children.length-1?i=0:i=o.index+1,this.focusedIndex=i,this.el.nativeElement.children[i].focus()}onFocus(t,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(n=>!lm(n,this.getOptionValue(t),this.dataKey))}isSelected(t){let n=!1,o=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let i of this.value)if(lm(i,o,this.dataKey)){n=!0;break}}}else n=lm(this.getOptionValue(t),this.value,this.equalityKey||void 0);return n}templates;onAfterContentInit(){this.templates.forEach(t=>{t.getType()===`item`&&(this._itemTemplate=t.template)})}writeControlValue(t,n){this.value=t,n(this.value),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid()})}static ɵfac=(()=>{let t;return function(o){return(t||(t=dh(e)))(o||e)}})();static ɵcmp=_a({type:e,selectors:[[`p-selectButton`],[`p-selectbutton`],[`p-select-button`]],contentQueries:function(n,o,i){if(n&1&&Lh(i,At,4)(i,rIe,4),n&2){let l;sb(l=ab())&&(o.itemTemplate=l.first),sb(l=ab())&&(o.templates=l)}},hostVars:5,hostBindings:function(n,o){n&2&&(Nh(`role`,`group`)(`aria-labelledby`,o.ariaLabelledBy)(`data-p`,o.dataP),S$(o.cx(`root`)))},inputs:{options:`options`,optionLabel:`optionLabel`,optionValue:`optionValue`,optionDisabled:`optionDisabled`,unselectable:[2,`unselectable`,`unselectable`,Uu],tabindex:[2,`tabindex`,`tabindex`,MH],multiple:[2,`multiple`,`multiple`,Uu],allowEmpty:[2,`allowEmpty`,`allowEmpty`,Uu],styleClass:`styleClass`,ariaLabelledBy:`ariaLabelledBy`,dataKey:`dataKey`,autofocus:[2,`autofocus`,`autofocus`,Uu],size:[1,`size`],fluid:[1,`fluid`]},outputs:{onOptionClick:`onOptionClick`,onChange:`onChange`},features:[W$([Qt,yt,{provide:_t,useExisting:e},{provide:R,useExisting:e}]),S5([w]),LR],decls:2,vars:0,consts:[[`content`,``],[3,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[3,`onChange`,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,o){n&1&&Q5(0,jt,2,12,`p-togglebutton`,1,$t,!0),n&2&&X5(o.options)},dependencies:[J,Sn,wn,Qt$1,Qh,n4,oIe,kt$1],encapsulation:2})}return e})();export{Ut as t};