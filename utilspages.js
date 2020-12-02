function Util(){}if(Util.hasClass=function(t,e){return t.classList?t.classList.contains(e):!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))},Util.addClass=function(t,e){var n=e.split(" ");t.classList?t.classList.add(n[0]):Util.hasClass(t,n[0])||(t.className+=" "+n[0]),n.length>1&&Util.addClass(t,n.slice(1).join(" "))},Util.removeClass=function(t,e){var n=e.split(" ");if(t.classList)t.classList.remove(n[0]);else if(Util.hasClass(t,n[0])){var s=new RegExp("(\\s|^)"+n[0]+"(\\s|$)");t.className=t.className.replace(s," ")}n.length>1&&Util.removeClass(t,n.slice(1).join(" "))},Util.toggleClass=function(t,e,n){n?Util.addClass(t,e):Util.removeClass(t,e)},Util.setAttributes=function(t,e){for(var n in e)t.setAttribute(n,e[n])},Util.getChildrenByClassName=function(t,e){t.children;for(var n=[],s=0;s<t.children.length;s++)Util.hasClass(t.children[s],e)&&n.push(t.children[s]);return n},Util.setHeight=function(t,e,n,s,o){var i=e-t,l=null,a=function(e){l||(l=e);var r=e-l,c=parseInt(r/s*i+t);n.setAttribute("style","height:"+c+"px;"),r<s?window.requestAnimationFrame(a):o()};n.setAttribute("style","height:"+t+"px;"),window.requestAnimationFrame(a)},Util.scrollTo=function(t,e,n){var s=window.scrollY||document.documentElement.scrollTop,o=null,i=function(l){o||(o=l);var a=l-o;a>e&&(a=e);var r=Math.easeInOutQuad(a,s,t-s,e);window.scrollTo(0,r),a<e?window.requestAnimationFrame(i):n&&n()};window.requestAnimationFrame(i)},Util.moveFocus=function(t){t||(t=document.getElementsByTagName("body")[0]),t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus())},Util.getIndexInArray=function(t,e){return Array.prototype.indexOf.call(t,e)},Util.cssSupports=function(t,e){return"CSS"in window?CSS.supports(t,e):t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})in document.body.style},Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;if(!document.documentElement.contains(e))return null;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}),"function"!=typeof window.CustomEvent){function CustomEvent(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}CustomEvent.prototype=window.Event.prototype,window.CustomEvent=CustomEvent}Math.easeInOutQuad=function(t,e,n,s){return(t/=s/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e},function(){var t=document.getElementsByClassName("js-cd-top")[0],e=300,n=1200,s=!1;function o(){var o=window.scrollY||document.documentElement.scrollTop;o>e?Util.addClass(t,"cd-top--is-visible"):Util.removeClass(t,"cd-top--is-visible cd-top--fade-out"),o>n&&Util.addClass(t,"cd-top--fade-out"),s=!1}t&&(window.addEventListener("scroll",function(t){s||(s=!0,window.requestAnimationFrame?window.requestAnimationFrame(o):setTimeout(o,250))}),t.addEventListener("click",function(t){t.preventDefault(),window.requestAnimationFrame?Util.scrollTo(0,700):window.scrollTo(0,0)}))}();
