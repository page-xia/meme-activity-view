!function(){function n(n){$(this).find("i").toggleClass("rotate180"),n?$(".stab-pop").hide():$(".stab-pop").toggle()}function t(n,t,e){var l=$(this).data("index");l!=$(".nav-item-selected").data("index")&&($("#nav-wrap ."+n).removeClass(n),$(this).addClass(n),$("#nav-wrap ."+t).removeClass(t),$($("#"+e).children()[l]).addClass(t),i(l),a())}function e(){var n=$(this).data("anchor"),t=$(".anchor-ele[name="+n+"]");if(0!=t.length){var e=t.position().top,a=jQuery("html, body");a.scrollTop(e||0)}}function a(){var n=($(".nav-item-selected").css("width"),$($("#navInner a")[0]).offset().left),t=$(".nav-item-selected").offset().left,e=t-n;$(".nav-bottom-line").css({width:$(".nav-item-selected").css("width"),display:"block",left:e+"px"})}function i(n){var t=$($("#navInner a")[n]).offset().left,e=$($("#navInner a")[0]).offset().left,a=$("body").width()/2,i=t-e-a;$("#navOuter").scrollLeft(i)}var l=0;document.getElementById("noMove")&&document.getElementById("noMove").addEventListener("touchmove",function(n){n.preventDefault()}),$("#navInner a").each(function(n,t){l+=$(t).width()+20});var o=$("#navInner .nav-item").length;5>o?($("#navInner").addClass("navShort"),$("#navInner .nav-item").each(function(n,t){$(t).css({width:($("body").width()-45)/o})})):$("#navInner").css({width:l+45+"px"}),$(".stab-more").click(function(){n.call(this)}),$(".no-move").click(function(){n.call(this)}),$("#newWrap").on("click",".nav-item",function(){t.call(this,"nav-item-selected","liOn","topNavUl"),e.call(this),n(!0)}),$("#nav-wrap .stab-pop ul").on("click","li",function(){t.call(this,"liOn","nav-item-selected","navInner"),e.call(this),n()})}();