define(function(){var e={},t={};e.prepare=function(e,n,o){o.state="getting",$.ajax({url:n.url,type:"get",success:function(e){o.main.innerHTML=e,o.state="",n.onsuccess&&n.onsuccess(e),o.fire("afterrender")},error:function(e){o.state="",n.onfail&&n.onfail(e),me.fire("renderfailed")}}),t.id=o,$(o.main).css({top:n.top||0,left:n.left||0,right:n.right||0,bottom:n.bottom||0})},e.resume=function(e,t,n){n.state?n.on("afterrender",function(){$("#"+n.main.id).length||$(n.main).appendTo(".pages")}):$("#"+n.main.id).length||$(n.main).appendTo(".pages")};var n={};return e.startPullRefresh=function(e){var t=$(e.main).find(".page-content");if(!t.length)return void console.log("pull to refresh should has .page-content");t.addClass("pull-to-refresh-content"),$(".pull-to-refresh-layer",e.main).length||$(".page-content",e.main).prepend('<div class="pull-to-refresh-layer"> <div class="preloader"></div> <div class="pull-to-refresh-arrow"></div> </div>');var o,a,r,s,l,i={},u=!1,d=!1,c=0;n.handleTouchStart=function(e){o||(a=!1,o=!0,r=void 0,i.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,l=(new Date).getTime())};var h=function(t){t.removeClass("refreshing").addClass("transitioning"),e.transitionEnd(function(){t.removeClass("transitioning pull-up")})};n.handleTouchMove=function(e){if(o){var n="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,l="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY;return"undefined"==typeof r&&(r=!!(r||Math.abs(l-i.y)>Math.abs(n-i.x))),r?(a||(t.removeClass("transitioning"),c=t.hasClass("refreshing")?44:0,d=!0),a=!0,s=l-i.y,s>0&&t[0].scrollTop<=0||t[0].scrollTop<0?(d&&(e.preventDefault(),t[0].style.webkitTransform="translate3d(0,"+(Math.pow(s,.85)+c)+"px,0)"),void(d&&Math.pow(s,.85)>44||!d&&s>=88?(u=!0,t.addClass("pull-up")):(u=!1,t.removeClass("pull-up")))):(t.removeClass("pull-up"),void(u=!1))):void(o=!1)}},n.handleTouchEnd=function(){return o&&a?(t.addClass("transitioning"),t[0].style.webkitTransform="",u&&(t.addClass("refreshing"),e.fire("layerPullDown"),e.once("layerPullEnd",function(){h(t)})),o=!1,void(a=!1)):(o=!1,void(a=!1))},e.on("touchstart",n.handleTouchStart),e.on("touchmove",n.handleTouchMove),e.on("touchend",n.handleTouchEnd)},e.endPullRefresh=function(e){e.fire("layerPullEnd")},e.stopPullRefresh=function(e){$(e.main).removeClass("pull-to-refresh-content"),e.off("touchstart",n.handleTouchStart),e.off("touchmove",n.handleTouchMove),e.off("touchend",n.handleTouchEnd)},e});