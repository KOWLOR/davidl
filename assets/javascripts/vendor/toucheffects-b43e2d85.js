!function(t){function e(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function n(t,e){var n=r(t,e)?a:i;n(t,e)}if(Modernizr.touch){var r,i,a;"classList"in document.documentElement?(r=function(t,e){return t.classList.contains(e)},i=function(t,e){t.classList.add(e)},a=function(t,e){t.classList.remove(e)}):(r=function(t,n){return e(n).test(t.className)},i=function(t,e){r(t,e)||(t.className=t.className+" "+e)},a=function(t,n){t.className=t.className.replace(e(n)," ")});var o={hasClass:r,addClass:i,removeClass:a,toggleClass:n,has:r,add:i,remove:a,toggle:n};"function"==typeof define&&define.amd?define(o):t.classie=o,[].slice.call(document.querySelectorAll("ul.grid > li > figure")).forEach(function(t){t.querySelector("figcaption > a").addEventListener("touchstart",function(t){t.stopPropagation()},!1),t.addEventListener("touchstart",function(){o.toggle(this,"cs-hover")},!1)})}}(window);