!function(){touch.on(document,"DOMContentLoaded",function(){function t(t){c.innerText=t}function e(t){if(n!==t){n=t,a.innerHTML="";var e=document.createElement("img");e.id="target",e.draggable=!1,e.src="images/cloud.png",a.appendChild(e),u[t](),o.innerHTML=document.querySelector(i+t+r).innerHTML.trim(),runhijs(),setTimeout(function(){e.classList.add("show")},10)}}var n="",o=document.querySelector("#code .viewport"),a=document.querySelector("#playarea"),c=document.querySelector("#logger"),i="#codes #",r="-code",s=document.querySelector("#nav #nl");touch.on(s,"touchstart","li",function(t){var n=t.target.innerText.trim().toLowerCase();n.indexOf("&")>0&&(n="tap"),t.target.classList.contains("active")||(s.querySelector(".active").classList.remove("active"),setTimeout(function(){t.target.classList.add("active"),e(n)},10))});var u={rotate:function(){t("利用startRotate, 单指触发滚动事件");var e=0;touch.on("#target","touchstart",function(t){t.startRotate(),t.preventDefault()}),touch.on("#target","rotate",function(n){var o=e+n.rotation;"end"===n.fingerStatus&&(e+=n.rotation,t("此次滚动角度为:"+n.rotation+"度, 方向:"+n.direction+".")),this.style.webkitTransform="rotate("+o+"deg)"})},scale:function(){t("双指放大与缩小目标.");var e=document.getElementById("target");e.style.webkitTransition="all ease 0.05s",touch.on("#target","touchstart",function(t){t.preventDefault()});var n,o=1;touch.on("#target","pinchend",function(e){n=e.scale-1,n=o+n,n=n>2?2:n,n=1>n?1:n,this.style.webkitTransform="scale("+n+")",t("当前缩放比例为:"+n+".")}),touch.on("#target","pinchend",function(){o=n})},tap:function(){t("识别tap, doubletap和hold事件."),touch.on("#target","hold tap doubletap",function(e){t("当前事件为: "+e.type);var n=this;this.classList.add("bounce"),touch.on(this,"webkitAnimationEnd",function(){n.classList.remove("bounce")})})},swipe:function(){var e=168,n=a.offsetWidth,o=document.getElementById("target").offsetLeft,c=n-e-o;t("向左, 向右swipe滑动"),touch.on("#target","touchstart",function(t){t.preventDefault()});var i=document.getElementById("target");i.style.webkitTransition="all ease 0.2s",touch.on(i,"swiperight",function(){this.style.webkitTransform="translate3d("+c+"px,0,0)",t("向右滑动.")}),touch.on(i,"swipeleft",function(){t("向左滑动."),this.style.webkitTransform="translate3d(-"+this.offsetLeft+"px,0,0)"})},drag:function(){t("抓取并移动目标"),touch.on("#target","touchstart",function(t){t.preventDefault()});{var e,n;document.getElementById("target")}touch.on("#target","drag",function(t){e=e||0,n=n||0;var o=e+t.x+"px",a=n+t.y+"px";this.style.webkitTransform="translate3d("+o+","+a+",0)"}),touch.on("#target","dragend",function(o){e+=o.x,n+=o.y,t("当前x值为:"+e+", 当前y值为:"+n+".")})},touch:function(){t("识别原生事件"),touch.on("#target","touchstart",function(t){t.preventDefault()}),touch.on("#target","touchstart touchmove touchend",function(e){var n=this;this.classList.contains("bounce")||("mousedown"===e.type||"touchstart"===e.type)&&(this.classList.add("bounce"),touch.on(this,"webkitAnimationEnd",function(){n.classList.remove("bounce")})),t("当前为原生事件: "+e.type)})}};!function(){e("rotate"),s.querySelector("li").classList.add("active")}()})}();