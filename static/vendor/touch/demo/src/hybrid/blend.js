define(function(e){var n=e("../common/lib"),t=e("./runtime"),i={},r={};i.version="alpha",i.api={},i.inRuntime=function(){return!1};var u={DOMPrefix:"data-ui",classPrefix:{ui:"ui",skin:"skin",state:"state"}};return i.config=function(e){n.extend(u,e)},i.getConfig=function(e){return u[e]},i.getUI=function(e){e=$(e)[0];do{if(!e||9==e.nodeType)return null;if(e.getAttribute("data-blend"))return r[e.getAttribute("data-blend-id")]}while((e=e.parentNode)!=document.body)},i.register=function(e){r[e.id]=e},i.cancel=function(e){delete r[e.id]},i.create=function(){},i.get=function(e){return r[e]},i.api.layer=t.layer,i});