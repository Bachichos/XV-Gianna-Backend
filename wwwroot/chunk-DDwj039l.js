import{t as r}from"./chunk-C9yOwMO6.js";import{$ as Ou,$n as q0,A as Ih,An as la,Ar as xu,F as K5,Fr as z0,H as MEe,Ht as bR,I as KU,Jn as pD,Kn as p$,Ln as mR,Lt as _h,Mt as Zp,Or as xf,P as K,Qt as eD,Sr as wh,Tn as k,Tr as xEe,Ut as bh,V as M5,Vn as o$,W as Mf,Xt as dj,Zn as pR,_ as EH,_n as hB,_r as w$,br as wH,bt as V0,dt as T5,ft as TH,gn as h5,gt as Th,i as A1,in as f$,ir as se,jt as Zf,kt as Yr,l as Bh,nn as eh,ot as Rh,q as NR,qn as p5,rt as R5,s as B,sn as fR,sr as tD,st as Rt,v as Eh,wn as jR}from"./main-R3FNAVMH.js";import{l as qt,t as At,u as yt}from"./chunk-DoUtsc13.js";import{a as mn,s as ri,t as Ii,u as xe$1}from"./chunk--uMspY47.js";var ue=`
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
`;var xe=[`container`];var ye=[`icon`];var Ce=[`closeicon`];var we=[`*`];var Te=t=>({closeCallback:t});function Me(t,n){t&1&&bR(0)}function ke(t,n){if(t&1&&pR(0,Me,1,0,`ng-container`,4),t&2){let e=R5();mR(`ngTemplateOutlet`,e.iconTemplate||e._iconTemplate)}}function Ie(t,n){if(t&1&&_h(0,`i`,1),t&2){let e=R5();K5(e.cn(e.cx(`icon`),e.icon)),mR(`pBind`,e.ptm(`icon`)),bh(`data-p`,e.dataP)}}function ze(t,n){t&1&&bR(0)}function Se(t,n){if(t&1&&pR(0,ze,1,0,`ng-container`,5),t&2){let e=R5();mR(`ngTemplateOutlet`,e.containerTemplate||e._containerTemplate)(`ngTemplateOutletContext`,p$(2,Te,e.closeCallback))}}function Ne(t,n){if(t&1&&_h(0,`span`,9),t&2){let e=R5(3);mR(`pBind`,e.ptm(`text`))(`ngClass`,e.cx(`text`))(`innerHTML`,e.text,hB),bh(`data-p`,e.dataP)}}function Oe(t,n){if(t&1&&(Zf(0,`div`),pR(1,Ne,1,4,`span`,8),V0()),t&2){let e=R5(2);dj(),mR(`ngIf`,!e.escape)}}function Be(t,n){if(t&1&&(Zf(0,`span`,7),o$(1),V0()),t&2){let e=R5(3);mR(`pBind`,e.ptm(`text`))(`ngClass`,e.cx(`text`)),bh(`data-p`,e.dataP),dj(),jR(e.text)}}function Ee(t,n){if(t&1&&pR(0,Be,2,4,`span`,10),t&2){let e=R5(2);mR(`ngIf`,e.escape&&e.text)}}function Pe(t,n){if(t&1&&(pR(0,Oe,2,1,`div`,6)(1,Ee,1,1,`ng-template`,null,0,w$),Zf(3,`span`,7),Ih(4),V0()),t&2){let e=M5(2),s=R5();mR(`ngIf`,!s.escape)(`ngIfElse`,e),dj(3),mR(`pBind`,s.ptm(`text`))(`ngClass`,s.cx(`text`)),bh(`data-p`,s.dataP)}}function De(t,n){if(t&1&&_h(0,`i`,7),t&2){let e=R5(2);K5(e.cn(e.cx(`closeIcon`),e.closeIcon)),mR(`pBind`,e.ptm(`closeIcon`))(`ngClass`,e.closeIcon),bh(`data-p`,e.dataP)}}function je(t,n){t&1&&bR(0)}function Ae(t,n){if(t&1&&pR(0,je,1,0,`ng-container`,4),t&2){let e=R5(2);mR(`ngTemplateOutlet`,e.closeIconTemplate||e._closeIconTemplate)}}function Fe(t,n){if(t&1&&(pD(),_h(0,`svg`,14)),t&2){let e=R5(2);K5(e.cx(`closeIcon`)),mR(`pBind`,e.ptm(`closeIcon`)),bh(`data-p`,e.dataP)}}function Le(t,n){if(t&1){let e=T5();Zf(0,`button`,11),Eh(`click`,function(o){eD(e);return tD(R5().close(o))}),h5(1,De,1,5,`i`,12),h5(2,Ae,1,1,`ng-container`),h5(3,Fe,1,4,`:svg:svg`,13),V0()}if(t&2){let e=R5();K5(e.cx(`closeButton`)),mR(`pBind`,e.ptm(`closeButton`)),bh(`aria-label`,e.closeAriaLabel)(`data-p`,e.dataP),dj(),p5(e.closeIcon?1:-1),dj(),p5(e.closeIconTemplate||e._closeIconTemplate?2:-1),dj(),p5(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}var Re={root:({instance:t})=>[`p-message p-component p-message-`+t.severity,t.variant&&`p-message-`+t.variant,{"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}],contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`};var fe=(()=>{class t extends A1{name=`message`;style=ue;classes=Re;static ɵfac=(()=>{let e;return function(o){return(e||(e=eh(t)))(o||t)}})();static ɵprov=K({token:t,factory:t.ɵfac})}return t})();var be=new B(`MESSAGE_INSTANCE`);var _e=(()=>{class t extends At{componentName=`Message`;_componentStyle=k(fe);bindDirectiveInstance=k(qt,{self:!0});$pcMessage=k(be,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}severity=`info`;text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions=`300ms ease-out`;hideTransitionOptions=`200ms cubic-bezier(0.86, 0, 0.07, 1)`;size;variant;motionOptions=Rh(void 0);computedMotionOptions=xu(()=>r(r({},this.ptm(`motion`)),this.motionOptions()));onClose=new Rt;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=se(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=e=>{this.close(e)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case`container`:this._containerTemplate=e.template;break;case`icon`:this._iconTemplate=e.template;break;case`closeicon`:this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}get dataP(){return this.cn({outlined:this.variant===`outlined`,simple:this.variant===`simple`,[this.severity]:this.severity,[this.size]:this.size})}static ɵfac=(()=>{let e;return function(o){return(e||(e=eh(t)))(o||t)}})();static ɵcmp=la({type:t,selectors:[[`p-message`]],contentQueries:function(s,o,u){if(s&1&&Th(u,xe,4)(u,ye,4)(u,Ce,4)(u,xEe,4),s&2){let f;z0(f=q0())&&(o.containerTemplate=f.first),z0(f=q0())&&(o.iconTemplate=f.first),z0(f=q0())&&(o.closeIconTemplate=f.first),z0(f=q0())&&(o.templates=f)}},hostAttrs:[`role`,`alert`,`aria-live`,`polite`],hostVars:5,hostBindings:function(s,o){s&1&&(xf(function(){return`p-message-enter-active`}),Mf(function(){return`p-message-leave-active`})),s&2&&(bh(`data-p`,o.dataP),K5(o.cn(o.cx(`root`),o.styleClass)),NR(`p-message-leave-active`,!o.visible()))},inputs:{severity:`severity`,text:`text`,escape:[2,`escape`,`escape`,Ou],style:`style`,styleClass:`styleClass`,closable:[2,`closable`,`closable`,Ou],icon:`icon`,closeIcon:`closeIcon`,life:`life`,showTransitionOptions:`showTransitionOptions`,hideTransitionOptions:`hideTransitionOptions`,size:`size`,variant:`variant`,motionOptions:[1,`motionOptions`]},outputs:{onClose:`onClose`},features:[f$([fe,{provide:be,useExisting:t},{provide:yt,useExisting:t}]),KU([qt]),fR],ngContentSelectors:we,decls:7,vars:12,consts:[[`escapeOut`,``],[3,`pBind`],[3,`pBind`,`class`],[`pRipple`,``,`type`,`button`,3,`pBind`,`class`],[4,`ngTemplateOutlet`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[4,`ngIf`,`ngIfElse`],[3,`pBind`,`ngClass`],[3,`pBind`,`ngClass`,`innerHTML`,4,`ngIf`],[3,`pBind`,`ngClass`,`innerHTML`],[3,`pBind`,`ngClass`,4,`ngIf`],[`pRipple`,``,`type`,`button`,3,`click`,`pBind`],[3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`times`,3,`pBind`,`class`],[`data-p-icon`,`times`,3,`pBind`]],template:function(s,o){s&1&&(wh(),Zf(0,`div`,1)(1,`div`,1),h5(2,ke,1,1,`ng-container`),h5(3,Ie,1,4,`i`,2),h5(4,Se,1,4,`ng-container`)(5,Pe,5,5),h5(6,Le,4,8,`button`,3),V0()()),s&2&&(K5(o.cx(`contentWrapper`)),mR(`pBind`,o.ptm(`contentWrapper`)),bh(`data-p`,o.dataP),dj(),K5(o.cx(`content`)),mR(`pBind`,o.ptm(`content`)),bh(`data-p`,o.dataP),dj(),p5(o.iconTemplate||o._iconTemplate?2:-1),dj(),p5(o.icon?3:-1),dj(),p5(o.containerTemplate||o._containerTemplate?4:5),dj(2),p5(o.closable?6:-1))},dependencies:[Bh,EH,wH,TH,mn,xe$1,MEe,qt,Ii],encapsulation:2})}return t})();function Ge(t,n){if(t&1&&(Zf(0,`div`,7)(1,`p-message`,9),o$(2),V0()()),t&2){let e=R5();dj(2),jR(e.error())}}var he=class t{firebase_auth=k(Zp);router=k(Yr);cargando=se(!1);error=se(null);async ngOnInit(){await this.firebase_auth.restaurar_sesion()&&await this.router.navigate([`/tarjetas`])}entrar=async()=>{this.cargando.set(!0),this.error.set(null);try{if(await this.firebase_auth.login()){await this.router.navigate([`/tarjetas`]);return}this.error.set(`No pudimos iniciar sesión. Inténtelo de nuevo.`)}catch(n){this.error.set(this.mensaje_de(n?.code))}finally{this.cargando.set(!1)}};mensaje_de=n=>n===`auth/cuenta-no-autorizada`?`Esa cuenta no tiene acceso al backoffice.`:n===`auth/popup-closed-by-user`?`Cerró la ventana de Google antes de terminar.`:n===`auth/popup-blocked`?`El navegador bloqueó la ventana de Google. Permítala y vuelva a intentar.`:n===`auth/network-request-failed`?`No hay conexión. Revise su conexión a internet.`:`No pudimos iniciar sesión. Inténtelo de nuevo.`;static ɵfac=function(e){return new(e||t)};static ɵcmp=la({type:t,selectors:[[`app-login`]],decls:14,vars:3,consts:[[1,`login`],[1,`login__tarjeta`],[`aria-hidden`,`true`,1,`login__monograma`],[1,`xv-versalita`,`login__antetitulo`],[1,`login__titulo`],[1,`login__ayuda`],[`label`,`Entrar con Google`,`icon`,`pi pi-google`,`styleClass`,`login__boton`,`size`,`large`,3,`onClick`,`fluid`,`loading`],[`role`,`alert`,1,`login__error`],[1,`xv-versalita`,`login__pie`],[`severity`,`error`]],template:function(e,s){e&1&&(Zf(0,`main`,0)(1,`section`,1)(2,`span`,2),o$(3,`XV`),V0(),Zf(4,`p`,3),o$(5,`Backoffice`),V0(),Zf(6,`h1`,4),o$(7,`Los quince de Gianna`),V0(),Zf(8,`p`,5),o$(9,`Entre con su cuenta de Google para gestionar la lista de invitados.`),V0(),Zf(10,`p-button`,6),Eh(`onClick`,function(){return s.entrar()}),V0(),h5(11,Ge,3,1,`div`,7),Zf(12,`p`,8),o$(13,`3 de abril de 2027`),V0()()()),e&2&&(dj(10),mR(`fluid`,!0)(`loading`,s.cargando()),dj(),p5(s.error()?11:-1))},dependencies:[ri,_e],styles:[`.login[_ngcontent-%COMP%]{min-height:100dvh;display:grid;place-items:center;padding:1.5rem;background:radial-gradient(125% 85% at 50% -15%,var(--%NS%xv-brillo) 0%,transparent 62%),var(--%NS%xv-fondo)}.login__tarjeta[_ngcontent-%COMP%]{width:100%;max-width:28rem;display:flex;flex-direction:column;align-items:center;padding:3.5rem 2.75rem 2.75rem;text-align:center;background:var(--%NS%xv-superficie);border:1px solid var(--%NS%xv-borde);border-radius:3px;position:relative;overflow:hidden;box-shadow:0 1px 2px #0000000a,0 14px 40px -16px #00000029}.login__tarjeta[_ngcontent-%COMP%]:before{content:"";position:absolute;inset-block-start:0;inset-inline:0;height:1px;background:linear-gradient(90deg,transparent 0%,var(--%NS%xv-plata) 30%,var(--%NS%xv-plata-brillo) 50%,var(--%NS%xv-plata) 70%,transparent 100%)}.login__monograma[_ngcontent-%COMP%]{display:grid;place-items:center;width:3.75rem;height:3.75rem;margin-bottom:2rem;font-family:var(--%NS%xv-display);font-size:var(--%NS%xv-texto-lg);letter-spacing:.14em;text-indent:.14em;color:var(--%NS%p-primary-color, #5279a2);border:1px solid var(--%NS%xv-borde-fuerte);border-radius:50%}.login__antetitulo[_ngcontent-%COMP%]{margin-bottom:.85rem}.login__titulo[_ngcontent-%COMP%]{margin-bottom:1.1rem}.login__ayuda[_ngcontent-%COMP%]{margin-bottom:2.25rem;max-width:22rem;color:var(--%NS%xv-texto-tenue)}.login__error[_ngcontent-%COMP%]{width:100%;margin-top:1.15rem}.login__pie[_ngcontent-%COMP%]{width:100%;margin-top:2.5rem;padding-top:1.4rem;border-top:1px solid var(--%NS%xv-borde)}[_nghost-%COMP%]     .login__boton{letter-spacing:.04em;font-weight:var(--%NS%xv-peso-normal);font-size:var(--%NS%xv-texto-md)}`]})};export{he as LoginPage};