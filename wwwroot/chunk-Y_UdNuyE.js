import{t as r}from"./chunk-C9yOwMO6.js";import{Ar as dk,Bn as V,Br as f$,Ci as q,Dn as S5,Ei as qj,En as S$,Gn as W$,Gt as K$,Hi as ug,Hn as VD,Ht as JH,In as Uh,Kn as W5,Lr as eb,Lt as HR,Mi as sb,Mt as GB,Ni as ss,Nr as e4,Oi as r$,Rn as Uu,Ui as uh,Un as VR,Xi as xh,Xt as LR,Zt as Lh,_i as ni,dt as CD,ei as jR,fi as nH,hr as _a,ia as zf,jt as G5,ki as rIe,kr as dh,kt as G,ln as Oh,mi as nL,mn as Ph,mr as Zr,nn as Mh,on as Nh,ri as kt,tt as A,ui as n4,ut as CA,vi as nk,vt as DD,wr as c$,wt as F$,xn as Qh,xr as ab,yi as oIe,zt as Hf}from"./main-GCJZYAJC.js";import{a as R,b as yi,c as Xe,f as as,h as k,o as Ts,y as w}from"./chunk-B55awZGC.js";var be=`
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
`;var Ce=[`container`];var we=[`icon`];var Te=[`closeicon`];var Me=[`*`];var ke=t=>({closeCallback:t});function Ie(t,n){t&1&&HR(0)}function ze(t,n){if(t&1&&VR(0,Ie,1,0,`ng-container`,4),t&2){let e=c$();jR(`ngTemplateOutlet`,e.iconTemplate||e._iconTemplate)}}function Se(t,n){if(t&1&&xh(0,`i`,1),t&2){let e=c$();S$(e.cn(e.cx(`icon`),e.icon)),jR(`pBind`,e.ptm(`icon`)),Nh(`data-p`,e.dataP)}}function Ne(t,n){t&1&&HR(0)}function Oe(t,n){if(t&1&&VR(0,Ne,1,0,`ng-container`,5),t&2){let e=c$();jR(`ngTemplateOutlet`,e.containerTemplate||e._containerTemplate)(`ngTemplateOutletContext`,K$(2,ke,e.closeCallback))}}function Be(t,n){if(t&1&&xh(0,`span`,9),t&2){let e=c$(3);jR(`pBind`,e.ptm(`text`))(`ngClass`,e.cx(`text`))(`innerHTML`,e.text,GB),Nh(`data-p`,e.dataP)}}function Ee(t,n){if(t&1&&(uh(0,`div`),VR(1,Be,1,4,`span`,8),eb()),t&2){let e=c$(2);qj(),jR(`ngIf`,!e.escape)}}function Pe(t,n){if(t&1&&(uh(0,`span`,7),F$(1),eb()),t&2){let e=c$(3);jR(`pBind`,e.ptm(`text`))(`ngClass`,e.cx(`text`)),Nh(`data-p`,e.dataP),qj(),dk(e.text)}}function De(t,n){if(t&1&&VR(0,Pe,2,4,`span`,10),t&2){let e=c$(2);jR(`ngIf`,e.escape&&e.text)}}function je(t,n){if(t&1&&(VR(0,Ee,2,1,`div`,6)(1,De,1,1,`ng-template`,null,0,nH),uh(3,`span`,7),Ph(4),eb()),t&2){let e=f$(2),s=c$();jR(`ngIf`,!s.escape)(`ngIfElse`,e),qj(3),jR(`pBind`,s.ptm(`text`))(`ngClass`,s.cx(`text`)),Nh(`data-p`,s.dataP)}}function Ae(t,n){if(t&1&&xh(0,`i`,7),t&2){let e=c$(2);S$(e.cn(e.cx(`closeIcon`),e.closeIcon)),jR(`pBind`,e.ptm(`closeIcon`))(`ngClass`,e.closeIcon),Nh(`data-p`,e.dataP)}}function Fe(t,n){t&1&&HR(0)}function Le(t,n){if(t&1&&VR(0,Fe,1,0,`ng-container`,4),t&2){let e=c$(2);jR(`ngTemplateOutlet`,e.closeIconTemplate||e._closeIconTemplate)}}function Re(t,n){if(t&1&&(VD(),xh(0,`svg`,14)),t&2){let e=c$(2);S$(e.cx(`closeIcon`)),jR(`pBind`,e.ptm(`closeIcon`)),Nh(`data-p`,e.dataP)}}function Ve(t,n){if(t&1){let e=r$();uh(0,`button`,11),Mh(`click`,function(o){CD(e);return DD(c$().close(o))}),W5(1,Ae,1,5,`i`,12),W5(2,Le,1,1,`ng-container`),W5(3,Re,1,4,`:svg:svg`,13),eb()}if(t&2){let e=c$();S$(e.cx(`closeButton`)),jR(`pBind`,e.ptm(`closeButton`)),Nh(`aria-label`,e.closeAriaLabel)(`data-p`,e.dataP),qj(),G5(e.closeIcon?1:-1),qj(),G5(e.closeIconTemplate||e._closeIconTemplate?2:-1),qj(),G5(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}var He={root:({instance:t})=>[`p-message p-component p-message-`+t.severity,t.variant&&`p-message-`+t.variant,{"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}],contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`};var _e=(()=>{class t extends nL{name=`message`;style=be;classes=He;static ɵfac=(()=>{let e;return function(o){return(e||(e=dh(t)))(o||t)}})();static ɵprov=q({token:t,factory:t.ɵfac})}return t})();var he=new V(`MESSAGE_INSTANCE`);var ve=(()=>{class t extends k{componentName=`Message`;_componentStyle=A(_e);bindDirectiveInstance=A(w,{self:!0});$pcMessage=A(he,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}severity=`info`;text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions=`300ms ease-out`;hideTransitionOptions=`200ms cubic-bezier(0.86, 0, 0.07, 1)`;size;variant;motionOptions=Uh(void 0);computedMotionOptions=ss(()=>r(r({},this.ptm(`motion`)),this.motionOptions()));onClose=new kt;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=G(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=e=>{this.close(e)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case`container`:this._containerTemplate=e.template;break;case`icon`:this._iconTemplate=e.template;break;case`closeicon`:this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}get dataP(){return this.cn({outlined:this.variant===`outlined`,simple:this.variant===`simple`,[this.severity]:this.severity,[this.size]:this.size})}static ɵfac=(()=>{let e;return function(o){return(e||(e=dh(t)))(o||t)}})();static ɵcmp=_a({type:t,selectors:[[`p-message`]],contentQueries:function(s,o,u){if(s&1&&Lh(u,Ce,4)(u,we,4)(u,Te,4)(u,rIe,4),s&2){let f;sb(f=ab())&&(o.containerTemplate=f.first),sb(f=ab())&&(o.iconTemplate=f.first),sb(f=ab())&&(o.closeIconTemplate=f.first),sb(f=ab())&&(o.templates=f)}},hostAttrs:[`role`,`alert`,`aria-live`,`polite`],hostVars:5,hostBindings:function(s,o){s&1&&(Hf(function(){return`p-message-enter-active`}),zf(function(){return`p-message-leave-active`})),s&2&&(Nh(`data-p`,o.dataP),S$(o.cn(o.cx(`root`),o.styleClass)),nk(`p-message-leave-active`,!o.visible()))},inputs:{severity:`severity`,text:`text`,escape:[2,`escape`,`escape`,Uu],style:`style`,styleClass:`styleClass`,closable:[2,`closable`,`closable`,Uu],icon:`icon`,closeIcon:`closeIcon`,life:`life`,showTransitionOptions:`showTransitionOptions`,hideTransitionOptions:`hideTransitionOptions`,size:`size`,variant:`variant`,motionOptions:[1,`motionOptions`]},outputs:{onClose:`onClose`},features:[W$([_e,{provide:he,useExisting:t},{provide:R,useExisting:t}]),S5([w]),LR],ngContentSelectors:Me,decls:7,vars:12,consts:[[`escapeOut`,``],[3,`pBind`],[3,`pBind`,`class`],[`pRipple`,``,`type`,`button`,3,`pBind`,`class`],[4,`ngTemplateOutlet`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[4,`ngIf`,`ngIfElse`],[3,`pBind`,`ngClass`],[3,`pBind`,`ngClass`,`innerHTML`,4,`ngIf`],[3,`pBind`,`ngClass`,`innerHTML`],[3,`pBind`,`ngClass`,4,`ngIf`],[`pRipple`,``,`type`,`button`,3,`click`,`pBind`],[3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`times`,3,`pBind`,`class`],[`data-p-icon`,`times`,3,`pBind`]],template:function(s,o){s&1&&(Oh(),uh(0,`div`,1)(1,`div`,1),W5(2,ze,1,1,`ng-container`),W5(3,Se,1,4,`i`,2),W5(4,Oe,1,4,`ng-container`)(5,je,5,5),W5(6,Ve,4,8,`button`,3),eb()()),s&2&&(S$(o.cx(`contentWrapper`)),jR(`pBind`,o.ptm(`contentWrapper`)),Nh(`data-p`,o.dataP),qj(),S$(o.cx(`content`)),jR(`pBind`,o.ptm(`content`)),Nh(`data-p`,o.dataP),qj(),G5(o.iconTemplate||o._iconTemplate?2:-1),qj(),G5(o.icon?3:-1),qj(),G5(o.containerTemplate||o._containerTemplate?4:5),qj(2),G5(o.closable?6:-1))},dependencies:[Qh,JH,e4,n4,yi,Xe,oIe,w,Ts],encapsulation:2})}return t})();function Ge(t,n){t&1&&xh(0,`img`,3),t&2&&jR(`src`,n,CA)}function Qe(t,n){t&1&&F$(0,` XV `)}function qe(t,n){if(t&1&&(uh(0,`div`,8)(1,`p-message`,10),F$(2),eb()()),t&2){let e=c$();qj(2),dk(e.error())}}var xe=class t{firebase_auth=A(ug);router=A(Zr);marca=ni.marca.asReadonly();fecha=ss(()=>{let n=ni.configuracion().evento;return new Intl.DateTimeFormat(`es-AR`,{timeZone:n.zona,day:`numeric`,month:`long`,year:`numeric`}).format(new Date(n.fecha))});cargando=G(!1);error=G(null);async ngOnInit(){await this.firebase_auth.restaurar_sesion()&&await this.router.navigate([`/tarjetas`])}entrar=async()=>{this.cargando.set(!0),this.error.set(null);try{if(await this.firebase_auth.login()){await this.router.navigate([`/tarjetas`]);return}this.error.set(`No pudimos iniciar sesión. Inténtelo de nuevo.`)}catch(n){this.error.set(this.mensaje_de(n?.code))}finally{this.cargando.set(!1)}};mensaje_de=n=>n===`auth/cuenta-no-autorizada`?`Esa cuenta no tiene acceso al backoffice.`:n===`auth/popup-closed-by-user`?`Cerró la ventana de Google antes de terminar.`:n===`auth/popup-blocked`?`El navegador bloqueó la ventana de Google. Permítala y vuelva a intentar.`:n===`auth/network-request-failed`?`No hay conexión. Revise su conexión a internet.`:`No pudimos iniciar sesión. Inténtelo de nuevo.`;static ɵfac=function(e){return new(e||t)};static ɵcmp=_a({type:t,selectors:[[`app-login`]],decls:15,vars:6,consts:[[1,`login`],[1,`login__tarjeta`],[`aria-hidden`,`true`,1,`login__monograma`],[`alt`,``,1,`login__logo`,3,`src`],[1,`xv-versalita`,`login__antetitulo`],[1,`login__titulo`],[1,`login__ayuda`],[`label`,`Entrar con Google`,`icon`,`pi pi-google`,`styleClass`,`login__boton`,`size`,`large`,3,`onClick`,`fluid`,`loading`],[`role`,`alert`,1,`login__error`],[1,`xv-versalita`,`login__pie`],[`severity`,`error`]],template:function(e,s){if(e&1&&(uh(0,`main`,0)(1,`section`,1)(2,`span`,2),W5(3,Ge,1,1,`img`,3)(4,Qe,1,0),eb(),uh(5,`p`,4),F$(6,`Backoffice`),eb(),uh(7,`h1`,5),F$(8),eb(),uh(9,`p`,6),F$(10,`Entre con su cuenta de Google para gestionar la lista de invitados.`),eb(),uh(11,`p-button`,7),Mh(`onClick`,function(){return s.entrar()}),eb(),W5(12,qe,3,1,`div`,8),uh(13,`p`,9),F$(14),eb()()()),e&2){let o;qj(3),G5((o=s.marca().logo)?3:4,o),qj(5),dk(s.marca().nombre),qj(3),jR(`fluid`,!0)(`loading`,s.cargando()),qj(),G5(s.error()?12:-1),qj(2),dk(s.fecha())}},dependencies:[as,ve],styles:[`.login[_ngcontent-%COMP%]{min-height:100dvh;display:grid;place-items:center;padding:1.5rem;background:radial-gradient(125% 85% at 50% -15%,var(--%NS%xv-brillo) 0%,transparent 62%),var(--%NS%xv-fondo)}.login__tarjeta[_ngcontent-%COMP%]{width:100%;max-width:28rem;display:flex;flex-direction:column;align-items:center;padding:3.5rem 2.75rem 2.75rem;text-align:center;background:var(--%NS%xv-superficie);border:1px solid var(--%NS%xv-borde);border-radius:var(--%NS%xv-radio-tarjeta);position:relative;overflow:hidden;box-shadow:0 1px 2px #0000000a,0 14px 40px -16px #00000029}.login__tarjeta[_ngcontent-%COMP%]:before{content:"";position:absolute;inset-block-start:0;inset-inline:0;height:1px;background:linear-gradient(90deg,transparent 0%,var(--%NS%xv-plata) 30%,var(--%NS%xv-plata-brillo) 50%,var(--%NS%xv-plata) 70%,transparent 100%)}.login__monograma[_ngcontent-%COMP%]{overflow:hidden;display:grid;place-items:center;width:3.75rem;height:3.75rem;margin-bottom:2rem;font-family:var(--%NS%xv-display);font-size:var(--%NS%xv-texto-lg);letter-spacing:.14em;text-indent:.14em;color:var(--%NS%p-primary-color, #5279a2);border:1px solid var(--%NS%xv-borde-fuerte);border-radius:50%}.login__antetitulo[_ngcontent-%COMP%]{margin-bottom:.85rem}.login__titulo[_ngcontent-%COMP%]{margin-bottom:1.1rem}.login__ayuda[_ngcontent-%COMP%]{margin-bottom:2.25rem;max-width:22rem;color:var(--%NS%xv-texto-tenue)}.login__error[_ngcontent-%COMP%]{width:100%;margin-top:1.15rem}.login__pie[_ngcontent-%COMP%]{width:100%;margin-top:2.5rem;padding-top:1.4rem;border-top:1px solid var(--%NS%xv-borde)}[_nghost-%COMP%]     .login__boton{letter-spacing:.04em;font-weight:var(--%NS%xv-peso-normal);font-size:var(--%NS%xv-texto-md)}.login__logo[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}`]})};export{xe as LoginPage};