define(function(e){var n=e("./lib"),t=e("./runtime"),i=e("./configs"),o={},r={};o.version="alpha",o.api={},o.inRuntime=function(){return!1};var u={DOMPrefix:"data-ui",classPrefix:{ui:"ui",skin:"skin",state:"state"}};return o.config=function(e){n.extend(u,e)},o.getConfig=function(e){return u[e]},o.getUI=function(e){e=$(e)[0];do{if(console.log(e),!e||9==e.nodeType)return null;if(e.getAttribute("data-blend"))return r[e.getAttribute("data-blend-id")]}while((e=e.parentNode)!=document.body)},o.register=function(e){console.log("reg: "+e.id),r[e.id]=e},o.cancel=function(e){delete r[e.id]},o.create=function(){},o.get=function(e){return r[e]},o.api.layer=t.layer,o.api.layerGroup=t.layerGroup,o.api.component=t.component,o.configs=i,o});