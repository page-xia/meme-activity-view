$(function(){!function(){var t=document.createElement("script");t.src="//hm.baidu.com/hm.js?d303aeebc00e96434b3bcf04b88d8666";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)}(),!function(){echo.init({offset:400,throttle:10,unload:!1,callback:function(){}}),window.onload=function(){$(".groupImg").each(function(){var t=$(this).siblings("li").eq(0),a=$(t).innerHeight()-1,e={height:a};$(this).css(e),$(this).find(".groupImg-link").show()})};var t="";$(".product").each(function(a,e){t+=t?","+$(e).data("id"):$(e).data("id")}),t&&$.ajax({url:$("body").data("pis")+"/global/price",type:"get",dataType:"json",traditional:!0,data:{productIds:t},success:function(t){for(var a=t.data,e=0;e<a.length;e++){var i=$(".product[data-id="+a[e].productId+"]");parseInt(a[e].stockStatus)||i.append("<div class='stock-over'>抢光了</div>"),i.find(".pro-shop em").html("美美价:"+parseInt(a[e].price)),i.find(".pro-shop del").html("原价:"+parseInt(a[e].originPrice))}}})}()});