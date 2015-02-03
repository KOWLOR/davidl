window.Modernizr=function(t,e,n){function i(t){p.cssText=t}function r(t,e){return typeof t===e}var o,a,s,l="2.6.2",u={},c=!0,f=e.documentElement,h="modernizr",d=e.createElement(h),p=d.style,g=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),m={},v=[],y=v.slice,x=function(t,n,i,r){var o,a,s,l,u=e.createElement("div"),c=e.body,d=c||e.createElement("body");if(parseInt(i,10))for(;i--;)s=e.createElement("div"),s.id=r?r[i]:h+(i+1),u.appendChild(s);return o=["&#173;",'<style id="s',h,'">',t,"</style>"].join(""),u.id=h,(c?u:d).innerHTML+=o,d.appendChild(u),c||(d.style.background="",d.style.overflow="hidden",l=f.style.overflow,f.style.overflow="hidden",f.appendChild(d)),a=n(u,t),c?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),f.style.overflow=l),!!a},b={}.hasOwnProperty;s=r(b,"undefined")||r(b.call,"undefined")?function(t,e){return e in t&&r(t.constructor.prototype[e],"undefined")}:function(t,e){return b.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=y.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=e.prototype;var o=new r,a=e.apply(o,n.concat(y.call(arguments)));return Object(a)===a?a:o}return e.apply(t,n.concat(y.call(arguments)))};return i}),m.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:x(["@media (",g.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n};for(var _ in m)s(m,_)&&(a=_.toLowerCase(),u[a]=m[_](),v.push((u[a]?"":"no-")+a));return u.addTest=function(t,e){if("object"==typeof t)for(var i in t)s(t,i)&&u.addTest(i,t[i]);else{if(t=t.toLowerCase(),u[t]!==n)return u;e="function"==typeof e?e():e,"undefined"!=typeof c&&c&&(f.className+=" "+(e?"":"no-")+t),u[t]=e}return u},i(""),d=o=null,function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=v.elements;return"string"==typeof t?t.split(" "):t}function r(t){var e=m[t[p]];return e||(e={},g++,t[p]=g,m[g]=e),e}function o(t,n,i){if(n||(n=e),c)return n.createElement(t);i||(i=r(n));var o;return o=i.cache[t]?i.cache[t].cloneNode():d.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),o.canHaveChildren&&!h.test(t)?i.frag.appendChild(o):o}function a(t,n){if(t||(t=e),c)return t.createDocumentFragment();n=n||r(t);for(var o=n.frag.cloneNode(),a=0,s=i(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function s(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return v.shivMethods?o(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(v,e.frag)}function l(t){t||(t=e);var i=r(t);return v.shivCSS&&!u&&!i.hasCSS&&(i.hasCSS=!!n(t,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),c||s(t,i),t}var u,c,f=t.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",g=0,m={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",u="hidden"in t,c=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){u=!0,c=!0}}();var v={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:c,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:o,createDocumentFragment:a};t.html5=v,l(e)}(this,e),u._version=l,u._prefixes=g,u.testStyles=x,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(c?" js "+v.join(" "):""),u}(this,this.document),function(t,e,n){function i(t){return"[object Function]"==m.call(t)}function r(t){return"string"==typeof t}function o(){}function a(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function s(){var t=v.shift();y=1,t?t.t?p(function(){("c"==t.t?h.injectCss:h.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),s()):y=0}function l(t,n,i,r,o,l,u){function c(e){if(!d&&a(f.readyState)&&(x.r=d=1,!y&&s(),f.onload=f.onreadystatechange=null,e)){"img"!=t&&p(function(){_.removeChild(f)},50);for(var i in T[n])T[n].hasOwnProperty(i)&&T[n][i].onload()}}var u=u||h.errorTimeout,f=e.createElement(t),d=0,m=0,x={t:i,s:n,e:o,a:l,x:u};1===T[n]&&(m=1,T[n]=[]),"object"==t?f.data=n:(f.src=n,f.type=t),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){c.call(this,m)},v.splice(r,0,x),"img"!=t&&(m||2===T[n]?(_.insertBefore(f,b?null:g),p(c,u)):T[n].push(f))}function u(t,e,n,i,o){return y=0,e=e||"j",r(t)?l("c"==e?C:w,t,e,this.i++,n,i,o):(v.splice(this.i++,0,t),1==v.length&&s()),this}function c(){var t=h;return t.loader={load:u,i:0},t}var f,h,d=e.documentElement,p=t.setTimeout,g=e.getElementsByTagName("script")[0],m={}.toString,v=[],y=0,x="MozAppearance"in d.style,b=x&&!!e.createRange().compareNode,_=b?d:g.parentNode,d=t.opera&&"[object Opera]"==m.call(t.opera),d=!!e.attachEvent&&!d,w=x?"object":d?"script":"img",C=d?"script":w,k=Array.isArray||function(t){return"[object Array]"==m.call(t)},S=[],T={},A={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};h=function(t){function e(t){var e,n,i,t=t.split("!"),r=S.length,o=t.pop(),a=t.length,o={url:o,origUrl:o,prefixes:t};for(n=0;a>n;n++)i=t[n].split("="),(e=A[i.shift()])&&(o=e(o,i));for(n=0;r>n;n++)o=S[n](o);return o}function a(t,r,o,a,s){var l=e(t),u=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(r&&(r=i(r)?r:r[t]||r[a]||r[t.split("/").pop().split("?")[0]]),l.instead?l.instead(t,r,o,a,s):(T[l.url]?l.noexec=!0:T[l.url]=1,o.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(i(r)||i(u))&&o.load(function(){c(),r&&r(l.origUrl,s,a),u&&u(l.origUrl,s,a),T[l.url]=2})))}function s(t,e){function n(t,n){if(t){if(r(t))n||(f=function(){var t=[].slice.call(arguments);h.apply(this,t),d()}),a(t,f,e,0,u);else if(Object(t)===t)for(l in s=function(){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n}(),t)t.hasOwnProperty(l)&&(!n&&!--s&&(i(f)?f=function(){var t=[].slice.call(arguments);h.apply(this,t),d()}:f[l]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),d()}}(h[l])),a(t[l],f,e,l,u))}else!n&&d()}var s,l,u=!!t.test,c=t.load||t.both,f=t.callback||o,h=f,d=t.complete||o;n(u?t.yep:t.nope,!!c),c&&n(c)}var l,u,f=this.yepnope.loader;if(r(t))a(t,0,f,0);else if(k(t))for(l=0;l<t.length;l++)u=t[l],r(u)?a(u,0,f,0):k(u)?h(u):Object(u)===u&&s(u,f);else Object(t)===t&&s(t,f)},h.addPrefix=function(t,e){A[t]=e},h.addFilter=function(t){S.push(t)},h.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",f=function(){e.removeEventListener("DOMContentLoaded",f,0),e.readyState="complete"},0)),t.yepnope=c(),t.yepnope.executeStack=s,t.yepnope.injectJs=function(t,n,i,r,l,u){var c,f,d=e.createElement("script"),r=r||h.errorTimeout;d.src=t;for(f in i)d.setAttribute(f,i[f]);n=u?s:n||o,d.onreadystatechange=d.onload=function(){!c&&a(d.readyState)&&(c=1,n(),d.onload=d.onreadystatechange=null)},p(function(){c||(c=1,n(1))},r),l?d.onload():g.parentNode.insertBefore(d,g)},t.yepnope.injectCss=function(t,n,i,r,a,l){var u,r=e.createElement("link"),n=l?s:n||o;r.href=t,r.rel="stylesheet",r.type="text/css";for(u in i)r.setAttribute(u,i[u]);a||(g.parentNode.insertBefore(r,g),p(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};