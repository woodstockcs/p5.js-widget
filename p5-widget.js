!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){var e=t.slice(0,-f.length);return w&&"http:"===window.location.protocol&&/^https:/.test(e)&&(e=e.replace("https:","http:")),e}function i(){return document.currentScript||document.querySelectorAll("script[src$='"+f+"']")[0]}function o(t){var e=t.getBoundingClientRect();return e.bottom>=0&&e.right>=0&&e.top<=(window.innerHeight||document.documentElement.clientHeight)&&e.left<=(window.innerWidth||document.documentElement.clientWidth)}function s(t){var e=parseInt(t.getAttribute("data-height"));return isNaN(e)&&(e=h.HEIGHT),e}function a(t){var e=document.createElement("a");return e.setAttribute("href",t),e.href}function c(t,e){var n=function(n){var r=["// p5.js-widget failed to retrieve "+t+"."];n&&"string"==typeof n&&r.push("// "+n),e(r.join("\n"))},r=new XMLHttpRequest;r.open("GET",t),r.onload=function(){200==r.status?e(r.responseText):n("Server returned HTTP "+r.status+".")},r.onerror=n,r.send(null)}function u(t){function e(e){p.push("sketch="+encodeURIComponent(e)),h.push("min-height: "+i+"px"),n=g+m+"?"+p.join("&"),r.setAttribute("src",n),r.setAttribute("style",h.join("; ")),t.parentNode.replaceChild(r,t)}var n,r=document.createElement("iframe"),i=s(t),o=parseInt(t.getAttribute("data-preview-width")),u=a(t.getAttribute("data-base-url")),d=t.getAttribute("data-p5-version"),l=t.hasAttribute("data-autoplay"),p=["id="+encodeURIComponent(t.getAttribute("data-id"))],h=v.slice();return!isNaN(o)&&o>=0&&p.push("previewWidth="+o),u&&p.push("baseSketchURL="+encodeURIComponent(u)),d&&p.push("p5version="+encodeURIComponent(d)),l&&p.push("autoplay=on"),t.src&&t.textContent&&t.textContent.trim()?e(['// Your widget includes both a "src" attribute and inline script',"// content, which makes no sense. Please remove one of them."].join("\n")):void(t.src?c(t.src,e):e(t.textContent))}function d(t,e){function n(){o(t)&&(clearInterval(r),window.removeEventListener("scroll",n,!1),window.removeEventListener("resize",n,!1),e(t))}var r;r=setInterval(n,1e3),window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1),n()}function l(t){var e=s(t);t.style.display="block",t.style.fontSize="0",t.style.width="100%",t.style.minHeight=e+"px",t.style.background="#f0f0f0",t.hasAttribute("data-id")||(t.setAttribute("data-id",x.toString()),x++),d(t,u)}function p(){var t=document.querySelectorAll("script[type='text/p5']");[].slice.call(t).forEach(function(t){l(t)})}var h=n(1),f="p5-widget.js",m="p5-widget.html",v=["width: 100%","background-color: white","border: 1px solid #ec245e","box-sizing: border-box"],w=!0,b=i(),g=r(b.src),E=!b.hasAttribute("data-manual"),x=1;E&&("complete"===document.readyState?p():window.addEventListener("load",p,!1)),window.p5Widget={baseURL:g,url:g+f,replaceScript:l,replaceAll:p,defaults:h}},function(t,e){"use strict";e.P5_VERSION="0.4.23",e.PREVIEW_WIDTH=150,e.HEIGHT=300}]);
//# sourceMappingURL=p5-widget.js.map
