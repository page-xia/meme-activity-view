!function(){(appVer.androidVer()>=400||appVer.iosVer()>=400||appVer.iosAlias()>=400)&&($(".newcomer a,.newcomercomment a").each(function(){var o=$(this).data("id");console.log(o);var e={domain:"product",action:"detail",data:{productId:o,url:location.href}},a="memebox://"+encodeURIComponent(JSON.stringify(e));$(this).attr("href",a)}),$(".comment-item").each(function(){var o=$(this).data("id"),e={domain:"product",action:"detail",data:{productId:o,url:location.href}},a="memebox://"+encodeURIComponent(JSON.stringify(e));$(this).attr("href",a)}));new Swiper(".swiper-container",{slidesPerView:"auto",spaceBetween:0});vue.isApp()&&localStorage.removeItem("mmToken"),$(".getCouponBtn").click(function(){$(this).attr("data-ruleids")&&(localStorage.ruleids=$(this).attr("data-ruleids")),$(this).hasClass("over")||(_maq.push(["_trackEvent","collarcoupon_check",{Platform:vue.getPlatform()}]),vue.isApp()?(localStorage.ref=location.href,localStorage.source=17,window.callByJS&&window.callByJS({domain:"user",action:"userinfo",callback:function(o){o&&o.data&&o.data.token&&(localStorage.mmToken=o.data.token,getNewcomerconpon()),setTimeout(function(){localStorage.mmToken||vue.app_login({source:17,channel:17,type:"register"},function(o){o&&o.data&&o.data.token&&(localStorage.mmToken=o.data.token,getNewcomerconpon())})},100)}})):($(this).attr("data-ruleids")&&(localStorage.ruleids=$(this).attr("data-ruleids")),localStorage.mmToken?getNewcomerconpon():(localStorage.ref=location.href,localStorage.source=17,location.href="/m/account/login.html?source=17")))}),localStorage.couponToken&&window.callByJS&&window.callByJS({domain:"user",action:"userinfo",callback:function(o){o&&o.data&&o.data.token&&(localStorage.mmToken=o.data.token,localStorage.couponToken==o.data.token&&($(".newcomercoupon li").addClass("over"),$(".getCouponBtn").addClass("over")))}})}(),window.getNewcomerconpon=function(){var o=$(".dislog");!localStorage.ruleids||!localStorage.mmToken||localStorage.couponToken&&localStorage.couponToken==localStorage.mmToken?localStorage.couponToken&&localStorage.mmToken&&localStorage.couponToken==localStorage.mmToken&&($(".newcomercoupon li").addClass("over"),$(".getCouponBtn").addClass("over")):($(".getCouponBtn").addClass("over"),$.ajax({url:$("body").attr("data-pc")+"/h5/getcoupon/batchBind",type:"get",dataType:"json",data:{token:localStorage.mmToken,ruleIds:localStorage.ruleids},traditional:!0,success:function(e){localStorage.mmToken&&(localStorage.couponToken=localStorage.mmToken),$(".newcomercoupon li").addClass("over"),$(".getCouponBtn").addClass("over"),e.msg&&(o.html(e.msg).addClass("show"),localStorage.removeItem("ruleids"),setTimeout(function(){$(".dislog").removeClass("show")},3e3))}}))};