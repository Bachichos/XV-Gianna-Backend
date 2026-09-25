import{t as r}from"./chunk-C9yOwMO6.js";import{$n as r5,C as Eh,Cn as ku,Cr as vh,E as FU,Ft as Yp,G as Lh,Gn as pEe,Gt as bh,Hn as oR,In as nR,Kn as pH,Mn as n5,N as HC,Nn as nB,Nr as zC,O as G5,On as mh,Pt as Yf,Qn as r$,S as ER,Sr as v5,T as F5,Tr as w5,Wt as aa,Yt as dH,_ as Dh,_t as S0,a as Af,br as uR,c as B,cn as hEe,cr as sR,dr as se,en as ej,er as rD,et as O0,ht as Rf,j as Gr,jr as yh,jt as Xf,kr as y1,nn as fH,o as At,pr as t$,q as M0,qt as d$,s as Au,sn as h5,xn as kR,yn as k,z as K,zt as _h}from"./main-OAUC4B5P.js";import{l as qt,t as At$1,u as yt}from"./chunk-DpVUZ8NT.js";import{a as mn,s as ri,t as Ii,u as xe$1}from"./chunk-B4qm_PjA.js";var ue=`
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
`;var xe=[`container`];var ye=[`icon`];var Ce=[`closeicon`];var we=[`*`];var Te=t=>({closeCallback:t});function Me(t,n){t&1&&uR(0)}function ke(t,n){if(t&1&&oR(0,Me,1,0,`ng-container`,4),t&2){let e=v5();sR(`ngTemplateOutlet`,e.iconTemplate||e._iconTemplate)}}function Ie(t,n){if(t&1&&yh(0,`i`,1),t&2){let e=v5();F5(e.cn(e.cx(`icon`),e.icon)),sR(`pBind`,e.ptm(`icon`)),mh(`data-p`,e.dataP)}}function ze(t,n){t&1&&uR(0)}function Se(t,n){if(t&1&&oR(0,ze,1,0,`ng-container`,5),t&2){let e=v5();sR(`ngTemplateOutlet`,e.containerTemplate||e._containerTemplate)(`ngTemplateOutletContext`,r$(2,Te,e.closeCallback))}}function Ne(t,n){if(t&1&&yh(0,`span`,9),t&2){let e=v5(3);sR(`pBind`,e.ptm(`text`))(`ngClass`,e.cx(`text`))(`innerHTML`,e.text,nB),mh(`data-p`,e.dataP)}}function Oe(t,n){if(t&1&&(Yf(0,`div`),oR(1,Ne,1,4,`span`,8),S0()),t&2){let e=v5(2);ej(),sR(`ngIf`,!e.escape)}}function Be(t,n){if(t&1&&(Yf(0,`span`,7),G5(1),S0()),t&2){let e=v5(3);sR(`pBind`,e.ptm(`text`))(`ngClass`,e.cx(`text`)),mh(`data-p`,e.dataP),ej(),kR(e.text)}}function Ee(t,n){if(t&1&&oR(0,Be,2,4,`span`,10),t&2){let e=v5(2);sR(`ngIf`,e.escape&&e.text)}}function Pe(t,n){if(t&1&&(oR(0,Oe,2,1,`div`,6)(1,Ee,1,1,`ng-template`,null,0,d$),Yf(3,`span`,7),_h(4),S0()),t&2){let e=w5(2),s=v5();sR(`ngIf`,!s.escape)(`ngIfElse`,e),ej(3),sR(`pBind`,s.ptm(`text`))(`ngClass`,s.cx(`text`)),mh(`data-p`,s.dataP)}}function De(t,n){if(t&1&&yh(0,`i`,7),t&2){let e=v5(2);F5(e.cn(e.cx(`closeIcon`),e.closeIcon)),sR(`pBind`,e.ptm(`closeIcon`))(`ngClass`,e.closeIcon),mh(`data-p`,e.dataP)}}function je(t,n){t&1&&uR(0)}function Ae(t,n){if(t&1&&oR(0,je,1,0,`ng-container`,4),t&2){let e=v5(2);sR(`ngTemplateOutlet`,e.closeIconTemplate||e._closeIconTemplate)}}function Fe(t,n){if(t&1&&(rD(),yh(0,`svg`,14)),t&2){let e=v5(2);F5(e.cx(`closeIcon`)),sR(`pBind`,e.ptm(`closeIcon`)),mh(`data-p`,e.dataP)}}function Le(t,n){if(t&1){let e=h5();Yf(0,`button`,11),vh(`click`,function(o){HC(e);return zC(v5().close(o))}),n5(1,De,1,5,`i`,12),n5(2,Ae,1,1,`ng-container`),n5(3,Fe,1,4,`:svg:svg`,13),S0()}if(t&2){let e=v5();F5(e.cx(`closeButton`)),sR(`pBind`,e.ptm(`closeButton`)),mh(`aria-label`,e.closeAriaLabel)(`data-p`,e.dataP),ej(),r5(e.closeIcon?1:-1),ej(),r5(e.closeIconTemplate||e._closeIconTemplate?2:-1),ej(),r5(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}var Re={root:({instance:t})=>[`p-message p-component p-message-`+t.severity,t.variant&&`p-message-`+t.variant,{"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}],contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`};var fe=(()=>{class t extends y1{name=`message`;style=ue;classes=Re;static ɵfac=(()=>{let e;return function(o){return(e||(e=Xf(t)))(o||t)}})();static ɵprov=K({token:t,factory:t.ɵfac})}return t})();var be=new B(`MESSAGE_INSTANCE`);var _e=(()=>{class t extends At$1{componentName=`Message`;_componentStyle=k(fe);bindDirectiveInstance=k(qt,{self:!0});$pcMessage=k(be,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}severity=`info`;text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions=`300ms ease-out`;hideTransitionOptions=`200ms cubic-bezier(0.86, 0, 0.07, 1)`;size;variant;motionOptions=Dh(void 0);computedMotionOptions=Au(()=>r(r({},this.ptm(`motion`)),this.motionOptions()));onClose=new At;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=se(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=e=>{this.close(e)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case`container`:this._containerTemplate=e.template;break;case`icon`:this._iconTemplate=e.template;break;case`closeicon`:this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}get dataP(){return this.cn({outlined:this.variant===`outlined`,simple:this.variant===`simple`,[this.severity]:this.severity,[this.size]:this.size})}static ɵfac=(()=>{let e;return function(o){return(e||(e=Xf(t)))(o||t)}})();static ɵcmp=aa({type:t,selectors:[[`p-message`]],contentQueries:function(s,o,u){if(s&1&&Eh(u,xe,4)(u,ye,4)(u,Ce,4)(u,hEe,4),s&2){let f;M0(f=O0())&&(o.containerTemplate=f.first),M0(f=O0())&&(o.iconTemplate=f.first),M0(f=O0())&&(o.closeIconTemplate=f.first),M0(f=O0())&&(o.templates=f)}},hostAttrs:[`role`,`alert`,`aria-live`,`polite`],hostVars:5,hostBindings:function(s,o){s&1&&(Af(function(){return`p-message-enter-active`}),Rf(function(){return`p-message-leave-active`})),s&2&&(mh(`data-p`,o.dataP),F5(o.cn(o.cx(`root`),o.styleClass)),ER(`p-message-leave-active`,!o.visible()))},inputs:{severity:`severity`,text:`text`,escape:[2,`escape`,`escape`,ku],style:`style`,styleClass:`styleClass`,closable:[2,`closable`,`closable`,ku],icon:`icon`,closeIcon:`closeIcon`,life:`life`,showTransitionOptions:`showTransitionOptions`,hideTransitionOptions:`hideTransitionOptions`,size:`size`,variant:`variant`,motionOptions:[1,`motionOptions`]},outputs:{onClose:`onClose`},features:[t$([fe,{provide:be,useExisting:t},{provide:yt,useExisting:t}]),FU([qt]),nR],ngContentSelectors:we,decls:7,vars:12,consts:[[`escapeOut`,``],[3,`pBind`],[3,`pBind`,`class`],[`pRipple`,``,`type`,`button`,3,`pBind`,`class`],[4,`ngTemplateOutlet`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[4,`ngIf`,`ngIfElse`],[3,`pBind`,`ngClass`],[3,`pBind`,`ngClass`,`innerHTML`,4,`ngIf`],[3,`pBind`,`ngClass`,`innerHTML`],[3,`pBind`,`ngClass`,4,`ngIf`],[`pRipple`,``,`type`,`button`,3,`click`,`pBind`],[3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`times`,3,`pBind`,`class`],[`data-p-icon`,`times`,3,`pBind`]],template:function(s,o){s&1&&(bh(),Yf(0,`div`,1)(1,`div`,1),n5(2,ke,1,1,`ng-container`),n5(3,Ie,1,4,`i`,2),n5(4,Se,1,4,`ng-container`)(5,Pe,5,5),n5(6,Le,4,8,`button`,3),S0()()),s&2&&(F5(o.cx(`contentWrapper`)),sR(`pBind`,o.ptm(`contentWrapper`)),mh(`data-p`,o.dataP),ej(),F5(o.cx(`content`)),sR(`pBind`,o.ptm(`content`)),mh(`data-p`,o.dataP),ej(),r5(o.iconTemplate||o._iconTemplate?2:-1),ej(),r5(o.icon?3:-1),ej(),r5(o.containerTemplate||o._containerTemplate?4:5),ej(2),r5(o.closable?6:-1))},dependencies:[Lh,dH,fH,pH,mn,xe$1,pEe,qt,Ii],encapsulation:2})}return t})();function Ge(t,n){if(t&1&&(Yf(0,`div`,7)(1,`p-message`,9),G5(2),S0()()),t&2){let e=v5();ej(2),kR(e.error())}}var he=class t{firebase_auth=k(Yp);router=k(Gr);cargando=se(!1);error=se(null);async ngOnInit(){await this.firebase_auth.restaurar_sesion()&&await this.router.navigate([`/tarjetas`])}entrar=async()=>{this.cargando.set(!0),this.error.set(null);try{if(await this.firebase_auth.login()){await this.router.navigate([`/tarjetas`]);return}this.error.set(`No pudimos iniciar sesión. Inténtelo de nuevo.`)}catch(n){this.error.set(this.mensaje_de(n?.code))}finally{this.cargando.set(!1)}};mensaje_de=n=>n===`auth/cuenta-no-autorizada`?`Esa cuenta no tiene acceso al backoffice.`:n===`auth/popup-closed-by-user`?`Cerró la ventana de Google antes de terminar.`:n===`auth/popup-blocked`?`El navegador bloqueó la ventana de Google. Permítala y vuelva a intentar.`:n===`auth/network-request-failed`?`No hay conexión. Revise su conexión a internet.`:`No pudimos iniciar sesión. Inténtelo de nuevo.`;static ɵfac=function(e){return new(e||t)};static ɵcmp=aa({type:t,selectors:[[`app-login`]],decls:14,vars:3,consts:[[1,`login`],[1,`login__tarjeta`],[`aria-hidden`,`true`,1,`login__monograma`],[1,`xv-versalita`,`login__antetitulo`],[1,`login__titulo`],[1,`login__ayuda`],[`label`,`Entrar con Google`,`icon`,`pi pi-google`,`styleClass`,`login__boton`,`size`,`large`,3,`onClick`,`fluid`,`loading`],[`role`,`alert`,1,`login__error`],[1,`xv-versalita`,`login__pie`],[`severity`,`error`]],template:function(e,s){e&1&&(Yf(0,`main`,0)(1,`section`,1)(2,`span`,2),G5(3,`XV`),S0(),Yf(4,`p`,3),G5(5,`Backoffice`),S0(),Yf(6,`h1`,4),G5(7,`Los quince de Gianna`),S0(),Yf(8,`p`,5),G5(9,`Entre con su cuenta de Google para gestionar la lista de invitados.`),S0(),Yf(10,`p-button`,6),vh(`onClick`,function(){return s.entrar()}),S0(),n5(11,Ge,3,1,`div`,7),Yf(12,`p`,8),G5(13,`3 de abril de 2027`),S0()()()),e&2&&(ej(10),sR(`fluid`,!0)(`loading`,s.cargando()),ej(),r5(s.error()?11:-1))},dependencies:[ri,_e],styles:[`.login[_ngcontent-%COMP%]{min-height:100dvh;display:grid;place-items:center;padding:1.5rem;background:radial-gradient(125% 85% at 50% -15%,var(--%NS%xv-brillo) 0%,transparent 62%),var(--%NS%xv-fondo)}.login__tarjeta[_ngcontent-%COMP%]{width:100%;max-width:28rem;display:flex;flex-direction:column;align-items:center;padding:3.5rem 2.75rem 2.75rem;text-align:center;background:var(--%NS%xv-superficie);border:1px solid var(--%NS%xv-borde);border-radius:3px;position:relative;overflow:hidden;box-shadow:0 1px 2px #0000000a,0 14px 40px -16px #00000029}.login__tarjeta[_ngcontent-%COMP%]:before{content:"";position:absolute;inset-block-start:0;inset-inline:0;height:1px;background:linear-gradient(90deg,transparent 0%,var(--%NS%xv-plata) 30%,var(--%NS%xv-plata-brillo) 50%,var(--%NS%xv-plata) 70%,transparent 100%)}.login__monograma[_ngcontent-%COMP%]{display:grid;place-items:center;width:3.75rem;height:3.75rem;margin-bottom:2rem;font-family:var(--%NS%xv-display);font-size:var(--%NS%xv-texto-lg);letter-spacing:.14em;text-indent:.14em;color:var(--%NS%p-primary-color, #5279a2);border:1px solid var(--%NS%xv-borde-fuerte);border-radius:50%}.login__antetitulo[_ngcontent-%COMP%]{margin-bottom:.85rem}.login__titulo[_ngcontent-%COMP%]{margin-bottom:1.1rem}.login__ayuda[_ngcontent-%COMP%]{margin-bottom:2.25rem;max-width:22rem;color:var(--%NS%xv-texto-tenue)}.login__error[_ngcontent-%COMP%]{width:100%;margin-top:1.15rem}.login__pie[_ngcontent-%COMP%]{width:100%;margin-top:2.5rem;padding-top:1.4rem;border-top:1px solid var(--%NS%xv-borde)}[_nghost-%COMP%]     .login__boton{letter-spacing:.04em;font-weight:var(--%NS%xv-peso-normal);font-size:var(--%NS%xv-texto-md)}`]})};export{he as LoginPage};