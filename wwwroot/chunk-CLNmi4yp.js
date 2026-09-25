var t=`https://gianna-drs-xv.web.app`;var a=`\xA1Hola {nombre}! \u{1F4AB}

Gianna cumple 15 y nos encantar\xEDa que nos acompa\xF1es.

Te dejo tu invitaci\xF3n personal, con toda la informaci\xF3n y el bot\xF3n para confirmar tu asistencia:
{link}

\u{1F4C5} S\xE1bado 3 de abril de 2027`;var i=`\xA1Hola {nombre}! \u{1F4AB}

Te escribo para recordarte que todav\xEDa no nos confirmaste si ven\xEDs a los 15 de Gianna.

Pod\xE9s responder desde tu invitaci\xF3n, con este mismo link:
{link}

Las confirmaciones cierran el 13 de marzo. \xA1Te esperamos!`;var r=e=>`${t}/i/${e}`;var s=e=>a.replace(`{nombre}`,e.nombre_mostrar??``).replace(`{link}`,r(e.id));var c=e=>`https://wa.me/${e.numero_telefono}?text=${encodeURIComponent(s(e))}`;var l=e=>{let n=i.replace(`{nombre}`,e.nombre_mostrar??``).replace(`{link}`,r(e.id));return`https://wa.me/${e.numero_telefono}?text=${encodeURIComponent(n)}`};var m=e=>{let n=(e??``).trim();if(!n)return null;let o=n.match(/\/i\/([A-Za-z0-9_-]{6,})\/?$/);return o?o[1]:/^[A-Za-z0-9_-]{15,40}$/.test(n)?n:null};export{s as a,r as i,l as n,t as o,m as r,c as t};