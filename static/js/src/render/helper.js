template.config("openTag","${"),template.config("closeTag","}"),template.config("escape",!0),template.config("compress",!0),template.helper("compare",function(e,r,t,n){if(arguments.length<3)throw new Error('Handlerbars Helper "compare" needs 2 parameters');var o={"==":function(e,r){return e==r},"===":function(e,r){return e===r},"!=":function(e,r){return e!=r},"!==":function(e,r){return e!==r},"<":function(e,r){return r>e},">":function(e,r){return e>r},"<=":function(e,r){return r>=e},">=":function(e,r){return e>=r},"typeof":function(e,r){return typeof e==r}};if(!o[r])throw new Error('Handlerbars Helper "compare" doesn\'t know the operator '+r);var a=o[r](e,t);return a?n.fn(this):n.inverse(this)}),template.helper("link",function(e,r){if(e&&0!=r&&2!=r){if(appVer.androidVer()>=400||appVer.iosVer()>=400||appVer.iosAlias()>=400){var t={domain:"product",action:"detail",data:{productId:e,url:location.href}};return"memebox://"+encodeURIComponent(JSON.stringify(t))}return $("body").data("pc")+"/catalog/product/view/id/"+e}return"javascript:void(0)"}),template.helper("mlink",function(e,r){if(e&&0!=r&&2!=r){if(appVer.androidVer()>=400||appVer.iosVer()>=400||appVer.iosAlias()>=400){var t={domain:"product",action:"detail",data:{productId:e,url:location.href}};return"memebox://"+encodeURIComponent(JSON.stringify(t))}return $("body").data("m")+"/m/productDetails/productDetails.html?p="+e}return"javascript:void(0)"});