define(function(){var e={},t=["layerCreateSuccess","layerLoadFinish","layerPullDown","tap","slide"],n={};return e.on=function(e,l,i,r){if(i=i||this.getCurrentId&&this.getCurrentId()||"empty",r=r||this,n[e]){for(var a=0,c=n[e].listener,s=c.length;s>a&&(c[a].id!=i||c[a].callback!=l||c[a].context!=r);a++);a==s&&n[e].listener.push({id:i,context:r,callback:l}),n[e].listened||(document.addEventListener(e,n[e].callback,!1),n[e].listened=!0)}else n[e]={},n[e].listener=[],n[e].callback=t.indexOf(e)<0?function(t){var l=JSON.parse(t.data),i=n[e].listener;t.origin=t.sender||l.origin,t.data=l.data,t.reciever=t.target=l.target;for(var r=0,a=i.length;a>r;r++)i[r].callback.call(i[r].context,t,i[r].id)}:function(t){for(var l=n[e].listener,i=0,r=l.length;r>i;i++)l[i].id==t.origin&&l[i].callback.call(l[i].context,t,l[i].id)},this.on(e,l,i,r)},e.off=function(e,t,l,i){if(l=l||this.getCurrentId&&this.getCurrentId()||"empty",i=i||this,n[e])if(t){for(var r=0,a=n[e].listener,c="all"==t,s=a.length;s>r;r++)if(a[r].id==l&&a[r].context==i&&(c||a[r].callback==t)){a.splice&&a.splice(r,1);break}0==a.length&&n[e].listened&&(document.removeEventListener(e,n[e].callback),n[e].listened=!1)}else document.removeEventListener(e,n[e].callback),n[e].listened=!1,n[e].listener=[];else console.log("无此事件绑定")},e});