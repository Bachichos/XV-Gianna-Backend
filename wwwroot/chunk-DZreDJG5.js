import{t as r}from"./chunk-C9yOwMO6.js";import{An as mh,B as Kf,En as lR,F as JU,G as MU,I as K,It as Z5,Jt as c5,L as KB,Lt as ZA,N as JC,Pn as nR,Q as Oh,Qn as sH,Qt as d1,Rt as ZU,T as Gr,Wt as aEe,Xn as sEe,Yn as s$,Zt as cH,_n as jC,_r as y5,an as eR,bn as k,br as yh,c as At,cn as h5,cr as vh,ct as R0,dt as SR,er as se,ft as Sf,gt as Th,hn as iR,i as A0,ir as uR,l as B,ln as hh,lr as w0,mn as iH,n as $5,nt as Q2,pr as x5,pt as Su,qt as bh,rt as Q5,s as Af,sr as vR,st as Qf,u as BC,ut as Ru,w as Gp}from"./main-QXIKUO2F.js";import{l as qt,t as At$1,u as yt}from"./chunk-YOtBFCyM.js";import{c as xe$1,i as mn,n as ii,t as Mi}from"./chunk-CjaEnhEu.js";var ue=`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`;var xe=[`container`];var ye=[`icon`];var Ce=[`closeicon`];var we=[`*`];var Te=t=>({closeCallback:t});function Me(t,n){t&1&&iR(0)}function ke(t,n){if(t&1&&eR(0,Me,1,0,`ng-container`,4),t&2){let e=h5();nR(`ngTemplateOutlet`,e.iconTemplate||e._iconTemplate)}}function Ie(t,n){if(t&1&&yh(0,`i`,1),t&2){let e=h5();x5(e.cn(e.cx(`icon`),e.icon)),nR(`pBind`,e.ptm(`icon`)),mh(`data-p`,e.dataP)}}function ze(t,n){t&1&&iR(0)}function Se(t,n){if(t&1&&eR(0,ze,1,0,`ng-container`,5),t&2){let e=h5();nR(`ngTemplateOutlet`,e.containerTemplate||e._containerTemplate)(`ngTemplateOutletContext`,Z5(2,Te,e.closeCallback))}}function Ne(t,n){if(t&1&&yh(0,`span`,9),t&2){let e=h5(3);nR(`pBind`,e.ptm(`text`))(`ngClass`,e.cx(`text`))(`innerHTML`,e.text,Q2),mh(`data-p`,e.dataP)}}function Oe(t,n){if(t&1&&(Kf(0,`div`),eR(1,Ne,1,4,`span`,8),w0()),t&2){let e=h5(2);KB(),nR(`ngIf`,!e.escape)}}function Be(t,n){if(t&1&&(Kf(0,`span`,7),$5(1),w0()),t&2){let e=h5(3);nR(`pBind`,e.ptm(`text`))(`ngClass`,e.cx(`text`)),mh(`data-p`,e.dataP),KB(),SR(e.text)}}function Ee(t,n){if(t&1&&eR(0,Be,2,4,`span`,10),t&2){let e=h5(2);nR(`ngIf`,e.escape&&e.text)}}function Pe(t,n){if(t&1&&(eR(0,Oe,2,1,`div`,6)(1,Ee,1,1,`ng-template`,null,0,s$),Kf(3,`span`,7),lR(4),w0()),t&2){let e=y5(2),s=h5();nR(`ngIf`,!s.escape)(`ngIfElse`,e),KB(3),nR(`pBind`,s.ptm(`text`))(`ngClass`,s.cx(`text`)),mh(`data-p`,s.dataP)}}function De(t,n){if(t&1&&yh(0,`i`,7),t&2){let e=h5(2);x5(e.cn(e.cx(`closeIcon`),e.closeIcon)),nR(`pBind`,e.ptm(`closeIcon`))(`ngClass`,e.closeIcon),mh(`data-p`,e.dataP)}}function je(t,n){t&1&&iR(0)}function Ae(t,n){if(t&1&&eR(0,je,1,0,`ng-container`,4),t&2){let e=h5(2);nR(`ngTemplateOutlet`,e.closeIconTemplate||e._closeIconTemplate)}}function Fe(t,n){if(t&1&&(JC(),yh(0,`svg`,14)),t&2){let e=h5(2);x5(e.cx(`closeIcon`)),nR(`pBind`,e.ptm(`closeIcon`)),mh(`data-p`,e.dataP)}}function Le(t,n){if(t&1){let e=c5();Kf(0,`button`,11),vh(`click`,function(o){BC(e);return jC(h5().close(o))}),ZU(1,De,1,5,`i`,12),ZU(2,Ae,1,1,`ng-container`),ZU(3,Fe,1,4,`:svg:svg`,13),w0()}if(t&2){let e=h5();x5(e.cx(`closeButton`)),nR(`pBind`,e.ptm(`closeButton`)),mh(`aria-label`,e.closeAriaLabel)(`data-p`,e.dataP),KB(),JU(e.closeIcon?1:-1),KB(),JU(e.closeIconTemplate||e._closeIconTemplate?2:-1),KB(),JU(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}var Re={root:({instance:t})=>[`p-message p-component p-message-`+t.severity,t.variant&&`p-message-`+t.variant,{"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}],contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`};var fe=(()=>{class t extends d1{name=`message`;style=ue;classes=Re;static ɵfac=(()=>{let e;return function(o){return(e||(e=Qf(t)))(o||t)}})();static ɵprov=K({token:t,factory:t.ɵfac})}return t})();var be=new B(`MESSAGE_INSTANCE`);var _e=(()=>{class t extends At$1{componentName=`Message`;_componentStyle=k(fe);bindDirectiveInstance=k(qt,{self:!0});$pcMessage=k(be,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}severity=`info`;text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions=`300ms ease-out`;hideTransitionOptions=`200ms cubic-bezier(0.86, 0, 0.07, 1)`;size;variant;motionOptions=Th(void 0);computedMotionOptions=Su(()=>r(r({},this.ptm(`motion`)),this.motionOptions()));onClose=new At;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=se(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=e=>{this.close(e)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case`container`:this._containerTemplate=e.template;break;case`icon`:this._iconTemplate=e.template;break;case`closeicon`:this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}get dataP(){return this.cn({outlined:this.variant===`outlined`,simple:this.variant===`simple`,[this.severity]:this.severity,[this.size]:this.size})}static ɵfac=(()=>{let e;return function(o){return(e||(e=Qf(t)))(o||t)}})();static ɵcmp=hh({type:t,selectors:[[`p-message`]],contentQueries:function(s,o,u){if(s&1&&bh(u,xe,4)(u,ye,4)(u,Ce,4)(u,sEe,4),s&2){let f;A0(f=R0())&&(o.containerTemplate=f.first),A0(f=R0())&&(o.iconTemplate=f.first),A0(f=R0())&&(o.closeIconTemplate=f.first),A0(f=R0())&&(o.templates=f)}},hostAttrs:[`role`,`alert`,`aria-live`,`polite`],hostVars:5,hostBindings:function(s,o){s&1&&(Sf(function(){return`p-message-enter-active`}),Af(function(){return`p-message-leave-active`})),s&2&&(mh(`data-p`,o.dataP),x5(o.cn(o.cx(`root`),o.styleClass)),vR(`p-message-leave-active`,!o.visible()))},inputs:{severity:`severity`,text:`text`,escape:[2,`escape`,`escape`,Ru],style:`style`,styleClass:`styleClass`,closable:[2,`closable`,`closable`,Ru],icon:`icon`,closeIcon:`closeIcon`,life:`life`,showTransitionOptions:`showTransitionOptions`,hideTransitionOptions:`hideTransitionOptions`,size:`size`,variant:`variant`,motionOptions:[1,`motionOptions`]},outputs:{onClose:`onClose`},features:[Q5([fe,{provide:be,useExisting:t},{provide:yt,useExisting:t}]),MU([qt]),ZA],ngContentSelectors:we,decls:7,vars:12,consts:[[`escapeOut`,``],[3,`pBind`],[3,`pBind`,`class`],[`pRipple`,``,`type`,`button`,3,`pBind`,`class`],[4,`ngTemplateOutlet`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[4,`ngIf`,`ngIfElse`],[3,`pBind`,`ngClass`],[3,`pBind`,`ngClass`,`innerHTML`,4,`ngIf`],[3,`pBind`,`ngClass`,`innerHTML`],[3,`pBind`,`ngClass`,4,`ngIf`],[`pRipple`,``,`type`,`button`,3,`click`,`pBind`],[3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`times`,3,`pBind`,`class`],[`data-p-icon`,`times`,3,`pBind`]],template:function(s,o){s&1&&(uR(),Kf(0,`div`,1)(1,`div`,1),ZU(2,ke,1,1,`ng-container`),ZU(3,Ie,1,4,`i`,2),ZU(4,Se,1,4,`ng-container`)(5,Pe,5,5),ZU(6,Le,4,8,`button`,3),w0()()),s&2&&(x5(o.cx(`contentWrapper`)),nR(`pBind`,o.ptm(`contentWrapper`)),mh(`data-p`,o.dataP),KB(),x5(o.cx(`content`)),nR(`pBind`,o.ptm(`content`)),mh(`data-p`,o.dataP),KB(),JU(o.iconTemplate||o._iconTemplate?2:-1),KB(),JU(o.icon?3:-1),KB(),JU(o.containerTemplate||o._containerTemplate?4:5),KB(2),JU(o.closable?6:-1))},dependencies:[Oh,iH,sH,cH,mn,xe$1,aEe,qt,Mi],encapsulation:2})}return t})();function Ge(t,n){if(t&1&&(Kf(0,`div`,7)(1,`p-message`,9),$5(2),w0()()),t&2){let e=h5();KB(2),SR(e.error())}}var he=class t{firebase_auth=k(Gp);router=k(Gr);cargando=se(!1);error=se(null);async ngOnInit(){await this.firebase_auth.restaurar_sesion()&&await this.router.navigate([`/tarjetas`])}entrar=async()=>{this.cargando.set(!0),this.error.set(null);try{if(await this.firebase_auth.login()){await this.router.navigate([`/tarjetas`]);return}this.error.set(`No pudimos iniciar sesión. Inténtelo de nuevo.`)}catch(n){this.error.set(this.mensaje_de(n?.code))}finally{this.cargando.set(!1)}};mensaje_de=n=>n===`auth/cuenta-no-autorizada`?`Esa cuenta no tiene acceso al backoffice.`:n===`auth/popup-closed-by-user`?`Cerró la ventana de Google antes de terminar.`:n===`auth/popup-blocked`?`El navegador bloqueó la ventana de Google. Permítala y vuelva a intentar.`:n===`auth/network-request-failed`?`No hay conexión. Revise su conexión a internet.`:`No pudimos iniciar sesión. Inténtelo de nuevo.`;static ɵfac=function(e){return new(e||t)};static ɵcmp=hh({type:t,selectors:[[`app-login`]],decls:14,vars:3,consts:[[1,`login`],[1,`login__tarjeta`],[`aria-hidden`,`true`,1,`login__monograma`],[1,`xv-versalita`,`login__antetitulo`],[1,`login__titulo`],[1,`login__ayuda`],[`label`,`Entrar con Google`,`icon`,`pi pi-google`,`styleClass`,`login__boton`,`size`,`large`,3,`onClick`,`fluid`,`loading`],[`role`,`alert`,1,`login__error`],[1,`xv-versalita`,`login__pie`],[`severity`,`error`]],template:function(e,s){e&1&&(Kf(0,`main`,0)(1,`section`,1)(2,`span`,2),$5(3,`XV`),w0(),Kf(4,`p`,3),$5(5,`Backoffice`),w0(),Kf(6,`h1`,4),$5(7,`Los quince de Gianna`),w0(),Kf(8,`p`,5),$5(9,`Entre con su cuenta de Google para gestionar la lista de invitados.`),w0(),Kf(10,`p-button`,6),vh(`onClick`,function(){return s.entrar()}),w0(),ZU(11,Ge,3,1,`div`,7),Kf(12,`p`,8),$5(13,`3 de abril de 2027`),w0()()()),e&2&&(KB(10),nR(`fluid`,!0)(`loading`,s.cargando()),KB(),JU(s.error()?11:-1))},dependencies:[ii,_e],styles:[`.login[_ngcontent-%COMP%]{min-height:100dvh;display:grid;place-items:center;padding:1.5rem;background:radial-gradient(125% 85% at 50% -15%,var(--%NS%xv-brillo) 0%,transparent 62%),var(--%NS%xv-fondo)}.login__tarjeta[_ngcontent-%COMP%]{width:100%;max-width:28rem;display:flex;flex-direction:column;align-items:center;padding:3.5rem 2.75rem 2.75rem;text-align:center;background:var(--%NS%xv-superficie);border:1px solid var(--%NS%xv-borde);border-radius:3px;position:relative;overflow:hidden;box-shadow:0 1px 2px #0000000a,0 14px 40px -16px #00000029}.login__tarjeta[_ngcontent-%COMP%]:before{content:"";position:absolute;inset-block-start:0;inset-inline:0;height:1px;background:linear-gradient(90deg,transparent 0%,var(--%NS%xv-plata) 30%,var(--%NS%xv-plata-brillo) 50%,var(--%NS%xv-plata) 70%,transparent 100%)}.login__monograma[_ngcontent-%COMP%]{display:grid;place-items:center;width:3.75rem;height:3.75rem;margin-bottom:2rem;font-family:var(--%NS%xv-display);font-size:var(--%NS%xv-texto-lg);letter-spacing:.14em;text-indent:.14em;color:var(--%NS%p-primary-color, #5279a2);border:1px solid var(--%NS%xv-borde-fuerte);border-radius:50%}.login__antetitulo[_ngcontent-%COMP%]{margin-bottom:.85rem}.login__titulo[_ngcontent-%COMP%]{margin-bottom:1.1rem}.login__ayuda[_ngcontent-%COMP%]{margin-bottom:2.25rem;max-width:22rem;color:var(--%NS%xv-texto-tenue)}.login__error[_ngcontent-%COMP%]{width:100%;margin-top:1.15rem}.login__pie[_ngcontent-%COMP%]{width:100%;margin-top:2.5rem;padding-top:1.4rem;border-top:1px solid var(--%NS%xv-borde)}[_nghost-%COMP%]     .login__boton{letter-spacing:.04em;font-weight:var(--%NS%xv-peso-normal);font-size:var(--%NS%xv-texto-md)}`]})};export{he as LoginPage};