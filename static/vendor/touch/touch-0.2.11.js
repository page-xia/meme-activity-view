var touch=touch||{};!function(e,t){"use strict";function n(e){if(C){for(var t=[],n=null,r=0,o=e.touches.length;o>r;r++)n=e.touches[r],t.push({x:n.pageX,y:n.pageY});return t}return[{x:e.pageX,y:e.pageY}]}function r(e,t){var n=t.x-e.x,r=t.y-e.y;return Math.sqrt(n*n+r*r)}function o(e){return e.touches?e.touches.length:1}function i(e,t){if(e.length>=2&&t.length>=2){var n=r(e[1],e[0]),o=r(t[1],t[0]);return o/n}return 1}function a(e,t){return 180*Math.atan2(t.y-e.y,t.x-e.x)/Math.PI}function s(e,t){var n=Math.atan(-1*(t.y-e.y)/(t.x-e.x))*(180/Math.PI);return 0>n?n+180:n}function u(e){var t={up:-45>e&&e>-135,down:e>=45&&135>e,left:e>=135||-135>=e,right:e>=-45&&45>=e};for(var n in t)if(t[n])return n;return null}function c(e){for(var t=0,n=0;e.offsetParent;)t+=e.offsetLeft,n+=e.offsetTop,e=e.offsetParent;return{left:t,top:n}}function f(){_=D=R=null,U=H=x=b=!1,L=!1,N={},k=!1}function l(e){return"touchmove"===e.type||"mousemove"===e.type}function p(e){return"touchend"===e.type||"mouseup"===e.type||"touchcancel"===e.type}function v(){var t=C?"touchstart touchmove touchend touchcancel":"mouseup mousedown mousemove mouseout";Q(e,t,K)}var g=function(){var e=window.navigator,t=e.userAgent,n=t.match(/(Android)[\s\/]+([\d\.]+)/),r=t.match(/(iPad|iPhone|iPod)\s+OS\s([\d_\.]+)/),o=t.match(/(Windows\s+Phone)\s([\d\.]+)/),i=/WebKit\/[\d.]+/i.test(t),a=r?e.standalone?i:/Safari/i.test(t)&&!/CriOS/i.test(t)&&!/MQQBrowser/i.test(t):!1,s={};return n&&(s.android=!0,s.version=n[2]),r&&(s.ios=!0,s.version=r[2].replace(/_/g,"."),s.ios7=/^7/.test(s.version),"iPad"===r[1]?s.ipad=!0:"iPhone"===r[1]?(s.iphone=!0,s.iphone5=568==screen.height):"iPod"===r[1]&&(s.ipod=!0)),o&&(s.wp=!0,s.version=o[2],s.wp8=/^8/.test(s.version)),i&&(s.webkit=!0),a&&(s.safari=!0),s}(),h={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",touchcancel:"mouseout"},d={getType:function(e){return Object.prototype.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},getSelector:function(e){if(e.id)return"#"+e.id;if(e.className){var t=e.className.split(/\s+/);return"."+t.join(".")}return e===document?"body":e.tagName.toLowerCase()},matchSelector:function(e,t){return e.webkitMatchesSelector(t)},getEventListeners:function(e){return e.listeners},getPCevts:function(e){return h[e]||e},forceReflow:function(){var e=document.getElementById("domTreeOp");e||(e=document.createElement("div"),e.id="domTreeOp",document.body.appendChild(e));var t=e.parentNode,n=e.nextSibling;t.removeChild(e),t.insertBefore(e,n)},simpleClone:function(e){return JSON.parse(JSON.stringify(e))}},m=0,E=[],T=function(e,t,n){n=n||{};var r,o={bubbles:!0,cancelable:!0,detail:n};"undefined"!=typeof CustomEvent?(r=new CustomEvent(t,o),e&&e.dispatchEvent(r)):(r=document.createEvent("CustomEvent"),r.initCustomEvent(t,!0,!0,n),e&&e.dispatchEvent(r))},y=function(e,t,n){e.listeners=e.listeners||{},e.listeners[t]?e.listeners[t].push(n):e.listeners[t]=[n];var r=function(e){g.ios7&&d.forceReflow(),e.originEvent=e,e.startRotate=function(){k=!0};for(var t in e.detail)"type"!==t&&(e[t]=e.detail[t]);var r=n.call(e.target,e);"undefined"==typeof r||r||(e.stopPropagation(),e.preventDefault())};n.proxy=n.proxy||{},n.proxy[t]?n.proxy[t].push(m++):n.proxy[t]=[m++],E.push(r),e.addEventListener&&e.addEventListener(t,r,!1)},P=function(e,t,n){if(n){var r=n.proxy[t];r&&r.length&&r.forEach(function(n){e.removeEventListener&&e.removeEventListener(t,E[n],!1)})}else{var o=e.listeners[t];o&&o.length&&o.forEach(function(n){e.removeEventListener(t,n,!1)})}},w=function(e,t,n,r){var o=function(t){var o,i;t.originEvent=t,t.startRotate=function(){k=!0};for(var a in t.detail)"type"!==a&&(t[a]=t.detail[a]);var s=d.getSelector(e)+" "+n,u=d.matchSelector(t.target,s),c=d.matchSelector(t.target,s+" "+t.target.nodeName);if(!u&&c){for(g.ios7&&d.forceReflow(),o=t.target;!d.matchSelector(o,s);)o=o.parentNode;i=r.call(t.target,t),"undefined"==typeof i||i||(t.stopPropagation(),t.preventDefault())}else g.ios7&&d.forceReflow(),(u||c)&&(i=r.call(t.target,t),"undefined"==typeof i||i||(t.stopPropagation(),t.preventDefault()))};r.proxy=r.proxy||{},r.proxy[t]?r.proxy[t].push(m++):r.proxy[t]=[m++],E.push(o),e.listeners=e.listeners||{},e.listeners[t]?e.listeners[t].push(o):e.listeners[t]=[o],e.addEventListener&&e.addEventListener(t,o,!1)},S=function(e,t,n,r){if(r){var o=r.proxy[t];o.length&&o.forEach(function(n){e.removeEventListener&&e.removeEventListener(t,E[n],!1)})}else{var i=e.listeners[t];i.forEach(function(n){e.removeEventListener(t,n,!1)})}},I={tap:!0,doubleTap:!0,tapMaxDistance:10,hold:!0,holdTime:650,maxDoubleTapInterval:300,swipe:!0,swipeTime:300,swipeMinDistance:18,swipeFactor:5,drag:!0,pinch:!0,minScaleRate:0,minRotationAngle:0},C="ontouchstart"in window,O={TOUCH_START:"touchstart",TOUCH_MOVE:"touchmove",TOUCH_END:"touchend",TOUCH_CANCEL:"touchcancel",MOUSE_DOWN:"mousedown",MOUSE_MOVE:"mousemove",MOUSE_UP:"mouseup",CLICK:"click",PINCH_START:"pinchstart",PINCH_END:"pinchend",PINCH:"pinch",PINCH_IN:"pinchin",PINCH_OUT:"pinchout",ROTATION_LEFT:"rotateleft",ROTATION_RIGHT:"rotateright",ROTATION:"rotate",SWIPE_START:"swipestart",SWIPING:"swiping",SWIPE_END:"swipeend",SWIPE_LEFT:"swipeleft",SWIPE_RIGHT:"swiperight",SWIPE_UP:"swipeup",SWIPE_DOWN:"swipedown",SWIPE:"swipe",DRAG:"drag",DRAGSTART:"dragstart",DRAGEND:"dragend",HOLD:"hold",TAP:"tap",DOUBLE_TAP:"doubletap"},N={start:null,move:null,end:null},A=0,_=null,D=null,R=null,x=!1,b=!1,L=!1,W={},H=!1,M=null,U=!1,G=null,F=1,k=!1,B=[],j=0,q=0,X=0,Y=null,J={_getAngleDiff:function(e){for(var t=parseInt(j-s(e[0],e[1]),10),n=0;Math.abs(t-q)>90&&n++<50;)0>q?t-=180:t+=180;return q=parseInt(t,10)},pinch:function(e){var t=e.target;if(I.pinch){if(!H)return;if(o(e)<2&&!p(e))return;var n=i(N.start,N.move),r=this._getAngleDiff(N.move),a={type:"",originEvent:e,scale:n,rotation:r,direction:r>0?"right":"left",fingersCount:o(e)};if(b?l(e)?(a.fingerStatus="move",T(t,O.PINCH,a)):p(e)&&(a.fingerStatus="end",T(t,O.PINCH_END,a),f()):(b=!0,a.fingerStatus="start",T(t,O.PINCH_START,a)),Math.abs(1-n)>I.minScaleRate){var s=d.simpleClone(a),u=1e-11;n>F?(F=n-u,T(t,O.PINCH_OUT,s,!1)):F>n&&(F=n+u,T(t,O.PINCH_IN,s,!1)),p(e)&&(F=1)}if(Math.abs(r)>I.minRotationAngle){var c,v=d.simpleClone(a);c=r>0?O.ROTATION_RIGHT:O.ROTATION_LEFT,T(t,c,v,!1),T(t,O.ROTATION,a)}}},rotateSingleFinger:function(e){var t=e.target;if(k&&o(e)<2){if(!N.move)return;if(B.length<2){var n=c(t);B=[{x:n.left+t.offsetWidth/2,y:n.top+t.offsetHeight/2},N.move[0]],j=parseInt(s(B[0],B[1]),10)}var r=[B[0],N.move[0]],i=this._getAngleDiff(r),a={type:"",originEvent:e,rotation:i,direction:i>0?"right":"left",fingersCount:o(e)};l(e)?a.fingerStatus="move":(p(e)||"mouseout"===e.type)&&(a.fingerStatus="end",T(t,O.PINCH_END,a),f());var u=i>0?O.ROTATION_RIGHT:O.ROTATION_LEFT;T(t,u,a),T(t,O.ROTATION,a)}},swipe:function(e){var t=e.target;if(H&&N.move&&!(o(e)>1)){var n=Date.now(),i=n-A,s=r(N.start[0],N.move[0]),c={x:N.move[0].x-W.left,y:N.move[0].y-W.top},f=a(N.start[0],N.move[0]),v=u(f),g=i/1e3,h=10*(10-I.swipeFactor)*g*g,d={type:O.SWIPE,originEvent:e,position:c,direction:v,distance:s,distanceX:N.move[0].x-N.start[0].x,distanceY:N.move[0].y-N.start[0].y,x:N.move[0].x-N.start[0].x,y:N.move[0].y-N.start[0].y,angle:f,duration:i,fingersCount:o(e),factor:h};if(I.swipe){var m=function(){var e=O;switch(v){case"up":T(t,e.SWIPE_UP,d);break;case"down":T(t,e.SWIPE_DOWN,d);break;case"left":T(t,e.SWIPE_LEFT,d);break;case"right":T(t,e.SWIPE_RIGHT,d)}};x?l(e)?(d.fingerStatus=d.swipe="move",T(t,O.SWIPING,d),i>I.swipeTime&&i<I.swipeTime+50&&s>I.swipeMinDistance&&(m(),T(t,O.SWIPE,d,!1))):(p(e)||"mouseout"===e.type)&&(d.fingerStatus=d.swipe="end",T(t,O.SWIPE_END,d),I.swipeTime>i&&s>I.swipeMinDistance&&(m(),T(t,O.SWIPE,d,!1))):(d.fingerStatus=d.swipe="start",x=!0,T(t,O.SWIPE_START,d))}I.drag&&(L?l(e)?(d.fingerStatus=d.swipe="move",T(t,O.DRAG,d)):p(e)&&(d.fingerStatus=d.swipe="end",T(t,O.DRAGEND,d)):(d.fingerStatus=d.swipe="start",L=!0,T(t,O.DRAGSTART,d)))}},tap:function(e){var t=e.target;if(I.tap){var n=Date.now(),i=n-A,a=r(N.start[0],N.move?N.move[0]:N.start[0]);clearTimeout(M);var s=function(){if(Y&&I.doubleTap&&A-X<I.maxDoubleTapInterval){var e=r(Y,N.start[0]);if(16>e)return!0}return!1}();if(s)return clearTimeout(G),void T(t,O.DOUBLE_TAP,{type:O.DOUBLE_TAP,originEvent:e,position:N.start[0]});if(I.tapMaxDistance<a)return;I.holdTime>i&&o(e)<=1&&(U=!0,X=n,Y=N.start[0],G=setTimeout(function(){T(t,O.TAP,{type:O.TAP,originEvent:e,fingersCount:o(e),position:Y})},220))}},hold:function(e){var t=e.target;I.hold&&(clearTimeout(M),M=setTimeout(function(){if(N.start){var n=r(N.start[0],N.move?N.move[0]:N.start[0]);I.tapMaxDistance<n||U||T(t,"hold",{type:"hold",originEvent:e,fingersCount:o(e),position:N.start[0]})}},I.holdTime))}},K=function(e){var t=e.target;switch(e.type){case"touchstart":case"mousedown":B=[],H=!0,(!N.start||N.start.length<2)&&(N.start=n(e)),o(e)>=2&&(j=parseInt(s(N.start[0],N.start[1]),10)),A=Date.now(),_=e,W={};var r=t.getBoundingClientRect(),i=document.documentElement;W={top:r.top+(window.pageYOffset||i.scrollTop)-(i.clientTop||0),left:r.left+(window.pageXOffset||i.scrollLeft)-(i.clientLeft||0)},J.hold(e);break;case"touchmove":case"mousemove":if(!H||!N.start)return;N.move=n(e),o(e)>=2?J.pinch(e):k?J.rotateSingleFinger(e):J.swipe(e);break;case"touchend":case"touchcancel":case"mouseup":case"mouseout":if(!H)return;R=e,b?J.pinch(e):k?J.rotateSingleFinger(e):x?J.swipe(e):J.tap(e),f(),j=0,q=0,e.touches&&1===e.touches.length&&(H=!0,k=!0)}},Q=function(){function t(e){C||(e=d.getPCevts(e)),u.forEach(function(t){w(t,e,a,i[e])})}function n(e){C||(e=d.getPCevts(e)),u.forEach(function(t){y(t,e,i[e])})}var r,o,i,a,s=arguments;if(s.length<2||s>4)return console.error("unexpected arguments!");var u="string"===d.getType(s[0])?e.querySelectorAll(s[0]):s[0];if(u=u.length?Array.prototype.slice.call(u):[u],3===s.length&&"string"===d.getType(s[1]))return r=s[1].split(" "),o=s[2],void r.forEach(function(e){C||(e=d.getPCevts(e)),u.forEach(function(t){y(t,e,o)})});if(3!==s.length||"object"!==d.getType(s[1]))if(2!==s.length||"object"!==d.getType(s[1])){if(4===s.length&&"object"===d.getType(s[2]))return r=s[1].split(" "),o=s[3],void r.forEach(function(e){C||(e=d.getPCevts(e)),u.forEach(function(t){y(t,e,o)})});if(4===s.length){var c=u[0];return r=s[1].split(" "),a=s[2],o=s[3],void r.forEach(function(e){C||(e=d.getPCevts(e)),w(c,e,a,o)})}}else{i=s[1];for(var f in i)n(f)}else{i=s[1],a=s[2];for(var l in i)t(l)}},V=function(){var t,n,r=arguments;if(r.length<1||r.length>4)return console.error("unexpected arguments!");var o="string"===d.getType(r[0])?e.querySelectorAll(r[0]):r[0];if(o=o.length?Array.prototype.slice.call(o):[o],1===r.length||2===r.length)return void o.forEach(function(e){t=r[1]?r[1].split(" "):Object.keys(e.listeners),t.length&&t.forEach(function(t){C||(t=d.getPCevts(t)),P(e,t),S(e,t)})});if(3===r.length&&"function"===d.getType(r[2]))return n=r[2],void o.forEach(function(e){t=r[1].split(" "),t.forEach(function(t){C||(t=d.getPCevts(t)),P(e,t,n)})});if(3===r.length&&"string"===d.getType(r[2])){var i=r[2];return void o.forEach(function(e){t=r[1].split(" "),t.forEach(function(t){C||(t=d.getPCevts(t)),S(e,t,i)})})}return 4===r.length?(n=r[3],void o.forEach(function(e){t=r[1].split(" "),t.forEach(function(t){C||(t=d.getPCevts(t)),S(e,t,i,n)})})):void 0},z=function(t,n,r){var o=arguments;C||(n=d.getPCevts(n));var i="string"===d.getType(o[0])?e.querySelectorAll(o[0]):o[0];i=i.length?Array.prototype.call(i):[i],i.forEach(function(e){T(e,n,r)})};v(),t.on=Q,t.off=V,t.bind=Q,t.unbind=V,t.live=Q,t.die=V,t.config=I,t.trigger=z}(document,touch);