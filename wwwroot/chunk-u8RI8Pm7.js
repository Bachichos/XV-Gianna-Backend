import{$ as DR,Bt as M$,Hn as Y$1,Ht as MR,Jr as p5,Ot as K0,Pr as kt,Qn as af,Ti as xj,V as AR,Vt as M5,W as B,Wn as Y5,Xt as O5,bt as H1,dr as f$,ei as qH,gr as ga,gt as Fwe,hi as tb,ht as Fu,it as EH,jr as kR,kr as k,li as sh,nr as ch,pt as Fh,qr as p$,sr as eb,tn as P$,ut as FR,vn as Rh,vt as Gh,wi as xh,xn as Sh,zt as Lwe}from"./main-BGSTO6NJ.js";import{a as R,g as kt$1,i as Oe,y as w}from"./chunk-CGGHRCQE.js";import{s as Ie}from"./chunk-Cwei2KlU.js";import{n as Ut}from"./chunk-PiAiIeE0.js";var U=`
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
`;var Y=[`handle`];var Z=[`input`];var ee=t=>({checked:t});function te(t,X){t&1&&MR(0)}function ie(t,X){if(t&1&&AR(0,te,1,0,`ng-container`,3),t&2){let i=Y5();kR(`ngTemplateOutlet`,i.handleTemplate||i._handleTemplate)(`ngTemplateOutletContext`,P$(2,ee,i.checked()))}}var oe=`
    ${U}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`;var ne={root:{position:`relative`}};var le={root:({instance:t})=>[`p-toggleswitch p-component`,{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":t.checked(),"p-disabled":t.$disabled(),"p-invalid":t.invalid()}],input:`p-toggleswitch-input`,slider:`p-toggleswitch-slider`,handle:`p-toggleswitch-handle`};var J=(()=>{class t extends H1{name=`toggleswitch`;style=oe;classes=le;inlineStyles=ne;static ɵfac=(()=>{let i;return function(e){return(i||(i=ch(t)))(e||t)}})();static ɵprov=Y$1({token:t,factory:t.ɵfac})}return t})();var K=new B(`TOGGLESWITCH_INSTANCE`);var de={provide:Ie,useExisting:af(()=>se),multi:!0};var se=(()=>{class t extends Ut{componentName=`ToggleSwitch`;$pcToggleSwitch=k(K,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass;tabindex;inputId;readonly;trueValue=!0;falseValue=!1;ariaLabel;size=Fh();ariaLabelledBy;autofocus;onChange=new kt;input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=k(J);templates;onHostClick(i){this.onClick(i)}onAfterContentInit(){this.templates.forEach(i=>{i.getType()===`handle`?this._handleTemplate=i.template:this._handleTemplate=i.template})}onClick(i){!this.$disabled()&&!this.readonly&&(this.writeModelValue(this.checked()?this.falseValue:this.trueValue),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:i,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue}writeControlValue(i,o){o(i),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.checked(),disabled:this.$disabled(),invalid:this.invalid()})}static ɵfac=(()=>{let i;return function(e){return(i||(i=ch(t)))(e||t)}})();static ɵcmp=ga({type:t,selectors:[[`p-toggleswitch`],[`p-toggleSwitch`],[`p-toggle-switch`]],contentQueries:function(o,e,n){if(o&1&&xh(n,Y,4)(n,Lwe,4),o&2){let l;eb(l=tb())&&(e.handleTemplate=l.first),eb(l=tb())&&(e.templates=l)}},viewQuery:function(o,e){if(o&1&&FR(Z,5),o&2){let n;eb(n=tb())&&(e.input=n.first)}},hostVars:7,hostBindings:function(o,e){o&1&&Rh(`click`,function(l){return e.onHostClick(l)}),o&2&&(Sh(`data-p-checked`,e.checked())(`data-p-disabled`,e.$disabled())(`data-p`,e.dataP),f$(e.sx(`root`)),p$(e.cn(e.cx(`root`),e.styleClass)))},inputs:{styleClass:`styleClass`,tabindex:[2,`tabindex`,`tabindex`,EH],inputId:`inputId`,readonly:[2,`readonly`,`readonly`,Fu],trueValue:`trueValue`,falseValue:`falseValue`,ariaLabel:`ariaLabel`,size:[1,`size`],ariaLabelledBy:`ariaLabelledBy`,autofocus:[2,`autofocus`,`autofocus`,Fu]},outputs:{onChange:`onChange`},features:[M$([de,J,{provide:K,useExisting:t},{provide:R,useExisting:t}]),p5([w]),DR],decls:5,vars:22,consts:[[`input`,``],[`type`,`checkbox`,`role`,`switch`,3,`focus`,`blur`,`checked`,`pAutoFocus`,`pBind`],[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(o,e){o&1&&(sh(0,`input`,1,0),Rh(`focus`,function(){return e.onFocus()})(`blur`,function(){return e.onBlur()}),K0(),sh(2,`div`,2)(3,`div`,2),M5(4,ie,1,4,`ng-container`),K0()()),o&2&&(p$(e.cx(`input`)),kR(`checked`,e.checked())(`pAutoFocus`,e.autofocus)(`pBind`,e.ptm(`input`)),Sh(`id`,e.inputId)(`required`,e.required()?``:void 0)(`disabled`,e.$disabled()?``:void 0)(`aria-checked`,e.checked())(`aria-labelledby`,e.ariaLabelledBy)(`aria-label`,e.ariaLabel)(`name`,e.name())(`tabindex`,e.tabindex),xj(2),p$(e.cx(`slider`)),kR(`pBind`,e.ptm(`slider`)),Sh(`data-p`,e.dataP),xj(),p$(e.cx(`handle`)),kR(`pBind`,e.ptm(`handle`)),Sh(`data-p`,e.dataP),xj(),O5(e.handleTemplate||e._handleTemplate?4:-1))},dependencies:[Gh,qH,Oe,Fwe,kt$1,w],encapsulation:2})}return t})();export{se as t};