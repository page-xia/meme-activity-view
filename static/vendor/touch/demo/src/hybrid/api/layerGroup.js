define(function(){var r={},e=window.devicePixelRatio||2;return r.create=function(r,i,n){var o={id:r||uniqid(),infos:i};n.active&&(o.active=n.active);var d={};return["left","top","width","height"].forEach(function(r){void 0!==n[r]&&(d[r]=n[r]*e)}),window.lc_bridge.addLayerGroup(JSON.stringify(o),JSON.stringify(d)),r},r.showLayer=function(r,e){return window.lc_bridge.showLayerInGroup(r,e),r},r.addLayer=function(r,e){return window.lc_bridge.addLayerInGroup(r,e,index),r},r.removeLayer=function(r,e){return window.lc_bridge.removeLayerInGroup(r,e),r},r.updateLayer=function(r,e,i){return window.lc_bridge.updateLayerInGroup(r,e,i),r},r});