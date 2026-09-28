import{t as r}from"./chunk-C9yOwMO6.js";import{$ as DR,Ai as z5,An as Uf,Bt as M$,Cn as T$,Ct as HH,Dt as J5,Hn as Y,Ht as MR,I as $H,Jr as p5,Nr as kh,Ot as K0,Pr as kt,Ti as xj,Tr as jf,U as Ah,V as AR,Vn as Xr,Vt as M5,W as B,Wn as Y5,Xr as pD,Xt as O5,Yr as pA,Zt as OB,ai as re,bn as SD,bt as H1,ci as sg,cr as ei,ei as qH,gr as ga,gt as Fwe,hi as tb,hr as gD,ht as Fu,jr as kR,kr as k,li as sh,lr as ek,ni as qR,nr as ch,pt as Fh,qr as p$,qt as Nh,sn as Pu,sr as eb,tn as P$,vn as Rh,vt as Gh,wi as xh,xn as Sh,yt as H$,zt as Lwe}from"./main-BGSTO6NJ.js";import{a as R,b as yi,c as Xe,f as as,h as k$1,o as Ts,y as w}from"./chunk-CGGHRCQE.js";var be=`
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
`;var Ce=[`container`];var we=[`icon`];var Te=[`closeicon`];var Me=[`*`];var ke=t=>({closeCallback:t});function Ie(t,n){t&1&&MR(0)}function ze(t,n){if(t&1&&AR(0,Ie,1,0,`ng-container`,4),t&2){let e=Y5();kR(`ngTemplateOutlet`,e.iconTemplate||e._iconTemplate)}}function Se(t,n){if(t&1&&Ah(0,`i`,1),t&2){let e=Y5();p$(e.cn(e.cx(`icon`),e.icon)),kR(`pBind`,e.ptm(`icon`)),Sh(`data-p`,e.dataP)}}function Ne(t,n){t&1&&MR(0)}function Oe(t,n){if(t&1&&AR(0,Ne,1,0,`ng-container`,5),t&2){let e=Y5();kR(`ngTemplateOutlet`,e.containerTemplate||e._containerTemplate)(`ngTemplateOutletContext`,P$(2,ke,e.closeCallback))}}function Be(t,n){if(t&1&&Ah(0,`span`,9),t&2){let e=Y5(3);kR(`pBind`,e.ptm(`text`))(`ngClass`,e.cx(`text`))(`innerHTML`,e.text,OB),Sh(`data-p`,e.dataP)}}function Ee(t,n){if(t&1&&(sh(0,`div`),AR(1,Be,1,4,`span`,8),K0()),t&2){let e=Y5(2);xj(),kR(`ngIf`,!e.escape)}}function Pe(t,n){if(t&1&&(sh(0,`span`,7),T$(1),K0()),t&2){let e=Y5(3);kR(`pBind`,e.ptm(`text`))(`ngClass`,e.cx(`text`)),Sh(`data-p`,e.dataP),xj(),ek(e.text)}}function De(t,n){if(t&1&&AR(0,Pe,2,4,`span`,10),t&2){let e=Y5(2);kR(`ngIf`,e.escape&&e.text)}}function je(t,n){if(t&1&&(AR(0,Ee,2,1,`div`,6)(1,De,1,1,`ng-template`,null,0,H$),sh(3,`span`,7),Nh(4),K0()),t&2){let e=J5(2),s=Y5();kR(`ngIf`,!s.escape)(`ngIfElse`,e),xj(3),kR(`pBind`,s.ptm(`text`))(`ngClass`,s.cx(`text`)),Sh(`data-p`,s.dataP)}}function Ae(t,n){if(t&1&&Ah(0,`i`,7),t&2){let e=Y5(2);p$(e.cn(e.cx(`closeIcon`),e.closeIcon)),kR(`pBind`,e.ptm(`closeIcon`))(`ngClass`,e.closeIcon),Sh(`data-p`,e.dataP)}}function Fe(t,n){t&1&&MR(0)}function Le(t,n){if(t&1&&AR(0,Fe,1,0,`ng-container`,4),t&2){let e=Y5(2);kR(`ngTemplateOutlet`,e.closeIconTemplate||e._closeIconTemplate)}}function Re(t,n){if(t&1&&(SD(),Ah(0,`svg`,14)),t&2){let e=Y5(2);p$(e.cx(`closeIcon`)),kR(`pBind`,e.ptm(`closeIcon`)),Sh(`data-p`,e.dataP)}}function Ve(t,n){if(t&1){let e=z5();sh(0,`button`,11),Rh(`click`,function(o){pD(e);return gD(Y5().close(o))}),M5(1,Ae,1,5,`i`,12),M5(2,Le,1,1,`ng-container`),M5(3,Re,1,4,`:svg:svg`,13),K0()}if(t&2){let e=Y5();p$(e.cx(`closeButton`)),kR(`pBind`,e.ptm(`closeButton`)),Sh(`aria-label`,e.closeAriaLabel)(`data-p`,e.dataP),xj(),O5(e.closeIcon?1:-1),xj(),O5(e.closeIconTemplate||e._closeIconTemplate?2:-1),xj(),O5(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}var He={root:({instance:t})=>[`p-message p-component p-message-`+t.severity,t.variant&&`p-message-`+t.variant,{"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}],contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`};var _e=(()=>{class t extends H1{name=`message`;style=be;classes=He;static ɵfac=(()=>{let e;return function(o){return(e||(e=ch(t)))(o||t)}})();static ɵprov=Y({token:t,factory:t.ɵfac})}return t})();var he=new B(`MESSAGE_INSTANCE`);var ve=(()=>{class t extends k$1{componentName=`Message`;_componentStyle=k(_e);bindDirectiveInstance=k(w,{self:!0});$pcMessage=k(he,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}severity=`info`;text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions=`300ms ease-out`;hideTransitionOptions=`200ms cubic-bezier(0.86, 0, 0.07, 1)`;size;variant;motionOptions=Fh(void 0);computedMotionOptions=Pu(()=>r(r({},this.ptm(`motion`)),this.motionOptions()));onClose=new kt;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=re(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=e=>{this.close(e)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case`container`:this._containerTemplate=e.template;break;case`icon`:this._iconTemplate=e.template;break;case`closeicon`:this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}get dataP(){return this.cn({outlined:this.variant===`outlined`,simple:this.variant===`simple`,[this.severity]:this.severity,[this.size]:this.size})}static ɵfac=(()=>{let e;return function(o){return(e||(e=ch(t)))(o||t)}})();static ɵcmp=ga({type:t,selectors:[[`p-message`]],contentQueries:function(s,o,u){if(s&1&&xh(u,Ce,4)(u,we,4)(u,Te,4)(u,Lwe,4),s&2){let f;eb(f=tb())&&(o.containerTemplate=f.first),eb(f=tb())&&(o.iconTemplate=f.first),eb(f=tb())&&(o.closeIconTemplate=f.first),eb(f=tb())&&(o.templates=f)}},hostAttrs:[`role`,`alert`,`aria-live`,`polite`],hostVars:5,hostBindings:function(s,o){s&1&&(jf(function(){return`p-message-enter-active`}),Uf(function(){return`p-message-leave-active`})),s&2&&(Sh(`data-p`,o.dataP),p$(o.cn(o.cx(`root`),o.styleClass)),qR(`p-message-leave-active`,!o.visible()))},inputs:{severity:`severity`,text:`text`,escape:[2,`escape`,`escape`,Fu],style:`style`,styleClass:`styleClass`,closable:[2,`closable`,`closable`,Fu],icon:`icon`,closeIcon:`closeIcon`,life:`life`,showTransitionOptions:`showTransitionOptions`,hideTransitionOptions:`hideTransitionOptions`,size:`size`,variant:`variant`,motionOptions:[1,`motionOptions`]},outputs:{onClose:`onClose`},features:[M$([_e,{provide:he,useExisting:t},{provide:R,useExisting:t}]),p5([w]),DR],ngContentSelectors:Me,decls:7,vars:12,consts:[[`escapeOut`,``],[3,`pBind`],[3,`pBind`,`class`],[`pRipple`,``,`type`,`button`,3,`pBind`,`class`],[4,`ngTemplateOutlet`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[4,`ngIf`,`ngIfElse`],[3,`pBind`,`ngClass`],[3,`pBind`,`ngClass`,`innerHTML`,4,`ngIf`],[3,`pBind`,`ngClass`,`innerHTML`],[3,`pBind`,`ngClass`,4,`ngIf`],[`pRipple`,``,`type`,`button`,3,`click`,`pBind`],[3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`times`,3,`pBind`,`class`],[`data-p-icon`,`times`,3,`pBind`]],template:function(s,o){s&1&&(kh(),sh(0,`div`,1)(1,`div`,1),M5(2,ze,1,1,`ng-container`),M5(3,Se,1,4,`i`,2),M5(4,Oe,1,4,`ng-container`)(5,je,5,5),M5(6,Ve,4,8,`button`,3),K0()()),s&2&&(p$(o.cx(`contentWrapper`)),kR(`pBind`,o.ptm(`contentWrapper`)),Sh(`data-p`,o.dataP),xj(),p$(o.cx(`content`)),kR(`pBind`,o.ptm(`content`)),Sh(`data-p`,o.dataP),xj(),O5(o.iconTemplate||o._iconTemplate?2:-1),xj(),O5(o.icon?3:-1),xj(),O5(o.containerTemplate||o._containerTemplate?4:5),xj(2),O5(o.closable?6:-1))},dependencies:[Gh,$H,HH,qH,yi,Xe,Fwe,w,Ts],encapsulation:2})}return t})();function Ge(t,n){t&1&&Ah(0,`img`,3),t&2&&kR(`src`,n,pA)}function Qe(t,n){t&1&&T$(0,` XV `)}function qe(t,n){if(t&1&&(sh(0,`div`,8)(1,`p-message`,10),T$(2),K0()()),t&2){let e=Y5();xj(2),ek(e.error())}}var xe=class t{firebase_auth=k(sg);router=k(Xr);marca=ei.marca.asReadonly();fecha=Pu(()=>{let n=ei.configuracion().evento;return new Intl.DateTimeFormat(`es-AR`,{timeZone:n.zona,day:`numeric`,month:`long`,year:`numeric`}).format(new Date(n.fecha))});cargando=re(!1);error=re(null);async ngOnInit(){await this.firebase_auth.restaurar_sesion()&&await this.router.navigate([`/tarjetas`])}entrar=async()=>{this.cargando.set(!0),this.error.set(null);try{if(await this.firebase_auth.login()){await this.router.navigate([`/tarjetas`]);return}this.error.set(`No pudimos iniciar sesión. Inténtelo de nuevo.`)}catch(n){this.error.set(this.mensaje_de(n?.code))}finally{this.cargando.set(!1)}};mensaje_de=n=>n===`auth/cuenta-no-autorizada`?`Esa cuenta no tiene acceso al backoffice.`:n===`auth/popup-closed-by-user`?`Cerró la ventana de Google antes de terminar.`:n===`auth/popup-blocked`?`El navegador bloqueó la ventana de Google. Permítala y vuelva a intentar.`:n===`auth/network-request-failed`?`No hay conexión. Revise su conexión a internet.`:`No pudimos iniciar sesión. Inténtelo de nuevo.`;static ɵfac=function(e){return new(e||t)};static ɵcmp=ga({type:t,selectors:[[`app-login`]],decls:15,vars:6,consts:[[1,`login`],[1,`login__tarjeta`],[`aria-hidden`,`true`,1,`login__monograma`],[`alt`,``,1,`login__logo`,3,`src`],[1,`xv-versalita`,`login__antetitulo`],[1,`login__titulo`],[1,`login__ayuda`],[`label`,`Entrar con Google`,`icon`,`pi pi-google`,`styleClass`,`login__boton`,`size`,`large`,3,`onClick`,`fluid`,`loading`],[`role`,`alert`,1,`login__error`],[1,`xv-versalita`,`login__pie`],[`severity`,`error`]],template:function(e,s){if(e&1&&(sh(0,`main`,0)(1,`section`,1)(2,`span`,2),M5(3,Ge,1,1,`img`,3)(4,Qe,1,0),K0(),sh(5,`p`,4),T$(6,`Backoffice`),K0(),sh(7,`h1`,5),T$(8),K0(),sh(9,`p`,6),T$(10,`Entre con su cuenta de Google para gestionar la lista de invitados.`),K0(),sh(11,`p-button`,7),Rh(`onClick`,function(){return s.entrar()}),K0(),M5(12,qe,3,1,`div`,8),sh(13,`p`,9),T$(14),K0()()()),e&2){let o;xj(3),O5((o=s.marca().logo)?3:4,o),xj(5),ek(s.marca().nombre),xj(3),kR(`fluid`,!0)(`loading`,s.cargando()),xj(),O5(s.error()?12:-1),xj(2),ek(s.fecha())}},dependencies:[as,ve],styles:[`.login[_ngcontent-%COMP%]{min-height:100dvh;display:grid;place-items:center;padding:1.5rem;background:radial-gradient(125% 85% at 50% -15%,var(--%NS%xv-brillo) 0%,transparent 62%),var(--%NS%xv-fondo)}.login__tarjeta[_ngcontent-%COMP%]{width:100%;max-width:28rem;display:flex;flex-direction:column;align-items:center;padding:3.5rem 2.75rem 2.75rem;text-align:center;background:var(--%NS%xv-superficie);border:1px solid var(--%NS%xv-borde);border-radius:3px;position:relative;overflow:hidden;box-shadow:0 1px 2px #0000000a,0 14px 40px -16px #00000029}.login__tarjeta[_ngcontent-%COMP%]:before{content:"";position:absolute;inset-block-start:0;inset-inline:0;height:1px;background:linear-gradient(90deg,transparent 0%,var(--%NS%xv-plata) 30%,var(--%NS%xv-plata-brillo) 50%,var(--%NS%xv-plata) 70%,transparent 100%)}.login__monograma[_ngcontent-%COMP%]{overflow:hidden;display:grid;place-items:center;width:3.75rem;height:3.75rem;margin-bottom:2rem;font-family:var(--%NS%xv-display);font-size:var(--%NS%xv-texto-lg);letter-spacing:.14em;text-indent:.14em;color:var(--%NS%p-primary-color, #5279a2);border:1px solid var(--%NS%xv-borde-fuerte);border-radius:50%}.login__antetitulo[_ngcontent-%COMP%]{margin-bottom:.85rem}.login__titulo[_ngcontent-%COMP%]{margin-bottom:1.1rem}.login__ayuda[_ngcontent-%COMP%]{margin-bottom:2.25rem;max-width:22rem;color:var(--%NS%xv-texto-tenue)}.login__error[_ngcontent-%COMP%]{width:100%;margin-top:1.15rem}.login__pie[_ngcontent-%COMP%]{width:100%;margin-top:2.5rem;padding-top:1.4rem;border-top:1px solid var(--%NS%xv-borde)}[_nghost-%COMP%]     .login__boton{letter-spacing:.04em;font-weight:var(--%NS%xv-peso-normal);font-size:var(--%NS%xv-texto-md)}.login__logo[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}`]})};export{xe as LoginPage};